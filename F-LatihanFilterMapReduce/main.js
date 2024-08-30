// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLnjt = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 10:29 -> [10, 29]
        const parts = waktu.split(':')
            .map(part => parseFloat(part));

        return parts[0] * 60 + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLnjt / 3600);
jsLnjt = jsLnjt - jam * 3600
const menit = Math.floor(jsLnjt / 60);
const detik = jsLnjt - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`
const jmlhVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = `Jumlah Video: ${jmlhVideo} video`;