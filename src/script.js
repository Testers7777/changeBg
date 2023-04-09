const c = document.querySelect('button');
const colors = {'st': 'white', 'nd': 'grey'};

c.addEventListener("click", () => {
  const a = document.querySelector('body');
  if (document.getElementById('body').className == colors['nd']) {
    a.style.setProperty("background-color", colors['st']);
    a.setAttribute("class", colors['st']);
  } else {
    a.style.setProperty("background-color", colors['nd']);
    a.setAttribute("class", colors['nd']);
  }
});
