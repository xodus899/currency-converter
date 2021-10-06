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
      // console.log(currencyTypes);
      const currencyTypesKey = (Object.keys(currencyTypes));
      // returns the keys for currency type in array.
      const currencyValue = (Object.values(currencyTypes));
      //returns the value of currency types

      currencyTypesKey.forEach((currencyType) => {
          if (currencyType.toLowerCase() === theCurrency.toLowerCase()) {
          //user inputted currency type to match the key from object.
              console.log('hi');
          // if currency matches do something
        }
      });
  }

  dreadedError = function(error) {
      console.log(error.responseText);
  }
