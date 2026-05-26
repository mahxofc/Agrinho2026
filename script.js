// CONTADOR ANIMADO

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 80;

    if (current < target) {

      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 25);

    } else {

      counter.innerText = target + "%";
    }
  };

  updateCounter();
});

// FORMULÁRIO

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  message.innerHTML =
    "✅ Mensagem enviada com sucesso! Obrigado pelo contato.";

  form.reset();
});
