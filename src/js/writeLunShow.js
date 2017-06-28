/**
 * Created by Administrator on 2017/6/25 0025.
 */
function writeLunShow(data){
    var lunShowScript = document.getElementById("lunShowScript");
    var lunboCenter = document.getElementById("lunboCenter");
    var divs = lunboCenter.getElementsByTagName("div");
    var len = divs.length;
    function remo(){
        if(len>0){
            divs[0].remove();
            len--;
            remo();
        }
    }
    remo();
    var objArr = data.result;

    if(objArr[0]){
        if(objArr[0].list){
            console.log(objArr,objArr[0].list);
        }else {
            console.log(objArr,objArr[0].name);
        }
    }else if(objArr.hot){
        console.log(objArr,objArr.hot);
    }else {
        for(var si in objArr){
            var div = document.createElement("div");
            lunboCenter.appendChild(div);
            div.textContent = objArr[si];
            div.style.width = "110px";
            div.style.height = "40px";
            div.style.margin = "10px";
            div.style.border = "1px solid #185";
            div.style.textAlign = "center";
            div.style.lineHeight = "40px";
        }
        if(lunboCenter.offsetHeight<340){
            lunboCenter.style.height = "340px";
        }
    }
    lunShowScript.remove();
}