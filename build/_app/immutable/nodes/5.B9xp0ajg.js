import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, j as deferred_template_effect, k as set, $ as $document, l as get, e as store_get, m as mutable_source } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { s as slot } from "../chunks/DbvU-2C8.js";
import { h as head } from "../chunks/BFlQQsyk.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { c as config, u as user, W as WEBUI_NAME } from "../chunks/C2d9K3Bp.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
function _layout($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f;
    if (!((((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true)))) {
      goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  head("1v8al8m", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Notes")]
    );
  });
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(node_1, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
