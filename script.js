import Generator from './generator';

window.addEventListener('DOMContentLoaded', () => {

    const result = document.querySelector('.result'),
          btn = document.querySelector('.generate'),
          symbols = document.querySelector('.symbols');

    symbols.addEventListener('input', e => {
        if (+e.target.value <= 0 || +e.target.value > 30) {
            symbols.style.background = 'red';
        } else {
            symbols.style.background = '';
        }
    });

    btn.addEventListener('click', e => {
        e.preventDefault();

        result.textContent = '...wait';

        setTimeout(() => {
            if (+symbols.value > 0 && +symbols.value <= 30) {
                result.textContent = Generator(+symbols.value);
            } else {
                result.textContent = '...oops, you want a lot of symbols!';
            }
        }, 0);
    });

});