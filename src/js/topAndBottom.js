/**
 * Created by Administrator on 2017/6/24 0024.
 */
function topAndBottom(){
    var navHelp = document.getElementById("navHelp");
    var div = navHelp.getElementsByTagName("div")[0];
    var is = navHelp.getElementsByTagName("i")[0];
    navHelp.onmouseover = function(){
        div.style.display = "block";
        this.style.border = "1px solid #C7C7C7";
        this.style.backgroundColor = "#FFF";
        is.setAttribute("class","topTriangle");
    };
    navHelp.onmouseleave = function(){
        div.style.display = "none";
        navHelp.style.border = "1px solid #F6F6F6";
        navHelp.style.borderTop = "none";
        navHelp.style.borderBottom = "1px solid #C7C7C7";
        navHelp.style.backgroundColor = "#F6F6F6";
        is.setAttribute("class","bottomTriangle");
    }
}
topAndBottom();