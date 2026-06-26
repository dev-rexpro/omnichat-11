import { _ as __vitePreload } from "./CQrtv1eE.js";
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, v as onDestroy, w as legacy_pre_effect, l as get, x as deep_read_state, y as legacy_pre_effect_reset, c as child, r as reset, a as append, b as pop, s as setup_stores, m as mutable_source, t as template_effect, z as untrack, d as set_text, A as user_derived, k as set, f as from_html, e as store_get } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { b as bind_this } from "./DvKZCnQx.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { S as Spinner } from "./7N5LES1L.js";
var root = from_html(`<div class="flex items-center justify-center h-40"><!></div>`);
var root_1 = from_html(`<div class="flex items-center justify-center h-40 text-gray-500 text-sm"> </div>`);
var root_2 = from_html(`<div class="h-48"><canvas></canvas></div>`);
var root_3 = from_html(`<div class="w-full"><!></div>`);
function ModelActivityChart($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let history = prop($$props, "history", 24, () => []);
  let loading = prop($$props, "loading", 8, false);
  let aggregateWeekly = prop($$props, "aggregateWeekly", 8, false);
  let chartCanvas = mutable_source();
  let chartInstance = null;
  let Chart = null;
  const createChart = async () => {
    if (!get(chartCanvas) || !history().length) return;
    if (!Chart) {
      const module = await __vitePreload(() => import("./CQgH_RXh.js"), true ? [] : void 0, import.meta.url);
      Chart = module.default;
    }
    if (chartInstance) {
      chartInstance.destroy();
    }
    let chartData = history();
    if (aggregateWeekly() && history().length > 7) {
      const weeklyData = {};
      history().forEach((h) => {
        const date = new Date(h.date);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(date);
        monday.setDate(diff);
        const weekKey = monday.toISOString().split("T")[0];
        if (!weeklyData[weekKey]) {
          weeklyData[weekKey] = { won: 0, lost: 0, startDate: weekKey };
        }
        weeklyData[weekKey].won += h.won;
        weeklyData[weekKey].lost += h.lost;
      });
      chartData = Object.values(weeklyData).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }
    const labels = chartData.map((h) => {
      const date = new Date("startDate" in h ? h.startDate : h.date);
      if (aggregateWeekly()) {
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    });
    const wonData = chartData.map((h) => h.won);
    const lostData = chartData.map((h) => -h.lost);
    const barPercentage = aggregateWeekly() ? 0.95 : 0.9;
    const categoryPercentage = aggregateWeekly() ? 1 : 0.95;
    chartInstance = new Chart(get(chartCanvas), {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Won",
            data: wonData,
            backgroundColor: "#5ba3c8",
            borderRadius: 2,
            barPercentage,
            categoryPercentage
          },
          {
            label: "Lost",
            data: lostData,
            backgroundColor: "#d97c5a",
            borderRadius: 2,
            barPercentage,
            categoryPercentage
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: "index" },
        plugins: {
          legend: {
            display: false
            // Hide legend for cleaner look
          },
          tooltip: {
            backgroundColor: "rgba(17, 24, 39, 0.9)",
            titleColor: "#f3f4f6",
            bodyColor: "#d1d5db",
            borderColor: "rgba(75, 85, 99, 0.3)",
            borderWidth: 1,
            padding: 8,
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            callbacks: {
              label(context) {
                const value = Math.abs(context.raw);
                return `${context.dataset.label}: ${value}`;
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: {
              display: false
              // Hide x-axis labels for cleaner look
            },
            border: { display: false }
          },
          y: {
            stacked: true,
            grid: { color: "rgba(107, 114, 128, 0.1)", drawTicks: false },
            ticks: {
              color: "#6b7280",
              font: { size: 10 },
              padding: 8,
              stepSize: 1,
              precision: 0,
              callback(value) {
                return Math.abs(value);
              }
            },
            border: { display: false }
          }
        },
        animation: { duration: 400, easing: "easeOutQuart" }
      }
    });
  };
  onDestroy(() => {
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
  });
  legacy_pre_effect(
    () => (get(chartCanvas), deep_read_state(history()), deep_read_state(loading()), deep_read_state(aggregateWeekly())),
    () => {
      if (get(chartCanvas) && history().length && !loading() && aggregateWeekly() !== void 0) {
        createChart();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root_3();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root();
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var consequent_1 = ($$anchor2) => {
      var div_2 = root_1();
      var text = child(div_2, true);
      reset(div_2);
      template_effect(($0) => set_text(text, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No activity data")))
      ]);
      append($$anchor2, div_2);
    };
    var d = user_derived(() => (deep_read_state(history()), untrack(() => !history().length || history().every((h) => h.won === 0 && h.lost === 0))));
    var alternate = ($$anchor2) => {
      var div_3 = root_2();
      var canvas = child(div_3);
      bind_this(canvas, ($$value) => set(chartCanvas, $$value), () => get(chartCanvas));
      reset(div_3);
      append($$anchor2, div_3);
    };
    if_block(node, ($$render) => {
      if (loading()) $$render(consequent);
      else if (get(d)) $$render(consequent_1, 1);
      else $$render(alternate, -1);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  ModelActivityChart as M
};
