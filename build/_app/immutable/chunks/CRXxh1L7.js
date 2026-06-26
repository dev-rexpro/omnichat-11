import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, v as onDestroy, l as get, w as legacy_pre_effect, x as deep_read_state, y as legacy_pre_effect_reset, h as comment, i as first_child, a as append, b as pop, m as mutable_source, c as child, r as reset, k as set, t as template_effect, q as event, f as from_html } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition, a as fly } from "./CjS5To7p.js";
import { s as set_class } from "./CpNYkTX2.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
var root = from_html(`<div class="modal fixed right-0 bottom-0 left-0 z-999 flex h-screen max-h-[100dvh] w-full justify-center overflow-hidden overscroll-contain bg-black/60"><div><!></div></div>`);
function Drawer($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, false);
  let className = prop($$props, "className", 8, "");
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let modalElement = mutable_source(null);
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape" && isTopModal()) {
      /* @__PURE__ */ console.log("Escape");
      show(false);
    }
  };
  const isTopModal = () => {
    const modals = document.getElementsByClassName("modal");
    return modals.length && modals[modals.length - 1] === get(modalElement);
  };
  onMount(() => {
  });
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
    show(false);
    if (get(modalElement)) {
      if (document.body.contains(get(modalElement))) {
        document.body.removeChild(get(modalElement));
        document.body.style.overflow = "unset";
      }
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(show()), get(modalElement), deep_read_state(onClose())),
    () => {
      if (show() && get(modalElement)) {
        document.body.appendChild(get(modalElement));
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      } else if (get(modalElement)) {
        onClose()();
        window.removeEventListener("keydown", handleKeyDown);
        if (document.body.contains(get(modalElement))) {
          document.body.removeChild(get(modalElement));
          document.body.style.overflow = "unset";
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root();
      var div_1 = child(div);
      var node_1 = child(div_1);
      slot(node_1, $$props, "default", {}, null);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get(modalElement));
      template_effect(() => set_class(div_1, 1, ` mt-auto w-full bg-gray-50 dark:bg-gray-900 dark:text-gray-100 ${className() ?? ""} scrollbar-hidden max-h-[100dvh] overflow-y-auto`, "svelte-1u2o1qj"));
      event("mousedown", div_1, (e) => {
        e.stopPropagation();
      });
      transition(1, div, () => fly, () => ({ y: 100, duration: 100 }));
      event("mousedown", div, () => {
        show(false);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  Drawer as D
};
