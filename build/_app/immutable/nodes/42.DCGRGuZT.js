import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, k as set, l as get, m as mutable_source, e as store_get } from "../chunks/CISwU846.js";
import { k as key } from "../chunks/-PfhJFwZ.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { c as createNewPrompt } from "../chunks/Df2aLUWE.js";
import { P as PromptEditor } from "../chunks/CcjI30g0.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  let clone = mutable_source(false);
  const onSubmit = async (_prompt) => {
    const res = await createNewPrompt(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Prompt created successfully"));
      await goto("/workspace/prompts");
    }
  };
  onMount(async () => {
    window.addEventListener("message", async (event) => {
      /* @__PURE__ */ console.log(event);
      if (![
        "https://omnichat.rexpro.com",
        "https://www.openwebui.com",
        "http://localhost:9999"
      ].includes(event.origin)) return;
      const _prompt = JSON.parse(event.data);
      /* @__PURE__ */ console.log("Received prompt via window message:", _prompt);
      set(clone, true);
      set(prompt, {
        name: _prompt.name || _prompt.title || "Prompt",
        command: _prompt.command,
        content: _prompt.content,
        tags: _prompt.tags || [],
        access_grants: _prompt.access_grants !== void 0 ? _prompt.access_grants : []
      });
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.prompt) {
      const _prompt = JSON.parse(sessionStorage.prompt);
      sessionStorage.removeItem("prompt");
      /* @__PURE__ */ console.log("Received prompt via sessionStorage:", _prompt);
      set(clone, true);
      set(prompt, {
        name: _prompt.name || _prompt.title || "Prompt",
        command: _prompt.command,
        content: _prompt.content,
        tags: _prompt.tags || [],
        access_grants: _prompt.access_grants !== void 0 ? _prompt.access_grants : []
      });
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(prompt), ($$anchor2) => {
    PromptEditor($$anchor2, {
      get prompt() {
        return get(prompt);
      },
      onSubmit,
      get clone() {
        return get(clone);
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
