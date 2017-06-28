/**
 * Created by Administrator on 2017/6/24 0024.
 */
define(["constants","writeLunShow","buyAndHuishou"],function(constants, writeLunShow){
    var divShow = document.getElementById("lunboShow");
    var divs = divShow.getElementsByClassName("lunNumDiv");
    var lunboCenter = document.getElementById("lunboCenter");

    (function(){
        var myHead = document.getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/huishou?callback=buyAndHuishou");
        myHead.appendChild(myScript);
        myScript.id="huishouScript";
    })();
    (function(){
        var myHead = document.getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/buy?callback=buyAndHuishou");
        myHead.appendChild(myScript);
        myScript.id="buyScript";
    })();
    for(var i=0;i<divs.length;i++){
        (function(s){
            divs[s].onmouseenter=function(){
                for(var j=0;j<divs.length;j++){
                    divs[j].style.backgroundColor = "rgba("+0+","+0+","+0+","+0+")";
                    var show = divs[j].getElementsByClassName("leftTriangle")[0];
                    show.style.visibility = "hidden";
                }
                var shows = divs[s].getElementsByClassName("leftTriangle")[0];
                shows.style.visibility = "visible";
                this.style.backgroundColor = "#185";
                lunboCenter.style.display = "block";
                var myHead = document.getElementsByTagName("head")[0];
                var myScript = document.createElement("script");
                myScript.setAttribute("src",constants.host+"/"+constants.shopPath+"/show_"+s+"?callback=writeLunShow");
                myHead.appendChild(myScript);
                myScript.id="lunShowScript";
            };
            lunboCenter.onmouseleave=function(){
                for(var j=0;j<divs.length;j++){
                    divs[j].style.backgroundColor = "rgba("+0+","+0+","+0+","+0+")";
                    var show = divs[j].getElementsByClassName("leftTriangle")[0];
                    show.style.visibility = "hidden";
                }
                lunboCenter.style.display = "none";
            }
        })(i)
    }
});