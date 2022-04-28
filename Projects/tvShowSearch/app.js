// Add a click event listener on the Search button to search the tv show archive
// based on your input into the text field.

// Return an array of the first five images of the TV shows returned

// For every new search, clear the page of existing results.

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const search = form.elements.query.value;
    const result = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
    console.log(result.data);
});
