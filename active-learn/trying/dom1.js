for (let i = 0; i < 100; i++) {
  let mainElement = document.createElement("div");
  let headingElement = document.createElement("h2");
  let paragElement = document.createElement("p");

  let textHeading = document.createTextNode(`Product ${i+1}`);
  let textParagraph = document.createTextNode("Product Discription");

  headingElement.appendChild(textHeading);
  mainElement.appendChild(headingElement);
  paragElement.appendChild(textParagraph);
  mainElement.appendChild(paragElement);

  document.body.appendChild(mainElement);
  mainElement.className = "product";
}
