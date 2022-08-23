
let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")
let thirdInput = document.getElementById("thirdInput")
let fourthInput = document.getElementById("fourthInput")
let firstSave = document.getElementById("firstSave")
let secondSave = document.getElementById("secondSave")
let thirdSave = document.getElementById("thirdSave")
let fourthSave = document.getElementById("fourthSave")
let list1value = document.getElementById("list1value")


async function getQuantity() {

  let response = await fetch('http://localhost:3001/listBooks')

  let books = await response.json()

  let quantityArray = [books[0].quantity, books[1].quantity, books[2].quantity, books[3].quantity]


  firstInput.value = quantityArray[0]
  secondInput.value = quantityArray[1]
  thirdInput.value = quantityArray[2]
  fourthInput.value = quantityArray[3]

}

async function updateDate() {

  firstSave.addEventListener("click", async function () {

    let send = await fetch("http://localhost:3001/updateBook", {

      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "id": 1,
        "quantity": firstInput.value

      })

    })

    let complect = await send.json()

    console.log(complect)

  })

  secondSave.addEventListener("click", async function () {

    let send = await fetch("http://localhost:3001/updateBook", {

      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "id": 2,
        "quantity": secondInput.value

      })

    })

    let complect = await send.json()

    console.log(complect)

  })

  thirdSave.addEventListener("click", async function () {

    let send = await fetch("http://localhost:3001/updateBook", {

      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "id": 3,
        "quantity": thirdInput.value

      })

    })

    let complect = await send.json()

    console.log(complect)

  })

  fourthSave.addEventListener("click", async function () {

    let send = await fetch("http://localhost:3001/updateBook", {

      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "id": 4,
        "quantity": fourthInput.value

      })

    })

    let complect = await send.json()

    console.log(complect)

  })

}


getQuantity()
updateDate()






