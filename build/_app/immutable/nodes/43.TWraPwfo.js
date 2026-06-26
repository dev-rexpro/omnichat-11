import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, w as legacy_pre_effect, y as legacy_pre_effect_reset, h as comment, i as first_child, a as append, b as pop, s as setup_stores, e as store_get, l as get, k as set, m as mutable_source } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { g as getPromptById, u as updatePromptById } from "../chunks/Df2aLUWE.js";
import { p as page } from "../chunks/B2F-VN7c.js";
import { P as PromptEditor } from "../chunks/CcjI30g0.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const promptId = mutable_source();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  let disabled = mutable_source(false);
  const onSubmit = async (_prompt) => {
    /* @__PURE__ */ console.log(_prompt);
    const updatedPrompt = await updatePromptById(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (updatedPrompt) {
      toast.success($i18n().t("Prompt updated successfully"));
      set(prompt, {
        id: updatedPrompt.id,
        name: updatedPrompt.name,
        command: updatedPrompt.command,
        content: updatedPrompt.content,
        version_id: updatedPrompt.version_id,
        tags: updatedPrompt.tags,
        access_grants: (updatedPrompt == null ? void 0 : updatedPrompt.access_grants) === void 0 ? [] : updatedPrompt == null ? void 0 : updatedPrompt.access_grants
      });
    }
  };
  onMount(async () => {
    if (get(promptId)) {
      const _prompt = await getPromptById(localStorage.token, get(promptId)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (_prompt) {
        set(disabled, !_prompt.write_access);
        set(prompt, {
          id: _prompt.id,
          name: _prompt.name,
          command: _prompt.command,
          content: _prompt.content,
          version_id: _prompt.version_id,
          tags: _prompt.tags,
          access_grants: (_prompt == null ? void 0 : _prompt.access_grants) === void 0 ? [] : _prompt == null ? void 0 : _prompt.access_grants
        });
      } else {
        goto("/workspace/prompts");
      }
    } else {
      goto("/workspace/prompts");
    }
  });
  legacy_pre_effect(() => $page(), () => {
    set(promptId, $page().params.id);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      PromptEditor($$anchor2, {
        get prompt() {
          return get(prompt);
        },
        onSubmit,
        get disabled() {
          return get(disabled);
        },
        edit: true
      });
    };
    if_block(node, ($$render) => {
      if (get(prompt)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
