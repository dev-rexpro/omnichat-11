import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, k as set, l as get, m as mutable_source, e as store_get } from "../chunks/CISwU846.js";
import { k as key } from "../chunks/-PfhJFwZ.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { a as models, c as config, b as settings } from "../chunks/C2d9K3Bp.js";
import { a as WEBUI_BASE_URL } from "../chunks/Cjpn_aRT.js";
import { c as createNewModel } from "../chunks/9h7iXfi0.js";
import { g as getModels } from "../chunks/EH47ywF7.js";
import { M as ModelEditor } from "../chunks/0WABBSEa.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    if ($models().find((m) => m.id === modelInfo.id)) {
      toast.error($i18n().t("Error: A model with the ID '{{modelId}}' already exists. Please select a different ID to proceed.", { modelId: modelInfo.id }));
      return;
    }
    if (modelInfo.id === "") {
      toast.error($i18n().t("Error: Model ID cannot be empty. Please enter a valid ID to proceed."));
      return;
    }
    if (modelInfo) {
      const res = await createNewModel(localStorage.token, {
        ...modelInfo,
        meta: {
          ...modelInfo.meta,
          profile_image_url: modelInfo.meta.profile_image_url ?? `${WEBUI_BASE_URL}/static/favicon.png`,
          suggestion_prompts: modelInfo.meta.suggestion_prompts ? modelInfo.meta.suggestion_prompts.filter((prompt) => prompt.content !== "") : null
        },
        params: { ...modelInfo.params }
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
        toast.success($i18n().t("Model created successfully!"));
        await goto("/workspace/models");
      }
    }
  };
  let model = mutable_source(null);
  onMount(() => {
    const handleMessageEvent = async (event) => {
      if (![
        "https://omnichat.rexpro.com",
        "https://www.openwebui.com",
        "http://localhost:9999"
      ].includes(event.origin)) {
        return;
      }
      try {
        let data = JSON.parse(event.data);
        if (data == null ? void 0 : data.info) {
          data = data.info;
        }
        set(model, data);
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to parse message data:", e);
      }
    };
    window.addEventListener("message", handleMessageEvent);
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.model) {
      set(model, JSON.parse(sessionStorage.model));
      sessionStorage.removeItem("model");
    }
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(model), ($$anchor2) => {
    ModelEditor($$anchor2, {
      get model() {
        return get(model);
      },
      onSubmit
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
