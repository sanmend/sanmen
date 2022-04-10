document.addEventListener('DOMContentLoaded', function() {
    var box = document.querySelector('.login-box')
    console.log(box);
    setTimeout(function() {
        box.style.transform = 'rotateY(-150deg)'
    }, 300)
    setTimeout(function() {
        box.style.transform = 'rotateY(0deg)'
    }, 1000)
    var ipt = document.querySelectorAll('.input-up')
    for (var i = 0; i < ipt.length; i++) {
        ipt[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(237, 236, 236, 0.1)'
            this.style.borderRadius = '5px'
        })
        ipt[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent'
            this.style.borderRadius = '2px'
        })
    }
})