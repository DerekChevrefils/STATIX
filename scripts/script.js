document.querySelector('video').playbackRate = 0.7;


function debounce(func, wait = 10, immediate = true) {
    var timeout
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      };
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

const container = document.querySelector('.container')

let height = 500

const getImageHeight = () => {
return height++
}


const images = document.querySelectorAll('.fade-object')


const handleScroll = e => {

const scrollBottom = window.innerHeight + window.scrollY
images.forEach( image => {

const offset = image.height / 8
const imageTopPosition = image.offsetTop 
const targetImageOffset = imageTopPosition + offset
 
  if (scrollBottom > targetImageOffset && !image.classList.contains('active')) {
    image.classList.add('active')
  }
  
})
}

document.addEventListener('scroll', debounce(handleScroll))