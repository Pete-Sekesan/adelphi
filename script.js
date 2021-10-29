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
  responseJson.results
    .filter((res) => res.parent === null)
    .forEach((res) =>
      $(`#table`).append(
        `<table> <tr> <th>Code</th> <th>Title</th> </tr> <td>${res.code}</td> <td>${res.title}</td> </table>`
      )
    );
}

function initiateSearch() {
  $('form').submit((event) => {
    event.preventDefault();
    getDeptList();
  });
}
$(initiateSearch);
