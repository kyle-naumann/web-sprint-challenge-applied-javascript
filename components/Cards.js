// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function TheCards (object){
let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");
let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("card");
    headlineDiv.textContent = object.headline
    mainDiv.append(headlineDiv);
let authDiv = document.createElement("div");
    authDiv.classList.add("author");
    mainDiv.append(authDiv);
let imgDiv = document.createElement("img");
    imgDiv.classList.add('img-container');
    imgDiv.src = object.authorPhoto
    mainDiv.append(imgDiv);
let authname = document.createElement('span');
    authname.textcontent = object.authorName
    mainDiv.append(authname);

mainDiv.addEventListener('click', () => {
    console.log(headline)
})  

return mainDiv
}

const cardsContainer = document.querySelector(".cards-container");


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response =>  {
        const topics = Object.entries(response.data.articles);
            topics.forEach(subject => {
                subject[1].forEach(data => {
                const articleCard = TheCards(data);
                cardsContainer.append(articleCard);
            })
        })
    })
    .catch(error => {
        console.log(error, "Error received")})