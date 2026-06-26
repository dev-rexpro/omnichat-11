import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, k as set, l as get, e as store_get, m as mutable_source, c as child, r as reset, u as derived_safe_equal, f as from_html } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { p as page } from "../chunks/B2F-VN7c.js";
import { a as getToolById, b as updateToolById, g as getTools } from "../chunks/1FYPZhvT.js";
import { S as Spinner } from "../chunks/7N5LES1L.js";
import { T as ToolkitEditor } from "../chunks/DE9KQeET.js";
import { W as WEBUI_VERSION } from "../chunks/Cjpn_aRT.js";
import { t as tools } from "../chunks/C2d9K3Bp.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/7pK2BKln.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
var root = from_html(`<div class="flex items-center justify-center h-full"><div class=" pb-16"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let tool = mutable_source(null);
  const saveHandler = async (data) => {
    /* @__PURE__ */ console.log(data);
    const manifest = extractFrontmatter(data.content);
    if (compareVersion((manifest == null ? void 0 : manifest.required_open_webui_version) ?? "0.0.0", WEBUI_VERSION)) {
      /* @__PURE__ */ console.log("Version is lower than required");
      toast.error($i18n().t("Omnichat version (v{{OPEN_WEBUI_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})", {
        OPEN_WEBUI_VERSION: WEBUI_VERSION,
        REQUIRED_VERSION: (manifest == null ? void 0 : manifest.required_open_webui_version) ?? "0.0.0"
      }));
      return;
    }
    const res = await updateToolById(localStorage.token, get(tool).id, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content,
      access_grants: data.access_grants
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Tool updated successfully"));
      tools.set(await getTools(localStorage.token));
    }
  };
  onMount(async () => {
    /* @__PURE__ */ console.log("mounted");
    const id = $page().url.searchParams.get("id");
    if (id) {
      const res = await getToolById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        goto("/workspace/tools");
        return null;
      });
      if (res && !res.write_access) {
        toast.error($i18n().t("You do not have permission to edit this tool"));
        goto("/workspace/tools");
        return;
      }
      if (res) {
        set(tool, res);
        /* @__PURE__ */ console.log(get(tool));
      }
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => get(tool).access_grants ?? []);
        ToolkitEditor($$anchor2, {
          edit: true,
          get id() {
            return get(tool).id;
          },
          get name() {
            return get(tool).name;
          },
          get meta() {
            return get(tool).meta;
          },
          get content() {
            return get(tool).content;
          },
          get accessGrants() {
            return get($0);
          },
          onSave: (value) => {
            saveHandler(value);
          }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(tool)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
