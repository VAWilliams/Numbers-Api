let defNum = Math.round(Math.random() * 9999);
let url = `http://numbersapi.com/${defNum}/math`

function doRand(){

    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
            $('#output').text(response)
        }
    })
}

doRand();

$('#button').bind('click', function (newNum) {
    newNum = Number($('#get').val());
    url = `http://numbersapi.com/${newNum}/math`
    if (($('#get').val().length <= 4) && (Number.isInteger(newNum))) {
        doRand();
    }
})