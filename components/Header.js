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
    let headDiv = document.createElement("div");
    headDiv.classList.add("header");
    let headSpan = document.createElement("span");
    headSpan.classList.add("date");
    headSpan.textContent = "MARCH 28, 2020";
    headDiv.append(headSpan)
    let headH1 = document.createElement("h1")
    headH1.textContent = "Lambda Times"
    headDiv.append(headH1)
    let headSpan2 = document.createElement("span")
    headSpan2.textContent = "98°"
    headDiv.append(headSpan2)

    return headDiv
}

let headerDiv = document.querySelector(".header-container")
headerDiv.append(Header())
 