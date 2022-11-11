const indexLink = "https://www.breakingbadapi.com/api/characters";

function renderData(data) {
    const container = $('.container');
    for(let i = 0; i < data.length; i++) {
        let divCharacter = $(document.createElement('div'));
        divCharacter.addClass('card');
        divCharacter.append(data[i].name + ' ');

        let imgCharacter = `<img src="${data[i].img}" class="img">`
        imgCharacter.className = 'images';

        let linkCharacter = $(document.createElement('a'));
        linkCharacter.attr('href', 'character.html?id=' + data[i].char_id);
        linkCharacter.text('Подробнее');

        divCharacter.append(imgCharacter);
        divCharacter.append(linkCharacter);
        container.append(divCharacter);
    }
}

function jqueryParseData(response, status) {
    renderData(response);
}

function jqueryLoadIndex() {
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jqueryParseData
    });
}

$(document).ready(function() {
    jqueryLoadIndex();
});