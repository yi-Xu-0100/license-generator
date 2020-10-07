const core = require('@actions/core');
const path = require('path');
const util = require('./util');

const src = path.join(__dirname, '..');

function run() {
  core.startGroup('Get Input value');
  const license_path = path.join(src, core.getInput('path', { require: false }));
  core.info(`license_path: ${license_path}`);
  const license_type = core.getInput('type', { require: false }).toLowerCase();
  core.info(`license_type in lower case: ${license_type}`);
  const license_year = core.getInput('year', { require: false });
  core.info(`license_year: ${license_year}`);
  const license_author = core.getInput('author', { require: false });
  core.info(`license_author: ${license_author}`);
  const license_template_dir = path.join(src, 'template');
  core.info('license_template_dir:');
  core.info(license_template_dir);
  core.endGroup();
  core.startGroup('Check license type');
  var license_template_path = util.checkLicense(license_template_dir, license_type);
  core.endGroup();
  core.startGroup('Generate license');
  util.generateLicense(license_path, license_template_path, license_year, license_author);
  core.endGroup();
}

try {
  run();
} catch (error) {
  core.setFailed(`Action failed with "${error.message}"`);
}
