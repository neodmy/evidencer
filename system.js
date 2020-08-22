const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'evidencer' })
	.bootstrap(join(__dirname, 'components'));
