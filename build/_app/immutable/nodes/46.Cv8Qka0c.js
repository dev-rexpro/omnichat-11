import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, w as legacy_pre_effect, y as legacy_pre_effect_reset, h as comment, i as first_child, a as append, b as pop, s as setup_stores, e as store_get, l as get, k as set, m as mutable_source } from "../chunks/CISwU846.js";
import { i as if_block } from "../chunks/Cr87xL-z.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { e as skills } from "../chunks/C2d9K3Bp.js";
import { a as getSkillById, b as updateSkillById, g as getSkills } from "../chunks/C35Yznpd.js";
import { p as page } from "../chunks/B2F-VN7c.js";
import { S as SkillEditor } from "../chunks/D_2cMpeL.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const skillId = mutable_source();
  const i18n = getContext("i18n");
  let skill = mutable_source(null);
  let disabled = mutable_source(false);
  const onSubmit = async (_skill) => {
    const updatedSkill = await updateSkillById(localStorage.token, get(skillId), _skill).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (updatedSkill) {
      toast.success($i18n().t("Skill updated successfully"));
      await skills.set(await getSkills(localStorage.token));
      set(skill, {
        id: updatedSkill.id,
        name: updatedSkill.name,
        description: updatedSkill.description,
        content: updatedSkill.content,
        is_active: updatedSkill.is_active,
        access_grants: (updatedSkill == null ? void 0 : updatedSkill.access_grants) === void 0 ? [] : updatedSkill == null ? void 0 : updatedSkill.access_grants
      });
    }
  };
  onMount(async () => {
    if (get(skillId)) {
      const _skill = await getSkillById(localStorage.token, get(skillId)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (_skill) {
        set(disabled, !_skill.write_access);
        set(skill, {
          id: _skill.id,
          name: _skill.name,
          description: _skill.description,
          content: _skill.content,
          is_active: _skill.is_active,
          access_grants: (_skill == null ? void 0 : _skill.access_grants) === void 0 ? [] : _skill == null ? void 0 : _skill.access_grants
        });
      } else {
        goto("/workspace/skills");
      }
    } else {
      goto("/workspace/skills");
    }
  });
  legacy_pre_effect(() => $page(), () => {
    set(skillId, $page().url.searchParams.get("id"));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      SkillEditor($$anchor2, {
        get skill() {
          return get(skill);
        },
        onSubmit,
        get disabled() {
          return get(disabled);
        },
        edit: true
      });
    };
    if_block(node, ($$render) => {
      if (get(skill)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
