//impor expres
import Express from "express";

//init expres routher
const router = express.Routher()

//basic route
router.get('/biodata/:Nama/:Tempat_Lahir/:Tanggal_Lahir/:Jenis_Kelamin/:Agama/:Alamat/:Telepon/:Email/:Hobi/:cita_cita',(req,res) => {
    var nama = req.params.Nama;
    var Tempat = req.params.Tempat_Lahir;
    var tanggal= req.params.Tanggal_Lahir;
    var jk = req.params.Jenis_Kelamin;
    var agama = req.params.Agama;
    var alamat = req.params.Alamat;
    var telpon = req.params.Telepon;
    var email = req.params.Email;
    var hobi = req.params.Hobi;
    var cita = req.params.cita_cita

    res.send(
        'Nama :' + nama + '<br>' +
        'Tempat Lahir :' + Tempat + '<br>' + 
        'Tanggal Lahir :' + tanggal + '<br>' +
        'Jenis kelamin :' + jk + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat :' + alamat + '<br>' +
        'Telpon :' + telpon + '<br>' +
        'Email : :' + email + '<br>' +
        'Hobi :' + hobi + '<br>' +
        'Cita-Cita :' + cita + '<br>'
    );
});



router.get('/aritmatika', (req,res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var jumlah1  = bilangan1 + bilangan2;

    var bilangan3 = 15;
    var bilangan4 = 10;
    var jumlah2 = bilangan3 - bilangan4;

    var bilangan5 = 25;
    var bilangan6 = 5;
    var jumlah3 = bilangan5 / bilangan6;

    var bilangan7 = 5
    var bilangan8 = 5
    var jumlah4 = bilangan7 * bilangan8;

    res.send(
        '<h3>Penjumlahan</h3>' + 
        'bilangan ke 1 =' + bilangan1 + '<br>' +
        'bilangan ke 2 =' + bilangan2 + '<br>' +
        'hasil =' + jumlah1 + '<hr>'+

        '<h3>pengurangan</h3>' +
        'bilangan ke 3 =' + bilangan3 + '<br>' +
        'bilangan ke 4 =' + bilangan4 + '<br>' +
        "hasil =" + jumlah2 + "<hr>" +

        '<h3>pembagian</h3>' +
        'bilangan ke 5 =' + bilangan5 + '<br>' +
        'bilangan ke 6 =' + bilangan6 + '<br>' +
        "hasil =" + jumlah3 + "<hr>" +

        '<h3>Perkalian</h3>' +
        'bilangan ke 7 =' + bilangan7 + '<br>' +
        'bilangan ke 8 =' + bilangan8 + '<br>' +
        "hasil =" + jumlah4 + "<hr>"
    );
});

router.get('/bangun_datar', (req,res) => {
    var sisi = 5;
    var panjang = 15;
    var lebar = 10;
    var alas = 15;
    var tinggi = 20;
    var v = 3.14;
    var jari_jari = 6;

    var persegi = sisi * sisi;
    var persegipanjang = panjang * lebar;
    var segitiga = alas * tinggi;
    var lingkaran = v * jari_jari;

    res.send(
        '<h3>rumus persegi</h3>' +
        'sisi * sisi =' + '<br>' +
        sisi +  '*'  +sisi + '=' + persegi + '<hr>'+
        
        '<h3>rumus persegi panjang</h3>' +
        'panjang:' + panjang + '<br>' +
        'lebar:' + lebar + '<br>' +
        'luas:' + persegipanjang + '<hr>' +

        '<h3>rumus segitiga</h3>' +
        'alas:' + alas + '<br>' +
        'tinggi:' + tinggi + '<br>'+
        'hasil:' + segitiga + '<hr>' +

        '<h3>lingkaran</h3>' +
        'v x jari-jari <br>' +
        'v:' + v + '<br>' +
        'jari-jari:'  + jari_jari + '<br>'+
        'hasil:' + lingkaran+'<br>'

    )
});


router.get('/tes/:nama/:kelas/:pts/:pas', (req,res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas)/2;

    if (rapot >= 90 && rapot <=100) {
        var grade = "Grade A"
    }else if (rapot >= 80) {
        var grade = "Grade B"
    }else if (rapot >= 70) {
        var grade = "Grade C"
    }else if (rapot >= 60) {
        var grade = "Grade D"
    }else if (rapot >= 50) {
        var grade = "Grade E "
    }else if (rapot >= 0) {
        var grade = "<h1>Belajar Lebih Giat!!!!!!!!!"
    } else { 
        var grade = "NIlai Tidak Valid"
    };

    res.send(
        'Nama :' + nama + '<br>' +
        'Kelas :' + kelas + '<br>' +
        'Nilai PTS :' + pts + '<br>' +
        'Nilai PAS :' + pas + '<br>' +
        'Nilai Rapot :' + rapot + '<br>' +
        'Keterangan :' + grade
    );
});


router.get('/bersarang/:nama/:jurusan/:kelas',(req,res) => {
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = "Anda Kelas 10 RPL"
        } else if (kelas == '11 RPL') {
            var ket = "Anda Kelas 11 RPL"
        } else if (kelas == '12 RPL') {
            var ket = "Anda Kelas 12 RPL"
        } else {
            var ket =  "Anda Alumni Cuyyyy!"
        }

    } else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = "Anda Kelas 10 TKRO"
        } else if (kelas == '11 TKRO') {
            var ket = "Anda Kelas 11 TKRO"
        } else if (kelas == '12 TKRO') {
            var ket = "Anda Kelas 12 TKRO"
        } else {
            var ket =  "Anda Alumni Cuyyyy!"
        }
    } else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = "Anda Kelas 10 TBSM"
        } else if (kelas == '11 TBSM') {
            var ket = "Anda Kelas 11 TKRO"
        } else if (kelas == '12 TBSM') {
            var ket = "Anda Kelas 12 TBSM"
        } else {
            var ket =  "Anda Alumni Cuyyyy!"
        }
    } else {
        var ket = "jurusan tidak tersedia";
    }

    res.send(
        'Nama : <\h>' + nama + '<br>' +
        'Jurusan : <\h>' + ket
    )
})

//latihan
router.get('/latihan/:pembeli/:tanggal/:jenis/:pesanan/:jumlah', (req,res) => {
    var pembeli = req.params.pembeli;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;

    if (jenis == 'makanan') {
        if (pesanan == 'nasi goreng') {
            var harga = "20000";
        } else if (pesanan == 'mie goreng') {
            var harga = "30000";
        } else if (pesanan == 'ayam goreng') {
            var harga = "40000";
        }  else {
            var harga = "menu tidak tersedia";
        }
    }
    if (jenis == 'minuman') {
        if (pesanan == 'air mineral') {
            var harga = "10000";
        } else if (pesanan == 'jus') {
            var harga = "20000" ;
        } else if (pesanan == 'kopi') {
            var harga = "30000";
        } else {
            var harga = "menu tidak tersedia";
        };
    }

    var total = jumlah * harga;
    //diskon
    if (total >= 100000) {
        var diskon = total * 0.5;
    } else {
        var diskon = 0
    }
    //---
    var total_bayar = total - diskon;

    res.send(
        'Nama Pembeli : <\h>' + pembeli + '<br>' +
        'Tanggal : <\h>' + tanggal + '<br>' +
        'Jenis : <\h>' + jenis + '<br>' +
        'Pesanan : <\h>' + pesanan + '<br>' +
        'Harga : <\h>' + harga + '<br>' +
        'Jumlah : <\h>' + jumlah + '<br>' + 
        '------------------------------------' + '<br>' +
    
        'Total : <\h>' + total + '<br>' +
        'Diskon 50% : <\h>' + diskon + '<br>' +
        'Total Pembayaran : <\h>' + total_bayar + '<br>' +
        '------------------------------------' + '<br>' +
        '>>> TERIMA KASIH <<<'
    );
});

router.get('/latihan/:pembeli/:tanggal/:jenis/:pesanan/:jumlah', (req,res) => {
    
    res.send(
        'hallo'
    );
});



//export defult router
export default router;
