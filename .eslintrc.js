module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'node': true,
        'jest': true,
        'es6': true
    },
    'plugins': [
        'react'
    ],
    'settings': {
        'import/resolver': 'webpack'
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    'parser': 'babel-eslint',
    'rules': {
        'max-params': 0,
        'no-console': [
            2,
            {
                'allow': [
                    'info',
                    'error'
                ]
            }
        ],
        'max-len': [
            2,
            100,
            2,
            {
                'ignoreComments': true,
                'ignoreUrls': true
            }
        ],
        'semi': [
            'error',
            'always',
            {
                'omitLastInOneLineBlock': true
            }
        ],
        'space-before-function-paren': [
            2,
            {
                'anonymous': 'never',
                'named': 'never'
            }
        ],
        'indent': [
            'error',
            4
        ],
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 2
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                'requireReturn': false
            }
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'prefer-arrow-callback': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'linebreak-style': 0,
        'no-new': 0,
        'radix': 0,
        'max-depth': [
            'error',
            5
        ],
        'no-useless-escape': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/destructuring-assignment': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-no-bind': 0
    }
};
