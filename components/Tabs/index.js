// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicDiv = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.data.topics.forEach( item => {
            // let tab = document.createElement('div');
            // tab.classList.add('tab');
            // tab.textContent = item;
            let tab = tabCreator(item);
            topicDiv.appendChild(tab);
        })
    })
    .catch( error => {
        console.log("Error:", error);
    })


const tabCreator = (topic) => {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;

    if (topic == "node.js") {
        tab.textContent = "node";
        topic = "node";
    }

    tab.addEventListener('click', (event) => {
        filterArticles(topic);
    });

    return tab;
}

const filterArticles = (topic) => {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        let subject = cards[i].dataset.topic;
        if (subject == topic) {
            cards[i].classList.remove('hide-card');
        }
        else {
            cards[i].classList.add('hide-card');
        }
    }
}