

const pressBtn = document.getElementById('btn1')
pressBtn.addEventListener('click', getBeerData);

function getBeerData () {
    const beerData = fetch('https://api.punkapi.com/v2/beers ')
        .then((response) => {
            return response.json()
        })
        .then(displayBeer)    
}

function displayBeer(data) {
    console.log(data)
}




    //  .then(response => {
    //      return response.json()
    //  })
    //  .then(data => {
    //      console.log(data)
    //      const name = data[0].name
    //      const description = data[0].description
    //      const {volume} = data[0]
    //      const volumeValue = volume.value 
    //      const volumeUnit = volume.unit 
    //     //  const newvolValue = data[0].volume.value
    //     //  console.log(volumeValue)
    //     //  console.log(newvolValue)
    //  })

