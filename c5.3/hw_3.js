function useRequest(callback) {
    //берем из инпута цифру
    const n = document.querySelector('input').value;
    // console.log(n);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${n}`);

    xhr.onload = function () {
        if (n < 1 || n > 10) {
            console.log(`${n} число вне диапазона от 1 до 10`);
        } else {
            const result = JSON.parse(xhr.response);
            //console.log(result);
            callback(result);
        }
    }
    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}

// callback
const resNode = document.querySelector('.b_result');

function displayResult(apiData) {
    let card = '';
    apiData.forEach(item => {
        const c = `
        <div class="card">
            <img src="${item.download_url}" class="card-img" width="200" alt="картинка">
            <p>${item.author}</p>
        </div>
          `;
        card = card + c;
    });
    //console.log(card);
    resNode.innerHTML = card;
}

// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.b_btn');
// console.log(btnNode);

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    useRequest(displayResult);
})
