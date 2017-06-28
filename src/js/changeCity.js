/**
 * Created by Administrator on 2017/6/23 0023.
 */
function cityChange(){
    var zimu = document.getElementById("zimu");
    var lis = zimu.getElementsByTagName("li");
    var city = document.getElementsByClassName("city");
    var cutCity = document.getElementById("cutCity");
    var nav =document.getElementsByTagName("nav")[0];
    var navCity = document.getElementById("navCity");
    var btn = navCity.getElementsByTagName("button")[0];
    var urls = document.getElementsByClassName("urls")[0];
    var hotCity = document.getElementById("hotCity");
    var hotLI = hotCity.getElementsByTagName("li");

    if(document.getElementById("province")){
        var province = document.getElementById("province");
        var sp1 = province.getElementsByTagName("span")[0];
        var county = document.getElementById("county");
        var sp2 = county.getElementsByTagName("span")[0];
        province.onclick=function(){
            province.appendChild(navCity);
            navCity.style.display="block";
        };
        county.onclick=function(){
            console.log(this);
        }
    }

    for(var a=0;a<hotLI.length;a++){
        (function(b){
            hotLI[b].onclick=function(){
                urls.textContent=hotLI[b].textContent;
                navCity.style.display="none";
            }
        })(a);
    }
    cutCity.onclick=function(){
        nav.appendChild(navCity);
        navCity.style.display="block";
    };
    btn.onclick = function(){
        navCity.style.display="none";
    };
    lis[0].style.borderTop="2px solid #C7C7C7";
    lis[0].style.borderLeft="2px solid #C7C7C7";
    lis[0].style.borderRight="2px solid #C7C7C7";
    lis[0].style.borderBottom="none";
    lis[0].style.color="red";
    city[0].style.display="block";
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("num",i);
        city[i].setAttribute("num",i);
        (function (s){
            lis[s].onclick=function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].style.border="none";
                    lis[j].style.borderBottom="1px solid #C7C7C7";
                    lis[j].style.color="";
                    city[j].style.display="none";
                }
                lis[s].style.borderTop="2px solid #C7C7C7";
                lis[s].style.borderLeft="2px solid #C7C7C7";
                lis[s].style.borderRight="2px solid #C7C7C7";
                lis[s].style.borderBottom="none";
                lis[s].style.color="red";
                city[s].style.display="block";
                writeCity(s);
            }
        })(i);
    }
    function writeCity(k){
        for(var m=0;m<city.length;m++){
            if(city[m].getAttribute("num")==k){
                var lii=city[m].getElementsByTagName("li");
                for(var n=0;n<lii.length;n++){
                    (function (l){
                        lii[l].onclick=function(e){
                            e.stopPropagation();
                            if(sp1){
                                sp1.textContent=lii[l].textContent;
                            }
                            urls.textContent=lii[l].textContent;
                            navCity.style.display="none";
                        }
                    })(n);
                }
            }
        }
    }
    writeCity(0);
}