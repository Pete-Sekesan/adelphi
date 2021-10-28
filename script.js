function getDeptList() {
  const url = 'https://api.adelphi.edu/v1/departments/';

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusCode);
    })
    .then((responseJson) => console.log(responseJson));
}

function displayResults(responseJson) {}

function initiateSearch() {
  $('form').submit((event) => {
    event.preventDefault();
    getDeptList();
  });
}
$(initiateSearch);
