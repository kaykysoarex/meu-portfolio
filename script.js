document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const texts = ["Dev criativo", "Design Interativo", "Dev Front-End"];
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentText = texts[index];
        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        textElement.innerHTML = `Eu sou Kayky Bahia <br> <span class="dynamic">${currentText.substring(0, charIndex)}</span>`;

        if (!deleting && charIndex === currentText.length) {
            setTimeout(() => deleting = true, 2000);
        } else if (deleting && charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
});


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".roadmap-item");

    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.boxShadow = "0 0 25px #007bff";
        });

        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "0 0 10px #007bff";
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const roadmapItems = document.querySelectorAll(".roadmap-item");

    // Animação de entrada suave ao carregar a página
    roadmapItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        setTimeout(() => {
            item.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200); // Adiciona um pequeno delay entre os itens para um efeito em cascata
    });

    // Efeito de brilho ao passar o mouse
    roadmapItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.boxShadow = "0px 0px 15px #007bff";
            item.style.transform = "scale(1.05)"; // Aumenta um pouco o tamanho para dar destaque
        });

        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "none";
            item.style.transform = "scale(1)"; // Volta ao tamanho normal
        });

        // Efeito de pulsação ao clicar no item
        item.addEventListener("click", () => {
            item.style.animation = "pulse 0.3s ease-out";
            setTimeout(() => {
                item.style.animation = ""; // Remove a animação após a execução
            }, 300);
        });
    });
});

// Adicionando a animação de pulsação ao CSS via JavaScript
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(style);


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const header = document.querySelector("header");

    menuToggle.addEventListener("click", function () {
        header.classList.toggle("menu-open");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {  // Verifica se os elementos existem antes de adicionar eventos
        menuBtn.addEventListener("click", function () {
            menuBtn.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1000); // Simula um carregamento de 1 segundo
});


/*seçao tech*/
document.addEventListener("DOMContentLoaded", function () {
    const roadmapItems = document.querySelectorAll(".roadmap-item");
    const infoBox = document.getElementById("info-box");

    roadmapItems.forEach(item => {
        item.addEventListener("click", function () {
            const info = item.getAttribute("data-info");
            infoBox.textContent = info;
            infoBox.classList.remove("hidden");

            setTimeout(() => {
                infoBox.classList.add("hidden");
            }, 3000);
        });
    });
});

/*mapa-roadmeps*/


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Ajuste para não cobrir a seção
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
/*roadmep*/
document.addEventListener("DOMContentLoaded", function () {
    const roadmapItems = document.querySelectorAll(".roadmap-item");

    function showRoadmapItems() {
        roadmapItems.forEach((item) => {
            if (item.getBoundingClientRect().top < window.innerHeight * 0.8) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showRoadmapItems);
    showRoadmapItems(); // Chama a função ao carregar a página
});


/*para contato*/


document.querySelector(".form-contato").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});

/*seçao de contato*/
document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    const status = document.getElementById("mensagem-status");
  
    if (!nome || !email || !mensagem) {
      status.textContent = "Por favor, preencha todos os campos.";
      status.style.color = "orange";
      return;
    }
  
    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
    })
      .then((res) => res.text())
      .then((data) => {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "limegreen";
        this.reset();
        document.getElementById("contador-caracteres").textContent = "300 caracteres restantes";
      })
      .catch(() => {
        status.textContent = "Erro ao enviar. Tente novamente.";
        status.style.color = "red";
      });
  });
  
  function atualizarContador(textarea) {
    const restante = 300 - textarea.value.length;
    document.getElementById("contador-caracteres").textContent = `${restante} caracteres restantes`;
  }
  