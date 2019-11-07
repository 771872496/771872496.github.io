const ap = new APlayer({
    fixed: true,
    autoplay: false, //自动播放
    container: document.getElementById('aplayer'), //播放器容器元素
    // mini: false, //迷你模式
    // autoplay: false, //自动播放
    // theme: '#FADFA3', //主题色
    // loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    // order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    // preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    // volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    // mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    // listFolded: false, //列表默认折叠
    // listMaxHeight: 90, //列表最大高度
    // lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
    {
        name: "PDD洪荒之力",
        artist: '徐梦圆',
        url: 'http://www.ytmp3.cn/down/58262.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=1318201088&s=100&t=1565429952',
    },
    {
        name: '9420',
        artist: '麦小兜',
        url: 'http://www.ytmp3.cn/down/50171.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=374994725&s=100&t=1565429905',
    },
    {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=2724221906&s=100&t=1565429903',
    },
    {
        name: 'Only My Railgun',
        artist: 'ぐるたみん',
        url: 'http://www.ytmp3.cn/down/50596.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=1362250122&s=100&t=1565429793',
    },
    {
        name: 'Love Runs Out',
        artist: 'OneRepublic',
        url: 'http://www.ytmp3.cn/down/48564.mp3',
        cover: 'http://img.ytmp3.cn/image/44.jpg',
    },
    {
        name: 'I Want My Tears Back',
        artist: 'NightWish',
        url: 'http://www.ytmp3.cn/down/52740.mp3',
        cover: 'http://img.ytmp3.cn/image/90.jpg',
    },
    {
        name: 'Bye Bye Beautiful',
        artist: 'NightWish',
        url: 'http://www.ytmp3.cn/down/50204.mp3',
        cover: 'http://img.ytmp3.cn/image/71.jpg',
    },
    ]
});
