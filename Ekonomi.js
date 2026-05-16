// --- 📚 DATA KUIS EKONOMI ---
subjects.push({ 
    id: 'ekonomi', 
    name: 'Ekonomi', 
    icon: 'ph-chart-line-up', 
    color: 'text-blue-500 dark:text-blue-400' 
});

quizData['ekonomi'] = [
    // --- PILIHAN GANDA BIASA ---
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Otoritas Jasa Keuangan (OJK) mengambil alih kewenangan pengawasan yang sebelumnya berada di bawah Bank Indonesia, yaitu pada sektor...",
        options: ["Pasar Modal", "Perasuransian", "Perbankan (Microprudential)", "Lembaga Pembiayaan", "Koperasi Simpan Pinjam"],
        answer: 2,
        explanation: "OJK mengambil alih fungsi pengaturan dan pengawasan perbankan secara mikro (microprudential) dari BI, sementara BI tetap fokus pada makroprudensial."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Seorang investor pemula ingin berinvestasi di pasar modal namun tidak memiliki waktu dan keahlian untuk menganalisis saham. Instrumen investasi yang paling tepat adalah...",
        options: ["Saham Blue Chip", "Obligasi Korporasi", "Reksadana", "Surat Utang Negara (SUN)", "Waran"],
        answer: 2,
        explanation: "Reksadana dikelola oleh Manajer Investasi profesional, sangat cocok untuk pemula yang tidak punya waktu atau keahlian analisis."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pada masa inflasi tinggi, Bank Indonesia (BI) akan melakukan kebijakan moneter kontraktif. Salah satu langkah yang diambil adalah...",
        options: ["Membeli surat berharga (SBI)", "Menurunkan suku bunga acuan (BI Rate)", "Menurunkan cadangan kas minimum bank (GWM)", "Menjual surat berharga ke pasar", "Melonggarkan syarat pemberian kredit"],
        answer: 3,
        explanation: "Menjual surat berharga (Open Market Operation) akan menarik uang beredar dari masyarakat masuk ke bank sentral untuk menekan inflasi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Ketika kamu melihat label harga sepatu di toko sebesar Rp500.000,00, uang sedang menjalankan fungsi aslinya sebagai...",
        options: ["Alat tukar menukar", "Alat penunjuk harga (Satuan hitung)", "Alat penyimpan kekayaan", "Alat pembayaran utang", "Pemindah kekayaan"],
        answer: 1,
        explanation: "Menunjukkan nilai atau harga suatu barang adalah fungsi asli uang sebagai satuan hitung (pengukur nilai)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Cek, bilyet giro, dan telegrafic transfer merupakan alat pembayaran yang sah namun tidak wajib diterima masyarakat. Alat ini dikelompokkan sebagai...",
        options: ["Uang Kartal", "Uang Kuasi", "Uang Giral", "Uang Fiat", "Uang Komoditas"],
        answer: 2,
        explanation: "Uang giral adalah simpanan di bank yang dapat digunakan sebagai alat pembayaran melalui instruksi seperti cek atau bilyet giro."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Perbedaan utama antara BUMN berbentuk Perusahaan Perseroan (Persero) dan Perusahaan Umum (Perum) terletak pada...",
        options: [
            "Persero melayani umum, Perum murni mencari laba",
            "Saham Persero minimal 51% milik negara, Perum seluruh modal milik negara",
            "Persero dipimpin direksi, Perum dipimpin oleh menteri",
            "Persero tidak mencari laba, Perum mencari laba",
            "Persero didirikan daerah, Perum didirikan pusat"
        ],
        answer: 1,
        explanation: "Persero modalnya terbagi dalam saham (min 51% negara), sedangkan Perum 100% modal milik negara tanpa saham."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pak Budi aktif mengelola bengkel dan setor modal, sedangkan Pak Andi hanya setor modal tanpa ikut campur manajemen. Bentuk badan usaha ini adalah...",
        options: ["Perusahaan Perseorangan", "Firma", "Persekutuan Komanditer (CV)", "Perseroan Terbatas (PT)", "Koperasi"],
        answer: 2,
        explanation: "CV memiliki sekutu aktif (pengelola) dan sekutu pasif/komanditer (hanya setor modal)."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "'Dari anggota, oleh anggota, dan untuk anggota' merupakan landasan kerja dari...",
        options: ["Yayasan", "Koperasi", "BUMN", "BUMD", "Firma"],
        answer: 1,
        explanation: "Koperasi berlandaskan asas kekeluargaan di mana anggota bertindak sebagai pemilik sekaligus pelanggan."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pembagian Sisa Hasil Usaha (SHU) dalam koperasi didasarkan pada besarnya simpanan dan...",
        options: ["Lama menjadi anggota", "Usia anggota", "Besarnya jasa/transaksi anggota pada koperasi", "Keputusan sepihak ketua", "Kedudukan anggota"],
        answer: 2,
        explanation: "SHU dibagi sebanding dengan besarnya jasa usaha (transaksi) masing-masing anggota terhadap koperasi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Fungsi manajemen yang berfokus pada pembagian tugas, wewenang, dan sumber daya disebut...",
        options: ["Planning", "Organizing", "Actuating", "Controlling", "Evaluating"],
        answer: 1,
        explanation: "Organizing adalah proses membagi kerja, mengelompokkan tugas, dan mendelegasikan wewenang."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Asuransi memegang prinsip Indemnity yang artinya...",
        options: [
            "Mencari keuntungan maksimal dari nasabah",
            "Mengembalikan posisi finansial nasabah seperti sebelum kerugian",
            "Melindungi nasabah dari pelanggaran hukum",
            "Mendapat keuntungan ganda jika mobil hilang",
            "Polis dapat dipindahtangankan tanpa batas"
        ],
        answer: 1,
        explanation: "Indemnity berarti asuransi hanya mengganti sebesar kerugian riil agar nasabah kembali ke posisi semula, bukan lebih kaya."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Kegiatan meminjamkan barang modal dengan opsi membelinya di akhir periode disebut...",
        options: ["Pegadaian", "Asuransi", "Anjak Piutang", "Sewa Guna Usaha (Leasing)", "Modal Ventura"],
        answer: 3,
        explanation: "Leasing adalah pembiayaan barang modal dengan atau tanpa hak opsi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Di bawah ini yang bukan merupakan unsur manajemen (6M) adalah...",
        options: ["Man", "Money", "Machine", "Material", "Marketing"],
        answer: 4,
        explanation: "Unsur manajemen 6M adalah Man, Money, Material, Machine, Method, dan Market. Marketing bukan termasuk unsur dasar."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Bank Indonesia adalah lembaga negara yang independen, yang berarti...",
        options: [
            "Berhak mencetak uang tanpa batas",
            "Bebas dari campur tangan pemerintah dalam melaksanakan tugasnya",
            "Boleh menolak diaudit oleh BPK",
            "Berada langsung di bawah komando Presiden",
            "Satu-satunya bank yang beroperasi"
        ],
        answer: 1,
        explanation: "Independen berarti BI tidak dapat diintervensi oleh pihak mana pun dalam mengambil kebijakan moneter."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Keuntungan yang diharapkan oleh investor yang membeli Obligasi adalah berupa...",
        options: ["Dividen", "Capital Gain saja", "Bunga (Kupon) tetap secara periodik", "Hak suara dalam RUPS", "Sisa Hasil Usaha (SHU)"],
        answer: 2,
        explanation: "Saham memberikan Dividen, sedangkan Obligasi (surat utang) memberikan bunga atau kupon tetap."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Prinsip Mudharabah dalam Bank Syariah berarti...",
        options: [
            "Jual beli dengan tambahan keuntungan",
            "Sewa menyewa barang",
            "Penitipan barang/uang",
            "Bagi hasil antara pemilik dana dan pengelola dana",
            "Pemberian pinjaman tanpa bunga"
        ],
        answer: 3,
        explanation: "Mudharabah adalah akad kerja sama bagi hasil antara pemilik modal dan pengelola."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Manajer tingkat bawah (supervisor) lebih banyak membutuhkan keterampilan...",
        options: ["Konseptual", "Analitis", "Hubungan manusiawi", "Teknis (Technical Skill)", "Pengambilan keputusan makro"],
        answer: 3,
        explanation: "Manajer tingkat bawah bersentuhan langsung dengan teknis operasional, sehingga butuh technical skill yang tinggi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Pihak yang menerbitkan surat berharga di pasar modal untuk mencari dana disebut...",
        options: ["Investor", "Emiten", "Pialang", "Underwriter", "Manajer Investasi"],
        answer: 1,
        explanation: "Emiten adalah perusahaan atau pihak yang menerbitkan efek untuk mendapatkan tambahan modal."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Kekuasaan tertinggi dalam koperasi berada pada...",
        options: ["Ketua Koperasi", "Pengawas", "Dinas Koperasi", "Manajer", "Rapat Anggota"],
        answer: 4,
        explanation: "Rapat Anggota adalah institusi pemegang kekuasaan tertinggi dalam demokrasi ekonomi koperasi."
    },
    {
        story: "Petunjuk: Pilih satu jawaban yang paling tepat.",
        question: "Alat pembayaran non-tunai yang memotong langsung saldo rekening tabungan adalah...",
        options: ["Kartu Kredit", "Kartu Debit", "E-Money", "Bilyet Giro", "Cek"],
        answer: 1,
        explanation: "Kartu Debit (Pay Now) memotong saldo rekening secara real-time saat transaksi."
    },

    // --- PILIHAN GANDA KOMPLEKS ---
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Syarat-syarat benda untuk dapat dijadikan uang adalah...\n(1) Portability\n(2) Durability\n(3) Acceptability\n(4) Nilainya tidak stabil",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Syarat uang adalah nilainya harus stabil (Stability of value)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Ciri-ciri Badan Usaha Milik Swasta (BUMS) adalah...\n(1) Mencari keuntungan maksimal\n(2) Modal dari swasta\n(3) Tanggung jawab mandiri\n(4) Pelopor usaha yang belum diminati swasta",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Menjadi pelopor/perintis usaha adalah fungsi dari BUMN."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Produk perbankan untuk menghimpun dana (Funding) adalah...\n(1) Tabungan\n(2) Kredit Investasi\n(3) Deposito\n(4) Letter of Credit",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 1,
        explanation: "Kredit adalah produk penyaluran (Lending), sedangkan Tabungan dan Deposito adalah Funding."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Kestabilan nilai Rupiah diukur dari...\n(1) Laju inflasi terkendali\n(2) Stabilitas kurs mata uang asing\n(3) Kestabilan harga domestik\n(4) Keuntungan bank umum",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Tujuan BI adalah menstabilkan Rupiah terhadap barang (inflasi) dan mata uang asing (kurs)."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Dampak positif pasar modal bagi ekonomi adalah...\n(1) Pajak untuk negara\n(2) Lapangan kerja baru\n(3) Indikator sehatnya ekonomi\n(4) Pinjaman tanpa agunan masyarakat miskin",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Pasar modal adalah sarana investasi saham/obligasi, bukan lembaga kredit mikro tanpa agunan."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Lembaga Jasa Keuangan Non-Bank (IKNB) di bawah OJK meliputi...\n(1) Perusahaan Asuransi\n(2) Pegadaian\n(3) Dana Pensiun\n(4) Bank Perkreditan Rakyat (BPR)",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "BPR adalah lembaga perbankan (Bank), bukan Non-Bank."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Prinsip manajemen Henry Fayol meliputi...\n(1) Division of work\n(2) Disiplin\n(3) Unity of command\n(4) Monopoli kekuasaan",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Monopoli kekuasaan bertentangan dengan prinsip manajemen yang baik."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Jenis-jenis asuransi di Indonesia meliputi...\n(1) Asuransi Jiwa\n(2) Asuransi Kerugian\n(3) Asuransi Kesehatan\n(4) Reksa Dana",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Reksa dana adalah instrumen investasi pasar modal, bukan produk asuransi."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Hak-hak anggota koperasi antara lain...\n(1) Pendapat dalam Rapat Anggota\n(2) Memilih pengurus\n(3) Mendapat SHU\n(4) Menjual aset koperasi sepihak",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "Aset koperasi adalah milik bersama, tidak boleh dijual sepihak oleh individu."
    },
    {
        story: "Petunjuk: Pilihan Ganda Kompleks (A: 1,2,3 Benar | B: 1,3 Benar | C: 2,4 Benar | D: 4 Benar | E: Semua Benar)",
        question: "Fungsi OJK terkait perlindungan konsumen adalah...\n(1) Edukasi literasi keuangan\n(2) Menghentikan kegiatan LJK merugikan\n(3) Pelayanan pengaduan\n(4) Ganti rugi langsung dari kas OJK",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semua benar)"],
        answer: 0,
        explanation: "OJK memfasilitasi sengketa, namun tidak membayar ganti rugi nasabah menggunakan kas OJK."
    },

    // --- SEBAB AKIBAT ---
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Koperasi adalah soko guru ekonomi Indonesia.\nSEBAB\nAlasan: Koperasi berlandaskan asas kekeluargaan yang sesuai kepribadian bangsa.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 0,
        explanation: "Asas kekeluargaan menjadi dasar koperasi disebut soko guru ekonomi rakyat."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: PT sulit mendapat tambahan modal luar.\nSEBAB\nAlasan: Pemilik PT tanggung jawabnya tidak terbatas hingga harta pribadi.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 4,
        explanation: "PT paling mudah cari modal (saham) dan tanggung jawab pemegang saham adalah terbatas sebatas modal setor."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Uang Rp100.000 adalah jenis Uang Fiat.\nSEBAB\nAlasan: Nilai intrinsik uang tersebut lebih kecil dari nilai nominalnya.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 0,
        explanation: "Uang fiat beredar atas dasar kepercayaan pemerintah, di mana nilai nominal > nilai bahan."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Saat inflasi tinggi, BI menurunkan suku bunga.\nSEBAB\nAlasan: Penurunan bunga membuat orang enggan menabung dan memilih belanja.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 4,
        explanation: "Saat inflasi, BI harus menaikkan suku bunga agar masyarakat menabung (uang beredar turun)."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Reksa dana saham risikonya lebih tinggi dari reksa dana pasar uang.\nSEBAB\nAlasan: Hukum investasi menyebutkan 'High Risk, High Return'.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 0,
        explanation: "Saham berfluktuasi tinggi namun berpotensi imbal hasil lebih besar."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Pegadaian satu-satunya lembaga yang menghimpun giro.\nSEBAB\nAlasan: Pegadaian memiliki semboyan 'Mengatasi Masalah Tanpa Masalah'.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 3,
        explanation: "Hanya Bank Umum yang boleh menghimpun Giro. Alasan semboyan pegadaian adalah benar."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Penggunaan dompet digital mempermudah pembayaran ritel.\nSEBAB\nAlasan: Sistem non-tunai lebih praktis, cepat, dan aman.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 0,
        explanation: "Kepraktisan non-tunai mendorong adopsi dompet digital secara luas."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: OJK berada di bawah Kementerian Keuangan.\nSEBAB\nAlasan: OJK bertugas mengawasi perbankan dan IKNB.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 3,
        explanation: "OJK adalah lembaga independen di luar pemerintahan. Tugas pengawasannya adalah benar."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: DPPK hanya didirikan oleh perusahaan tempat karyawan bekerja.\nSEBAB\nAlasan: Dana pensiun bertujuan memberikan kesinambungan penghasilan di hari tua.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 1,
        explanation: "Kedua kalimat benar, namun alasan tersebut adalah definisi umum dan bukan sebab langsung klasifikasi DPPK."
    },
    {
        story: "Petunjuk: Sebab-Akibat (A: Benar-Benar-Berhubungan | B: Benar-Benar-Tidak Berhubungan | C: Benar-Salah | D: Salah-Benar | E: Salah-Salah)",
        question: "Pernyataan: Top Management butuh conceptual skill lebih dominan.\nSEBAB\nAlasan: Tugas top management merumuskan visi strategi jangka panjang.",
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
        answer: 0,
        explanation: "Perumusan visi membutuhkan kemampuan melihat gambaran besar (konseptual)."
    },

    // --- BENAR / SALAH ---
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Budi menjaminkan laptopnya untuk pinjaman uang jangka pendek. Ini disebut Perusahaan Leasing.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Jaminan barang bergerak untuk pinjaman adalah Pegadaian. Leasing adalah sewa guna usaha barang modal."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Transaksi menggunakan Bitcoin (Kripto) di Indonesia dianggap alat pembayaran yang sah secara hukum.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Alat pembayaran sah di NKRI hanyalah Rupiah. Kripto dianggap aset investasi, bukan mata uang."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Koperasi rugi karena bisnis gagal. Kerugian ini ditanggung bersama oleh anggota secara proporsional.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "Asas kekeluargaan koperasi berarti laba dinikmati bersama dan risiko ditanggung bersama."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Dalam PT, kekayaan pribadi pemilik dipisahkan secara hukum dari kekayaan perusahaan.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "PT adalah badan hukum mandiri (separate legal entity), sehingga harta pribadi pemegang saham terlindungi."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Manajer SDM bertanggung jawab menentukan harga jual produk dan strategi promosi.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Harga dan promosi adalah tugas Manajemen Pemasaran. Manajemen SDM mengurus karyawan."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Perusahaan menjual saham ke publik pertama kali (IPO) disebut Go Public.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "Initial Public Offering (IPO) adalah proses perusahaan tertutup menjadi terbuka (Tbk)."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: BPR diperbolehkan menerbitkan Kartu Kredit dan melayani Valuta Asing.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "BPR dilarang menerbitkan kartu kredit, melayani giro, dan ikut lalu lintas pembayaran internasional."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: OJK berwenang menindak tegas pinjol ilegal melalui Satgas Waspada Investasi.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "OJK memiliki otoritas pengawasan dan berhak memblokir kegiatan keuangan ilegal yang merugikan publik."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Bank Sentral di Indonesia dijabat oleh Bank Mandiri, BRI, dan BNI karena milik negara.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Bank Sentral Indonesia hanyalah Bank Indonesia (BI). Mandiri, BRI, dan BNI adalah Bank Umum BUMN."
    },
    {
        story: "Petunjuk: Analisis Pernyataan (Pilih BENAR atau SALAH)",
        question: "Kasus: Pihak yang membayar premi disebut Tertanggung, perusahaan asuransi disebut Penanggung.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "Tertanggung membayar premi untuk perlindungan risiko, Penanggung membayar klaim jika risiko terjadi."
    }
];
