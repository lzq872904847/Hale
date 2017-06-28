/**
 * Created by Administrator on 2017/6/27 0027.
 */
function createShop(data){
    var arr = data.shop_data;
    console.log(arr);
    var shopShow = document.getElementById("shopShow");
    var shopShowC = document.createElement("div");
    shopShowC.className="cityShowC";
    shopShow.appendChild(shopShowC);
    shopShowC.style.width = "100px";
    shopShowC.style.height = "100px";
    shopShowC.style.backgroundColor = "red";
    shopShowC.onclick = function(){
       getShop(2);
    }
}
