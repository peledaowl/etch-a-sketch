const body = document.querySelector('body')
body.style.height = '100vh'
body.style.padding = '0px'
body.style.margin = '0px'
body.style.overflow = 'hidden'



const container = document.querySelector('.container')
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.height = '100vh'

const inputContainer = document.createElement('div')
inputContainer.classList.add('.inputContainer')
inputContainer.style.display = 'flex'
inputContainer.style.margin = '60px'
container.appendChild(inputContainer)

const label = document.createElement('label')
label.textContent = "Choose grid size:"
label.style.paddingRight = "20px"
inputContainer.appendChild(label)

const selectList = document.createElement('select')
inputContainer.appendChild(selectList)
let array = [4, 8, 16, 32, 48, 64, 80, 96]
for (let i = 0; i < array.length; i++) {
  let option = document.createElement("option");
  option.value = array[i];
  option.text = array[i];
  selectList.appendChild(option);
}


const button = document.createElement('button')
button.textContent = 'Confirm'
button.style.marginLeft = '20px'
inputContainer.appendChild(button)


const content = document.createElement('div')
container.appendChild(content)
content.classList.add('.container')
content.style.padding = '0px'
content.style.margin = '0px'
content.style.display = 'flex'
content.style.flexWrap = 'wrap'
content.style.width = '800px'
content.style.height = '800px'
content.style.border = 'solid 1px black'

let selectedValue
button.addEventListener('click', () => {
  content.innerHTML = ''
  selectedValue = selectList.value

  for (i = 0; i < selectedValue; i++){
    for (j = 0; j < selectedValue; j++) {
      const divGrid = document.createElement('div')
      divGrid.classList.add('.grid-cell')
      divGrid.style.padding = '0px'
      divGrid.style.margin = '0px'
      let width = 800 / selectedValue
      let height = 800 / selectedValue
      divGrid.style.width = `${width}px`
      divGrid.style.height = `${height}px`
      let bright = 99
      divGrid.addEventListener('mouseover', () => {
        divGrid.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        bright = bright - 10
        divGrid.style.filter = `brightness(${bright}%)`
      });
      content.appendChild(divGrid)
  }}
})
