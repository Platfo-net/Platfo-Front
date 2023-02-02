"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/accounts",{

/***/ "./pages/dashboard/accounts/index.tsx":
/*!********************************************!*\
  !*** ./pages/dashboard/accounts/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/DashboardLayout */ \"./components/layouts/DashboardLayout/index.ts\");\n/* harmony import */ var _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/dashboardMenu */ \"./constants/dashboardMenu.tsx\");\n/* harmony import */ var _components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dataDisplay/Tile */ \"./components/dataDisplay/Tile/index.tsx\");\n/* harmony import */ var _components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/dataDisplay/Avatar */ \"./components/dataDisplay/Avatar/index.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/endpoints/AccountService */ \"./services/endpoints/AccountService.ts\");\n/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/general/Typography */ \"./components/general/Typography/index.ts\");\n/* harmony import */ var _components_general_TileButton_TileButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/general/TileButton/TileButton */ \"./components/general/TileButton/TileButton.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/constants/enums */ \"./constants/enums.ts\");\n/* harmony import */ var _services_endpoints_InstagramService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/services/endpoints/InstagramService */ \"./services/endpoints/InstagramService.ts\");\n/* harmony import */ var _components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/feedback/BackdropLoading/BackdropLoading */ \"./components/feedback/BackdropLoading/BackdropLoading.tsx\");\n\nvar _s = $RefreshSig$();\n// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { Text  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_8__.Typography;\nconst AccountsPage = ()=>{\n    _s();\n    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(\"common\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const getAccounts = async ()=>{\n        try {\n            setLoading(true);\n            const response = await _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getAccounts();\n            setAccounts(response.data);\n            setLoading(false);\n        } catch (e) {\n            setLoading(false);\n        }\n    };\n    const changeRoute = (account)=>{\n        router.push(_constants_enums__WEBPACK_IMPORTED_MODULE_11__.Path.Accounts + \"/[id]\", _constants_enums__WEBPACK_IMPORTED_MODULE_11__.Path.Accounts + \"/\" + account.id);\n    };\n    const disconnectAccount = async (account)=>{\n        try {\n            setLoading(true);\n            await _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__[\"default\"].deleteAccount(account.id);\n            await getAccounts();\n            setLoading(false);\n        } catch (e) {\n            setLoading(false);\n        }\n    };\n    const addAccount = ()=>{\n        console.log(\"Good to see you\");\n        try {\n            setLoading(true);\n            console.log(\"nice\");\n            window.FB.login(async (response)=>{\n                console.log(\"nice try\");\n                if (response.authResponse) {\n                    const data = {\n                        facebook_user_id: response.authResponse.userID,\n                        facebook_user_token: response.authResponse.accessToken\n                    };\n                    await _services_endpoints_InstagramService__WEBPACK_IMPORTED_MODULE_12__[\"default\"].postToConnectInstagram(data);\n                    await getAccounts();\n                    window.FB.api(\"/me\", function(response) {\n                        console.log(\"Good to see you, \" + response.name + \".\");\n                    });\n                    setLoading(false);\n                } else {\n                    setLoading(false);\n                }\n            }, {\n                scope: \"public_profile,email\"\n            });\n        } catch (e) {\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        getAccounts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                loading: loading\n            }, void 0, false, {\n                fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"basis-1/6 m-3 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_TileButton_TileButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            onClick: addAccount,\n                            title: t(\"add-new-account\")\n                        }, void 0, false, {\n                            fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    accounts === null || accounts === void 0 ? void 0 : accounts.map((account)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"basis-1/6 m-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_3__.Tile, {\n                                data: account,\n                                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                    url: account.profile_image,\n                                    size: 6,\n                                    type: \"image\",\n                                    icon: _constants_enums__WEBPACK_IMPORTED_MODULE_11__.Platform[account.platform]\n                                }, void 0, false, void 0, void 0),\n                                width: \"255px\",\n                                height: \"255px\",\n                                click: changeRoute,\n                                clickColor: \"secondary\",\n                                clickLabel: t(\"details\"),\n                                remove: disconnectAccount,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                    weight: \"semiBold\",\n                                    children: [\n                                        \" \",\n                                        account.username,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        }, account.id, false, {\n                            fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AccountsPage, \"K/b64C1a0kOkeIzf1jZZdhV1GcI=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation,\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter\n    ];\n});\n_c = AccountsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountsPage);\nAccountsPage.getLayout = (page)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__.DashboardLayout, {\n        topMenu: _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_2__.accountsMenu,\n        meta: {\n            title: \"Accounts\"\n        },\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/alirezamojiri/Documents/Platfo-Front/pages/dashboard/accounts/index.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\nvar _c;\n$RefreshReg$(_c, \"AccountsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvYWNjb3VudHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLGdGQUFnRjtBQUNUO0FBQ2Q7QUFDSjtBQUNJO0FBQ1g7QUFDRjtBQUNxQjtBQUdKO0FBQ087QUFDNUI7QUFDVztBQUNrQjtBQUNlO0FBRXBGLE1BQU0sRUFBRWUsS0FBSSxFQUFFLEdBQUdQLHNFQUFVQTtBQUUzQixNQUFNUSxlQUFtQyxJQUFNOztJQUM3QyxNQUFNLEVBQUVDLEVBQUMsRUFBRSxHQUFHYiw0REFBY0EsQ0FBQztJQUM3QixNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQWtCLEVBQUU7SUFDNUQsTUFBTWdCLFNBQVNaLHVEQUFTQTtJQUV4QixNQUFNYSxjQUFjLFVBQVk7UUFDOUIsSUFBSTtZQUNGSixXQUFXLElBQUk7WUFDZixNQUFNSyxXQUNKLE1BQU1qQixzRkFBMEI7WUFDbENjLFlBQVlHLFNBQVNDLElBQUk7WUFDekJOLFdBQVcsS0FBSztRQUNsQixFQUFFLE9BQU9PLEdBQUc7WUFDVlAsV0FBVyxLQUFLO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNUSxjQUFjLENBQUNDLFVBQXNCO1FBQ3pDTixPQUFPTyxJQUFJLENBQUNsQiw0REFBYSxHQUFHLFNBQVNBLDREQUFhLEdBQUcsTUFBTWlCLFFBQVFHLEVBQUU7SUFDdkU7SUFFQSxNQUFNQyxvQkFBb0IsT0FBT0osVUFBc0I7UUFDckQsSUFBSTtZQUNGVCxXQUFXLElBQUk7WUFDZixNQUFNWix3RkFBNEIsQ0FBQ3FCLFFBQVFHLEVBQUU7WUFDN0MsTUFBTVI7WUFDTkosV0FBVyxLQUFLO1FBQ2xCLEVBQUUsT0FBT08sR0FBRztZQUNWUCxXQUFXLEtBQUs7UUFDbEI7SUFDRjtJQUVBLE1BQU1lLGFBQWEsSUFBTTtRQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSTtZQUNGakIsV0FBVyxJQUFJO1lBQ2ZnQixRQUFRQyxHQUFHLENBQUM7WUFFWkMsT0FBT0MsRUFBRSxDQUFDQyxLQUFLLENBQ2IsT0FBT2YsV0FBa0I7Z0JBQ3ZCVyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osSUFBSVosU0FBU2dCLFlBQVksRUFBRTtvQkFDekIsTUFBTWYsT0FBTzt3QkFDWGdCLGtCQUFrQmpCLFNBQVNnQixZQUFZLENBQUNFLE1BQU07d0JBQzlDQyxxQkFBcUJuQixTQUFTZ0IsWUFBWSxDQUFDSSxXQUFXO29CQUN4RDtvQkFDQSxNQUFNL0Isb0dBQXVDLENBQUNZO29CQUM5QyxNQUFNRjtvQkFDTmMsT0FBT0MsRUFBRSxDQUFDUSxHQUFHLENBQUMsT0FBTyxTQUFVdEIsUUFBYSxFQUFFO3dCQUM1Q1csUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlosU0FBU3VCLElBQUksR0FBRztvQkFDcEQ7b0JBQ0E1QixXQUFXLEtBQUs7Z0JBQ2xCLE9BQU87b0JBQ0xBLFdBQVcsS0FBSztnQkFDbEIsQ0FBQztZQUNILEdBQ0E7Z0JBQ0U2QixPQUNFO1lBQ0o7UUFFSixFQUFFLE9BQU90QixHQUFHO1lBQ1ZQLFdBQVcsS0FBSztRQUNsQjtJQUNGO0lBRUFkLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDVCw2RkFBZUE7Z0JBQUNJLFNBQVNBOzs7Ozs7MEJBQzFCLDhEQUFDK0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3pDLGlGQUFVQTs0QkFBQzBDLFNBQVNqQjs0QkFBWWtCLE9BQU9uQyxFQUFFOzs7Ozs7Ozs7OztvQkFFM0NHLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWlDLEdBQUcsQ0FBQyxDQUFDekIsVUFBWTt3QkFDMUIscUJBQ0UsOERBQUNxQjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2hELDhEQUFJQTtnQ0FDSHVCLE1BQU1HO2dDQUNOMEIsc0JBQ0UsOERBQUNuRCxrRUFBTUE7b0NBQ0xvRCxLQUFLM0IsUUFBUTRCLGFBQWE7b0NBQzFCQyxNQUFNO29DQUNOQyxNQUFLO29DQUNMQyxNQUNFL0MsdURBQVEsQ0FDTmdCLFFBQVFnQyxRQUFRLENBQ2pCOztnQ0FJUEMsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEMsT0FBT3BDO2dDQUNQcUMsWUFBVztnQ0FDWEMsWUFBWWhELEVBQUU7Z0NBQ2RpRCxRQUFRbEM7MENBRVIsNEVBQUNqQjtvQ0FBS29ELFFBQU87O3dDQUFXO3dDQUFFdkMsUUFBUXdDLFFBQVE7d0NBQUM7Ozs7Ozs7Ozs7OzsyQkF0Qlh4QyxRQUFRRyxFQUFFOzs7OztvQkEwQmxEOzs7Ozs7Ozs7QUFJUjtHQTlHTWY7O1FBQ1VaLHdEQUFjQTtRQUdiTSxtREFBU0E7OztLQUpwQk07QUFnSE4sK0RBQWVBLFlBQVlBLEVBQUM7QUFHNUJBLGFBQWFxRCxTQUFTLEdBQUcsQ0FBQ0MsT0FBUztJQUNqQyxxQkFDRSw4REFBQ3RFLGdGQUFlQTtRQUFDdUUsU0FBU3RFLGtFQUFZQTtRQUFFdUUsTUFBTTtZQUFFcEIsT0FBTztRQUFXO2tCQUMvRGtCOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQvYWNjb3VudHMvaW5kZXgudHN4P2EyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2VXaXRoTGF5b3V0IH0gZnJvbSBcIkAvdHlwZXMvbmV4dFwiO1xuLy8gaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zJztcbmltcG9ydCB7IERhc2hib2FyZExheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0cy9EYXNoYm9hcmRMYXlvdXRcIjtcbmltcG9ydCB7IGFjY291bnRzTWVudSB9IGZyb20gXCJAL2NvbnN0YW50cy9kYXNoYm9hcmRNZW51XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kYXRhRGlzcGxheS9UaWxlXCI7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RhdGFEaXNwbGF5L0F2YXRhclwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFNlcnZpY2UgZnJvbSBcIkAvc2VydmljZXMvZW5kcG9pbnRzL0FjY291bnRTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBJQWNjb3VudCwgUmVzX0FjY291bnRfQWxsIH0gZnJvbSBcIkAvdHlwZXMvYXBpXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkAvY29tcG9uZW50cy9nZW5lcmFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBUaWxlQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvZ2VuZXJhbC9UaWxlQnV0dG9uL1RpbGVCdXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUGF0aCwgUGxhdGZvcm0gfSBmcm9tIFwiQC9jb25zdGFudHMvZW51bXNcIjtcbmltcG9ydCBJbnN0YWdyYW1TZXJ2aWNlIGZyb20gXCJAL3NlcnZpY2VzL2VuZHBvaW50cy9JbnN0YWdyYW1TZXJ2aWNlXCI7XG5pbXBvcnQgQmFja2Ryb3BMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvZmVlZGJhY2svQmFja2Ryb3BMb2FkaW5nL0JhY2tkcm9wTG9hZGluZ1wiO1xuXG5jb25zdCB7IFRleHQgfSA9IFR5cG9ncmFwaHk7XG5cbmNvbnN0IEFjY291bnRzUGFnZTogTmV4dFBhZ2VXaXRoTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGU8UmVzX0FjY291bnRfQWxsPihbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldEFjY291bnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8UmVzX0FjY291bnRfQWxsPiA9XG4gICAgICAgIGF3YWl0IEFjY291bnRTZXJ2aWNlLmdldEFjY291bnRzKCk7XG4gICAgICBzZXRBY2NvdW50cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VSb3V0ZSA9IChhY2NvdW50OiBJQWNjb3VudCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFBhdGguQWNjb3VudHMgKyBcIi9baWRdXCIsIFBhdGguQWNjb3VudHMgKyBcIi9cIiArIGFjY291bnQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRpc2Nvbm5lY3RBY2NvdW50ID0gYXN5bmMgKGFjY291bnQ6IElBY2NvdW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBBY2NvdW50U2VydmljZS5kZWxldGVBY2NvdW50KGFjY291bnQuaWQpO1xuICAgICAgYXdhaXQgZ2V0QWNjb3VudHMoKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRBY2NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdHb29kIHRvIHNlZSB5b3UnKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKCduaWNlJyk7XG5cbiAgICAgIHdpbmRvdy5GQi5sb2dpbihcbiAgICAgICAgYXN5bmMgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmljZSB0cnknKTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICBmYWNlYm9va191c2VyX2lkOiByZXNwb25zZS5hdXRoUmVzcG9uc2UudXNlcklELFxuICAgICAgICAgICAgICBmYWNlYm9va191c2VyX3Rva2VuOiByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgSW5zdGFncmFtU2VydmljZS5wb3N0VG9Db25uZWN0SW5zdGFncmFtKGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5GQi5hcGkoJy9tZScsIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb29kIHRvIHNlZSB5b3UsICcgKyByZXNwb25zZS5uYW1lICsgJy4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNjb3BlOlxuICAgICAgICAgICAgXCJwdWJsaWNfcHJvZmlsZSxlbWFpbFwiLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFjY291bnRzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QmFja2Ryb3BMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaXMtMS82IG0tMyBcIj5cbiAgICAgICAgICA8VGlsZUJ1dHRvbiBvbkNsaWNrPXthZGRBY2NvdW50fSB0aXRsZT17dChcImFkZC1uZXctYWNjb3VudFwiKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthY2NvdW50cz8ubWFwKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaXMtMS82IG0tM1wiIGtleT17YWNjb3VudC5pZH0+XG4gICAgICAgICAgICAgIDxUaWxlXG4gICAgICAgICAgICAgICAgZGF0YT17YWNjb3VudH1cbiAgICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICB1cmw9e2FjY291bnQucHJvZmlsZV9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17Nn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1bXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LnBsYXRmb3JtIGFzIHVua25vd24gYXMga2V5b2YgdHlwZW9mIFBsYXRmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1NXB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNTVweFwiXG4gICAgICAgICAgICAgICAgY2xpY2s9e2NoYW5nZVJvdXRlfVxuICAgICAgICAgICAgICAgIGNsaWNrQ29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsaWNrTGFiZWw9e3QoXCJkZXRhaWxzXCIpfVxuICAgICAgICAgICAgICAgIHJlbW92ZT17ZGlzY29ubmVjdEFjY291bnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9XCJzZW1pQm9sZFwiPiB7YWNjb3VudC51c2VybmFtZX0gPC9UZXh0PlxuICAgICAgICAgICAgICA8L1RpbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHNQYWdlO1xuXG5cbkFjY291bnRzUGFnZS5nZXRMYXlvdXQgPSAocGFnZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQgdG9wTWVudT17YWNjb3VudHNNZW51fSBtZXRhPXt7IHRpdGxlOiBcIkFjY291bnRzXCIgfX0+XG4gICAgICB7cGFnZX1cbiAgICA8L0Rhc2hib2FyZExheW91dD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRGFzaGJvYXJkTGF5b3V0IiwiYWNjb3VudHNNZW51IiwiVGlsZSIsIkF2YXRhciIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBY2NvdW50U2VydmljZSIsIlR5cG9ncmFwaHkiLCJUaWxlQnV0dG9uIiwidXNlUm91dGVyIiwiUGF0aCIsIlBsYXRmb3JtIiwiSW5zdGFncmFtU2VydmljZSIsIkJhY2tkcm9wTG9hZGluZyIsIlRleHQiLCJBY2NvdW50c1BhZ2UiLCJ0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwicm91dGVyIiwiZ2V0QWNjb3VudHMiLCJyZXNwb25zZSIsImRhdGEiLCJlIiwiY2hhbmdlUm91dGUiLCJhY2NvdW50IiwicHVzaCIsIkFjY291bnRzIiwiaWQiLCJkaXNjb25uZWN0QWNjb3VudCIsImRlbGV0ZUFjY291bnQiLCJhZGRBY2NvdW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIkZCIiwibG9naW4iLCJhdXRoUmVzcG9uc2UiLCJmYWNlYm9va191c2VyX2lkIiwidXNlcklEIiwiZmFjZWJvb2tfdXNlcl90b2tlbiIsImFjY2Vzc1Rva2VuIiwicG9zdFRvQ29ubmVjdEluc3RhZ3JhbSIsImFwaSIsIm5hbWUiLCJzY29wZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIm1hcCIsImF2YXRhciIsInVybCIsInByb2ZpbGVfaW1hZ2UiLCJzaXplIiwidHlwZSIsImljb24iLCJwbGF0Zm9ybSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpY2siLCJjbGlja0NvbG9yIiwiY2xpY2tMYWJlbCIsInJlbW92ZSIsIndlaWdodCIsInVzZXJuYW1lIiwiZ2V0TGF5b3V0IiwicGFnZSIsInRvcE1lbnUiLCJtZXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/accounts/index.tsx\n"));

/***/ })

});