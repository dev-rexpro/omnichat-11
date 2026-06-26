import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, q as event, aV as $window, i as first_child, c as child, r as reset, l as get, k as set, n as sibling, a as append, b as pop, m as mutable_source, aW as mutate, B as tick, X as effect, t as template_effect, f as from_html } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition } from "./CjS5To7p.js";
import { a as action } from "./22PI2KxS.js";
import { s as set_class, c as clsx, d as set_style } from "./CpNYkTX2.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { f as flyAndScale } from "./CZ-Bw2qQ.js";
var root = from_html(`<div><div><!></div></div>`);
var root_1 = from_html(`<div class="w-full"><!></div> <!>`, 1);
function DropdownSub($$anchor, $$props) {
  push($$props, false);
  let contentClass = prop($$props, "contentClass", 8, "select-none rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100 dark:border-gray-800");
  let maxWidth = prop($$props, "maxWidth", 8, 200);
  let sideOffset = prop($$props, "sideOffset", 8, 8);
  let open = mutable_source(false);
  let triggerEl = mutable_source();
  let contentEl = mutable_source();
  function positionContent() {
    var _a;
    if (!get(triggerEl) || !get(contentEl)) return;
    const rect = get(triggerEl).getBoundingClientRect();
    mutate(contentEl, get(contentEl).style.position = "fixed");
    mutate(contentEl, get(contentEl).style.zIndex = "99999");
    mutate(contentEl, get(contentEl).style.paddingLeft = "0");
    mutate(contentEl, get(contentEl).style.paddingRight = "0");
    const innerContent = get(contentEl).firstElementChild;
    const parentContainer = (_a = get(triggerEl).closest('[class*="rounded"]')) == null ? void 0 : _a.parentElement;
    if (parentContainer && innerContent) {
      const parentWidth = parentContainer.offsetWidth;
      if (parentWidth > 0) {
        innerContent.style.minWidth = `${parentWidth}px`;
      }
    }
    const contentWidth = (innerContent == null ? void 0 : innerContent.offsetWidth) || 200;
    const rightSpace = window.innerWidth - rect.right;
    if (rightSpace >= contentWidth + sideOffset()) {
      mutate(contentEl, get(contentEl).style.left = `${rect.right}px`);
      mutate(contentEl, get(contentEl).style.right = "auto");
      mutate(contentEl, get(contentEl).style.paddingLeft = `${sideOffset()}px`);
    } else {
      mutate(contentEl, get(contentEl).style.right = `${window.innerWidth - rect.left}px`);
      mutate(contentEl, get(contentEl).style.left = "auto");
      mutate(contentEl, get(contentEl).style.paddingRight = `${sideOffset()}px`);
    }
    const contentHeight = get(contentEl).offsetHeight || 0;
    let top = rect.top;
    if (top + contentHeight + 16 > window.innerHeight) {
      top = window.innerHeight - contentHeight - 16;
    }
    if (top < 16) {
      top = 16;
    }
    mutate(contentEl, get(contentEl).style.top = `${top}px`);
  }
  async function handleMouseEnter() {
    set(open, true);
    await tick();
    positionContent();
    setTimeout(positionContent, 50);
  }
  function handleMouseLeave(event2) {
    var _a, _b;
    if ((_a = get(contentEl)) == null ? void 0 : _a.contains(event2.relatedTarget)) return;
    if ((_b = get(triggerEl)) == null ? void 0 : _b.contains(event2.relatedTarget)) return;
    set(open, false);
  }
  function handleContentMouseLeave(event2) {
    var _a, _b;
    if ((_a = get(triggerEl)) == null ? void 0 : _a.contains(event2.relatedTarget)) return;
    if ((_b = get(contentEl)) == null ? void 0 : _b.contains(event2.relatedTarget)) return;
    set(open, false);
  }
  function portal(node) {
    document.body.appendChild(node);
    return {
      destroy() {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
    };
  }
  init();
  var fragment = root_1();
  event("scroll", $window, positionContent, true);
  event("resize", $window, positionContent);
  var div = first_child(fragment);
  var node_1 = child(div);
  slot(node_1, $$props, "trigger", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(triggerEl, $$value), () => get(triggerEl));
  var node_2 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root();
      var div_2 = child(div_1);
      var node_3 = child(div_2);
      slot(node_3, $$props, "default", {}, null);
      reset(div_2);
      reset(div_1);
      action(div_1, ($$node) => portal == null ? void 0 : portal($$node));
      bind_this(div_1, ($$value) => set(contentEl, $$value), () => get(contentEl));
      effect(() => event("mouseleave", div_1, handleContentMouseLeave));
      template_effect(() => {
        set_class(div_2, 1, clsx(contentClass()));
        set_style(div_2, `max-width: ${maxWidth() ?? ""}px;`);
      });
      transition(3, div_2, () => flyAndScale);
      append($$anchor2, div_1);
    };
    if_block(node_2, ($$render) => {
      if (get(open)) $$render(consequent);
    });
  }
  event("mouseenter", div, handleMouseEnter);
  event("mouseleave", div, handleMouseLeave);
  append($$anchor, fragment);
  pop();
}
export {
  DropdownSub as D
};
