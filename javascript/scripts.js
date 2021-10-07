$(document).ready(function() {
  const endPoint = "http://data.fixer.io/api/latest?access_key=";
  const apiKey = "d5fb98300ed8ec7150a07171b4fe78ec";

  const noRefreshOnSubmit = function(noRefreshOnSubmit) {
      noRefreshOnSubmit.preventDefault();

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

  const getRates = function(data) {
      //validate the input fields
      const theAmount = $("#cAmount").val();
      const theCurrency = $("#cType").val();
      const currencyTypes = data.rates
      const currencyArray = Object.entries(currencyTypes);

      currencyArray.forEach((currencyType) => {
          if (currencyType[0].toLowerCase() === theCurrency.toLowerCase()) {
          //user inputted currency type to match the key from object.
            console.log('hi');
            console.log ( theAmount * currencyType[1] + " " + currencyType[0] )

          // if currency matches, we want to take the amount and multiply by the conversion rate.
          //then return the conversion
        }
      });
  }

  dreadedError = function(error) {
      console.log(error.responseText);
  }
