document.head.style.background="red"
 console.log(document.body.firstChild)
 console.log(document.body.lastChild)
 console.log(document.body.nextSibling)
 console.log(document.body.previousSibling)//text
//parent
console.log(document.body.parentNode)//html
//or
console.log(document.body.parentElement) // html

console.log(document.hasChildNodes())
//in order to not get text nodes we use following
console.log(document.body.previousElementSibling)//head
console.log(document.body.nextElementSibling)
console.log(document.body.firstElementChild)//nav
console.log(document.body.lastElementChild)//script

    