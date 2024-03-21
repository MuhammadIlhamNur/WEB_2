document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen checkbox untuk toggle menu
    var checkbox = document.getElementById('click');

    // Mendapatkan elemen menu yang ingin ditampilkan atau disembunyikan
    var menu = document.querySelector('.nav-links');

    // Mendapatkan elemen ikon menu
    var menuIcon = document.getElementById('menu');

    // Menambahkan event listener untuk klik pada ikon menu
    menuIcon.addEventListener('click', function() {
        // Jika menu tersembunyi, tampilkan
        if (!checkbox.checked) {
            checkbox.checked = true;
            menu.classList.add('show-menu');
        } else { // Jika menu ditampilkan, sembunyikan
            checkbox.checked = false;
            menu.classList.remove('show-menu');
        }
    });
});
function showNotification(message) {
    // Buat elemen notifikasi
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification');
    
    // Tambahkan elemen notifikasi ke dalam body
    document.body.appendChild(notification);

    // Hilangkan notifikasi setelah beberapa detik
    setTimeout(function() {
        notification.remove();
    }, 2000);
}