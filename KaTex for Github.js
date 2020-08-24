// ==UserScript==
// @name         KaTex for Github
// @version      0.9
// @description  render mathworks for github readme.md
// @author       Philogag
// @match        http://*.github.com/*
// @match        https://*.github.com/*

// @resource     KaTeX_Css      https://cdn.bootcdn.net/ajax/libs/KaTeX/0.11.1/katex.min.css

// @require      https://cdn.bootcdn.net/ajax/libs/KaTeX/0.11.1/katex.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/KaTeX/0.11.1/contrib/auto-render.min.js

// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

function loadResource(){
    GM_addStyle(GM_getResourceText('KaTeX_Css'))
   // GM_addStyle('.katex .mathdefault {font-style: normal;}');
}

function fixNewLineOnBeginBlocks(){
    // github解析时会将`\\`转义为`\`, 导致begin块无法解析
    var ReadmeBlock = document.getElementById('readme')
    ReadmeBlock.innerHTML = ReadmeBlock.innerHTML.replace(/\\\n/g, "\\\\\n"); // 暴力替换 `\\\n` 为 `\\\\\n`
}

(function() {
    loadResource();
    fixNewLineOnBeginBlocks();
    renderMathInElement(document.getElementById('readme'),{
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"]
    });
})();


