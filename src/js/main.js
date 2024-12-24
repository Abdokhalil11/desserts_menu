var xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json", true);
xhr.onreadystatechange = function () {
  if (this.status == "200" && this.readyState == 4) {
    const data = JSON.parse(this.responseText);
    addDeserts(data);
  }
};
xhr.send();
