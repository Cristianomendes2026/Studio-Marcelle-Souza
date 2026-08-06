// =========================
// STUDIO MARCELLE SOUZA
// script.js
// =========================

// Menu Mobile (Hambúrguer)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });
  }
});

// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Animação ao aparecer na tela
const elementos = document.querySelectorAll(".card, .foto, section");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Studio Marcelle Souza carregado com sucesso!");
});

// Botão Voltar ao Topo
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "30px";
botaoTopo.style.right = "30px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#b88a56";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "24px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
botaoTopo.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ========================== LIGHTBOX ==========================
const lightbox = document.getElementById('lightbox');
const imagemLightbox = document.getElementById('imagemLightbox');
const fotosGaleria = document.querySelectorAll('.galeria img');

if (lightbox && imagemLightbox && fotosGaleria.length > 0) {
  fotosGaleria.forEach(foto => {
    foto.addEventListener('click', () => {
      imagemLightbox.src = foto.src;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}
