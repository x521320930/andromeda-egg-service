'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 登录
  router.post('/login', controller.login.login);
  router.post('/signUp', controller.login.signUp);
  router.post('/passwordRest', controller.login.passwordRest);
  // 文章
  router.post('/article/add', controller.article.add);
};
