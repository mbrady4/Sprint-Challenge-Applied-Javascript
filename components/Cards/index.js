// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        const articles = response.data.articles;
        console.log(articles);
        const topics = Object.keys(articles);
        const cardContainer = document.querySelector('.cards-container');
        for (let i = 0; i < topics.length; i++) {
            let topicArticles = articles[topics[i]];
            topicArticles = Array.from(topicArticles);
            topicArticles.forEach( snippet => {
                let component = cardCreator(snippet, topics[i]);
                cardContainer.appendChild(component);
            });
        }
    })
    .catch( error => {
        console.log("Error: ", error);
    })

const cardCreator = (article, topic) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-topic', topic);

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');

    const authorImg = document.createElement('div');
    authorImg.classList.add('img-container');

    const imgSRC = document.createElement('img');
    imgSRC.setAttribute('src', article.authorPhoto);
    authorImg.appendChild(imgSRC);

    author.appendChild(authorImg);

    const name = document.createElement('p');
    name.textContent = (article.authorName).toString();
    author.appendChild(name);

    card.appendChild(author);
    return card
}