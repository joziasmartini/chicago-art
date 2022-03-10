let data; 
let pagination;

async function getDataAndPagination() {
    await fetch('https://api.artic.edu/api/v1/artworks')
    .then(res => res.json())
    .then(res => { 
        data = res.data
        pagination = res.pagination
    })
    .then(() => {
        console.log(data)
        console.log(pagination)

        describeArt(data)
    })
    .catch(e => {
        console.error(e)
    })
}

async function getImageFromAnotherAPI(imageId) {
    return `<img src="https://api.artic.edu/api/v1/artworks/${imageId}?fields=id,title,image_id"`
}

function describeArt(data) {
    const artSection = document.querySelector('.art-container');

    data.map(item => {
        const artImage = document.createElement("img");
        artSection.appendChild(artImage);

        const artTitle = document.createElement("h2");
        let artTitleContent = document.createTextNode(item.title)
        artTitle.appendChild(artTitleContent);
        artSection.appendChild(artTitle);

        const artistDisplay = document.createElement("p");
        let artistDisplayContent = document.createTextNode(item.artist_display)
        artistDisplay.appendChild(artistDisplayContent);
        artSection.appendChild(artistDisplay);
    })
}

getDataAndPagination();