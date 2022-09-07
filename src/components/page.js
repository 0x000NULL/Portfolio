"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var theme_ui_1 = require("theme-ui");
var gatsby_plugin_mdx_1 = require("gatsby-plugin-mdx");
var layout_1 = require("./layout");
var seo_1 = require("./seo");
var Page = function (_a) {
    var page = _a.data.page, location = _a.location;
    return (theme_ui_1.jsx(layout_1.default, { color: page.color || undefined },
        theme_ui_1.jsx(seo_1.default, { title: page.title, description: page.excerpt, pathname: location.pathname, image: page.cover.childImageSharp.resize.src }),
        theme_ui_1.jsx("div", { sx: {
                variant: page.custom ? "content.custom" : "content.page",
            }, "data-testid": "page-content" },
            theme_ui_1.jsx(gatsby_plugin_mdx_1.MDXRenderer, null, page.body))));
};
exports.default = Page;
//# sourceMappingURL=page.js.map