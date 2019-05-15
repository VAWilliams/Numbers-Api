function populateOutput(
    randomNumber = Math.round(Math.random() * 9999, url)
)
{
    $.ajax({
        url: `http://numbersapi.com/${randomNumber}/math`,
        method: 'GET',
        success: function (response) {
            $('#output').text(response)
        }
    })
}

function isInputValid() {
    return $('#get').val().length <= 4 && (Number.isInteger(newNumber)
}

populateOutput();

$('#button').click(function (newNumber) {
    newNumber = Number($('#get').val());
    url = `http://numbersapi.com/${newNumber}/math`
    if (isInputValid) {
        populateOutput(newNumber, url);
    }
})
