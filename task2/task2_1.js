var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('id');

function renderData(data) {
    const container = $('.container');
	let divCharacter = $(document.createElement('div'));

    let name = $(document.createElement('p'));
    name.text('Name: ' + data.name);

    divCharacter.append(name);
    container.append(divCharacter);
};

function ParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
};


function LoadCountry() {
    $.ajax({
        url: 'https://www.breakingbadapi.com/api/characters/' + `${param}`,
        method: 'GET',
        success: ParseData
    });
}

$(document).ready(function() {
    LoadCountry();
});