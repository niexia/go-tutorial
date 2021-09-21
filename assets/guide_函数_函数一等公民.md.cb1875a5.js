import{_ as n,c as s,o as a,d as t}from"./app.ab67f476.js";const p='{"title":"函数：一等公民","description":"","frontmatter":{},"headers":[{"level":2,"title":"函数式编程","slug":"函数式编程"}],"relativePath":"guide/函数/函数一等公民.md","lastUpdated":1632207195116}',o={},c=[t('<h1 id="函数：一等公民" tabindex="-1">函数：一等公民 <a class="header-anchor" href="#函数：一等公民" aria-hidden="true">#</a></h1><p>与其他主要编程语言的差异</p><ol><li>可以有多个返回值</li><li>所有参数<strong>都是值传递</strong>：slice，map，channel 会有传引用的错觉</li><li>函数可以作为变量的值</li><li>函数可以作为参数和返回值</li></ol><div class="language-go"><pre><code><span class="token keyword">func</span> <span class="token function">returnMultiValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">TestFn</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// 一般第二个参数用于表示错误，这里先忽略</span>\n\ta<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">returnMultiValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="函数式编程" tabindex="-1">函数式编程 <a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a></h2><div class="language-go"><pre><code><span class="token keyword">func</span> <span class="token function">timeSpent</span><span class="token punctuation">(</span>inner <span class="token keyword">func</span><span class="token punctuation">(</span>op <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>op <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>\n\t\tstart <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\tret <span class="token operator">:=</span> <span class="token function">inner</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;time spent: &quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Seconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t\t<span class="token keyword">return</span> ret\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">slowFun</span><span class="token punctuation">(</span>op <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>\n\ttime<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token keyword">return</span> op\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">TestTemeFn</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tts <span class="token operator">:=</span> <span class="token function">timeSpent</span><span class="token punctuation">(</span>slowFun<span class="token punctuation">)</span>\n\tt<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token function">ts</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',6)];var e=n(o,[["render",function(n,t,p,o,e,u){return a(),s("div",null,c)}]]);export{p as __pageData,e as default};
