document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("li").forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200);
    });
});
// Alterna entre o modo claro e escuro e altera o ícone do botão
document.getElementById("toggleTheme").addEventListener("click", () => {
    // Alterna a classe dark-mode no body
    document.body.classList.toggle("dark-mode");

    // Altera o ícone do botão com base no tema
    const button = document.getElementById("toggleTheme");
    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "🌞"; // Sol para modo claro
    } else {
        button.innerHTML = "🌙"; // Lua para modo escuro
    }

    // Salva a preferência no navegador
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Verifica o tema salvo ao carregar a página
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("toggleTheme").innerHTML = "🌞"; // Se o tema for escuro, já mostra o sol
    }
};

// Efeito de escala no clique dos links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        // Aplica o efeito de escala no clique
        e.target.style.transform = "scale(1.1)";
        
        // Restaura a escala após 200ms
        setTimeout(() => {
            e.target.style.transform = "scale(1)";
        }, 200);
    });
});
