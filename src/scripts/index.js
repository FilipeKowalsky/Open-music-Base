function createCards(products) {
  const cardContainer = document.querySelector('.card__container');

  products.forEach(product => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const titleContainer = document.createElement('div');
    const band = document.createElement('p');
    const year = document.createElement('p');
    const title = document.createElement('h2');
    const priceContainer = document.createElement('div');
    const price = document.createElement('h3');
    const button = document.createElement('button');

    card.classList.add('card'); 
    card.dataset.id = product.id   
    img.setAttribute('src', product.img);
    titleContainer.classList.add('title__container');   
    band.classList.add('text_secondary');
    band.textContent = product.band;
    titleContainer.appendChild(band);
    year.classList.add('text_secondary');
    year.textContent = product.year;
    title.classList.add('title_secondary');
    title.textContent = product.title;
    priceContainer.classList.add('price__container');
    price.classList.add('title_secondary');
    price.classList.add('price')
    price.textContent = `R$ ${product.price.toFixed(2)}`;
    button.classList.add('button__album')
    button.textContent = 'Comprar';
    
    card.appendChild(img); 
    titleContainer.appendChild(year);
    card.appendChild(titleContainer);
    priceContainer.appendChild(price);
    card.appendChild(title);
    priceContainer.appendChild(button);
    card.appendChild(priceContainer);
    cardContainer.appendChild(card);
  });
}
createCards(products);

function toggleDarkMode(buttonSelector, htmlSelector) {
  const button = document.querySelector(buttonSelector);
  const html = document.querySelector(htmlSelector);
  
  button.addEventListener('click', () => {
    html.classList.toggle('dark__mode')
    localStorage.setItem('dark__mode', html.classList.contains('dark__mode'))
  });

  const modePreference = JSON.parse(localStorage.getItem('dark__mode'));

  if (modePreference === true) {
    html.classList.add('dark__mode');
    button.checked = true;
  } else {
    html.classList.remove('dark__mode');
    button.checked = false;
  }
}
toggleDarkMode('input[type="checkbox"]', 'html');

const filterRange = (arr) => {
  const rangeInput = document.querySelector('#rangeInput')
  const buttons = document.querySelectorAll('.section_button > button');

  rangeInput.addEventListener('input', () =>{
    const test = filterButton(buttons)
    
    const price = document.querySelector('#idToSearch')
    price.innerHTML = rangeInput.value
    
    const priceFilterRemove = arr.filter(product => product.price <= rangeInput.value)
    priceFilterRemove.forEach(element => {
      if(element.category === test || test === 0){
        const id = document.querySelector(`[data-id="${element.id}"]`)
        id.classList.remove('hidden')
      }
    });
   
    const priceFilterAdd = arr.filter(product => product.price >= rangeInput.value)
    priceFilterAdd.forEach(element => {
      const id = document.querySelector(`[data-id="${element.id}"]`)
      id.classList.add('hidden')
    })
  })
}

filterRange(products)