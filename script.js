const body = document.querySelector('body')
body.style.height = '100vh'
body.style.padding = '0px'
body.style.margin = '0px'
body.style.overflow = 'hidden'


const content = document.querySelector('.content')
content.style.padding = '0px'
content.style.margin = '0px'
content.style.display = 'flex'
content.style.flexWrap = 'wrap'
content.style.width = '1000px'
content.style.height = '1000px'


for (i = 0; i < 16; i++){
  for (j = 0; j < 16; j++) {
    const divGrid = document.createElement('div')
    divGrid.classList.add('grid-cell')
    divGrid.style.padding = '0px'
    divGrid.style.margin = '0px'
    divGrid.style.width = `118px`
    divGrid.style.height = `60px`
    divGrid.addEventListener('mouseover', () => {
      divGrid.style.backgroundColor = 'blue';
    });
    divGrid.addEventListener('mouseout', () => {
      divGrid.style.backgroundColor = '';
      divGrid.style.transition = 'background 1s ease-out'
    })
    content.appendChild(divGrid)
}}