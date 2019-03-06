
document.querySelector('#para').addEventListener('click', function (e) {
    let reverse = document.querySelector('#para')
    reverse.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vero exercitationem rem neque sunt facere consectetur ducimus, ea doloribus debitis temporibus officiis quis  amet consectetur adipisicing elit. Expedita vero exercitationem rem neque sunt facere consectetur ducimus, ea doloribus debitis temporibus officiis quis. Atque possimus ctetur adipisicing elit. Expedita vero exercitationem rem neque sunt facere consectetur ducimus, ea doloribus debitis temporibus officiis quis  amet consectetur adipisicing elit. Expedita vero exercitationem rem neque sunt facere consectetur ducimus, ea doloribus debitis temporibus officiis quis. Atque possimus iste corrupti nemo debitis repellat '
})
document.querySelector('#read-more').addEventListener('click', function (e) {
    let story = document.querySelector('#para')
    story.textContent = 'I added this paragraph to this section using javascript'
    e.target.textContent = 'Back'

    let comment = document.querySelector('#comment')
    comment.textContent = 'A trial will convince you'

})
document.querySelector('#read-more').addEventListener('click', function (e) {
    document.querySelector('#it').innerHTML = '<img src="img/about.jpg">'
})
