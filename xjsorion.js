        function detectDevice() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            // Check if the user agent is a mobile device
            if (/android|iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
                // Redirect to the mobile version
                window.location.href = "http://m.yourwebsite.com/mobile.html";
            } else {
                // Stay on the desktop version
                window.location.href = "http://yourwebsite.com";
            }
        }

        // Call the function on page load
        window.onload = detectDevice;

    function openImageModal(image) {
        const modalImg = document.getElementById('modalImage');
        const imageModal = document.getElementById('imageModal');
        imageModal.style.display = "block";
        modalImg.src = image.src;
        document.body.classList.add('modal-open');
    }

    function closeImageModal() {
        const imageModal = document.getElementById('imageModal');
        imageModal.style.display = "none";
        document.body.classList.remove('modal-open');
    }