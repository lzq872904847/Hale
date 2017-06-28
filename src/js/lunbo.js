/**
 * Created by Administrator on 2017/6/24 0024.
 */
function lunbo(data){
    var lunScript = document.getElementById("lunScript");
    var lunbo = document.getElementById("lunbo");
    lunbo.style.margin = "auto";
    lunbo.style.position = "relative";
    lunbo.style.overflow = "hidden";
    var w = lunbo.offsetWidth;
    var h = lunbo.offsetHeight;
    var lunboDiv = document.createElement("div");
    lunbo.appendChild(lunboDiv);
    lunboDiv.style.width=w*data.length+"px";
    lunboDiv.style.height=h+"px";
    lunboDiv.style.position = "absolute";
    lunboDiv.style.left = 0;
    for(var i=0;i<data.length;i++){
        var img = new Image();
        img.src = data[i].src;
        img.style.width = w+"px";
        img.style.height = h+"px";
        lunboDiv.appendChild(img);
    }
    var s = w/2000;
    var sets = 0;
    var imgs = lunboDiv.getElementsByTagName("img");
    setInterval(() => {
        sets++;
        if(sets>=1000){
            lunboDiv.style.left = lunboDiv.offsetLeft-1+"px";
        }
        if(lunboDiv.offsetLeft<=-w){
            lunboDiv.appendChild(imgs[0]);
            lunboDiv.style.left = 0;
            sets=0;
        }
    },s);
    lunScript.remove();
}