/**
 * Created by Administrator on 2017/6/27 0027.
 */
define(["constants","createShop","shopHandler"],function(constants,createShop,shopHandler){
    var num = 1;
    if(document.getElementsByClassName("shopShowC")){
        document.getElementsByClassName("shopShowC").onclick = function(){
            getshop(2);
        }
    }
    function getshop(num){
        var myHead = document.getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/shop_"+num+"?callback=createShop=shopHandler");
        myHead.appendChild(myScript);
        myScript.id="shopShop"
    }
    getshop(num);
});