function inserir() {
    let nome = document.querySelector('#inputNome').value;
    let li = document.createElement('li')
    li.innerText = nome
    //criar button
    let btn = document.createElement('button')
    btn.innerText = 'X'
    // criar evento de click no js
    btn.addEventListener('click', function () {
        // pega o elemento pai do button
        let li = btn.parentNode;
        //remove o elemento
        document.querySelector('#listaNomes').removeChild(li)
    })

    li.appendChild(btn)
    //inserir li na lista
    document.getElementById('listaNomes').appendChild(li)
    //apagar input
    document.querySelector('#inputNome').value = ''


}
function limpar() {
    console.log('limpar')
}