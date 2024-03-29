let cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', (event) => {

        cards.forEach(singleCard => {
            singleCard.classList.remove('active')
        })

        event.target.classList.add('active')
    })
})




/*
    - transition is used to define the transition between different states of an element, it can be applied on one or 
    more properties of the element  
    - element.classList.remove to remove a class
    - element.classList.add to add a class
*/