function fetchSimpsonJSON() {
    let resultData = [0];
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

    axios
      .get(url)
      .then(function (response) {
        return response.data[0];
      })
      .then(function (simpson) {
        console.log("data decoded from JSON:", simpson);

    const simpsonHtml = `
    <button className="button" onclick="fetchSimpsonJSON()">Change the quote</button><br><br>
    <p><strong>${simpson.character}</strong></p>
    <p>${simpson.quote}</p>
    <img src="${simpson.image}" />
        `;

        document.querySelector("#simpson").innerHTML = simpsonHtml;
      });
  }

  fetchSimpsonJSON();
  