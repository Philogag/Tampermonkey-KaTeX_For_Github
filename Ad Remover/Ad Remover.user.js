// ==UserScript==
// @name         搜索广告块去除
// @version      0.2
// @description  去除 Baidu、Bing 等搜索结果区的广告
// @author       Philogag
// @match        *://*.bing.com/search?*
// @match        *://*.baidu.com/s?*
// @match        *://*.google.com/search?*
// @grant        none
// ==/UserScript==

function log(msg){
    console.log("Ad remover: " + msg);
}

var cnt = 0;

function removeObj(obj, level){
    for (var i = 0; i < level; i++){
        obj = obj.parentNode;
    }
    obj.parentNode.removeChild(obj);
    log(obj.nodeName + " " + obj.className);
    cnt++;
}

function removeByClass(class_name, level=0){
    var adblocks = document.getElementsByClassName(class_name);
    for (var i = 0; i < adblocks.length; i++){
        removeObj(adblocks[i], level);
        cnt ++;
    }
}
function removeById(id, level=0){
    var adblock = document.getElementById(id);
    removeObj(adblock, level);
}

(function removeAllAdBlock() {

    /////////////////////////// Bing  ///////////////////////////
    removeByClass("b_ad");
    removeByClass("b_ad b_adBottom");

    removeByClass("sb_add",1);


    /////////////////////////// Baidu ///////////////////////////
    removeByClass("ziaBJG");
    removeById("content_right");

    removeByClass("ec_tuiguang_outer", 2); // 推广


    /////////////////////////// Google ///////////////////////////
    removeByClass("tadsb");

    log("Remove " + cnt + " blocks in total.")
})();