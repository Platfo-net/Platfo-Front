"use strict";
(() => {
var exports = {};
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 1066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9294);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
/* harmony import */ var _components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2059);
/* harmony import */ var _components_dataDisplay_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6023);
/* harmony import */ var _components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5900);
/* harmony import */ var _components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1420);
/* harmony import */ var _services_endpoints_LiveChatService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_feedback_Dot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3876);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, _services_endpoints_LiveChatService__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, _services_endpoints_LiveChatService__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';










const { Text  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z;
const ContactDetailsPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { id  } = router.query;
    const [contactInfo, setContactInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getContactDetails = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const response = await _services_endpoints_LiveChatService__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getContact */ .Z.getContact(id);
        setContactInfo(response.data);
    }, [
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            try {
                setLoading(true);
                await getContactDetails();
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        })();
    }, [
        getContactDetails
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                loading: loading
            }),
            contactInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                username: contactInfo.information.username,
                follows: contactInfo.information.follows_count,
                name: contactInfo.information.name,
                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_7__/* .Avatar */ .q, {
                    type: "image",
                    url: contactInfo.information.profile_image,
                    size: 7,
                    click: ()=>{}
                }),
                description: contactInfo.information.biography,
                followers: contactInfo.information.followers_count,
                extra: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex flex-col justify-between h-full",
                    children: [
                        contactInfo.information.is_verified_user !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex space-x-2 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_Dot__WEBPACK_IMPORTED_MODULE_11__/* .Dot */ .o, {
                                    isTrue: contactInfo.information.is_verified_user,
                                    className: "my-1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    children: t("is_verified_user")
                                })
                            ]
                        }),
                        contactInfo.information.is_user_follow_business !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_Dot__WEBPACK_IMPORTED_MODULE_11__/* .Dot */ .o, {
                                    isTrue: contactInfo.information.is_user_follow_business,
                                    className: "my-1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    children: t("is_user_follow_business")
                                })
                            ]
                        }),
                        contactInfo.information.is_business_follow_user !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_Dot__WEBPACK_IMPORTED_MODULE_11__/* .Dot */ .o, {
                                    isTrue: contactInfo.information.is_business_follow_user,
                                    className: "my-1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                    children: t("is_business_follow_user")
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactDetailsPage);
// export const getStaticProps = async ({ locale }: { locale: string }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// };
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};
const getStaticProps = async (context)=>{
    return {
        props: {}
    };
};
ContactDetailsPage.getLayout = (page)=>{
    const updatePostmanMenu = [
        ..._constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_3__/* .chatbotMenu */ .ID,
        {
            key: "contact-info",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_4__/* .Path.Contacts */ .y$.Contacts + "/[id]"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__/* .DashboardLayout */ .c, {
        topMenu: updatePostmanMenu,
        meta: {
            title: "Contact Details"
        },
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,339,745,426,719,228,256,420,23,544], () => (__webpack_exec__(1066)));
module.exports = __webpack_exports__;

})();