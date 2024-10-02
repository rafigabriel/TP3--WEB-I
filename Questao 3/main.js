const select = document.querySelector('.cores');
const body = document.querySelector('.body');

select.addEventListener('change', (event) => {
  const color = event.target.value;
  switch (color) {
    case 'vermelho':
      body.style.color = 'red';
      break;
    case 'verde':
      body.style.color = 'green';
      break;
    case 'azul':
      body.style.color = 'blue';
      break;
    case 'amarelo':
      body.style.color = 'yellow';
      break;
    case 'roxo':
      body.style.color = 'purple';
      break;
    default:
      body.style.color = 'black';
  }
});