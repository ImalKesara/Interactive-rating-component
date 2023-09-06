const form = document.querySelector('form');
let one = document.querySelector('#one');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.radio.value == 'one') {
        console.log('one');
    } else if (form.radio.value == 'two') {
        console.log('two');
    } else if (form.radio.value == 'three') {
        console.log('three');
    } else if (form.radio.value == 'four') {
        console.log('four');
    } else {
        console.log('five')
    }
})