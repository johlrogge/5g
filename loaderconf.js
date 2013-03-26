curl = {
    baseUrl: 'js',
    paths: {
        'jquery': 'ext/jquery-1.8.2',
        'jquery-hashchange': 'ext/jquery-hashchange',
        'curl/plugin/twig': '../modules/twig/twig',
        'curl/plugin/css': '../modules/curl/src/curl/plugin/css',
	'curl/plugin/md': '../modules/papyrus/papyrus-md',
	'curl/plugin/js': '../modules/curl/src/curl/plugin/js',
	'curl/plugin/text': '../modules/curl/src/curl/plugin/text',
	'foliage/bootstrap': '../candidates/foliage/bootstrap',
	'bootstrap/css': '../modules/bootstrap/docs/assets/css',
	'bootstrap/less': '../modules/bootstrap/less',
	'bootstrap/less/variables.less': '../less/variables.less',
	'bootstrap/less/type.less': '../less/type.less',
	'less': '../modules/less.js/dist/less-1.3.3.js',
	'style': '../less'
    },
    packages: {
        'bootstrap-lb': {
            'location':'../modules/bootstrap-lightbox',
            'main':'js/bootstrap-lightbox'
        },
	'lodash': {
	    'location':'../modules/lodash',
	    'main':'lodash'
	},
	'blossom': {
	    'location':'../modules/blossom',
	    'main':'blossom'
	},
	'markdown': {
	    'path': '../modules/markdown-js/lib',
	    'main': 'markdown.js'
	},
	'papyrus': {
	    'location':'../modules/papyrus',
	    'main':'papyrus-md'
	},
	'phloem': {
	    'location':'../modules/phloem',
            'main':'phloem'
        },
        'bud': {
            'location':'../modules/bud',
            'main':'bud'
        },
        'twig': {
            'path':'../modules/twig',
            'main':'twig'
        },
        'foliage' : {
            'location':'../modules/foliage',
            'main':'foliage'

        },
        'epiphyte' : {
            'location':'../modules/epiphyte',
            'main':'remoteAdapter',
            'lib': 'ext'
        },
        'when' : {
            'location': '../modules/when',
            'main': 'when'
        }
    }
};
