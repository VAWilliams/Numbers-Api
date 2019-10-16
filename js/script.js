function is_value_valid ($value) {
    return $value.length <= 4 && (Number.isInteger(Number($value)));
}

function populate_output(number = Math.round(Math.random() * 9999)) {
    number = Number(number);
    $.ajax({
        url: `http://numbersapi.com/${number}/math`,
        method: 'GET',
        success: function (response) {
            $('#output').text(response)
        }
    })
}

$(window).load(populate_output);

$('#button').click(function () {
    
    var input = $('#get').val();
    if (!is_value_valid(input) { return; }
    populate_output(input);
    
});
