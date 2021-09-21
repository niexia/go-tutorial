module.exports = {
  title: 'Golang tutorial',
  description: 'New programming tutorial',
  base: '/go-tutorial/',
  themeConfig: {
    repo: 'niexia/go-tutorial',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [{
        text: '开始',
        link: '/guide/',
        activeMatch: '^/guide/'
      },
      {
        text: '调度系统',
        link: '/scheduling/',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/scheduling/': getSchedulingSidebar(),
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        {
          text: 'Golang 起源',
          link: '/guide/'
        }, {
          text: 'Golang 简介',
          link: '/guide/Go简介/编写第一个Go程序'
        },
      ]
    },
    {
      text: '基本程序结构',
      children: [{
        text: '变量、常量以及与其他语言的差异',
        link: '/guide/基本程序结构/变量、常量以及与其他语言的差异'
      }, {
        text: '数据类型',
        link: '/guide/基本程序结构/数据类型'
      }, {
        text: '运算符',
        link: '/guide/基本程序结构/运算符'
      }, {
        text: '条件和循环',
        link: '/guide/基本程序结构/条件和循环'
      }, ]
    },
    {
      text: '常见集合',
      children: [{
        text: '数组和切片',
        link: '/guide/常见集合/数组和切片'
      }, {
        text: 'map',
        link: '/guide/常见集合/map'
      }, {
        text: 'map和工厂模式',
        link: '/guide/常见集合/map和工厂模式'
      }]
    },
    {
      text: '函数',
      children: [{
        text: '一等公民',
        link: '/guide/函数/函数一等公民'
      }, {
        text: '函数',
        link: '/guide/函数/可变参数和defer'
      }]
    }
  ]
}

function getSchedulingSidebar() {
  return [
    {
      text: 'Scheduling System',
      children: [{
          text: 'Design',
          link: '/scheduling/design'
        },
      ]
    }
  ]
}