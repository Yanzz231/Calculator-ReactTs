import Swal from 'sweetalert2'

export const message = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}
