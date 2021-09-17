const API_URLS = {
 sfw: "https://api.waifu.pics/sfw/",
 nsfw: "https://api.waifu.pics/nsfw/"
}

const nsfwContainer = document.querySelector(".nsfw-container")
const getData = async (url) => {
let data = await fetch(url).then(response => response.json())
return data
}

const getRandomElement = (arr) => {
let index = Math.floor(Math.random() * arr.length)
return arr[index]
}

let categories = ['waifu','neko', 'blowjob']

window.onload = async () => {
let nsfwPictures = []
for(let i = 0; i <= 10; i++){ 
let category = getRandomElement(categories)
let picture = await getData(API_URLS.nsfw + category)
let pictureData = {
 url: picture.url,
 category
}
nsfwPictures.push(pictureData)
}
for(let j = 0; j <= nsfwPictures.length; j++){
 nsfwContainer.innerHTML += `
 <div class="card">
 <h3 class="card-title waifu-bg text-white text-capitalize text-center fw-bold">Category: ${nsfwPictures[j].category}</h3>
 <img src="${nsfwPictures[j].url}" class="img">
</div>
`
}
}
