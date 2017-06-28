/**
 * Created by Administrator on 2017/6/22 0022.
 */
function createCity(data){
    var cityScript = document.getElementById("cityScript");
    var hot = data.result.hotcity;
    var citylist = data.result.citylist;
    var hotCity = document.getElementById("hotCity");
    var allCity = document.getElementById("allCity");
    var uls=document.createElement("ul");
    uls.id="zimu";
    allCity.appendChild(uls);
    for(var zi in citylist){
        var lis = document.createElement("li");
        uls.appendChild(lis);
        lis.textContent=zi;
        var ul = document.createElement("ul");
        ul.className="city";
        allCity.appendChild(ul);
        for(var i=0;i<citylist[zi].length;i++){
            var li = document.createElement("li");
            li.textContent=citylist[zi][i].name;
            ul.appendChild(li);
        }
    }
    var hotUl=document.createElement("ul");
    hotCity.appendChild(hotUl);
    for(var j=0;j<hot.length;j++) {
        var hotLi = document.createElement("li");
        hotLi.textContent = hot[j].name;
        hotUl.appendChild(hotLi);
    }
    cityScript.remove();
}