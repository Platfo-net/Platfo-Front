"use strict";
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 6023:
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
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(733);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(339);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9228);








const { Text , Paragraph  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z;
const isRtl = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_5__/* .getIsRtl */ .$0)();
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const AvatarWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  ${()=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
    margin-right: ${isRtl ? 0 : "2rem"};
    margin-left: ${isRtl ? "2rem" : 0};
  `}
`;
const InfoWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-between;
`;
const ExtraWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: column;
`;
const InfoSection = ({ avatar , username , followers , follows , name , description , extra  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_7__/* .Tile */ .n, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                    children: [
                        avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarWrapper, {
                            children: avatar
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoWrapper, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    size: "xl",
                                    children: username
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        followers && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                                    weight: "semiBold",
                                                    children: followers
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Text, {
                                                    className: "mr-16",
                                                    children: [
                                                        " ",
                                                        t("followers")
                                                    ]
                                                })
                                            ]
                                        }),
                                        follows && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                                    weight: "semiBold",
                                                    children: follows
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Text, {
                                                    children: [
                                                        " ",
                                                        t("followers")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    weight: "semiBold",
                                    children: name
                                }),
                                description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Paragraph, {
                                    children: description
                                })
                            ]
                        })
                    ]
                }),
                extra && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExtraWrapper, {
                    children: extra
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoSection);


/***/ })

};
;