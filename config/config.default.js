/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = '_1587031064012_423';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };


  config.static = {
    prefix: '/static/',
    dir: [ path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'app/www') ],
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };


  config.validate = { // 配置参数校验器，基于parameter
    convert: true, // 对参数可以使用convertType规则进行类型转换
    validateRoot: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};

