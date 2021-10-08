$(document).ready(function() {
  const endPoint = "http://data.fixer.io/api/latest?access_key=";
  const noRefreshOnSubmit = function(noRefreshOnSubmit) {
      noRefreshOnSubmit.preventDefault();
  // const apikey ="Provide your own key";
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

  const getRates = function(data) {
      //validate the input fields
      const theAmount = $("#cAmount").val();
      const theCurrency = $("#cType").val().toLowerCase();
      const currencyTypes = data.rates
      const currencyArray = Object.entries(currencyTypes);

      currencyArray.forEach((currencyType) => {
          if (currencyType[0].toLowerCase() === theCurrency) {
          //user inputted currency type to match the key from object.
            console.log('we got this far');
            const result = Math.round(theAmount * currencyType[1]) + " " + currencyType[0];
            return $('.result').append(result);
          // if currency matches, we want to take the amount and multiply by the conversion rate.
          //then return the conversion
        }
      });
  }

  dreadedError = function(error) {
      console.log(error.responseText);
  }
