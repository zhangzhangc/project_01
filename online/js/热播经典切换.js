
var nameArr = new Array(" 终结者5", "飓风营救", "我是传奇", "一线声机", "罗马假日", "史密斯夫妇", "午夜邂逅");
var dnumArr = new Array("阿诺德.施瓦辛格", "连姆.尼森", "威尔.史密斯", "杰森.斯坦森", "格里高利.派克", "布拉德.皮特", "克里斯.埃文斯");
let table1 = document.querySelector('.tab1')
let td1 = document.createElement('td')
let tab1 = document.querySelector('#tab1')

table1.appendChild(td1)
nameArr.forEach(item => {


    let li = document.createElement('li')


    td1.appendChild(li);
    li.innerHTML = item;
    li.style.listStyle = 'decimal'
    li.style.marginTop = '15px';
    li.style.borderBottomStyle = 'dashed'
    li.style.borderWidth = '1px'
    li.style.paddingBottom = '10px'

});

let td2 = document.createElement('td');
table1.appendChild(td2)

dnumArr.forEach((item, index) => {
    // trs[index].appendChild(td);
    // td.innerHTML = item;
    // td.style.textAlign = 'center'
    let li = document.createElement('li');
    td2.appendChild(li);
    li.innerHTML = item;
    li.style.listStyle = 'none';
    li.style.textAlign = 'right'
    li.style.marginTop = '15px';
    li.style.borderBottomStyle = 'dashed'
    li.style.borderWidth = '1px'
    li.style.paddingBottom = '10px'
})


window.addEventListener('load', function () {
    btn1.style.background = 'rgb(115, 201, 255)'
    a_1.style.color = 'white';
    tab1.style.display = 'block'


})



var nameArr = new Array("机械师2：复活", "变形金刚", "暮光之城", "怦然心动", "电话情缘", "超凡蜘蛛侠", "雷神");
var dnumArr = new Array("杰森.斯坦森", "希亚.拉博夫", "克里斯汀.斯图尔特", "玛德琳.卡罗尔", "杰西.麦特卡尔菲", "安德鲁.加菲尔德",
    "克里斯.海姆斯沃斯");



let table2 = document.querySelector('.tab2')
let td3 = document.createElement('td')
let tab2 = document.querySelector('#tab2')

table2.appendChild(td3)
nameArr.forEach(item => {

    let li = document.createElement('li')

    td3.appendChild(li);
    li.innerHTML = item;
    li.style.listStyle = 'decimal'
    li.style.marginTop = '15px';
    li.style.borderBottomStyle = 'dashed'
    li.style.borderWidth = '1px'
    li.style.paddingBottom = '10px'

});

let td4 = document.createElement('td');
table2.appendChild(td4)

dnumArr.forEach((item, index) => {

    let li = document.createElement('li');
    td4.appendChild(li);
    li.innerHTML = item;
    li.style.listStyle = 'none';
    li.style.textAlign = 'right'
    li.style.marginTop = '15px';
    li.style.borderBottomStyle = 'dashed'
    li.style.borderWidth = '1px'
    li.style.paddingBottom = '10px'
})
//点击按钮产生的变换
let tabs = document.querySelector('.tabs');
let btn1 = tabs.getElementsByTagName('li')[0];
let a_1 = btn1.querySelector('a');
btn1.addEventListener('mouseover', function () {
    btn1.style.cursor = 'pointer';

})
btn1.addEventListener('click', function () {
    btn1.style.backgroundColor = 'rgb(115, 201, 255)'
    btn2.style.backgroundColor = ' white'
    a_2.style.color = 'black';

    a_1.style.color = 'white';
    tab1.style.display = 'block'
    tab2.style.display = 'none'
})

let btn2 = tabs.getElementsByTagName('li')[1];
let a_2 = btn2.querySelector('a');
btn2.addEventListener('mouseover', function () {
    btn2.style.cursor = 'pointer';

})


btn2.addEventListener('click', function () {
    btn2.style.backgroundColor = 'rgb(115, 201, 255)'
    btn1.style.backgroundColor = ' white'
    a_2.style.color = 'white';
    a_1.style.color = 'black';
    tab2.style.display = 'block';
    tab1.style.display = 'none'
})

