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
            "matchDepTypes": ["dependencies"],
            "matchUpdateTypes": ["major", "minor", "patch", "pin", "digest", "lockFileMaintenance", "rollback", "bump"],
            "groupName": "dependencies",
            "semanticCommitType": "fix"
        }
    ]
};