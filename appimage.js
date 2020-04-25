document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const myImage = document.querySelector('#beerImage')
    function getData(e) {
      e.preventDefault()
    
      fetch('https://api.punkapi.com/v2/beers/random')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
         console.log(data)
          const name = data[0].name
          const description = data[0].description
          const {volume} = data[0]
          const volumeValue = volume.value 
          const volumeUnit = volume.unit
          const imgUrl = data[0].image_url
          
          // const imagePath = 'https://images.punkapi.com/v2/'
          // const filename = imgUrl.substring(imgUrl.lastIndexOf('/')+1)
          // console.log(imagePath + filename);

          randomBeer.innerHTML = name + ' ' + volumeValue + ' ' + volumeUnit
          descriptionDisplay.innerHTML = description
          
          myImage.src = imgUrl
          
          // fetch(imagePath + filename)
          //   .then((response) => {
          //       return response.blob()
          //   })
          //   .then((images) => {
          //       console.log(images)
          //    myImage = URL.createObjectURL(images);
          //   })
        })
        .catch(err => {
          if (err.status === 404) {
            //myImage.src = "beer-icon.png"
            console.log("Did not find image")
          }

        });
        
        
    };
  
    startBtn.addEventListener('click', getData)
  
  })
  
  
  
  
  