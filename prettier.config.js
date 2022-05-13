"use strict";
exports.__esModule = true;
var options = {
    trailingComma: 'none',
    semi: false,
    singleQuote: true,
    proseWrap: 'always',
    overrides: [
        {
            files: ['*.md', '*.mdx'],
            options: {
                printWidth: 130
            }
        }
    ]
};
module.exports = options;
