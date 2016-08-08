/**
 * Created by alfmagne1 on 08/08/16.
 */
DG.LayoutBase = (function LayoutBaseClass(){

    var _defaults = {
        type : undefined
    };

    DG.LayoutBase  = function(props){
        $.extend(this, props, _defaults);
    };

    DG.LayoutBase.prototype = {
        getElements:function(){},
        getType:function(){
            return this.type;
        }
    };

    return DG.LayoutBase;
}());



