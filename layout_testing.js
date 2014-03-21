if (Meteor.isClient) {
    Meteor.startup(function () {
        // code to run on server at startup
        var layout = UI.render(Layout.extend({template: 'MyLayout'}));
        UI.DomRange.insert(layout.dom, document.body);

        // set the layout template
        layout.template('AnotherLayoutTemplate');

        // set the layout data context
        layout.data({title: 'Some data context'});

        // render a template into the main region {{> yield}}
        layout.setRegion('SomeTemplateName');

        // render a template into a named region
        layout.setRegion('footer', 'SomeFooterTemplate');
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
