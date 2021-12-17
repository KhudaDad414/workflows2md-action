## Event-Workflow Map

<table>
<tr>
<th rowspan=2>When Push:</th><th>master </th><th>main </th><th>{} </th><th>next, **-release </th><th>release/* </th></tr>
<tr><td><ul><li><a href='#bump-package-version-in-dependent-repos---if-node-project'>Bump package version in dependent repos - if Node project</a></li><li><a href='#global-workflow-to-rule-them-all'>Global workflow to rule them all</a></li><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul><td><ul><li><a href='#check-dist'>Check dist</a></li><li><a href='#units-test'>units-test</a></li></ul><td><ul><li><a href='#autoupdate'>autoupdate</a></li></ul><td><ul><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul><td><ul><li><a href='#units-test'>units-test</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request:</th><th>opened </th><th>reopened, ready_for_review, synchronize </th><th>{"paths-ignore":["**.md"]} </th><th>edited </th><th>null </th></tr>
<tr><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li></ul><td><ul><li><a href='#check-dist'>Check dist</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#units-test'>units-test</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request Target:</th><th>opened </th><th>synchronize, edited </th><th>ready_for_review, reopened </th><th>labeled, unlocked, unlabeled </th></tr>
<tr><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#remove-ready-to-merge-label'>Remove ready-to-merge label</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li></ul></tr><tr>
<th rowspan=2>When Issues:</th><th>opened </th><th>reopened </th><th>edited </th></tr>
<tr><td><ul><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#notify-slack'>Notify slack</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Issue Comment:</th><th>created </th><th>edited </th></tr>
<tr><td><ul><li><a href='#add-ready-to-merge-or-do-not-merge-label'>Add ready-to-merge or do-not-merge label</a></li><li><a href='#create-help-comment'>Create help comment</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request Review:</th><th>submitted </th><th>edited </th></tr>
<tr><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Workflow Dispatch:</th><th>null </th><th>{} </th></tr>
<tr><td><ul><li><a href='#check-dist'>Check dist</a></li></ul><td><ul><li><a href='#global-workflow-to-rule-them-all'>Global workflow to rule them all</a></li></ul></tr><tr>
<th rowspan=2>Schedules:</th><th>At 12:00 AM </th></tr>
<tr><td><ul><li><a href='#notify-on-failing-automerge'>Notify on failing automerge</a></li><li><a href='#manage-stale-issues-and-prs'>Manage stale issues and PRs</a></li></ul></tr><tr>
<th rowspan=2>When Release:</th><th>published </th></tr>
<tr><td><ul><li><a href='#version-bump---if-node.js-project'>Version bump - if Node.js project</a></li><li><a href='#announce-releases-in-different-channels'>Announce releases in different channels</a></li></ul></tr><tr>
<th rowspan=2>When Discussion:</th><th>created </th></tr>
<tr><td><ul><li><a href='#notify-slack'>Notify slack</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request Review Comment:</th><th>created, edited </th></tr>
<tr><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr></table>

## Workflows 

 | Workflow | Description | 
 | --- | --- | 
| [Bump package version in dependent repos - if Node project](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/bump.yml) | A short description about the workflow will appear here... |
| [Global workflow to rule them all](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/global-workflows-support.yml) | A short description about the workflow will appear here... |
| [Release - if Node project](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/if-nodejs-release.yml) | A short description about the workflow will appear here... |
| [Check dist](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/check-dist.yml) | A short description about the workflow will appear here... |
| [units-test](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/test.yml) | A short description about the workflow will appear here... |
| [autoupdate](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/autoupdate.yml) | A short description about the workflow will appear here... |
| [PR testing - if Go project](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/if-go-pr-testing.yml) | A short description about the workflow will appear here... |
| [PR testing - if Node project](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/if-nodejs-pr-testing.yml) | A short description about the workflow will appear here... |
| [Sentiment Analysis](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/sentiment-analysis.yml) | A short description about the workflow will appear here... |
| [Automerge For Humans](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/automerge-for-humans-merging.yml) | A short description about the workflow will appear here... |
| [Automerge release bump PR](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/automerge.yml) | A short description about the workflow will appear here... |
| [Notify slack](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/issues-prs-notifications.yml) | A short description about the workflow will appear here... |
| [Lint PR title](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/lint-pr-title.yml) | A short description about the workflow will appear here... |
| [Welcome first time contributors](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/welcome-first-time-contrib.yml) | A short description about the workflow will appear here... |
| [Remove ready-to-merge label](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/automerge-for-humans-remove-ready-to-merge-label-on-edit.yml) | A short description about the workflow will appear here... |
| [Add ready-to-merge or do-not-merge label](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/automerge-for-humans-add-ready-to-merge-or-do-not-merge-label.yml) | A short description about the workflow will appear here... |
| [Create help comment](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/help-command.yml) | A short description about the workflow will appear here... |
| [Notify on failing automerge](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/automerge-orphans.yml) | A short description about the workflow will appear here... |
| [Manage stale issues and PRs](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/stale-issues-prs.yml) | A short description about the workflow will appear here... |
| [Version bump - if Node.js project](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/if-nodejs-version-bump.yml) | A short description about the workflow will appear here... |
| [Announce releases in different channels](e/runner/work/workflows2md-action/workflows2md-action/.github/workflows/release-announcements.yml) | A short description about the workflow will appear here... |
