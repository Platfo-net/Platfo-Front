"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 5449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "ij": () => (/* binding */ read)
/* harmony export */ });
/* unused harmony exports remove, clear */
function store(key, data, storage = window.localStorage) {
    storage.setItem(key, JSON.stringify(data));
}
function read(key, storage = window.localStorage) {
    const item = storage.getItem(key);
    if (!item) {
        return;
    }
    try {
        return JSON.parse(item);
    } catch (e) {
        return JSON.parse(`"${item}"`);
    }
}
function remove(key, storage = window.localStorage) {
    storage.removeItem(key);
}
function clear() {
    localStorage.clear();
}


/***/ }),

/***/ 2073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ settings)
/* harmony export */ });
const settings = {
    fontFamilyFa: "IRANSansEn, Sans Serif, monospace",
    fontFamily: "Rubik, sans-serif,Open Sans, monospace",
    borderRadius_xlg: "2rem",
    borderRadius_lg: "1rem",
    borderRadius_md: "0.8rem",
    borderRadius_sm: "0.5rem",
    elementHeight_lg: "4rem",
    elementHeight_md: "3rem",
    elementHeight_sm: "2rem",
    transition: "all 0.4s ease",
    main: {
        headerHeight: "64px"
    },
    dashboard: {
        headerHeight: "64px",
        sideWidth: "220px",
        footerHeight: "32px"
    }
};


/***/ }),

/***/ 3907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Themes)
/* harmony export */ });
const dark = {
    name: "dark",
    background: "#1e1f25",
    components: {
        background: "#131517",
        primary: "#464f56",
        secondary: "#70d3ba",
        accent: "#88e0f4",
        default: "#c2bfd8",
        danger: "#fe8182",
        warning: "#ff9933",
        success: "#60d6a4",
        chatbot: "#fec823",
        liveChat: "#666fc1",
        postman: "#50bfe8",
        shadow1: "rgba(0, 0, 0, 0.25)",
        shadow2: "rgba(0, 0, 0, 0.22)",
        active: "#e4ebf5",
        nonActive: "#e0e0e0",
        border: "#8d8d8e",
        backDrop: "#575757"
    },
    font: {
        regular: "#E4EBF5e6",
        button: "#131517",
        nonActive: "#939393",
        placeholder: "#8d8d8e",
        warning: "#ff9933",
        success: "#60d6a4",
        danger: "#fe8182",
        currentColor: "currentColor"
    },
    brand: {
        Instagram: "#e12f6b",
        Facebook: "#4267b2",
        Chatbot: "#fec823",
        LiveChat: "#666fc1",
        Postman: "#50bfe8"
    }
};
const light = {
    name: "light",
    background: "#FFFFFF",
    components: {
        background: "#DEE7F2",
        primary: "#303030",
        secondary: "#70d3ba",
        accent: "#88e0f4",
        default: "#c2bfd8",
        danger: "#fe8182",
        warning: "#ff9933",
        success: "#60d6a4",
        chatbot: "#fec823",
        liveChat: "#666fc1",
        postman: "#50bfe8",
        shadow1: "rgba(170, 170, 170, 0.25)",
        shadow2: "rgba(120, 120, 120, 0.12)",
        active: "#e4ebf5",
        nonActive: "#e0e0e0",
        border: "#c2bfd8",
        backDrop: "#a2a2a2"
    },
    font: {
        regular: "#303030",
        button: "#fff",
        nonActive: "#939393",
        placeholder: "#c2bfd8",
        warning: "#ff9933",
        success: "#60d6a4",
        danger: "#fe8182",
        currentColor: "currentColor"
    },
    brand: {
        Instagram: "#e12f6b",
        Facebook: "#4267b2",
        Chatbot: "#fec823",
        LiveChat: "#666fc1",
        Postman: "#50bfe8"
    }
};
const Themes = {
    dark,
    light
};


/***/ }),

/***/ 339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ getIsRtl),
/* harmony export */   "E4": () => (/* binding */ setThemeSettingInHtml),
/* harmony export */   "EC": () => (/* binding */ getColors),
/* harmony export */   "Ke": () => (/* binding */ getBoxShadow),
/* harmony export */   "V_": () => (/* binding */ getTileSize),
/* harmony export */   "ap": () => (/* binding */ getSize),
/* harmony export */   "eS": () => (/* binding */ setLanguageDirection),
/* harmony export */   "j9": () => (/* binding */ typographyWeightOptions),
/* harmony export */   "nz": () => (/* binding */ GlobalStyles),
/* harmony export */   "uQ": () => (/* binding */ getIsDark),
/* harmony export */   "y6": () => (/* binding */ typographySizeOptions)
/* harmony export */ });
/* unused harmony exports colorOptions, textColorOptions */
/* harmony import */ var _lib_LocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5449);
/* harmony import */ var _styles_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2073);
/* harmony import */ var _styles_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3907);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);




const colorOptions = (/* unused pure expression or super */ null && ([
    "default",
    "primary",
    "secondary",
    "accent",
    "warning",
    "danger",
    "success",
    "chatbot",
    "liveChat",
    "postman"
]));
const typographySizeOptions = {
    xs: "10px",
    sm: "12px",
    base: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "24px",
    "4xl": "26px",
    "5xl": "28px",
    "6xl": "30px"
};
const typographyWeightOptions = {
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900"
};
const textColorOptions = (/* unused pure expression or super */ null && ([
    "regular",
    "nonActive",
    "placeholder",
    "warning",
    "success",
    "danger",
    "currentColor"
]));
/********************************
 * *** Global Style Functions ***
 ********************************/ const GlobalStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  html,
  body {
    font-family: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.fontFamily */ .X.fontFamily};
    padding: 0;
    margin: 0;
    background-color: var(--themeBackgroundColor);
    color: var(--themeColor);
  }
`;
const getBoxShadow = (shadowColor1, shadowColor2, inset = false)=>{
    const insetStr = inset ? "inset" : "";
    return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    box-shadow: ${insetStr} 0px 7px 28px ${shadowColor1},
      ${insetStr} 0px 6px 10px ${shadowColor2};
  `;
};
const getTileSize = (width, height)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  width: ${width};
  height: ${height};
  border-radius: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.borderRadius_lg */ .X.borderRadius_lg};
`;
const getSize = (size, width)=>{
    if (size === "sm") {
        return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
      width: ${width ? width : "5rem"};
      height: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.elementHeight_sm */ .X.elementHeight_sm};
      font-size: ${typographySizeOptions.sm};
      border-radius: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.borderRadius_sm */ .X.borderRadius_sm};
    `;
    }
    if (size === "md") {
        return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
      width: ${width ? width : "10rem"};
      height: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.elementHeight_md */ .X.elementHeight_md};
      font-size: ${typographySizeOptions.base};
      border-radius: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.borderRadius_md */ .X.borderRadius_md};
    `;
    }
    if (size === "lg") {
        return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
      width: ${width ? width : "15rem"};
      height: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.elementHeight_lg */ .X.elementHeight_lg};
      font-size: ${typographySizeOptions.lg};
      border-radius: ${_styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.borderRadius_lg */ .X.borderRadius_lg};
    `;
    }
    return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css``;
};
const getColors = (color = "default", variant = "text", theme)=>{
    return _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    background-color: ${variant === "contained" ? theme?.components[color] : "transparent"};
    color: ${variant === "contained" ? theme?.font.button : theme?.components[color]};
    border: ${variant !== "text" ? `1px solid ${theme?.components[color]}` : "none"};
    &:hover:not([disabled]) {
      filter: brightness(110%);
      color: ${variant === "contained" ? theme?.font.button : ``};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${variant === "contained" ? theme?.components.nonActive : "transparent"};
      color: ${variant === "contained" ? theme?.font.nonActive : theme?.components.nonActive};
      border: ${variant !== "text" ? `1px solid ${theme?.components.nonActive}` : "none"};
      box-shadow: none;
    }
  `;
};
const getIsDark = ()=>{
    const theme = (0,_lib_LocalStorage__WEBPACK_IMPORTED_MODULE_3__/* .read */ .ij)("theme");
    const themeExistsInStorage = Boolean(theme !== null);
    return themeExistsInStorage ? Boolean(theme === "dark") : window.matchMedia("(prefers-color-scheme: dark)").matches;
};
const getIsRtl = ()=>{
    return typeof document !== "undefined" && document.documentElement && document.documentElement.getAttribute("dir") === "rtl";
};
const setThemeSettingInHtml = ()=>{
    const theme = (0,_lib_LocalStorage__WEBPACK_IMPORTED_MODULE_3__/* .read */ .ij)("theme");
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    const backgroundColor = theme === "dark" ? _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes.dark.background */ .b.dark.background : _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes.light.background */ .b.light.background;
    const textColor = theme === "dark" ? _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes.dark.font.regular */ .b.dark.font.regular : _styles_Themes__WEBPACK_IMPORTED_MODULE_1__/* .Themes.light.font.regular */ .b.light.font.regular;
    document.documentElement.style.setProperty("--themeBackgroundColor", backgroundColor);
    document.documentElement.style.setProperty("--themeColor", textColor);
};
const setLanguageDirection = (locale)=>{
    let direction = locale === "fa" ? "rtl" : "ltr";
    let fontFamily = locale === "fa" ? _styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.fontFamilyFa */ .X.fontFamilyFa : _styles_Settings__WEBPACK_IMPORTED_MODULE_0__/* .settings.fontFamily */ .X.fontFamily;
    const html = document.querySelector("html");
    html.setAttribute("dir", direction);
    const body = document.querySelector("body");
    body.style.direction = direction;
    body.style.fontFamily = fontFamily;
};


/***/ })

};
;