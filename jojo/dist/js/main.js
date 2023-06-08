// jojo version 1.0
// 2172934425@qq.com

function showLoading() {
    let eleDialog = new Dialog({
        width: 600
    }).loading();
    // eleDialog.remove();
    return eleDialog;
}

function initSearch() {
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener('click', function () {

        new Dialog({
            title: '搜索',
            content: `<form id="editForm">
            <span class="ui-input ui-input-search">
                <input class="search-input" placeholder="请输入关键字" type="search">
                <a href="javascript:" class="ui-icon-search">搜索</a>
            </span>
        </form>`,
            buttons: [{
                value: '提交',
                form: 'editForm'
            }],
            onShow: function () {
                this.querySelector('form').addEventListener('submit', event => {
                    event.preventDefault();
                    let eleOutput = document.querySelector(".search-input");
                    let pageUrl = window.location.origin + "/video/search?q=" + eleOutput.value;
                    window.location = pageUrl;
                    this.remove();
                });
            }
        });
    });
}

function Saerch() {
    this.dialog.remove();
}


function initSidebar() {
    var open = document.querySelector(".nav-list-btn");
    var sidebar = document.querySelector(".sidebar");
    var mask = document.querySelector(".mask");
    var sidebar_close_btn = document.querySelector(".sidebar-close-btn");
    open.onclick = function () {
        sidebar.classList.add("active");
        mask.style.display = "block";
        document.body.style = "overflow-y: hidden;";
        scrollTo(0, 0);
    }

    mask.onclick = function () {
        sidebar.classList.remove("active");
        mask.style.display = "none";
        document.body.style = "overflow-y: auto;"
    }
    sidebar_close_btn.onclick = function () {
        sidebar.classList.remove("active");
        mask.style.display = "none";
        document.body.style = "overflow-y: auto;"
    }
}

function activeItem() {
    let sider_items = document.querySelectorAll(".sidebar .li-item-list");
    sider_items.forEach(event => {
        event.addEventListener('click', (e) => {
            let active = event.classList.contains("active");
            sider_items.forEach(event => {
                event.classList.remove('active');
                let icon = event.querySelector(".down-list .a-right i");
                if (icon != null) {
                    icon.classList = "bx bx-chevron-down"
                }
            });
            if (!active) {
                event.classList.add('active');
                let icon = event.querySelector(".down-list .a-right i");
                if (icon != null) {
                    icon.classList = "bx bx-chevron-up"
                }
            }
        })
    })
}


window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".jojo-tools").style.display = "block";
    } else {
        document.querySelector(".jojo-tools").style.display = "none";
    }
}

function loadTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        document.body.classList.add("dark");
        document.querySelector(".jojo-tools .bx-sun").style.display = "block"
        document.querySelector(".jojo-tools .bx-moon").style.display = "none"
    } else {
        document.body.classList.remove("dark");
        document.querySelector(".jojo-tools .bx-sun").style.display = "none"
        document.querySelector(".jojo-tools .bx-moon").style.display = "block"
    }
}

function initJojoTools() {
    let top = document.querySelector(".top-tool");
    top.addEventListener('click', () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    })
    let dark = document.querySelector(".dark-tool");
    dark.addEventListener('click', () => {
        if (document.body.classList.contains("dark")) {
            document.querySelector(".jojo-tools .bx-sun").style.display = "none"
            document.querySelector(".jojo-tools .bx-moon").style.display = "block"
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "white");
        } else {
            document.querySelector(".jojo-tools .bx-sun").style.display = "block"
            document.querySelector(".jojo-tools .bx-moon").style.display = "none"
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
}


function initTitle() {
    document.querySelector("h1.title").addEventListener('click', () => {
        window.location = window.location.origin;
    })
}


initTitle();
initSearch();
initSidebar();
activeItem();
loadTheme();
initJojoTools();