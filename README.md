# Generate Workflows Map

A GitHub action to [create a map](WORKFLOWS.md) of your event-workflows map your workflows.

This action uses [workflows-to-markdown](https://github.com/khudaDad414/workflows-to-markdown) under the hood to generate the file.
If you have a `node` project or you want to generate the map locally, it may be easier to use the mentioned cli tool instead of this actions.
This action is designed to generate the `.md` and you can use other actions to create a pull-request or commit to save the result.

Generate Workflows Map action will:

1. Read your actions and create event-workflows map and a description table.
2. Save those in a `.md` file.


## Usage

```yml
    - uses: actions/checkout@v2 
    # generate .md file
    - uses: khudadad414@workflows2md-action
      id: workflows2md
    # save the changes with the action of your liking
    - uses: EndBug/add-and-commit@v7
      with:
       cwd: ${{env.GITHUB_WORKSPACE}}
       add: ${{ steps.workflows2md.outputs.path }}
```

### Action inputs

All inputs are **optional**. If not set, sensible defaults will be used.


| Name | Description | Default |
| --- | --- | --- |
| `input` | Relative path under `GITHUB_WORKSPACE` to the workflows folder. | `.github/workflows` |
| `output` | Relative path under `GITHUB_WORKSPACE` to the output `.md` file. | `WORKFLOWS.md` |

### Action outputs

The following outputs can be used by subsequent workflow steps.

- `path` - The path to the saved file.

Step outputs can be accessed as in the following example.
Note that in order to read the step outputs the action step must have an id.

```yml
      - name: Generate workflows map
        id: workflows2md
        uses: @khudadad414/workflows2md-action
      - name: Check outputs
        run: |
          echo "Pull Request Number - ${{ steps.workflows2md.outputs.path }}"
```


## Example

```yml
name: Generate Workflows Map
on:
  pull_request:
  push:
    branches:
      - main
      - 'release/*'

jobs:
  # test action works running from the graph
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2 
    - uses: ./
      id: workflows2md
    - uses: EndBug/add-and-commit@v7
      with:
       cwd: ${{env.GITHUB_WORKSPACE}}
       add: ${{ steps.workflows2md.outputs.path }}
```
## Example Output
This is a map that has been generated from [AsyncAPI's website workflows](https://github.com/asyncapi/website/tree/master/.github/workflows).
### Event-Workflow Map

<table>
<tr>
<th rowspan=2><code>pull_ request_ target</code></th><th><code> opened </code></th><th><code>edited</code>, <code>synchronize</code></th><th><code>reopened</code>, <code>ready_for_review</code></th><th><code>unlocked</code>, <code>unlabeled</code>, <code>labeled</code></th></tr>
<tr><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#remove-ready-to-merge-label'>Remove ready-to-merge label</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-for-humans'>Automerge For Humans</a></li><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li></ul></tr><tr>
<th rowspan=2><code>issues</code></th><th><code> opened </code></th><th><code> reopened </code></th><th><code>unlabeled</code>, <code>labeled</code>, <code>closed</code>, <code>deleted</code></th><th><code> edited </code></th></tr>
<tr><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li><li><a href='#notify-slack'>Notify slack</a></li></ul><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2><code>push</code></th><th><code> master </code></th><th><code> any </code></th><th><code>**-release</code>, <code>next</code></th></tr>
<tr><td><ul><li><a href='#bump-package-version-in-dependent-repos---if-node-project'>Bump package version in dependent repos - if Node project</a></li><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul><td><ul><li><a href='#autoupdate'>autoupdate</a></li></ul><td><ul><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul></tr><tr>
<th rowspan=2><code>pull_ request</code></th><th><code> opened </code></th><th><code>ready_for_review</code>, <code>synchronize</code>, <code>reopened</code></th><th><code> edited </code></th></tr>
<tr><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2><code>issue_ comment</code></th><th><code> created </code></th><th><code> edited </code></th></tr>
<tr><td><ul><li><a href='#add-ready-to-merge-or-do-not-merge-label'>Add ready-to-merge or do-not-merge label</a></li><li><a href='#create-help-comment'>Create help comment</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2><code>pull_ request_ review</code></th><th><code> submitted </code></th><th><code> edited </code></th></tr>
<tr><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2><code>schedule</code></th><th><code> At 12:00 AM </code></th></tr>
<tr><td><ul><li><a href='#notify-on-failing-automerge'>Notify on failing automerge</a></li><li><a href='#manage-stale-issues-and-prs'>Manage stale issues and PRs</a></li></ul></tr><tr>
<th rowspan=2><code>release</code></th><th><code> published </code></th></tr>
<tr><td><ul><li><a href='#version-bump---if-node.js-project'>Version bump - if Node.js project</a></li><li><a href='#announce-releases-in-different-channels'>Announce releases in different channels</a></li></ul></tr><tr>
<th rowspan=2><code>discussion</code></th><th><code> created </code></th></tr>
<tr><td><ul><li><a href='#notify-slack'>Notify slack</a></li></ul></tr><tr>
<th rowspan=2><code>pull_ request_ review_ comment</code></th><th><code>edited</code>, <code>created</code></th></tr>
<tr><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr></table>

### Workflows 

 | Workflow | Description | 
 | --- | --- | 
| <a href="/test-workflows/automerge-for-humans-merging.yml" id="automerge-for-humans">Automerge For Humans</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/automerge.yml" id="automerge-release-bump-pr">Automerge release bump PR</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/issues-prs-notifications.yml" id="notify-slack">Notify slack</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/lint-pr-title.yml" id="lint-pr-title">Lint PR title</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/welcome-first-time-contrib.yml" id="welcome-first-time-contributors">Welcome first time contributors</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/automerge-for-humans-remove-ready-to-merge-label-on-edit.yml" id="remove-ready-to-merge-label">Remove ready-to-merge label</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/deploy.yml" id="deploy-to-netlify">Deploy to Netlify</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/sentiment-analysis.yml" id="sentiment-analysis">Sentiment Analysis</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/bump.yml" id="bump-package-version-in-dependent-repos---if-node-project">Bump package version in dependent repos - if Node project</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/if-nodejs-release.yml" id="release---if-node-project">Release - if Node project</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/autoupdate.yml" id="autoupdate">autoupdate</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/if-go-pr-testing.yml" id="pr-testing---if-go-project">PR testing - if Go project</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/if-nodejs-pr-testing.yml" id="pr-testing---if-node-project">PR testing - if Node project</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/automerge-for-humans-add-ready-to-merge-or-do-not-merge-label.yml" id="add-ready-to-merge-or-do-not-merge-label">Add ready-to-merge or do-not-merge label</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/help-command.yml" id="create-help-comment">Create help comment</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/automerge-orphans.yml" id="notify-on-failing-automerge">Notify on failing automerge</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/stale-issues-prs.yml" id="manage-stale-issues-and-prs">Manage stale issues and PRs</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |
| <a href="/test-workflows/if-nodejs-version-bump.yml" id="version-bump---if-node.js-project">Version bump - if Node.js project</a> |  There is no need to substract "v" from the tag as version script handles it |
| <a href="/test-workflows/release-announcements.yml" id="announce-releases-in-different-channels">Announce releases in different channels</a> | Your first comment after <code>name</code> parameter in workflow will appear here. |


## License

[MIT](LICENSE)
