# Tampermonkey | KaTeX_For_Github
A Tampermonkey script witch can render mathworks in the README.md


$$
\LaTeX
$$


## Functions

+ [x] 基本渲染
    + [x] 行内公式 `$\LaTeX$`  
    + [x] 行间公式 `$$\LaTeX$$`

+ [ ] Bugs
    - [x] ![](https://img.shields.io/badge/Fixed-green) 换行`\\`被转义成`\`，导致`\begin`块无法渲染 
    - [x] ![](https://img.shields.io/badge/Fixed-green) 无法加载字体 
    - [ ] 大分数中间横丢失
