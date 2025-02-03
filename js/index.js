let btnsi = document.getElementById("btn-si");
let btnno = document.getElementById("btn-no");

btnsi.addEventListener("click", () => {
    window.location.href = "pages/aceptaste.html";
    console.log("sabia que dirías que si jeje")
});


btnno.addEventListener("mouseenter", () => {
    // Obtener dimensiones de la ventana
    let maxWidth = window.innerWidth - btnno.offsetWidth;
    let maxHeight = window.innerHeight - btnno.offsetHeight;

    // Generar nuevas posiciones aleatorias
    let newX = Math.random() * maxWidth;
    let newY = Math.random() * maxHeight;

    // Aplicar las nuevas posiciones
    btnno.style.position = "absolute";
    btnno.style.left = `${newX}px`;
    btnno.style.top = `${newY}px`;
});