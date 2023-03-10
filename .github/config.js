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
    recreateClosed: true,
    "packageRules": [
        {
            "matchDepTypes": ["dependencies"],
            "matchUpdateTypes": ["major", "minor", "patch", "pin", "digest", "lockFileMaintenance", "rollback", "bump"],
            "groupName": "dependencies",
            "semanticCommitType": "fix"
        },
        {
            "groupName": "Flask packages",
            "groupSlug": "flaskDep",
            "matchPackageNames": [
                "Flask"
            ]
        }
    ]
};