"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* reexport */ Tile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.ts
var globals = __webpack_require__(339);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/general/Button/index.tsx + 2 modules
var Button = __webpack_require__(8217);
// EXTERNAL MODULE: ./components/general/Typography/index.ts + 1 modules
var Typography = __webpack_require__(733);
// EXTERNAL MODULE: ./components/feedback/Modal/index.tsx + 1 modules
var Modal = __webpack_require__(2121);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/dataDisplay/Tile/Tile.tsx








const isRTL = (0,globals/* getIsRtl */.$0)();
const Section = (styled_default()).section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ width , height  })=>(0,globals/* getTileSize */.V_)(width, height)}
  padding: 1rem;
  background: ${({ theme  })=>theme.background};
  color: ${({ theme  })=>theme.font.regular};
  ${({ theme  })=>(0,globals/* getBoxShadow */.Ke)(theme.components.shadow1, theme.components.shadow2)};
  header {
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: ${isRTL ? "flex-end" : "flex-start"};
      position: relative;
      .actions {
        position: absolute;
        right: ${isRTL ? "auto" : 0};
        left: ${isRTL ? 0 : "auto"};
      }
    }
  }
`;
const Main = (styled_default()).main`
  display: flex;
  justify-content: center;
`;
const Footer = (styled_default()).footer``;
const Tile = ({ data , title , width ="100%" , height ="auto" , avatar , children , remove , click , clickLabel ="" , clickColor ="primary" , className ="" , isClickDisable =false  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        height: height,
        width: width,
        className: className,
        children: [
            (title || remove || avatar) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "actions",
                                children: remove && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                            icon: "Cross",
                                            isIconOnly: true,
                                            onClick: ()=>setIsVisible(true),
                                            size: "sm",
                                            title: "Button",
                                            variant: "text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Modal/* Modal */.u, {
                                            isVisible: isVisible,
                                            cancel: ()=>setIsVisible(false),
                                            width: "40%",
                                            submitKey: "yes",
                                            cancelKey: "no",
                                            submit: ()=>remove(data),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "py-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography.Text */.Z.Text, {
                                                    children: t("are-you-sure-to-delete")
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            title && /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography.Title */.Z.Title, {
                                level: "h2",
                                size: "2xl",
                                weight: "medium",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-row justify-center",
                        children: avatar
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: children
            }),
            click && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                    color: clickColor,
                    title: clickLabel,
                    onClick: ()=>click(data),
                    width: "100%",
                    isDisable: isClickDisable
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/dataDisplay/Tile/index.tsx



/***/ }),

/***/ 2121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.ts
var globals = __webpack_require__(339);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./styles/Settings.ts
var Settings = __webpack_require__(2073);
// EXTERNAL MODULE: ./components/general/Button/index.tsx + 2 modules
var Button = __webpack_require__(8217);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./components/general/Typography/index.ts + 1 modules
var Typography = __webpack_require__(733);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/feedback/Modal/Modal.tsx








const isRTL = (0,globals/* getIsRtl */.$0)();
const getModalSize = (width, height)=>react_.css`
  width: ${width};
  height: ${height};
  border-radius: ${Settings/* settings.borderRadius_lg */.X.borderRadius_lg};
`;
const Wrapper = (styled_default()).div`
  display: ${({ isVisible  })=>isVisible ? "flex" : "none"};
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 !important;
`;
const Section = (styled_default()).section`
  z-index: 10;
  position: relative;
  padding: 1rem;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  ${({ width , height  })=>getModalSize(width, height)};
  background: ${({ theme  })=>theme.background};
  color: ${({ theme  })=>theme.font.regular};
  ${({ theme  })=>(0,globals/* getBoxShadow */.Ke)(theme.components.shadow1, theme.components.shadow2)};
  header {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    border-bottom: ${({ theme  })=>`1px solid ${theme.components.border}`};
    padding-bottom: 4px;
    .title {
      display: flex;
      flex-direction: row;
      justify-content: ${isRTL ? "flex-end" : "flex-start"};
      position: relative;
      .actions {
        position: absolute;
        right: ${isRTL ? "auto" : 0};
        left: ${isRTL ? 0 : "auto"};
      }
    }
  }
`;
const BackDrop = (styled_default()).div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme  })=>theme.components.backDrop};
  opacity: 0.75;
  ${Settings/* settings.transition */.X.transition}
`;
const Footer = (styled_default()).footer`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  button {
    margin-right: 4px;
    margin-left: 4px;
  }
`;
const Main = (styled_default()).main`
  display: flex;
  justify-content: center;
`;
const Modal = ({ isVisible =false , isLoading =false , title , width ="100%" , height ="auto" , submitKey ="save" , cancelKey ="cancel" , submitType ="button" , children , cancel , submit  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title,
        isVisible: isVisible,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BackDrop, {
                onClick: cancel
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
                height: height,
                width: width,
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "actions",
                                    children: cancel && /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                        icon: "Cross",
                                        isIconOnly: true,
                                        onClick: ()=>cancel(),
                                        size: "md",
                                        title: "Button",
                                        variant: "text"
                                    })
                                }),
                                title && /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography.Title */.Z.Title, {
                                    level: "h2",
                                    size: "2xl",
                                    weight: "medium",
                                    children: title
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                        children: children
                    }),
                    (submit && submitType || submitType === "submit") && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Footer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                size: "sm",
                                title: t(submitKey),
                                onClick: submit,
                                color: "secondary",
                                type: submitType,
                                isLoading: isLoading
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                size: "sm",
                                title: t(cancelKey),
                                onClick: cancel
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/feedback/Modal/index.tsx



/***/ })

};
;