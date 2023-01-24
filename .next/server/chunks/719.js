"use strict";
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export closeNotify */
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _styles_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3907);
/* harmony import */ var _styles_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2073);



const defaults = {
    text: "Default Text",
    textColor: "#FFFFFF",
    width: "auto",
    showAction: true,
    actionText: "Dismiss",
    actionTextAria: "Dismiss, Description for Screen Readers",
    alertScreenReader: false,
    actionTextColor: "#4CAF50",
    showSecondButton: false,
    secondButtonText: "",
    secondButtonAria: "Description for Screen Readers",
    secondButtonTextColor: "#4CAF50",
    backgroundColor: "#323232",
    pos: "bottom-center",
    duration: 5000,
    customClass: "",
    color: "danger",
    onActionClick: (element)=>{
        element.style.opacity = 0;
    },
    onSecondButtonClick: ()=>{},
    onClose: ()=>{}
};
const snackbar = ()=>{
    let Snackbar = {
        current: null,
        show: ()=>{},
        close: ()=>{}
    };
    Snackbar.show = ($options)=>{
        let options = {
            ...defaults,
            ...$options
        };
        if (Snackbar.current) {
            Snackbar.current.style.opacity = 0;
            setTimeout((function() {
                let $parent = Snackbar.current.parentElement;
                if ($parent) // possible null if too many/fast Snackbars
                $parent.removeChild(Snackbar.current);
            }).bind(Snackbar.current), 500);
        }
        const theme = (0,_styles_globals__WEBPACK_IMPORTED_MODULE_0__/* .getIsDark */ .uQ)() ? "dark" : "light";
        Snackbar.snackbar = document.createElement("div");
        Snackbar.snackbar.className = "snackbar-container " + options.customClass;
        Snackbar.snackbar.style.width = options.width;
        let $p = document.createElement("p");
        $p.style.margin = "0";
        $p.style.padding = "0";
        $p.style.color = _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes */ .b[theme].font.regular;
        $p.style.fontSize = "16px";
        $p.style.fontWeight = "400";
        $p.style.lineHeight = "1em";
        $p.innerHTML = options.text;
        Snackbar.snackbar.appendChild($p);
        Snackbar.snackbar.style.background = _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes */ .b[theme].background;
        Snackbar.snackbar.style.borderWidth = "1px";
        Snackbar.snackbar.style.borderStyle = "solid";
        Snackbar.snackbar.style.borderColor = _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes */ .b[theme].components.border;
        Snackbar.snackbar.style.borderRadius = _styles_Settings__WEBPACK_IMPORTED_MODULE_2__/* .settings.borderRadius_md */ .X.borderRadius_md;
        if (options.color === "danger") {
            Snackbar.snackbar.style.borderColor = _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes */ .b[theme].components.danger;
            $p.style.color = _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes */ .b[theme].font.danger;
        }
        if (options.showSecondButton) {
            let secondButton = document.createElement("button");
            secondButton.className = "action";
            secondButton.innerHTML = options.secondButtonText;
            secondButton.setAttribute("aria-label", options.secondButtonAria);
            secondButton.style.color = options.secondButtonTextColor;
            secondButton.addEventListener("click", function() {
                if (Snackbar.snackbar) {
                    options.onSecondButtonClick(Snackbar.snackbar);
                }
            });
            Snackbar.snackbar.appendChild(secondButton);
        }
        if (options.showAction) {
            let actionButton = document.createElement("button");
            actionButton.className = "action";
            actionButton.innerHTML = options.actionText;
            actionButton.setAttribute("aria-label", options.actionTextAria);
            actionButton.style.color = options.actionTextColor;
            actionButton.addEventListener("click", function() {
                options.onActionClick(Snackbar.snackbar);
            });
            Snackbar.snackbar.appendChild(actionButton);
        }
        if (options.duration) {
            setTimeout((function() {
                // @ts-ignore
                if (Snackbar.current === this) {
                    Snackbar.current.style.opacity = 0;
                    Snackbar.current.style.top = "-100px";
                    Snackbar.current.style.bottom = "-100px";
                }
            }).bind(Snackbar.snackbar), options.duration);
        }
        if (options.alertScreenReader) {
            Snackbar.snackbar.setAttribute("role", "alert");
        }
        Snackbar.snackbar.addEventListener("transitionend", (event)=>{
            if (event.propertyName === "opacity" && Snackbar.current.style.opacity === "0") {
                if (typeof options.onClose === "function") options.onClose();
                // @ts-ignore
                Snackbar.current.parentElement.removeChild(Snackbar.current);
                if (Snackbar.current === Snackbar.current) {
                    Snackbar.current = null;
                }
            }
        });
        Snackbar.current = Snackbar.snackbar;
        document.body.appendChild(Snackbar.snackbar);
        // let $bottom = getComputedStyle(Snackbar.snackbar).bottom;
        // let $top = getComputedStyle(Snackbar.snackbar).top;
        Snackbar.snackbar.style.opacity = "1";
        Snackbar.snackbar.className = "snackbar-container " + options.customClass + " snackbar-pos " + options.pos;
    };
    Snackbar.close = function() {
        if (Snackbar.current) {
            Snackbar.current.style.opacity = 0;
        }
    };
    return Snackbar;
};
const showNotify = (settings)=>{
    const toast = snackbar();
    if (settings) {
        return toast.show({
            ...settings,
            actionText: "بستن",
            showAction: false,
            pos: "bottom-center"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNotify);
const closeNotify = ()=>{
    const toast = snackbar();
    return toast.close();
};


/***/ }),

/***/ 946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7157);
/* harmony import */ var _components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
class BaseApi {
    constructor({ suffix , baseUrl =publicRuntimeConfig.BASE_URL  }){
        this.$axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
            baseURL: `${baseUrl}${suffix ? `/${suffix}` : ""}`
        });
        this.requestInterceptors();
        this.responseInterceptors();
    }
    requestInterceptors() {
        this.$axios.interceptors.request.use((config)=>{
            const token = _lib_token__WEBPACK_IMPORTED_MODULE_2__/* .tokenObj.getAccessToken */ .o.getAccessToken();
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error)=>{
            Promise.reject(error);
        });
    }
    responseInterceptors() {
        this.$axios.interceptors.response.use((response)=>{
            return response;
        }, (error)=>{
            const RES400 = error?.response?.status === 400 || false;
            const RES401 = error?.response?.status === 401 || false;
            const RES403 = error?.response?.status === 403 || false;
            const RES404 = error?.response?.status === 404 || false;
            const RES409 = error?.response?.status === 409 || false;
            const RES422 = error?.response?.status === 422 || false;
            const RES500 = error?.response?.status >= 500 || false;
            if (RES401) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: error?.response?.data.detail
                });
                throw error;
            }
            if (RES422) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: "Haji Backende \uD83D\uDE01"
                });
                throw error;
            }
            if (RES404) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: "Haji Backende \uD83D\uDE01"
                });
                // showNotify({
                //   text: error?.response?.data.detail,
                // } as SnackbarSettings);
                throw error;
            }
            if (RES403) {
                _lib_token__WEBPACK_IMPORTED_MODULE_2__/* .tokenObj.removeToken */ .o.removeToken();
                location.replace(_constants_enums__WEBPACK_IMPORTED_MODULE_4__/* .Path.Login */ .y$.Login);
                throw error;
            }
            if (RES409) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: error?.response?.data.detail
                });
                throw error;
            }
            if (RES400) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: error?.response?.data.detail
                });
                throw error;
            }
            if (RES500) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: "Haji Backende \uD83D\uDE01"
                });
                throw error;
            }
            if (!error.response) {
                (0,_components_feedback_Notification_snackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                    text: "Check your Network!"
                });
                throw error;
            }
            return Promise.reject(error);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_config__WEBPACK_IMPORTED_MODULE_0__]);
_axios_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class Auth extends _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(){
        super({
            suffix: "api/v1/auth"
        });
    }
    postLogin = (data)=>this.$axios.post(`access-token`, data);
}
const AuthService = new Auth();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7157);
/* harmony import */ var _services_endpoints_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_endpoints_AuthService__WEBPACK_IMPORTED_MODULE_2__]);
_services_endpoints_AuthService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    token: ""
};
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/login", async (data, { rejectWithValue  })=>{
    try {
        const response = await _services_endpoints_AuthService__WEBPACK_IMPORTED_MODULE_2__/* ["default"].postLogin */ .Z.postLogin(data);
        _lib_token__WEBPACK_IMPORTED_MODULE_1__/* .tokenObj.setToken */ .o.setToken(response.data.access_token);
        return response.data;
    } catch (error) {
        _lib_token__WEBPACK_IMPORTED_MODULE_1__/* .tokenObj.removeToken */ .o.removeToken();
        return rejectWithValue({
            error: "Invalid login request"
        });
    }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/logout", async ()=>{
    _lib_token__WEBPACK_IMPORTED_MODULE_1__/* .tokenObj.removeToken */ .o.removeToken();
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state, { payload  })=>({
                ...state,
                token: payload.access_token,
                requestState: "fulfilled",
                error: undefined
            }));
        builder.addCase(logout.fulfilled, ()=>initialState);
        builder.addMatcher((action)=>action.type.endsWith("/pending"), (state)=>{
            state.requestState = "pending";
        }).addMatcher((action)=>action.type.endsWith("/rejected"), (state, { payload  })=>{
            state.error = payload?.error;
            state.requestState = "rejected";
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;