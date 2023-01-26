"use strict";
(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 2100:
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
/* harmony import */ var _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6337);
/* harmony import */ var _services_endpoints_ConnectionService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1260);
/* harmony import */ var _components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5900);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_general_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(733);
/* harmony import */ var _components_general_TileButton_TileButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(484);
/* harmony import */ var _components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9228);
/* harmony import */ var _components_feedback_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2121);
/* harmony import */ var _components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__, _services_endpoints_ConnectionService__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__, _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__, _services_endpoints_ConnectionService__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';













const { Text , Title  } = _components_general_Typography__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .Z;
const AccountDetailsPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { id  } = router.query;
    const [accountInfo, setAccountInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [connections, setConnections] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [record, setRecord] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const getAccountDetails = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const response = await _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAccount */ .Z.getAccount(id);
        setAccountInfo(response.data);
    }, [
        id
    ]);
    const getConnections = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const params = {
            account_id: id
        };
        const response = await _services_endpoints_ConnectionService__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getConnections */ .Z.getConnections(params);
        setConnections(response.data);
    }, [
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            try {
                setLoading(true);
                await getAccountDetails();
                await getConnections();
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        })();
    }, [
        getAccountDetails,
        getConnections
    ]);
    const modalHandler = ()=>{
        setOpenModal(!openModal);
        if (openModal) {
            setRecord(null);
        }
    };
    const onEdit = ()=>{
        modalHandler();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_BackdropLoading_BackdropLoading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                loading: loading
            }),
            accountInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                username: accountInfo.username,
                follows: accountInfo.information.follows_count,
                name: accountInfo.information.name,
                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_9__/* .Avatar */ .q, {
                    type: "image",
                    url: accountInfo.profile_image,
                    size: 7,
                    click: ()=>{}
                }),
                description: accountInfo.information.biography,
                followers: accountInfo.information.followers_count
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex m-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                    level: "h2",
                    size: "lg",
                    weight: "semiBold",
                    children: t("connections")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "basis-1/6 m-3 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_TileButton_TileButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            onClick: modalHandler,
                            title: t("add-new-connection")
                        })
                    }),
                    connections?.map((connection)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "basis-1/6 m-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Tile__WEBPACK_IMPORTED_MODULE_13__/* .Tile */ .n, {
                                data: connection,
                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dataDisplay_Avatar__WEBPACK_IMPORTED_MODULE_9__/* .Avatar */ .q, {
                                    icon: _constants_enums__WEBPACK_IMPORTED_MODULE_4__/* .Application */ .Mx[connection.application_name],
                                    size: 6,
                                    type: "icon",
                                    click: ()=>{}
                                }),
                                width: "255px",
                                height: "255px",
                                click: onEdit,
                                clickColor: "secondary",
                                clickLabel: t("edit"),
                                remove: ()=>{},
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Text, {
                                            weight: "semiBold",
                                            children: [
                                                " ",
                                                connection.name,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                            weight: "light",
                                            color: "nonActive",
                                            children: connection.description
                                        })
                                    ]
                                })
                            })
                        }, connection.id);
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_feedback_Modal__WEBPACK_IMPORTED_MODULE_14__/* .Modal */ .u, {
                isVisible: openModal,
                cancel: modalHandler,
                title: record ? t("edit-connection") : t("add-new-connection"),
                submit: ()=>{},
                width: "50%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountDetailsPage);
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
AccountDetailsPage.getLayout = (page)=>{
    const updateConnectionMenu = [
        ..._constants_dashboardMenu__WEBPACK_IMPORTED_MODULE_3__/* .accountsMenu */ .rR,
        {
            key: "account-info",
            path: _constants_enums__WEBPACK_IMPORTED_MODULE_4__/* .Path.Accounts */ .y$.Accounts + "/[id]"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__/* .DashboardLayout */ .c, {
        topMenu: updateConnectionMenu,
        meta: {
            title: "Accounts"
        },
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_config__WEBPACK_IMPORTED_MODULE_0__]);
_axios_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class Connection extends _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(){
        super({
            suffix: "api/v1/connection"
        });
    }
    getConnections = (params)=>this.$axios.get(`all`, {
            params
        });
    getConnection = (id)=>this.$axios.get(id);
    deleteConnection = (id)=>this.$axios.delete(id);
}
const ConnectionService = new Connection();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionService);

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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,339,745,426,719,228,256,420,484,23], () => (__webpack_exec__(2100)));
module.exports = __webpack_exports__;

})();