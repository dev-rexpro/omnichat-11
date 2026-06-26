import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, C as createEventDispatcher, g as getContext, o as onMount, k as set, h as comment, i as first_child, a as append, b as pop, s as setup_stores, m as mutable_source, l as get, c as child, r as reset, n as sibling, x as deep_read_state, z as untrack, t as template_effect, q as event, f as from_html, e as store_get, D as text, d as set_text, A as user_derived, E as next } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { h as html } from "./z4PHrDSb.js";
import { t as transition, f as fade } from "./CjS5To7p.js";
import { s as set_class, a as set_attribute } from "./CpNYkTX2.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import purify from "./DadB-l2n.js";
import { m as marked } from "./zFu7_FHZ.js";
import { a as WEBUI_BASE_URL } from "./Cjpn_aRT.js";
var root = from_html(`<div class="flex md:hidden group w-fit md:items-center"><a class="text-gray-700 dark:text-white text-xs font-semibold underline" target="_blank"> </a> <div class=" ml-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></div>`);
var root_1 = from_html(`<div class="hidden md:flex group w-fit md:items-center"><a class="text-gray-700 dark:text-white text-xs font-semibold underline" href="/" target="_blank"> </a> <div class=" ml-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></div>`);
var root_2 = from_html(`<div><div class=" flex flex-col md:flex-row md:items-center flex-1 text-sm w-fit gap-1.5"><div class="flex justify-between self-start"><div><!></div> <!></div> <div class="flex-1 text-xs text-gray-700 dark:text-white max-h-60 overflow-y-auto"></div></div> <!> <div class="flex self-start"><button class="  -mt-1 -mb-2 -translate-y-[1px] ml-1.5 mr-1 text-gray-400 dark:hover:text-white">&times;</button></div></div>`);
function Banner($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let banner = prop($$props, "banner", 24, () => ({
    id: "",
    type: "info",
    title: "",
    content: "",
    url: "",
    dismissible: true,
    timestamp: Math.floor(Date.now() / 1e3)
  }));
  let className = prop($$props, "className", 8, "mx-2 px-2 rounded-lg");
  let dismissed = prop($$props, "dismissed", 12, false);
  let mounted = mutable_source(false);
  const classNames = {
    info: "bg-blue-500/20 text-blue-700 dark:text-blue-200 ",
    success: "bg-green-500/20 text-green-700 dark:text-green-200",
    warning: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-200",
    error: "bg-red-500/20 text-red-700 dark:text-red-200"
  };
  const dismiss = (id) => {
    dismissed(true);
    dispatch("dismiss", id);
  };
  onMount(() => {
    set(mounted, true);
    /* @__PURE__ */ console.log("Banner mounted:", banner());
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_7 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_6 = ($$anchor3) => {
          var div = root_2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var node_2 = child(div_3);
          {
            var consequent = ($$anchor4) => {
              var text$1 = text();
              template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Info")))]);
              append($$anchor4, text$1);
            };
            var d = user_derived(() => (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "info")));
            var consequent_1 = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Warning")))]);
              append($$anchor4, text_1);
            };
            var d_1 = user_derived(() => (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "warning")));
            var consequent_2 = ($$anchor4) => {
              var text_2 = text();
              template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Error")))]);
              append($$anchor4, text_2);
            };
            var d_2 = user_derived(() => (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "error")));
            var consequent_3 = ($$anchor4) => {
              var text_3 = text();
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Success")))]);
              append($$anchor4, text_3);
            };
            var d_3 = user_derived(() => (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "success")));
            var alternate = ($$anchor4) => {
              var text_4 = text();
              template_effect(() => set_text(text_4, (deep_read_state(banner()), untrack(() => banner().type))));
              append($$anchor4, text_4);
            };
            if_block(node_2, ($$render) => {
              if (get(d)) $$render(consequent);
              else if (get(d_1)) $$render(consequent_1, 1);
              else if (get(d_2)) $$render(consequent_2, 2);
              else if (get(d_3)) $$render(consequent_3, 3);
              else $$render(alternate, -1);
            });
          }
          reset(div_3);
          var node_3 = sibling(div_3, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var div_4 = root();
              var a = child(div_4);
              var text_5 = child(a, true);
              reset(a);
              next(2);
              reset(div_4);
              template_effect(
                ($0) => {
                  set_attribute(a, "href", `${WEBUI_BASE_URL}/assets/files/whitepaper.pdf`);
                  set_text(text_5, $0);
                },
                [() => ($i18n(), untrack(() => $i18n().t("Learn More")))]
              );
              append($$anchor4, div_4);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(banner()), untrack(() => banner().url)) $$render(consequent_4);
            });
          }
          reset(div_2);
          var div_5 = sibling(div_2, 2);
          html(
            div_5,
            () => (deep_read_state(purify), deep_read_state(marked), deep_read_state(banner()), untrack(() => {
              var _a;
              return purify.sanitize(marked.parse((((_a = banner()) == null ? void 0 : _a.content) ?? "").replace(/\n/g, "<br>")));
            })),
            true
          );
          reset(div_5);
          reset(div_1);
          var node_4 = sibling(div_1, 2);
          {
            var consequent_5 = ($$anchor4) => {
              var div_6 = root_1();
              var a_1 = child(div_6);
              var text_6 = child(a_1, true);
              reset(a_1);
              next(2);
              reset(div_6);
              template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Learn More")))]);
              append($$anchor4, div_6);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(banner()), untrack(() => banner().url)) $$render(consequent_5);
            });
          }
          var div_7 = sibling(node_4, 2);
          var button = child(div_7);
          reset(div_7);
          reset(div);
          template_effect(
            ($0) => {
              set_class(div, 1, `${className() ?? ""} top-0 left-0 right-0 py-1 flex justify-center items-center relative border border-transparent text-gray-800 dark:text-gary-100 bg-transparent backdrop-blur-xl z-30`);
              set_class(div_3, 1, ` text-xs font-semibold ${(deep_read_state(banner()), untrack(() => classNames[banner().type] ?? classNames["info"])) ?? ""}  w-fit px-2 rounded-sm uppercase line-clamp-1 mr-0.5`);
              set_attribute(button, "aria-label", $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Close Banner")))]
          );
          event("click", button, () => {
            dismiss(banner().id);
          });
          transition(3, div, () => fade, () => ({ delay: 100, duration: 300 }));
          append($$anchor3, div);
        };
        if_block(node_1, ($$render) => {
          if (get(mounted)) $$render(consequent_6);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (!dismissed()) $$render(consequent_7);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Banner as B
};
