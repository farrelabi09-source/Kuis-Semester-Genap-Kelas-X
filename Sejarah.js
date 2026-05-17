// --- DATA MATA PELAJARAN SEJARAH ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "sejarah",
    name: "Sejarah",
    icon: "ph-hourglass", // Ikon jam pasir untuk melambangkan waktu/sejarah
    color: "text-amber-500 dark:text-amber-400" 
});

// Pastikan objek window.quizData sudah ada
if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleks = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibat = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalah = ["Benar", "Salah"];

// --- DATA SOAL SEJARAH ---
window.quizData["sejarah"] = [
    {
        question: "Hipotesis Brahmana yang dikemukakan oleh J.C. van Leur menyatakan bahwa penyebaran kebudayaan Hindu di Nusantara dilakukan oleh kaum Brahmana. Kelemahan utama dari teori ini jika dihadapkan pada tradisi Hindu kuno adalah...",
        options: [
            "Kaum Brahmana tidak tertarik dengan kekayaan alam Nusantara.",
            "Kaum Brahmana dilarang menyeberangi lautan karena akan kehilangan kastanya.",
            "Bahasa Sanskerta terlalu sulit diajarkan kepada masyarakat Nusantara.",
            "Nusantara pada saat itu masih terisolasi dari jalur perdagangan India.",
            "Kaum Brahmana selalu bermusuhan dengan para pedagang yang pergi ke Nusantara."
        ],
        answer: 1, 
        explanation: "Dalam aturan kolot agama Hindu (Pantangan Mahapataka), seorang Brahmana dilarang keras menyeberangi lautan. Jika dilakukan, mereka akan kehilangan kemurnian kasta Brahmananya."
    },
    {
        question: "Ditemukannya Prasasti Yupa di Kutai, Kalimantan Timur, merupakan tonggak dimulainya masa aksara di Indonesia. Prasasti tersebut ditulis menggunakan huruf Pallawa dan bahasa Sanskerta. Fakta ini membuktikan bahwa...",
        options: [
            "Masyarakat Kutai adalah penemu huruf Pallawa.",
            "Kerajaan Kutai merupakan bawahan dari kerajaan di India Selatan.",
            "Nusantara telah masuk dalam jaringan pergaulan budaya internasional sejak abad ke-4 M.",
            "Raja Mulawarman berasal dari dinasti di India.",
            "Seluruh rakyat Kutai saat itu telah fasih berbahasa Sanskerta."
        ],
        answer: 2, 
        explanation: "Penggunaan huruf Pallawa (dari India Selatan) menunjukkan adanya interaksi kultural (akulturasi) yang kuat antara penduduk lokal Nusantara dengan kebudayaan luar (India), menandakan terbukanya jaringan pergaulan internasional."
    },
    {
        question: "Perhatikan peninggalan dan kebijakan masa Tarumanegara berikut!<br><br>(1) Penggalian Sungai Gomati sepanjang 12 km.<br>(2) Pembuatan saluran Candrabaga.<br>(3) Terdapat Prasasti Tugu yang menceritakan pengendalian banjir.<br>(4) Penyerangan militer terhadap Kerajaan Sriwijaya.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah fakta sejarah yang membuktikan perhatian Raja Purnawarman terhadap irigasi dan pengendalian banjir di Tarumanegara. Poin 4 salah, karena Tarumanegara tidak pernah menyerang Sriwijaya (Sriwijaya muncul setelah Tarumanegara runtuh)."
    },
    {
        question: "<b>Pernyataan:</b> Kerajaan Sriwijaya berhasil berkembang menjadi kemaharajaan maritim terbesar di Asia Tenggara pada abad ke-7 hingga ke-11.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Sriwijaya memiliki letak yang sangat strategis di Selat Malaka yang menjadi urat nadi perdagangan antara India dan Cina.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar. Keduanya memiliki hubungan sebab-akibat. Posisi strategis di Selat Malaka adalah faktor utama (sebab) yang membuat Sriwijaya menguasai perdagangan transit dan menjadi maritim kuat (akibat)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Candi-candi yang bercorak Hindu di Indonesia, seperti Candi Prambanan, pada dasarnya hanya berfungsi sebagai tempat pemakaman abu jenazah para raja.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "Candi Hindu di Indonesia berfungsi sebagai tempat pemujaan dewa (terutama dewa Trimurti) sekaligus sebagai pendharmaan (tempat memuliakan roh raja yang telah menyatu dengan dewa), bukan makam tempat menyimpan jenazah/abu jenazah secara harfiah."
    },
    {
        question: "Agama Buddha lebih mudah dan cepat diterima oleh masyarakat Nusantara di berbagai lapisan dibandingkan agama Hindu. Alasan logis yang melatarbelakangi hal ini adalah...",
        options: [
            "Agama Buddha dibawa oleh kaum pedagang yang kaya raya.",
            "Agama Buddha tidak mengenal sistem pelapisan sosial (kasta).",
            "Upacara ritual agama Buddha lebih mewah dan megah.",
            "Raja-raja di Nusantara dipaksa memeluk Buddha oleh Kaisar Cina.",
            "Agama Buddha merupakan agama asli nenek moyang bangsa Indonesia."
        ],
        answer: 1, 
        explanation: "Agama Buddha bersifat universal dan menolak sistem kasta (tingkatan derajat manusia), sehingga masyarakat dari golongan bawah sekalipun merasa memiliki kedudukan yang setara saat memeluknya."
    },
    {
        question: "Terkait dengan dinamika Kerajaan Mataram Kuno di Jawa Tengah, perhatikan pernyataan berikut!<br><br>(1) Diperintah oleh dua dinasti yang berbeda agama, yaitu Sanjaya (Hindu) dan Syailendra (Buddha).<br>(2) Membangun mahakarya Candi Borobudur pada masa Wangsa Syailendra.<br>(3) Kedua dinasti akhirnya disatukan melalui pernikahan politik Rakai Pikatan dan Pramodhawardhani.<br>(4) Kerajaan ini hancur akibat serangan dari armada Portugis.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah karakteristik dan sejarah Mataram Kuno. Poin 4 salah karena Mataram Kuno runtuh akibat bencana alam (letusan Merapi) dan serangan Sriwijaya, bukan Portugis yang baru datang abad ke-16."
    },
    {
        question: "Sumpah Palapa yang diucapkan oleh Mahapatih Gajah Mada merupakan manifesto politik Majapahit. Tujuan utama dari sumpah tersebut secara geopolitik adalah...",
        options: [
            "Mengalahkan dominasi perdagangan Kerajaan Sriwijaya.",
            "Menyatukan pulau-pulau di Nusantara di bawah hegemoni Majapahit.",
            "Menyebarkan agama Hindu ke seluruh pelosok Asia Tenggara.",
            "Mengusir penjajah Belanda dari bumi Nusantara.",
            "Membebaskan Nusantara dari kewajiban membayar upeti kepada Cina."
        ],
        answer: 1, 
        explanation: "Sumpah Palapa berisi ikrar Gajah Mada untuk tidak akan menikmati kenikmatan duniawi (palapa) sebelum berhasil menyatukan Nusantara di bawah kekuasaan Majapahit."
    },
    {
        question: "<b>Pernyataan:</b> Kerajaan Majapahit mengalami kemunduran yang cepat setelah wafatnya Hayam Wuruk dan Gajah Mada.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Terjadi Perang Paregreg, yaitu perang saudara memperebutkan takhta yang melemahkan kekuatan internal Majapahit.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar (Majapahit mundur pasca masa kejayaan) dan alasan benar (Perang Paregreg antara Bhre Wirabhumi dan Wikramawardhana). Hubungannya sangat jelas sebab-akibat."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Akulturasi kebudayaan lokal dengan Hindu-Buddha menghasilkan tradisi wayang kulit, di mana cerita Mahabarata dan Ramayana disisipkan tokoh Punakawan yang merupakan asli ciptaan masyarakat Jawa.",
        options: opsiBenarSalah,
        answer: 0, 
        explanation: "Wayang adalah budaya asli lokal yang kemudian diisi cerita epos India. Namun, tokoh Punakawan (Semar, Gareng, Petruk, Bagong) tidak ada dalam versi asli India; mereka adalah bentuk lokal genius bangsa kita."
    },
    {
        question: "Teori Gujarat (Snouck Hurgronje) menyatakan Islam masuk ke Nusantara pada abad ke-13 berasal dari Gujarat, India. Bukti arkeologis terkuat yang sering digunakan untuk mendukung teori ini adalah...",
        options: [
            "Berita perjalanan Marco Polo.",
            "Catatan harian laksamana Cheng Ho.",
            "Kesamaan corak nisan makam Sultan Malik al-Saleh dengan nisan di Cambay, India.",
            "Adanya tradisi Tabot di Pariaman, Sumatera Barat.",
            "Ditemukannya perkampungan Arab (Pekojan) di pesisir Sumatera."
        ],
        answer: 2, 
        explanation: "Batu nisan Sultan Malik al-Saleh (Raja Samudera Pasai) berangka tahun 1297 memiliki bentuk dan ukiran khas yang diimpor langsung dari Cambay, Gujarat, India."
    },
    {
        question: "Buya Hamka menolak Teori Gujarat dan mengemukakan Teori Mekkah. Salah satu argumen Hamka adalah penolakan terhadap mazhab. Fakta yang mendukung argumen ini adalah...",
        options: [
            "Nusantara menggunakan mazhab Syafi'i yang dominan di Mesir dan Mekkah, sedangkan Gujarat beraliran Syi'ah.",
            "Raja-raja di Nusantara lebih suka bergelar Sultan seperti di Mesir, bukan Syah seperti di India.",
            "Gujarat pada saat itu masih dikuasai oleh kerajaan Hindu.",
            "Bahasa yang digunakan dalam Al-Qur'an di Nusantara murni bahasa Arab.",
            "Masyarakat Nusantara menolak kedatangan pedagang India."
        ],
        answer: 0, 
        explanation: "Mayoritas muslim di Indonesia menganut mazhab Syafi'i, yang sama dengan penduduk di Mekkah dan Mesir pada saat itu. Jika Islam datang dari Gujarat, seharusnya Indonesia menganut Syi'ah atau Hanafi seperti di sana."
    },
    {
        question: "Strategi penyebaran Islam di Nusantara yang dilakukan secara damai dan efektif meliputi...<br><br>(1) Perkawinan politik antara pedagang muslim dengan putri bangsawan.<br>(2) Saluran pendidikan melalui pendirian pesantren.<br>(3) Pendekatan kesenian melalui wayang dan tembang.<br>(4) Penaklukan wilayah dengan ekspansi militer besar-besaran dari Arab.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Islamisasi di Nusantara awal mulanya berjalan damai melalui perdagangan, perkawinan, pendidikan (pesantren), dan kesenian/tasawuf. Poin 4 salah karena tidak ada ekspansi militer dari Timur Tengah untuk menyebarkan Islam di Nusantara."
    },
    {
        question: "Pendekatan kultural yang dilakukan Sunan Kalijaga dalam menyebarkan Islam di Pulau Jawa sangat cerdas karena...",
        options: [
            "Membangun masjid dengan gaya arsitektur Timur Tengah murni agar terlihat autentik.",
            "Menggunakan media wayang kulit dan gamelan dengan memasukkan nilai-nilai tauhid Islam.",
            "Menghapuskan seluruh adat istiadat Jawa dan menggantinya dengan budaya Arab.",
            "Memaksa masyarakat Hindu untuk memakan daging sapi agar berbeda dengan keyakinan lamanya.",
            "Mengandalkan kekayaan materi untuk menarik simpati rakyat miskin."
        ],
        answer: 1, 
        explanation: "Sunan Kalijaga menggunakan kesenian lokal (wayang) yang sangat disukai masyarakat sebagai media dakwah, sehingga Islam mudah diterima tanpa menimbulkan konflik kebudayaan."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Masjid Agung Demak merupakan bukti akulturasi budaya Islam dan lokal, yang terlihat dari atap masjidnya yang berbentuk kubah layaknya masjid di Timur Tengah.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "Ciri khas akulturasi Masjid Demak justru terletak pada atapnya yang berbentuk tumpang (bersusun/meru) seperti bangunan suci masa Hindu, bukan berbentuk kubah."
    },
    {
        question: "<b>Pernyataan:</b> Kerajaan Samudera Pasai merupakan kerajaan Islam pertama di Indonesia yang mencapai puncak kejayaannya sebagai pusat perdagangan lada dan pusat studi Islam.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Letaknya sangat strategis di ujung utara Pulau Sumatera, menguasai pintu masuk Selat Malaka.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar. Letak di pintu masuk Selat Malaka menjadikan Pasai tempat transit kapal internasional, yang mendorong kemajuannya di bidang ekonomi (lada) dan agama."
    },
    {
        question: "Jatuhnya Malaka ke tangan Portugis pada tahun 1511 memberikan dampak yang tidak terduga bagi penyebaran Islam di Nusantara, yaitu...",
        options: [
            "Islam lenyap dari jalur perdagangan Asia Tenggara.",
            "Kerajaan-kerajaan Islam di pesisir utara Jawa memihak Portugis.",
            "Pedagang muslim memindahkan rute perdagangannya ke pesisir barat Sumatera, Sunda Kelapa, dan Banten.",
            "Portugis berhasil mengkristenkan seluruh wilayah Maluku.",
            "Berakhirnya dominasi pedagang Arab di lautan Hindia."
        ],
        answer: 2, 
        explanation: "Pedagang muslim menolak berdagang di Malaka yang dikuasai Portugis. Mereka mencari rute baru melewati pesisir Barat Sumatera dan Selat Sunda, yang justru memunculkan pelabuhan baru seperti Aceh dan Banten."
    },
    {
        question: "Perhatikan fakta tentang Kesultanan Mataram Islam di bawah pemerintahan Sultan Agung!<br><br>(1) Menyatukan sebagian besar Pulau Jawa.<br>(2) Mengakulturasi Kalender Saka (Hindu) dengan Kalender Hijriah (Islam) menjadi Kalender Jawa.<br>(3) Menyerang kedudukan VOC di Batavia pada tahun 1628 dan 1629.<br>(4) Menandatangani Perjanjian Giyanti yang memecah belah kerajaannya.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah pencapaian dan tindakan Sultan Agung. Poin 4 salah karena Perjanjian Giyanti (1755) terjadi jauh setelah Sultan Agung wafat (pada masa Pakubuwono III)."
    },
    {
        question: "<b>Pernyataan:</b> Kerajaan Aceh Darussalam berhasil mencapai masa keemasannya pada masa pemerintahan Sultan Iskandar Muda.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Sultan Iskandar Muda berhasil menaklukkan Malaka dari tangan Portugis dan memonopoli rempah-rempah.",
        options: opsiSebabAkibat,
        answer: 2, 
        explanation: "Pernyataan benar (Iskandar Muda membawa Aceh ke puncak kejayaan). Namun Alasan SALAH, karena meskipun Iskandar Muda menyerang Portugis di Malaka, Aceh gagal menaklukkan Malaka dari Portugis."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Dalam kebudayaan Islam di Nusantara, seni rupa yang menampilkan figur mahluk hidup (manusia dan hewan) secara realistis sangat berkembang pesat di keraton-keraton.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "Dalam ajaran Islam awal, melukis makhluk hidup secara realistis dilarang/dihindari. Sebagai solusinya (akulturasi), seni rupa berkembang ke arah seni ukir daun-daunan/flora, kaligrafi, dan modifikasi bentuk hewan menjadi stilir (disamarkan)."
    },
    {
        question: "Kesultanan Demak memainkan peran ganda dalam sejarah Islam di Jawa, yaitu sebagai kekuatan politik militer dan sebagai...",
        options: [
            "Pusat pertanian padi terbesar di Asia.",
            "Basis penyebaran agama Islam oleh para Wali Songo.",
            "Sekutu utama VOC dalam mengalahkan Portugis.",
            "Pusat peninggalan kebudayaan Hindu yang diawetkan.",
            "Kerajaan pertama yang menggunakan kapal uap."
        ],
        answer: 1, 
        explanation: "Demak didirikan dengan dukungan para wali. Masjid Agung Demak dijadikan pusat pertemuan Wali Songo untuk merencanakan strategi dakwah Islam di seluruh tanah Jawa."
    },
    {
        question: "Faktor yang membuat Kerajaan Banten tumbuh menjadi bandar perdagangan internasional yang ramai pada abad ke-16 adalah...",
        options: [
            "Banten berhasil menaklukkan Kerajaan Sriwijaya.",
            "Adanya pelarangan berdagang di Selat Malaka oleh Portugis.",
            "Banten merupakan satu-satunya daerah penghasil pala dan cengkeh.",
            "Banten menyerahkan monopoli perdagangannya kepada VOC.",
            "Karena rute pelayaran dari Eropa langsung menuju Banten tanpa melewati India."
        ],
        answer: 1, 
        explanation: "Seperti dijelaskan pada pertanyaan sebelumnya, jatuhnya Malaka ke Portugis membuat pedagang Muslim mengalihkan rutenya melewati Selat Sunda. Banten yang berada di tepi Selat Sunda mendapat durian runtuh menjadi pelabuhan transit yang ramai."
    },
    {
        question: "Konflik internal Kerajaan Mataram Islam sering kali dimanfaatkan oleh VOC (Belanda). Puncaknya adalah campur tangan VOC yang berujung pada disepakatinya Perjanjian Giyanti (1755), yang isinya adalah...",
        options: [
            "VOC memonopoli perdagangan beras di Mataram.",
            "Kerajaan Mataram Islam resmi dibubarkan.",
            "Wilayah Mataram dibagi menjadi dua: Kasunanan Surakarta dan Kasultanan Yogyakarta.",
            "Seluruh kerabat keraton Mataram diasingkan ke luar Jawa.",
            "Ibu kota Mataram dipindahkan ke Batavia."
        ],
        answer: 2, 
        explanation: "Perjanjian Giyanti adalah strategi devide et impera (pecah belah) Belanda yang secara de facto dan de jure membelah Mataram menjadi Surakarta (Paku Buwono) dan Yogyakarta (Hamengku Buwono)."
    },
    {
        question: "Kerajaan Gowa-Tallo (Makassar) merupakan kerajaan maritim yang tangguh di Indonesia Timur. Perhatikan fakta berikut:<br><br>(1) Menguasai jalur pelayaran rempah-rempah di kawasan timur.<br>(2) Memiliki hukum laut komersial yang disebut Ade' Allopiloping Bicaranna Pabbahi'e (hukum laut Amanna Gappa).<br>(3) Dipimpin oleh Sultan Hasanuddin yang dijuluki Ayam Jantan dari Timur.<br>(4) Kerajaan ini beraliran Syi'ah.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah fakta kebesaran Gowa-Tallo di bawah Sultan Hasanuddin. Poin 4 salah, karena Makassar (dan mayoritas Nusantara) beraliran Ahlu Sunnah wal Jamaah (Sunni)."
    },
    {
        question: "<b>Pernyataan:</b> Kerajaan Gowa-Tallo (Makassar) mengalami kemunduran drastis setelah ditandatanganinya Perjanjian Bongaya (1667).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Perjanjian Bongaya mewajibkan Gowa-Tallo melepaskan wilayah taklukannya dan mengakui hak monopoli perdagangan VOC di Makassar.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Monopoli VOC mematikan urat nadi ekonomi maritim Makassar yang bebas, sehingga kerajaan ini merosot."
    },
    {
        question: "Dalam struktur masyarakat kerajaan-kerajaan Maluku (Ternate dan Tidore), dikenal istilah Uli Lima dan Uli Siwa. Istilah tersebut merujuk pada...",
        options: [
            "Pembagian jenis rempah-rempah yang dijual ke Eropa.",
            "Persekutuan adat/daerah yang saling bersaing memperebutkan hegemoni perdagangan.",
            "Sistem pergantian sultan berdasarkan keturunan.",
            "Nama armada perang Portugis dan Spanyol di Maluku.",
            "Jenis kapal layar khas masyarakat Indonesia timur."
        ],
        answer: 1, 
        explanation: "Uli Lima (persekutuan lima bersaudara dipimpin Ternate) dan Uli Siwa (persekutuan sembilan bersaudara dipimpin Tidore) adalah dua kubu persekutuan dagang dan militer lokal yang bersaing di Maluku."
    },
    {
        question: "Berkaitan dengan kedatangan bangsa Eropa ke Nusantara, perhatikan pernyataan berikut!<br><br>(1) Spanyol bersekutu dengan Kerajaan Tidore.<br>(2) Portugis bersekutu dengan Kerajaan Ternate.<br>(3) Persaingan Spanyol dan Portugis di Maluku diselesaikan lewat Perjanjian Saragosa.<br>(4) Bangsa Eropa datang semata-mata untuk melakukan penyebaran agama Kristen (Gospel) tanpa niat ekonomi.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah rentetan peristiwa di Maluku awal abad 16. Poin 4 salah karena tujuan utama mereka adalah Gold (kekayaan ekonomi/rempah) di samping Glory dan Gospel."
    },
    {
        question: "Komoditas rempah-rempah yang paling dicari oleh bangsa Eropa dan menjadi alasan utama mereka datang ke Kepulauan Maluku adalah...",
        options: [
            "Lada dan ketumbar",
            "Cengkeh dan pala",
            "Kapur barus dan kemenyan",
            "Kopi dan teh",
            "Gula dan tembakau"
        ],
        answer: 1, 
        explanation: "Maluku dijuluki The Spice Islands karena merupakan satu-satunya produsen cengkeh (Ternate/Tidore) dan pala/fuli (Banda) di dunia pada masa itu. (Lada dominan di Sumatera/Banten, kopi/teh baru dibawa Belanda abad 18/19)."
    },
    {
        question: "<b>Pernyataan:</b> Runtuhnya dominasi Kerajaan Banten pada akhir abad ke-17 disebabkan oleh pemberontakan dari dalam keraton sendiri.<br><br><b>Sebab</b><br><br><b>Alasan:</b> VOC memanfaatkan konflik keluarga antara Sultan Ageng Tirtayasa dan putranya, Sultan Haji, untuk merebut kendali atas Banten.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Keduanya benar dan berhubungan. Belanda menghasut Sultan Haji untuk melawan ayahnya (Sultan Ageng Tirtayasa yang anti-Belanda). Kemenangan Sultan Haji yang dibantu VOC membuat Banten jatuh ke tangan monopoli Belanda."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Upacara Grebeg Maulud (Sekaten) di keraton Jawa merupakan tradisi murni peninggalan agama Hindu yang diadaptasi begitu saja tanpa adanya sentuhan nilai-nilai Islam.",
        options: opsiBenarSalah,
        answer: 1, 
        explanation: "Sekaten adalah hasil akulturasi sinkretis. Tradisi mengumpulkan massa dengan gamelan dimanfaatkan oleh Wali Songo/Keraton Islam untuk memperingati Maulid Nabi Muhammad SAW dan membacakan Syahadat (asal kata Syahadatain = Sekaten)."
    },
    {
        question: "Konsep Jalur Sutra (Silk Road) sangat terkenal di dunia masa lalu. Nusantara tidak berada dalam jalur darat tersebut, melainkan membentuk \"Jalur Rempah\" (Spice Route). Perbedaan mendasar kedua rute ini bagi Nusantara adalah...",
        options: [
            "Jalur Sutra melalui lautan, Jalur Rempah melalui daratan benua.",
            "Nusantara menjadi produsen utama komoditas Jalur Rempah, sementara pada Jalur Sutra Nusantara hanya menjadi konsumen pasif.",
            "Jalur Rempah dikuasai oleh Cina, Jalur Sutra dikuasai oleh India.",
            "Keduanya memperdagangkan barang yang sama persis namun di musim yang berbeda.",
            "Jalur Rempah tidak terhubung sama sekali dengan peradaban Eropa."
        ],
        answer: 1, 
        explanation: "Dalam Jaringan perdagangan maritim global, Nusantara adalah pemain aktif (produsen utama rempah-rempah yang diekspor). Berbeda dengan Jalur Sutra di mana Cina yang menjadi produsen utamanya."
    },
    {
        question: "Indikasi yang membuktikan bahwa perairan Nusantara merupakan jalur perlintasan internasional yang sangat penting pada masa kuno hingga madya adalah...<br><br>(1) Ditemukannya porselen Cina dari dinasti-dinasti kuno di dasar laut Nusantara (harta karun kapal karam).<br>(2) Adanya catatan musafir asing seperti Fa-Hien, I-Tsing, dan Ibnu Battuta.<br>(3) Tumbuhnya kerajaan-kerajaan pesisir dengan struktur masyarakat yang kosmopolitan.<br>(4) Penduduk Nusantara menutup diri dari bangsa asing demi menjaga kemurnian budaya.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah bukti empiris ramainya laut Nusantara. Poin 4 bertentangan dengan fakta sejarah, karena masyarakat pesisir Nusantara sangat terbuka (terjadi asimilasi dan akulturasi budaya)."
    },
    {
        question: "Historiografi Tradisional di Indonesia (seperti Babad Tanah Jawi atau Hikayat Raja-Raja Pasai) memiliki ciri-ciri khusus. Kekurangan utama menggunakan Historiografi Tradisional sebagai sumber sejarah adalah...",
        options: [
            "Penulisannya murni berdasarkan penelitian akademis barat.",
            "Bersifat istanasentris dan banyak bercampur dengan mitos atau legitimasi supranatural raja.",
            "Ditulis menggunakan bahasa Belanda yang sulit diterjemahkan.",
            "Hanya fokus menceritakan penderitaan rakyat jelata.",
            "Terlalu mengedepankan kronologi tahun yang presisi."
        ],
        answer: 1, 
        explanation: "Ciri historiografi tradisional adalah istanasentris (berpusat pada kehidupan istana/raja), religio-magis (raja dianggap titisan dewa/punya kekuatan gaib), sehingga bias untuk dipakai sebagai sumber fakta objektif."
    },
    {
        question: "<b>Pernyataan:</b> Masuknya Islam membawa perubahan struktur sosial masyarakat di Nusantara, salah satunya adalah pudarnya sistem kasta.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Konsep Islam memandang semua manusia (mukmin) memiliki kedudukan yang setara di mata Tuhan, yang membedakan hanyalah ketakwaannya.",
        options: opsiSebabAkibat,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar. Ajaran egalitarian (kesetaraan) dalam Islam menjadi penyebab berangsur pudarnya pelapisan sosial (kasta) bawaan masa Hindu di masyarakat luas."
    },
    {
        question: "Berdasarkan catatan sejarah, keberadaan komunitas Muslim di Pulau Jawa sudah ada jauh sebelum era Wali Songo (abad ke-15). Bukti tertua yang mengindikasikan adanya orang Islam di Jawa pada abad ke-11 adalah...",
        options: [
            "Masjid Agung Demak.",
            "Makam Maulana Malik Ibrahim di Gresik.",
            "Makam Fatimah binti Maimun di Leran, Gresik (berangka tahun 1082 M).",
            "Berita perjalanan I-Tsing.",
            "Menara Kudus."
        ],
        answer: 2, 
        explanation: "Batu nisan Fatimah binti Maimun di Leran, Gresik berangka tahun 1082 M (abad ke-11) adalah bukti fisik/arkeologis tertua kehadiran orang muslim di Pulau Jawa."
    },
    {
        question: "Jalur Rempah di Nusantara dimungkinkan oleh teknologi pelayaran lokal dan pemahaman akan alam. Bukti kehebatan maritim bangsa Indonesia meliputi...<br><br>(1) Penggunaan sistem angin muson untuk menentukan waktu pelayaran.<br>(2) Pembuatan perahu bercadik yang mampu menyeberangi Samudera Hindia.<br>(3) Pembuatan kapal Jung (Jong) raksasa oleh masyarakat Jawa.<br>(4) Penemuan kompas magnetik pertama di dunia oleh Kerajaan Sriwijaya.",
        options: opsiKompleks,
        answer: 0, 
        explanation: "Poin 1, 2, dan 3 adalah bukti kemampuan pelayaran dan teknologi perkapalan bangsa Nusantara (Jong Jawa sangat terkenal). Poin 4 salah karena kompas magnetik ditemukan oleh peradaban Cina kuno."
    },
    {
        question: "Jatuhnya ibukota Romawi Timur (Konstantinopel) ke tangan Turki Utsmani pada tahun 1453 memberikan dampak berantai yang pada akhirnya mengubah peta sejarah Nusantara. Hubungan yang tepat antara kedua peristiwa tersebut adalah...",
        options: [
            "Turki Utsmani mengirim tentaranya untuk menjajah Maluku.",
            "Harga rempah di Eropa melonjak tajam karena akses ditutup, memaksa bangsa Eropa mencari rute langsung ke Nusantara.",
            "Rempah Nusantara tidak laku di Eropa karena digantikan rempah dari Turki.",
            "Nusantara bersatu membantu Turki Utsmani melawan Eropa.",
            "Bangsa Eropa berhenti mengonsumsi rempah-rempah."
        ],
        answer: 1, 
        explanation: "Konstantinopel adalah gerbang distribusi rempah Asia ke Eropa. Saat ditutup Turki Utsmani, pasokan rempah ke Eropa terputus sehingga harganya melambung. Ini memicu era Penjelajahan Samudera (Eropa mencari langsung Maluku/Nusantara)."
    },
    {
        question: "<b>Pernyataan:</b> Perdagangan pada masa kejayaan Jalur Rempah bersifat barter lokal yang sempit dan tidak mengenal sistem mata uang.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Masyarakat Nusantara pada masa itu hidup di daerah pegunungan yang terisolir.",
        options: opsiSebabAkibat,
        answer: 4, 
        explanation: "Keduanya SALAH. Perdagangan Jalur Rempah berskala internasional dan sudah menggunakan mata uang (seperti dirham di Pasai, uang kepeng Cina di Majapahit). Masyarakat juga tidak terisolir melainkan membentuk kerajaan pesisir yang terbuka."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Kitab Negarakertagama karangan Mpu Prapanca merupakan salah satu sumber primer penting untuk mempelajari struktur pemerintahan, wilayah kekuasaan, dan kehidupan masyarakat Kerajaan Majapahit.",
        options: opsiBenarSalah,
        answer: 0, 
        explanation: "Kakawin Negarakertagama (Desawarnana) ditulis langsung pada masa pemerintahan Hayam Wuruk (1365 M) dan berisi deskripsi detail yang sangat berharga secara historis mengenai kejayaan Majapahit."
    },
    {
        question: "Integrasi (penyatuan) wilayah dan bangsa Nusantara sebelum masa kolonial Belanda, utamanya dipercepat oleh dua faktor penting secara bersamaan pada abad 15-16, yaitu...",
        options: [
            "Intervensi militer Cina dan masuknya paham komunis.",
            "Penyebaran bahasa Sanskerta dan migrasi massal dari India.",
            "Ekspansi kerajaan agraris dan pembangunan jalan tol lintas pulau.",
            "Perdagangan antar-pulau (maritim) dan penyebaran agama Islam.",
            "Paksaan dari bangsa Portugis untuk bersatu melawan Spanyol."
        ],
        answer: 3, 
        explanation: "Ulama dan pedagang menggunakan jalur laut yang sama. Jaringan perdagangan antarpulau membuat masyarakat saling berinteraksi, dan bahasa Melayu serta agama Islam menjadi \"perekat\" (lingua franca & identitas bersama) yang mengintegrasikan berbagai pulau di Nusantara."
    }
];