
document.querySelector('#hire').addEventListener('click', function (e) {
    e.target.textContent = 'Please enter your name' 
    let form = document.createElement('input')
    document.querySelector('#hope').appendChild(form)

    let b = document.createElement('button')
    b.textContent = 'submit'
    document.querySelector('#hope').appendChild(b)

    b.addEventListener('click', function (e) {
        e.target.remove()
        form.remove()
        document.querySelector('#hire').remove()

        if (form.value != 'Ashraf') {
            let p = document.createElement('p')
            p.textContent = `Hello ${form.value}. What kind of a website do you need`
            document.querySelector('#hope').appendChild(p)
        } else {
            let p = document.createElement('p')
            p.textContent = 'This is the designer of this website'
            document.querySelector('#hsection').appendChild(p)
        }
        

        let p = document.createElement('input')
        p.setAttribute('placeholder', 'Web type')
        document.querySelector('#hope').appendChild(p)

        let b = document.createElement('button')
        b.textContent = 'submit'
        document.querySelector('#hope').appendChild(b)
        b.addEventListener('click', function (e) {
            e.target.remove()
            p.remove()
            let p2 = document.createElement('p')
            p2.textContent = 'Thank you for choosing me, your website will be done by next month'
            document.querySelector('#hsection').appendChild(p2)

        }) 

    })
   
})
