const core = require('@actions/core');
const path = require('path');
const util = require('./util');

const src = path.join(__dirname, '..');

async function run() {
  core.startGroup('Get Input value');
  const license_path = path.join(src, core.getInput('path', { require: false }));
  const license_type = core.getInput('type', { require: false }).toLowerCase();
  const license_year = core.getInput('year', { require: false });
  const license_author = core.getInput('author', { require: false });
  const license_template_path = path.join(src, 'template');
  core.endGroup();
  core.startGroup('Check license type');
  var license_template = util.checkLicense(license_template_path, license_type);
  core.endGroup();
  core.startGroup('Generate license');
  await util.generateLicense(license_path, license_template, license_year, license_author);
  core.endGroup();
}

try {
  run();
} catch (error) {
  core.setFailed(error);
}
