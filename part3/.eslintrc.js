module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
		],
		"eqeqeq": "error",
 	  	"no-trailing-spaces": "error",
    	"object-curly-spacing": [
     	   "error", "always"
    	],
    	"arrow-spacing": [
        	"error", { "before": true, "after": true }
    	],
    	"no-console": 0

    }
}