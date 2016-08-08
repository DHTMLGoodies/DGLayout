/**
 * Created by alfmagne1 on 08/08/16.
 */
if (window.DG == undefined) {
    window.DG = {};
}

DG.LayoutHandler = function () {
};

if (Function.prototype.inherits == undefined) {
    Function.prototype.inherits = function (parent) {
        this.prototype = Object.create(parent.prototype);
    };
}

$.extend(DG.LayoutHandler.prototype, {

    dom:undefined,

    index : 0,
    uniqueId:function(){
        return "dg-layout" + (++this.index);
    },

    parse: function (dom) {
        this.dom = $(dom);

        this.parseTree(this.dom);
    },

    parseTree:function(dom){

        var layouts = dom.find('[data-layout]');

        $.each(layouts, function (index, el) {
            el = $(el);
            var type =  el.attr("data-layout");
            var id = $(el).attr("id");
            if(id == undefined){
                el.attr("id", this.uniqueId());
            }

            if(!this.hasSubLayouts(el)){
                this.createLayout(el, type);
            }

        }.bind(this));

        if(dom.find('[data-layout]').length > 0){
            this.parseTree();
        }
    },

    hasSubLayouts:function(el){
        return el.find(['data-layout']).length > 0;
    },

    createLayout:function(el, type){
        console.log("Creating layout of type " + type);
        
        switch(type){
            case "relative":
                var layout = new DG.LayoutRelative({el: el});
                console.log(layout instanceof DG.Layout);
                console.log(layout.getWidth());
                break;
        }

        el.removeAttr("data-layout");
    },

    addWindowResizeEvent:function(){


    }
});

