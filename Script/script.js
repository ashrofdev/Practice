let navList = [{
    text: 'home'
}, {
    text: 'hire me'
}, {
    text: 'about us'
}, {
    text: 'contact us'
}, {
    text: 'report a problem'
}, {
    text: 'work with us'
}, {
    text: 'join the team'
}, {
    text: 'view previous projects'
}, {
    text: 'request for our services'
}]

let filters = {
    searchText: ''
}

let renderNavList = function (navList, filters) {
    let filteredNavList = navList.filter(function (list) {
    return list.text.includes(filters.searchText)
    })

    document.querySelector('#position').innerHTML = ''

    filteredNavList.forEach(function (list) {
        let content = document.createElement('p')
        content.textContent = list.text
        document.querySelector('#position').appendChild(content)
    })
}


document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNavList(navList, filters)
})
