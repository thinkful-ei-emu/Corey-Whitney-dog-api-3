/* eslint-disable no-undef */
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
  console.log(`'this is a test'https://dog.ceo/api/breed/${breed}/images/random`);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(jsonData => {
      displayDog(jsonData);
    })
    .catch(error => {
      console.log(`There was an error fetching your data: ${error.message}.`);
    });
};

function handleNewSubmit() {
  $('.form-submission').submit(function(event){
    event.preventDefault();
    //numberPolice();
    getDog();
  });
}

const displayDog = function(jsonData) {
  let dogArray = jsonData.message;
  console.log(dogArray);
  if (dogArray === 'Breed not found'){
    alert('Breed not found, please choose another.');  
  } else {
    createImg(dogArray);
  }
};

/**
 * create img grid
 */
const createImg = function(dogArray) {
  $('.dogImg').empty();
  $('.dogImg').append(
    `<img src="${dogArray}" alt="Smiley face" height="175" width="175">`
  );
};

function createEventHandlers() {
  handleNewSubmit();
}
$(createEventHandlers);