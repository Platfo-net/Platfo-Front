"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 484:
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
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(339);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733);
/* harmony import */ var _components_general_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8909);






const Button = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${({ width , height  })=>(0,_styles_globals__WEBPACK_IMPORTED_MODULE_3__/* .getTileSize */ .V_)(width, height)};
  background: transparent;
  border: ${({ theme  })=>`3px dashed ${theme.components.border}`};
  box-shadow: none;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    .icon {
      background: ${({ theme  })=>theme.components.border};
      border-radius: 9999px;
      padding: 16px;
      margin-bottom: 16px;
    }
  }
  &:hover {
    border: ${({ theme , color ="secondary"  })=>`3px dashed ${theme.components[color]}`};
    .icon {
      background: ${({ theme , color ="secondary"  })=>theme.components[color]};
    }
  }
`;
const TileButton = ({ title , onClick , width ="255px" , height ="255px" , color ="secondary"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
        onClick: onClick,
        width: width,
        height: height,
        color: color,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "icon",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .J, {
                        name: "Plus"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography.Text */ .Z.Text, {
                    weight: "semiBold",
                    children: title
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileButton);


/***/ })

};
;