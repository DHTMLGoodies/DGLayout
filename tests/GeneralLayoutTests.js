/**
 * Created by alfmagne1 on 08/08/16.
 */
TestCase("GeneralLayoutTests", {


    loadPage:function(url){
        $.ajax({
            async : false,
            url : url,
            success:function(result){
                document.body.innerHTML = result;
                console.log("RESULT: " + result);
            }
        });
    },


    insertDOM:function(){

        /*:DOC element = <div data-layout="relative">
         <div data-layout="linearVertical" data-layout-rules="centerInParent:true;wrap-content:true" style="border:1px dashed #669900">

         <input type="text" placeholder="Username" class="textinput" id="username"><br>
         <input type="text" placeholder="Password" class="textinput" id="password"><br>
         <input type="button" value="Sign In" class="button">
         </div>

         <p data-layout-rules="alignParentBottom:true"><a href="#">Forgot username or password</a></p>
         </div>
         */
    },

    "test should find layout elements": function(){

        this.insertDOM();
        var el = $(this.element);


        // this.loadPage("http://localhost/layout/tests/testpages/general-layout-tests1.php");

        var layout = new DG.Layout();
        layout.parse(el);

        var layouts = layout.getLayouts();
        assertEquals(1, layouts.length);


        assertNotUndefined(this.element);
    }
});