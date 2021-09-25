import{_ as n,c as s,o as a,d as p}from"./app.22f9f780.js";const t='{"title":"接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"接口和依赖","slug":"接口和依赖"},{"level":3,"title":"Duck Type 式接口定义","slug":"duck-type-式接口定义"}],"relativePath":"guide/面向对象编程/接口.md","lastUpdated":1632597388468}',o={},e=[p('<h1 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-hidden="true">#</a></h1><h2 id="接口和依赖" tabindex="-1">接口和依赖 <a class="header-anchor" href="#接口和依赖" aria-hidden="true">#</a></h2><p>看一段 java 中的代码</p><div class="language-java"><pre><code><span class="token comment">// 定义接口</span>\n<span class="token comment">// Programmer.java</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Programmer</span> <span class="token punctuation">{</span>\n  <span class="token class-name">String</span> <span class="token class-name">WriteCodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 实现接口</span>\n<span class="token comment">// GoProgrammer.java</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GoProgrammer</span> <span class="token keyword">implements</span> <span class="token class-name">Programmer</span> <span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token class-name">WriteCodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;fmt.Println(\\&quot;hello world\\&quot;)&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 调用者创建了一个接口的实例</span>\n<span class="token comment">// Task.java</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Task</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Programmer</span> prog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoProgrammer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> codes <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">prog<span class="token punctuation">.</span></span>WriteCodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>codes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>会容易产生循环依赖？</p><h3 id="duck-type-式接口定义" tabindex="-1">Duck Type 式接口定义 <a class="header-anchor" href="#duck-type-式接口定义" aria-hidden="true">#</a></h3><div class="language-go"><pre><code><span class="token comment">// 接口定义</span>\n<span class="token keyword">type</span> Programmer <span class="token keyword">interface</span> <span class="token punctuation">{</span>\n   <span class="token function">WriteHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Code\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 接口实现</span>\n<span class="token keyword">type</span> GoProgrammer <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>GoProgrammer<span class="token punctuation">)</span> <span class="token function">WriteHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Code <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;fmt.Println(\\&quot;hello world\\&quot;)&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>go 里，不会显示的将实现和定义进行关联。</p>',8)];var c=n(o,[["render",function(n,p,t,o,c,l){return a(),s("div",null,e)}]]);export{t as __pageData,c as default};
