/**
 * Created by alfmagne1 on 08/08/16.
 */
if (window.DG == undefined) {
    window.DG = {};
}

console.log(DG.LayoutBase);



DG.LayoutRelative = (function LayoutRelativeClass(_super){

    LayoutRelative.inherits(_super);

    var _defaults = {
        type:"relative"
    };


    function LayoutRelative(props){
        _super.apply(this, arguments);
        $.extend(this, props, _defaults);
    }

    LayoutRelative.prototype = {
        
    };

    return LayoutRelative;

}(DG.LayoutBase));

