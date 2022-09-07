"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var theme_ui_1 = require("theme-ui");
var React = require("react");
var react_1 = require("@emotion/react");
var layout_wrapper_1 = require("./layout-wrapper");
var sidebar_1 = require("./sidebar");
var footer_1 = require("./footer");
var seo_1 = require("./seo");
var skip_nav_1 = require("./skip-nav");
var Layout = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "white" : _b;
    return (theme_ui_1.jsx(React.Fragment, null,
        theme_ui_1.jsx(react_1.Global, { styles: function (t) { return ({
                "*,*:after,*:before": {
                    boxSizing: "border-box",
                },
                html: {
                    fontSize: "18px",
                    WebkitTextSizeAdjust: "100%",
                },
                img: {
                    borderStyle: "none",
                },
                pre: {
                    fontFamily: "monospace",
                    fontSize: "1em",
                },
                "[hidden]": {
                    display: "none",
                },
                "::selection": {
                    background: theme_ui_1.get(t, "colors.primary"),
                    color: theme_ui_1.get(t, "colors.white"),
                },
                "ul > li > code, ol > li > code, p > code": {
                    color: "#393A34",
                    background: "#f6f8fa",
                    padding: 2,
                },
                "@media(max-width: 600px)": {
                    html: {
                        fontSize: "16px",
                    },
                },
            }); } }),
        theme_ui_1.jsx(seo_1.default, null),
        theme_ui_1.jsx(skip_nav_1.SkipNavTrigger, null),
        theme_ui_1.jsx(layout_wrapper_1.default, null,
            theme_ui_1.jsx(sidebar_1.default, { bg: color }),
            theme_ui_1.jsx("main", { sx: { gridColumnStart: [1, 1, 1, 2] } },
                theme_ui_1.jsx(skip_nav_1.SkipNavTarget, null),
                children),
            theme_ui_1.jsx(footer_1.default, { bg: color }))));
};
exports.default = Layout;
//# sourceMappingURL=layout.js.map