const uiCreation = ({title, image, description}) => {
    // console.log(data, "==>> uiCreation function")

    // const {title, image, description} = data

    console.log(title, image, description, "===>> destructure")

    const imageUi = document.querySelector('#image')
    const cardTitle = document.querySelector('.card-title')
    const cardText = document.querySelector('.card-text')




    console.log(cardTitle, "==>>cardTitle in uiCreation")
    console.log(imageUi, "==>>image in uiCreation")
    // imageUi.src = data.image
    imageUi.src = image
    // cardTitle.textContent = data.title
    cardTitle.textContent = title
    // cardText.textContent = data.description
    cardText.textContent = description

}


const getCountryData = (num) => {
    fetch(`https://fakestoreapi.com/products/${num}`)
        .then(function (response) {
            console.log(response, "==>> response of fetch")
            return response.json()
        }).then(function(data){
            console.log(data, "==>> my data as json")
            uiCreation(data)
        })
}

getCountryData(1)


const getAllProducts = () => {
    fetch(`https://fakestoreapi.com/products/`)
        .then(resp => resp.json())
        .then(data => console.log(data, "==>>allProducts"))
}

getAllProducts()