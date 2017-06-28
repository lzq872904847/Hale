/**
 * Created by Administrator on 2017/6/22 0022.
 */
define(["constants","createCity","changeCity"],function(constants,createCity,changeCity){
    (function(){
        var myHead = document.getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/citys?callback=createCity=cityChange");
        myHead.appendChild(myScript);
        myScript.id="cityScript";
    })();
});