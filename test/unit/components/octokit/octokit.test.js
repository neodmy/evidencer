const system = require('../../../../system');

describe('Octokit component', () => {
	const sys = system();
	let octokit;

	beforeAll(async () => {
		({ octokit } = await sys.start());
	});

	afterAll(() => sys.stop());

	test('should initialize octokit component', () => {
		expect(octokit).toBeDefined();
	});

	test('should list all users', async () => {
		const { data } = await octokit.users.getByUsername({ username: 'neodmy' });
		console.log(data);
	});

	test('should get all commits from a repo', async () => {
		const { data } = await octokit.repos.listCommits({
			owner: 'neodmy',
			repo: 'evidencer',
		});

		console.log(data[0].author);
	});
});
