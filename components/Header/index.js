// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const date = document.createElement('span');
    date.textContent = "March 28, 2019";
    date.classList.add('date');
    headerDiv.appendChild(date);

    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";
    headerDiv.appendChild(h1);

    const temp = document.createElement('span');
    temp.textContent = "98°";
    temp.classList.add('temp');
    headerDiv.appendChild(temp);

    return headerDiv
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
