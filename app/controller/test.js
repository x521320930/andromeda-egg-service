'use strict';
const Controller = require('egg').Controller;
const sourceMap = require("source-map");

class Test extends Controller {
  async de() {
    const { ctx, app } = this;
    console.log(ctx, app);
    ctx.body = { msg: '成功', code: 0, data: { } };
  }
}

module.exports = Test;
