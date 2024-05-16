export function getImage(city) {
    const body = document.querySelector("body");
    const apiKeyUnsplash = "2zEW9knLOQJIE9AsB8OzeG1sfEl-tHWpHi_-3t9y9Mg";
    const searchImageApiUrl = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${apiKeyUnsplash}`;

    fetch(searchImageApiUrl)
    .then(response => response.json())
    .then(data => {
        body.style.backgroundImage = `url(${data.results[0].urls.regular})`;
        console.log("data.results[0].urls.regular");
    })
    .catch(error => {
        console.log("There was an error fetching the image", error);
    });

}