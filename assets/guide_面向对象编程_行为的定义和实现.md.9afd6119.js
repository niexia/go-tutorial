import{_ as e,c as a,o,a as t,b as r}from"./app.67c79e3a.js";const s='{"title":"行为的定义和实现","description":"","frontmatter":{},"headers":[{"level":2,"title":"Go 是否是面向对象的语言","slug":"go-是否是面向对象的语言"}],"relativePath":"guide/面向对象编程/行为的定义和实现.md","lastUpdated":1632210002796}',n={},i=[t("h1",{id:"行为的定义和实现",tabindex:"-1"},[r("行为的定义和实现 "),t("a",{class:"header-anchor",href:"#行为的定义和实现","aria-hidden":"true"},"#")],-1),t("h2",{id:"go-是否是面向对象的语言",tabindex:"-1"},[r("Go 是否是面向对象的语言 "),t("a",{class:"header-anchor",href:"#go-是否是面向对象的语言","aria-hidden":"true"},"#")],-1),t("blockquote",null,[t("p",null,[r("Yes and no. Although Go has types and methods and allows an object-oriented style of programming, there is no type hierarchy. The concept of “interface” in Go provides a different approach that we believe is easy to use and in some ways more general. There are also ways to embed types in other types to provide something analogous—but not identical—to subclassing. Moreover, methods in Go are more general than in C++ or Java: they can be defined for any sort of data, even built-in types such as plain, “unboxed” integers. They are not restricted to structs (classes). Also, the lack of a type hierarchy makes “objects” in Go feel much more lightweight than in languages such as C++ or Java."),t("br"),r(" 是,也不是.虽然Go语言可以通过定义类型和方法来实现面向对象的设计风格,但是Go是实际上并没有继承这一说法.在Go语言中,interface(接口)这个概念以另外一种角度展现了一种更加易用与通用的设计方法.在Go中,我们可以通过组合,也就是将某个类型放入另外的一个类型中来实现类似继承,让该类型提供有共性但不相同的功能.相比起C++和Java,Go提供了更加通用的定义函数的方法,我们可以指定函数的接受对象(receiver),它可以是任意的类型,包括内建类型,在这里没有任何的限制. 同样的,没有了类型继承,使得Go语言在面向对象编程的方面会显得更加轻量化")])],-1)];var h=e(n,[["render",function(e,t,r,s,n,h){return o(),a("div",null,i)}]]);export{s as __pageData,h as default};
