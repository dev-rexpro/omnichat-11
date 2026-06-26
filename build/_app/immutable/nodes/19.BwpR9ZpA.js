import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop } from "../chunks/CISwU846.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(async () => {
    await goto("/admin/users/overview");
  });
  init();
  pop();
}
export {
  _page as component
};
