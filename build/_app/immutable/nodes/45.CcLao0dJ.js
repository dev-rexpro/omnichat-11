import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, h as comment, i as first_child, a as append, b as pop, s as setup_stores, k as set, l as get, m as mutable_source, e as store_get } from "../chunks/CISwU846.js";
import { k as key } from "../chunks/-PfhJFwZ.js";
import { i as init } from "../chunks/CDjUy0iz.js";
import { t as toast } from "../chunks/C-rLN5eo.js";
import { g as goto } from "../chunks/A3V7pFI8.js";
import { e as skills } from "../chunks/C2d9K3Bp.js";
import { c as createNewSkill, g as getSkills } from "../chunks/C35Yznpd.js";
import { S as SkillEditor } from "../chunks/D_2cMpeL.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let skill = mutable_source(null);
  let clone = mutable_source(false);
  const onSubmit = async (_skill) => {
    const res = await createNewSkill(localStorage.token, _skill).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Skill created successfully"));
      await skills.set(await getSkills(localStorage.token));
      await goto("/workspace/skills");
    }
  };
  onMount(async () => {
    if (sessionStorage.skill) {
      const _skill = JSON.parse(sessionStorage.skill);
      sessionStorage.removeItem("skill");
      set(clone, true);
      set(skill, {
        name: _skill.name || "Skill",
        id: _skill.id || "",
        description: _skill.description || "",
        content: _skill.content || "",
        is_active: _skill.is_active ?? true,
        access_grants: _skill.access_grants !== void 0 ? _skill.access_grants : []
      });
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(skill), ($$anchor2) => {
    SkillEditor($$anchor2, {
      get skill() {
        return get(skill);
      },
      onSubmit,
      get clone() {
        return get(clone);
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
