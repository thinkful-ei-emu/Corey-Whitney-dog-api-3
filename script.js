'use strict';
//console.log('script.js being connected');
//user can choose 1-50 img,  print results to console
//from to have required input field, defualt to 3

/*
*fetch dog images 1-50
*/
const getDog = function() {
  //console.log('https://dog.ceo/api.breeds/image/random/' + $('.numCheck').val());
  let breed = $('.breedCheck').val();
  //console.log(`https://dog.ceo/api/breed/${breed}/images/random/`);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/`)
  //console.log(`https://dog.ceo/api/breed/${breed}/images/random/`)
    .then(response => response.json())
    .then(jsonData => {
      displayDog(jsonData);
    })
    .catch(error => {
      console.log(`There was an error fetching your data: ${error.message}.`);
    });
};

function numberPolice() {
  let check = $('.breedCheck').val();
  if (check < 1 || check > 50) {
    alert('Please choose a number between 1 and 50');
    // Prevent page from rendering
  } else {
    getDog();
  } 
}

function handleNewSubmit() {
  $('.form-submission').submit(function(event){
    event.preventDefault();
    numberPolice();
    //getDog();
  });
}

const displayDog = function(jsonData) {
  let dogArray = jsonData.message;
  dogArray.forEach(function(element) {
    createImg(element);
  });
};

/**
 * create img grid
 */
const createImg = function(element) {
  $('.dogImg').append(
    `<img src="${element}" alt="Smiley face" height="175" width="175">`
  );
};

function createEventHandlers() {
  handleNewSubmit();
}
$(createEventHandlers);