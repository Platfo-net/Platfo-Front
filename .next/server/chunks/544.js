"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ Dot)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/feedback/Dot/Dot.tsx




const StyledDot = (styled_default()).span`
  border-radius: 100%;
  ${({ theme , isTrue , size =0.8  })=>react_.css`
    display: block;
    width: ${size}rem;
    height: ${size}rem;
    background: ${isTrue ? theme.components.success : theme.components.danger};
    box-shadow: ${isTrue ? `0 0 5px 2px rgba(96, 214, 164, 0.59),${theme.components.success} 0 0 8px 0` : `
    0 0 5px 2px rgba(254, 129, 130, 0.5),${theme.components.danger} 0 0 8px 0`};
  `}
`;
const Dot = ({ isTrue , size =0.8 , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledDot, {
        isTrue: isTrue,
        size: size,
        className: className
    });
};

;// CONCATENATED MODULE: ./components/feedback/Dot/index.ts



/***/ }),

/***/ 9620:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_config__WEBPACK_IMPORTED_MODULE_0__]);
_axios_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class LiveChat extends _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(){
        super({
            suffix: "api/v1/live-chat"
        });
    }
    // TODO Pagination Params
    getContacts = (page_id, data = [])=>this.$axios.post(`contact/all/${page_id}`, data);
    getContact = (id)=>this.$axios.get(`contact/${id}`);
}
const LiveChatService = new LiveChat();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiveChatService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;