let btn = document.querySelector('.btn');
let container = document.querySelector('.container');
let url = 'https://jsonplaceholder.typicode.com/users';

btn.addEventListener('click', function() {
    if (container.children.length < 2) {
        initTable();
    }
})

function initTable() {
    fetch(url)
        .then(response => response.json())
        .then(object => initRenderTable(object))
        .catch(error => initShowError(error));
}

function initShowError(error) {
    container.insertAdjacentHTML('beforeend', renderError(error));
}

function renderError(error) {
    return `<p class="error">Ошибка, запрос не отработан (${error.message})</p>`;
}

function initRenderTable(object) {
    initRenderTableHeader();
    initRenderTableBody(object);
}

function initRenderTableHeader() {
    container.insertAdjacentHTML('beforeend', renderTableHeader());
}

function initRenderTableBody(object) {
    for (let item of object) {
        document.querySelector('.table').insertAdjacentHTML('beforeend', renderTableBody(item));
    }
}

function renderTableHeader() {
    return `<table class="table">
                <tr class="table-header">
                    <th rowspan="2">id</th>
                    <th rowspan="2">name</th>
                    <th rowspan="2">username</th>
                    <th rowspan="2">email</th>
                    <th rowspan="2">address</th>
                    <th rowspan="2">phone</th>
                    <th rowspan="2">website</th>
                    <th colspan="3">company</th>
                </tr>
                <tr class="table-header">
                    <th>name</th>
                    <th>catchPhrase</th>
                    <th>bs</th>
                </tr> 
            </table>`
}

function renderTableBody(item) {
    return `<tr>
                <td class="id-cell">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.address.zipcode}, ${item.address.city}, ${item.address.street}, ${item.address.suite} (lat: ${item.address.geo.lat}/lng: ${item.address.geo.lng})</td>
                <td>${item.phone}</td>
                <td>${item.website}</td>
                <td>${item.company.name}</td>
                <td>${item.company.catchPhrase}</td>
                <td>${item.company.bs}</td>
            </tr>`
}