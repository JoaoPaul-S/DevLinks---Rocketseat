function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('.profile img')

    if (html.classList.contains('light')){
       img.setAttribute('src', 'assets/assets/avatar-light.png')
       img.setAttribute('alt', 'Mayk Brito de oculos escuro, jaqueta marrom, cabelo espetado em fundo gradiente')
   } else{
     img.setAttribute('src', 'assets/assets/avatar.png')
     img.setAttribute('alt', 'Mayk Brito usando camisa preta, de oculos, barba e fundo laranja')
   }
}