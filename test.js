buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    data.push(parseInt(event.target.textContent));
  });
});
