/* Declare variables for fragrence links and fragrence outputs */
const oldMoneyLink = document.getElementById('old-money-link');
const templeSmokeLink = document.getElementById('temple-smoke-link');
const fourVicesLink = document.getElementById('four-vices-link');
const treeRangerLink = document.getElementById('tree-ranger-link');
const spicedCitrusLink = document.getElementById('spiced-citrus-link');
const teaTreeLink = document.getElementById('tea-tree-link');
const fragrenceSubtitle = document.getElementById('fragrence-subtitle');
const fragrenceDescription = document.getElementById('fragrence-description');
const fragrenceImage = document.getElementById('fragrence-image');

/* Event handler on fragrence links that display output */
oldMoneyLink.addEventListener('click', displayOldMoney);
templeSmokeLink.addEventListener('click', displayTempleSmoke);
fourVicesLink.addEventListener('click', displayFourVices);
treeRangerLink.addEventListener('click', displayTreeRanger);
spicedCitrusLink.addEventListener('click', displaySpicedCitrus);
teaTreeLink.addEventListener('click', displayTeaTree);


/* Function that retrievs the old money json file and loops through the object and displays to the fragrence output */
function displayOldMoney(e){
  // Fetch the file where the info is located
  fetch('json/old-money.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}



/* Function that retrievs the temple smoke json file and loops through the object and displays to the fragrence output */
function displayTempleSmoke(e){
  // Fetch the file where the info is located
  fetch('json/temple-smoke.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}



/* Function that retrievs the four vices json file and loops through the object and displays to the fragrence output */
function displayFourVices(e){
  // Fetch the file where the info is located
  fetch('json/four-vices.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}


/* Function that retrievs the tree ranger json file and loops through the object and displays to the fragrence output */
function displayTreeRanger(e){
  // Fetch the file where the info is located
  fetch('json/tree-ranger.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}


/* Function that retrievs the spiced citrus json file and loops through the object and displays to the fragrence output */
function displaySpicedCitrus(e){
  // Fetch the file where the info is located
  fetch('json/spiced-citrus.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}

/* Function that retrievs the tea tree json file and loops through the object and displays to the fragrence output */
function displayTeaTree(e){
  // Fetch the file where the info is located
  fetch('json/tea-tree.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      subtitleOutput = section.subtitle;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    fragrenceImage.src = imageOutput;
    fragrenceSubtitle.textContent = subtitleOutput;
    fragrenceDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}