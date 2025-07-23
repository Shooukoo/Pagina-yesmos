let index = 0;

function moveSlide(step) {
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    
    index += step;

    if (index < 0) index = totalItems - 1;
    if (index >= totalItems) index = 0;

    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
}

function createIndicators() {
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const totalItems = document.querySelectorAll(".carousel-item").length;

    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement("span");
        indicator.setAttribute("data-index", i);
        indicator.addEventListener("click", () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    updateIndicators();
}

function goToSlide(slideIndex) {
    index = slideIndex;
    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll(".carousel-indicators span");
    indicators.forEach(indicator => indicator.classList.remove("active"));
    indicators[index].classList.add("active");
}

// Inicializar carrusel
createIndicators();

function showCard(cardId) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    document.getElementById(cardId).classList.add('active');
    
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showCard('${cardId}')"]`).classList.add('active');
}