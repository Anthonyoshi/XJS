// Get modal elements
const vixModal = document.getElementById("vixModal");
const ayoshiModal = document.getElementById("ayoshiModal");
const rosaModal = document.getElementById("rosaModal");
const imageModal = document.getElementById("imageModal");

// Get button elements
const openVix = document.getElementById("vixbtn");
const openAyoshi = document.getElementById("ayoshibtn");
const openRosa = document.getElementById("rosabtn");

// Get close elements
const closeVix = document.getElementById("closeVix");
const closeAyoshi = document.getElementById("closeAyoshi");
const closeRosa = document.getElementById("closeRosa");
const closeImage = imageModal.querySelector(".close");

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

closeImage.onclick = function() {
    imageModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === vixModal) {
        vixModal.style.display = "none";
    } else if (event.target === ayoshiModal) {
        ayoshiModal.style.display = "none";
    } else if (event.target === rosaModal) {
        rosaModal.style.display = "none";
    } else if (event.target === imageModal) {
        imageModal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function scrollLeft() {
    const gallery = document.querySelector('.gallery');
    gallery.scrollBy({
        left: -gallery.clientWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const gallery = document.querySelector('.gallery');
    gallery.scrollBy({
        left: gallery.clientWidth,
        behavior: 'smooth'
    });
}

function openImageModal(image) {
    const modalImg = document.getElementById('modalImage');
    imageModal.style.display = "block";
    modalImg.src = image.src;
    document.body.classList.add('modal-open');
}

function closeImageModal() {
    imageModal.style.display = "none";
    document.body.classList.remove('modal-open');
}
