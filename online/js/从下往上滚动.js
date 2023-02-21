
let speed = 20; //速度
let stop = 1000; //停止时间
let div = document.querySelector('.scroll');
let ul = div.querySelector('.list');//获取ul元素
// console.log(div.scrollTop);
let rows = ul.querySelectorAll('li').length;//获取li个数
let height = ul.querySelectorAll('li')[0].offsetHeight;//取得第一个li的高度
// console.log(height);
ul.innerHTML += ul.innerHTML;//获取所有li
let timeID = false;//setTime的时间标示
let play = function () { //移动方法
    div.scrollTop++;//移动滚动条
    //移动到底的时候恢复为零
    if (div.scrollTop === (rows * height + 30)) {
        div.scrollTop = 30;
    }
    //每次滚动
    if (div.scrollTop % height === 0) {
        timeID = setTimeout(play, stop);
    } else {
        timeID = setTimeout(play, speed);
    }
}
timeID = setTimeout(play, stop);
ul.onmouseover = function () {
    clearTimeout(timeID);
}
ul.onmouseout = play;












