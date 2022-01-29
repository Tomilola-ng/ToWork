window.addEventListener('scroll',() => {
});

//Posting your products
const ProductN = document.querySelector('.PN');
const ProductP = document.querySelector('.PP');
const ProductD = document.querySelector('.PD');
const PostBtn = document.querySelector('.Pbtn');
const Postarea = document.querySelector('.ProductPost');

//here is the function
PostBtn.addEventListener('click', (e) => {
 //Creating the product card on click
const Productcard = document.createElement('div');
  Productcard.innerHTML = `
 <div class="PCard">
 <h1 class="left">${ProductN.value}</h1>
 <h3 class="right">${ProductP.value}</h3>
 <h4>${ProductD.value}</h4>
 <i class="stars">👍</i>
 </div> `;
  Postarea.append(Productcard);
});

//Generating Postrack 
const PostRackLoader = document.querySelector('.PostsRackLoader');
PostRackLoader.addEventListener('click', () => {
const PostRack = document.querySelector('.PostsRack');
  PostRack.classList.toggle('active');
}
);
