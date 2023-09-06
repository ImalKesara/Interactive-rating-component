const form = document.querySelector('form');
let selected = document.querySelector('.selected');
let hidden = document.querySelector('.hidden');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.radio.value == 'one') {
        console.log('one');
        selected.innerHTML = `You selected 1 out 5`;
        hidden.classList.remove('hidden');
        hidden.classList.add('unhidden');

    } else if (form.radio.value == 'two') {
        console.log('two');
        selected.innerHTML = `You selected 2 out 5`;
        hidden.classList.remove('hidden');
        hidden.classList.add('unhidden');
    } else if (form.radio.value == 'three') {
        console.log('three');
        selected.innerHTML = `You selected 3 out 5`;
        hidden.classList.remove('hidden');
        hidden.classList.add('unhidden');
    } else if (form.radio.value == 'four') {
        console.log('four')
        selected.innerHTML = `You selected 4 out 5`;
        hidden.classList.remove('hidden');
        hidden.classList.add('unhidden');
    } else {
        console.log('five');
        selected.innerHTML = `You selected 5 out 5`;
        hidden.classList.remove('hidden');
        hidden.classList.add('unhidden');
    }
})