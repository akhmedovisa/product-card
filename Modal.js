// Задание 4

class Modal {
  constructor(modalId, overlayId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById(overlayId);
    this.closeBtn = this.modal.querySelector('#closeModalBtn');
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.style.display = 'block';
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.style.display = 'none';
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}

export default Modal;