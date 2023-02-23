// найдем кнопку на странице
const btnNode = document.querySelector('.btn_check');
const resultNode = document.querySelector('.result');
//console.log(btnNode);

function useRequest() {
    const n1 = document.querySelector('.inp1').value;
    const n2 = document.querySelector('.inp2').value;
    //console.log(n1, n2);

    fetch(`https://picsum.photos/${n1}/${n2}`)
        .then((response) => {
            console.log("response", response);
            console.log(response.url);
            let card = `
                <div><img class="ilg_img" src="${response.url}">
                </div>`;
            resultNode.innerHTML = card;
        })
        .catch(() => { console.log('error') });
}

// вешаем обработчик
btnNode.addEventListener('click', function () {
    useRequest();
});

