/**
 * Created by Administrator on 2017/6/24 0024.
 */
define(["constants","lunbo"],function(constants,lunbo){
    (function(){
        var myHead = document.getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/lunbo?callback=lunbo");
        myHead.appendChild(myScript);
        myScript.id="lunScript"
    })();
});