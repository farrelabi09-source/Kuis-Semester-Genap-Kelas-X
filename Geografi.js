// --- DATA MATA PELAJARAN GEOGRAFI ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "geografi",
    name: "Geografi",
    icon: "ph-globe-hemisphere-west", // Ikon bumi untuk mapel Geografi
    color: "text-emerald-500 dark:text-emerald-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleksGeo = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibatGeo = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalahGeo = ["Benar", "Salah"];

// --- DATA SOAL GEOGRAFI KELAS X ---
window.quizData["geografi"] = [
    {
        question: "Fenomena gempa bumi sering melanda wilayah Indonesia, terutama di pesisir barat Sumatera dan selatan Jawa. Dari sudut pandang geologi tektonik, tingginya intensitas gempa di zona tersebut diakibatkan oleh...",
        options: [
            "Pertemuan dua lempeng benua yang saling menjauh (divergen).",
            "Tumbukan antara Lempeng Samudera Indo-Australia yang menunjam ke bawah Lempeng Benua Eurasia (konvergen).",
            "Gesekan mendatar (transform) antara lempeng Pasifik dan Eurasia.",
            "Pergerakan lempeng tektonik yang saling berpapasan secara pasif.",
            "Aktivitas vulkanisme dari punggung tengah samudera (mid-oceanic ridge)."
        ],
        answer: 1, 
        explanation: "Pesisir barat Sumatera dan selatan Jawa berada di zona subduksi (konvergen), di mana lempeng samudera Indo-Australia yang lebih berat menunjam ke bawah lempeng benua Eurasia, memicu gempa tektonik yang kuat."
    },
    {
        question: "<b>Pernyataan:</b> Suhu udara di lapisan Troposfer akan semakin menurun seiring dengan bertambahnya ketinggian tempat.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Sumber panas utama yang memanaskan lapisan Troposfer berasal dari pantulan radiasi panas permukaan bumi, bukan langsung dari sinar matahari.",
        options: opsiSebabAkibatGeo,
        answer: 0, 
        explanation: "Pernyataan benar (suhu turun 0,6°C tiap naik 100m/Lapse Rate) dan alasan benar. Atmosfer troposfer tidak menyerap panas matahari secara langsung, melainkan bumi menyerap panas itu lalu memantulkannya kembali, sehingga makin jauh dari permukaan bumi, suhu makin dingin."
    },
    {
        question: "Masyarakat yang tinggal di daerah hilir sungai seringkali menyalahkan curah hujan yang tinggi sebagai satu-satunya penyebab banjir bandang. Padahal, dari sudut pandang Daerah Aliran Sungai (DAS), banjir bandang lebih disebabkan oleh...",
        options: [
            "Tingginya tingkat infiltrasi air ke dalam tanah di daerah hulu.",
            "Perubahan tata guna lahan di daerah hulu dari hutan menjadi permukiman sehingga limpasan permukaan (run-off) meningkat.",
            "Pembuatan terasering pada lahan pertanian di daerah pegunungan.",
            "Adanya gaya coriolis yang membelokkan arah angin pembawa hujan.",
            "Proses kondensasi yang terlalu cepat di wilayah pesisir pantai."
        ],
        answer: 1, 
        explanation: "Banjir bandang terjadi karena air hujan tidak dapat meresap ke tanah (infiltrasi rendah) akibat hilangnya vegetasi hutan di hulu. Akibatnya, air meluncur deras ke bawah sebagai limpasan permukaan (run-off)."
    },
    {
        question: "Perhatikan bentuk-bentuk intrusi magma berikut!<br><br>(1) Batolit<br>(2) Lakolit<br>(3) Sill<br>(4) Maar",
        options: opsiKompleksGeo,
        answer: 0, 
        explanation: "Intrusi magma adalah penyusupan magma yang tidak sampai ke permukaan bumi. Batolit, lakolit, dan sill adalah bentuk intrusi. Maar (nomor 4) adalah bentuk gunung api hasil erupsi (ekstrusi) yang bentuknya seperti danau kawah. (1, 2, 3 benar)."
    },
    {
        question: "Di kawasan Gunung Kidul, Yogyakarta, banyak dijumpai fenomena goa kapur, stalaktit, stalagmit, dan sungai bawah tanah. Fenomena pembentukan muka bumi tersebut diklasifikasikan sebagai akibat dari gaya eksogen berupa...",
        options: [
            "Pelapukan mekanis akibat suhu.",
            "Erosi glasial oleh es.",
            "Pelapukan kimiawi (solusional) oleh air hujan.",
            "Sedimentasi aeolis oleh angin.",
            "Mass wasting akibat gravitasi."
        ],
        answer: 2, 
        explanation: "Batuan kapur (karst) sangat mudah melarut apabila terkena air hujan yang mengandung karbon dioksida. Proses pelarutan ini disebut pelapukan kimiawi."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Fenomena El Nino menyebabkan curah hujan di sebagian besar wilayah Indonesia meningkat drastis hingga menimbulkan bencana hidrometeorologi seperti banjir besar.",
        options: opsiBenarSalahGeo,
        answer: 1, 
        explanation: "El Nino justru menyebabkan pergeseran awan pembawa hujan menjauh dari Indonesia menuju Samudera Pasifik tengah/timur, sehingga Indonesia mengalami musim kemarau yang panjang dan kekeringan (bukan banjir). Hujan lebat/banjir justru terjadi saat La Nina."
    },
    {
        question: "Pada pembagian iklim menurut Junghuhn, wilayah dengan ketinggian 1.500 - 2.500 mdpl diklasifikasikan sebagai zona iklim sejuk. Tanaman budidaya yang paling cocok dikembangkan pada zona ini adalah...",
        options: [
            "Kelapa, tebu, dan jagung.",
            "Padi, karet, dan tembakau.",
            "Kopi, kina, dan teh.",
            "Sayuran, pinus, dan cemara.",
            "Lumut dan rumput alpin."
        ],
        answer: 3, 
        explanation: "Junghuhn mengklasifikasikan iklim berdasarkan ketinggian. Zona sejuk (1.500 - 2.500 mdpl) tidak lagi optimal untuk tanaman perkebunan panas/sedang, melainkan cocok untuk sayuran (hortikultura), pinus, dan cemara. Teh dan kopi optimal di zona sedang (600 - 1.500 mdpl)."
    },
    {
        question: "Terbentuknya patahan Semangko di sepanjang Pulau Sumatera menghasilkan deretan pegunungan Bukit Barisan dan lembah-lembah curam. Bagian daratan yang mengalami penurunan (merosot) pada patahan tersebut dikenal dengan istilah...",
        options: [
            "Horst",
            "Graben (Slenk)",
            "Sinklin",
            "Antiklin",
            "Kaldera"
        ],
        answer: 1, 
        explanation: "Pada proses patahan (sesar), blok batuan yang merosot ke bawah disebut Graben/Slenk, sedangkan bagian yang terangkat ke atas membentuk pegunungan patahan disebut Horst. Sinklin/Antiklin adalah bagian dari lipatan."
    },
    {
        question: "Nelayan tradisional Indonesia biasanya mulai pergi melaut untuk mencari ikan pada malam hari. Hal ini memanfaatkan fenomena sirkulasi atmosfer lokal, yaitu...",
        options: [
            "Angin darat, karena daratan lebih cepat dingin daripada lautan sehingga tekanan udara di darat lebih tinggi.",
            "Angin laut, karena daratan lebih cepat panas daripada lautan.",
            "Angin muson barat yang membawa banyak uap air.",
            "Angin fohn yang berhembus turun dari pegunungan pesisir.",
            "Angin pasat yang bertiup konstan sepanjang tahun."
        ],
        answer: 0, 
        explanation: "Malam hari daratan cepat dingin (tekanan maksimum), lautan masih hangat (tekanan minimum). Angin bergerak dari tekanan maksimum ke minimum (darat ke laut), dimanfaatkan nelayan untuk pergi melaut."
    },
    {
        question: "Wilayah laut yang memiliki kedalaman kurang dari 200 meter dan sinar matahari masih dapat menembus dasar laut sehingga kaya akan ikan dan terumbu karang disebut sebagai zona...",
        options: [
            "Litoral",
            "Neritik",
            "Batial",
            "Abisal",
            "Hadal"
        ],
        answer: 1, 
        explanation: "Zona neritik (laut dangkal) kedalamannya 0-200 meter. Karena cahaya matahari tembus sampai dasar, fotosintesis fitoplankton terjadi maksimal, membuatnya menjadi ekosistem laut paling kaya biota dan ikan."
    },
    {
        question: "Perhatikan faktor-faktor yang memengaruhi proses pembentukan tanah berikut!<br><br>(1) Iklim (Curah hujan dan Suhu)<br>(2) Organisme (Vegetasi dan Mikroorganisme)<br>(3) Topografi (Relief muka bumi)<br>(4) Waktu dan Bahan Induk",
        options: opsiKompleksGeo,
        answer: 4, 
        explanation: "Menurut Hans Jenny, tanah terbentuk dari 5 faktor utama: Bahan induk (parent material), Iklim (climate), Organisme (organisms), Topografi (relief), dan Waktu (time). (Semua pernyataan 1, 2, 3, 4 benar)."
    },
    {
        question: "<b>Pernyataan:</b> Air tanah artesis memiliki kualitas yang sangat jernih dan terhindar dari polusi permukaan.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Air tanah artesis (air tanah dalam) terjebak di antara dua lapisan batuan kedap air (impermeabel) sehingga tidak tercemar oleh limbah dari permukaan tanah.",
        options: opsiSebabAkibatGeo,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta memiliki hubungan. Karena dilindungi lapisan kedap air (aquiclude), air tanah artesis steril dari polusi, berbeda dengan air tanah dangkal (freatik)."
    },
    {
        question: "Lapisan atmosfer yang berfungsi melindungi bumi dari jatuhan meteor atau benda luar angkasa dengan cara membakarnya hingga habis adalah...",
        options: [
            "Troposfer",
            "Stratosfer",
            "Mesosfer",
            "Termosfer",
            "Eksosfer"
        ],
        answer: 2, 
        explanation: "Mesosfer adalah lapisan di mana gesekan molekul udara sangat tinggi sehingga mampu membakar meteor yang jatuh. Ketinggiannya sekitar 50-85 km."
    },
    {
        question: "Jika terjadi gempa bumi saat kamu sedang berada di lantai 3 gedung sekolah, langkah mitigasi yang paling tepat berdasarkan standar keselamatan internasional adalah...",
        options: [
            "Segera berlari keluar kelas menuju tangga darurat agar cepat sampai bawah.",
            "Melompat keluar jendela jika dirasa tidak terlalu tinggi.",
            "Melakukan Drop, Cover, Hold on di bawah meja yang kuat, dan menjauhi kaca.",
            "Bersembunyi di dalam lemari agar terhindar dari reruntuhan bangunan.",
            "Menyalakan alarm kebakaran dan diam di tempat berdiri."
        ],
        answer: 2, 
        explanation: "Berlari saat gempa sangat berbahaya karena guncangan dapat membuat terjatuh/tertimpa benda. Langkah mitigasi yang benar adalah Merunduk (Drop), Berlindung di bawah benda kuat (Cover), dan Berpegangan erat (Hold on)."
    },
    {
        question: "Berdasarkan letak astronomisnya, wilayah Indonesia memiliki iklim tropis. Namun, menurut klasifikasi iklim Koppen, sebagian besar wilayah pulau Kalimantan dan Sumatera termasuk dalam tipe iklim Af. Karakteristik tipe iklim Af adalah...",
        options: [
            "Musim kemarau yang sangat panjang dan ditumbuhi padang sabana.",
            "Hujan turun sepanjang tahun sehingga membentuk hutan hujan tropis yang lebat.",
            "Suhu udara sangat dingin karena berada di dataran tinggi.",
            "Curah hujan sangat sedikit dan merupakan daerah gurun pasir.",
            "Mengalami musim dingin dengan salju tipis setiap bulan Desember."
        ],
        answer: 1, 
        explanation: "Dalam klasifikasi Koppen, 'A' berarti Iklim Tropis, dan 'f' (feucht) berarti selalu basah/hujan sepanjang tahun. Af adalah Hutan Hujan Tropis (banyak di Sumatera, Kalimantan, Papua)."
    },
    {
        question: "Pada peta cuaca yang ditayangkan televisi, sering disebut adanya awan yang sangat tebal, menjulang tinggi secara vertikal, berwarna gelap, dan dapat membawa hujan badai serta petir. Awan tersebut adalah awan...",
        options: [
            "Cirrus",
            "Stratus",
            "Altocumulus",
            "Cumulonimbus",
            "Nimbostratus"
        ],
        answer: 3, 
        explanation: "Cumulonimbus (Cb) adalah satu-satunya awan raksasa vertikal yang menghasilkan cuaca ekstrem, hujan lebat, kilat, petir, dan kadang angin puting beliung."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Danau Toba di Sumatera Utara merupakan contoh murni dari danau tektonik yang terbentuk murni karena pergeseran lempeng bumi yang membentuk patahan.",
        options: opsiBenarSalahGeo,
        answer: 1, 
        explanation: "Danau Toba adalah jenis danau Tekto-vulkanik (khususnya kaldera raksasa/Supervolcano), bukan murni tektonik. Danau ini terbentuk dari letusan gunung api mahadahsyat jutaan tahun lalu, yang kemudian disusul amblesan tanah (proses tektonik) membentuk kaldera raksasa."
    },
    {
        question: "Gerakan air laut secara mendatar yang terjadi terus-menerus dan meliputi wilayah yang sangat luas disebut arus laut. Faktor utama yang menyebabkan terjadinya sirkulasi arus permukaan laut global adalah...",
        options: [
            "Gravitasi bulan yang menarik massa air.",
            "Letusan gunung api di dasar laut.",
            "Hembusan angin permukaan yang terjadi secara tetap sepanjang tahun (angin pasat/muson).",
            "Banyaknya sungai yang bermuara ke lautan.",
            "Tingginya penguapan di daerah ekuator."
        ],
        answer: 2, 
        explanation: "Arus permukaan laut (surface currents) dipicu terutama oleh angin global yang berhembus konstan. Sedangkan gaya gravitasi bulan/matahari memicu pasang-surut (tides)."
    },
    {
        question: "Di beberapa daerah pegunungan seperti Dieng, petani melakukan teknik pertanian dengan membuat teras-teras pada lereng bukit (Terasering). Tujuan utama dari konservasi tanah secara mekanis ini adalah...<br><br>(1) Memperlambat laju limpasan air permukaan (run-off).<br>(2) Memperbesar tingkat infiltrasi air ke dalam tanah.<br>(3) Mengurangi energi perusak air hujan sehingga mencegah longsor dan erosi tanah.<br>(4) Menghilangkan semua batuan kasar di dalam tanah.",
        options: opsiKompleksGeo,
        answer: 0, 
        explanation: "Terasering bertujuan mengendalikan run-off, meresapkan air, dan mencegah erosi (1, 2, 3 benar). Terasering tidak bertujuan menghilangkan komposisi batuan alami tanah (4 salah)."
    },
    {
        question: "<b>Pernyataan:</b> Suhu udara di perkotaan besar seringkali terasa lebih panas dibandingkan dengan kawasan perdesaan di sekitarnya.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Material beton, aspal, dan minimnya pepohonan di perkotaan menyebabkan fenomena Pulau Bahang Perkotaan (Urban Heat Island) di mana panas terperangkap.",
        options: opsiSebabAkibatGeo,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Asap kendaraan, minimnya lahan hijau, dan sifat aspal/beton yang menyimpan panas memicu fenomena UHI."
    },
    {
        question: "Berikut ini yang merupakan tanda-tanda alam sebelum terjadinya tsunami skala besar di wilayah pesisir, kecuali...",
        options: [
            "Terjadi gempa tektonik kuat dengan pusat gempa di dasar laut dangkal.",
            "Air laut di pantai tiba-tiba surut secara cepat jauh ke arah tengah laut.",
            "Tercium bau garam yang sangat menyengat secara tiba-tiba.",
            "Terdengar suara gemuruh yang kencang dari arah laut seperti suara pesawat jet.",
            "Suhu udara mendadak turun drastis hingga mencapai titik beku."
        ],
        answer: 4, 
        explanation: "Suhu udara turun ekstrem bukan merupakan tanda-tanda tsunami. Tsunami murni disebabkan oleh gelombang hidrodinamis akibat pergeseran dasar laut (A, B, C, D adalah indikasi khas yang sering terjadi sebelum tsunami menerjang)."
    },
    {
        question: "Air tanah yang berada di atas lapisan kedap air dan sangat mudah dipengaruhi oleh musim (bisa kering saat kemarau) disebut...",
        options: [
            "Air tanah freatik (dangkal)",
            "Air tanah artesis (dalam)",
            "Air tanah vados",
            "Air juvenil (magmatik)",
            "Air konat"
        ],
        answer: 0, 
        explanation: "Air tanah freatik adalah air sumur dangkal yang letaknya di atas lapisan impermeable pertama. Sangat bergantung pada resapan air hujan langsung, sehingga rentan kekeringan dan pencemaran."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Pemanasan global (Global Warming) murni terjadi karena semakin menipisnya lapisan Ozon di Stratosfer yang membuat sinar matahari masuk lebih banyak.",
        options: opsiBenarSalahGeo,
        answer: 1, 
        explanation: "Ini miskonsepsi umum. Pemanasan global disebabkan oleh penebalan efek Gas Rumah Kaca (GRK seperti CO2 dan Metana) di Troposfer yang memerangkap radiasi infra-merah bumi. Penipisan ozon adalah fenomena berbeda yang bahayanya adalah masuknya radiasi UV (kanker kulit), bukan pemicu utama naiknya suhu rata-rata global."
    },
    {
        question: "Angin muson barat yang bertiup pada bulan Oktober hingga April melewati Samudera Hindia dan masuk ke wilayah Indonesia. Dampak klimatologis dari pergerakan angin ini bagi sebagian besar wilayah Indonesia adalah...",
        options: [
            "Mengalami musim kemarau karena angin bersifat kering.",
            "Mengalami musim penghujan karena angin membawa banyak uap air laut.",
            "Mengalami musim dingin dan salju.",
            "Kelembaban udara menurun drastis sehingga sering terjadi kebakaran hutan.",
            "Terjadi badai siklon tropis setiap hari."
        ],
        answer: 1, 
        explanation: "Muson Barat berhembus dari Benua Asia menuju Australia. Karena melewati perairan luas (Laut Natuna, Samudera Hindia), angin ini jenuh uap air dan menurunkan hujan di Indonesia."
    },
    {
        question: "Pola aliran sungai yang bentuknya memusat menuju sebuah danau atau cekungan (seperti basin) disebut dengan pola aliran...",
        options: [
            "Dendritik",
            "Radial Sentrifugal",
            "Radial Sentripetal",
            "Trellis",
            "Rektangular"
        ],
        answer: 2, 
        explanation: "Sentripetal berarti menuju ke pusat (contoh sungai-sungai yang mengalir turun ke satu titik terendah seperti danau basin). Sentrifugal menyebar dari puncak gunung ke segala arah."
    },
    {
        question: "Dalam siklus hidrologi panjang, uap air yang terbawa angin dari lautan akan mengalami kondensasi menjadi awan di atas daratan pegunungan. Ketika suhu sangat dingin, proses yang terjadi selanjutnya adalah...<br><br>(1) Presipitasi dalam wujud salju.<br>(2) Penumpukan salju menjadi gletser.<br>(3) Pencairan es gletser yang mengalir menjadi sungai menuju laut.<br>(4) Infiltrasi seluruh air ke dasar bumi menjadi magma.",
        options: opsiKompleksGeo,
        answer: 0, 
        explanation: "Siklus panjang melibatkan perubahan uap air menjadi salju/es di pegunungan tinggi (1,2), yang perlahan mencair mengalir ke sungai (3). Air menyerap jadi magma (4) sangat tidak logis."
    },
    {
        question: "<b>Pernyataan:</b> Penggunaan pupuk kimia buatan secara berlebihan oleh petani tidak akan menimbulkan masalah pada kualitas air di sungai terdekat.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Senyawa kimia dari pupuk akan mengendap di dalam tanah secara permanen dan tidak bisa terbawa oleh aliran air permukaan.",
        options: opsiSebabAkibatGeo,
        answer: 4, 
        explanation: "Keduanya salah. Pemupukan berlebihan berisiko tercucinya bahan kimia ke badan air terdekat melalui limpasan (run-off), menyebabkan Eutrofikasi (sungai dipenuhi ganggang/eceng gondok akibat kaya nutrisi)."
    },
    {
        question: "Jenis batuan yang terbentuk dari sisa-sisa makhluk hidup purba, seperti cangkang kerang atau terumbu karang yang menumpuk berjuta-juta tahun di dasar laut, tergolong dalam...",
        options: [
            "Batuan beku luar",
            "Batuan beku dalam",
            "Batuan metamorf kontak",
            "Batuan sedimen organik",
            "Batuan sedimen klastik"
        ],
        answer: 3, 
        explanation: "Sisa makhluk hidup/organisme yang mengendap dan membatu disebut batuan sedimen organik (contohnya batu kapur/gamping dari cangkang koral)."
    },
    {
        question: "Pesisir utara Pulau Jawa tergolong daerah yang sangat rentan mengalami intrusi air laut (masuknya air asin ke sumur penduduk). Faktor geografi utama penyebab tingginya laju intrusi tersebut adalah...",
        options: [
            "Penggalian pasir laut untuk reklamasi reklamasi besar-besaran.",
            "Perubahan iklim yang mendinginkan laut Jawa.",
            "Pemompaan (pengambilan) air tanah dalam secara berlebihan oleh permukiman dan industri.",
            "Adanya patahan tektonik di dasar selat Sunda.",
            "Menurunnya salinitas air laut Jawa akibat musim hujan."
        ],
        answer: 2, 
        explanation: "Pengambilan air tanah secara masif menyebabkan rongga akuifer darat kosong, sehingga tekanan air tanah darat kalah kuat. Akibatnya, air laut menerobos masuk (intrusi) mencemari akuifer daratan."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Evaporasi (penguapan dari badan air) dan Transpirasi (penguapan dari tumbuhan) yang terjadi secara bersamaan di suatu daerah tangkapan air dikenal dengan istilah Evapotranspirasi.",
        options: opsiBenarSalahGeo,
        answer: 0, 
        explanation: "Evapotranspirasi adalah gabungan total penguapan yang terjadi dari segala permukaan (air darat, lautan) dan pelepasan uap air lewat stomata daun tumbuhan dalam suatu area."
    },
    {
        question: "Jika dalam perhitungan kelembapan nisbi (relatif) suatu daerah menunjukkan angka 100%, maka kondisi yang akan terjadi di wilayah tersebut adalah...",
        options: [
            "Cuaca sangat panas dan kering kerontang.",
            "Udara menjadi jenuh oleh uap air dan terjadi kondensasi atau turun hujan.",
            "Kecepatan angin meningkat membentuk badai siklon.",
            "Suhu udara akan meningkat melebihi titik didih.",
            "Proses evaporasi akan berlangsung paling cepat."
        ],
        answer: 1, 
        explanation: "Kelembaban relatif 100% berarti daya tampung udara terhadap uap air sudah maksimal (jenuh). Jika bertambah atau suhunya turun sedikit saja, uap air akan segera mengembun menjadi awan/hujan."
    },
    {
        question: "Berdasarkan letak geologisnya, wilayah Indonesia dilalui oleh dua sirkum pegunungan muda dunia, yaitu Sirkum Mediterania dan Sirkum Pasifik (Ring of Fire). Keuntungan geografis dari kondisi ini bagi tanah Indonesia adalah...",
        options: [
            "Bebas dari risiko gempa bumi karena lempeng tektonik mengunci satu sama lain.",
            "Tanah menjadi sangat subur akibat endapan abu vulkanik dari aktivitas gunung berapi.",
            "Indonesia memiliki padang rumput yang luas tanpa rintangan.",
            "Wilayah laut bertambah luas setiap tahun.",
            "Ketinggian gelombang laut selalu stabil sepanjang tahun."
        ],
        answer: 1, 
        explanation: "Di balik bencana vulkanisme, abu vulkanik yang telah melapuk (andosol) sangat kaya mineral hara yang membuat lahan agraris di Indonesia sangat subur."
    },
    {
        question: "<b>Pernyataan:</b> Penipisan ozon di lapisan stratosfer banyak diakibatkan oleh penggunaan gas CFC (Chlorofluorocarbon) yang terdapat pada AC dan kulkas.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Molekul CFC yang mencapai stratosfer akan dipecah oleh radiasi matahari, melepaskan klorin yang bereaksi dengan dan menghancurkan molekul ozon (O₃).",
        options: opsiSebabAkibatGeo,
        answer: 0, 
        explanation: "Keduanya benar dan berhubungan. Gas CFC memang merusak ozon dengan cara atom klorin mengikat satu atom oksigen dari ozon (O₃), mengubahnya menjadi oksigen biasa (O₂), yang tidak bisa menahan UV."
    },
    {
        question: "Wilayah Laut Merah diapit oleh jazirah Arab dan benua Afrika dikenal memiliki tingkat salinitas (kadar garam) yang sangat tinggi. Faktor oseanografi dan meteorologi pemicunya adalah...<br><br>(1) Tingginya curah hujan di kawasan tersebut.<br>(2) Penguapan air laut yang sangat tinggi karena suhu panas.<br>(3) Banyaknya sungai besar pembawa air tawar bermuara ke Laut Merah.<br>(4) Laut yang bersifat setengah tertutup dan minim suplai air tawar.",
        options: opsiKompleksGeo,
        answer: 2, 
        explanation: "Salinitas tinggi terjadi jika penguapan tinggi (2) dan suplai air tawar/hujan sangat rendah karena letaknya tertutup gurun (4). Pernyataan 1 dan 3 salah karena presipitasi tinggi dan sungai besar justru menurunkan kadar garam."
    },
    {
        question: "Jenis tanah yang banyak terdapat di Kalimantan dan Sumatera bagian timur yang terbentuk dari pembusukan bahan organik di rawa-rawa yang tergenang air dengan ciri tingkat keasaman tinggi (pH rendah) adalah tanah...",
        options: [
            "Vulkanis (Andosol)",
            "Aluvial",
            "Kapur (Renzina)",
            "Gambut (Organosol)",
            "Laterit"
        ],
        answer: 3, 
        explanation: "Tanah hasil pembusukan sisa tanaman dalam kondisi miskin oksigen (tergenang air rawa) adalah tanah gambut (organosol). Tanah ini masam dan warnanya hitam kecoklatan."
    },
    {
        question: "Peristiwa alam di mana angin yang mengandung uap air dipaksa naik melewati lereng pegunungan, suhunya turun lalu terbentuk awan dan hujan di lereng yang berhadapan dengan arah angin disebut sebagai hujan...",
        options: [
            "Konveksi",
            "Zenithal",
            "Orografis",
            "Frontal",
            "Sinklinal"
        ],
        answer: 2, 
        explanation: "Hujan orografis adalah hujan pegunungan. Massa udara dipaksa naik gunung, turun suhu, dan hujan lebat di lereng atas (windward). Di sisi sebaliknya menjadi daerah bayangan hujan yang kering."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Gerak Epirogenesa Positif ditandai dengan turunnya daratan sehingga seolah-olah permukaan air laut terlihat naik.",
        options: opsiBenarSalahGeo,
        answer: 0, 
        explanation: "Epirogenesa adalah gerak lambat meliputi area luas. 'Positif' berarti arahnya ke bawah (daratan turun), sehingga indikator fisiknya adalah garis pantai seolah maju dan laut naik merendam daratan."
    },
    {
        question: "Fenomena Upwelling (naiknya massa air dingin dan kaya nutrisi dari dasar laut ke permukaan) sangat menguntungkan bagi sektor perikanan karena...",
        options: [
            "Mencegah kapal nelayan karam akibat badai laut.",
            "Membuat air laut menjadi tawar sehingga ikan besar mati.",
            "Membawa fitoplankton melimpah yang memicu berkumpulnya kawanan ikan di permukaan.",
            "Menaikkan suhu air laut sehingga membuat ikan cepat bertelur.",
            "Menjernihkan air laut dan mengurangi gelombang."
        ],
        answer: 2, 
        explanation: "Upwelling membawa nutrisi dari laut dalam (nitrat, fosfat) naik ke zona fotik. Fitoplankton (produsen utama laut) pun meledak jumlahnya, sehingga rantai makanan aktif dan ikan-ikan berkumpul."
    },
    {
        question: "Di stasiun pemantau cuaca terdapat alat pengukur tekanan udara. Jika jarum pada barometer mendadak turun secara tajam, indikasi cuaca jangka pendek yang dapat diprediksi adalah...",
        options: [
            "Cuaca akan sangat cerah dan terik tanpa awan.",
            "Angin akan berhenti berhembus sama sekali.",
            "Suhu akan turun hingga titik beku tiba-tiba.",
            "Akan terjadi cuaca buruk, mendung gelap, atau badai sesaat lagi.",
            "Kelembaban udara akan hilang total."
        ],
        answer: 3, 
        explanation: "Penurunan tekanan udara (Barometer Drop) berarti daerah tersebut menjadi pusat tekanan rendah. Udara dari segala penjuru akan masuk membawa massa uap air besar yang sering kali berkembang menjadi awan cumulonimbus atau badai kencang."
    },
    {
        question: "<b>Pernyataan:</b> Proses pembentukan batuan metamorf (malihan) selalu membutuhkan waktu yang lama serta suhu dan tekanan yang sangat tinggi.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Batuan metamorf terbentuk dari batuan beku atau sedimen yang wujudnya meleleh 100% kembali menjadi magma cair di dalam perut bumi.",
        options: opsiSebabAkibatGeo,
        answer: 2, 
        explanation: "Pernyataan benar (metamorfosis butuh suhu & tekanan esktrem). Namun Alasan SALAH, karena batuan metamorf mengalami rekristalisasi fisika/kimia dalam wujud padat. Jika batuan sudah meleleh 100% menjadi magma, siklusnya kembali nol dan akan menjadi batuan beku (igneous) saat membeku nanti."
    }
];