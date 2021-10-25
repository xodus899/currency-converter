$(document).ready(function() {
    const noRefreshOnSubmit = function(noRefreshOnSubmit) {
        noRefreshOnSubmit.preventDefault();
        //https://freecurrencyapi.net
        const endPoint = 'https://freecurrencyapi.net/api/v2/latest?apikey='
        const apiKey = "d7db4dd0-3361-11ec-b36c-5f412c83640c"
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

const getRates = (data) => {
    //validate the input fields
    const theAmount = $("#cAmount").val();
    const theCurrency = $("#cType").val().toUpperCase();
    const currencyTypes = data.data;
    if (currencyTypes[theCurrency]) {
        const result = Math.floor(theAmount * currencyTypes[theCurrency]) + " " + theCurrency;
        $('.result').addClass('resultShow').show();
        $('.error').hide();
        $('#cAmount,#cType').val('');
        return $('.result').html('Amount:' + result);
    } else {
        return hideResult();
    }
}

const hideResult = () => {
  $('.result').hide();
  $('.error').addClass('errorShow').show();
  $('#cAmount,#cType').val('');
  return $('.error').html('Invalid currency code, please try again.');
}

dreadedError = function(error) {
    throw (error.responseText);
}
