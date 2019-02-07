define([
    'uiComponent' //'Magento_Ui/js/lib/core/collection'
], function(Component) {

    return Component.extend({
        defaults: {
            title: "Hello this is content populated with KO!"
        },
        initialize: function () {
            this._super();
        }
    });
});