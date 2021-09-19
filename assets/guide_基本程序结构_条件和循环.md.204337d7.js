import{o as n,c as s,d as a}from"./app.74d4a0b3.js";const t='{"title":"条件和循环","description":"","frontmatter":{},"headers":[{"level":2,"title":"循环","slug":"循环"},{"level":2,"title":"条件语句","slug":"条件语句"},{"level":2,"title":"switch 语句","slug":"switch-语句"}],"relativePath":"guide/基本程序结构/条件和循环.md","lastUpdated":1632067650461}',p={},o=[a('<h1 id="条件和循环" tabindex="-1">条件和循环 <a class="header-anchor" href="#条件和循环" aria-hidden="true">#</a></h1><h2 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-hidden="true">#</a></h2><p>与其他语言的差异</p><p>Go 语言只支持循环关键字 <code>for</code></p><div class="language-go"><pre><code><span class="token comment">// while 循环</span>\n<span class="token comment">// while (n &lt; 5)</span>\nn <span class="token operator">:=</span> <span class="token number">0</span>\n<span class="token keyword">for</span> n <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>\n  n<span class="token operator">++</span>\n  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 无限循环</span>\n<span class="token comment">// while (true)</span>\nn <span class="token operator">:=</span> <span class="token number">0</span>\n<span class="token keyword">for</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-hidden="true">#</a></h2><p>与其他主要编程语言的差异</p><ol><li>condition 表达式结果必须为布尔值</li><li>支持变量赋值</li></ol><div class="language-go"><pre><code><span class="token keyword">if</span> <span class="token keyword">var</span> declaration<span class="token punctuation">;</span> condition <span class="token punctuation">{</span>\n  <span class="token comment">// code to be executed if condition is true</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="switch-语句" tabindex="-1">switch 语句 <a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a></h2><div class="language-go"><pre><code><span class="token keyword">switch</span> os <span class="token operator">:=</span> runtime<span class="token punctuation">.</span>GOOS<span class="token punctuation">;</span> os <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token string">&quot;darwin&quot;</span><span class="token punctuation">:</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;OS X&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">case</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">:</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Linux&quot;</span><span class="token punctuation">)</span>\n  <span class="token keyword">default</span><span class="token punctuation">:</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol><li>条件表达式不限制为常量或者整数</li><li>单个 <code>case</code> 中，可以出现多个结果选项，使用逗号分割：<code>case 0,2: ...</code></li><li>与 C 语言等规则相反，Go 语言不需要用 <code>break</code> 来明确退出一个 <code>case</code></li><li>可以不设定 switch 之后的条件表达式，在此种情况下，整个 <code>switch</code> 结果与多个 <code>if...else...</code>的逻辑作用等同</li></ol><div class="language-go"><pre><code><span class="token comment">// case 匹配多个选项结果</span>\n<span class="token keyword">func</span> <span class="token function">TestSwitchMultiCase</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n\t<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">switch</span> i <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Even&quot;</span><span class="token punctuation">)</span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Odd&quot;</span><span class="token punctuation">)</span>\n\t\t\t<span class="token keyword">default</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;it is not 0-3&quot;</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 不设定 switch 之后条件表达式</span>\n<span class="token keyword">func</span> <span class="token function">TestSwitchCaseCondition</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n\t<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">switch</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">case</span> i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Even&quot;</span><span class="token punctuation">)</span>\n\t\t\t<span class="token keyword">case</span> i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Odd&quot;</span><span class="token punctuation">)</span>\n\t\t\t<span class="token keyword">default</span><span class="token punctuation">:</span>\n\t\t\t\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Unknow&quot;</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',13)];p.render=function(a,t,p,e,c,u){return n(),s("div",null,o)};export{t as __pageData,p as default};
