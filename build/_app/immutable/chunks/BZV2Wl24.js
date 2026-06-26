import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { c as child, r as reset, a as append, f as from_html, p as push, t as template_effect, x as deep_read_state, z as untrack, b as pop } from "./CISwU846.js";
import { s as slot } from "./DbvU-2C8.js";
import { a as set_attribute, s as set_class } from "./CpNYkTX2.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { a as WEBUI_BASE_URL } from "./Cjpn_aRT.js";
import { s as safeImageUrl } from "./CiZwScVd.js";
var root$1 = from_html(`<div class=" self-center font-semibold line-clamp-1 flex gap-1 items-center"><!></div>`);
function Name($$anchor, $$props) {
  var div = root$1();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  append($$anchor, div);
}
var root = from_html(`<img aria-hidden="true" alt="profile" draggable="false"/>`);
function ProfileImage($$anchor, $$props) {
  push($$props, false);
  let className = prop($$props, "className", 8, "size-8");
  let src = prop($$props, "src", 24, () => `${WEBUI_BASE_URL}/static/favicon.png`);
  init();
  var img = root();
  template_effect(
    ($0) => {
      set_attribute(img, "src", $0);
      set_class(img, 1, ` ${className() ?? ""} object-cover rounded-full`);
    },
    [
      () => (deep_read_state(safeImageUrl), deep_read_state(src()), untrack(() => safeImageUrl(src())))
    ]
  );
  append($$anchor, img);
  pop();
}
export {
  Name as N,
  ProfileImage as P
};
