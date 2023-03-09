module.exports = {
    endpoint: 'https://api.github.com/',
    token: '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',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
        extends: ['config:base', ':dependencyDashboard'],
    },
    repositories: ['vaemsdev/reno-py'],
    renovateFork: true,
    gitAuthor: "VAEMSDEV <vaemsdev@gmail.com>",
    username: "vaemsdev",
    onboarding: false,
    printConfig: true,
    requireConfig: false,
    "packageRules": [
        {
            "matchDepTypes": ["devDependencies"],
            "matchUpdateTypes": ["patch", "minor"],
            "groupName": "Dependencies (non-major)"
        }
    ]
};