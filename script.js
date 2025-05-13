const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

let active = 0;
/* total de itens */
const total = items.length;
/* timer para passar para o próximo items */
let timer;

/* função para atualizar a direção */
function update(direction) {
  /* Pega da classe items e active e remove active */
  document.querySelector(".item.active").classList.remove("active");
  /* Pega da classe dot e active e remove active */
  document.querySelector(".dot.active").classList.remove("active");

  /* Verifica a direção */
  /* Direção next */
  if (direction > 0) {
    active++;
    if (active === total) {
      active = 0;
    }
    /* Direção prev */
  } else if (direction < 0) {
    active--;
    if (active < 0) {
      active = total - 1;
    }
  }

  /* Adiciona active em items e dots */
  items[active].classList.add("active");
  dots[active].classList.add("active");

  /* Atualiza o número de itens */
  numberIndicator.innerHTML = `${active + 1} / ${total}`;
}

/* Botão de anterior */
prevButton.addEventListener("click", () => {
  update(-1);
});

/* Botão de próximo */
nextButton.addEventListener("click", () => {
  update(1);
});

/* Troca por intervalo de tempo */
clearInterval(timer);
timer = setInterval(() => {
  update(1);
}, 5000);
