// Get modal elements
const vixModal = document.getElementById("vixModal");
const ayoshiModal = document.getElementById("ayoshiModal");
const rosaModal = document.getElementById("voidModal");

// Get button elements
const openVix = document.getElementById("vixbtn");
const openAyoshi = document.getElementById("ayoshibtn");
const openRosa = document.getElementById("voidbtn");

// Get close elements
const closeVix = document.getElementById("closeVix");
const closeAyoshi = document.getElementById("closeAyoshi");
const closeRosa = document.getElementById("closeVoid");

// Open modals
openVix.onclick = function() {
    vixModal.style.display = "block";
}

openAyoshi.onclick = function() {
    ayoshiModal.style.display = "block";
}

openRosa.onclick = function() {
    rosaModal.style.display = "block";
}

// Close modals
closeVix.onclick = function() {
    vixModal.style.display = "none";
}

closeAyoshi.onclick = function() {
    ayoshiModal.style.display = "none";
}

closeRosa.onclick = function() {
    rosaModal.style.display = "none";
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === vixModal) {
        vixModal.style.display = "none";
    } else if (event.target === ayoshiModal) {
        ayoshiModal.style.display = "none";
    } else if (event.target === voidModal) {
        rosaModal.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
