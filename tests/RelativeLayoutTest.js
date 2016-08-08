/**
 * Created by alfmagne1 on 08/08/16.
 */
TestCase("Relative", {

    setup:function(){

    },


    insertDOM:function(){
        /*:DOC element = <body data-layout="relative">

         <div data-layout-rules="centerInParent:true;wrap-content:true" style="border:1px dashed #669900">

         <input type="text" placeholder="Username" class="textinput" id="username"><br>
         <input type="text" placeholder="Password" class="textinput" id="password"><br>
         <input type="button" value="Sign In" class="button">
         </div>

         <p data-layout-rules="alignParentBottom:true"><a href="#">Forgot username or password</a></p>
         </body>
         */
    },

    "test should find relatives": function(){

        this.insertDOM();
        console.log(this.element);
        assertNotUndefined(this.element);
    }

});