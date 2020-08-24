// ==UserScript==
// @name         KaTex for Github
// @version      1.0
// @description  Render mathworks for github README.md
// @author       Philogag
// @updateURL    https://github.com/Philogag/Tampermonkey-KaTeX_For_Github
// @supportURL   https://github.com/Philogag/Tampermonkey-KaTeX_For_Github
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


