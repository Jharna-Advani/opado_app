console.log("opado script");
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('footer');
  if (footer) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    footer.appendChild(paragraph);
  }
});
