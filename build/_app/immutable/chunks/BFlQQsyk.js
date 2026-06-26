import { ah as create_text, O as block, ai as branch, aj as HEAD_EFFECT, M as hydrating, ak as COMMENT_NODE, al as get_next_sibling, T as set_hydrating, S as set_hydrate_node, V as hydrate_node, am as get_first_child } from "./CISwU846.js";
function head(hash, render_fn) {
  let previous_hydrate_node = null;
  let was_hydrating = hydrating;
  var anchor;
  if (hydrating) {
    previous_hydrate_node = hydrate_node;
    var head_anchor = get_first_child(document.head);
    while (head_anchor !== null && (head_anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    head_anchor.data !== hash)) {
      head_anchor = get_next_sibling(head_anchor);
    }
    if (head_anchor === null) {
      set_hydrating(false);
    } else {
      var start = (
        /** @type {TemplateNode} */
        get_next_sibling(head_anchor)
      );
      head_anchor.remove();
      set_hydrate_node(start);
    }
  }
  if (!hydrating) {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => {
      var e = branch(() => render_fn(anchor));
      e.f |= HEAD_EFFECT;
    });
  } finally {
    if (was_hydrating) {
      set_hydrating(true);
      set_hydrate_node(
        /** @type {TemplateNode} */
        previous_hydrate_node
      );
    }
  }
}
export {
  head as h
};
