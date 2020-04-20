'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {

  /**
   * @description 基础查询文章列表
   * @url /login
   * @function POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async login() {

    const { ctx } = this;

    ctx.body = 'data';
  }

  /**
   * @description 添加
   * @url /signUp
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   */

  async signUp() {
    const validate = {
      user_name: { type: 'string', required: true },
      password: { type: 'string', required: true },
      source_type: { type: 'string', required: true },
    };
    const { ctx, app } = this;
    const body = ctx.request.body;
    const err = app.validator.validate(validate, body);
    console.log(err);
    if (err) {
      ctx.status = 422;
      ctx.body = { msg: '请求格式正确，但是由于含有语义错误，无法响应', code: 1, data: {} };
    } else {
      const result = await ctx.service.login.add(body);
      ctx.body = result;
    }
  }


}


module.exports = LoginController;
