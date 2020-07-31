function isValid(value) {
    let { length }    = value;
    let { isInteger } = Number;
    return length <= 4 && isInteger(Number(value));
}

function populateOutput(seed) {
    $.ajax({
        url: `http://numbersapi.com/${Number(seed)}/math`,
        method: 'GET',
        success: function (response) {
            $('#output').text(response);
        }
    });
}

$(document).ready(function() {
    let { round, random } = Math;
    let number = round(random() * 9999);
    populateOutput(number);
});

$('#button').click(function () {
    let input = $('#input').val();
    if (!isValid(input)) {
        return;
    }
    populateOutput(input);
});
