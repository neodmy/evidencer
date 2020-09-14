const System = require('systemic');
const initOctokit = require('./octokit');

module.exports = new System({ name: 'octokit' })
	.add('octokit', initOctokit())
	.dependsOn('config', 'logger');
