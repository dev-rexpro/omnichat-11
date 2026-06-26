import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, C as createEventDispatcher, m as mutable_source, o as onMount, v as onDestroy, w as legacy_pre_effect, y as legacy_pre_effect_reset, h as comment, i as first_child, a as append, b as pop, s as setup_stores, x as deep_read_state, l as get, e as store_get, k as set, B as tick, c as child, r as reset, n as sibling, D as text, t as template_effect, z as untrack, d as set_text, q as event, f as from_html, u as derived_safe_equal, aX as remove_textarea_child } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { h as html } from "./z4PHrDSb.js";
import { s as slot } from "./DbvU-2C8.js";
import { t as transition, f as fade } from "./CjS5To7p.js";
import { a as set_attribute } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import purify from "./DadB-l2n.js";
import { F as FocusTrap, c as createFocusTrap, f as flyAndScale } from "./CZ-Bw2qQ.js";
import { m as marked } from "./zFu7_FHZ.js";
import { S as SensitiveInput } from "./CdtGHtWI.js";
var root = from_html(`<div class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900"><!></div>`);
var root_1 = from_html(`<textarea class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900 outline-hidden resize-none" rows="3" required=""></textarea>`);
var root_2 = from_html(`<div class=" text-sm text-gray-500 flex-1"><!> <!></div>`);
var root_3 = from_html(`<div class=" fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-99999999 overflow-hidden overscroll-contain"><div class=" m-auto max-w-full w-[32rem] mx-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm rounded-4xl max-h-[100dvh] shadow-3xl border border-white dark:border-gray-900"><div class="px-[1.75rem] py-6 flex flex-col"><div class=" text-lg font-medium dark:text-gray-200 mb-2.5"><!></div> <!> <div class="mt-6 flex justify-between gap-1.5"><button class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white font-medium w-full py-2 rounded-3xl transition" type="button"> </button> <button class="text-sm bg-gray-900 hover:bg-gray-850 text-gray-100 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-800 font-medium w-full py-2 rounded-3xl transition" type="button"> </button></div></div></div></div>`);
function ConfirmDialog($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let title = prop($$props, "title", 8, "");
  let message = prop($$props, "message", 8, "");
  let cancelLabel = prop($$props, "cancelLabel", 24, () => $i18n().t("Cancel"));
  let confirmLabel = prop($$props, "confirmLabel", 24, () => $i18n().t("Confirm"));
  let onConfirm = prop($$props, "onConfirm", 8, () => {
  });
  let input = prop($$props, "input", 8, false);
  let inputPlaceholder = prop($$props, "inputPlaceholder", 8, "");
  let inputValue = prop($$props, "inputValue", 8, "");
  let inputType = prop($$props, "inputType", 8, "");
  let _inputValue = mutable_source(inputValue());
  let show = prop($$props, "show", 12, false);
  let modalElement = mutable_source(null);
  let mounted = mutable_source(false);
  let focusTrap = mutable_source(null);
  const init$1 = () => {
    set(_inputValue, inputValue());
  };
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      /* @__PURE__ */ console.log("Escape");
      show(false);
    }
    if (event2.key === "Enter") {
      /* @__PURE__ */ console.log("Enter");
      event2.preventDefault();
      event2.stopPropagation();
      confirmHandler();
    }
  };
  const confirmHandler = async () => {
    show(false);
    await tick();
    await onConfirm()();
    dispatch("confirm", get(_inputValue));
  };
  onMount(() => {
    set(mounted, true);
  });
  onDestroy(() => {
    show(false);
    window.removeEventListener("keydown", handleKeyDown);
    if (get(focusTrap)) {
      get(focusTrap).deactivate();
    }
    if (get(modalElement)) {
      document.body.removeChild(get(modalElement));
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect(
    () => (get(mounted), deep_read_state(show()), get(modalElement), get(focusTrap), FocusTrap),
    () => {
      if (get(mounted)) {
        if (show() && get(modalElement)) {
          document.body.appendChild(get(modalElement));
          set(focusTrap, createFocusTrap(get(modalElement)));
          get(focusTrap).activate();
          window.addEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "hidden";
        } else if (get(modalElement)) {
          get(focusTrap).deactivate();
          window.removeEventListener("keydown", handleKeyDown);
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
    var consequent_4 = ($$anchor2) => {
      var div = root_3();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var node_1 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, title()));
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Confirm your action")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (title() !== "") $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      reset(div_3);
      var node_2 = sibling(div_3, 2);
      slot(node_2, $$props, "default", {}, ($$anchor3) => {
        var div_4 = root_2();
        var node_3 = child(div_4);
        {
          var consequent_1 = ($$anchor4) => {
            const html$1 = derived_safe_equal(() => (deep_read_state(purify), deep_read_state(marked), deep_read_state(message()), untrack(() => purify.sanitize(marked.parse(message())))));
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            html(node_4, () => get(html$1));
            append($$anchor4, fragment_3);
          };
          var alternate_1 = ($$anchor4) => {
            var text_2 = text();
            template_effect(($0) => set_text(text_2, $0), [
              () => ($i18n(), untrack(() => $i18n().t("This action cannot be undone. Do you wish to continue?")))
            ]);
            append($$anchor4, text_2);
          };
          if_block(node_3, ($$render) => {
            if (message() !== "") $$render(consequent_1);
            else $$render(alternate_1, -1);
          });
        }
        var node_5 = sibling(node_3, 2);
        {
          var consequent_3 = ($$anchor4) => {
            var fragment_5 = comment();
            var node_6 = first_child(fragment_5);
            {
              var consequent_2 = ($$anchor5) => {
                var div_5 = root();
                var node_7 = child(div_5);
                {
                  let $0 = derived_safe_equal(() => (deep_read_state(inputPlaceholder()), $i18n(), untrack(() => inputPlaceholder() ? inputPlaceholder() : $i18n().t("Enter your message"))));
                  SensitiveInput(node_7, {
                    id: "event-confirm-input",
                    get placeholder() {
                      return get($0);
                    },
                    required: true,
                    get value() {
                      return get(_inputValue);
                    },
                    set value($$value) {
                      set(_inputValue, $$value);
                    },
                    $$legacy: true
                  });
                }
                reset(div_5);
                append($$anchor5, div_5);
              };
              var alternate_2 = ($$anchor5) => {
                var textarea = root_1();
                remove_textarea_child(textarea);
                template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
                  () => (deep_read_state(inputPlaceholder()), $i18n(), untrack(() => inputPlaceholder() ? inputPlaceholder() : $i18n().t("Enter your message")))
                ]);
                bind_value(textarea, () => get(_inputValue), ($$value) => set(_inputValue, $$value));
                append($$anchor5, textarea);
              };
              if_block(node_6, ($$render) => {
                if (inputType() === "password") $$render(consequent_2);
                else $$render(alternate_2, -1);
              });
            }
            append($$anchor4, fragment_5);
          };
          if_block(node_5, ($$render) => {
            if (input()) $$render(consequent_3);
          });
        }
        reset(div_4);
        append($$anchor3, div_4);
      });
      var div_6 = sibling(node_2, 2);
      var button = child(div_6);
      var text_3 = child(button, true);
      reset(button);
      var button_1 = sibling(button, 2);
      var text_4 = child(button_1, true);
      reset(button_1);
      reset(div_6);
      reset(div_2);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get(modalElement));
      template_effect(() => {
        set_text(text_3, cancelLabel());
        set_text(text_4, confirmLabel());
      });
      event("click", button, () => {
        show(false);
        dispatch("cancel");
      });
      event("click", button_1, () => {
        confirmHandler();
      });
      transition(1, div_1, () => flyAndScale);
      event("mousedown", div_1, (e) => {
        e.stopPropagation();
      });
      transition(1, div, () => fade, () => ({ duration: 10 }));
      event("mousedown", div, () => {
        show(false);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent_4);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ConfirmDialog as C
};
