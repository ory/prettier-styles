import * as prettier from 'prettier'

const options: prettier.Options = {
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
}

module.exports = options
