// // API key
// const key = '$2a$10$8qxVNXgmg7OnnUt7hXa4JewbZu1clqqLwpTSxNMERuiHyQvSeHsxm';

// // create the list where we will place our characters in
// const ul = document.getElementById('spells');

// // create URL to get all Harry Potter characters
// const url = new URL('https://www.potterapi.com/v1/spells'), params = {key: key}

// Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

// // create the type of element on page as passed in the parameters
// function createNode(element) {
//   return document.createElement(element);
// }

// // Append the second parameter(element) to the first one
// function append(parent, el) {
//   return parent.appendChild(el);
// }

// // make API request using Fetch API
// fetch(url, {key: key})
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function(data) {
//   // Get the results
//   let spells = data;
//   console.log(spells);
//   //Map through the results
//   return spells.map(function(spells) {
//     // Create the li's
//     let li = createNode('li');
//     // Make the HTML of our li the character's name and blood status
//     li.innerHTML = `${spells.spell}, ${spells.type}, ${spells.effect}`;
//     // Append the li's to the ul
//     append(ul, li);
//   })
// })
// .catch(function(error) {
//   // Error handling
//   let p = "There's an error with the API.";
//   append(body, p);
// });


// API key
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

// create the list where we will place our characters in
const ul = document.getElementById('characters');

// create URL to get all Harry Potter characters
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: 'Gryffindor'}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

// // create the type of element on page as passed in the parameters
// function createNode(element) {
//   return document.createElement(element);
// }

// // Append the second parameter(element) to the first one
// function append(parent, el) {
//   return parent.appendChild(el);
// }

// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
  let characters = data;
  // console.log(characters);
  //Map through the results
  characters.map(function(character) {
    console.log('hello')
    console.log(character)
    let char =  `<button class="hufflepuffBtn">${character.name}</button>`
    console.log(char)
    $('.characters').append(char)
    // Create the li's
    // let li = createNode('li');
    // // Make the HTML of our li the character's name and blood status
    // li.innerHTML = `${character.name}, ${character.bloodStatus}`;
    // // Append the li's to the ul
    // append(ul, li);
})
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  // append(body, p);
});

