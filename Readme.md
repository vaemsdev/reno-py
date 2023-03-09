# Renovate

## 1. Installation

Docker Build Your Image

~~~
docker build -t app-test
~~~

Docker Run Your Project Image

~~~
docker run -d -p 5000:5000 app-test .
~~~

Docker Run Renovate

~~~
docker run --rm -v "G:/Github/reno-py/.github/config.js:/usr/src/app/config.js" renovate/renovate
~~~

## 2. Dependency Dashboard

- It allows the approver/reviewer to review & create pull request(s) for choosen dependencies only.

- Approver can mark any dependency (ex. Minor version dependency) ignorable, Renovate will stop triggering checks for the marked dependencies.

- It has “Detected dependencies” section where approver can review all the detected dependencies by Renovate

> **Example: How to enable dependency dashboard in Github**

```
/* .github/config.js */

{
  "extends": ["config:base", ":dependencyDashboardApproval"]
}
```

## 3. Pull Request

- Renovate will create PR automatic immediately after dependency detection

- If we close the PRs manually, Renovate will ignore those PRs in next run

- **Re-open the PR** : If we want to re-run or re-open the PR for the dependencies, Go to the closed one PR > Tick the checkbox "If you want to rebase/retry this PR, check this box" and re-run the docker command to re-open PR.
