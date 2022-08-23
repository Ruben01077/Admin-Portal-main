
let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")
let thirdInput = document.getElementById("thirdInput")
let fourthInput = document.getElementById("fourthInput")
let firstSave = document.getElementById("firstSave")
let secondSave = document.getElementById("secondSave")
let thirdSave = document.getElementById("thirdSave")
let fourthSave = document.getElementById("fourthSave")
let list1value = document.getElementById("list1value")

// let id1, id2, id3, id4




async function getQuantity() {

  let response = await fetch('http://localhost:3001/listBooks')

  let books = await response.json()

  let quantityArray = [books[0].quantity, books[1].quantity, books[2].quantity, books[3].quantity]


  id1 = quantityArray[0]
  id2 = quantityArray[1]
  id3 = quantityArray[2]
  id4 = quantityArray[3]

  firstInput.value = id1
  secondInput.value = id2
  thirdInput.value = id3
  fourthInput.value = id4




}



async function updateDate() {


  let send = await fetch("http://localhost:3001/updateBook", {


    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      "id": 1,
      "quantity": 50

    })

  })


  let complect = await send.json()

  console.log(complect)




}

debugger







getQuantity()
updateDate()



