const { Octokit } = require('@octokit/rest');
const { createAppAuth } = require('@octokit/auth-app');

module.exports = () => {
	const start = async ({ config, logger }) => {
		logger.info('Initializing Octokit component');

		const { privateKey, id, installationId } = config;

		const appOctokit = new Octokit({
			authStrategy: createAppAuth,
			auth: {
				id,
				privateKey: privateKey.replace(/\\n/gm, '\n'),
				installationId: Number(installationId),
			},
		});

		return appOctokit;
	};

	return { start };
};
