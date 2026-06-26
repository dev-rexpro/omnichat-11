import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, F as from_svg } from "./CISwU846.js";
import { a as set_attribute, s as set_class, c as clsx } from "./CpNYkTX2.js";
import { p as prop } from "./BFaWdt2I.js";
var root$1 = from_svg(`<svg viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"><path d="M9.5 14.5L3 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Pin($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root = from_svg(`<svg viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24"><path d="M9.5 14.5L3 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.67602 7.8896L6.69713 7.78823L5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.7879 16M11.4847 7L15.1568 2.67141L21.0065 8.5211L16.6991 12.175" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function PinSlash($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  PinSlash as P,
  Pin as a
};
