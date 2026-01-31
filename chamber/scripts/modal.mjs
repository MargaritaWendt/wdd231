
const modalLinks = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close-modal');

  modalLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const modalId = link.dataset.modal;
            document.getElementById(modalId).showModal();
        });
  });

  closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('dialog').close();
        });
  });

