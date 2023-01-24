"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 1077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8909);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(339);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2073);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(733);







const IconSize = {
    sm: 1,
    md: 1.5,
    lg: 2
};
const StyledInput = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().input)`
  all: unset;
  transition: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_5__/* .settings.transition */ .X.transition};
  padding-left: ${({ icon , inputSize  })=>icon && inputSize ? IconSize[inputSize] + 0.2 : 1}rem;
  ${({ inputSize , width  })=>(0,_styles_globals__WEBPACK_IMPORTED_MODULE_2__/* .getSize */ .ap)(inputSize, width)}
  ${({ variant , theme , status  })=>(0,_styles_globals__WEBPACK_IMPORTED_MODULE_2__/* .getColors */ .EC)(status, variant, theme)}
  ${({ theme  })=>(0,_styles_globals__WEBPACK_IMPORTED_MODULE_2__/* .getBoxShadow */ .Ke)(theme.components.shadow1, theme.components.shadow2)};
  color: ${({ theme  })=>theme.font.regular};
  &::placeholder {
    color: ${({ theme  })=>theme.font.placeholder};
  }
  ~ svg {
    padding-left: ${({ icon , inputSize  })=>icon && inputSize ? 0.4 : 1}rem;
    color: ${({ theme  })=>theme.font.placeholder};
  }
  &:focus,
  &:hover {
    ${({ variant , theme , color  })=>(0,_styles_globals__WEBPACK_IMPORTED_MODULE_2__/* .getColors */ .EC)(color, variant, theme)}
    ~ svg {
      color: ${({ theme  })=>theme.components.primary};
    }
  }
`;
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_5__/* .settings.transition */ .X.transition};
  width: ${({ width  })=>width ? width : "100%"};
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
const StyledIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(_components_general_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Feedback = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(_components_general_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography.Text */ .Z.Text)`
  position: absolute;
  bottom: -20px;
`;
const Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ label , value , type , width ="100%" , placeholder , feedback , icon , variant ="outlined" , status ="default" , color ="primary" , size ="md" , className ="" , ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography.Text */ .Z.Text, {
                size: size,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInput, {
                        ref: ref,
                        value: value,
                        placeholder: placeholder,
                        type: type,
                        width: width,
                        variant: variant,
                        color: color,
                        status: status,
                        icon: icon,
                        inputSize: size,
                        ...rest
                    }),
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledIcon, {
                        name: icon,
                        size: size === "sm" ? "lg" : "2xl"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Feedback, {
                size: "sm",
                color: status === "default" ? "regular" : status,
                children: feedback
            })
        ]
    });
});
Input.displayName = "Input";


/***/ })

};
;