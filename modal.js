// Añade este script antes del cierre del body
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.servicio-card');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtns = document.querySelectorAll('.close-modal');

    serviceCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const modalId = `modal${index + 1}`;
            document.getElementById(modalId).classList.add('active');
            overlay.classList.add('active');
        });
    });

    function closeModals() {
        modals.forEach(modal => modal.classList.remove('active'));
        overlay.classList.remove('active');
    }

    overlay.addEventListener('click', closeModals);
    closeBtns.forEach(btn => btn.addEventListener('click', closeModals));
});
