"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mx": () => (/* binding */ Application),
/* harmony export */   "t4": () => (/* binding */ Platform),
/* harmony export */   "y$": () => (/* binding */ Path)
/* harmony export */ });
var Path;
(function(Path) {
    Path["AboutUs"] = "#contact-us";
    Path["ContactUs"] = "#about-us";
    Path["Pricing"] = "#pricing";
    Path["Login"] = "/auth/login";
    Path["Register"] = "/auth/register";
    Path["Home"] = "/dashboard";
    Path["Chatbot"] = "/dashboard/chatbot";
    Path["Archive"] = "/dashboard/chatbot/archive";
    Path["Contacts"] = "/dashboard/chatbot/contacts";
    Path["LiveChat"] = "/dashboard/liveChat";
    Path["Postman"] = "/dashboard/postman";
    Path["PostmanGroups"] = "/dashboard/postman/groups";
    Path["PostmanContacts"] = "/dashboard/postman/contacts";
    Path["Accounts"] = "/dashboard/accounts";
    Path["Profile"] = "/dashboard/profile";
})(Path || (Path = {}));
var Platform;
(function(Platform) {
    Platform["INSTAGRAM"] = "Instagram";
})(Platform || (Platform = {}));
var Application;
(function(Application) {
    Application["BOT_BUILDER"] = "Chatbot";
})(Application || (Application = {}));


/***/ }),

/***/ 7157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ tokenObj)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookie = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const tokenObj = {
    /**
   * @param {string} token
   * @param {import("universal-cookie").CookieSetOptions | undefined} option
   */ setAccessToken (token, option) {
        cookie.set("access_token", token, option);
    },
    getAccessToken () {
        return cookie.get("access_token");
    },
    getAccessTokenFaceBook () {
        return cookie.get("auth-token");
    },
    /**
   * @param {string} token
   * @param {import("universal-cookie").CookieSetOptions | undefined} option
   */ setRefreshToken (token, option) {
        cookie.set("refresh_token", token, option);
    },
    getRefreshToken () {
        return cookie.get("refresh_token");
    },
    /**
   * @param {string} token
   */ setToken (token) {
        // const date = new Date();
        // date.setTime(date.getTime() + token.expires_in * 60 * 1000);
        const options = {
            path: "/"
        };
        this.setAccessToken(token, options);
    // this.setRefreshToken(token.refresh_token, options);
    },
    removeToken () {
        cookie.remove("access_token", {
            path: "/"
        });
        cookie.remove("refresh_token");
    }
};


/***/ })

};
;