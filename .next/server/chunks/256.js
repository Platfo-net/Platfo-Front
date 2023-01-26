exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 5900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ Avatar)
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
// EXTERNAL MODULE: ./components/general/Icon/index.ts + 2 modules
var Icon = __webpack_require__(8909);
// EXTERNAL MODULE: ./components/dataDisplay/Image/index.tsx + 1 modules
var Image = __webpack_require__(9190);
// EXTERNAL MODULE: ./components/general/Typography/index.ts + 1 modules
var Typography = __webpack_require__(733);
;// CONCATENATED MODULE: ./components/dataDisplay/Avatar/Avatar.tsx







const { Text  } = Typography/* Typography */.Z;
const getSize = (size)=>react_.css`
  width: ${size}rem;
  height: ${size}rem;
`;
const Wrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ size  })=>react_.css`
    width: ${size}rem;
  `};
  height: fit-content;

  ${({ data , color ="secondary" , theme , isActive  })=>react_.css`
    span {
      color: ${isActive ? theme.components[color] : "unset"};
    }
    &:hover {
      span {
        color: ${data ? theme.components[color] : "unset"};
      }
    }
  `}
`;
const WrapperImage = (styled_default()).div`
  display: flex;
  flex-direction: column;
  border-radius: 9999px;
  padding: 4px;
  border-color: ${({ theme  })=>theme.components.border};
  border-width: 2px;
  position: relative;
  img {
    object-fit: cover;
    border-radius: 9999px;
    padding: 4px;
  }

  ${({ data , color ="secondary" , theme , isActive  })=>react_.css`
    border-color: ${isActive ? theme.components[color] : theme.components.border};
    span {
      color: ${isActive ? theme.components[color] : "unset"};
    }
    &:hover {
      cursor: ${data ? "pointer" : "default"};
      border-color: ${data ? theme.components[color] : theme.components.border};
    }
  `}
  ${({ size  })=>getSize(size)};
`;
const WrapperIcon = (styled_default()).div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme , icon  })=>icon ? theme.brand[icon] : "transparent"};
  border-radius: 9999px;
  svg {
    color: #FFF;
    margin: auto;
  }
}
`;
const WrapperText = (styled_default()).div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme  })=>theme.components.border};
  border-radius: 9999px;
  span {
    margin: auto;
  }
`;
const WrapperSmallAvatar = (styled_default()).div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme , icon  })=>icon ? theme.brand[icon] : "transparent"};
  border-radius: 9999px;
  svg {
    color: #FFF;
    margin: auto;
  }
}
`;
const WrapperTitle = (styled_default()).div`
  margin: 0.5rem auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  ${({ size  })=>react_.css`
    width: ${size}rem;
  `};
`;
const Avatar = ({ type , size =5 , icon , url , data , color , isActive , title , text , click  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        size: size,
        color: color,
        data: data,
        isActive: isActive,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperImage, {
                size: size,
                onClick: data && click ? ()=>click(data) : ()=>{},
                color: color,
                data: data,
                isActive: isActive,
                children: [
                    type === "image" && url && /*#__PURE__*/ jsx_runtime_.jsx(Image/* Image */.E, {
                        src: url,
                        alt: ""
                    }),
                    type === "icon" && icon && /*#__PURE__*/ jsx_runtime_.jsx(WrapperIcon, {
                        icon: icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Icon */.J, {
                            name: icon,
                            size: "6xl"
                        })
                    }),
                    type === "text" && /*#__PURE__*/ jsx_runtime_.jsx(WrapperText, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography.Text */.Z.Text, {
                            weight: "semiBold",
                            size: "lg",
                            children: text
                        })
                    }),
                    type === "image" && url && icon && /*#__PURE__*/ jsx_runtime_.jsx(WrapperSmallAvatar, {
                        icon: icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Icon */.J, {
                            name: icon
                        })
                    })
                ]
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx(WrapperTitle, {
                size: size,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    weight: "semiBold",
                    children: title
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/dataDisplay/Avatar/index.ts



/***/ }),

/***/ 2967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(339);
/* harmony import */ var _styles_Themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3907);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8742);
/* harmony import */ var _lib_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7157);
/* harmony import */ var _components_layouts_DashboardLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2619);
/* harmony import */ var _stores_reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4082);
/* harmony import */ var _stores_reduxHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7627);
/* harmony import */ var _components_layouts_DashboardLayout_TopBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9056);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2073);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_DashboardLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__]);
_components_layouts_DashboardLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const isRtl = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_5__/* .getIsRtl */ .$0)();
const Content = (_emotion_styled__WEBPACK_IMPORTED_MODULE_13___default().main)`
  height: 100%;
  position: relative;
  z-index: 60;
  padding: 0.8rem;
  overflow: auto;
  ${({ theme  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css`
    background: ${theme.components.background};
    border-radius: ${isRtl ? `0 ${_styles_Settings__WEBPACK_IMPORTED_MODULE_14__/* .settings.borderRadius_xlg */ .X.borderRadius_xlg} ${_styles_Settings__WEBPACK_IMPORTED_MODULE_14__/* .settings.borderRadius_xlg */ .X.borderRadius_xlg} 0` : `${_styles_Settings__WEBPACK_IMPORTED_MODULE_14__/* .settings.borderRadius_xlg */ .X.borderRadius_xlg} 0 0 ${_styles_Settings__WEBPACK_IMPORTED_MODULE_14__/* .settings.borderRadius_xlg */ .X.borderRadius_xlg}`};
  `}
`;
const DashboardLayout = ({ children , meta , topMenu , color  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isDark  } = (0,_stores_reduxHooks__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .C)((state)=>({
            isDark: state.user.isDark
        }));
    const dispatch = (0,_stores_reduxHooks__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .T)();
    const checkAuthentication = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const token = _lib_token__WEBPACK_IMPORTED_MODULE_8__/* .tokenObj.getAccessToken */ .o.getAccessToken();
        if (!token) {
            router.push(_constants_enums__WEBPACK_IMPORTED_MODULE_7__/* .Path.Login */ .y$.Login);
        }
    }, [
        router
    ]);
    const addThemeSettingInHtml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const isDarkMode = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_5__/* .getIsDark */ .uQ)();
        dispatch((0,_stores_reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .changeTheme */ .L)(isDarkMode));
        (0,_styles_globals__WEBPACK_IMPORTED_MODULE_5__/* .setThemeSettingInHtml */ .E4)();
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window !== undefined) {
            addThemeSettingInHtml();
            checkAuthentication();
        }
    }, [
        addThemeSettingInHtml,
        checkAuthentication,
        isDark
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: "551990259962247",
                autoLogAppEvents: true,
                xfbml: true,
                version: "v14.0"
            });
        };
    }, []);
    const theme = _styles_Themes__WEBPACK_IMPORTED_MODULE_6__/* .Themes */ .b[isDark ? "dark" : "light"];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: meta.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex w-screen h-screen bg-[#ffffff] dark:bg-[#1e1f25]`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full relative",
                        children: [
                            topMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout_TopBar__WEBPACK_IMPORTED_MODULE_12__/* .TopBar */ .D, {
                                data: topMenu,
                                color: color
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                                children: children
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_15___default()), {
                async: true,
                defer: true,
                crossOrigin: "anonymous",
                src: "https://connect.facebook.net/en_US/sdk.js"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(339);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_general_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8909);
/* harmony import */ var _components_general_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8217);
/* harmony import */ var _stores_reduxHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7627);
/* harmony import */ var _stores_reducers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5719);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8742);
/* harmony import */ var _lib_LocalStorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5449);
/* harmony import */ var _stores_reducers_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_reducers_auth__WEBPACK_IMPORTED_MODULE_10__]);
_stores_reducers_auth__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const isRtl = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_5__/* .getIsRtl */ .$0)();
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  border-right-width: 4px;
  border-left-width: 4px;
  border-left-style: solid;
  border-right-style: solid;
  cursor: ${({ data  })=>data.isDisable ? "not-allowed" : "pointer"};
  ${({ theme , data  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
    opacity: ${data.isDisable ? "0.3" : "1"};
    border-right-color: ${theme.background};
    border-left-color: ${theme.background};
  `}

  &:hover, &.active {
    ${({ theme , data  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
      color: ${data.isDisable ? "inherit" : data.color && theme.components[data.color]};
      border: ${data.isDisable ? "none" : ""};
      border-left-color: ${isRtl ? data.color && theme.components[data.color] : theme.background};
      border-right-color: ${isRtl ? theme.background : data.color && theme.components[data.color]};
    `}
  }
`;
const StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_components_general_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z)`
  padding: 20px 0;
  border-right-width: 4px;
  border-left-width: 4px;
  border-left-style: solid;
  border-right-style: solid;
  border-radius: 0;
  transition: unset;
  svg {
    color: ${({ theme  })=>theme.font.regular};
    width: 30px;
    height: 30px;
  }
  ${({ theme , isDisable  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
    opacity: ${isDisable ? "0.3" : "1"};
    color: ${theme.font.regular};
    border-right-color: ${theme.background};
    border-left-color: ${theme.background};
  `}

  &:hover,
  &.active {
    ${({ theme , color ="secondary" , isDisable  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
      color: ${isDisable ? "inherit" : theme.components[color]};
      border-left-color: ${isRtl ? theme.components[color] : theme.background};
      border-right-color: ${isRtl ? theme.background : theme.components[color]};
    `}
    svg {
      color: ${({ theme , color ="secondary" , isDisable  })=>isDisable ? "inherit" : theme.components[color]};
    }
  }
`;
const MenuItem = ({ data  })=>{
    const { isDark  } = (0,_stores_reduxHooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppSelector */ .C)((state)=>({
            isDark: state.user.isDark
        }));
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,_stores_reduxHooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    const onClick = (key)=>{
        if (key === "logout") {
            dispatch((0,_stores_reducers_auth__WEBPACK_IMPORTED_MODULE_10__/* .logout */ .kS)());
            router.push(_constants_enums__WEBPACK_IMPORTED_MODULE_11__/* .Path.Login */ .y$.Login);
        }
        if (key === "theme") {
            (0,_lib_LocalStorage__WEBPACK_IMPORTED_MODULE_13__/* .store */ .h)("theme", isDark ? "light" : "dark");
            dispatch((0,_stores_reducers_user__WEBPACK_IMPORTED_MODULE_12__/* .changeTheme */ .L)(!isDark));
        }
    };
    const getItem = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            className: router.pathname.includes(data.path) ? "active" : "",
            data: data,
            children: data.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_Icon__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .J, {
                name: data.icon,
                color: "inherit",
                size: "6xl"
            })
        });
    };
    if (data.type === "link") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: !data.isDisable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: data.path,
                children: getItem()
            }) : getItem()
        });
    }
    if (data.type === "button") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
            color: data.color,
            isDisable: data.isDisable,
            onClick: ()=>onClick(data.key),
            title: "",
            isIconOnly: true,
            icon: data.icon,
            type: "button",
            variant: "text",
            className: router.pathname.includes(data.path) ? "active" : ""
        });
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dataDisplay_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5405);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_DashboardLayout_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9690);
/* harmony import */ var _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9294);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_DashboardLayout_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__]);
_components_layouts_DashboardLayout_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Sidebar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: `flex flex-col z-50`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex-grow flex flex-col justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "block m-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Logo__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .T, {
                            size: 4
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "flex flex-col ",
                    children: _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_5__/* .sidebarMenu.products.map */ .s.products.map((menuItem)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            data: menuItem
                        }, menuItem.key);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "flex flex-col ",
                    children: _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_5__/* .sidebarMenu.tools.map */ .s.tools.map((menuItem)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            data: menuItem
                        }, menuItem.key);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ TopBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_general_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _styles_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2073);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(339);








const isRtl = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_7__/* .getIsRtl */ .$0)();
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  padding-top: 20px;
  position: relative;
`;
const StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(_components_general_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z)`
  margin: 0 8px;
  border-radius: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_5__/* .settings.borderRadius_md */ .X.borderRadius_md} ${_styles_Settings__WEBPACK_IMPORTED_MODULE_5__/* .settings.borderRadius_md */ .X.borderRadius_md} 0 0;
  padding: 0 18px;
  box-shadow: none;
  width: auto;
  ${({ theme  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
    background: ${theme.background};
    border: none;
    color: ${theme.font.regular};
  `};
  span {
    margin-top: auto;
    padding-bottom: 8px;
  }

  &.active {
    ${({ theme , color ="secondary"  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
      background: ${theme.components.background};
      span {
        font-weight: 600;
        border-bottom: 4px solid ${theme.components[color]};
      }
    `};

    &:hover {
      ${({ theme  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
        background: ${theme.components.background};
        color: ${theme.font.regular} !important;
      `};
      cursor: default;
    }
  }

  &:hover {
    ${({ theme , color ="secondary"  })=>_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css`
      color: ${theme.components[color]} !important;
      filter: unset !important;
    `};
  }
  &:disabled {
    border: none;
    background: transparent;
    &:hover {
      color: ${({ theme  })=>theme.font.nonActive} !important;
    }
  }
`;
const ActionWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: absolute !important;
  right: ${isRtl ? "unset" : "1rem"};
  left: ${isRtl ? "1rem" : "unset"};
`;
const TopBar = ({ data , color ="secondary"  })=>{
    let { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const goto = (path, isActive)=>{
        if (!isActive) {
            router.push(`${path}`);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionWrapper, {}),
            data.map((item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                    className: `${router.pathname === item.path ? "active" : ""}`,
                    onClick: ()=>goto(item.path, router.pathname === item.path),
                    isDisable: item.isDisable,
                    title: t(item.key),
                    color: color
                }, item.key);
            })
        ]
    });
};


/***/ }),

/***/ 2059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport safe */ _DashboardLayout__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _DashboardLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__]);
_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ chatbotMenu),
/* harmony export */   "fF": () => (/* binding */ postmanMenu),
/* harmony export */   "rR": () => (/* binding */ accountsMenu),
/* harmony export */   "s": () => (/* binding */ sidebarMenu)
/* harmony export */ });
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8742);

const sidebarMenu = {
    products: [
        {
            key: "home",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Home */ .y$.Home,
            isDisable: true,
            type: "link",
            color: "secondary",
            icon: "Home"
        },
        {
            key: "chatbot",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Archive */ .y$.Archive,
            type: "link",
            color: "chatbot",
            icon: "Chatbot",
            isDisable: false
        },
        {
            key: "liveChat",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.LiveChat */ .y$.LiveChat,
            isDisable: true,
            type: "link",
            color: "liveChat",
            icon: "LiveChat"
        },
        {
            key: "postman",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.PostmanContacts */ .y$.PostmanContacts,
            isDisable: false,
            type: "link",
            color: "postman",
            icon: "Postman"
        }
    ],
    tools: [
        {
            key: "connections",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Accounts */ .y$.Accounts,
            type: "link",
            color: "secondary",
            icon: "ChartConnected"
        },
        {
            key: "profile",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Profile */ .y$.Profile,
            isDisable: true,
            type: "link",
            color: "secondary",
            icon: "Portrait"
        },
        {
            key: "theme",
            path: "theme",
            type: "button",
            color: "secondary",
            icon: "Moon"
        },
        {
            key: "logout",
            path: "logout",
            type: "button",
            color: "secondary",
            icon: "SignOutAlt"
        }
    ]
};
const accountsMenu = [
    {
        key: "accounts",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Accounts */ .y$.Accounts
    }
];
const chatbotMenu = [
    {
        key: "chatbot",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Chatbot */ .y$.Chatbot,
        isDisable: true
    },
    {
        key: "archive",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Archive */ .y$.Archive,
        isDisable: false
    },
    {
        key: "contacts",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Contacts */ .y$.Contacts,
        isDisable: false
    }
];
const postmanMenu = [
    {
        key: "campaign",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.Chatbot */ .y$.Chatbot,
        isDisable: true
    },
    {
        key: "groups",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.PostmanGroups */ .y$.PostmanGroups,
        isDisable: false
    },
    {
        key: "contacts",
        path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__/* .Path.PostmanContacts */ .y$.PostmanContacts
    }
];


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ })

};
;