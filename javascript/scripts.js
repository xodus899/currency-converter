$(document).ready(function() {
  const endPoint = "http://data.fixer.io/api/latest?access_key=";
  const noRefreshOnSubmit = function(noRefreshOnSubmit) {
      noRefreshOnSubmit.preventDefault();
  const apiKey ="232f65d735f4d201846c175d8aa531cd";
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
      const theCurrency = $("#cType").val().toLowerCase();
      const currencyTypes = data.rates
      const currencyArray = Object.entries(currencyTypes);

      currencyArray.forEach((currencyType) => {
        console.log(currencyType[0]);
          if (currencyType[0].toLowerCase() !== theCurrency) {
            return $('.error').html('Invalid currency, please try again');
          }

          if (currencyType[0].toLowerCase() === theCurrency.toLowerCase()) {
          //user inputted currency type to match the key from object.
            console.log('we got this far');
            const result = Math.floor(theAmount * currencyType[1]) + " " + currencyType[0];
            return $('.result').html('Amount:' + result);
          // if currency matches, we want to take the amount and multiply by the conversion rate.
          //then return the conversion
        }
        $('.currencyInput').trigger("reset");
      });
  }

  dreadedError = function(error) {
      throw(error.responseText);
  }
