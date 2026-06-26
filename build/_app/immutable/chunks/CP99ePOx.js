import { b as WEBUI_API_BASE_URL } from "./Cjpn_aRT.js";
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, w as legacy_pre_effect, x as deep_read_state, l as get, y as legacy_pre_effect_reset, b as pop, e as store_get, s as setup_stores, m as mutable_source, n as sibling, t as template_effect, z as untrack, d as set_text, q as event, a as append, c as child, k as set, f as from_html, r as reset, E as next, i as first_child } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { e as each, i as index } from "./D16NL_tt.js";
import { f as bind_select_value, r as remove_input_defaults, a as set_attribute, b as set_value, s as set_class } from "./CpNYkTX2.js";
import { b as bind_value } from "./DhE2rCDJ.js";
import { b as bind_prop } from "./CGyv6Yf5.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { D as Dropdown } from "./-VK2_MAn.js";
import { a as models } from "./C2d9K3Bp.js";
import { S as Search } from "./Cm0RU8kI.js";
const getAutomationItems = async (token, query, status, page) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (status && status !== "all") {
    searchParams.append("status", status);
  }
  if (page) {
    searchParams.append("page", page.toString());
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/list?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createAutomation = async (token, form) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAutomationById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateAutomationById = async (token, id, form) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const toggleAutomationById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/${id}/toggle`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const runAutomationById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/${id}/run`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteAutomationById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/${id}/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getAutomationRuns = async (token, id, skip = 0, limit = 50) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/automations/${id}/runs?skip=${skip}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root$1 = from_html(`<button type="button" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl text-xs transition
			text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> <span class="whitespace-nowrap"> </span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></button>`);
var root_1$1 = from_html(`<option> </option>`);
var root_2$1 = from_html(`<div class="px-2 pb-2"><input type="text" placeholder="RRULE:FREQ=DAILY;BYHOUR=9;BYMINUTE=0" class="w-full bg-transparent outline-hidden text-xs placeholder:text-gray-400 dark:placeholder:text-gray-600"/></div>`);
var root_3$1 = from_html(`<div class="flex items-center gap-1.5"><input type="date" class="bg-transparent outline-hidden text-xs dark:color-scheme-dark"/></div> <div class="flex items-center gap-1.5"><input type="time" class="bg-transparent outline-hidden text-xs dark:color-scheme-dark"/></div>`, 1);
var root_4 = from_html(`<div class="flex items-center gap-1.5"><span class="text-xs text-gray-500 mr-0.5"> </span> <input type="time" class="bg-transparent text-center outline-hidden text-xs dark:color-scheme-dark"/></div>`);
var root_5 = from_html(`<div class="flex items-center gap-1.5"><span class="text-xs text-gray-500"> </span> <input type="number" class="w-8 bg-transparent text-center outline-hidden text-xs"/></div>`);
var root_6 = from_html(`<button type="button"> </button>`);
var root_7 = from_html(`<div class="flex gap-1 px-2 pb-2"></div>`);
var root_8 = from_html(`<div class="flex gap-2 flex-wrap items-center px-3 pb-2 text-xs"><!> <!></div> <!>`, 1);
var root_9 = from_html(`<div slot="content" class="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-48 p-1"><div class="px-2 text-xs text-gray-500 pt-1"> </div> <div class="px-1.5 py-0.5"><select class="w-full bg-transparent rounded-xl text-xs py-1.5 px-1.5 outline-hidden"></select></div> <!></div>`);
function ScheduleDropdown($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const FREQUENCIES = mutable_source();
  const DAYS = mutable_source();
  const scheduleLabel = mutable_source();
  const i18n = getContext("i18n");
  let frequency = prop($$props, "frequency", 12, "DAILY");
  let interval = prop($$props, "interval", 12, 1);
  let hour = prop($$props, "hour", 12, 9);
  let minute = prop($$props, "minute", 12, 0);
  let selectedDays = prop($$props, "selectedDays", 28, () => []);
  let monthDay = prop($$props, "monthDay", 12, 1);
  let onceDate = prop($$props, "onceDate", 12, "");
  let onceTime = prop($$props, "onceTime", 12, "09:00");
  let customRrule = prop($$props, "customRrule", 12, "");
  let side = prop($$props, "side", 8, "top");
  let align = prop($$props, "align", 8, "start");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let showDropdown = mutable_source(false);
  let lastVisualFrequency = mutable_source("DAILY");
  let prevFrequency = mutable_source("DAILY");
  const buildVisualRrule = () => {
    if (get(lastVisualFrequency) === "ONCE") {
      const dt = onceDate().replace(/-/g, "") + "T" + onceTime().replace(/:/g, "") + "00";
      return `DTSTART:${dt}
RRULE:FREQ=DAILY;COUNT=1`;
    }
    let parts = [`FREQ=${get(lastVisualFrequency)}`];
    if (interval() > 1) parts.push(`INTERVAL=${interval()}`);
    if (get(lastVisualFrequency) === "WEEKLY" && selectedDays().length) {
      parts.push(`BYDAY=${selectedDays().join(",")}`);
    }
    if (get(lastVisualFrequency) === "MONTHLY") {
      parts.push(`BYMONTHDAY=${monthDay()}`);
    }
    if (["DAILY", "WEEKLY", "MONTHLY"].includes(get(lastVisualFrequency))) {
      parts.push(`BYHOUR=${hour()}`);
    }
    parts.push(`BYMINUTE=${minute()}`);
    return `RRULE:${parts.join(";")}`;
  };
  const buildRrule = () => {
    if (frequency() === "CUSTOM") return customRrule();
    if (frequency() === "ONCE") {
      const dt = onceDate().replace(/-/g, "") + "T" + onceTime().replace(/:/g, "") + "00";
      return `DTSTART:${dt}
RRULE:FREQ=DAILY;COUNT=1`;
    }
    let parts = [`FREQ=${frequency()}`];
    if (interval() > 1) parts.push(`INTERVAL=${interval()}`);
    if (frequency() === "WEEKLY" && selectedDays().length) {
      parts.push(`BYDAY=${selectedDays().join(",")}`);
    }
    if (frequency() === "MONTHLY") {
      parts.push(`BYMONTHDAY=${monthDay()}`);
    }
    if (["DAILY", "WEEKLY", "MONTHLY"].includes(frequency())) {
      parts.push(`BYHOUR=${hour()}`);
    }
    parts.push(`BYMINUTE=${minute()}`);
    return `RRULE:${parts.join(";")}`;
  };
  const parseRrule = (s) => {
    if (s.includes("COUNT=1")) {
      frequency("ONCE");
      const match = s.match(/DTSTART:(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})/);
      if (match) {
        onceDate(`${match[1]}-${match[2]}-${match[3]}`);
        onceTime(`${match[4]}:${match[5]}`);
      }
      return;
    }
    const parts = {};
    s.replace("RRULE:", "").split(";").forEach((p) => {
      const [k, v] = p.split("=");
      if (k && v) parts[k] = v;
    });
    const freq = parts.FREQ || "DAILY";
    if (!["HOURLY", "DAILY", "WEEKLY", "MONTHLY"].includes(freq)) {
      frequency("CUSTOM");
      customRrule(s);
      return;
    }
    frequency(freq);
    interval(parseInt(parts.INTERVAL || "1"));
    hour(parseInt(parts.BYHOUR || "9"));
    minute(parseInt(parts.BYMINUTE || "0"));
    selectedDays(parts.BYDAY ? parts.BYDAY.split(",") : []);
    monthDay(parseInt(parts.BYMONTHDAY || "1"));
  };
  const getScheduleLabel = () => {
    if (frequency() === "ONCE") return "Once";
    if (frequency() === "HOURLY") return "Hourly";
    if (frequency() === "DAILY") return "Daily";
    if (frequency() === "WEEKLY") return "Weekly";
    if (frequency() === "MONTHLY") return "Monthly";
    if (frequency() === "CUSTOM") return "Custom";
    return "Schedule";
  };
  legacy_pre_effect(() => $i18n(), () => {
    set(FREQUENCIES, [
      { key: "ONCE", label: $i18n().t("Once") },
      { key: "HOURLY", label: $i18n().t("Hourly") },
      { key: "DAILY", label: $i18n().t("Daily") },
      { key: "WEEKLY", label: $i18n().t("Weekly") },
      { key: "MONTHLY", label: $i18n().t("Monthly") },
      { key: "CUSTOM", label: $i18n().t("Custom") }
    ]);
  });
  legacy_pre_effect(() => $i18n(), () => {
    set(DAYS, [
      {
        key: "MO",
        label: $i18n().t("Mo", { context: "day_of_week" })
      },
      {
        key: "TU",
        label: $i18n().t("Tu", { context: "day_of_week" })
      },
      {
        key: "WE",
        label: $i18n().t("We", { context: "day_of_week" })
      },
      {
        key: "TH",
        label: $i18n().t("Th", { context: "day_of_week" })
      },
      {
        key: "FR",
        label: $i18n().t("Fr", { context: "day_of_week" })
      },
      {
        key: "SA",
        label: $i18n().t("Sa", { context: "day_of_week" })
      },
      {
        key: "SU",
        label: $i18n().t("Su", { context: "day_of_week" })
      }
    ]);
  });
  legacy_pre_effect(() => deep_read_state(frequency()), () => {
    if (frequency() !== "CUSTOM") {
      set(lastVisualFrequency, frequency());
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(frequency()), deep_read_state(onceDate())),
    () => {
      if (frequency() === "ONCE" && !onceDate()) {
        const soon = new Date(Date.now() + 5 * 6e4);
        onceDate(soon.toISOString().split("T")[0]);
        onceTime(`${String(soon.getHours()).padStart(2, "0")}:${String(soon.getMinutes()).padStart(2, "0")}`);
      }
    }
  );
  legacy_pre_effect(() => (deep_read_state(frequency()), get(prevFrequency)), () => {
    if (frequency() === "CUSTOM" && get(prevFrequency) !== "CUSTOM") {
      customRrule(buildVisualRrule());
    }
    set(prevFrequency, frequency());
  });
  legacy_pre_effect(() => deep_read_state(frequency()), () => {
    set(scheduleLabel, (() => {
      if (frequency() === "ONCE") return "Once";
      if (frequency() === "HOURLY") return "Hourly";
      if (frequency() === "DAILY") return "Daily";
      if (frequency() === "WEEKLY") return "Weekly";
      if (frequency() === "MONTHLY") return "Monthly";
      if (frequency() === "CUSTOM") return "Custom";
      return "Schedule";
    })());
  });
  legacy_pre_effect_reset();
  var $$exports = { buildRrule, parseRrule, getScheduleLabel };
  init();
  Dropdown($$anchor, {
    get side() {
      return side();
    },
    get align() {
      return align();
    },
    get show() {
      return get(showDropdown);
    },
    set show($$value) {
      set(showDropdown, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var button = root$1();
      var span = sibling(child(button), 2);
      var text = child(span, true);
      reset(span);
      next(2);
      reset(button);
      template_effect(() => set_text(text, get(scheduleLabel)));
      append($$anchor2, button);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_9();
        var div_1 = child(div);
        var text_1 = child(div_1, true);
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var select = child(div_2);
        each(select, 5, () => get(FREQUENCIES), index, ($$anchor3, f) => {
          var option = root_1$1();
          var text_2 = child(option, true);
          reset(option);
          var option_value = {};
          template_effect(() => {
            set_text(text_2, (get(f), untrack(() => get(f).label)));
            if (option_value !== (option_value = (get(f), untrack(() => get(f).key)))) {
              option.value = (option.__value = (get(f), untrack(() => get(f).key))) ?? "";
            }
          });
          append($$anchor3, option);
        });
        reset(select);
        reset(div_2);
        var node = sibling(div_2, 2);
        {
          var consequent = ($$anchor3) => {
            var div_3 = root_2$1();
            var input = child(div_3);
            remove_input_defaults(input);
            reset(div_3);
            bind_value(input, customRrule);
            event("click", input, (e) => e.stopPropagation());
            event("input", input, function(...$$args) {
              var _a;
              (_a = onChange()) == null ? void 0 : _a.apply(this, $$args);
            });
            append($$anchor3, div_3);
          };
          var consequent_4 = ($$anchor3) => {
            var fragment_1 = root_8();
            var div_4 = first_child(fragment_1);
            var node_1 = child(div_4);
            {
              var consequent_1 = ($$anchor4) => {
                var fragment_2 = root_3$1();
                var div_5 = first_child(fragment_2);
                var input_1 = child(div_5);
                remove_input_defaults(input_1);
                reset(div_5);
                var div_6 = sibling(div_5, 2);
                var input_2 = child(div_6);
                remove_input_defaults(input_2);
                reset(div_6);
                template_effect(($0) => set_attribute(input_1, "min", $0), [
                  () => untrack(() => (/* @__PURE__ */ new Date()).toISOString().split("T")[0])
                ]);
                bind_value(input_1, onceDate);
                event("click", input_1, (e) => e.stopPropagation());
                event("input", input_1, function(...$$args) {
                  var _a;
                  (_a = onChange()) == null ? void 0 : _a.apply(this, $$args);
                });
                bind_value(input_2, onceTime);
                event("click", input_2, (e) => e.stopPropagation());
                event("input", input_2, function(...$$args) {
                  var _a;
                  (_a = onChange()) == null ? void 0 : _a.apply(this, $$args);
                });
                append($$anchor4, fragment_2);
              };
              var alternate = ($$anchor4) => {
                var div_7 = root_4();
                var span_1 = child(div_7);
                var text_3 = child(span_1, true);
                reset(span_1);
                var input_3 = sibling(span_1, 2);
                remove_input_defaults(input_3);
                reset(div_7);
                template_effect(
                  ($0, $1) => {
                    set_text(text_3, $0);
                    set_value(input_3, $1);
                  },
                  [
                    () => ($i18n(), untrack(() => $i18n().t("Time"))),
                    () => (deep_read_state(hour()), deep_read_state(minute()), untrack(() => `${String(hour()).padStart(2, "0")}:${String(minute()).padStart(2, "0")}`))
                  ]
                );
                event("input", input_3, (e) => {
                  const [h, m] = e.currentTarget.value.split(":").map(Number);
                  hour(h);
                  minute(m);
                  onChange()();
                });
                event("click", input_3, (e) => e.stopPropagation());
                append($$anchor4, div_7);
              };
              if_block(node_1, ($$render) => {
                if (frequency() === "ONCE") $$render(consequent_1);
                else $$render(alternate, -1);
              });
            }
            var node_2 = sibling(node_1, 2);
            {
              var consequent_2 = ($$anchor4) => {
                var div_8 = root_5();
                var span_2 = child(div_8);
                var text_4 = child(span_2, true);
                reset(span_2);
                var input_4 = sibling(span_2, 2);
                remove_input_defaults(input_4);
                set_attribute(input_4, "min", 1);
                set_attribute(input_4, "max", 31);
                reset(div_8);
                template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Day")))]);
                bind_value(input_4, monthDay);
                event("click", input_4, (e) => e.stopPropagation());
                event("input", input_4, function(...$$args) {
                  var _a;
                  (_a = onChange()) == null ? void 0 : _a.apply(this, $$args);
                });
                append($$anchor4, div_8);
              };
              if_block(node_2, ($$render) => {
                if (frequency() === "MONTHLY") $$render(consequent_2);
              });
            }
            reset(div_4);
            var node_3 = sibling(div_4, 2);
            {
              var consequent_3 = ($$anchor4) => {
                var div_9 = root_7();
                each(div_9, 5, () => get(DAYS), index, ($$anchor5, d) => {
                  var button_1 = root_6();
                  var text_5 = child(button_1, true);
                  reset(button_1);
                  template_effect(
                    ($0) => {
                      set_class(button_1, 1, `flex-1 py-1 text-xs rounded-xl transition ${$0 ?? ""}`);
                      set_text(text_5, (get(d), untrack(() => get(d).label)));
                    },
                    [
                      () => (deep_read_state(selectedDays()), get(d), untrack(() => selectedDays().includes(get(d).key) ? "bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-100" : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"))
                    ]
                  );
                  event("click", button_1, () => {
                    if (selectedDays().includes(get(d).key)) {
                      selectedDays(selectedDays().filter((x) => x !== get(d).key));
                    } else {
                      selectedDays([...selectedDays(), get(d).key]);
                    }
                    onChange()();
                  });
                  append($$anchor5, button_1);
                });
                reset(div_9);
                append($$anchor4, div_9);
              };
              if_block(node_3, ($$render) => {
                if (frequency() === "WEEKLY") $$render(consequent_3);
              });
            }
            append($$anchor3, fragment_1);
          };
          if_block(node, ($$render) => {
            if (frequency() === "CUSTOM") $$render(consequent);
            else if (frequency() !== "HOURLY") $$render(consequent_4, 1);
          });
        }
        reset(div);
        template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Schedule")))]);
        bind_select_value(select, frequency);
        event("click", select, (e) => e.stopPropagation());
        event("change", select, function(...$$args) {
          var _a;
          (_a = onChange()) == null ? void 0 : _a.apply(this, $$args);
        });
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  bind_prop($$props, "buildRrule", buildRrule);
  bind_prop($$props, "parseRrule", parseRrule);
  bind_prop($$props, "getScheduleLabel", getScheduleLabel);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root = from_html(`<button type="button" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl text-xs transition
			text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg> <span class="whitespace-nowrap max-w-32 truncate"> </span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></button>`);
var root_1 = from_html(`<button type="button"><div class="flex text-black dark:text-gray-100 line-clamp-1"><img class="rounded-full size-5 items-center mr-2" loading="lazy"/> <div class="truncate"> </div></div></button>`);
var root_2 = from_html(`<div class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-100"> </div>`);
var root_3 = from_html(`<div slot="content" class="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-72 p-1"><div class="flex items-center gap-2 px-2.5 py-1.5"><!> <input class="w-full text-sm bg-transparent outline-hidden" autocomplete="off"/></div> <div class="overflow-y-auto scrollbar-thin max-h-60"><div class="px-2 text-xs text-gray-500 py-1"> </div> <!></div></div>`);
function ModelDropdown($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const modelLabel = mutable_source();
  const filteredModels = mutable_source();
  const i18n = getContext("i18n");
  let model_id = prop($$props, "model_id", 12, "");
  let side = prop($$props, "side", 8, "top");
  let align = prop($$props, "align", 8, "start");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let showDropdown = mutable_source(false);
  let modelSearch = mutable_source("");
  legacy_pre_effect(() => (deep_read_state(model_id()), $models(), $i18n()), () => {
    var _a;
    set(modelLabel, model_id() ? ((_a = $models().find((m) => m.id === model_id())) == null ? void 0 : _a.name) || model_id() : $i18n().t("Select model"));
  });
  legacy_pre_effect(() => (get(modelSearch), $models()), () => {
    set(filteredModels, (get(modelSearch) ? $models().filter((m) => m.name.toLowerCase().includes(get(modelSearch).toLowerCase()) || m.id.toLowerCase().includes(get(modelSearch).toLowerCase())) : $models()).filter((m) => {
      var _a, _b;
      return !(((_b = (_a = m == null ? void 0 : m.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false);
    }));
  });
  legacy_pre_effect_reset();
  init();
  Dropdown($$anchor, {
    get side() {
      return side();
    },
    get align() {
      return align();
    },
    get show() {
      return get(showDropdown);
    },
    set show($$value) {
      set(showDropdown, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var button = root();
      var span = sibling(child(button), 2);
      var text = child(span, true);
      reset(span);
      next(2);
      reset(button);
      template_effect(() => set_text(text, get(modelLabel)));
      append($$anchor2, button);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_3();
        var div_1 = child(div);
        var node = child(div_1);
        Search(node, { className: "size-3.5", strokeWidth: "2.5" });
        var input = sibling(node, 2);
        remove_input_defaults(input);
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var div_3 = child(div_2);
        var text_1 = child(div_3, true);
        reset(div_3);
        var node_1 = sibling(div_3, 2);
        each(
          node_1,
          1,
          () => get(filteredModels),
          (model) => model.id,
          ($$anchor3, model) => {
            var button_1 = root_1();
            var div_4 = child(button_1);
            var img = child(div_4);
            var div_5 = sibling(img, 2);
            var text_2 = child(div_5, true);
            reset(div_5);
            reset(div_4);
            reset(button_1);
            template_effect(
              ($0) => {
                set_class(button_1, 1, `px-2.5 py-1.5 rounded-xl w-full text-left text-sm ${(deep_read_state(model_id()), get(model), untrack(() => model_id() === get(model).id ? "bg-gray-50 dark:bg-gray-800" : "")) ?? ""}`);
                set_attribute(img, "src", $0);
                set_attribute(img, "alt", (get(model), untrack(() => {
                  var _a;
                  return ((_a = get(model)) == null ? void 0 : _a.name) ?? get(model).id;
                })));
                set_text(text_2, (get(model), untrack(() => get(model).name)));
              },
              [
                () => (deep_read_state(WEBUI_API_BASE_URL), get(model), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${encodeURIComponent(get(model).id)}`))
              ]
            );
            event("error", img, (e) => {
              e.currentTarget.src = "/favicon.png";
            });
            event("click", button_1, () => {
              model_id(get(model).id);
              set(showDropdown, false);
              set(modelSearch, "");
              onChange()();
            });
            append($$anchor3, button_1);
          },
          ($$anchor3) => {
            var div_6 = root_2();
            var text_3 = child(div_6, true);
            reset(div_6);
            template_effect(($0) => set_text(text_3, $0), [
              () => ($i18n(), untrack(() => $i18n().t("No results found")))
            ]);
            append($$anchor3, div_6);
          }
        );
        reset(div_2);
        reset(div);
        template_effect(
          ($0, $1) => {
            set_attribute(input, "placeholder", $0);
            set_text(text_1, $1);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Search a model"))),
            () => ($i18n(), untrack(() => $i18n().t("Models")))
          ]
        );
        bind_value(input, () => get(modelSearch), ($$value) => set(modelSearch, $$value));
        event("click", input, (e) => e.stopPropagation());
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  ModelDropdown as M,
  ScheduleDropdown as S,
  getAutomationById as a,
  getAutomationItems as b,
  createAutomation as c,
  deleteAutomationById as d,
  getAutomationRuns as g,
  runAutomationById as r,
  toggleAutomationById as t,
  updateAutomationById as u
};
