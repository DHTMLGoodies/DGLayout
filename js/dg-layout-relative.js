/**
 * Created by alfmagne1 on 08/08/16.
 */
if (window.DG == undefined) {
    window.DG = {};
}

DG.LayoutRelative = (function LayoutRelativeClass(_super){

    LayoutRelative.inherits(_super);

    var _defaults = {
        type:"relative"
    };

    function LayoutRelative(config){
        _super.apply(this, arguments);
        $.extend(this, config, _defaults);
    }

    return LayoutRelative;

}(DG.Layout));





