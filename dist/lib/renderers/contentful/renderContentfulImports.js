"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderContentfulImports(localization, hasRichText) {
    if (localization === void 0) { localization = false; }
    if (hasRichText === void 0) { hasRichText = true; }
    return "\n    // THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.\n\n    import { " + (localization ? "" : "Asset, ") + "Entry } from 'contentful'\n    " + (hasRichText ? "import { Document } from '@contentful/rich-text-types'" : "") + "\n  ";
}
exports.default = renderContentfulImports;
//# sourceMappingURL=renderContentfulImports.js.map