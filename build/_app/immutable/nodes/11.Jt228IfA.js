import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, e as store_get } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { c as config } from "../chunks/C2d9K3Bp.js";
import { A as Analytics } from "../chunks/spIMlYzw.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    var _a;
    if (!(((_a = $config()) == null ? void 0 : _a.features.enable_admin_analytics) ?? true)) {
      goto("/admin");
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Analytics($$anchor2, {});
    };
    if_block(node, ($$render) => {
      var _a;
      if (((_a = $config()) == null ? void 0 : _a.features.enable_admin_analytics) ?? true) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
