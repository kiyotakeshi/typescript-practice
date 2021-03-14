// button はあるので ! で null でないと伝える
const button = document.querySelector('button')!;

button?.addEventListener('click', () => {
    console.log('click');
});
