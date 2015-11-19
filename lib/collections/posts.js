/**
 * Created by tx-0020 on 15/11/19.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // 只允许登录用户添加帖子
        return !! userId;
    }
});