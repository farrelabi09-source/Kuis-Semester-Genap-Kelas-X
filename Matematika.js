// --- 📚 DATA KUIS MATEMATIKA ---
subjects.push({
    id: 'mtk',
    name: 'Matematika', 
    icon: 'ph-math-operations', 
    color: 'text-blue-500 dark:text-blue-400'
});

quizData['mtk'] = [
    // --- PILIHAN GANDA BIASA ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang pengamat melihat puncak tiang bendera dengan sudut elevasi 45&deg;. Jika jarak pengamat ke tiang adalah 10 meter dan tinggi pengamat 1,5 meter, maka tinggi tiang bendera tersebut adalah...",
        options: ["10 meter", "11,5 meter", "10&radic;2 meter", "11,5&radic;2 meter", "15 meter"],
        answer: 1,
        explanation: "Gunakan tangen. Tinggi tiang = tinggi pengamat + (jarak &times; tan 45&deg;). h = 1,5 + (10 &times; 1) = 11,5 meter."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Dua buah dadu setimbang dilempar undi bersama-sama satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
        options: ["1/36", "3/36", "5/36", "7/36", "1/6"],
        answer: 2,
        explanation: "Ruang sampel pelemparan 2 dadu = 36. Kombinasi berjumlah 8 adalah (2,6), (3,5), (4,4), (5,3), (6,2). Total ada 5 kejadian. Maka peluangnya 5/36."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Nilai rata-rata ulangan matematika dari 10 siswa adalah 75. Jika nilai Andi dimasukkan, nilai rata-ratanya berubah menjadi 76. Berapakah nilai Andi?",
        options: ["76", "80", "82", "86", "90"],
        answer: 3,
        explanation: "Total nilai awal = 10 &times; 75 = 750. Total nilai akhir (11 siswa) = 11 &times; 76 = 836. Nilai Andi = 836 - 750 = 86."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Jika akar-akar persamaan x<sup>2</sup> - 3x + 2 = 0 adalah &alpha; dan &beta;, maka persamaan kuadrat baru yang akar-akarnya (&alpha; + 2) dan (&beta; + 2) adalah...",
        options: [
            "x<sup>2</sup> - 7x + 12 = 0", 
            "x<sup>2</sup> + 7x + 12 = 0", 
            "x<sup>2</sup> - 5x + 10 = 0", 
            "x<sup>2</sup> - 7x - 12 = 0", 
            "x<sup>2</sup> + 5x - 10 = 0"
        ],
        answer: 0,
        explanation: "Dari persamaan awal, jumlah akar lama &alpha; + &beta; = 3 dan kali akar lama &alpha;&beta; = 2.<br>Akar baru: X<sub>1</sub> = &alpha; + 2 dan X<sub>2</sub> = &beta; + 2.<br>Jumlah akar baru = (&alpha;+2) + (&beta;+2) = &alpha;+&beta;+4 = 3+4 = 7.<br>Kali akar baru = (&alpha;+2)(&beta;+2) = &alpha;&beta; + 2(&alpha;+&beta;) + 4 = 2 + 2(3) + 4 = 12.<br>Rumus persamaan baru: x<sup>2</sup> - (jumlah)x + (kali) = 0 &rarr; x<sup>2</sup> - 7x + 12 = 0."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sebuah segitiga ABC diketahui panjang sisi a = 10 cm, b = 12 cm, dan sudut diapit (sudut C) sebesar 150&deg;. Luas segitiga tersebut adalah...",
        options: ["30 cm<sup>2</sup>", "30&radic;3 cm<sup>2</sup>", "60 cm<sup>2</sup>", "60&radic;3 cm<sup>2</sup>", "120 cm<sup>2</sup>"],
        answer: 0,
        explanation: "Luas = 1/2 &middot; a &middot; b &middot; sin C.<br>Luas = 1/2 &times; 10 &times; 12 &times; sin 150&deg;.<br>Karena sin 150&deg; = 1/2, maka Luas = 1/2 &times; 120 &times; 1/2 = 30 cm<sup>2</sup>."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ragam (Varians) dari data populasi tunggal: 2, 4, 6, 8 adalah...",
        options: ["2", "3", "4", "5", "6"],
        answer: 3,
        explanation: "Rata-rata = (2+4+6+8)/4 = 5.<br>Varians = [(2-5)<sup>2</sup> + (4-5)<sup>2</sup> + (6-5)<sup>2</sup> + (8-5)<sup>2</sup>] / 4<br>= (9+1+1+9) / 4 = 20 / 4 = 5."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Lintasan sebuah kembang api yang ditembakkan ke atas dinyatakan oleh persamaan h(t) = 40t - 5t<sup>2</sup> (h dalam meter, t dalam detik). Tinggi maksimum yang dapat dicapai kembang api tersebut adalah...",
        options: ["20 meter", "40 meter", "60 meter", "80 meter", "100 meter"],
        answer: 3,
        explanation: "Tinggi maksimum adalah nilai optimum (y<sub>p</sub>) grafik parabola. Titik puncak t = -b/(2a) = -40 / 2(-5) = 4 detik.<br>Substitusi t=4 ke persamaan: h(4) = 40(4) - 5(4<sup>2</sup>) = 160 - 80 = 80 meter."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Diketahui segitiga PQR dengan panjang sisi p = 10, sisi q = 10&radic;2, dan besar sudut P = 30&deg;. Besar sudut Q pada segitiga tersebut adalah...",
        options: ["45&deg;", "60&deg;", "90&deg;", "120&deg;", "150&deg;"],
        answer: 0,
        explanation: "Gunakan Aturan Sinus. p/sin P = q/sin Q &rarr; 10/sin 30&deg; = 10&radic;2/sin Q.<br>10/0,5 = 10&radic;2/sin Q &rarr; 20 = 10&radic;2/sin Q.<br>sin Q = 10&radic;2 / 20 = (1/2)&radic;2. Maka sudut Q = 45&deg;."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Modus dari distribusi frekuensi berat badan siswa yang kelas modusnya berada di rentang 40-44 dengan frekuensi 12, frekuensi kelas sebelumnya 8, dan frekuensi kelas sesudahnya 6 adalah...",
        options: ["41,5", "42,1", "42,5", "43,1", "44,0"],
        answer: 0,
        explanation: "Tepi bawah (Tb) kelas modus = 40 - 0,5 = 39,5. Panjang kelas (p) = 5.<br>d<sub>1</sub> = 12 - 8 = 4.<br>d<sub>2</sub> = 12 - 6 = 6.<br>Rumus Modus = Tb + [d<sub>1</sub> / (d<sub>1</sub>+d<sub>2</sub>)] &times; p = 39,5 + (4/10) &times; 5 = 39,5 + 2 = 41,5."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Di dalam kotak tertutup terdapat 4 kelereng merah dan 3 kelereng putih. Jika diambil 2 kelereng secara acak sekaligus, peluang terambilnya keduanya kelereng merah adalah...",
        options: ["2/7", "3/7", "4/7", "6/21", "Opsi A dan D benar karena bernilai ekuivalen."],
        answer: 4,
        explanation: "Banyak cara ambil 2 kelereng merah dari 4 = <sub>4</sub>C<sub>2</sub> = 6.<br>Total ruang sampel ambil 2 dari 7 = <sub>7</sub>C<sub>2</sub> = 21.<br>Peluangnya 6/21, yang jika disederhanakan dibagi 3 menjadi 2/7. Keduanya bernilai sama."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Sebuah mobil menuju ke luar kota dengan kecepatan rata-rata 60 km/jam, kemudian kembali melalui rute yang sama dengan kecepatan rata-rata 40 km/jam. Rata-rata kecepatan mobil untuk perjalanan pulang-pergi adalah...",
        options: ["45 km/jam", "48 km/jam", "50 km/jam", "52 km/jam", "55 km/jam"],
        answer: 1,
        explanation: "Gunakan rumus rata-rata harmonis untuk jarak yang konstan bolak-balik: v = (2 &middot; v<sub>1</sub> &middot; v<sub>2</sub>) / (v<sub>1</sub> + v<sub>2</sub>) = 2(60)(40) / (60+40) = 4800 / 100 = 48 km/jam."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Bentuk sederhana hasil dari operasi (sin 60&deg; &middot; tan 30&deg;) / cos 45&deg; adalah...",
        options: ["1/3 &radic;2", "1/2 &radic;2", "1/2 &radic;3", "&radic;2", "&radic;3"],
        answer: 1,
        explanation: "sin 60&deg; = &radic;3/2, tan 30&deg; = &radic;3/3, cos 45&deg; = &radic;2/2.<br>Pembilang = (&radic;3/2) &times; (&radic;3/3) = 3/6 = 1/2.<br>Pecahan utuh = (1/2) / (&radic;2/2) = 1/&radic;2. Dirasionalkan menjadi 1/2 &radic;2."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ciri-ciri aljabar koefisien dari grafik fungsi kuadrat y = ax<sup>2</sup> + bx + c yang terbuka ke bawah (membentuk gunung) dan menyinggung sumbu x dengan satu titik puncak di sebelah kiri sumbu y adalah...",
        options: [
            "a > 0, D > 0, sumbu simetri x > 0", 
            "a < 0, D = 0, sumbu simetri x < 0", 
            "a < 0, D < 0, sumbu simetri x > 0", 
            "a > 0, D = 0, sumbu simetri x = 0", 
            "a < 0, D > 0, sumbu simetri x = 0"
        ],
        answer: 1,
        explanation: "\"Terbuka ke bawah\" berarti a < 0. \"Menyinggung sumbu x di 1 titik\" berarti akarnya kembar, sehingga D = 0. \"Sebelah kiri sumbu y\" berarti x-puncak bernilai negatif (x < 0)."
    },

    // --- PILIHAN GANDA KOMPLEKS ---
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Diberikan sebuah fungsi kuadrat f(x) = x<sup>2</sup> - 4x - 5. Perhatikan pernyataan berikut:<br>(1) Grafik memotong sumbu x di titik (-1, 0) dan (5, 0).<br>(2) Memiliki nilai minimum y = -9.<br>(3) Grafik memotong sumbu y di titik (0, -5).<br>(4) Persamaan sumbu simetri adalah x = -2.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 0,
        explanation: "(1) Faktorisasi (x-5)(x+1) = 0, akarnya 5 dan -1 (Benar).<br>(2) Sumbu simetri x = -b/2a = 4/2 = 2. Substitusi: y = 2<sup>2</sup> - 4(2) - 5 = -9 (Benar).<br>(3) Saat x=0, y=-5 (Benar).<br>(4) Sumbu simetri x=2, bukan -2 (Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Diberikan sebuah segitiga sembarang ABC, dengan panjang sisi a = 6 cm, b = 8 cm, dan besar sudut C = 60&deg;. Perhatikan pernyataan berikut:<br>(1) Luas segitiga tersebut adalah 12&radic;3 cm<sup>2</sup>.<br>(2) Penyelesaian panjang sisi ketiga menggunakan Aturan Sinus.<br>(3) Panjang sisi c adalah 2&radic;13 cm.<br>(4) Segitiga tersebut tergolong segitiga siku-siku.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 1,
        explanation: "(1) Luas = 1/2 &middot; ab &middot; sin C = 1/2 &times; 6 &times; 8 &times; sin 60&deg; = 24 &times; (1/2 &radic;3) = 12&radic;3 (Benar).<br>(2) Mencari sisi c jika diketahui sisi-sudut-sisi menggunakan Aturan Cosinus, bukan Sinus (Salah).<br>(3) c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos 60&deg; = 36 + 64 - 2(48)(1/2) = 100 - 48 = 52. c = &radic;52 = 2&radic;13 (Benar).<br>(4) Jika siku-siku, sisi miring kuadrat sama dengan jumlah sisi lain, tapi di sini 52 &ne; 36+64 (Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Dari 7 orang pengurus ekstrakurikuler, akan dipilih 3 orang untuk mengikuti seminar tingkat provinsi tanpa memperhatikan jabatan.<br>(1) Kasus ini diselesaikan menggunakan permutasi.<br>(2) Kasus ini diselesaikan menggunakan kombinasi.<br>(3) Terdapat 210 cara pemilihan yang berbeda.<br>(4) Terdapat 35 cara pemilihan yang berbeda.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 2,
        explanation: "Pemilihan tanpa status/jabatan (urutan tidak diperhatikan) menggunakan aturan Kombinasi (2 Benar, 1 Salah). Perhitungannya: <sub>7</sub>C<sub>3</sub> = 7! / (3! &times; (7-3)!) = (7&times;6&times;5) / (3&times;2&times;1) = 35 cara (4 Benar, 3 Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Terkait relasi sudut pada trigonometri, mana pernyataan yang secara matematis sesuai?<br>(1) sin(180&deg; - &alpha;) = sin &alpha;<br>(2) cos(90&deg; + &alpha;) = sin &alpha;<br>(3) tan(360&deg; - &alpha;) = -tan &alpha;<br>(4) cos(180&deg; + &alpha;) = cos &alpha;",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 1,
        explanation: "(1) Kuadran II, sinus positif (Benar).<br>(2) Kuadran II, cosinus harus negatif menjadi -sin &alpha; (Salah).<br>(3) Kuadran IV, tangen negatif (Benar).<br>(4) Kuadran III, cosinus negatif, seharusnya -cos &alpha; (Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Diketahui sebuah data tunggal telah diurutkan sebagai berikut: 3, 4, 5, 6, 7, 8, 9. Perhatikan kesimpulan berikut:<br>(1) Nilai kuartil bawah (Q1) adalah 4.<br>(2) Nilai kuartil atas (Q3) adalah 8.<br>(3) Simpangan kuartil (Qd) bernilai 2.<br>(4) Jangkauan antarkuartil (Hamparan) adalah 5.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 0,
        explanation: "Median (Q2) dari 7 data adalah data ke-4 yaitu 6. Q1 adalah median separuh bawah (4). Q3 adalah median separuh atas (8). Hamparan = Q3 - Q1 = 8 - 4 = 4 (Pernyataan 4 Salah). Simpangan kuartil (Qd) = 1/2 Hamparan = 1/2(4) = 2 (Pernyataan 3 Benar)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Dalam percobaan pelemparan dua keping uang logam bersama-sama sebanyak 100 kali:<br>(1) Peluang muncul keduanya angka adalah 1/4.<br>(2) Frekuensi harapan munculnya minimal 1 gambar adalah 75 kali.<br>(3) Ruang sampel dari pelemparan tersebut berjumlah 4.<br>(4) Peluang kejadian muncul tepat 1 Angka 1 Gambar adalah 1/4.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 0,
        explanation: "Ruang sampel = {AA, AG, GA, GG} = 4 (Pernyataan 3 Benar). Keduanya angka (AA) ada 1, peluang 1/4 (Pernyataan 1 Benar). Minimal 1 gambar = {AG, GA, GG} peluang 3/4, maka frekuensi harapan = 3/4 &times; 100 = 75 kali (Pernyataan 2 Benar). Tepat 1 Angka 1 Gambar {AG, GA} peluangnya 2/4 atau 1/2, bukan 1/4 (Pernyataan 4 Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Pak Budi memiliki kawat sepanjang 40 meter yang akan dibuat menjadi pagar persegi panjang.<br>(1) Model matematika luasnya adalah fungsi kuadrat L(x) = 20x - x<sup>2</sup>.<br>(2) Luas maksimum pekarangan tercapai bila panjangnya 10 meter.<br>(3) Bentuk optimal agar luas maksimal akhirnya akan menyerupai persegi.<br>(4) Nilai diskriminan fungsi luasnya bernilai nol karena ada nilai maksimum.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 0,
        explanation: "Keliling = 2(p+l) = 40 &rarr; p+l=20. Misal p=x, maka l=20-x. Luas = p &times; l = x(20-x) = 20x - x<sup>2</sup> (Pernyataan 1 Benar). Titik puncak luas (Sumbu simetri x) = -20 / -2 = 10. Jika p=10, l=10, bangun adalah persegi dengan luas 100 (Pernyataan 2 & 3 Benar). Diskriminan fungsi D = 20<sup>2</sup> - 4(-1)(0) = 400, bukan nol (Pernyataan 4 Salah)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Diberikan nilai ulangan matematika dari sebuah kelompok belajar terurut: 5, 6, 7, 7, 8, 8, 8, 9, 10. Periksa ukuran pemusatannya!<br>(1) Modus tunggal data tersebut adalah 8.<br>(2) Posisi pemisah tengah (Median) data bernilai 8.<br>(3) Rata-rata dari kelas tersebut adalah 7,55.<br>(4) Data tersebut memiliki simpangan kuartil sebesar 0.",
        options: [
            "Pernyataan (1), (2), dan (3) benar", 
            "Pernyataan (1) dan (3) benar", 
            "Pernyataan (2) dan (4) benar", 
            "Hanya pernyataan (4) yang benar", 
            "Semua pernyataan benar"
        ],
        answer: 0,
        explanation: "Banyaknya data n = 9. Modus (frekuensi tertinggi) adalah 8 yang muncul 3 kali (1 Benar). Median = data ke-5 yaitu 8 (2 Benar). Rata-rata = (5+6+14+24+9+10)/9 = 68/9 = 7,55 (3 Benar). Kuartil bawah (Q1) = (6+7)/2 = 6,5. Kuartil atas (Q3) = (8+9)/2 = 8,5. Simpangan kuartil = (8,5 - 6,5)/2 = 1, bukan 0 (4 Salah)."
    },

    // --- SEBAB AKIBAT ---
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Nilai dari sin 150&deg; bernilai positif dan sama persis dengan nilai cos 60&deg;.<br><b>SEBAB</b><br><b>Alasan:</b> Keduanya terletak di kuadran I dan II yang memiliki nilai perbandingan sinus positif dan menghasilkan pecahan 1/2.",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 0,
        explanation: "sin 150&deg; berada di kuadran II (nilai positif) dan senilai dengan sin 30&deg; = 1/2. Nilai cos 60&deg; di kuadran I juga 1/2. Keduanya memiliki relasi yang logis karena sudut komplementer dan aturan kuadran."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Median dari data 2, 3, 5, 5, 8, 10, 12 adalah 5.<br><b>SEBAB</b><br><b>Alasan:</b> Median selalu didefinisikan sebagai nilai yang frekuensinya paling banyak muncul dalam sebuah distribusi observasi.",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 2,
        explanation: "Pernyataan benar, data sudah urut dan nilai tengahnya adalah 5. Alasan salah, karena yang mendefinisikan nilai yang paling sering muncul adalah Modus, bukan Median."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Grafik fungsi kuadrat y = -x<sup>2</sup> + 2x - 1 hanya menyinggung sumbu x pada satu titik saja.<br><b>SEBAB</b><br><b>Alasan:</b> Nilai diskriminan dari fungsi tersebut sama dengan nol (D = 0).",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 0,
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Syarat grafik menyinggung sumbu x hanya di satu titik (memiliki akar kembar) adalah Diskriminan = 0. D = 2<sup>2</sup> - 4(-1)(-1) = 4 - 4 = 0."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Banyaknya cara menyusun formasi huruf dari kata \"KATAK\" adalah 5! / (2!2!).<br><b>SEBAB</b><br><b>Alasan:</b> Dalam kaidah pencacahan, masalah tersebut termasuk permutasi dengan unsur yang sama, di mana terdapat unsur ganda yaitu huruf K (2 buah) dan A (2 buah).",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 0,
        explanation: "Keduanya benar dan berhubungan. Susunan kata dengan huruf kembar diselesaikan menggunakan rumus Permutasi Unsur Sama n! / (k<sub>1</sub>!k<sub>2</sub>!...)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Persamaan kuadrat x<sup>2</sup> + px + q = 0 dapat dipastikan memiliki dua akar nyata yang saling berkebalikan apabila koefisien q = 1.<br><b>SEBAB</b><br><b>Alasan:</b> Sifat hasil kali akar-akar persamaan kuadrat adalah x<sub>1</sub> &middot; x<sub>2</sub> = c/a. Jika saling berkebalikan (&alpha; dan 1/&alpha;), maka hasil kalinya pasti 1.",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 0,
        explanation: "Akar berkebalikan berati hasil kalinya adalah 1. Karena a=1, dan hasil kali c/a = q/1 = q, maka q harus bernilai 1. Keduanya benar dan sangat berhubungan secara matematis."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Aturan Sinus hanya sah dan dapat diaplikasikan apabila segitiga tersebut adalah segitiga siku-siku murni.<br><b>SEBAB</b><br><b>Alasan:</b> Nilai dasar perbandingan rasio sinus (depan dibagi miring) diturunkan dari teorema kekongruenan segitiga siku-siku.",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 3,
        explanation: "Pernyataan salah, karena Aturan Sinus (dan Cosinus) justru dirancang khusus untuk memecahkan kasus pada segitiga sembarang tanpa harus ada sudut 90&deg;. Namun alasannya benar, definisi fundamental sinus (y/r) lahir dari rasio segitiga siku-siku."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "<b>Pernyataan:</b> Probabilitas sebuah kejadian P(A) apabila ditambahkan dengan probabilitas komplemen kejadiannya P(A<sup>c</sup>) akan selalu menghasilkan nilai mutlak 1.<br><b>SEBAB</b><br><b>Alasan:</b> Kejadian komplemen merepresentasikan gabungan dari seluruh kemungkinan hasil yang ada di dalam ruang sampel di luar kejadian A itu sendiri.",
        options: [
            "Pernyataan Benar, Alasan Benar, ADA hubungan", 
            "Pernyataan Benar, Alasan Benar, TIDAK ADA hubungan", 
            "Pernyataan Benar, Alasan Salah", 
            "Pernyataan Salah, Alasan Benar", 
            "Keduanya Salah"
        ],
        answer: 0,
        explanation: "Pernyataan benar (Hukum probabilitas dasar). Alasan benar dan logis, karena A dan komplemen A membentuk seluruh ruang sampel probabilitas gabungan."
    },

    // --- BENAR / SALAH ---
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Jika semua data tunggal dalam sebuah kelas dikalikan 2 kemudian ditambah 3, maka simpangan baku data tersebut akan ikut dikalikan 2 dan ditambah 3.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Dalam statistika, ukuran penyebaran (seperti simpangan baku dan varians) hanya terpengaruh oleh operasi perkalian/pembagian. Operasi penambahan/pengurangan konstanta tidak akan merubah nilai simpangan baku."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Fungsi kuadrat y = 2x<sup>2</sup> - 4x + 5 memiliki grafik yang mengambang di atas sumbu x (definit positif) karena nilai diskriminannya lebih dari nol.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Grafiknya memang definit positif karena a > 0 dan diskriminannya kurang dari nol (negatif), bukan lebih dari nol. D = b<sup>2</sup> - 4ac = (-4)<sup>2</sup> - 4(2)(5) = 16 - 40 = -24 (Negatif)."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Munculnya angka tepat sebanyak 50 kali dalam uji coba pelemparan koin yang dilempar sebanyak 100 kali secara langsung merupakan bukti nyata dari probabilitas teoretik.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Kejadian dari uji coba yang dilakukan secara langsung di dunia nyata disebut probabilitas/peluang empirik (frekuensi relatif), bukan teoretik. Teoretik adalah nilai ideal hasil perhitungan rumus."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Rata-rata (mean) dari suatu data statistik akan tetap sama dan tidak berubah apabila setiap komponen data tunggalnya ditambah dengan angka 5.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Jika setiap angka dalam observasi ditambah dengan konstanta 5, maka nilai rata-rata akhirnya juga akan ikut bertambah 5, tidak tetap."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Dalam kuadran koordinat kartesius, nilai evaluasi dari cos 120&deg; dan sin 330&deg; memiliki hasil akhir yang sama persis.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "BENAR. cos 120&deg; = -cos 60&deg; = -0,5. Sedangkan sin 330&deg; = -sin 30&deg; = -0,5. Keduanya bernilai sama."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Persamaan sumbu simetri untuk kurva fungsi kuadrat dengan persamaan bentuk puncak f(x) = 2(x - 3)<sup>2</sup> + 4 adalah garis horizontal y = 4.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Sumbu simetri selalu berupa garis vertikal pada sumbu x, yaitu x = 3. Garis y = 4 adalah nilai optimum minimumnya."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Dalam kurva distribusi frekuensi data yang menjuntai atau condong ke arah kanan (positive skewness), nilai Rata-rata (Mean) selalu lebih kecil ukurannya dibanding Modus.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "SALAH. Pada distribusi condong kanan (ekor kanan lebih panjang akibat adanya nilai pencilan tinggi), posisi Mean justru ditarik lebih besar ke kanan melebihi Median dan Modus (Mean > Median > Modus)."
    }
];
