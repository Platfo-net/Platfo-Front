"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

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

/***/ 2949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gr": () => (/* binding */ changeSelectedAccount),
/* harmony export */   "T8": () => (/* binding */ getAccounts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6337);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_1__]);
_services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    accounts: [],
    selectedAccount: undefined
};
const getAccounts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("chatbot/login", async (params, { rejectWithValue  })=>{
    try {
        const response = await _services_endpoints_AccountService__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAccounts */ .Z.getAccounts(params);
        return response.data;
    } catch (error) {
        return rejectWithValue({
            error: "error"
        });
    }
});
const chatbotSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "chatbot",
    initialState,
    reducers: {
        changeSelectedAccount: (state, action)=>{
            state.selectedAccount = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAccounts.fulfilled, (state, { payload  })=>({
                ...state,
                accounts: payload,
                requestState: "fulfilled",
                error: undefined
            }));
        builder.addMatcher((action)=>action.type.endsWith("/pending"), (state)=>{
            state.requestState = "pending";
        }).addMatcher((action)=>action.type.endsWith("/rejected"), (state, { payload  })=>{
            state.error = payload?.error;
            state.requestState = "rejected";
        });
    }
});
const { changeSelectedAccount  } = chatbotSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatbotSlice);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;