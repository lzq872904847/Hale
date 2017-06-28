/**
 * Created by Administrator on 2017/6/22 0022.
 */
require.config({
    baseUrl: 'js/lib',
    paths: {
        myutil:'mytools',
        //createShop:"../../js/shopDom.min",
        createCity:"../cityDom.min",
        changeCity:"../changeCity.min",
        topAndBottom:"../topAndBottom.min",
        lunbo:"../lunbo.min",
        index:"../index.min",
        writeLunShow:"../writeLunShow.min",
        buyAndHuishou:"../buyAndHuishou.min",
        createShop:"../createShop.min",
        shopHandler:"../shopHandler.min"
    },
    shim: {
        'myutil':{
            exports:'createXHR'
        },
        "createCity":{
            exports:"createCity"
        },
        "changeCity":{
            exports:"cityChange"
        },
        "topAndBottom":{
            exports:"topAndBottom"
        },
        "lunbo":{
            exports:"lunbo"
        },
        "writeLunShow":{
            exports:"writeLunShow"
        },
        "buyAndHuishou":{
            exports:"buyAndHuishou"
        },
        "createShop":{
            exports:"createShop"
        },
        "shopHandler":{
            exports:"shopHandler"
        }
    }
});
define(["getlunbo","getCity","topAndBottom","getshop","index"],function(lunbo,gc,tb,gs,index){
    var num = 1;
});