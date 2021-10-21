$(document).ready(function() {
    const endPoint = "http://data.fixer.io/api/latest?access_key=";
    const noRefreshOnSubmit = function(noRefreshOnSubmit) {
        noRefreshOnSubmit.preventDefault();
        const apiKey = "232f65d735f4d201846c175d8aa531cd";
        // https://fixer.io/quickstart

        $.ajax({
            type: 'get',
            url: endPoint + apiKey,
            data: 'string',
            dataType: 'json',
            success: getRates,
            error: dreadedError
        });
        console.log("here we go!");
    }
    $("#formSubmit").on("click", noRefreshOnSubmit);
});

// need to have form to be able to submit only once.

const getRates = function(data) {
    //validate the input fields
    const theAmount = $("#cAmount").val();
    const theCurrency = $("#cType").val().toUpperCase();
    const currencyTypes = data.rates;
    if (theCurrency in currencyTypes) {
        const result = Math.floor(theAmount * currencyTypes[theCurrency]) + " " + theCurrency;
        $('.result').show();
        $('.error').hide();
        $('#cAmount,#cType').val('');
        return $('.result').html('Amount:' + result);
    } else if (theCurrency in currencyTypes !== theCurrency) {
        $('.result').hide();
        $('.error').show();
        $('#cAmount,#cType').val('');
        return $('.error').html('Invalid currency code, please try again.');
    }
}

dreadedError = function(error) {
    throw (error.responseText);
}
