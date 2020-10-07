const fs = require('fs');
const path = require('path');

let checkLicense = async function (template_path, type) {
  var template = path.join(template_path, `${type}.txt`);
  if (fs.existsSync(template)) return template;
  else {
    throw new Error(`Can not find the template of ${type} license!`);
  }
};

let generateLicense = async function (_path, template, year, author) {
  if (fs.existsSync(_path)) fs.unlinkSync(_path);
  fs.copyFile(template, _path, err => {
    if (err) throw err;
  });
  var data = fs.readFileSync(_path, 'utf-8');
  var _year = new Date().getFullYear();
  if (parseInt(year) != _year) _year = `${year}-${_year}`;
  data = data.replace(/{author}/g, author).replace(/{year}/g, _year);
  fs.writeFileSync(_path, data, 'utf-8');
};

module.exports = {
  checkLicense,
  generateLicense
};
