document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('message').value;
    var sku = document.getElementById('sku').value;
    var phone = document.getElementById('phone').value;
    var imageUrl = document.getElementById('image-url').value;

    // Validasi nomor telepon (menghapus karakter non-numerik)
    var phoneNumber = phone.replace(/\D/g, '');

    if (phoneNumber.length < 10) {
        alert('Nomor telepon tidak valid!');
        return;
    }

    // Membuat pesan dengan format yang lebih rapi
    var formattedMessage = `*Pesan:*%0A${message}%0A%0A`;
    formattedMessage += `*SKU Produk:* ${sku}%0A`;

    // Menambahkan URL gambar jika ada
    if (imageUrl) {
        formattedMessage += `*Gambar Produk:*%0A${imageUrl}%0A`;
    }

    // Membuat URL WhatsApp yang bisa digunakan untuk mengirim pesan
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

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
