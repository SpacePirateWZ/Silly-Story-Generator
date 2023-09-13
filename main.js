// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    
  // move the variables into the result() to initialize the code 

  let newStory = storyText; // since the storyText will get initialized each time, so we will always be able to replace all the values when we click on the button

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem); 
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // missed out on updating the newStory variable, thus causing the text unable to change when click 'generate'

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  } 

  // added conditions to reset back to 'us' value when 'us' radio button is selected

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32) * 5/9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  } 
  /*else {
    newStory = newStory.replace('21 stone', '300 pounds');
    newStory = newStory.replace('34 centigrade', '94 fahrenheit');
  }*/

  // soon realized that since things get initialized so the else statement above is not needed as well lol

  story.textContent = newStory;
  story.style.visibility = 'visible';
}



