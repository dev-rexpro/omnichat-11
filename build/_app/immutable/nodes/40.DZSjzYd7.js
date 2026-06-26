import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, k as set, l as get, e as store_get, m as mutable_source } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { p as page } from "../chunks/B2F-VN7c.js";
import { a as models, c as config, b as settings } from "../chunks/C2d9K3Bp.js";
import { g as getModelById, u as updateModelById } from "../chunks/9h7iXfi0.js";
import { g as getModels } from "../chunks/EH47ywF7.js";
import { M as ModelEditor } from "../chunks/0WABBSEa.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let model = mutable_source(null);
  onMount(async () => {
    var _a;
    const _id = $page().url.searchParams.get("id");
    if (_id) {
      set(model, await getModelById(localStorage.token, _id).catch((e) => {
        return null;
      }));
      if (!get(model)) {
        goto("/workspace/models");
      }
      if (!((_a = get(model)) == null ? void 0 : _a.write_access)) {
        toast.error($i18n().t("You do not have permission to edit this model"));
        goto("/workspace/models");
      }
    } else {
      goto("/workspace/models");
    }
  });
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    const res = await updateModelById(localStorage.token, modelInfo.id, modelInfo);
    if (res) {
      await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      toast.success($i18n().t("Model updated successfully"));
      await goto("/workspace/models");
    }
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      ModelEditor($$anchor2, {
        edit: true,
        get model() {
          return get(model);
        },
        onSubmit
      });
    };
    if_block(node, ($$render) => {
      if (get(model)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
