import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, v as onDestroy, w as legacy_pre_effect, y as legacy_pre_effect_reset, q as event, i as first_child, t as template_effect, a as append, b as pop, B as tick, x as deep_read_state, aV as $window, n as sibling, f as from_html, c as child, r as reset, l as get, m as mutable_source, aW as mutate, k as set, X as effect } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition } from "./CjS5To7p.js";
import { a as action } from "./22PI2KxS.js";
import { a as set_attribute, s as set_class, c as clsx } from "./CpNYkTX2.js";
import { b as bind_prop } from "./CGyv6Yf5.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { f as flyAndScale } from "./CZ-Bw2qQ.js";
var root = from_html(`<div role="menu"><!></div>`);
var root_1 = from_html(`<span style="display: contents; cursor: pointer;" role="button" aria-haspopup="true"><!></span> <!>`, 1);
function Dropdown($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, false);
  let side = prop($$props, "side", 8, "bottom");
  let align = prop($$props, "align", 8, "start");
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 8, true);
  let onOpenChange = prop($$props, "onOpenChange", 8, () => {
  });
  let contentClass = prop($$props, "contentClass", 8, "");
  let sideOffset = prop($$props, "sideOffset", 8, 4);
  let triggerEl;
  let contentEl = mutable_source();
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
  function trigger(node) {
    triggerEl = node.firstElementChild || node;
    function handleClick(e) {
      e.preventDefault();
      toggleOpen();
    }
    function handleKeydown2(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleOpen();
      }
    }
    node.addEventListener("click", handleClick);
    node.addEventListener("keydown", handleKeydown2);
    return {
      destroy() {
        node.removeEventListener("click", handleClick);
        node.removeEventListener("keydown", handleKeydown2);
      }
    };
  }
  function positionContent() {
    if (!triggerEl || !get(contentEl)) return;
    const rect = triggerEl.getBoundingClientRect();
    mutate(contentEl, get(contentEl).style.position = "fixed");
    mutate(contentEl, get(contentEl).style.zIndex = "9999");
    const contentHeight = get(contentEl).offsetHeight || 0;
    const spaceBelow = window.innerHeight - rect.bottom - sideOffset();
    const spaceAbove = rect.top - sideOffset();
    let openAbove = side() === "top";
    if (side() === "bottom" && spaceBelow < contentHeight && spaceAbove > spaceBelow) {
      openAbove = true;
    } else if (side() === "top" && spaceAbove < contentHeight && spaceBelow > spaceAbove) {
      openAbove = false;
    }
    if (openAbove) {
      mutate(contentEl, get(contentEl).style.bottom = `${window.innerHeight - rect.top + sideOffset()}px`);
      mutate(contentEl, get(contentEl).style.top = "auto");
    } else {
      mutate(contentEl, get(contentEl).style.top = `${rect.bottom + sideOffset()}px`);
      mutate(contentEl, get(contentEl).style.bottom = "auto");
    }
    if (align() === "end") {
      let right = window.innerWidth - rect.right;
      const contentWidth = get(contentEl).offsetWidth || 0;
      if (right + contentWidth > window.innerWidth) {
        right = window.innerWidth - contentWidth - 16;
      }
      mutate(contentEl, get(contentEl).style.right = `${Math.max(16, right)}px`);
      mutate(contentEl, get(contentEl).style.left = "auto");
    } else {
      let left = rect.left;
      const contentWidth = get(contentEl).offsetWidth || 0;
      if (left + contentWidth + 16 > window.innerWidth) {
        left = window.innerWidth - contentWidth - 16;
      }
      mutate(contentEl, get(contentEl).style.left = `${Math.max(16, left)}px`);
      mutate(contentEl, get(contentEl).style.right = "auto");
    }
  }
  async function toggleOpen() {
    show(!show());
    onOpenChange()(show());
    if (show()) {
      await tick();
      positionContent();
      setTimeout(positionContent, 50);
    }
  }
  function handleWindowPointerDown(event2) {
    var _a;
    if (!show() || !closeOnOutsideClick()) return;
    if (triggerEl == null ? void 0 : triggerEl.contains(event2.target)) return;
    if ((_a = get(contentEl)) == null ? void 0 : _a.contains(event2.target)) return;
    show(false);
    onOpenChange()(false);
  }
  function handleKeydown(event2) {
    if (event2.key === "Escape" && show()) {
      show(false);
      onOpenChange()(false);
    }
  }
  function close() {
    show(false);
    onOpenChange()(false);
  }
  let onPointerDown;
  onMount(() => {
    onPointerDown = (e) => handleWindowPointerDown(e);
    document.addEventListener("pointerdown", onPointerDown, true);
  });
  onDestroy(() => {
    if (onPointerDown) {
      document.removeEventListener("pointerdown", onPointerDown, true);
    }
  });
  legacy_pre_effect(() => (deep_read_state(show()), tick), () => {
    if (show()) {
      tick().then(() => {
        positionContent();
        setTimeout(positionContent, 50);
      });
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { close };
  init();
  var fragment = root_1();
  event(
    "keydown",
    $window,
    /** Close the dropdown programmatically */
    handleKeydown
  );
  event("scroll", $window, positionContent, true);
  event("resize", $window, positionContent);
  var span = first_child(fragment);
  var node_1 = child(span);
  slot(node_1, $$props, "default", {}, null);
  reset(span);
  action(span, ($$node) => trigger == null ? void 0 : trigger($$node));
  var node_2 = sibling(span, 2);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var node_3 = child(div);
      slot(node_3, $$props, "content", {}, null);
      reset(div);
      action(div, ($$node) => portal == null ? void 0 : portal($$node));
      bind_this(div, ($$value) => set(contentEl, $$value), () => get(contentEl));
      effect(() => event("click", div, (e) => e.stopPropagation()));
      effect(() => event("pointerdown", div, (e) => e.stopPropagation()));
      template_effect(() => set_class(div, 1, clsx(contentClass())));
      transition(3, div, () => flyAndScale);
      append($$anchor2, div);
    };
    if_block(node_2, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  template_effect(() => set_attribute(span, "aria-expanded", show()));
  append($$anchor, fragment);
  bind_prop($$props, "close", close);
  return pop($$exports);
}
export {
  Dropdown as D
};
