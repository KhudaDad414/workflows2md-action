const core = require('@actions/core');
const { getWorkflowsMarkdown, writeFile } = require('workflows-to-markdown');
// most @actions toolkit packages have async methods
async function run() {
  try {
    const input = core.getInput('input') || '.github/workflows';
    const output = core.getInput('output') || '.github/README.md';
    const workflows = getWorkflowsMarkdown(input);
    core.setOutput(writeFile(output, workflows));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
