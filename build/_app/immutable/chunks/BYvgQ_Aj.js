import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, c as child, n as sibling, r as reset, t as template_effect, z as untrack, d as set_text, a as append, i as first_child, q as event, h as comment, b as pop, e as store_get, s as setup_stores, f as from_html } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { s as slot } from "./DbvU-2C8.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { D as Dropdown } from "./-VK2_MAn.js";
import { D as DropdownSub } from "./OfVbX3mP.js";
import { D as Download } from "./Cw4clyJW.js";
import { G as GarbageBin } from "./B6xv0ubJ.js";
import { D as DocumentDuplicate } from "./CPlYZrRc.js";
import { S as Share } from "./CTBgG0cF.js";
import { L as Link } from "./BHDXFUHh.js";
import { P as PinSlash, a as Pin } from "./CIfJ2FQs.js";
var root = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class="flex items-center line-clamp-1"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class="flex items-center line-clamp-1"> </div></button> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class="flex items-center line-clamp-1"> </div></button>`, 1);
var root_1 = from_html(`<button slot="trigger" class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_2 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button>`);
var root_3 = from_html(`<!> <!>`, 1);
var root_4 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_5 = from_html(`<button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!></button>`);
var root_6 = from_html(`<div slot="content"><div class="min-w-[180px] text-sm rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg"><!> <!> <!> <button class="select-none flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><!> <div class="flex items-center"> </div></button></div></div>`);
function NoteMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  prop($$props, "className", 8, "max-w-[180px]");
  let onDownload = prop($$props, "onDownload", 8, (type) => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onPin = prop($$props, "onPin", 8, null);
  let isPinned = prop($$props, "isPinned", 8, false);
  let onCopyLink = prop($$props, "onCopyLink", 8, null);
  let onCopyToClipboard = prop($$props, "onCopyToClipboard", 8, null);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  init();
  Dropdown($$anchor, {
    align: "end",
    sideOffset: 6,
    onOpenChange: (state) => {
      onChange()(state);
    },
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_6();
        var div_1 = child(div);
        var node_1 = child(div_1);
        DropdownSub(node_1, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root();
            var button = first_child(fragment_2);
            var div_2 = child(button);
            var text = child(div_2, true);
            reset(div_2);
            reset(button);
            var button_1 = sibling(button, 2);
            var div_3 = child(button_1);
            var text_1 = child(div_3, true);
            reset(div_3);
            reset(button_1);
            var button_2 = sibling(button_1, 2);
            var div_4 = child(button_2);
            var text_2 = child(div_4, true);
            reset(div_4);
            reset(button_2);
            template_effect(
              ($0, $1, $2) => {
                set_text(text, $0);
                set_text(text_1, $1);
                set_text(text_2, $2);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)"))),
                () => ($i18n(), untrack(() => $i18n().t("Plain text (.md)"))),
                () => ($i18n(), untrack(() => $i18n().t("PDF document (.pdf)")))
              ]
            );
            event("click", button, () => {
              onDownload()("txt");
            });
            event("click", button_1, () => {
              onDownload()("md");
            });
            event("click", button_2, () => {
              onDownload()("pdf");
            });
            append($$anchor3, fragment_2);
          },
          $$slots: {
            default: true,
            trigger: ($$anchor3, $$slotProps2) => {
              var button_3 = root_1();
              var node_2 = child(button_3);
              Download(node_2, { strokeWidth: "2" });
              var div_5 = sibling(node_2, 2);
              var text_3 = child(div_5, true);
              reset(div_5);
              reset(button_3);
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
              append($$anchor3, button_3);
            }
          }
        });
        var node_3 = sibling(node_1, 2);
        {
          var consequent_2 = ($$anchor3) => {
            DropdownSub($$anchor3, {
              children: ($$anchor4, $$slotProps2) => {
                var fragment_4 = root_3();
                var node_4 = first_child(fragment_4);
                {
                  var consequent = ($$anchor5) => {
                    var button_4 = root_2();
                    var node_5 = child(button_4);
                    Link(node_5, {});
                    var div_6 = sibling(node_5, 2);
                    var text_4 = child(div_6, true);
                    reset(div_6);
                    reset(button_4);
                    template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy link")))]);
                    event("click", button_4, () => {
                      onCopyLink()();
                    });
                    append($$anchor5, button_4);
                  };
                  if_block(node_4, ($$render) => {
                    if (onCopyLink()) $$render(consequent);
                  });
                }
                var node_6 = sibling(node_4, 2);
                {
                  var consequent_1 = ($$anchor5) => {
                    var button_5 = root_2();
                    var node_7 = child(button_5);
                    DocumentDuplicate(node_7, { strokeWidth: "2" });
                    var div_7 = sibling(node_7, 2);
                    var text_5 = child(div_7, true);
                    reset(div_7);
                    reset(button_5);
                    template_effect(($0) => set_text(text_5, $0), [
                      () => ($i18n(), untrack(() => $i18n().t("Copy to clipboard")))
                    ]);
                    event("click", button_5, () => {
                      onCopyToClipboard()();
                    });
                    append($$anchor5, button_5);
                  };
                  if_block(node_6, ($$render) => {
                    if (onCopyToClipboard()) $$render(consequent_1);
                  });
                }
                append($$anchor4, fragment_4);
              },
              $$slots: {
                default: true,
                trigger: ($$anchor4, $$slotProps2) => {
                  var button_6 = root_1();
                  var node_8 = child(button_6);
                  Share(node_8, { strokeWidth: "2" });
                  var div_8 = sibling(node_8, 2);
                  var text_6 = child(div_8, true);
                  reset(div_8);
                  reset(button_6);
                  template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                  append($$anchor4, button_6);
                }
              }
            });
          };
          if_block(node_3, ($$render) => {
            if (onCopyLink() || onCopyToClipboard()) $$render(consequent_2);
          });
        }
        var node_9 = sibling(node_3, 2);
        {
          var consequent_4 = ($$anchor3) => {
            var button_7 = root_5();
            var node_10 = child(button_7);
            {
              var consequent_3 = ($$anchor4) => {
                var fragment_5 = root_4();
                var node_11 = first_child(fragment_5);
                PinSlash(node_11, {});
                var div_9 = sibling(node_11, 2);
                var text_7 = child(div_9, true);
                reset(div_9);
                template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Unpin")))]);
                append($$anchor4, fragment_5);
              };
              var alternate = ($$anchor4) => {
                var fragment_6 = root_4();
                var node_12 = first_child(fragment_6);
                Pin(node_12, {});
                var div_10 = sibling(node_12, 2);
                var text_8 = child(div_10, true);
                reset(div_10);
                template_effect(($0) => set_text(text_8, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Pin to Sidebar")))
                ]);
                append($$anchor4, fragment_6);
              };
              if_block(node_10, ($$render) => {
                if (isPinned()) $$render(consequent_3);
                else $$render(alternate, -1);
              });
            }
            reset(button_7);
            event("click", button_7, () => {
              onPin()();
              show(false);
            });
            append($$anchor3, button_7);
          };
          if_block(node_9, ($$render) => {
            if (onPin()) $$render(consequent_4);
          });
        }
        var button_8 = sibling(node_9, 2);
        var node_13 = child(button_8);
        GarbageBin(node_13, {});
        var div_11 = sibling(node_13, 2);
        var text_9 = child(div_11, true);
        reset(div_11);
        reset(button_8);
        reset(div_1);
        reset(div);
        template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
        event("click", button_8, () => {
          onDelete()();
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  NoteMenu as N
};
