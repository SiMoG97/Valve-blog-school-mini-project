document.getElementById('burger-menu').addEventListener('click',()=>{
  document.getElementsByTagName('nav')[0].classList.toggle('displayToggle');
})

document.getElementById('burger-menu').addEventListener('click',()=>{
  document.getElementsByTagName('nav')[0].classList.add('opened');
  document.getElementsByTagName('nav')[0].classList.remove('closed');
})
document.getElementById('closeBtn').addEventListener('click',()=>{
  document.getElementsByTagName('nav')[0].classList.add('closed');
  document.getElementsByTagName('nav')[0].classList.remove('opened');
  document.getElementsByTagName('nav')[0].classList.add('displayToggle');
})