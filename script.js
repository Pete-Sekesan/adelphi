function getDeptList() {
  const url = 'https://api.adelphi.edu/v1/departments/';

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusCode);
    })
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(responseJson) {
  for (let i = 0; i < responseJson.results.length; i++) {
    let code = responseJson.results[i].code;
    let title = responseJson.results[i].title;
    console.log(code, title);
    $('#table').append(
      `<table>
            <tr>
                <th>Code</th>
                <th>Title</th>
            </tr>
            <td>${code}</td>
            <td>${title}</td>
        </table>`
    );
  }
}

function initiateSearch() {
  $('form').submit((event) => {
    event.preventDefault();
    getDeptList();
  });
}
$(initiateSearch);
