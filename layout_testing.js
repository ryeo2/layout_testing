Router.configure({
  layoutTemplate: 'MyLayout'
});

Router.map(function () {
  this.route('home', {path: '/', template: 'SomeTemplateName'});
});

if (Meteor.isClient) {
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
