var riot = require('riot'),
    loaderUtils = require('loader-utils'),
    REQUIRE_RIOT = 'var riot = require("riot");\n\n';


module.exports = function (source) {

  var content = source;
  var options = loaderUtils.parseQuery(this.query);

  if (options.brackets) {
    riot.settings.brackets = options.brackets;
    delete options.brackets;
  }

  if (this.cacheable) this.cacheable();

  Object.keys(options).forEach(function(key) {
    switch(options[key]) {
      case 'true':
        options[key] = true;
        break;
      case 'false':
        options[key] = false;
        break;
      case 'undefined':
        options[key] = undefined;
        break;
      case 'null':
        options[key] = null;
        break;
    }
  });

  try {
    return REQUIRE_RIOT + riot.compile(content, options);
  } catch (e) {
    throw new Error(e);
  }
};
