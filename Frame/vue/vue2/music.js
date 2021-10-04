src = "https://unpkg.com/axios/dist/axios.min.js"
src = " https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
axios.defaults.baseURL = 'https://autumnfish.cn';
var app = new Vue({
    el: "player",
    data: {
        // 搜索关键字
        query: '',
        musicList: []


    },
    methods: {
        searchMusic() {
            if (this.query == 0) {
                return;
            }
            axios.get('/search?keywords=' + this.query).then(response => {
                // 保存内容
                this.musicList = response.data.result.songs;

            })

        },
        playMusic(musicId) {
            axios.get('/song/url?id=' + musicId).then(response => {
                this.musicUrl = response.data.data[0].url;
            })

        }
    }
})