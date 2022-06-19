import {Toast} from "bootstrap";

const createToast = (toastInner) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    document.getElementById('toast-container').innerHTML = "";
    const toastEl = document.getElementById('toast-container').appendChild(toast);
    toastEl.innerHTML = toastInner;
    new Toast(toastEl).show()
}

export const errorToast = (title, text) => createToast(`<div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#dc3545"></rect></svg><strong class="me-auto">${title}</strong><small>${new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})}</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">${text}</div>`)

export const successToast = (title, text) => createToast(`<div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#198754"></rect></svg><strong class="me-auto">${title}</strong><small>${new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})}</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">${text}</div>`)