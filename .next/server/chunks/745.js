"use strict";
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 9190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Image)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/dataDisplay/Image/Image.tsx




const StyledImage = styled_default()((image_default()))`
  object-fit: cover;
`;
const Image = ({ src , width , height , alt  })=>{
    const [image, setImage] = (0,external_react_.useState)(src);
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
        src: image,
        width: width,
        height: height,
        fill: !width && !height,
        alt: alt,
        onError: ()=>setImage("/assets/error.svg"),
        placeholder: "blur",
        blurDataURL: "/assets/image-placeholder.jpg"
    });
};

;// CONCATENATED MODULE: ./components/dataDisplay/Image/index.tsx



/***/ }),

/***/ 5405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/svg/platfo-logo-N.svg
/* harmony default export */ const platfo_logo_N = ({"src":"/_next/static/media/platfo-logo-N.673c28ac.svg","height":4899,"width":4811});
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./components/dataDisplay/Image/index.tsx + 1 modules
var Image = __webpack_require__(9190);
;// CONCATENATED MODULE: ./components/dataDisplay/Logo/Logo.tsx






const getSize = (size)=>react_.css`
  width: ${size}rem;
  height: ${size}rem;
`;
const Wrapper = (styled_default()).div`
  ${({ size  })=>getSize(size)};
  ${({ theme  })=>theme.name === "dark" && react_.css`
      .cls-3 {
        fill: #70d3ba;
      }
      .cls-2 {
        fill: #fff;
      }
    `}
`;
const Logo = ({ size =5  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        className: "relative",
        size: size,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* Image */.E, {
            src: platfo_logo_N,
            alt: "logo",
            width: 200,
            height: 200
        })
    });
};

;// CONCATENATED MODULE: ./components/dataDisplay/Logo/index.ts



/***/ }),

/***/ 8217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Button)
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
// EXTERNAL MODULE: ./styles/Settings.ts
var Settings = __webpack_require__(2073);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./components/general/Icon/index.ts + 2 modules
var Icon = __webpack_require__(8909);
;// CONCATENATED MODULE: ./components/feedback/loading/LoadingCircle/LoadingCircle.tsx





const loadingCircle = react_.keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const StyledLoadingCircle = styled_default()(Icon/* Icon */.J)`
  animation: ${loadingCircle} 3s infinite linear;
  opacity: ${({ opacity  })=>opacity};
  margin-left: 8px;
  margin-right: 8px;
`;
const LoadingCircle = ({ opacity =0.5 , color , size  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledLoadingCircle, {
        name: "loading",
        opacity: opacity,
        color: color,
        size: size
    });
};
/* harmony default export */ const LoadingCircle_LoadingCircle = (LoadingCircle);

// EXTERNAL MODULE: ./styles/Themes.ts
var Themes = __webpack_require__(3907);
// EXTERNAL MODULE: ./components/general/Typography/index.ts + 1 modules
var Typography = __webpack_require__(733);
;// CONCATENATED MODULE: ./components/general/Button/Button.tsx










const getIconOnlyStyles = ()=>react_.css`
  width: auto;
  height: auto;
  padding: 8px 0;
  border-radius: 8px;
  span {
    display: none;
  }
`;
const StyledButton = (styled_default()).button`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  ${({ size , width  })=>(0,globals/* getSize */.ap)(size, width)}
  transition: ${Settings/* settings.transition */.X.transition};
  ${({ color , variant , theme  })=>(0,globals/* getColors */.EC)(color, variant, theme)}
  ${({ theme , variant  })=>variant !== "text" && (0,globals/* getBoxShadow */.Ke)(theme.components.shadow1, theme.components.shadow2)};
  ${({ isIconOnly  })=>isIconOnly ? getIconOnlyStyles() : ""}
`;
const StyledIcon = styled_default()(Icon/* Icon */.J)`
  margin-left: 8px;
  margin-right: 8px;
`;
const Button = ({ title , width , icon , color ="default" , variant ="contained" , size ="md" , isLoading , isDisable , isIconOnly , onClick , type ="button" , className ="" , iconSize  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledButton, {
        disabled: isLoading || isDisable,
        color: color,
        variant: variant,
        size: size,
        isIconOnly: isIconOnly,
        onClick: onClick,
        width: width,
        type: type,
        className: className,
        children: [
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(LoadingCircle_LoadingCircle, {
                opacity: 1,
                color: Themes/* Themes.dark.font.nonActive */.b.dark.font.nonActive,
                size: size
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: icon && /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                    name: icon,
                    color: "currentColor",
                    size: iconSize ? iconSize : size
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography.Text */.Z.Text, {
                size: size,
                color: "currentColor",
                weight: "medium",
                children: title
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/general/Button/index.tsx



/***/ }),

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Icon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/general/Icon/Icons.tsx


const Moon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 6a8 8 0 0011.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0010 6zm-6 6a8 8 0 008 8 8.006 8.006 0 006.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 004 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 00-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 00-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0015.29.836L15.5 0h1l.209.836a2 2 0 001.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 00-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 00-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 001.455-1.455L20.5 5h1l.209.836a2 2 0 001.455 1.455z"
            })
        ]
    });
const Sun = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2 .872c.528.41 1.003.886 1.414 1.414z",
            clipRule: "evenodd"
        })
    });
const loading = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m12 4a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1zm1 19v-2a1 1 0 0 0 -2 0v2a1 1 0 0 0 2 0zm-9-11a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm20 0a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-6.621-7.285 1-1.731a1 1 0 0 0 -1.731-1l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.501zm-10.03 17.3 1-1.731a1 1 0 0 0 -1.731-1l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.498zm-2.27-14.028a1 1 0 0 0 -.364-1.366l-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a1 1 0 0 0 1.366-.365zm17.3 10.031a1 1 0 0 0 -.364-1.367l-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .867-.499zm-14.392-12.939a1 1 0 0 0 .365-1.366l-1-1.731a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.134zm10.031 17.3a1 1 0 0 0 .364-1.366l-1-1.731a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 1.367.364zm2.269-14.03 1.731-1a1 1 0 0 0 -1-1.731l-1.731 1a1 1 0 0 0 1 1.731zm-17.3 10.03 1.731-1a1 1 0 0 0 -1-1.731l-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .497-.132z"
        })
    });
const AppsAdd = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 512",
        height: "1em",
        width: "1em",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M309.333,149.333h53.333v53.333c0,17.673,14.327,32,32,32s32-14.327,32-32v-53.333H480c17.673,0, 32-14.327,32-32 s-14.327-32-32-32h-53.333V32c0-17.673-14.327-32-32-32s-32,14.327-32, 32v53.333h-53.333c-17.673,0-32,14.327-32,32 S291.66,149.333,309.333,149.333z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M117.333,0C52.532,0,0,52.532,0,117.333s52.532,117.333,117.333,117.333s117.333-52.532,117.333-117.333 C234.596,52.561,182.106,0.071,117.333,0z M117.333,170.667C87.878,170.667,64,146.789,64,117.333S87.878,64, 117.333,64 s53.333,23.878,53.333,53.333S146.789,170.667,117.333,170.667z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M117.333,277.333C52.532,277.333,0,329.865,0,394.667S52.532,512,117.333,512s117.333-52.532,117.333-117.333 C234.596,329.895,182.106,277.404,117.333,277.333z M117.333,448C87.878,448,64,424.122,64,394.667s23.878-53.333, 53.333-53.333 s53.333,23.878,53.333,53.333S146.789,448,117.333,448z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M394.667,277.333c-64.801,0-117.333,52.532-117.333,117.333S329.865,512,394.667,512S512,459.468,512,394.667 C511.929,329.895,459.439,277.404,394.667,277.333z M394.667,448c-29.455,0-53.333-23.878-53.333-53.333 s23.878-53.333,53.333-53.333S448,365.211,448,394.667S424.122,448,394.667,448z"
            })
        ]
    });
const ChartConnected = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M24,11.983a3.994,3.994,0,0,0-2.607-3.735l-.038-.091a10.07,10.07,0,0,0-5.294-5.419l-.329-.144a3.981, 3.981,0,0,0-7.462,0l-.418.188A10.19,10.19,0,0,0,2.617,8.245a3.98,3.98,0,0,0-.03,7.468l.128.3a10.1,10.1,0,0,0, 5.162,5.228l.393.176a3.982,3.982,0,0,0,7.46,0l.367-.163a10.193,10.193,0,0,0,5.309-5.534A4,4,0,0,0,24,11.983ZM12, 2a2,2,0,1,1-2,2A2,2,0,0,1,12,2ZM3.988,9.985l.082.031.01-.025a1.912,1.912,0,1,1-.092-.006ZM12,22a2,2,0,1,1,2-2A2, 2,0,0,1,12,22Zm3.893-2.886a3.991,3.991,0,0,0-7.787,0A8.093,8.093,0,0,1,4.875,15.88,3.991,3.991,0,0,0,4.9,8.1a8.19, 8.19,0,0,1,3.206-3.2,3.991,3.991,0,0,0,7.785,0A8.225,8.225,0,0,1,19.1,8.093a3.991,3.991,0,0,0,.015,7.785A8.207, 8.207,0,0,1,15.893,19.114ZM20,13.983a2,2,0,1,1,2-2A2,2,0,0,1,20,13.983Z"
        })
    });
const LiveChat = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M512,339.87V510.54H341.33a170.64,170.64,0,0,1-147.62-85.33,234.55,234.55,0,0,0,47.83-5.29,127.73, 127.73,0,0,0,99.79,47.95h128v-128a127.73,127.73,0,0,0-48-99.79,234.65,234.65,0,0,0,5.38-47.83A170.64, 170.64,0,0,1,512,339.87ZM384,190.54c0-106-86-192-192-192S0,84.5,0,190.54v192H192C298,382.42,383.88, 296.53,384,190.54Zm-341.33,0A149.33,149.33,0,1,1,192,339.87H42.67Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M121,137.83h63.62a15.91,15.91,0,1,0,0-31.81H121a15.91,15.91,0,0,0,0,31.81Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M248.24,169.64H121a15.91,15.91,0,0,0,0,31.81H248.24a15.91,15.91,0,0,0,0-31.81Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M248.24,233.25H121a15.91,15.91,0,0,0,0,31.81H248.24a15.91,15.91,0,0,0,0-31.81Z"
            })
        ]
    });
const CommentAlt = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.5,0H5.5A5.507,5.507,0,0,0,0,5.5v9A5.507,5.507,0,0,0,5.5,20H6.938l4.1,3.428a1.5,1.5,0,0,0,1.924, 0L17.062,20H18.5A5.507,5.507,0,0,0,24,14.5v-9A5.507,5.507,0,0,0,18.5,0ZM21,14.5A2.5,2.5,0,0,1,18.5,17H16.517a1.5, 1.5,0,0,0-.962.35L12,20.322,8.445,17.35A1.5,1.5,0,0,0,7.483,17H5.5A2.5,2.5,0,0,1,3,14.5v-9A2.5,2.5,0,0,1,5.5, 3h13A2.5,2.5,0,0,1,21,5.5Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.5,9h3a1.5,1.5,0,0,0,0-3h-3a1.5,1.5,0,0,0,0,3Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.5,11h-9a1.5,1.5,0,0,0,0,3h9a1.5,1.5,0,0,0,0-3Z"
            })
        ]
    });
const Chatbot = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14.881,17c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414l2.536-2.536c.39-.39,.39-1.024, 0-1.414l-2.636-2.636c-.391-.391-.391-1.024,0-1.414,.391-.391,1.023-.391,1.414,0l2.636,2.636c.565,.565,.876, 1.318,.876,2.121s-.312,1.556-.876,2.121l-2.536,2.536c-.195,.195-.451,.293-.707,.293Zm9.119,2v-6.66C24,5.861, 19.096,.454,12.836,.029,9.364-.208,5.961,1.064,3.509,3.521,1.057,5.976-.211,9.378,.03,12.854c.44,6.354,6.052, 11.146,13.054,11.146h5.917c2.757,0,5-2.243,5-5ZM12.701,2.024c5.215,.354,9.299,4.885,9.299,10.316v6.66c0, 1.654-1.346,3-3,3h-5.917c-6.035,0-10.686-3.905-11.059-9.285-.201-2.899,.855-5.735,2.899-7.782,1.882-1.884, 4.435-2.933,7.091-2.933,.228,0,.457,.007,.686,.023Zm-2.875,14.683c.391-.39,.391-1.023, 0-1.414l-2.535-2.536c-.39-.39-.39-1.024,0-1.414l2.636-2.636c.391-.391,.391-1.024,0-1.414-.391-.391-1.023-.391-1.414, 0l-2.636,2.636c-.565,.565-.876,1.318-.876,2.121s.312,1.556,.876,2.121l2.535,2.536c.195,.195,.451,.293,.707, .293s.512-.098,.707-.293Z"
        })
    });
const Cross = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586, 12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0, 0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"
        })
    });
const Home = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0, 0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1, 1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1, 4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
        })
    });
const Instagram = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251, 2.296,1.311,3.608 c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364, 2.661-1.311,3.608 c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849, 0.07s-3.584-0.012-4.849-0.07 c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849 c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311 C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673, 2.014,2.014 C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072, 4.948c0.085,1.853,0.603,3.7,1.942,5.038 c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24, 12,24c3.259,0,3.668-0.014,4.948-0.072 c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184, 1.942-5.038C23.986,15.668,24,15.259,24,12 c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5. 038-1.942 C15.668,0.014,15.259,0,12,0z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162 C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "18.406",
                    cy: "5.594",
                    r: "1.44"
                })
            ]
        })
    });
const PaperPlane = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0, 1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965, 2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264, 4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0, 1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971, 7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"
        })
    });
const Pencil = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1, 1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022, 3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932, 7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"
        })
    });
const Play = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20.463,7.713l-9.1-6.677A5.317,5.317,0,0,0,2.9,5.323V18.677a5.311,5.311,0,0,0,8.46,4.287l9.105-6.677a5.315, 5.315,0,0,0,0-8.574Zm-1.774,6.155-9.1,6.677A2.317,2.317,0,0,1,5.9,18.677V5.323a2.276,2.276,0,0,1,1.27-2.066A2.328, 2.328,0,0,1,8.223,3a2.3,2.3,0,0,1,1.362.455l9.1,6.677a2.316,2.316,0,0,1,0,3.736Z"
        })
    });
const Plus = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1, 1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"
        })
    });
const Portrait = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19, 0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3, 3,0,0,1,3,3Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"
            })
        ]
    });
const SignOutAlt = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0, 2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1, 0,0,0,11.476,15Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323, 4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"
            })
        ]
    });
const Text = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m18.5 0h-13a5.506 5.506 0 0 0 -5.5 5.5v13a5.506 5.506 0 0 0 5.5 5.5h13a5.506 5.506 0 0 0 5.5-5.5v-13a5.506 5.506 0 0 0 -5.5-5.5zm2.5 18.5a2.5 2.5 0 0 1 -2.5 2.5h-13a2.5 2.5 0 0 1 -2.5-2.5v-13a2.5 2.5 0 0 1 2.5-2.5h13a2.5 2.5 0 0 1 2.5 2.5zm-2-10a1.5 1.5 0 0 1 -3 0 .5.5 0 0 0 -.5-.5h-2v8a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3v-8h-2a.5.5 0 0 0 -.5.5 1.5 1.5 0 0 1 -3 0 3.5 3.5 0 0 1 3.5-3.5h7a3.5 3.5 0 0 1 3.5 3.5z"
        })
    });
const Trash = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5, 5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7, 17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            })
        ]
    });
const PhoneCall = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13, 1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0, 4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884, 2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1, 0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549, 0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652, 6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15, 1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"
        })
    });
const Mail = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0, 19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3, 3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
        })
    });
const Location = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "_01_align_center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379, 214.379-214.379 s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104, 512.171z M255.104, 46.553 c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473 c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978, 84.978 S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489, 42.489,42.489 s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z"
                })
            ]
        })
    });
const Bell = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "_01_align_center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: `M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,
      20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,
      22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,
      1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z`
            })
        })
    });
const BellRing = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m1.037 5.889-1.043-1.7 6.735-4.127 1.042 1.706zm21.237 10.328-4.125 6.683 1.7 1.051 4.125-6.684zm-1.35-1.617-4.924 7.983a2.879 2.879 0 0 1 -2.13 1.394 3.158 3.158 0 0 1 -.38.023 2.887 2.887 0 0 1 -2.052-.854l-.963-.963a4.75 4.75 0 0 1 -6.614-6.617l-3.008-3.009a2.911 2.911 0 0 1 .452-4.486l7.762-4.75a8.362 8.362 0 0 1 9.709.489l1.892-1.892 1.414 1.414-1.9 1.9a8.449 8.449 0 0 1 .742 9.368zm-11.914 6.118-3.692-3.695a2.719 2.719 0 0 0 .491 3.211 2.825 2.825 0 0 0 3.201.484zm9.12-14.818a6.4 6.4 0 0 0 -8-.878l-7.752 4.736a.88.88 0 0 0 -.373.649.9.9 0 0 0 .262.736l10.586 10.589a.886.886 0 0 0 .759.26.9.9 0 0 0 .67-.441l4.92-7.973a6.445 6.445 0 0 0 -1.072-7.678z"
        })
    });
const Postman = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M501.57,14.39a32.91,32.91,0,0,0-31.14-8.88L320.65,37a52.07,52.07,0,0,0-29.18,88.33l16.06,16.07a3.89, 3.89,0,0,1,1.16,2.81v29.63a33.43,33.43,0,0,0,33.39,33.39h29.63a4,4,0,0,1,2.82,1.17l16.06,16a51.74,51.74,0,0,0, 36.69,15.29,52.21,52.21,0,0,0,51.63-44.47L510.39,45.94A33.15,33.15,0,0,0,501.57,14.39ZM306.79,81.27A22.25,22.25, 0,0,1,325.22,66c.35-.05.69-.11,1-.18L456.77,38.43,338.08,157.05V144.21a33.11,33.11,0,0, 0-9.79-23.61l-16-16.06A22.27,22.27,0,0,1,306.79,81.27ZM450.05,189.72c-.08.34-.13.69-.18,1a22.68,22.68,0,0, 1-38.5,13l-16.05-16.05a33.16,33.16,0,0,0-23.61-9.8H358.86L477.52,59.17Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M228.43,108.58a32.89,32.89,0,0,0-31.14-8.88L47.51,131.18a52.07,52.07,0,0,0-29.19,88.33l16.06,16.07a4, 4,0,0,1,1.17,2.81V268a33.43,33.43,0,0,0,33.39,33.4H98.56a4,4,0,0,1,2.82,1.16l16.06,16.06a51.76,51.76,0,0,0, 36.69,15.29,52.58,52.58,0,0,0,16.73-2.76,51.74,51.74,0,0,0,34.9-41.72l31.48-149.32A33.13,33.13,0,0,0,228.43, 108.58ZM33.65,175.46a22.25,22.25,0,0,1,18.43-15.24c.34,0,.68-.1,1-.17l130.52-27.44L64.94,251.24V238.39a33.14, 33.14,0,0,0-9.8-23.6l-16-16.06A22.29,22.29,0,0,1,33.65,175.46ZM176.9,283.91a8.85,8.85,0,0,0-.17,1,22.68,22.68, 0,0,1-38.51,13l-16-16a33.15,33.15,0,0,0-23.61-9.8H85.72L204.37,153.36Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M443.31,287.69a32.9,32.9,0,0,0-31.14-8.87L262.39,310.3a52.06,52.06,0,0,0-29.18,88.33l16.06,16.07a3.89, 3.89,0,0,1,1.16,2.81v29.63a33.43,33.43,0,0,0,33.39,33.39h29.63a4,4,0,0,1,2.82,1.17l16.06,16.06a52.07,52.07,0,0, 0,88.32-29.19l31.48-149.33A33.18,33.18,0,0,0,443.31,287.69ZM248.53,354.58A22.26,22.26,0,0,1,267,339.34c.35,0, .69-.1,1-.18l130.52-27.43L279.82,430.36V417.51a33.13,33.13,0,0,0-9.79-23.6l-16-16.06A22.27,22.27,0,0,1,248.53, 354.58ZM391.79,463c-.08.35-.13.69-.18,1a22.68,22.68,0,0,1-38.5,13l-16.05-16a33.1,33.1,0,0, 0-23.61-9.8H300.6l118.66-118.7Z"
            })
        ]
    });
const Comment = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0, 4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9, 18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
            })
        ]
    });
const MapMarkerPlus = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M174.394,478.877c44.856,43.881,116.497,44.06,161.572,0.404l84.946-78.499c92.021-90.795,93.014-238.997 ,2.218-331.017 S184.133-23.249,92.113,67.547c-0.744,0.734-1.484,1.474-2.218,2.218C-1.508,161.182-1.496, 309.387,89.921,400.79 c0.189,0.189,0.379,0.378,0.569,0.567L174.394,478.877z M119.983,99.854c74.626-74.955, 195.885-75.222,270.84-0.596 s75.222,195.885,0.596,270.84l-84.776,78.35c-28.956, 27.252-74.174,27.084-102.927-0.383l-83.733-77.371 c-74.79-74.79-74.791-196.048-0.002-270.839C119.982, 99.855,119.983,99.854,119.983,99.854L119.983,99.854z M149.008,235.274 c0-11.752,9.527-21.279, 21.279-21.279h63.837v-63.837c0-11.752,9.527-21.279,21.279-21.279c11.752,0,21.279,9.527,21.279,21.279 v63.837h63.837c11.752,0,21.279,9.527,21.279,21.279s-9.527,21.279-21.279,21.279h-63.837v63.837 c0,11.752-9.527,21.279-21.279,21.279c-11.752,0-21.279-9.527-21.279-21.279v-63.837h-63.837 C158.535,256.553,149.008,247.026,149.008,235.274z"
        })
    });
const LiveComment = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M273.83-.53A256.07,256.07,0,0,0,.62,273.07C10,408.62,129.75,510.85,279.1,510.85H405.33A106.79, 106.79,0,0,0,512,404.18V262.1C512,123.91,407.4,8.54,273.83-.53Zm195.5,404.71a64.07,64.07,0,0,1-64, 64H279.1c-128.72,0-228-83.3-235.9-198.08A213.28,213.28,0,0,1,256.3,41.52c4.88,0,9.75.15,14.65.49,111.23, 7.55,198.38,104.23,198.38,220.07v142.1Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M352.78,208.27l-96.72-71a56.5,56.5,0,0,0-89.94,45.56V324.8A56.45,56.45,0,0,0,256,370.36l96.77-71a56.49, 56.49,0,0,0,0-91.13Zm-18.86,65.42-96.71,71A24.62,24.62,0,0,1,198,324.8V182.87a24.2,24.2,0,0,1,13.5-22,24.75, 24.75,0,0,1,11.19-2.73A24.47,24.47,0,0,1,237.17,163l96.71,71a24.63,24.63,0,0,1,0,39.71Z"
            })
        ]
    });
const Check = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752, 0-45.248l0,0 c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0 c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"
            })
        })
    });
const Icons = {
    Moon,
    Sun,
    loading,
    AppsAdd,
    ChartConnected,
    LiveChat,
    CommentAlt,
    Chatbot,
    Cross,
    Home,
    PaperPlane,
    Pencil,
    Play,
    Plus,
    Portrait,
    SignOutAlt,
    Text,
    Trash,
    PhoneCall,
    Mail,
    Location,
    Instagram,
    Bell,
    BellRing,
    Postman,
    Comment,
    MapMarkerPlus,
    LiveComment,
    Check
};
const Brands = {
    Instagram,
    LiveChat,
    Chatbot,
    Postman
};

// EXTERNAL MODULE: ./styles/globals.ts
var globals = __webpack_require__(339);
;// CONCATENATED MODULE: ./components/general/Icon/Icon.tsx





const Icon = ({ name , size ="md" , color , ...rest })=>{
    const Icon = styled_default()(Icons[name])`
    color: ${color ? color : ({ theme  })=>theme.font.regular};
  `;
    const sizeInRem = `${globals/* typographySizeOptions */.y6[size]}`;
    const sizes = {
        width: sizeInRem,
        height: sizeInRem
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
        role: "img",
        "aria-label": name,
        ...sizes,
        ...rest
    });
};

;// CONCATENATED MODULE: ./components/general/Icon/index.ts



/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Typography)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.ts
var globals = __webpack_require__(339);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/general/Typography/Typography.tsx




const titleLevelOptions = (/* unused pure expression or super */ null && ([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
]));
const getTextStyles = (color, size, weight, theme)=>react_.css`
  font-size: ${globals/* typographySizeOptions */.y6[size]};
  font-weight: ${globals/* typographyWeightOptions */.j9[weight]};
  color: ${theme.font[color]};
`;
const StyledParagraph = (styled_default()).p`
  ${({ color ="regular" , size ="base" , weight ="normal" , theme  })=>getTextStyles(color, size, weight, theme)}
`;
const StyledText = (styled_default()).span`
  ${({ color ="regular" , size ="base" , weight ="normal" , theme  })=>getTextStyles(color, size, weight, theme)}
`;
const Paragraph = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledParagraph, {
        ...props
    });
};
const Text = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledText, {
        ...props
    });
};
const Title = (props)=>{
    // eslint-disable-next-line no-undef
    const HeadingTag = props.level;
    const StyledHeadingTag = styled_default()(HeadingTag)`
    ${({ color ="regular" , size ="base" , weight ="normal" , theme  })=>getTextStyles(color, size, weight, theme)}
  `;
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledHeadingTag, {
        ...props
    });
};
const Typography = {
    Title,
    Text,
    Paragraph
};

;// CONCATENATED MODULE: ./components/general/Typography/index.ts



/***/ }),

/***/ 4082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ changeTheme),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isDark: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        changeTheme: (state, action)=>{
            state.isDark = action.payload;
        }
    }
});
const { changeTheme  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice);


/***/ }),

/***/ 7627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;