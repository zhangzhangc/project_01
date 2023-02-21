const showInfo = document.querySelector('#showInfo')


var url = './js/data.json';

const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            // let ul = document.createElement('ul');
            // showInfo.appendChild(ul);
            data['content'].forEach(item => {
                let p = document.createElement('p');
                p.innerText = item.name + item.desc;
                showInfo.appendChild(p);
            });
            // console.log(data['content'][0]);

        }
    }

}






// console.log('666');
// console.log(showInfo);


