/**
 * Created by Administrator on 2017/6/25 0025.
 */
function buyAndHuishou(data){
    var showDiv = document.getElementsByClassName("showDiv");
    var arr = data.result;
    if(arr[0].price){
        for(var i=0;i<arr.length;i++){
            var div = document.createElement("div");
            showDiv[1].appendChild(div);
            var img = new Image();
            img.src = arr[i].thum_img.min;
            img.style.width="119px";
            img.style.height="240px";
            div.appendChild(img);
            var p =document.createElement("p");
            p.textContent = arr[i].model_name;
            div.appendChild(p);
            var p1 =document.createElement("p");
            p1.textContent = "￥"+ arr[i].price;
            div.appendChild(p1);
        }
    }else {
        for(var j=0;j<arr.length;j++){
            var divs = document.createElement("div");
            showDiv[0].appendChild(divs);
            var imgs = new Image();
            imgs.src = arr[j].img_url;
            imgs.style.width="119px";
            imgs.style.height="240px";
            divs.appendChild(imgs);
            var ps =document.createElement("p");
            ps.textContent = arr[j].model_alis;
            divs.appendChild(ps);
        }
    }
}