/**
 * Created by tx-0020 on 15/11/19.
 */
Meteor.publish('posts', function(){
    return Posts.find();
});