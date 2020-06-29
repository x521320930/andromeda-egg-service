'use strict';

const Controller = require('egg').Controller;
// const fs = require('fs');
// const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');

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
   * @param article_title 标题
   * @param article_type 文章类型 1 宝宝成长 2 宝宝趣事 3 生活点滴 4 育儿生活 5 育儿心得 6 宝宝相册
   * @param article_top 热门文章 默认 无 0  1 热门 2 轮播图
   * @param article_desc 描述
   * @param user_id 用户gid
   * @param article_url 图片
   */

  async add() {

    const { ctx } = this;
    
    const validate = {
      article_type: { type: 'number', required: true },
      user_id: { type: 'number', required: true },
      source_type: { type: 'number', required: true },
      article_title: { type: 'string', required: true }
    };
    const data = ctx.request.body;

    const stream = await ctx.getFileStream();

    const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
    //生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }
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
