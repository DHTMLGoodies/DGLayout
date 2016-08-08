/**
 * Created by alfmagne1 on 08/08/16.
 */
DG.Layout = (function LayoutBaseClass(){

    var _defaults = {
        type : undefined,
        width:undefined,
        height:undefined,
        parentLayout:undefined,
        el:undefined
    };



    DG.Layout  = function(config){
        $.extend(this, config, _defaults);
        this.resizeFns = [];
        this.el = config.el;
        this.parentLayout = config.parentLayout;

        var pos = this.el.css("position");
        if(pos == "static"){
            this.el.css("position", "relative");
        }

        this.measure();
        this.parseChildren();
    };

    DG.Layout.prototype = {

        measure:function(){
            this.width = this.el.width();
            this.height = this.el.height();

            this.el.css("width", this.width);
            this.el.css("height", this.height);
        },

        parseChildren:function(){
            var children = this.el.find('[data-layout-rules]');
            console.log(children.length);
            $.each(children, function(index, child){
                this.parseChild($(child));
            }.bind(this));
        },

        parseChild:function(child){
            
            child.removeAttr("data-layout-rules");
        },

        positionAbsolute:function(el){
            el.css("position", "absolute");
        },

        resize:function(){
            for(var i=0;i<this.resizeFns.length;i++){
                this.resizeFns[i].call(this);
            }
        },

        elements:function(){},

        sayHi:function(){
            console.log("Hi");
        },

        getType:function(){
            return this.type;
        },
        
        getWidth:function(){
            return this.width;
        },
        getHeight:function(){
            return this.height;
        },

        getParent:function(){
            return this.parentLayout;
        }
    };

    return DG.Layout;
}());



