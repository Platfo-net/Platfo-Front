"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 1230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_general_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8909);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733);





const { Text  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z;
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: column;
`;
const StyledIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(_components_general_Icon__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .J)`
  margin: auto;
`;
const StyledText = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(Text)`
  margin: 4px auto;
`;
const IconText = ({ icon , title , size ="lg"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledIcon, {
                name: icon,
                size: size
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledText, {
                size: size,
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconText);


/***/ }),

/***/ 6337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_config__WEBPACK_IMPORTED_MODULE_0__]);
_axios_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class Account extends _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(){
        super({
            suffix: "api/v1/account"
        });
    }
    getAccounts = (params)=>this.$axios.get(`all`, {
            params
        });
    getAccount = (id)=>this.$axios.get(id);
    deleteAccount = (id)=>this.$axios.delete(id);
}
const AccountService = new Account();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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