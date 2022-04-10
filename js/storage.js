document.addEventListener('DOMContentLoaded', function() {
    var $key = $('.input-up')
    $('.input-up').blur(function() {
        localStorage.setItem('student', $key[0].value)
        localStorage.setItem('address', $key[1].value)
        localStorage.setItem('location', $key[2].value)
    })
    if (localStorage.getItem('student') || localStorage.getItem('address') || localStorage.getItem('location')) {
        $key[0].value = localStorage.getItem('student')
        $key[1].value = localStorage.getItem('address')
        $key[2].value = localStorage.getItem('location')
    }
})