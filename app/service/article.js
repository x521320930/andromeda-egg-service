'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {

  async add(params) {
    const result = await this.ctx.db.insert('articles', params);
    return result;
  }

}

module.exports = ArticleService;
