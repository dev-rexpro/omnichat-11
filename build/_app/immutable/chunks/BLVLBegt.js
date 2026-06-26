import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, m as mutable_source, o as onMount, l as get, k as set, v as onDestroy, w as legacy_pre_effect, x as deep_read_state, y as legacy_pre_effect_reset, c as child, r as reset, n as sibling, t as template_effect, z as untrack, a as append, d as set_text, q as event, b as pop, s as setup_stores, B as tick, f as from_html, e as store_get, a9 as update } from "./CISwU846.js";
import { i as if_block } from "./Cr87xL-z.js";
import { e as each, i as index } from "./D16NL_tt.js";
import { s as set_class, d as set_style } from "./CpNYkTX2.js";
import { b as bind_element_size } from "./D7uRj-jM.js";
import { i as init } from "./CDjUy0iz.js";
import { p as prop } from "./BFaWdt2I.js";
import { t as toast } from "./C-rLN5eo.js";
import { c as config, b as settings } from "./C2d9K3Bp.js";
import { o as blobToFile } from "./7pK2BKln.js";
import { t as transcribeAudio } from "./BrRtFY2h.js";
import { X as XMark } from "./DBwFTtKj.js";
import { d as dayjs2 } from "./OO7lCI-F.js";
import { l as localizedFormat } from "./_xypnXqU.js";
var root = from_html(`<div class="flex items-center h-full"><div></div></div>`);
var root_1 = from_html(`<div class=" text-gray-500 rounded-full cursor-not-allowed"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><style>.spinner_OSmW {
								transform-origin: center;
								animation: spinner_T6mA 0.75s step-end infinite;
							}
							@keyframes spinner_T6mA {
								8.3% {
									transform: rotate(30deg);
								}
								16.6% {
									transform: rotate(60deg);
								}
								25% {
									transform: rotate(90deg);
								}
								33.3% {
									transform: rotate(120deg);
								}
								41.6% {
									transform: rotate(150deg);
								}
								50% {
									transform: rotate(180deg);
								}
								58.3% {
									transform: rotate(210deg);
								}
								66.6% {
									transform: rotate(240deg);
								}
								75% {
									transform: rotate(270deg);
								}
								83.3% {
									transform: rotate(300deg);
								}
								91.6% {
									transform: rotate(330deg);
								}
								100% {
									transform: rotate(360deg);
								}
							}</style><g class="spinner_OSmW"><rect x="11" y="1" width="2" height="5" opacity=".14"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86"></rect><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)"></rect></g></svg></div>`);
var root_2 = from_html(`<button id="confirm-recording-button" type="button" class="p-1.5 bg-indigo-500 text-white dark:bg-indigo-500 dark:text-blue-950 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg></button>`);
var root_3 = from_html(`<div><div class="flex items-center mr-1"><button type="button"><!></button></div> <div class="flex flex-1 self-center items-center justify-between ml-2 mx-1 overflow-hidden h-6" dir="rtl"><div class="flex items-center gap-0.5 h-6 w-full max-w-full overflow-hidden overflow-x-hidden flex-wrap"></div></div> <div class="flex"><div class="  mx-1.5 pr-1 flex justify-center items-center"><div> </div></div> <div class="flex items-center"><!></div></div></div>`);
function VoiceRecording($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(localizedFormat);
  const i18n = getContext("i18n");
  let recording = prop($$props, "recording", 12, false);
  let transcribe = prop($$props, "transcribe", 8, true);
  let displayMedia = prop($$props, "displayMedia", 8, false);
  let echoCancellation = prop($$props, "echoCancellation", 8, true);
  let noiseSuppression = prop($$props, "noiseSuppression", 8, true);
  let autoGainControl = prop($$props, "autoGainControl", 8, true);
  let className = prop($$props, "className", 8, " p-2.5 w-full max-w-full");
  let onCancel = prop($$props, "onCancel", 8, () => {
  });
  let onConfirm = prop($$props, "onConfirm", 8, (data) => {
  });
  let loading = mutable_source(false);
  let confirmed = false;
  let durationSeconds = mutable_source(0);
  let durationCounter = null;
  let transcription = "";
  const startDurationCounter = () => {
    durationCounter = setInterval(
      () => {
        update(durationSeconds);
      },
      1e3
    );
  };
  const stopDurationCounter = () => {
    clearInterval(durationCounter);
    set(durationSeconds, 0);
  };
  const formatSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  };
  let wakeLock = null;
  const requestWakeLock = async () => {
    if ("wakeLock" in navigator) {
      try {
        wakeLock = await navigator.wakeLock.request("screen");
        /* @__PURE__ */ console.log("Wake Lock acquired");
        wakeLock.addEventListener("release", () => {
          /* @__PURE__ */ console.log("Wake Lock released");
        });
      } catch (err) {
        /* @__PURE__ */ console.log("Wake Lock request failed:", err);
      }
    }
  };
  const releaseWakeLock = async () => {
    if (wakeLock) {
      try {
        await wakeLock.release();
      } catch (err) {
        /* @__PURE__ */ console.log("Wake Lock release failed:", err);
      }
      wakeLock = null;
    }
  };
  let stream;
  let speechRecognition;
  let mediaRecorder;
  let audioChunks = [];
  const MIN_DECIBELS = -45;
  let VISUALIZER_BUFFER_LENGTH = 300;
  let visualizerData = mutable_source(Array(VISUALIZER_BUFFER_LENGTH).fill(0));
  const calculateRMS = (data) => {
    let sumSquares = 0;
    for (let i = 0; i < data.length; i++) {
      const normalizedValue = (data[i] - 128) / 128;
      sumSquares += normalizedValue * normalizedValue;
    }
    return Math.sqrt(sumSquares / data.length);
  };
  const normalizeRMS = (rms) => {
    rms = rms * 10;
    const exp = 1.5;
    const scaledRMS = Math.pow(rms, exp);
    return Math.min(1, Math.max(0.01, scaledRMS));
  };
  const analyseAudio = (stream2) => {
    const audioContext = new AudioContext();
    const audioStreamSource = audioContext.createMediaStreamSource(stream2);
    const analyser = audioContext.createAnalyser();
    analyser.minDecibels = MIN_DECIBELS;
    audioStreamSource.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const domainData = new Uint8Array(bufferLength);
    const timeDomainData = new Uint8Array(analyser.fftSize);
    const detectSound = () => {
      const processFrame = () => {
        if (!recording() || get(loading)) return;
        if (recording() && !get(loading)) {
          analyser.getByteTimeDomainData(timeDomainData);
          analyser.getByteFrequencyData(domainData);
          const rmsLevel = calculateRMS(timeDomainData);
          get(visualizerData).push(normalizeRMS(rmsLevel));
          if (get(visualizerData).length >= VISUALIZER_BUFFER_LENGTH) {
            get(visualizerData).shift();
          }
          set(visualizerData, get(visualizerData));
        }
        window.requestAnimationFrame(processFrame);
      };
      window.requestAnimationFrame(processFrame);
    };
    detectSound();
  };
  const onStopHandler = async (audioBlob, ext = "wav") => {
    var _a, _b, _c, _d, _e, _f;
    await tick();
    const file = blobToFile(audioBlob, `Recording-${dayjs2().format("L LT")}.${ext}`);
    if (transcribe()) {
      if ($config().audio.stt.engine === "web" || (((_c = (_b = (_a = $settings()) == null ? void 0 : _a.audio) == null ? void 0 : _b.stt) == null ? void 0 : _c.engine) ?? "") === "web") {
        return;
      }
      const res = await transcribeAudio(localStorage.token, file, (_f = (_e = (_d = $settings()) == null ? void 0 : _d.audio) == null ? void 0 : _e.stt) == null ? void 0 : _f.language).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        /* @__PURE__ */ console.log(res);
        onConfirm()(res);
      }
    } else {
      onConfirm()({ file, blob: audioBlob });
    }
  };
  const startRecording = async () => {
    var _a, _b, _c;
    set(loading, true);
    try {
      if (displayMedia()) {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: true });
        stream = new MediaStream();
        for (const track of mediaStream.getAudioTracks()) {
          stream.addTrack(track);
        }
        for (const track of mediaStream.getVideoTracks()) {
          track.stop();
        }
      } else {
        stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: echoCancellation(),
            noiseSuppression: noiseSuppression(),
            autoGainControl: autoGainControl()
          }
        });
      }
    } catch (err) {
      /* @__PURE__ */ console.error("Error accessing media devices.", err);
      toast.error($i18n().t("Error accessing media devices."));
      set(loading, false);
      recording(false);
      return;
    }
    const mineTypes = [
      "audio/webm; codecs=opus",
      "audio/webm",
      "audio/ogg; codecs=opus",
      "audio/mp4",
      "audio/wav"
    ];
    mediaRecorder = new MediaRecorder(stream, {
      mimeType: mineTypes.find((type) => MediaRecorder.isTypeSupported(type))
    });
    mediaRecorder.onstart = async () => {
      /* @__PURE__ */ console.log("Recording started");
      set(loading, false);
      startDurationCounter();
      await requestWakeLock();
      audioChunks = [];
      analyseAudio(stream);
    };
    mediaRecorder.ondataavailable = (event2) => audioChunks.push(event2.data);
    mediaRecorder.onstop = async () => {
      var _a2;
      /* @__PURE__ */ console.log("Recording stopped");
      if (confirmed) {
        let type = ((_a2 = audioChunks[0]) == null ? void 0 : _a2.type) || mediaRecorder.mimeType || "audio/webm";
        let ext = type.split("/")[1].split(";")[0] || "webm";
        if (!type.startsWith("audio/")) {
          ext = "webm";
        }
        const audioBlob = new Blob(audioChunks, { type });
        await onStopHandler(audioBlob, ext);
        confirmed = false;
        set(loading, false);
      }
      audioChunks = [];
      recording(false);
    };
    try {
      mediaRecorder.start();
    } catch (error) {
      /* @__PURE__ */ console.error("Error starting recording:", error);
      toast.error($i18n().t("Error starting recording."));
      set(loading, false);
      recording(false);
      return;
    }
    if (transcribe()) {
      if ($config().audio.stt.engine === "web" || (((_c = (_b = (_a = $settings()) == null ? void 0 : _a.audio) == null ? void 0 : _b.stt) == null ? void 0 : _c.engine) ?? "") === "web") {
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
          speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
          speechRecognition.continuous = true;
          const inactivityTimeout = 2e3;
          let timeoutId;
          speechRecognition.start();
          speechRecognition.onresult = async (event2) => {
            var _a2;
            clearTimeout(timeoutId);
            /* @__PURE__ */ console.log(event2);
            const transcript = event2.results[Object.keys(event2.results).length - 1][0].transcript;
            transcription = `${transcription}${transcript}`;
            await tick();
            (_a2 = document.getElementById("chat-input")) == null ? void 0 : _a2.focus();
            timeoutId = setTimeout(
              () => {
                /* @__PURE__ */ console.log("Speech recognition turned off due to inactivity.");
                speechRecognition.stop();
              },
              inactivityTimeout
            );
          };
          speechRecognition.onend = function() {
            /* @__PURE__ */ console.log("recognition ended");
            confirmRecording();
            onConfirm()({ text: transcription });
            confirmed = false;
            set(loading, false);
          };
          speechRecognition.onerror = function(event2) {
            /* @__PURE__ */ console.log(event2);
            toast.error($i18n().t(`Speech recognition error: {{error}}`, { error: event2.error }));
            onCancel()();
            stopRecording();
          };
        }
      }
    }
  };
  const stopRecording = async () => {
    if (recording() && mediaRecorder) {
      await mediaRecorder.stop();
    }
    if (speechRecognition) {
      speechRecognition.stop();
    }
    await releaseWakeLock();
    stopDurationCounter();
    audioChunks = [];
    set(visualizerData, Array(VISUALIZER_BUFFER_LENGTH).fill(0));
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    stream = null;
  };
  const confirmRecording = async () => {
    set(loading, true);
    confirmed = true;
    if (recording() && mediaRecorder) {
      await mediaRecorder.stop();
    }
    clearInterval(durationCounter);
    await releaseWakeLock();
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    stream = null;
  };
  let resizeObserver;
  let containerWidth = mutable_source();
  let maxVisibleItems = mutable_source(300);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      stopRecording();
      onCancel()();
    }
  };
  const handleVisibilityChange = async () => {
    if (recording() && document.visibilityState === "visible") {
      await requestWakeLock();
    }
  };
  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    resizeObserver = new ResizeObserver(() => {
      VISUALIZER_BUFFER_LENGTH = Math.floor(window.innerWidth / 4);
      if (get(visualizerData).length > VISUALIZER_BUFFER_LENGTH) {
        set(visualizerData, get(visualizerData).slice(get(visualizerData).length - VISUALIZER_BUFFER_LENGTH));
      } else {
        set(visualizerData, Array(VISUALIZER_BUFFER_LENGTH - get(visualizerData).length).fill(0).concat(get(visualizerData)));
      }
    });
    resizeObserver.observe(document.body);
  });
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    releaseWakeLock();
    resizeObserver.disconnect();
  });
  legacy_pre_effect(() => deep_read_state(recording()), () => {
    if (recording()) {
      startRecording();
    } else {
      stopRecording();
    }
  });
  legacy_pre_effect(() => get(containerWidth), () => {
    set(maxVisibleItems, Math.floor(get(containerWidth) / 5));
  });
  legacy_pre_effect_reset();
  init();
  var div = root_3();
  var div_1 = child(div);
  var button = child(div_1);
  var node = child(button);
  XMark(node, { className: "size-4" });
  reset(button);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  each(
    div_3,
    5,
    () => (get(visualizerData), untrack(() => get(visualizerData).slice().reverse())),
    index,
    ($$anchor2, rms) => {
      var div_4 = root();
      var div_5 = child(div_4);
      reset(div_4);
      template_effect(
        ($0) => {
          set_class(div_5, 1, `w-[2px] shrink-0
                    
                    ${get(loading) ? " bg-gray-500 dark:bg-gray-400   " : "bg-indigo-500 dark:bg-indigo-400  "} 
                    
                    inline-block h-full`);
          set_style(div_5, `height: ${$0 ?? ""}%;`);
        },
        [
          () => (get(rms), untrack(() => Math.min(100, Math.max(14, get(rms) * 100))))
        ]
      );
      append($$anchor2, div_4);
    }
  );
  reset(div_3);
  reset(div_2);
  var div_6 = sibling(div_2, 2);
  var div_7 = child(div_6);
  var div_8 = child(div_7);
  var text = child(div_8, true);
  reset(div_8);
  reset(div_7);
  var div_9 = sibling(div_7, 2);
  var node_1 = child(div_9);
  {
    var consequent = ($$anchor2) => {
      var div_10 = root_1();
      append($$anchor2, div_10);
    };
    var alternate = ($$anchor2) => {
      var button_1 = root_2();
      event("click", button_1, async () => {
        await confirmRecording();
      });
      append($$anchor2, button_1);
    };
    if_block(node_1, ($$render) => {
      if (get(loading)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  reset(div_9);
  reset(div_6);
  reset(div);
  template_effect(
    ($0) => {
      set_class(
        div,
        1,
        `${get(loading) ? " bg-gray-100/50 dark:bg-gray-850/50" : "bg-indigo-300/10 dark:bg-indigo-500/10 "} rounded-full flex justify-between ${className() ?? ""}`,
        "svelte-nkn4fu"
      );
      set_class(button, 1, `p-1.5

            ${get(loading) ? " bg-gray-200 dark:bg-gray-700/50" : "bg-indigo-400/20 text-indigo-600 dark:text-indigo-300 "} 


             rounded-full`);
      div_2.dir = div_2.dir;
      set_class(div_8, 1, `text-sm
        
        
        ${get(loading) ? " text-gray-500  dark:text-gray-400  " : " text-indigo-400 "} 
       font-medium flex-1 mx-auto text-center`);
      set_text(text, $0);
    },
    [
      () => (get(durationSeconds), untrack(() => formatSeconds(get(durationSeconds))))
    ]
  );
  event("click", button, async () => {
    stopRecording();
    onCancel()();
  });
  bind_element_size(div, "clientWidth", ($$value) => set(containerWidth, $$value));
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  VoiceRecording as V
};
