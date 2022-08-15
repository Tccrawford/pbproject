// Select color input
function colorInput(){
    const colorPicker = document.getElementById("colorPicker")
    const cells = document.getElementsByClassName("cell")

    for(let i = 0; i , cells.length; i++){
        cells[i].addEventListener("click", function(e){
            let clickedCell = e.target;
            clickedCell.style.backgroundColor = colorPicker.value
        })
    }
}
// Select size input
function sizeInput(e){
    e.preventDefault()
    const height = document.getElementById("inputHeight").value
    const width = document.getElementById("inputWidth").value
    makeGrid(height, width)
    
}
// When size is submitted by the user, call makeGrid()


function makeGrid(height, width) {

    let table = document.getElementById("pixelCanvas")

    for(let i = 0; i < height; i++){
        let rowHeight = document.createElement("tr")
        rowHeight.id = "row" + i

        table.appendChild(rowHeight)
        let rowWidth = document.getElementById("row" + i)

        for(let j = 0; j < width; j++){
            let cell = document.createElement("td")
            cell.id = "cell" + j
            cell.className = "cell"
            rowWidth.appendChild(cell)
        }
        
    }
    console.log(height)
    colorInput()
  
}

let btn = document.getElementById("button")
btn.addEventListener("click", sizeInput)

