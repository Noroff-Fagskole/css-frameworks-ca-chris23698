const userTemplate = document.querySelector("[user-template]")
const userCardContainer = document.querySelector("[user-card-container]")
const searchInput = document.querySelector("[user-search]")

let users = []

searchInput.addEventListener("input", e => {
    const Value = e.target.Value.toLowerCase()
    users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://nf-api.onrender.com/api/v1/social/profiles/author")
.then(res => res.json()).then
(data => {
    users = data.map(user => {
        const card = userTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[user-header]")
    const body = card.querySelector("[user-body]")
    header.textContent = user.name
    body.textContent = user.email
    userCardContainer.append(card)
    return {name: user.name, email: user,email, element: card}
    })
})