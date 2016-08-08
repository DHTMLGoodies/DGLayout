<?php
header('Access-Control-Allow-Origin: http://127.0.0.1:9876');
?>
<div data-layout="relative">

    <div data-layout="linearVertical" data-layout-rules="centerInParent:true;wrap-content:true" style="border:1px dashed #669900">

        <input type="text" placeholder="Username" class="textinput" id="username"><br>
        <input type="text" placeholder="Password" class="textinput" id="password"><br>
        <input type="button" value="Sign In" class="button">
    </div>

    <p data-layout-rules="alignParentBottom:true"><a href="#">Forgot username or password</a></p>
</div>