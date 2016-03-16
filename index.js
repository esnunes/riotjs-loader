var riot = require('riot-compiler'),
    loaderUtils = require('loader-utils');


module.exports = function (source) {

  var content = source;
  var options = loaderUtils.parseQuery(this.query);

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
    return riot.compile(content, options);
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    } else {
      throw new Error(e);
    }
  }
};
