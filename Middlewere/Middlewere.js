// Middleware untuk memeriksa apakah pengguna sudah login
function isAuthenticated(req, res, next) {
    // Cek apakah ada 'userId' di session pengguna
    if (req.session.userId) {
        // Kalau ada 'userId', berarti pengguna sudah login, lanjutkan ke langkah berikutnya
        return next();
    } else {
        // Kalau 'userId' tidak ada, berarti pengguna belum login, arahkan ke halaman login
        res.redirect('/login');
    }
}

// Ekspor middleware isAuthenticated supaya bisa dipakai di tempat lain
module.exports = { isAuthenticated };
