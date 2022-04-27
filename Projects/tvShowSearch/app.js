// Create a form that has a text input and a Search button.
// Make the default text on the text input, "TV Show Title".

// Add a click event listener on the Search button to search the tv show archive
// based on your input into the text field.

// Return an array of the first five images of the TV shows returned

// For every new search, clear the page of existing results.

const showSearch(show) =
    try {
    const tvShowSearch = async () => {
        const resolve = await fetch("http://api.tvmaze.com/search/shows?q=", show);
        const data = await resolve.json();
        console.log(data);
    };
} catch (error) {
    console.error("Error encountered:", error);
}
}
