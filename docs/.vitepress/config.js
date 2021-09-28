module.exports = {
    title: '学习笔记',
    description: '学习笔记',
    // 主题配置
    themeConfig: {
        lastUpdated: '上次更新',
        //   头部导航
        nav: [
            {text: 'github', link: 'https://github.com/liangduoqiang'}
        ],
        //   侧边导航
        sidebar: [
            {
                text: 'Vue',
                children: [
                    {
                        text: 'Vue2',
                        children: [
                            {text: 'lifecycle', link: './Vue/Vue2/lifecycle'},
                        ]
                    },
                    {
                        text: 'Vue3',
                        children: [
                            {text: 'lifecycle', link: './Vue/Vue3/lifecycle'},
                        ]
                    }
                ]
            }
        ]
    },
    base: '/learn/'
}
