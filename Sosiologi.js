// --- DATA MATA PELAJARAN SOSIOLOGI ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "sosiologi",
    name: "Sosiologi",
    icon: "ph-users-three", // Ikon pengguna banyak untuk sosiologi
    color: "text-purple-500 dark:text-purple-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleksSosio = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibatSosio = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalahSosio = ["Benar", "Salah"];

// --- DATA SOAL SOSIOLOGI KELAS X ---
window.quizData["sosiologi"] = [
    {
        question: "Masyarakat Indonesia terdiri atas berbagai ras, suku bangsa, dan agama. Pengelompokan masyarakat ke dalam golongan-golongan tersebut sejajar dan tidak ada yang lebih tinggi atau lebih rendah. Konsep ini dalam sosiologi disebut...",
        options: [
            "Stratifikasi sosial",
            "Diferensiasi sosial",
            "Ketimpangan sosial",
            "Mobilitas sosial",
            "Konsolidasi sosial"
        ],
        answer: 1, 
        explanation: "Diferensiasi sosial adalah pengelompokan masyarakat secara horizontal/sejajar. Perbedaan ras, suku, dan agama tidak menentukan tinggi rendahnya derajat seseorang."
    },
    {
        question: "<b>Pernyataan:</b> Seseorang yang lahir dalam keluarga keraton secara otomatis akan mendapatkan gelar kebangsawanan tanpa harus berusaha keras.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Gelar kebangsawanan merupakan contoh dari Achieved Status yang didapatkan melalui garis keturunan atau kelahiran.",
        options: opsiSebabAkibatSosio,
        answer: 2, 
        explanation: "Pernyataan benar (gelar keraton didapat otomatis dari lahir). Namun alasan SALAH, karena status yang didapat dari kelahiran/keturunan disebut Ascribed Status, bukan Achieved Status (yang diraih dengan usaha)."
    },
    {
        question: "Perhatikan ciri-ciri kelompok sosial berikut:<br><br>(1) Didasarkan pada ciri fisik (fenotip) seperti warna kulit dan bentuk rambut.<br>(2) Membentuk kelas-kelas sosial seperti kelas atas, menengah, dan bawah.<br>(3) Terdapat pengelompokan berdasarkan ciri budaya (adat istiadat).<br>(4) Menimbulkan hierarki kekuasaan yang tegas di masyarakat.<br><br>Ciri dari diferensiasi sosial ditunjukkan oleh nomor...",
        options: opsiKompleksSosio,
        answer: 1, 
        explanation: "Diferensiasi sosial didasarkan pada ciri fisik/ras (1) dan ciri sosial/budaya (3) yang mendatar. Nomor (2) dan (4) merupakan ciri dari stratifikasi sosial (hierarki/bertingkat)."
    },
    {
        question: "Seorang anak dari keluarga buruh tani belajar dengan giat hingga berhasil mendapat beasiswa, lulus sarjana kedokteran, dan menjadi dokter spesialis bedah yang dihormati di kotanya. Proses yang dialami oleh anak tersebut adalah...",
        options: [
            "Mobilitas sosial antargenerasi turun",
            "Mobilitas sosial intragenerasi vertikal naik",
            "Diferensiasi sosial profesi",
            "Stratifikasi sosial tertutup",
            "Mobilitas sosial antargenerasi vertikal naik"
        ],
        answer: 4, 
        explanation: "Terjadi perpindahan status dari generasi ayah (buruh tani) ke generasi anak (dokter spesialis) yang posisinya lebih tinggi (naik), sehingga disebut mobilitas antargenerasi vertikal naik."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Pelapisan sosial (stratifikasi) pada masyarakat feodal dan masyarakat kasta di Bali bersifat terbuka, sehingga memungkinkan setiap individu berpindah kelas sosial dengan mudah.",
        options: opsiBenarSalahSosio,
        answer: 1, 
        explanation: "Sistem kasta dan masyarakat feodal merupakan contoh stratifikasi sosial yang bersifat tertutup. Perpindahan kelas sosial (mobilitas) sangat sulit atau bahkan tidak mungkin terjadi karena status ditentukan mutlak oleh keturunan."
    },
    {
        question: "Persilangan keanggotaan dalam masyarakat di mana individu-individu dari berbagai suku, agama, dan profesi yang berbeda dapat tergabung dalam satu organisasi yang sama (misalnya anggota partai politik yang sama) disebut dengan...",
        options: [
            "Konsolidasi",
            "Interseksi",
            "Akomodasi",
            "Asimilasi",
            "Etnosentrisme"
        ],
        answer: 1, 
        explanation: "Interseksi adalah persilangan keanggotaan masyarakat. Berbagai latar belakang yang berbeda bertemu dan bersilang pada satu wadah/kelompok yang sama, yang justru memperkuat integrasi."
    },
    {
        question: "<b>Pernyataan:</b> Sikap partikularisme kelompok dapat memicu timbulnya konflik sosial di tengah masyarakat majemuk.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Partikularisme merupakan sikap yang mengutamakan kepentingan pribadi atau kelompok golongannya sendiri di atas kepentingan umum.",
        options: opsiSebabAkibatSosio,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Sikap mementingkan kelompok sendiri (partikularisme) akan memunculkan keegoisan kelompok yang memicu gesekan atau konflik dengan kelompok lain."
    },
    {
        question: "Syarat utama sebuah topik penelitian sosial dianggap baik dan layak untuk diteliti adalah...<br><br>(1) Menarik minat peneliti.<br>(2) Data tersedia dan mudah dijangkau oleh peneliti.<br>(3) Memiliki kegunaan praktis maupun teoretis.<br>(4) Merupakan duplikasi murni dari penelitian sebelumnya.",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Topik harus menarik (1), datanya tersedia/dapat diakses (2), dan bermanfaat (3). Nomor (4) salah karena penelitian tidak boleh hasil plagiasi atau duplikasi murni dari yang sudah ada."
    },
    {
        question: "Judul penelitian: <i>\"Pengaruh Penggunaan Gawai (Gadget) Terhadap Tingkat Interaksi Sosial Remaja di SMA X\"</i>.<br><br>Dalam penelitian tersebut, yang berkedudukan sebagai variabel terikat (dependen) adalah...",
        options: [
            "Penggunaan gawai",
            "Tingkat interaksi sosial remaja",
            "Remaja SMA X",
            "Lingkungan sekolah",
            "Waktu penggunaan gawai"
        ],
        answer: 1, 
        explanation: "Variabel terikat (dependen) adalah variabel yang dipengaruhi atau menjadi akibat. Dalam hal ini, tingkat interaksi sosial dipengaruhi oleh variabel bebas/independen (penggunaan gawai)."
    },
    {
        question: "<b>Pernyataan:</b> Gejala sosial kemiskinan selalu berawal dari sifat malas dan kebodohan individu itu sendiri secara mutlak (kemiskinan kultural).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Kemiskinan struktural disebabkan oleh sistem dan kebijakan pemerintah yang tidak berpihak pada rakyat kecil, sehingga akses ekonomi tertutup bagi mereka.",
        options: opsiSebabAkibatSosio,
        answer: 3, 
        explanation: "Pernyataan SALAH (kemiskinan tidak selalu karena malas, ada faktor sistemik/struktural). Alasan BENAR (kemiskinan struktural memang diakibatkan oleh sistem/kebijakan yang tidak adil)."
    },
    {
        question: "Data yang diperoleh peneliti secara langsung dari subjek penelitian melalui wawancara mendalam atau observasi lapangan disebut dengan...",
        options: [
            "Data sekunder",
            "Data primer",
            "Data kualitatif",
            "Data kuantitatif",
            "Data longitudinal"
        ],
        answer: 1, 
        explanation: "Data yang dikumpulkan sendiri oleh peneliti langsung dari tangan pertama (lapangan/responden) adalah data primer. Jika mengambil dari buku/BPS, itu data sekunder."
    },
    {
        question: "Kelebihan teknik pengumpulan data menggunakan angket/kuesioner tertutup adalah...<br><br>(1) Dapat menjangkau banyak responden dalam waktu singkat.<br>(2) Responden dapat menjawab dengan bebas dan mendalam.<br>(3) Memudahkan peneliti dalam mengolah dan menabulasi data.<br>(4) Sangat cocok untuk responden yang buta huruf.",
        options: opsiKompleksSosio,
        answer: 1, 
        explanation: "Angket tertutup cepat disebar (1) dan mudah diolah karena pilihan jawaban sudah baku (3). Nomor (2) adalah ciri kuesioner terbuka/wawancara. Nomor (4) salah karena kuesioner menuntut kemampuan membaca/menulis."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Pendekatan penelitian kualitatif lebih mengutamakan pada pemahaman mendalam tentang makna dari suatu fenomena sosial, bukan sekadar mencari hubungan sebab-akibat dengan menggunakan angka-angka statistik.",
        options: opsiBenarSalahSosio,
        answer: 0, 
        explanation: "Penelitian kualitatif bersifat deskriptif-analitis dan mengeksplorasi makna mendalam (verstehen), sedangkan yang menggunakan angka statistik untuk hubungan sebab-akibat adalah pendekatan kuantitatif."
    },
    {
        question: "Peneliti ingin meneliti tingkat kepuasan pelayanan perpustakaan sekolah. Ia mengambil subjek secara acak menggunakan undian dari daftar absensi siswa kelas 10, 11, dan 12. Teknik pengambilan sampel ini disebut...",
        options: [
            "Purposive sampling",
            "Snowball sampling",
            "Stratified random sampling",
            "Quota sampling",
            "Simple random sampling"
        ],
        answer: 4, 
        explanation: "Pemilihan sampel dengan cara undian murni tanpa kriteria khusus di mana semua anggota populasi punya kesempatan yang sama disebut Simple Random Sampling (Sampel acak sederhana)."
    },
    {
        question: "Sosiologi memandang fenomena kejahatan kerah putih (white-collar crime) sebagai gejala sosial kejahatan tingkat tinggi. Pelaku kejahatan ini biasanya adalah...",
        options: [
            "Masyarakat kelas bawah yang terdesak kebutuhan ekonomi.",
            "Orang yang memiliki status sosial tinggi dan kewenangan dalam pekerjaannya (seperti koruptor).",
            "Preman pasar yang melakukan pemerasan.",
            "Remaja putus sekolah yang melakukan tawuran.",
            "Sindikat perdagangan narkotika internasional."
        ],
        answer: 1, 
        explanation: "Sesuai definisi dari Edwin Sutherland, white-collar crime dilakukan oleh orang dengan status sosial tinggi dan terpandang di dalam pekerjaannya, contoh utamanya adalah korupsi dan penggelapan dana."
    },
    {
        question: "<b>Pernyataan:</b> Dalam penelitian sosial, sikap objektif seorang peneliti sangat diutamakan dan diwajibkan.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Sikap objektif berarti peneliti memisahkan perasaan atau pandangan pribadinya (subjektivitas) dari fakta yang ditemukan di lapangan agar hasilnya tidak bias.",
        options: opsiSebabAkibatSosio,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan sebab-akibat. Objektivitas menjamin bahwa hasil penelitian mencerminkan realitas sosial yang sesungguhnya, bukan opini peneliti."
    },
    {
        question: "Sebelum melakukan pengumpulan data di lapangan, peneliti menyusun rancangan instrumen. Tujuan dari penyusunan kajian pustaka/tinjauan teori dalam Bab II proposal penelitian adalah...<br><br>(1) Mengetahui penelitian-penelitian relevan yang pernah dilakukan sebelumnya.<br>(2) Memperkuat kerangka berpikir dan konsep teori peneliti.<br>(3) Menghindari plagiasi dan duplikasi penelitian.<br>(4) Menjadi wadah untuk memaparkan seluruh kesimpulan akhir penelitian.",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Kajian pustaka (1, 2, 3) berfungsi sebagai landasan teori dan peta penelitian terdahulu. Pernyataan (4) salah, karena kesimpulan diletakkan di Bab Penutup (Bab V), bukan di Bab II."
    },
    {
        question: "Setelah kuesioner terkumpul, peneliti menyeleksi dan memeriksa kelengkapan, kejelasan, serta kesesuaian jawaban responden. Proses pengolahan data tahap ini disebut dengan istilah...",
        options: [
            "Tabulating",
            "Coding",
            "Editing",
            "Generalizing",
            "Sampling"
        ],
        answer: 2, 
        explanation: "Editing adalah proses menyunting atau memeriksa kembali kelengkapan dan kejelasan data yang baru saja masuk dari lapangan. Coding adalah memberi kode, Tabulating adalah memasukkan ke dalam tabel."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Dalam metode Snowball Sampling (sampel bola salju), peneliti memilih responden berdasarkan jatah (kuota) tertentu yang telah ditetapkan sebelum penelitian dimulai.",
        options: opsiBenarSalahSosio,
        answer: 1, 
        explanation: "Snowball sampling adalah teknik di mana responden awal diminta merekomendasikan responden berikutnya secara berantai (seperti bola salju menggelinding). Pemilihan berdasarkan jatah disebut Quota sampling."
    },
    {
        question: "Bagian Pendahuluan (Bab I) dalam sebuah laporan penelitian sosial umumnya terdiri dari beberapa subbab, kecuali...",
        options: [
            "Latar Belakang Masalah",
            "Rumusan Masalah",
            "Tujuan Penelitian",
            "Manfaat Penelitian",
            "Landasan Teori"
        ],
        answer: 4, 
        explanation: "Latar belakang, rumusan masalah, tujuan, dan manfaat adalah bagian dari Bab I. Sedangkan Landasan Teori merupakan isi pokok dari Bab II (Tinjauan Pustaka)."
    },
    {
        question: "Westernisasi sering disamakan dengan modernisasi, padahal keduanya berbeda. Gejala sosial westernisasi merujuk pada...",
        options: [
            "Penggunaan teknologi tepat guna dalam pertanian.",
            "Perubahan sistem pemerintahan dari otoriter ke demokratis.",
            "Peniruan gaya hidup, kebiasaan, dan budaya Barat secara membabi buta tanpa seleksi.",
            "Kemajuan pemikiran dan rasionalitas masyarakat.",
            "Menjaga kelestarian budaya lokal dengan bantuan teknologi internet."
        ],
        answer: 2, 
        explanation: "Modernisasi adalah perubahan menuju kemajuan rasional dan teknologi. Westernisasi adalah hilangnya nasionalisme karena meniru total kebudayaan Barat yang tidak selalu sesuai dengan nilai lokal."
    },
    {
        question: "<b>Pernyataan:</b> Seorang peneliti yang meneliti tentang kekerasan dalam rumah tangga merahasiakan identitas asli narasumbernya dengan menggunakan inisial dalam laporan.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Menjaga kerahasiaan (anonimitas) responden merupakan salah satu kode etik penelitian yang wajib dipatuhi untuk melindungi keselamatan dan kenyamanan subjek penelitian.",
        options: opsiSebabAkibatSosio,
        answer: 0, 
        explanation: "Pernyataan benar, alasan benar, dan berhubungan. Kode etik penelitian mengharuskan perlindungan kerahasiaan (anonimity/confidentiality) responden, terutama pada isu sensitif."
    },
    {
        question: "Fungsi dibuatnya sebuah Hipotesis dalam penelitian kuantitatif adalah...<br><br>(1) Memberikan jawaban sementara terhadap rumusan masalah.<br>(2) Menjadi arah panduan bagi peneliti dalam mencari data.<br>(3) Merupakan dasar/tebakan ilmiah yang akan diuji kebenarannya.<br>(4) Harus selalu terbukti benar di akhir penelitian.",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Hipotesis adalah jawaban sementara/dugaan (1, 2, 3). Nomor (4) salah karena hipotesis tidak wajib terbukti benar. Jika data di lapangan membantah hipotesis, maka hipotesis tersebut ditolak (dan itu sah dalam penelitian)."
    },
    {
        question: "Modus dalam pengolahan data statistik sosiologi (misalnya data profesi warga di sebuah desa) berfungsi untuk mengetahui...",
        options: [
            "Nilai rata-rata pendapatan seluruh warga.",
            "Nilai tengah dari jumlah keseluruhan warga yang diurutkan.",
            "Rentang jarak antara pendapatan tertinggi dan terendah.",
            "Jenis profesi yang paling banyak ditekuni atau paling sering muncul di desa tersebut.",
            "Penyimpangan data dari rata-ratanya."
        ],
        answer: 3, 
        explanation: "Dalam statistik, Modus adalah data atau nilai yang frekuensinya paling banyak atau paling sering muncul."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Wawancara tidak terstruktur (bebas) sangat cocok digunakan dalam penelitian kuantitatif karena menghasilkan data yang baku dan mudah dimasukkan ke dalam rumus statistik.",
        options: opsiBenarSalahSosio,
        answer: 1, 
        explanation: "Wawancara tidak terstruktur/bebas lebih cocok untuk penelitian kualitatif yang mencari kedalaman makna. Penelitian kuantitatif membutuhkan data baku, sehingga lebih cocok menggunakan kuesioner atau wawancara tertutup/terstruktur."
    },
    {
        question: "Seorang peneliti sosiologi terjun langsung dan ikut serta dalam kegiatan keseharian suku pedalaman Baduy selama berbulan-bulan untuk mendapatkan data tradisi mereka. Metode pengumpulan data ini disebut...",
        options: [
            "Observasi non-partisipasi",
            "Studi dokumentasi",
            "Observasi partisipasi",
            "Eksperimen laboratorium",
            "Wawancara terstruktur"
        ],
        answer: 2, 
        explanation: "Karena peneliti ikut ambil bagian secara langsung dalam kehidupan keseharian subjek yang ditelitinya, metode ini disebut observasi partisipasi (participant observation)."
    },
    {
        question: "Heterogenitas masyarakat dapat menjadi potensi kekayaan budaya, tetapi juga rawan konflik. Jika identitas kesukuan dan agama saling tumpang tindih dan memperkuat satu sama lain (misalnya: Suku A mayoritas beragama X tergabung dalam partai Y), maka batas pembeda masyarakat menjadi sangat tajam. Proses ini disebut...",
        options: [
            "Interseksi",
            "Konsolidasi",
            "Asimilasi",
            "Amalgamasi",
            "Difusi"
        ],
        answer: 1, 
        explanation: "Konsolidasi sosial adalah penguatan parameter pembeda (suku/agama/profesi) yang menumpuk jadi satu. Ini membuat batas antar kelompok (in-group vs out-group) makin tebal dan rawan konflik, berkebalikan dengan interseksi."
    },
    {
        question: "<b>Pernyataan:</b> Gejala sosial seperti kenakalan remaja (juvenile delinquency) dapat diteliti menggunakan pendekatan penelitian kualitatif maupun kuantitatif.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Pemilihan pendekatan penelitian bergantung semata-mata pada ketersediaan dana yang dimiliki oleh sang peneliti.",
        options: opsiSebabAkibatSosio,
        answer: 2, 
        explanation: "Pernyataan BENAR (bisa diteliti kualitatif untuk makna, atau kuantitatif untuk korelasi persentase). Namun Alasan SALAH. Pemilihan metode tidak bergantung pada dana, melainkan bergantung pada rumusan masalah dan tujuan penelitiannya."
    },
    {
        question: "Tahapan paling akhir dalam kegiatan penelitian sosial di mana peneliti menyampaikan hasil temuannya kepada masyarakat luas atau kalangan akademisi disebut...",
        options: [
            "Pengolahan data",
            "Penarikan kesimpulan",
            "Publikasi/mengomunikasikan hasil penelitian",
            "Tabulasi silang",
            "Reduksi data"
        ],
        answer: 2, 
        explanation: "Setelah laporan selesai dibuat, peneliti wajib mempresentasikan atau mempublikasikannya (lewat jurnal, seminar, diskusi) agar hasil temuannya bermanfaat bagi masyarakat luas."
    },
    {
        question: "Ciri-ciri instrumen penelitian (alat ukur) yang baik adalah memiliki Validitas dan Reliabilitas. Arti dari instrumen yang Valid adalah...<br><br>(1) Alat ukur tersebut mengukur apa yang seharusnya diukur dengan tepat.<br>(2) Pertanyaannya sesuai dengan variabel yang ada di rumusan masalah.<br>(3) Memiliki ketepatan sasaran penelitian.<br>(4) Menghasilkan skor yang selalu stabil dan konsisten walau diulang berkali-kali.",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Validitas berarti ketepatan/kesahihan alat ukur (1, 2, 3 benar). Nomor (4) adalah definisi dari Reliabilitas (keajegan/konsistensi), bukan Validitas."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Pemberian status \"Pahlawan Nasional\" atau \"Bapak Pendidikan\" kepada seorang tokoh masyarakat dikategorikan sebagai Assigned Status.",
        options: opsiBenarSalahSosio,
        answer: 0, 
        explanation: "Assigned Status adalah status sosial yang diberikan oleh masyarakat atau negara sebagai bentuk penghargaan atas jasa-jasa seseorang."
    },
    {
        question: "Ketika terjadi wabah penyakit menular, muncul gejala sosial berupa kepanikan masyarakat yang memborong kebutuhan pokok di supermarket secara berlebihan (panic buying). Fenomena ini dari kacamata sosiologi dipengaruhi oleh faktor...",
        options: [
            "Struktural",
            "Psikologis",
            "Kultural",
            "Biologis",
            "Geografis"
        ],
        answer: 1, 
        explanation: "Panic buying dilandasi oleh kecemasan, ketakutan, dan irasionalitas massa. Faktor yang bekerja pada kejiwaan atau perilaku panik massa adalah faktor psikologis."
    },
    {
        question: "Langkah-langkah dalam pengolahan data kualitatif menurut Miles dan Huberman terdiri dari...<br><br>(1) Reduksi Data (Merangkum/memilah hal pokok)<br>(2) Penyajian Data (Narrative display)<br>(3) Penarikan Kesimpulan (Verifikasi)<br>(4) Analisis Regresi Linier",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Pengolahan data kualitatif terdiri dari Reduksi, Penyajian, dan Penarikan Kesimpulan (1,2,3). Nomor (4) analisis regresi adalah alat ukur statistik matematis untuk data Kuantitatif."
    },
    {
        question: "<b>Pernyataan:</b> Memaksakan budaya sendiri kepada suku bangsa lain dan menganggap budaya sendiri paling unggul merupakan perwujudan dari etnosentrisme.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Etnosentrisme memiliki dampak positif tunggal yaitu mempercepat proses asimilasi budaya di tingkat nasional.",
        options: opsiSebabAkibatSosio,
        answer: 2, 
        explanation: "Pernyataan BENAR (itu adalah definisi etnosentrisme). Alasan SALAH, etnosentrisme menghambat asimilasi karena bersifat eksklusif. Dampak positifnya hanya meningkatkan ikatan dalam kelompok sendiri (in-group feeling), bukan asimilasi nasional."
    },
    {
        question: "Sebuah penelitian dirancang untuk sekadar menggambarkan dan menjelaskan karakteristik fenomena sosial secara rinci (misalnya: Menggambarkan pola asuh keluarga single parent di perumahan X) tanpa bermaksud mencari hubungan sebab-akibat antar variabel. Penelitian ini berjenis...",
        options: [
            "Penelitian Eksperimen",
            "Penelitian Eksplanatif",
            "Penelitian Deskriptif",
            "Penelitian Eksploratif",
            "Penelitian Komparatif"
        ],
        answer: 2, 
        explanation: "Penelitian yang tujuannya hanya memaparkan, menggambarkan, atau mendeskripsikan suatu gejala secara sistematis dan detail disebut penelitian Deskriptif."
    },
    {
        question: "Peran sosiologi dalam membantu penelitian sosial sangat besar, salah satunya memberikan data empiris kepada pemangku kebijakan. Fungsi sosiologi berdasarkan narasi tersebut adalah untuk...",
        options: [
            "Menghentikan laju kriminalitas secara langsung.",
            "Perencanaan dan evaluasi pembangunan masyarakat.",
            "Menghakimi perilaku menyimpang masyarakat.",
            "Mendikte aparat hukum dalam bertugas.",
            "Menyeragamkan perbedaan budaya yang ada."
        ],
        answer: 1, 
        explanation: "Sosiologi berfungsi menyediakan data objektif agar pemerintah bisa merencanakan, melaksanakan, dan mengevaluasi program pembangunan yang tepat sasaran bagi masyarakat."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Hedonisme merupakan suatu pandangan hidup di mana penganutnya menganggap bahwa kesenangan, kemewahan materi, dan kenikmatan duniawi merupakan tujuan utama dalam hidup.",
        options: opsiBenarSalahSosio,
        answer: 0, 
        explanation: "Definisi tersebut sangat tepat. Hedonisme adalah gejala sosial yang muncul (sering akibat globalisasi) di mana kebahagiaan diukur mutlak dari kenikmatan fisik dan materi."
    },
    {
        question: "Di sebuah penelitian kuantitatif, peneliti mendapati bahwa data yang ia kumpulkan dari angket di lapangan sangat bertolak belakang dengan hipotesis awal yang ia bangun. Sikap ilmiah yang wajib dilakukan peneliti tersebut adalah...",
        options: [
            "Memanipulasi data angka agar sesuai dengan hipotesis yang telah dibuat.",
            "Melaporkan data secara apa adanya dan menyatakan bahwa hipotesis ditolak.",
            "Membuang data tersebut dan mencari responden baru yang bisa diarahkan.",
            "Mengganti rumusan masalah di bab awal tanpa merevisi apapun.",
            "Mengubah jawaban kuesioner responden satu per satu."
        ],
        answer: 1, 
        explanation: "Sikap jujur objektif adalah syarat mutlak (scientific attitude). Manipulasi data (fabrikasi/falsifikasi data) adalah pelanggaran berat akademis. Hipotesis yang ditolak adalah hal yang wajar dalam sains."
    },
    {
        question: "Kesenjangan sosial ekonomi yang semakin melebar antara si kaya dan si miskin di perkotaan seringkali diiringi oleh meningkatnya angka kriminalitas, timbulnya permukiman kumuh (slum area), dan masalah kesehatan. Fakta ini menegaskan bahwa...<br><br>(1) Gejala sosial bersifat kompleks dan saling berkaitan.<br>(2) Masalah ekonomi dapat memicu masalah sosial lainnya.<br>(3) Gejala sosial tidak bisa dilihat dari satu dimensi saja.<br>(4) Gejala sosial dapat diramalkan dengan kepastian 100% menggunakan ilmu eksakta.",
        options: opsiKompleksSosio,
        answer: 0, 
        explanation: "Pernyataan 1, 2, dan 3 benar, menunjukkan sifat gejala sosial yang berantai dan multidimensi. Nomor (4) salah, karena gejala sosial bersifat dinamis/berubah-ubah sehingga sangat sulit atau tidak mungkin diprediksi 100% pasti layaknya ilmu alam eksakta."
    },
    {
        question: "<b>Pernyataan:</b> Gejala sosial berupa tingginya arus urbanisasi pasca Lebaran selalu berpotensi menimbulkan masalah sosial di kota-kota besar.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Arus perpindahan penduduk desa ke kota (urbanisasi) yang tidak diimbangi dengan keterampilan hidup dan lapangan pekerjaan formal akan bermuara pada bertambahnya angka pengangguran.",
        options: opsiSebabAkibatSosio,
        answer: 0, 
        explanation: "Pernyataan benar (urbanisasi menimbulkan masalah kota) dan alasan benar (karena kurangnya skill dan lapangan kerja). Hubungannya sangat jelas dan kausal. Kepadatan penduduk tanpa penyerapan tenaga kerja = pengangguran/masalah sosial."
    }
];