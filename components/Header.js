// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let div = document.createElement('div');
    div.classList.add('header');

    let span = document.createElement('span');
    span.classList.add('date');
    span.textContent ='MARCH 28, 2020';
    div.append(span);

    let h1 = document.createElement('h1');
    h1.textContent = 'LAMBDA TIMES';
    div.append(h1);

    let tempSpan = document.createElement('span');
    tempSpan.textContent = '98°';
    div.append(tempSpan);

    return div
}

let headerDiv =document.querySelector('.header-container')
headerDiv.append(Header())
