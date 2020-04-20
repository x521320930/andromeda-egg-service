'use strict';
// const fs = require('fs');
// const path = require('path');
const Controller = require('egg').Controller;

class ArticleController extends Controller {

  /**
   * @description 基础查询文章列表
   * @url /article/query
   * @function POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async query() {

    const { ctx } = this;

    ctx.body = 'data';
  }


  /**
   * @description 添加
   * @url /article/add
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   */

  async add() {

    const { ctx } = this;
    // const file = ctx.request.files[0];
    const data = ctx.request.body;
    console.log(typeof data.user_id);
    // console.log(file, data);
    ctx.body = { data: {}, code: 0, msg: '' };
  }


  /**
   * @description 更新
   * @url /article/update
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async update() {

    const { ctx } = this;

    ctx.body = 'data';
  }

  /**
   * @description 删除
   * @url /article/destroy
   * @method POST
   * @param articeleType 文章类型 0 默认查出所有 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param articeleTop 热门文章 默认 无 0  1 热门 2 轮播图
   * @param page  当前页
   * @param pageSize 列
   */

  async destroy() {
    const { ctx } = this;

    ctx.body = 'data';
  }


}


module.exports = ArticleController;
