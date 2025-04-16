document.getElementById('peminjaman-form').addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const kelas = document.getElementById('kelas').value.trim();
    const judul = document.getElementById('judul').value.trim();
    const pinjam = document.getElementById('pinjam').value.trim();
    const kembali = document.getElementById('kembali').value.trim();

    if (name === "" || kelas === "" || judul === "" || pinjam === "" || kembali === "") {
        alert("⚠️ Harap isi semua kolom!");
        return;
    }
    alert(`Terima kasih, ${name}. Anda berhasil melakukan peminjaman buku.`);
    this.reset(); 
});