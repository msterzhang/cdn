// jojo version 1.0
// 2172934425@qq.com
class JojoPlyr {
    constructor(plyrId, config) {
        this.plyrId = plyrId;
        this.config = config;
        this.keyId = config.keyId;
        this.iconUrl = config.iconUrl;
        this.poster = config.poster;
        this.title = config.title;
        this.urls = getData(config.urls);
        this.itemSpeed = config.itemSpeed;
        this.errNum = config.errNum;
        this.urlType = config.urlType;
        this.SpeedOk = config.SpeedOk;
        this.fullscreen = false;
        this.plyr = document.querySelector(plyrId);
        this.touchStartX = 0
        this.touchSpeedX = 0
        this.initPlyr();
    }

    // 更新选集面板宽度
    updatHeigth() {
        let plyrUi = document.querySelector(".plyr--full-ui");
        let height = plyrUi.offsetHeight;
        plyrUi.querySelector(".plyr-sidebar-list").style = `max-height:${height - 100}px`;
    }

    // 获取播放进度时间
    getCurrentTime() {
        let id = this.parserUrl().split("?")[0];
        let currentTime = 0;
        let plyr_timesData = localStorage.getItem("plyr_times");
        if (plyr_timesData == "undefined") {
            localStorage.removeItem("plyr_times")
        }
        if (plyr_timesData != undefined) {
            let plyr_times = JSON.parse(plyr_timesData)
            plyr_times.times.forEach(item => {
                if (item.id == id) {
                    currentTime = item.time;
                }
            });
        }
        return currentTime;
    }

    // 保存播放进度时间
    setCurrentTime() {
        let id = this.parserUrl().split("?")[0];
        let plyr_timesData = localStorage.getItem("plyr_times");
        if (plyr_timesData == "undefined") {
            localStorage.removeItem("plyr_times");
        }
        if (plyr_timesData == undefined) {
            var plyrtimes = {
                'times': [],
                'state': true
            };
            plyrtimes.times.push({ "id": id, "time": this.plyr.currentTime });
            localStorage.setItem("plyr_times", JSON.stringify(plyrtimes));
        } else {
            let get = false;
            let plyr_times = JSON.parse(plyr_timesData);
            plyr_times.times.forEach((item, i) => {
                if (item.id == id) {
                    get = true;
                    plyr_times.times[i] = { "id": id, "time": this.plyr.currentTime };
                }
            });
            if (!get) {
                plyr_times.times.push({ "id": id, "time": this.plyr.currentTime });
            }
            localStorage.setItem("plyr_times", JSON.stringify(plyr_times));
        }
    }

    // 保存播放进度
    setSpeed() {
        let plyr_speedsData = localStorage.getItem("plyr_speeds");
        if (plyr_speedsData == "undefined") {
            localStorage.removeItem("plyr_speeds");
        }
        if (plyr_speedsData == undefined) {
            let plyrspeeds = {
                'speeds': [],
                'state': true
            };
            plyrspeeds.speeds.push({ "id": this.keyId, "speed": this.itemSpeed });
            localStorage.setItem("plyr_speeds", JSON.stringify(plyrspeeds));
        } else {
            let get = false;
            let plyr_speeds = JSON.parse(plyr_speedsData);
            plyr_speeds.speeds.forEach((item, i) => {
                if (item.id == this.keyId) {
                    get = true;
                    plyr_speeds.speeds[i] = { "id": this.keyId, "speed": this.itemSpeed };
                }
            });
            if (!get) {
                plyr_speeds.speeds.push({ "id": this.keyId, "speed": this.itemSpeed });
            }
            localStorage.setItem("plyr_speeds", JSON.stringify(plyr_speeds));
        }
    }

    // 获取播放进度
    getSpeed() {
        let plyr_speedsData = localStorage.getItem("plyr_speeds");
        if (plyr_speedsData == "undefined") {
            localStorage.removeItem("plyr_speeds");
        }
        if (plyr_speedsData != undefined) {
            let plyr_speeds = JSON.parse(plyr_speedsData);
            plyr_speeds.speeds.forEach(item => {
                if (item.id == this.keyId) {
                    this.itemSpeed = item.speed;
                }
            });
        }
        if (this.itemSpeed >= this.urls.split("\n").length) {
            this.itemSpeed = this.urls.split("\n").length - 1;
        }
        return this.itemSpeed;
    }

    // 解析播放链接
    parserUrl() {
        let urlList = this.urls.split("\n");
        if (urlList.length > this.itemSpeed) {
            let urlText = urlList[this.itemSpeed].split("$");
            if (urlText.length == 2) {
                this.setSpeed();
                let url = urlText[1] + "?pid=" + getPid();
                return url;
            } else {
                let url = urlList[this.itemSpeed] + "?pid=" + getPid();
                return url;
            }
        }
        return ""
    }

    // 检测是否为m3u8文件
    chunkM3u8() {
        if (this.parserUrl().indexOf("m3u8") !== -1) {
            if (Hls.isSupported()) {
                var hlsConfig = {
                    xhrSetup: function (xhr, url) {
                        if (url.indexOf('m3u8') === -1 || url !== this.parserUrl()) {
                            var pidParam = 'pid=' + getPid();
                            url = url + (url.indexOf('?') === -1 ? '?' : '&') + pidParam;
                        }
                        xhr.open(xhr.method, url);
                    },
                    manifestLoadingMaxRetry: 3,
                    manifestLoadingTimeOut: 30000
                };
                var hls = new Hls(hlsConfig);
                hls.loadSource(this.parserUrl());
                hls.attachMedia(this.plyr);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    // console.log('加载Hls成功');
                });
                hls.on(Hls.Events.ERROR, () => {
                    console.log('加载Hls失败');
                });
            }
        }
    }

    // 初始化
    plyrLoad() {
        this.plyr.src = this.parserUrl();
        this.plyr.load();
        this.plyr.currentTime = this.getCurrentTime();
        this.plyr.play().then(() => {
        }).catch(err => {
        }).finally(() => {
        })
        this.chunkM3u8();
    }

    // 换集
    switchUrl(i) {
        this.itemSpeed = i;
        this.plyr.src = this.parserUrl();
        this.plyr.load();
        this.plyr.currentTime = this.getCurrentTime();
        this.plyr.play().then(() => {
        }).catch(err => {
            this.plyr.play();
        }).finally(() => {
        })
        this.chunkM3u8();
        this.updateListUi();
    }

    // 下一集
    nextUrl() {
        this.itemSpeed++;
        this.plyr.src = this.parserUrl();
        this.plyr.load();
        this.plyr.currentTime = this.getCurrentTime();
        this.plyr.play().then(() => {
        }).catch(err => {
            this.plyr.play();
        }).finally(() => {
        })
        this.chunkM3u8();
        this.updateListUi();
    }

    // 生成选集列表
    initListUiData() {
        let urlList = this.urls.split("\n");
        let itemList = [];
        for (let i = 0; i < urlList.length; i++) {
            let url = urlList[i].split("$")[1];
            let item = `<li><div class="list-item" onclick="jojoPlyr.switchUrl(${i})" data-item="${i}" data-url="${url}">第${(i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)}集</div></li>`;
            if (i == this.itemSpeed) {
                item = `<li><div class="list-item active" onclick="jojoPlyr.switchUrl(${i})" data-item="${i} data-url="${url}"">第${(i + 1) < 10 ? ("0" + (i + 1)) : (i + 1)}集</div></li>`;
            }
            itemList.push(item);
        }
        return itemList.toString().replaceAll(",", "");
    }

    updatePlyrTabList() {
        let plyrList = document.querySelectorAll(".tabs-plyr-list .list-item");
        plyrList.forEach((e, index) => {
            e.classList.remove('active');
            if (index == this.itemSpeed) {
                e.classList.add('active');
            }
        })
    }

    updatePlyrList() {
        let plyrList = document.querySelectorAll(".plyr-sidebar-list.jojo-plyr-list .list-item");
        plyrList.forEach((e, index) => {
            e.classList.remove('active');
            if (index == this.itemSpeed) {
                e.classList.add('active');
            }
        })
        this.updatePlyrTabList();
    }

    // 更新选集菜单
    updateListUi() {
        let plyrUi = document.querySelector(".plyr--full-ui");
        plyrUi.querySelector(".plyr-list").classList.remove('active');
        let data = this.initListUiData();
        plyrUi.querySelector(".plyr--full-ui .plyr-sidebar-list").innerHTML = data;
        this.updateTitle();
        this.updatePlyrList();
    }

    // 设置标题
    setTitle() {
        let plyrUi = document.querySelector(".plyr--full-ui");
        const titleE = document.createElement("div");
        titleE.className = "plyr-back-title";
        titleE.innerHTML = this.urlType == "tv" ? `第${(this.itemSpeed) < 9 ? ("0" + (this.itemSpeed + 1)) : (this.itemSpeed + 1)}集` : this.title;
        plyrUi.querySelector(".plyr_back_btn").appendChild(titleE);
    }

    // 更新标题
    updateTitle() {
        let plyrUi = document.querySelector(".plyr--full-ui");
        plyrUi.querySelector(".plyr_back_btn .plyr-back-title").innerHTML = this.urlType == "tv" ? `第${(this.itemSpeed) < 9 ? ("0" + (this.itemSpeed + 1)) : (this.itemSpeed + 1)}集` : this.title;
    }


    // 初始化自定义Ui
    initUi(player) {
        let closeIcon = `<svg t="1684215882889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2371" width="24" height="24"><path d="M801.645714 170.666667l51.833905 51.590095L565.150476 511.951238l288.353524 289.670095-51.833905 51.614477-288.109714-289.450667L225.426286 853.23581 173.592381 801.621333l288.329143-289.670095L173.592381 222.256762 225.426286 170.666667l288.109714 289.426285L801.645714 170.666667z" p-id="2372" fill="#ffffff"></path></svg>`;
        let nextIcon = `<svg t="1684145500392" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M927.803661 3.406845h-191.916935a31.986156 31.986156 0 0 0-31.986156 31.79424v386.872556L119.449527 10.539758 108.286359 2.639178A31.858211 31.858211 0 0 0 64.17745 32.034455v960.320361a31.890198 31.890198 0 0 0 44.108909 29.363292l11.131182-7.836609L703.90057 602.31563v386.872557a31.986156 31.986156 0 0 0 31.986156 31.794239h191.916935a31.986156 31.986156 0 0 0 31.986156-31.794239V35.201085a31.986156 31.986156 0 0 0-31.986156-31.79424z" p-id="2375" fill="#ffffff"></path></svg>`;
        let listIcon = `<svg t="1685588862552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1596" width="200" height="200"><path d="M294.4 93.866667c17.066667-17.066667 17.066667-42.666667 0-59.733334-17.066667-17.066667-42.666667-17.066667-59.733333 0L119.466667 140.8 72.533333 89.6c-17.066667-17.066667-42.666667-17.066667-59.733333 0s-17.066667 42.666667 0 59.733333l76.8 81.066667c17.066667 17.066667 42.666667 17.066667 59.733333 0l145.066667-136.533333zM384 85.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h597.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667H384zM384 469.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h597.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667H384zM341.333333 896c0-25.6 17.066667-42.666667 42.666667-42.666667h597.333333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667H384c-25.6 0-42.666667-17.066667-42.666667-42.666667zM132.266667 388.266667c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128 128-55.466667 128-128-55.466667-128-128-128z m0 170.666666c-25.6 0-42.666667-17.066667-42.666667-42.666666s17.066667-42.666667 42.666667-42.666667 42.666667 17.066667 42.666666 42.666667-17.066667 42.666667-42.666666 42.666666zM132.266667 768c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128 128-55.466667 128-128-55.466667-128-128-128z m0 170.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667 42.666667 17.066667 42.666666 42.666667-17.066667 42.666667-42.666666 42.666667z" fill="#ffffff" p-id="1597"></path></svg>`;
        let backIcon = `<svg t="1684224113388" class="icon back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2449" width="200" height="200"><path d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z" fill="#ffffff" p-id="2450"></path></svg>`;
        let plyrUi = document.querySelector(".plyr--full-ui");
        let lists = `<div class="plyr-sidebar">
            <div class="plyr-sidebar-header">
                <div class="plyr-sidebar-title">
                    选集
                </div>
                <div class="plyr-sidebar-icon">
                   ${closeIcon}
                </div>
            </div>
           
            <ul class="plyr-sidebar-list">
                ${this.initListUiData()}
            </ul>
        </div>`;
        const para = document.createElement("div");
        para.className = "plyr-list";
        para.innerHTML = lists;
        plyrUi.appendChild(para);

        const btnList = document.createElement("button");
        btnList.className = "plyr__controls__item plyr__control plyr_list_btn";
        btnList.innerHTML = listIcon;
        const nextBtn = document.createElement("button");
        nextBtn.className = "plyr__controls__item plyr__control plyr_next_btn";
        nextBtn.innerHTML = nextIcon;
        const backtBtn = document.createElement("button");
        backtBtn.className = "plyr__controls__item plyr__control plyr_back_btn";
        backtBtn.innerHTML = backIcon;
        plyrUi.appendChild(backtBtn);
        if (this.urlType == "tv") {
            plyrUi.appendChild(btnList);
            plyrUi.querySelector(".plyr_list_btn").addEventListener("click", () => {
                this.updatHeigth();
                plyrUi.querySelector(".plyr-list").classList.toggle('active');
            })
            plyrUi.querySelector(".plyr__controls").insertBefore(nextBtn, plyrUi.querySelector(".plyr__progress__container"));
            plyrUi.querySelector(".plyr__controls .plyr_next_btn").addEventListener("click", () => {
                this.nextUrl();
            })
        }
        plyrUi.querySelector(".plyr_back_btn").addEventListener("click", () => {
            if (this.fullscreen) {
                player.fullscreen.exit();
            } else {
                window.history.back();
            }
        })
        plyrUi.querySelector(".plyr-sidebar-icon").addEventListener("click", () => {
            plyrUi.querySelector(".plyr-list").classList.toggle('active');
        })
        this.setTitle();
    }

    formatTime(duration) {
        // 计算小时、分钟和秒数
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor(duration % 60);
        // 格式化为两位数的字符串
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        if (hours <= 0) {
            formattedTime = `${formattedMinutes}:${formattedSeconds}`;
        }
        return formattedTime;
    }

    updateCurrentTime(currentTime) {
        let plyrUi = document.querySelector(".plyr--full-ui");
        plyrUi.querySelector(".plyr__time").innerHTML = currentTime;
    }

    handleSwipe() {
        const minSwipeDistance = 10;
        const swipeDistanceData = this.touchSpeed - this.touchStartX;
        const swipeDistance = Math.abs(swipeDistanceData);
        if (swipeDistance >= minSwipeDistance) {
            const playerWidth = this.plyr.offsetWidth;
            const swipeRatio = swipeDistance / playerWidth;
            const rewinding = swipeDistanceData > 0;
            let speedTime = rewinding ? this.plyr.duration - this.plyr.currentTime : this.plyr.currentTime;
            const playbackTimeOffset = 0.1 * Math.abs(swipeRatio * (speedTime));
            this.plyr.currentTime += rewinding ? playbackTimeOffset : -playbackTimeOffset;
            let currentTime = this.formatTime(this.plyr.currentTime)
            this.updateCurrentTime(currentTime)
        }
    }



    // 初始化播放器
    initPlyr() {
        if (!this.SpeedOk) {
            this.getSpeed();
        }
        this.plyrLoad();
        const player = new Plyr(this.plyrId, {
            title: '',
            url: this.parserUrl(),
            controls: ['plyr-rewind', 'play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'download', 'settings', 'pip', 'airplay', 'fullscreen'],
            disableContextMenu: true,
            resetOnEnd: false,
            displayDuration: true,
            invertTime: false,
            volume: 0.7,
            autoplay: true,
            download: false,
            poster: this.poster,
            urls: {
                download: this.parserUrl(),
            },
            iconUrl: this.iconUrl,
            keyboard: {
                focused: true,
                global: true
            },
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "速度",
                normal: "默认",
                quality: "画质",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
        });
        this.initUi(player);
        this.updatePlyrList();
        player.on('error', () => {
            if (this.errNum > 0) {
                this.plyrLoad();
                this.errNum--;
                console.log("重新加载")
            }
        });
        player.on('timeupdate', () => {
            // console.log(player.currentTime)
            this.setCurrentTime();
        });
        player.on('loadedmetadata', () => {
            // initUi();
        });

        player.on('enterfullscreen', () => {
            this.fullscreen = true;
            this.updatHeigth();
        });
        player.on('exitfullscreen', () => {
            this.fullscreen = false;
            this.updatHeigth();
        });
        player.on('touchstart', (event) => {
            this.touchStartX = event.touches[0].clientX;
        });
        player.on('mousedown', (event) => {
            this.touchStartX = event.clientX;
        });
        player.on('touchmove', (e) => {
            let ev = e || window.event;
            let touch = ev.targetTouches[0];
            this.touchSpeed = touch.clientX;
            if (this.touchSpeed < 0) {
                this.touchSpeed = 0;
            }
            this.handleSwipe();
        });
    }
}
