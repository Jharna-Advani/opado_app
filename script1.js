setTimeout(() => {
  console.log("hi");
  const footer = document.querySelector('footer');
  if (footer) {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    footer.appendChild(hiddenInput);
  }
}, 1000);
