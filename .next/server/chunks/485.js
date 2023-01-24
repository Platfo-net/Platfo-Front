"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ AuthLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/dataDisplay/Logo/index.ts + 2 modules
var Logo = __webpack_require__(5405);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./styles/Themes.ts
var Themes = __webpack_require__(3907);
// EXTERNAL MODULE: ./lib/LocalStorage.ts
var LocalStorage = __webpack_require__(5449);
// EXTERNAL MODULE: ./styles/globals.ts
var globals = __webpack_require__(339);
// EXTERNAL MODULE: ./components/dataDisplay/Tile/index.tsx + 1 modules
var Tile = __webpack_require__(9228);
// EXTERNAL MODULE: ./components/general/Button/index.tsx + 2 modules
var Button = __webpack_require__(8217);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./stores/reduxHooks.ts
var reduxHooks = __webpack_require__(7627);
// EXTERNAL MODULE: ./stores/reducers/user.ts
var user = __webpack_require__(4082);
;// CONCATENATED MODULE: ./components/layouts/AuthLayout/AuthLayout.tsx













const AuthLayout = ({ children , meta  })=>{
    const { isDark  } = (0,reduxHooks/* useAppSelector */.C)((state)=>({
            isDark: state.user.isDark
        }));
    const dispatch = (0,reduxHooks/* useAppDispatch */.T)();
    const changeThemeMode = ()=>{
        const newTheme = isDark ? "light" : "dark";
        dispatch((0,user/* changeTheme */.L)(!isDark));
        (0,LocalStorage/* store */.h)("theme", newTheme);
    };
    /* Todo add change language
  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
    const changeTo = router.locale === 'en' ? 'fa' : 'en';
  */ const addThemeSettingInHtml = (0,external_react_.useCallback)(()=>{
        const isDarkMode = (0,globals/* getIsDark */.uQ)();
        dispatch((0,user/* changeTheme */.L)(isDarkMode));
        (0,globals/* setThemeSettingInHtml */.E4)();
    }, [
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        if (window !== undefined) {
            addThemeSettingInHtml();
        }
    }, [
        addThemeSettingInHtml,
        isDark
    ]);
    const theme = Themes/* Themes */.b[isDark ? "dark" : "light"];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meta.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex w-screen h-screen  bg-[#70d3ba] dark:bg-[#131517]`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Tile/* Tile */.n, {
                        className: "m-auto max-w-md",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "block mx-auto my-8 w-fit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {
                                            size: 9
                                        })
                                    })
                                }),
                                children
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                            color: "primary",
                            icon: isDark ? "Sun" : "Moon",
                            isIconOnly: true,
                            onClick: changeThemeMode,
                            size: "lg",
                            title: "Button",
                            type: "button",
                            variant: "text"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layouts/AuthLayout/index.tsx



/***/ })

};
;