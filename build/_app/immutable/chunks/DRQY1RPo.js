const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BwSDK2sm.js","./OO7lCI-F.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./CQrtv1eE.js";
const EMU_PER_PX = 9525;
const emuToPx = (emu) => Math.round(emu / EMU_PER_PX);
const parseEmu = (val) => val ? parseInt(val, 10) || 0 : 0;
const loadImage = (src) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.onerror = () => reject(new Error("Failed to load image"));
  img.src = src;
});
async function pptxToImages(buffer) {
  var _a, _b;
  const JSZip = (await __vitePreload(async () => {
    const { default: __vite_default__ } = await import("./BwSDK2sm.js").then((n) => n.j);
    return { default: __vite_default__ };
  }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url)).default;
  const zip = await JSZip.loadAsync(buffer);
  let slideW = 960;
  let slideH = 540;
  const presXml = zip.file("ppt/presentation.xml");
  if (presXml) {
    const presText = await presXml.async("text");
    const presDoc = new DOMParser().parseFromString(presText, "application/xml");
    const sldSz = presDoc.getElementsByTagName("p:sldSz")[0];
    if (sldSz) {
      slideW = emuToPx(parseEmu(sldSz.getAttribute("cx")));
      slideH = emuToPx(parseEmu(sldSz.getAttribute("cy")));
    }
  }
  const media = {};
  const mediaFiles = Object.keys(zip.files).filter((f) => f.startsWith("ppt/media/"));
  await Promise.all(
    mediaFiles.map(async (path) => {
      var _a2;
      const file = zip.file(path);
      if (!file) return;
      const base64 = await file.async("base64");
      const ext = ((_a2 = path.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) ?? "";
      const mime = ext === "png" ? "image/png" : ext === "gif" ? "image/gif" : ext === "svg" ? "image/svg+xml" : ext === "emf" || ext === "wmf" ? "image/x-emf" : "image/jpeg";
      media[path] = `data:${mime};base64,${base64}`;
    })
  );
  const slideFiles = Object.keys(zip.files).filter((f) => /^ppt\/slides\/slide\d+\.xml$/.test(f)).sort((a, b) => {
    var _a2, _b2;
    const na = parseInt(((_a2 = a.match(/slide(\d+)/)) == null ? void 0 : _a2[1]) ?? "0");
    const nb = parseInt(((_b2 = b.match(/slide(\d+)/)) == null ? void 0 : _b2[1]) ?? "0");
    return na - nb;
  });
  const images = [];
  for (const slidePath of slideFiles) {
    const slideText = await zip.file(slidePath).async("text");
    const slideDoc = new DOMParser().parseFromString(slideText, "application/xml");
    const slideNum = (_a = slidePath.match(/slide(\d+)/)) == null ? void 0 : _a[1];
    const relsPath = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
    const rels = {};
    const relsFile = zip.file(relsPath);
    if (relsFile) {
      const relsText = await relsFile.async("text");
      const relsDoc = new DOMParser().parseFromString(relsText, "application/xml");
      const relEls = relsDoc.getElementsByTagName("Relationship");
      for (let i = 0; i < relEls.length; i++) {
        const rel = relEls[i];
        const id = rel.getAttribute("Id") ?? "";
        const target = rel.getAttribute("Target") ?? "";
        if (target.startsWith("../")) {
          rels[id] = "ppt/" + target.replace("../", "");
        } else {
          rels[id] = target;
        }
      }
    }
    const canvas = document.createElement("canvas");
    canvas.width = slideW;
    canvas.height = slideH;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, slideW, slideH);
    const spTree = slideDoc.getElementsByTagName("p:spTree")[0];
    if (!spTree) {
      images.push(canvas.toDataURL("image/png"));
      continue;
    }
    const shapes = [
      ...Array.from(spTree.getElementsByTagName("p:sp")),
      ...Array.from(spTree.getElementsByTagName("p:pic"))
    ];
    for (const shape of shapes) {
      const xfrm = shape.getElementsByTagName("a:xfrm")[0] ?? shape.getElementsByTagName("p:xfrm")[0];
      if (!xfrm) continue;
      const off = xfrm.getElementsByTagName("a:off")[0];
      const ext = xfrm.getElementsByTagName("a:ext")[0];
      if (!off || !ext) continue;
      const x = emuToPx(parseEmu(off.getAttribute("x")));
      const y = emuToPx(parseEmu(off.getAttribute("y")));
      const w = emuToPx(parseEmu(ext.getAttribute("cx")));
      const h = emuToPx(parseEmu(ext.getAttribute("cy")));
      if (w === 0 && h === 0) continue;
      const blipFill = shape.getElementsByTagName("p:blipFill")[0];
      if (blipFill) {
        const blip = blipFill.getElementsByTagName("a:blip")[0];
        if (blip) {
          const rEmbed = blip.getAttribute("r:embed") ?? "";
          const mediaPath = rels[rEmbed];
          const dataUri = mediaPath ? media[mediaPath] : "";
          if (dataUri && !dataUri.includes("image/x-emf")) {
            try {
              const img = await loadImage(dataUri);
              ctx.drawImage(img, x, y, w, h);
            } catch {
            }
          }
        }
        continue;
      }
      const txBody = shape.getElementsByTagName("p:txBody")[0];
      if (!txBody) continue;
      ctx.save();
      ctx.rect(x, y, w, h);
      ctx.clip();
      const paragraphs = txBody.getElementsByTagName("a:p");
      let cursorY = y;
      const defaultFontSize = 12;
      for (let pi = 0; pi < paragraphs.length; pi++) {
        const para = paragraphs[pi];
        const runs = para.getElementsByTagName("a:r");
        if (runs.length === 0) {
          cursorY += defaultFontSize * 1.5;
          continue;
        }
        let maxFontPt = defaultFontSize;
        for (let ri = 0; ri < runs.length; ri++) {
          const rPr = runs[ri].getElementsByTagName("a:rPr")[0];
          if (rPr) {
            const sz = rPr.getAttribute("sz");
            if (sz) {
              const pt = parseInt(sz, 10) / 100;
              if (pt > maxFontPt) maxFontPt = pt;
            }
          }
        }
        const lineHeight = maxFontPt * 1.4;
        cursorY += maxFontPt;
        let cursorX = x + 4;
        for (let ri = 0; ri < runs.length; ri++) {
          const run = runs[ri];
          const rPr = run.getElementsByTagName("a:rPr")[0];
          const text = ((_b = run.getElementsByTagName("a:t")[0]) == null ? void 0 : _b.textContent) ?? "";
          if (!text) continue;
          let fontPt = defaultFontSize;
          let bold = false;
          let italic = false;
          let color = "#000000";
          if (rPr) {
            if (rPr.getAttribute("b") === "1") bold = true;
            if (rPr.getAttribute("i") === "1") italic = true;
            const sz = rPr.getAttribute("sz");
            if (sz) fontPt = parseInt(sz, 10) / 100;
            const solidFill = rPr.getElementsByTagName("a:solidFill")[0];
            if (solidFill) {
              const srgb = solidFill.getElementsByTagName("a:srgbClr")[0];
              if (srgb) {
                const val = srgb.getAttribute("val");
                if (val) color = `#${val}`;
              }
            }
          }
          ctx.font = `${italic ? "italic " : ""}${bold ? "bold " : ""}${fontPt}pt Calibri, Arial, sans-serif`;
          ctx.fillStyle = color;
          ctx.textBaseline = "alphabetic";
          const words = text.split(/(\s+)/);
          for (const word of words) {
            const metrics = ctx.measureText(word);
            if (cursorX + metrics.width > x + w && cursorX > x + 4) {
              cursorX = x + 4;
              cursorY += lineHeight;
            }
            if (cursorY > y + h) break;
            ctx.fillText(word, cursorX, cursorY);
            cursorX += metrics.width;
          }
        }
        cursorY += lineHeight * 0.4;
      }
      ctx.restore();
    }
    images.push(canvas.toDataURL("image/png"));
  }
  return { images, width: slideW, height: slideH };
}
export {
  pptxToImages
};
