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
// @require      https://cdn.bootcdn.net/ajax/libs/webfont/1.6.28/webfontloader.js

// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

function loadResource(){
    WebFont.load({
        custom: {
            families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
                       'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
                       'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
                       'KaTeX_Size4', 'KaTeX_Typewriter'],
        },
    });
    var css_str = GM_getResourceText('KaTeX_Css');
    css_str = css_str.replace(/url\(fonts/g, "url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts") // fix font
    GM_addStyle(css_str);
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


