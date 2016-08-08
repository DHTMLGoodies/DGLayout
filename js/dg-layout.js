/**
 * Created by alfmagne1 on 08/08/16.
 */
if (window.DG == undefined) {
    window.DG = {};
}

DG.Layout = function () {
};

if (Function.prototype.inherits == undefined) {
    Function.prototype.inherits = function (parent) {
        this.prototype = Object.create(parent.prototype);
    };
}

$.extend(DG.Layout.prototype, {
    layouts: [],

    parse: function (dom) {
        var layouts = dom.find('[data-layout]');

        $.each(layouts, function (index, el) {
            console.log($(el).attr("data-layout"));
        });
    }


});

