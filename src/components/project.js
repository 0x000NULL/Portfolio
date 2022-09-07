"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var theme_ui_1 = require("theme-ui");
var gatsby_plugin_mdx_1 = require("gatsby-plugin-mdx");
var polished_1 = require("polished");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var layout_1 = require("./layout");
var seo_1 = require("./seo");
var Project = function (_a) {
    var _b = _a.data, project = _b.project, images = _b.images, location = _a.location;
    return (theme_ui_1.jsx(layout_1.default, { color: project.color || undefined },
        theme_ui_1.jsx(seo_1.default, { title: project.title, description: project.excerpt, pathname: location.pathname, image: project.cover.childImageSharp.resize.src }),
        theme_ui_1.jsx("div", { sx: { variant: "content.project" } },
            theme_ui_1.jsx("div", { sx: { fontSize: 2, textTransform: "uppercase", letterSpacing: "wider", mb: 2 } }, project.category),
            theme_ui_1.jsx(theme_ui_1.Heading, { as: "h1", variant: "styles.h1", sx: { mt: 0 } }, project.title),
            theme_ui_1.jsx("div", { sx: { maxWidth: "70ch", my: 4 } },
                theme_ui_1.jsx(gatsby_plugin_mdx_1.MDXRenderer, null, project.body))),
        theme_ui_1.jsx("div", { sx: { backgroundColor: polished_1.transparentize(0.9, project.color) } },
            theme_ui_1.jsx("div", { sx: { variant: "content.imageList" } }, images.nodes.map(function (image) { return (theme_ui_1.jsx(gatsby_plugin_image_1.GatsbyImage, { key: image.name, alt: image.name, image: image.childImageSharp.gatsbyImageData })); })))));
};
exports.default = Project;
//# sourceMappingURL=project.js.map