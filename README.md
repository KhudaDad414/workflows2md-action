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


## Reference Example

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
## License

[MIT](LICENSE)
