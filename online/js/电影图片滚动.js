
    let speed1 = 20; //速度
    let stop1 = 1000; //停止时间
    let demo1 = document.querySelector('#demo1');
    let table = demo1.querySelector('table');
    let div1 = document.querySelector('#demo')

    let tr = table.querySelector('tr');//获取tr元素

    // console.log(tr);

    console.log(div1.scrollLeft);

    let columns = tr.querySelectorAll('td').length;//获取td个数
    // console.log(columns);

    let width = tr.querySelectorAll('td')[0].offsetWidth;//取得第一个td的宽度
    // console.log(width);

    tr.innerHTML += tr.innerHTML;//获取所有tr
    let timer = false;//setTime的时间标示
    let start = function () { //移动方法
        div1.scrollLeft++;//移动滚动条
        //移动到底的时候恢复为零
        if (div1.scrollLeft === columns * width) {
            div1.scrollLeft = 0;
        }
        // 每次滚动
        // if (div1.scrollLeft % width === 0) {
        //     timer = setTimeout(start, stop1);
        // } else {
        timer = setTimeout(start, speed1);
        // }
    }
    timer = setTimeout(start, stop1);
    tr.onmouseover = function () {
        clearTimeout(timer);
    }
    tr.onmouseout = start;














