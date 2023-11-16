const addButtons = document.querySelectorAll('.add');
const subtractButtons = document.querySelectorAll('.subtract');
const quantityInputs = document.querySelectorAll('.quantity');

addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      quantityInputs[index].value = Number(quantityInputs[index].value) + 1;
    });
  });
  
  subtractButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (quantityInputs[index].value > 0) {
        quantityInputs[index].value = Number(quantityInputs[index].value) - 1;
      }
    });
  });
