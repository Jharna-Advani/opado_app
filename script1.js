console.log("hi");
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('footer');
  if (footer) {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    footer.appendChild(hiddenInput);
  }
});
