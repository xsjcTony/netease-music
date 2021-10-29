module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'import'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // vue
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'consistent',
        multiline: 'consistent',
        maxEmptyLines: 0,
        blocks: {
          template: {
            singleline: 'always',
            multiline: 'always'
          },
          script: {
            singleline: 'always',
            multiline: 'always'
          }
        }
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/no-empty-component-block': 'error',
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: false,
        disallowVue3BuiltInComponents: false
      }
    ],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-direct-export': ['error', { disallowFunctionalComponentFunction: false }],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-function-call': ['error', 'never', { ignoreIncludesComment: false }],
    // vue default rules overwrite
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    // vue extension rules (for expression in <template>)
    'vue/arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false
      }
    ],
    'vue/comma-dangle': ['error', 'never'],
    'vue/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'vue/comma-style': ['error', 'last'],
    'vue/eqeqeq': ['error', 'always'],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'vue/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/prefer-template': 'error',
    'vue/space-infix-ops': ['error', { int32Hint: false }],
    'vue/template-curly-spacing': ['error', 'always'],

    // js
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoreComments: false
      }
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true
      }
    ],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-multi-assign': 'error',
    'one-var': ['error', 'never'],
    semi: ['error', 'never'],
    'no-unexpected-multiline': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-const-assign': 'error',
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'no-prototype-builtins': 'error',
    'no-array-constructor': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'always'],
    'no-eval': ['error', { allowIndirect: false }],
    'no-useless-escape': 'error',
    'no-new-func': 'error',
    'wrap-iife': ['error', 'outside'],
    'no-loop-func': 'error',
    'no-param-reassign': ['warn', { props: true }],
    'prefer-spread': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-iterator': 'warn',
    'no-undef': ['error', { 'typeof': true }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    eqeqeq: ['error', 'always'],
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'iife' },
      { blankLine: 'always', prev: 'iife', next: '*' }
    ],

    // eslint-plugin-import
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': ['error', 'always', { js: 'never' }]
  }
}
