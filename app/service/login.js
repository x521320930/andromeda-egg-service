'use strict';
const moment = require('moment');

const Service = require('egg').Service;

class ArticleService extends Service {

  async add(params) {

    params.user_icon_url = '';
    params.creation_time = moment().valueOf();
    params.update_time = moment().valueOf();

    try {
      const u_get = await this.find({ where: { user_name: params.user_name } });
      if (u_get.length !== 0) {
        return { msg: '用户名已存在', code: 1, data: {} };
      }
      const u_insert = await this.app.mysql.insert('users', params);
      const { affectedRows, message } = u_insert;
      if (affectedRows === 1) {
        return { msg: '成功', code: 0, data: {} };
      }
      return { msg: message, code: 1, data: {} };
    } catch (msg) {
      return { msg: msg.message, code: 2, data: {} };
    }

  }

  async find(params) {
    try {
      const u_get = await this.app.mysql.select('users', params);
      return u_get;
    } catch (msg) {
      return { msg: msg.message, code: 2, data: {} };
    }
  }
}

module.exports = ArticleService;
