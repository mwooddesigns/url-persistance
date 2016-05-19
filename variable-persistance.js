document.addEventListener("DOMContentLoaded", function() {
  var variables = createQueryAssoc();
  for(var key in variables) {
    document.cookie = "__MTI_" + key + "=" + variables[key];
  }
  clearMTICookies();
});

function createQueryAssoc() {
  var queryString = window.location.search.substring(1);
  var queryArray = queryString.split('&');
  var queryAssoc = [];
  for(var i = 0; i < queryArray.length; i++) {
    var temp = queryArray[i].split('=');
    var key = temp[0];
    var val = temp[1];
    queryAssoc[key] = val;
  }
  return queryAssoc;
}

function clearMTICookies() {
  var allCookies = document.cookie.split(';');
  for(var i = 0; i < allCookies.length; i++) {
    var tempCookie = allCookies[i].split('=');
    var cookieName = tempCookie[0].trim();
    if(cookieName.substring(0,6) == "__MTI_") {
      console.log(cookieName);
    }
  }
}
