const API_URLS = {
 sfw: "https://api.waifu.pics/sfw/",
 nsfw: "https://api.waifu.pics/nsfw/"
}

const sfwContainer = document.querySelector(".sfw-container")
const getData = async (url) => {
let data = await fetch(url).then(response => response.json())
return data
}

const getRandomElement = (arr) => {
let index = Math.floor(Math.random() * arr.length)
return arr[index]
}

let categories = [
'waifu',
'neko',
'shinobu',
'megumin',
'bully',
'cuddle',
'cry',
'hug',
'awoo',
'kiss',
'lick',
'pat',
'smug',
'bonk',
'yeet',
'blush',
'smile',
'wave',
'highfive',
'handhold',
'nom',
'bite',
'glomp',
'slap',
'kill',
'kick',
'happy',
'wink',
'poke',
'dance',
'cringe'
]
window.onload = async () => {
let sfwPictures = []
for(let i = 0; i < 10; i++){
 let category = getRandomElement(categories)
 let picture = await getData(API_URLS.sfw + category)
 let pictureData = {
  url: picture.url,
  category
 }
 sfwPictures.push(pictureData)
}
for(let j = 0; j <= sfwPictures.length; j++){
sfwContainer.innerHTML += `
<div class="card">
 <h3 class="card-title waifu-bg text-white text-capitalize text-center fw-bold">Category: ${sfwPictures[j].category}</h3>
 <img src="${sfwPictures[j].url}" class="img">
</div>
`
}
const images = document.querySelectorAll('.img')
images.forEach(image => {
image.addEventListener('click', () => {
window.open(image.src)
})
})
}
