const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

let checkLicense = function (template_dir, type) {
  var template_path = path.join(template_dir, `${type}.txt`);
  core.info('template_path:');
  core.info(template_path);
  if (fs.existsSync(template_path)) return template_path;
  else {
    throw new Error(`Can not find the template of ${type} license!`);
  }
};

let generateLicense = function (_path, template, year, author, work) {
  fs.copyFileSync(template, _path);
  core.info('Copy complete, and the license template from:');
  core.info(template);
  var data = fs.readFileSync(_path, 'utf-8');
  core.info('Read complete, and the license from');
  core.info(_path);
  var _year = new Date().getFullYear();
  core.info(`Now year: ${_year}`);
  if (year === 'none') year = _year;
  if (parseInt(year) != _year) _year = `${year}-${_year}`;
  core.info(`License year: ${_year}`);
  data = data
    .replace(/{author}/g, author)
    .replace(/{year}/g, _year)
    .replace(/{work}/g, work);
  fs.writeFileSync(_path, data, 'utf-8');
  core.info('Write complete and the data is:');
  core.info(data);
};

module.exports = {
  checkLicense,
  generateLicense
};
