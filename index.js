const core = require('@actions/core');
const { getWorkflowsMarkdown, writeFile } = require('workflows-to-markdown');
const path = require('path');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const input = core.getInput('input') || '.github/workflows';
    const output = core.getInput('output') || 'WORKFLOWS.md';
    const workflows = getWorkflowsMarkdown(
      path.join(process.env.GITHUB_WORKSPACE, input)
    );
    writeFile(path.join(process.env.GITHUB_WORKSPACE, output), workflows);
    core.setOutput('path', output);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
