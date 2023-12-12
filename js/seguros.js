const btn = document.querySelectorAll('button')
const content = document.querySelectorAll('dd')

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(content[index].style.display ==='none' || content[index].style.display === ''){
            content.forEach(content => content.style.display = 'none')//nao permite que mais de um esteja selecionado
            content[index].style.display = 'block'
        }else {
            content[index].style.display = 'none'
        }
    })
})
