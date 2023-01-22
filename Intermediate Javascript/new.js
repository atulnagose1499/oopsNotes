const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/peru");
request.send();
console.log(request.responseText);

request.addEventListener("load", function () {
  console.log(this.response.text);
});
