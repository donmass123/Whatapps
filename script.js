document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('message').value;
    var sku = document.getElementById('sku').value;
    var phone = document.getElementById('phone').value;
    var imageUrl = document.getElementById('image-url').value;
    var question = document.getElementById('question').value;  // Ambil nilai dari input pertanyaan

    // Validasi nomor telepon (menghapus karakter non-numerik)
    var phoneNumber = phone.replace(/\D/g, '');

    if (phoneNumber.length < 10) {
        alert('Nomor telepon tidak valid!');
        return;
    }

    // Menentukan ucapan selamat sesuai jam
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Selamat Pagi!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Selamat Siang!";
    } else if (hour >= 17 && hour < 19) {
        greeting = "Selamat Sore!";
    } else {
        greeting = "Selamat Malam!";
    }

    // Membuat pesan dengan format yang lebih rapi
    var formattedMessage = `%0A${greeting}%0A%0A${message}%0A%0A`;
    formattedMessage += `*SKU Produk:* ${sku}%0A`;

    // Menambahkan URL gambar jika ada
    if (imageUrl) {
        formattedMessage += `*Gambar Produk:*%0A${imageUrl}%0A`;
    }

    // Menambahkan pertanyaan jika ada
    if (question) {
        formattedMessage += `%0A${question}%0A`;
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
