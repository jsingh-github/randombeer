

// function multipleby2(num) {
//     return num * 2;
// }

// console.log(multipleby2(4));

const pressBtn = document.getElementById('btn1')
pressBtn.addEventListener('click', changebg);

function changebg () {
alert(' someone clicked me')
}

document.addEventListener('DOMContentLoaded', () => {

    fetch('https://api.punkapi.com/v2/beers/random ')
     .then(response => {
         return response.json()
     })
     .then(data => {
         console.log(data)
         const name = data[0].name
         const description = data[0].description
         const {volume} = data[0]
         const volumeValue = volume.value 
         const volumeUnit = volume.unit 
        //  const newvolValue = data[0].volume.value
        //  console.log(volumeValue)
        //  console.log(newvolValue)
     })

})