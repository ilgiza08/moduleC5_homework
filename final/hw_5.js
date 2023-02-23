const resultNode = document.querySelector('.result');
const btnNode = document.querySelector(".btn_resp");

function myRequest() {
    const n1 = document.querySelector("#inp1").value;
    const n2 = document.querySelector("#inp2").value;
    //console.log(n1, n2)

    if (notInDiapason(n1) && notInDiapason(n2)) {
        text = 'Номер страницы и лимит вне диапазона от 1 до 10'
        //console.log(text);
        resultNode.innerHTML = `<p>${text}</p>`;
    } else if (notInDiapason(n1)) {
        text = 'Номер страницы вне диапазона от 1 до 10';
        // console.log(text);
        resultNode.innerHTML = `<p>${text}</p>`;
    } else if (notInDiapason(n2)) {
        text = 'Лимит вне диапазона от 1 до 10';
        // console.log(text);
        resultNode.innerHTML = `<p>${text}</p>`;
    } else {
        fetch(`https://picsum.photos/v2/list?page=${n1}&limit=${n2}`)
            .then((response) => {
                console.log('response', response);
                const result = response.json();
                console.log('result', result);
                return result;
            })
            .then((data) => {
                //console.log(data);
                let card = '';
                data.forEach(item => {
                    const c = `
                    <div class="card">
                    <img src="${item.download_url}" class="card-img" width="200" alt="картинка">
                    <p>${item.author}</p>
                    </div>
                    `;
                    card = card + c;
                    //console.log(card)
                });
                resultNode.innerHTML = card;
                // Записываем результат запроса в localStorage
                localStorage.setItem('myJSON', JSON.stringify(data));
            })
            .catch(() => { console.log('error') });
    }
};

function notInDiapason(num) {
    if (isNaN(num) || num < 1 || num > 10) {
        return true;
    }
};

function chekLocalStorage(){
    const myJSON = localStorage.getItem('myJSON');
    let card = '';
    if (myJSON) {
        //console.log('localStorage JSON', JSON.parse(myJSON));
        data = JSON.parse(myJSON);
        console.log('data from ls', data)
        data.forEach(item => {
            const c = `
            <div class="card">
            <img src="${item.download_url}" class="card-img" width="200" alt="картинка">
            <p>${item.author}</p>
            </div>
            `;
            card = card + c;
        });
        
    } else {card = '<p></p>'}

    resultNode.innerHTML = card;
}

//localStorage.removeItem('myJSON');

chekLocalStorage();

btnNode.addEventListener('click', () => {
  myRequest();
})