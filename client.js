require('seneca')()
	.use('./definition')
	.listen({port: 3501, host: 'localhost'});