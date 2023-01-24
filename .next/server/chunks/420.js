"use strict";
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 1420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_feedback_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2121);
/* harmony import */ var _components_dataDisplay_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5405);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733);






const { Text  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z;
const StyledModal = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_components_feedback_Modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u)`
  width: auto;
`;
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
const WrapperLogo = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  margin: auto;
  svg {
    margin-right: 4px;
  }
`;
const WrapperBalls = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  .LoaderBalls {
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
      width: 20px;
      height: 20px;
      border-radius: 50%;

      &:nth-child(1) {
        animation: bouncing 0.4s alternate infinite
          cubic-bezier(0.6, 0.05, 0.15, 0.95);
        background: ${({ theme  })=>theme.components.secondary};
      }

      &:nth-child(2) {
        animation: bouncing 0.4s 0.1s alternate infinite
          cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
        background: ${({ theme  })=>theme.components.chatbot};
      }

      &:nth-child(3) {
        animation: bouncing 0.4s 0.2s alternate infinite
          cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
        background: ${({ theme  })=>theme.components.liveChat};
      }
    }
  }

  @keyframes bouncing {
    0% {
      transform: translate3d(0, 10px, 0) scale(1.2, 0.85);
    }

    100% {
      transform: translate3d(0, -20px, 0) scale(0.9, 1.1);
    }
  }
`;
const BackdropLoading = ({ loading  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModal, {
        isVisible: loading,
        width: "auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(WrapperLogo, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Logo__WEBPACK_IMPORTED_MODULE_3__/* .Logo */ .T, {
                            size: 3
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                            weight: "semiBold",
                            size: "6xl",
                            children: "Platfo"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrapperBalls, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "LoaderBalls",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "LoaderBalls__item"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "LoaderBalls__item"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "LoaderBalls__item"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackdropLoading);


/***/ })

};
;