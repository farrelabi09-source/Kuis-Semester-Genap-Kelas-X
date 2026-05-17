// --- DATA MATA PELAJARAN PENDIDIKAN PANCASILA ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "pancasila",
    name: "Pendidikan Pancasila",
    icon: "ph-flag-banner", // Ikon bendera melambangkan kenegaraan/kebangsaan
    color: "text-red-500 dark:text-red-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleksPKn = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibatPKn = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalahPKn = ["Benar", "Salah"];

// --- DATA SOAL PENDIDIKAN PANCASILA KELAS X SEMESTER GENAP ---
window.quizData["pancasila"] = [
    {
        question: "Di era digital, banyak remaja Indonesia yang lebih hafal lagu dan tarian K-Pop dibandingkan lagu daerah atau tarian tradisional. Jika dibiarkan, hal ini berpotensi menjadi ancaman non-militer di bidang sosial budaya. Langkah paling strategis dari sudut pandang wawasan nusantara untuk mengatasi hal ini adalah...",
        options: [
            "Memblokir seluruh akses internet yang menampilkan budaya asing.",
            "Menjadikan budaya lokal sebagai konten kreatif digital yang kekinian.",
            "Menghukum siswa yang kedapatan menonton budaya asing di sekolah.",
            "Mewajibkan penggunaan pakaian adat setiap hari di ruang publik.",
            "Mengisolasi diri dari pergaulan internasional."
        ],
        answer: 1, 
        explanation: "Wawasan nusantara tidak bersifat tertutup (isolatif) atau memblokir perkembangan zaman. Pendekatan terbaik menghadapi ancaman sosial budaya di era digital adalah adaptasi (akulturasi) yang inovatif."
    },
    {
        question: "Perhatikan pernyataan berikut: \"Batas wilayah laut Indonesia tidak lagi hanya 3 mil dari garis pantai, melainkan ditarik dari garis dasar yang menghubungkan titik-titik terluar pulau-pulau di Indonesia.\" Konsep ini merupakan tonggak lahirnya Wawasan Nusantara yang dideklarasikan pada 13 Desember 1957 yang dikenal dengan...",
        options: [
            "Sumpah Pemuda",
            "Dekrit Presiden",
            "Deklarasi Djuanda",
            "Perjanjian Roem-Royen",
            "Konferensi Meja Bundar"
        ],
        answer: 2, 
        explanation: "Deklarasi Djuanda (1957) adalah landasan historis wawasan nusantara yang mengubah batas teritorial laut Indonesia (konsep Archipelagic State), menyatukan perairan antar pulau menjadi satu kesatuan NKRI."
    },
    {
        question: "Seseorang yang memiliki sikap etnosentrisme yang berlebihan akan menganggap kebudayaan sukunya lebih tinggi dibanding suku lain. Dampak paling fatal dari sikap ini terhadap Integrasi Nasional adalah...",
        options: [
            "Terjadinya asimilasi budaya secara cepat.",
            "Munculnya disintegrasi dan konflik komunal berbasis SARA.",
            "Meningkatnya persaingan ekonomi antar daerah.",
            "Terbentuknya partai politik lokal yang kuat.",
            "Menurunnya tingkat pendidikan masyarakat."
        ],
        answer: 1, 
        explanation: "Etnosentrisme yang berlebihan memicu prasangka dan diskriminasi, yang merupakan bom waktu terjadinya disintegrasi (perpecahan) bangsa atau konflik sosial berskala SARA."
    },
    {
        question: "Berdasarkan UUD NRI Tahun 1945 Pasal 30 ayat (2), sistem pertahanan dan keamanan negara Indonesia adalah Sishankamrata. Dalam sistem ini, posisi rakyat adalah sebagai...",
        options: [
            "Kekuatan utama",
            "Kekuatan pendukung",
            "Kekuatan inti",
            "Kekuatan bayangan",
            "Kekuatan terpisah"
        ],
        answer: 1, 
        explanation: "Dalam Sishankamrata (Sistem Pertahanan dan Keamanan Rakyat Semesta), TNI dan Polri adalah 'kekuatan utama', sedangkan rakyat berkedudukan sebagai 'kekuatan pendukung'."
    },
    {
        question: "Berikut ini yang merupakan contoh perwujudan bela negara yang paling relevan bagi seorang pelajar SMA di masa damai adalah...",
        options: [
            "Mengikuti latihan militer wajib di barak tentara.",
            "Membeli senjata api untuk berjaga-jaga dari pencuri.",
            "Mempelajari dan melestarikan budaya bangsa serta tidak menyebarkan hoaks.",
            "Menjadi intelijen negara yang memata-matai teman sendiri.",
            "Mengusir warga negara asing yang berkunjung ke daerahnya."
        ],
        answer: 2, 
        explanation: "Bela negara non-fisik bagi pelajar di masa damai difokuskan pada pengabdian sesuai profesi/status, yakni belajar dengan baik, menjaga persatuan (menangkal hoaks), dan mencintai produk/budaya dalam negeri."
    },
    {
        question: "Kasus sengketa Blok Ambalat antara Indonesia dan Malaysia berulang kali memanas. Secara hukum internasional, penyelesaian sengketa wilayah batas negara sebaiknya ditempuh melalui...",
        options: [
            "Invasi militer agar cepat selesai.",
            "Memutus hubungan diplomatik sepenuhnya.",
            "Perundingan bilateral atau melalui Mahkamah Internasional (ICJ).",
            "Meminta bantuan militer dari negara sekutu.",
            "Mengabaikan sengketa karena bukan masalah penting."
        ],
        answer: 2, 
        explanation: "Sesuai prinsip politik luar negeri yang damai dan PBB, sengketa antarnegara harus diselesaikan secara damai melalui diplomasi bilateral atau jalur hukum di Mahkamah Internasional."
    },
    {
        question: "Syarat utama keberhasilan integrasi nasional di suatu negara yang majemuk adalah terwujudnya konsensus nasional. Makna dari konsensus nasional adalah...",
        options: [
            "Pemaksaan kehendak kelompok mayoritas terhadap minoritas.",
            "Kesepakatan bersama yang mengikat seluruh elemen bangsa terhadap nilai-nilai dasar.",
            "Penyatuan wilayah secara militer oleh pemerintah pusat.",
            "Penyeragaman seluruh bahasa daerah menjadi satu bahasa baku.",
            "Penghapusan segala bentuk agama dan kepercayaan."
        ],
        answer: 1, 
        explanation: "Konsensus (kesepakatan bersama) terkait nilai dasar seperti Pancasila, UUD 1945, dan Bhinneka Tunggal Ika adalah syarat mutlak agar masyarakat majemuk bisa hidup rukun."
    },
    {
        question: "Masuknya paham radikalisme dan komunisme yang mencoba menggantikan Pancasila diklasifikasikan sebagai bentuk ancaman di bidang...",
        options: [
            "Politik",
            "Ekonomi",
            "Ideologi",
            "Sosial Budaya",
            "Pertahanan"
        ],
        answer: 2, 
        explanation: "Ancaman yang menargetkan dasar pemikiran, falsafah, dan dasar negara (Pancasila) secara spesifik disebut ancaman ideologi."
    },
    {
        question: "Perdagangan bebas dan munculnya perusahaan multinasional yang mematikan UMKM lokal merupakan salah satu dampak dari globalisasi. Kasus ini termasuk dalam dimensi ancaman...",
        options: [
            "Politik",
            "Ekonomi",
            "Militer",
            "Demografi",
            "Teritorial"
        ],
        answer: 1, 
        explanation: "Isu perdagangan bebas, dominasi asing dalam pasar domestik, dan persaingan UMKM berkaitan langsung dengan ketahanan dan ancaman di sektor ekonomi."
    },
    {
        question: "Dalam konsepsi Wawasan Nusantara, \"Trigatra\" merupakan aspek alamiah dari ketahanan nasional. Yang <b>bukan</b> termasuk aspek Trigatra adalah...",
        options: [
            "Geografi",
            "Keadaan dan kekayaan alam",
            "Keadaan dan kemampuan penduduk",
            "Ideologi",
            "Posisi silang dunia"
        ],
        answer: 3, 
        explanation: "Trigatra (aspek alamiah) terdiri dari: Letak Geografi, Keadaan Penduduk, dan Kekayaan Alam. Ideologi termasuk dalam aspek 'Pancagatra' (sosial/kemasyarakatan)."
    },
    {
        question: "Masyarakat Indonesia yang bergotong royong membersihkan desa setelah bencana banjir menunjukkan wujud implementasi Pancasila, khususnya sila...",
        options: [
            "Pertama",
            "Kedua",
            "Ketiga",
            "Keempat",
            "Kelima"
        ],
        answer: 2, 
        explanation: "Gotong royong dalam menghadapi bencana melambangkan rasa persatuan, senasib sepenanggungan, dan solidaritas nasional (Sila Ketiga: Persatuan Indonesia)."
    },
    {
        question: "Munculnya kelompok separatis seperti OPM (Organisasi Papua Merdeka) berpotensi merusak keutuhan NKRI. Gerakan ini merupakan contoh nyata dari...",
        options: [
            "Integrasi sosial",
            "Disintegrasi bangsa",
            "Akulturasi budaya",
            "Mobilitas sosial vertikal",
            "Konsolidasi demokrasi"
        ],
        answer: 1, 
        explanation: "Separatisme (keinginan memisahkan diri dari negara) adalah bentuk paling ekstrem dari disintegrasi (perpecahan) bangsa."
    },
    {
        question: "Konsep dasar \"Bhinneka Tunggal Ika\" pertama kali dirumuskan pada masa Kerajaan Majapahit. Karya sastra yang memuat frasa tersebut adalah...",
        options: [
            "Kitab Negarakertagama karya Empu Prapanca",
            "Kitab Sutasoma karya Empu Tantular",
            "Kitab Pararaton",
            "Kitab Arjuna Wiwaha",
            "Serat Centhini"
        ],
        answer: 1, 
        explanation: "Fakta historis, frasa 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa' tertulis dalam Kakawin/Kitab Sutasoma karangan Empu Tantular."
    },
    {
        question: "Sikap yang mengagung-agungkan bangsa sendiri secara berlebihan dan merendahkan bangsa lain disebut...",
        options: [
            "Patriotisme",
            "Nasionalisme",
            "Chauvinisme",
            "Etnosentrisme",
            "Pluralisme"
        ],
        answer: 2, 
        explanation: "Chauvinisme adalah bentuk nasionalisme sempit/ekstrem yang menganggap bangsanya super dan bangsa lain rendah (seperti fasisme Jerman/Italia di PD II)."
    },
    {
        question: "Pengiriman pasukan Garuda oleh Indonesia untuk misi perdamaian PBB di negara konflik merupakan wujud...",
        options: [
            "Imperialisme gaya baru",
            "Pelaksanaan politik luar negeri bebas aktif",
            "Intervensi urusan dalam negeri negara lain",
            "Unjuk kekuatan militer di mata dunia",
            "Syarat untuk mendapatkan pinjaman luar negeri"
        ],
        answer: 1, 
        explanation: "Misi Pasukan Garuda adalah implementasi amanat Pembukaan UUD 1945 'ikut melaksanakan ketertiban dunia' melalui politik bebas aktif, bukan penjajahan atau pamer kekuatan."
    },
    {
        question: "Faktor pendorong tercapainya Integrasi Nasional di Indonesia adalah...<br><br>(1) Adanya rasa senasib dan seperjuangan.<br>(2) Adanya ancaman dari luar yang menyatukan.<br>(3) Semangat gotong royong dan toleransi beragama.<br>(4) Etnosentrisme yang menguat di tiap daerah.",
        options: opsiKompleksPKn,
        answer: 0, 
        explanation: "Pernyataan 4 salah karena etnosentrisme justru merupakan faktor penghambat integrasi nasional, bukan pendorong."
    },
    {
        question: "Yang termasuk dalam bentuk ancaman non-militer terhadap NKRI adalah...<br><br>(1) Gaya hidup konsumtif dan hedonisme.<br>(2) Penyelundupan senjata api oleh sindikat.<br>(3) Hoaks dan adu domba di media sosial.<br>(4) Agresi militer oleh negara tetangga.",
        options: opsiKompleksPKn,
        answer: 1, 
        explanation: "Hedonisme (sosbud) dan hoaks (sosial/politik) adalah ancaman non-militer. Penyelundupan senjata (2) dan agresi (4) termasuk ancaman bersenjata/militer."
    },
    {
        question: "Peran serta warga negara dalam upaya pembelaan negara dapat dilakukan melalui...<br><br>(1) Pendidikan Kewarganegaraan.<br>(2) Pelatihan dasar kemiliteran secara wajib.<br>(3) Pengabdian sebagai prajurit TNI.<br>(4) Melakukan tindakan persekusi terhadap pelanggar hukum.",
        options: opsiKompleksPKn,
        answer: 0, 
        explanation: "Pasal 9 ayat (2) UU No 3 Tahun 2002 menyebutkan bentuk bela negara melalui: Pendidikan kewarganegaraan, Latsarmil (Menwa), pengabdian sebagai prajurit, dan pengabdian sesuai profesi. Pernyataan 4 (persekusi/main hakim sendiri) melanggar hukum."
    },
    {
        question: "Ciri-ciri pemahaman Wawasan Nusantara bagi warga negara Indonesia adalah...<br><br>(1) Mementingkan kepentingan golongan di atas negara.<br>(2) Mengutamakan persatuan dan kesatuan bangsa.<br>(3) Mendukung gerakan separatisme daerah.<br>(4) Menghargai keanekaragaman (Bhinneka Tunggal Ika).",
        options: opsiKompleksPKn,
        answer: 2, 
        explanation: "Wawasan nusantara menuntut warga negara untuk memprioritaskan persatuan (2) dan menghargai keragaman (4). Pernyataan 1 dan 3 sangat bertentangan dengan Wawasan Nusantara."
    },
    {
        question: "Aspek Pancagatra (Aspek Sosial) dalam Ketahanan Nasional meliputi...<br><br>(1) Ideologi<br>(2) Demografi (Kependudukan)<br>(3) Sosial Budaya<br>(4) Geografi",
        options: opsiKompleksPKn,
        answer: 1, 
        explanation: "Pancagatra terdiri dari IPOLEKSOSBUDHANKAM (Ideologi, Politik, Ekonomi, Sosial Budaya, Pertahanan Keamanan). Demografi (2) dan Geografi (4) adalah bagian dari Trigatra (aspek alamiah)."
    },
    {
        question: "Dampak negatif globalisasi di bidang politik bagi Indonesia antara lain...<br><br>(1) Terbukanya peluang ekspor produk lokal.<br>(2) Masuknya ideologi liberalisme yang tidak sesuai Pancasila.<br>(3) Kemudahan mengakses teknologi pendidikan.<br>(4) Melemahnya kedaulatan negara karena tekanan lembaga internasional.",
        options: opsiKompleksPKn,
        answer: 2, 
        explanation: "Pernyataan 1 dan 3 adalah ranah ekonomi dan teknologi (serta bersifat positif). Pernyataan 2 dan 4 adalah dampak negatif secara politik/ideologi."
    },
    {
        question: "Pasal dalam UUD NRI 1945 yang secara eksplisit mengatur hak dan kewajiban warga negara dalam pertahanan dan keamanan negara adalah...<br><br>(1) Pasal 27 ayat 3<br>(2) Pasal 28A<br>(3) Pasal 30 ayat 1<br>(4) Pasal 31 ayat 1",
        options: opsiKompleksPKn,
        answer: 1, 
        explanation: "Pasal 27(3) tentang hak dan kewajiban bela negara. Pasal 30(1) tentang hak dan kewajiban dalam pertahanan dan keamanan negara. (Pasal 28=HAM, Pasal 31=Pendidikan)."
    },
    {
        question: "Konflik komunal berbau SARA dapat diselesaikan atau dicegah dengan cara...<br><br>(1) Membangun dialog antar-tokoh agama/masyarakat.<br>(2) Mengutamakan sikap toleransi.<br>(3) Penegakan hukum yang adil tanpa diskriminasi.<br>(4) Mengusir salah satu pihak yang bersengketa.",
        options: opsiKompleksPKn,
        answer: 0, 
        explanation: "Mencegah SARA butuh dialog, toleransi, dan kepastian hukum. Pernyataan 4 melanggar HAM dan hanya akan memperluas konflik."
    },
    {
        question: "Berdasarkan konsep geopolitik Indonesia, laut bagi bangsa Indonesia berfungsi sebagai...<br><br>(1) Pemisah antar pulau.<br>(2) Pemersatu bangsa.<br>(3) Batas penghalang komunikasi.<br>(4) Urat nadi perhubungan dan ekonomi.",
        options: opsiKompleksPKn,
        answer: 2, 
        explanation: "Berkat Deklarasi Djuanda dan Wawasan Nusantara, laut tidak lagi dipandang sebagai pemisah (1) atau penghalang (3), melainkan sebagai pemersatu (2) dan urat nadi perekonomian/transportasi (4)."
    },
    {
        question: "Tantangan internal bangsa Indonesia dalam mewujudkan persatuan dan kesatuan saat ini adalah...<br><br>(1) Kesenjangan ekonomi antar daerah.<br>(2) Agresi militer asing.<br>(3) Lemahnya literasi digital yang memicu hoaks.<br>(4) Krisis iklim global.",
        options: opsiKompleksPKn,
        answer: 1, 
        explanation: "Kesenjangan ekonomi dan hoaks akibat literasi rendah adalah tantangan internal (dari dalam negeri). Agresi asing dan krisis iklim adalah tantangan eksternal/global."
    },
    {
        question: "<b>Pernyataan:</b> Deklarasi Djuanda tahun 1957 membuat luas wilayah laut teritorial Indonesia menjadi semakin menyusut.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Deklarasi Djuanda menerapkan konsep bahwa kepulauan Indonesia adalah satu kesatuan darat dan laut yang tidak terpisahkan.",
        options: opsiSebabAkibatPKn,
        answer: 3, 
        explanation: "Pernyataan salah (Deklarasi Djuanda justru memperluas wilayah laut Indonesia berlipat ganda, bukan menyusut). Alasan benar (konsep kepulauan utuh/Archipelagic State)."
    },
    {
        question: "<b>Pernyataan:</b> Toleransi antarumat beragama adalah kunci utama dalam mencegah konflik horizontal di Indonesia.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Bangsa Indonesia adalah bangsa yang memiliki tingkat heterogenitas (kemajemukan) yang sangat tinggi dalam aspek SARA.",
        options: opsiSebabAkibatPKn,
        answer: 0, 
        explanation: "Pernyataan benar, alasan benar. Hubungannya sangat jelas: karena bangsa kita sangat majemuk (beragam), maka toleransi menjadi kunci mutlak agar tidak terjadi konflik mendatar (horizontal)."
    },
    {
        question: "<b>Pernyataan:</b> Kegiatan donor darah yang dilakukan pelajar merupakan salah satu bentuk upaya bela negara secara non-fisik.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Bela negara secara fisik hanya diwajibkan bagi seluruh warga negara yang berusia 18 hingga 40 tahun melalui wajib militer.",
        options: opsiSebabAkibatPKn,
        answer: 2, 
        explanation: "Pernyataan benar (donor darah wujud bela negara/kemanusiaan). Alasan salah (Di Indonesia tidak ada aturan wajib militer bagi warga sipil secara general)."
    },
    {
        question: "<b>Pernyataan:</b> Globalisasi informasi dapat menjadi ancaman bagi identitas kebudayaan nasional.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Kemudahan informasi menyebabkan masuknya gaya hidup kebarat-baratan (westernisasi) yang dapat melunturkan nilai-nilai gotong royong dan kesopanan.",
        options: opsiSebabAkibatPKn,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar. Alasan tersebut menjelaskan bagaimana globalisasi informasi bisa menjadi ancaman sosbud (hubungan sebab-akibat)."
    },
    {
        question: "<b>Pernyataan:</b> Separatisme di suatu daerah seringkali dipicu oleh adanya perasaan ketidakadilan dalam pemerataan pembangunan ekonomi.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Otonomi daerah memberikan kewenangan penuh bagi daerah untuk memisahkan diri dari NKRI jika tidak mendapat dana dari pusat.",
        options: opsiSebabAkibatPKn,
        answer: 2, 
        explanation: "Pernyataan benar (ketidakadilan ekonomi sering memicu gerakan separatis). Alasan salah (Otonomi daerah bukan hak untuk merdeka/memisahkan diri, melainkan keleluasaan mengurus rumah tangga daerah dalam bingkai NKRI)."
    },
    {
        question: "<b>Kasus:</b> Andi mem-bully temannya yang berasal dari pulau lain karena aksen bicaranya yang berbeda. Andi merasa bahasa daerahnya sendiri adalah yang paling baik dan modern.<br><br><b>Analisis:</b> Sikap Andi mencerminkan Chauvinisme yang mengancam ketahanan nasional.<br><br>Tentukan apakah hasil analisis di atas Benar atau Salah!",
        options: opsiBenarSalahPKn,
        answer: 1, 
        explanation: "Sikap Andi mencerminkan Etnosentrisme (membanggakan suku/daerah sendiri dan merendahkan suku lain), bukan Chauvinisme. Chauvinisme lebih pada skala kebangsaan/negara (negara sendiri vs negara asing)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Setiap ancaman militer dapat diatasi hanya dengan menggunakan pendekatan sosio-kultural dan diplomasi tanpa harus melibatkan TNI.",
        options: opsiBenarSalahPKn,
        answer: 1, 
        explanation: "Ancaman militer (berbentuk kekuatan bersenjata yang terorganisasi seperti agresi, spionase, sabotase) memiliki daya hancur fisik tinggi, sehingga kekuatan utama yang harus menghadapinya adalah TNI/Polri, bukan sekadar diplomasi."
    },
    {
        question: "<b>Kasus:</b> Budi menolak membayar pajak karena merasa jalan di depan rumahnya masih berlubang dan pemerintah tidak peduli.<br><br><b>Analisis:</b> Tindakan Budi dibenarkan karena hak warga negara (mendapat fasilitas baik) belum dipenuhi pemerintah.<br><br>Tentukan apakah hasil analisis di atas Benar atau Salah!",
        options: opsiBenarSalahPKn,
        answer: 1, 
        explanation: "Membayar pajak adalah kewajiban hukum yang diatur Undang-Undang. Hak dan kewajiban harus seimbang, tetapi warga negara tidak boleh melanggar kewajiban hukum mutlak hanya karena ketidakpuasan pelayanan secara sepihak."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Dalam menghadapi ancaman pandemi atau wabah penyakit mematikan secara global, Kementerian Kesehatan berkedudukan sebagai unsur utama dalam sistem pertahanan negara terkait.",
        options: opsiBenarSalahPKn,
        answer: 0, 
        explanation: "Pandemi adalah bentuk ancaman non-militer di bidang keselamatan umum/kesehatan. Menurut doktrin pertahanan negara menghadapi ancaman non-militer, unsur utamanya adalah kementerian/lembaga yang membidangi masalah tersebut."
    },
    {
        question: "<b>Kasus:</b> Di sebuah perumahan terjadi musibah kebakaran. Semua warga langsung bahu-membahu menyiram air dan menyelamatkan barang tetangganya tanpa memandang agama atau suku korban.<br><br><b>Analisis:</b> Ini merupakan bentuk nyata dari integrasi sosial dan penerapan sila Kemanusiaan yang Adil dan Beradab serta Persatuan Indonesia.<br><br>Tentukan apakah hasil analisis di atas Benar atau Salah!",
        options: opsiBenarSalahPKn,
        answer: 0, 
        explanation: "Tolong menolong lintas SARA dalam musibah tanpa membedakan latar belakang secara empiris adalah esensi dari kemanusiaan (Sila 2) dan integrasi nasional (Sila 3)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Mewujudkan Wawasan Nusantara berarti pemerintah harus menyamakan tradisi, bahasa daerah, dan pakaian adat menjadi satu jenis budaya yang disahkan oleh negara agar masyarakat tidak terpecah belah.",
        options: opsiBenarSalahPKn,
        answer: 1, 
        explanation: "Wawasan nusantara adalah memandang kesatuan tanpa menghilangkan keberagaman. Penyeragaman paksa justru merusak esensi Bhinneka Tunggal Ika."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Perwujudan integrasi nasional di bidang politik ditandai dengan partisipasi warga negara secara aktif dalam Pemilu yang diselenggarakan secara Luber-Jurdil (Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil).",
        options: opsiBenarSalahPKn,
        answer: 0, 
        explanation: "Pemilu yang demokratis dan diikuti seluruh rakyat secara damai adalah bentuk bersatunya kehendak politik bangsa secara konsensus."
    },
    {
        question: "<b>Kasus:</b> Para nelayan asing menangkap ikan di wilayah Zona Ekonomi Eksklusif (ZEE) Indonesia dengan menggunakan bom ikan.<br><br><b>Analisis:</b> Tindakan aparat TNI AL yang menembak/menenggelamkan kapal pencuri tersebut merupakan pelanggaran HAM berat terhadap warga negara asing.<br><br>Tentukan apakah hasil analisis di atas Benar atau Salah!",
        options: opsiBenarSalahPKn,
        answer: 1, 
        explanation: "Pencurian ikan menggunakan bom di wilayah ZEE adalah ancaman penjarahan sumber daya alam dan pengerusakan lingkungan. Penindakan tegas oleh aparat adalah bentuk kedaulatan penegakan hukum negara, bukan pelanggaran HAM berat."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Ketahanan Nasional Indonesia bersifat dinamis, yang berarti tingkat kekuatannya dapat naik atau turun bergantung pada situasi dan kondisi bangsa pada suatu waktu.",
        options: opsiBenarSalahPKn,
        answer: 0, 
        explanation: "Ketahanan nasional bukan sesuatu yang kaku. Ia bersifat dinamis, bisa meningkat jika rakyat bersatu dan ekonomi maju, atau menurun jika terjadi konflik/krisis ekonomi."
    },
    {
        question: "<b>Kasus:</b> Sekelompok pemuda sengaja merusak fasilitas halte bus raya dengan dalih menyalurkan kebebasan berekspresi seni (vandalisme).<br><br><b>Analisis:</b> Tindakan para pemuda tersebut merupakan ancaman non-militer yang bertentangan dengan kewajiban bela negara dan memicu kerugian ekonomi.<br><br>Tentukan apakah hasil analisis di atas Benar atau Salah!",
        options: opsiBenarSalahPKn,
        answer: 0, 
        explanation: "Merusak fasilitas umum (vandalisme) bertentangan dengan kewajiban memelihara ketertiban umum. Ini merugikan anggaran negara (ekonomi) dan merupakan ancaman non-militer dalam bentuk degradasi moral/hukum."
    }
];
