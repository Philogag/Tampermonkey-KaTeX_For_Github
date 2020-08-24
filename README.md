# Tampermonkey | KaTeX_For_Github
A Tampermonkey script witch can render mathworks in the README.md

## 安装

本脚本基于 [Tampermonkey](https://www.tampermonkey.net/) 浏览器插件

当你已经装好了 Tampermonkey，点击下面的按钮安装此脚本    
![点此安装](https://img.shields.io/badge/点此安装-green)

> 如果你已经装好了脚本  
> 刷新此页面后你将在下面看到漂亮的 LaTeX Logo  
> $$
\LaTeX
$$


## Functions

+ [x] 基本渲染
    + [x] 行内公式 `$\LaTeX$`  
    + [x] 行间公式 `$$\LaTeX$$`
    + [ ] Preview Changes Page

+ [ ] Bugs
    - [x] ![](https://img.shields.io/badge/Fixed-green) 换行`\\`被转义成`\`，导致`\begin`块无法渲染 
    - [x] ![](https://img.shields.io/badge/Fixed-green) 无法加载字体 
    - [ ] 大分数中间横丢失
