/**
 * Created by tx-0020 on 15/11/19.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.route('/', {
    name: 'postsList'
});