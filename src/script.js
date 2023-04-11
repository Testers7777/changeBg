const c = document.querySelector('button');
const colors = {'st': 'white', 'nd': 'grey'};

c.addEventListener("click", () => {
  const a = document.querySelector('body');
  if (a.style.getPropertyValue('background-color') == colors.nd) {
    a.style.setProperty("background-color", colors.st);
  } else {
    a.style.setProperty("background-color", colors.nd);
  }
});
