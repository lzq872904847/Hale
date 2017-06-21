/**
 * Created by Administrator on 2017/6/19 0019.
 */
$(function(){
    var lis=$("#zimu li");
    var city=$(".city");
    $("#cutCity").on("click",function(){
        $("#navCity").show();
    });
    $("#navCity button").on("click",function(){
        $("#navCity").hide();
    });
    $("#zimu li").first().css("border-top","2px solid #C7C7C7").css("color","red")
        .css("border-left","2px solid #C7C7C7")
        .css("border-right","2px solid #C7C7C7")
        .css("border-bottom","none");
    city.eq(0).show();
    $("#zimu li").on("click",function(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.border="none";
            lis[i].style.borderBottom="1px solid #C7C7C7";
            lis[i].style.color="";
            lis[i].setAttribute("num",i);
            city.eq(i).get(0).setAttribute("num",i);
            city.eq(i).hide();
        }
        $(this).css("border-top","2px solid #C7C7C7").css("color","red")
            .css("border-left","2px solid #C7C7C7")
            .css("border-right","2px solid #C7C7C7")
            .css("border-bottom","none");
        var k=this.getAttribute("num");
        for(var i=0;i<city.length;i++){
            if(city.eq(i).get(0).getAttribute("num")==k){
                city.eq(i).show();
            }
        }
    });
});