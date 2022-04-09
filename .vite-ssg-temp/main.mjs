import { resolveComponent, useSSRContext, createApp, defineComponent, mergeProps, ref, onMounted, unref } from "vue";
import { createRouter, createWebHashHistory, useRouter } from "vue-router";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderTeleport, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import dplayer from "dplayer";
import { useIntersectionObserver } from "@vueuse/core";
const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => Promise.resolve().then(function() {
      return main$1;
    })
  },
  {
    path: "/player",
    name: "player",
    component: () => Promise.resolve().then(function() {
      return player;
    })
  },
  {
    path: "/drag",
    name: "drag",
    component: () => Promise.resolve().then(function() {
      return drag;
    })
  },
  {
    path: "/rcMenu",
    name: "rcMenu",
    component: () => Promise.resolve().then(function() {
      return rcMenu;
    })
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
var index = "";
createApp(App).use(router).mount("#app");
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "main-layer" }, _attrs))} data-v-3d461410><button data-v-3d461410>player</button><button data-v-3d461410>drag</button><button data-v-3d461410>rcMenu</button></article>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/main.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var main = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3d461410"]]);
var main$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": main
}, Symbol.toStringTag, { value: "Module" }));
var player_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const playerRef = ref();
    const playerFatherRef = ref();
    const isOpen = ref(true);
    onMounted(() => {
      new dplayer({
        container: playerRef.value,
        video: {
          url: "https://zyjcould.ltd/mv/player.mp4"
        }
      });
      useIntersectionObserver(playerFatherRef, ([{ isIntersecting }]) => {
        isOpen.value = isIntersecting;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="smaller-player" data-v-2c79f1b0></div><div class="box-back-player" data-v-2c79f1b0><div class="big-player" data-v-2c79f1b0>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle({ "height": "100%" })}" data-v-2c79f1b0></div>`);
      }, ".smaller-player", isOpen.value, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/player/player.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var player$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2c79f1b0"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(player$1), _attrs, null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/player.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var player = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
var dragImage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const dragImageRef = ref();
    onMounted(() => {
      dragImageRef.value.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      dragImageRef.value.addEventListener("drop", (e) => {
        e.preventDefault();
        Array.from(e.dataTransfer.items).forEach((item) => {
          if (item.kind === "file") {
            const file = item.getAsFile();
            const url = URL.createObjectURL(file);
            const img = new Image();
            img.src = url;
            img.style.maxHeight = "100%";
            img.style.maxWidth = "100%";
            e.target.innerText = "";
            e.target.appendChild(img);
          }
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-5bdf1a24><p${ssrRenderAttr("draggable", "true")} class="drag-image" data-v-5bdf1a24>\u62D6\u653E\u56FE\u7247\u55BD</p></article>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/drag/dragImage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var dragImage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5bdf1a24"]]);
var dragBlock_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const dragRef = ref();
    onMounted(() => {
      dragRef.value.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        if (e.target.className === "drag-item")
          ;
      });
      dragRef.value.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      dragRef.value.addEventListener("dragenter", (e) => {
        if (e.target.className === "drag-item")
          ;
      });
      dragRef.value.addEventListener("drop", (e) => {
        var _a, _b;
        if (e.target.className === "drag-container" || e.target.className === "drag-block") {
          const dragEle = (_a = e.dataTransfer) == null ? void 0 : _a.getData("text/plain");
          e.target.appendChild(document.getElementById(dragEle));
        }
        if (e.target.className === "drag-item") {
          const dragEle = (_b = e.dataTransfer) == null ? void 0 : _b.getData("text/plain");
          e.target.parentElement.insertBefore(document.getElementById(dragEle), e.target.nextElementSibling);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section data-v-a0b1514a><article class="drag-block" data-v-a0b1514a><div id="drag-item1" class="drag-item" style="${ssrRenderStyle({ "background-color": "cadetblue" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div><div id="drag-item2" class="drag-item" style="${ssrRenderStyle({ "background-color": "gray" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div><div id="drag-item3" class="drag-item" style="${ssrRenderStyle({ "background-color": "skyblue" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div><div id="drag-item4" class="drag-item" style="${ssrRenderStyle({ "background-color": "yellowgreen" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div><div id="drag-item5" class="drag-item" style="${ssrRenderStyle({ "background-color": "whitesmoke" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div><div id="drag-item6" class="drag-item" style="${ssrRenderStyle({ "background-color": "khaki" })}"${ssrRenderAttr("draggable", "true")} data-v-a0b1514a> huohuo </div></article><article class="drag-container" data-v-a0b1514a></article></section>`);
      _push(ssrRenderComponent(dragImage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/drag/dragBlock.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var dragBlock = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a0b1514a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(dragBlock), _attrs, null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/drag.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var drag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var Menu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const menu = [
      {
        name: "\u64AD\u653E",
        icon: "play"
      },
      {
        name: "\u4E0B\u8F7D",
        icon: "download"
      },
      {
        name: "\u6536\u85CF",
        icon: "collect"
      },
      {
        name: "\u52A0\u901F",
        icon: "speed"
      },
      {
        name: "\u5206\u4EAB",
        icon: "share"
      }
    ];
    const menuItem = [
      {
        name: "\u{1F44E}"
      },
      {
        name: "\u{1F44C}"
      },
      {
        name: "\u{1F382}"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-06b0cf30><article class="content" data-v-06b0cf30><ul class="menu" data-v-06b0cf30><!--[-->`);
      ssrRenderList(menu, (item) => {
        _push(`<li class="item" data-v-06b0cf30><span data-v-06b0cf30>${ssrInterpolate(item.name)}</span></li>`);
      });
      _push(`<!--]--><li class="item share" data-v-06b0cf30><div class="share-button" data-v-06b0cf30><span data-v-06b0cf30>\u{1F60A} </span></div><ul class="share-item" data-v-06b0cf30><!--[-->`);
      ssrRenderList(menuItem, (item) => {
        _push(`<li class="item" data-v-06b0cf30><span data-v-06b0cf30>${ssrInterpolate(item.name)}</span></li>`);
      });
      _push(`<!--]--></ul></li></ul></article></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/menu/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-06b0cf30"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Menu), _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/rcMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var rcMenu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
