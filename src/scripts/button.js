function activeButton(){
  const buttons = document.querySelectorAll('.section_button > button');
  let index = 0;
  const price = document.querySelector('#idToSearch')
  
  buttons.forEach((iten, i) => {
    index = filterButton(buttons)
    const range = document.querySelector('#rangeInput')
    
    iten.addEventListener('click', () =>{    
      const card = document.querySelectorAll('.card')
      card.forEach(iten => {
        if(iten.classList.contains('hidden')){
        }else{iten.classList.toggle('hidden')}
    })
      range.value = 0;  
      price.innerHTML = rangeInput.value
      buttons[index].classList.remove('active')
      iten.classList.add('active')
      index = i
    })
  })
}
(activeButton());

function filterButton(arr){
  let index = 0;
  arr.forEach((iten, i) => {
    const activeIten = iten.classList.contains('active')
    if(activeIten){
      index = i
    }
  })
  return index;
}