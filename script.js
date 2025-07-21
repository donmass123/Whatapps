document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var sku = document.getElementById('sku').value;
    var phone = document.getElementById('phone').value;

    // Validasi nomor telepon (menghapus karakter non-numerik)
    var phoneNumber = phone.replace(/\D/g, '');

    if (phoneNumber.length < 10) {
        alert('Nomor telepon tidak valid!');
        return;
    }

    // URL WhatsApp untuk mengirim pesan
    var message = `Nama: ${nama}%0ASKU Produk: ${sku}`;
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Menampilkan link WhatsApp yang dapat disalin
    document.getElementById('whatsapp-link').value = whatsappUrl;
    document.getElementById('link-container').style.display = 'block';
});

// Menambahkan fungsi untuk menyalin link
document.getElementById('copy-button').addEventListener('click', function() {
    var linkField = document.getElementById('whatsapp-link');
    linkField.select();
    document.execCommand('copy');
    alert('Link WhatsApp telah disalin!');
});
