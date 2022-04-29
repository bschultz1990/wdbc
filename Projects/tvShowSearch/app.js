const form = document.querySelector("#searchForm");
const resultbox = document.querySelector("#resultbox");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    removeAllChildNodes(resultbox); // Clear results for subsequent searches.
    const search = form.elements.query.value;
    const result = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
    for (let i = 0; i <= 10; i++) {
        // Display the images of the first 10 results from the query as links:
        const showLink = document.createElement("a");
        showLink.id = `link${i}`;
        showLink.href = result.data[`${i}`].show.url;
        showLink.target = "_blank";

        const showImg = document.createElement("img");
        showImg.src = result.data[`${i}`].show.image.medium;
        showImg.classList.add("showImg");

        // showImg.addEventListener("mouseenter", function (e) {
        //     e.stopPropagation(); // Stop event propogation
        // });

        // showImg.addEventListener("mouseleave", function (e) {
        //     e.stopPropagation(); // Stop event propogation
        // });

        showLink.appendChild(showImg);
        resultbox.appendChild(showLink);
    }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// TODO: Add a cool rollover effect to the result images. Fade out the image
// and display the show's title.
