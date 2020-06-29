'use strict';
const Controller = require('egg').Controller;
const crypto = require('crypto');
class LoginController extends Controller {

  /**
   * @description 基础查询文章列表
   * @url /login
   * @function POST
   * @param user_name 用户名
   * @param password 密码
   */

  async login() {
    const validate = {
      user_name: { type: 'string', required: true },
      password: { type: 'string', required: true },
    };
    const { ctx, app } = this;
    const body = ctx.request.body;
    const err = app.validator.validate(validate, body);
    if (err) {
      ctx.status = 422;
      ctx.body = { msg: '请求格式正确，但是由于含有语义错误，无法响应!', code: 1, data: {} };
    } else {
      const { user_name, password } = body;
      const sql = { where: { user_name, password } };
      try {
        const result = await ctx.service.login.find(sql);
        if (result.length !== 0) {
          /**
           * Hmac类是一个实用工具，用于创建加密的 HMAC 摘要。 它可以通过以下两种方式之一使用
           *  · 作为可读写的流，其中写入数据以在可读侧生成计算后的 HMAC 摘要。
           *  · 使用 hmac.update() 和 hmac.digest() 方法生成计算后的 HMAC 摘要
           * crypto.createHmac() 方法用于创建 Hmac 实例。 不能使用 new 关键字直接地创建 Hmac 对象
           */
          // console.log(app.keys);

          // crypto.createCipheriv('aes-128-cbc', key, iv)
          //   .update(result[0].id + '', 'binary', 'base64');
          // // const hash = crypto.createHmac('sha256', 'xiafengkun')
          // //   .digest('hex');
          // console.log(decipher);
          // 放入cookies
          ctx.cookies.set('SESSION', result[0].id, { maxAge: 3600000, encrypt: false });
          ctx.body = { msg: '成功', code: 0, data: { userInfo: result[0] } };
        } else {
          ctx.body = { msg: '用户或密码不正确!', code: 1, data: {} };
        }
      } catch (msg) {
        console.log(msg);
        return { msg, code: 2, data: {} };
      }
    }

  }

  /**
   * @description 添加
   * @url /signUp
   * @method POST
   * @param user_name 用户名
   * @param password 密码
   * @param source_type 来源
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
    if (err) {
      ctx.status = 422;
      ctx.body = { msg: '请求格式正确，但是由于含有语义错误，无法响应!', code: 1, data: {} };
    } else {
      const result = await ctx.service.login.add(body);
      ctx.body = result;
    }
  }

  /**
   * @description 忘记密码
   * @url /passwordRest
   * @function POST
   * @param user_name 用户名
   * @param password 密码
   * @param source_type 来源
   */

  async passwordRest() {
    const { ctx } = this;
    const cookies = ctx.cookies.get('SESSION', { signed: false });
    ctx.body = { msg: '', data: { test: cookies }, code: 0 };
  }

}


module.exports = LoginController;
