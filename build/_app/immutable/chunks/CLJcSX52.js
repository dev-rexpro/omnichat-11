import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, C as createEventDispatcher, o as onMount, l as get, v as onDestroy, c as child, r as reset, k as set, a as append, b as pop, m as mutable_source, f as from_html } from "./CISwU846.js";
import { s as slot } from "./DbvU-2C8.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
var root = from_html(`<div><!></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let loaderElement = mutable_source();
  let observer;
  let intervalId;
  onMount(() => {
    observer = new IntersectionObserver(
      (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(
              () => {
                dispatch("visible");
              },
              100
            );
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        // viewport
        rootMargin: "0px",
        threshold: 0.1
        // When 10% of the loader is visible
      }
    );
    observer.observe(get(loaderElement));
  });
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  init();
  var div = root();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(loaderElement, $$value), () => get(loaderElement));
  append($$anchor, div);
  pop();
}
export {
  Loader as L
};
