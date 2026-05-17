// --- DATA MATA PELAJARAN BAHASA INDONESIA ---
if (typeof window.subjects === "undefined") {
    window.subjects = [];
}

window.subjects.push({
    id: "indonesia",
    name: "Bahasa Indonesia",
    icon: "ph-book-open-text", // Ikon buku terbuka untuk literasi/bahasa
    color: "text-rose-500 dark:text-rose-400" 
});

if (typeof window.quizData === "undefined") {
    window.quizData = {};
}

// Opsi Standar untuk tipe soal khusus
const opsiKompleksIndo = [
    "Jika (1), (2), dan (3) yang benar.",
    "Jika (1) dan (3) yang benar.",
    "Jika (2) dan (4) yang benar.",
    "Jika HANYA (4) yang benar.",
    "Jika SEMUA pernyataan benar."
];

const opsiSebabAkibatIndo = [
    "Pernyataan BENAR, Alasan BENAR, dan ADA hubungan sebab-akibat.",
    "Pernyataan BENAR, Alasan BENAR, tetapi TIDAK ADA hubungan.",
    "Pernyataan BENAR, Alasan SALAH.",
    "Pernyataan SALAH, Alasan BENAR.",
    "Keduanya SALAH."
];

const opsiBenarSalahIndo = ["Benar", "Salah"];

// --- DATA SOAL BAHASA INDONESIA KELAS X ---
window.quizData["indonesia"] = [
    {
        question: "Struktur teks negosiasi yang merupakan inti dari proses tawar-menawar antara kedua belah pihak untuk mencari titik temu disebut...",
        options: [
            "Orientasi",
            "Pengajuan",
            "Penawaran",
            "Persetujuan",
            "Penutup"
        ],
        answer: 2, 
        explanation: "Penawaran adalah puncak/inti dari negosiasi di mana terjadi proses tawar-menawar setelah salah satu pihak melakukan pengajuan."
    },
    {
        question: "<b>Pernyataan:</b> Dalam teks biografi, bagian reorientasi bersifat opsional (boleh ada atau tidak).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Reorientasi hanya berisi pandangan pribadi atau simpulan penulis terhadap tokoh yang diceritakan, bukan merupakan fakta sejarah tokoh.",
        options: opsiSebabAkibatIndo,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Reorientasi merupakan komentar evaluatif penulis, sehingga kehadirannya dalam biografi boleh diabaikan demi menjaga keobjektifan sejarah tokoh."
    },
    {
        question: "Perhatikan kutipan puisi berikut:<br><br><i>Pagiku hilang sudah melayang,<br>Hari mudaku sudah pergi,<br>Sekarang petang datang membayang,<br>Batang usiaku sudah tinggi.</i><br>(Karya: Ali Hasjmy)<br><br>Citraan (imaji) yang paling dominan dalam kutipan puisi di atas adalah...",
        options: [
            "Penglihatan (Visual)",
            "Pendengaran (Auditori)",
            "Perabaan (Taktil)",
            "Penciuman (Olfaktori)",
            "Pengecapan (Gustatori)"
        ],
        answer: 0, 
        explanation: "Kata-kata seperti 'membayang', 'hilang', dan pendeskripsian waktu (pagi, petang) merangsang indra penglihatan (visual) pembaca."
    },
    {
        question: "Ciri kebahasaan teks negosiasi ditunjukkan oleh nomor...<br><br>(1) Menggunakan kalimat persuasif.<br>(2) Terdapat tuturan berpasangan (dialog).<br>(3) Menggunakan pronomina persona.<br>(4) Menggunakan majas hiperbola secara dominan.",
        options: opsiKompleksIndo,
        answer: 0, 
        explanation: "(1), (2), dan (3) adalah ciri bahasa negosiasi. Poin (4) salah karena hiperbola adalah ciri puisi/sastra, sedangkan negosiasi membutuhkan bahasa yang santun, logis, dan argumentatif."
    },
    {
        question: "Mosi dalam sebuah debat harus memenuhi kriteria tertentu agar perdebatan berjalan menarik. Kriteria mosi yang baik adalah...",
        options: [
            "Mengandung kebenaran mutlak yang tidak bisa dibantah.",
            "Bersifat netral dan tidak memihak satu isu pun.",
            "Bersifat kontroversial dan memicu pro-kontra di masyarakat.",
            "Merupakan masalah pribadi dari salah satu tim.",
            "Berupa opini tanpa dasar fakta."
        ],
        answer: 2, 
        explanation: "Mosi haruslah isu yang kontroversial (bisa diperdebatkan) sehingga memungkinkan adanya tim Afirmasi (pro) dan tim Oposisi (kontra)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Teks autobiografi adalah teks riwayat hidup seseorang yang ditulis oleh orang lain dengan sudut pandang orang ketiga.",
        options: opsiBenarSalahIndo,
        answer: 1, 
        explanation: "Autobiografi ditulis oleh tokohnya sendiri menggunakan sudut pandang orang pertama (aku/saya). Jika ditulis oleh orang lain dengan sudut pandang orang ketiga (dia/ia), itu disebut teks Biografi."
    },
    {
        question: "Kalimat yang menunjukkan tuturan persuasif dalam teks negosiasi adalah...",
        options: [
            "\"Harga sepatu ini Rp300.000,00 dan tidak bisa ditawar lagi, Pak.\"",
            "\"Silakan dicoba dulu, Bu. Kualitas kainnya sangat bagus, dijamin Ibu tidak akan menyesal.\"",
            "\"Saya tidak setuju dengan keputusan ketua kelas.\"",
            "\"Apakah barang ini bergaransi resmi?\"",
            "\"Maaf, kami sedang tutup.\""
        ],
        answer: 1, 
        explanation: "Kalimat tersebut mengandung upaya membujuk (persuasif) lawan bicara agar tertarik membeli barang dengan memberikan argumen kualitas dan jaminan."
    },
    {
        question: "Unsur-unsur fisik puisi yang membentuk struktur wujud puisi meliputi...<br><br>(1) Diksi dan Tipografi<br>(2) Tema dan Amanat<br>(3) Majas dan Rima<br>(4) Perasaan dan Nada",
        options: opsiKompleksIndo,
        answer: 1, 
        explanation: "Unsur fisik puisi adalah unsur yang tampak pada teks (Diksi, Tipografi, Majas, Rima, Imaji, Kata Konkret). Pernyataan (1) dan (3) benar. Tema, amanat, perasaan, dan nada (2 dan 4) adalah unsur batin puisi."
    },
    {
        question: "<b>Pernyataan:</b> Dalam teks debat, tim Netral memiliki peran untuk memberikan dukungan penuh kepada tim Afirmasi jika argumen tim Oposisi dinilai lemah.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Tim Netral adalah pihak penengah yang memberikan pandangan dari dua sisi tanpa memihak.",
        options: opsiSebabAkibatIndo,
        answer: 3, 
        explanation: "Pernyataan salah (Tim Netral tidak boleh memihak siapapun, baik Afirmasi maupun Oposisi). Alasan benar (definisi tim netral adalah penengah yang memberikan perspektif dari kedua sisi)."
    },
    {
        question: "Kutipan biografi: <i>\"B.J. Habibie adalah sosok yang sangat disiplin sejak kecil. Beliau selalu menghargai waktu dan tidak pernah menunda-nunda pekerjaan. Berkat kegigihannya, ia berhasil mendapatkan beasiswa ke Jerman.\"</i><br><br>Hal yang dapat diteladani dari tokoh pada kutipan di atas adalah...",
        options: [
            "Kepandaiannya meraih beasiswa.",
            "Kemampuannya ke luar negeri.",
            "Kedisiplinan, menghargai waktu, dan kegigihan.",
            "Kecerdasannya yang merupakan bawaan lahir.",
            "Menjadi Presiden Republik Indonesia."
        ],
        answer: 2, 
        explanation: "Keteladanan tokoh diambil dari sifat/karakter positif yang bisa diterapkan dalam kehidupan pembaca. Fokus teks adalah pada 'disiplin', 'menghargai waktu', dan 'gigih'."
    },
    {
        question: "Perhatikan kalimat berikut: <i>\"Bapak, saya minta maaf atas keterlambatan pengiriman barang, kami akan memberikan diskon 10% untuk transaksi berikutnya.\"</i><br><br>Dalam struktur surat penawaran/negosiasi tertulis, kalimat tersebut mencerminkan prinsip...",
        options: [
            "Meminta keringanan secara paksa.",
            "Menggunakan bahasa yang tidak santun.",
            "Win-win solution (mengakomodasi kepentingan bersama).",
            "Mengancam mitra bisnis.",
            "Mengubah haluan negosiasi."
        ],
        answer: 2, 
        explanation: "Pemberian kompensasi diskon atas kesalahan adalah bentuk menjaga hubungan baik dan mencari solusi yang menguntungkan kedua belah pihak (win-win solution)."
    },
    {
        question: "Penggunaan kata ganti (pronomina) persona ketiga tunggal sangat umum dalam teks biografi. Contoh pronomina tersebut adalah...<br><br>(1) Dia<br>(2) Beliau<br>(3) Ia<br>(4) Kami",
        options: opsiKompleksIndo,
        answer: 0, 
        explanation: "'Dia', 'Beliau', dan 'Ia' adalah pronomina persona ketiga tunggal (1, 2, 3 benar). 'Kami' adalah pronomina persona pertama jamak (4 salah)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Dalam puisi kontemporer, unsur tipografi (tata wajah/bentuk fisik puisi) kadang dibuat tidak beraturan, seperti membentuk huruf Z atau zigzag, untuk memperkuat makna tertentu.",
        options: opsiBenarSalahIndo,
        answer: 0, 
        explanation: "Tipografi adalah perwajahan puisi. Puisi modern/kontemporer sering menggunakan tipografi bebas (tidak rata kiri/kanan) untuk menegaskan emosi atau visualisasi makna kata."
    },
    {
        question: "<i>Cuaca di kota ini seakan menangis tersedu-sedu meratapi kepergiannya.</i><br><br>Majas yang digunakan dalam larik puisi tersebut adalah...",
        options: [
            "Metafora",
            "Simile",
            "Personifikasi",
            "Hiperbola",
            "Litotes"
        ],
        answer: 2, 
        explanation: "Personifikasi adalah majas yang melekatkan sifat/perilaku benda hidup manusia ('menangis tersedu-sedu') pada benda mati ('cuaca')."
    },
    {
        question: "Berikut ini yang merupakan tugas Moderator dalam sebuah teks debat adalah...",
        options: [
            "Menilai argumen dari setiap tim.",
            "Mengatur jalannya perdebatan dan membacakan tata tertib.",
            "Memberikan sanggahan terhadap tim afirmasi.",
            "Menentukan tim mana yang menang.",
            "Mencatat seluruh argumen dari setiap pembicara."
        ],
        answer: 1, 
        explanation: "Tugas moderator adalah memimpin sidang/debat, mengatur waktu, membacakan tata tertib, dan menjadi penengah. (Menilai adalah tugas Juri, mencatat adalah tugas Notulen)."
    },
    {
        question: "<b>Pernyataan:</b> Negosiasi tidak akan terjadi jika kedua belah pihak sejak awal sudah memiliki kesepakatan dan tujuan yang sama persis.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Negosiasi pada dasarnya adalah proses komunikasi yang dilakukan untuk menyelesaikan konflik atau perbedaan kepentingan.",
        options: opsiSebabAkibatIndo,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta saling berhubungan. Syarat utama negosiasi adalah adanya perbedaan kepentingan/kebutuhan yang harus disatukan. Jika sudah sepakat sejak awal, negosiasi tidak diperlukan."
    },
    {
        question: "Kata kerja material (verba tindakan) banyak ditemukan dalam teks biografi untuk menjelaskan aktivitas tokoh. Manakah di bawah ini yang seluruhnya merupakan kata kerja material?",
        options: [
            "Membaca, berpikir, menulis.",
            "Berjalan, menciptakan, menembak.",
            "Merasakan, bersedih, menangis.",
            "Meyakini, merenungkan, melamun.",
            "Adalah, merupakan, yaitu."
        ],
        answer: 1, 
        explanation: "Verba material adalah kata kerja yang menunjukkan aktivitas fisik/tindakan yang dapat dilihat oleh mata (berjalan, menciptakan, menembak). Opsi C dan D mengandung verba mental (perasaan/pikiran). Opsi E adalah verba relasional/kopula."
    },
    {
        question: "Kaidah kebahasaan dalam menyusun teks negosiasi yang tepat antara lain...<br><br>(1) Bahasa yang santun.<br>(2) Bersifat memerintah (imperatif kasar).<br>(3) Argumen yang logis.<br>(4) Menyerang urusan pribadi lawan.",
        options: opsiKompleksIndo,
        answer: 1, 
        explanation: "Negosiasi harus menggunakan bahasa yang santun (1) dan argumen logis (3). Bersifat memerintah secara paksa (2) dan menyerang personal (4) melanggar etika negosiasi."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Amanat dalam sebuah puisi selalu disampaikan secara eksplisit (tersurat) pada bait terakhir agar pembaca tidak kebingungan memaknainya.",
        options: opsiBenarSalahIndo,
        answer: 1, 
        explanation: "Amanat dalam puisi justru lebih sering disampaikan secara implisit (tersirat) di balik diksi dan majas yang digunakan di seluruh isi puisi, bukan selalu tersurat di bait akhir."
    },
    {
        question: "Dalam debat mengenai mosi 'Penerapan Full Day School di Indonesia', argumen: <i>'Pendidikan karakter butuh waktu interaksi panjang antara guru dan siswa di sekolah.'</i> merupakan argumen yang cocok disampaikan oleh...",
        options: [
            "Moderator",
            "Tim Oposisi",
            "Tim Afirmasi",
            "Tim Netral",
            "Notulen"
        ],
        answer: 2, 
        explanation: "Pernyataan tersebut mendukung penerapan jam sekolah yang lebih panjang (Full Day School) untuk pendidikan karakter. Pihak yang mendukung mosi adalah Tim Afirmasi."
    },
    {
        question: "Struktur teks biografi secara berurutan yang benar adalah...",
        options: [
            "Orientasi - Reorientasi - Peristiwa/Masalah",
            "Orientasi - Peristiwa/Masalah - Reorientasi",
            "Peristiwa - Orientasi - Reorientasi",
            "Abstrak - Orientasi - Krisis - Koda",
            "Tesis - Argumentasi - Penegasan Ulang"
        ],
        answer: 1, 
        explanation: "Teks biografi diawali dengan pengenalan latar belakang tokoh (Orientasi), dilanjutkan dengan kronologi kejadian/perjuangan/masalah yang dihadapi tokoh (Peristiwa), dan diakhiri dengan simpulan/pandangan penulis (Reorientasi)."
    },
    {
        question: "Faktor yang membuat sebuah kesepakatan dalam negosiasi dianggap sah dan berhasil adalah...",
        options: [
            "Salah satu pihak merasa sangat dirugikan.",
            "Disetujui karena adanya ancaman.",
            "Kesepakatan saling menguntungkan (win-win) dan disetujui tanpa paksaan.",
            "Negosiasi dilakukan dalam waktu yang sangat lama.",
            "Melibatkan pihak kepolisian."
        ],
        answer: 2, 
        explanation: "Syarat sah dan berhasilnya negosiasi adalah persetujuan bersama yang dicapai tanpa tekanan (sukarela) dan memberikan keuntungan/solusi bagi kedua belah pihak."
    },
    {
        question: "<b>Pernyataan:</b> Dalam berdebat, diperbolehkan menggunakan kalimat yang mengandung logical fallacy (sesat pikir) seperti Ad Hominem (menyerang personal) asalkan bisa menjatuhkan mental lawan.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Tujuan utama debat adalah memenangkan persidangan dengan cara apa pun, termasuk intimidasi psikologis.",
        options: opsiSebabAkibatIndo,
        answer: 4, 
        explanation: "Keduanya salah. Etika debat sangat melarang serangan personal (Ad Hominem) dan logical fallacy. Tujuan debat adalah menguji logika dan fakta atas suatu mosi, bukan ajang menjatuhkan mental lawan secara personal."
    },
    {
        question: "Unsur batin puisi meliputi...<br><br>(1) Tema (Sense)<br>(2) Rasa (Feeling)<br>(3) Nada (Tone)<br>(4) Amanat (Intention)",
        options: opsiKompleksIndo,
        answer: 4, 
        explanation: "Menurut I.A. Richards, struktur batin puisi terdiri dari 4 unsur pokok: Tema, Perasaan/Rasa, Nada/Sikap penyair, dan Amanat/Tujuan. Semua pernyataan (1, 2, 3, 4) benar."
    },
    {
        question: "Kata <i>'membanting tulang'</i> dalam teks biografi seorang pengusaha sukses bermakna...",
        options: [
            "Berolahraga secara keras.",
            "Mengalami kecelakaan kerja.",
            "Bekerja keras tanpa kenal lelah.",
            "Mengalahkan pesaing bisnis.",
            "Menghancurkan barang dagangan."
        ],
        answer: 2, 
        explanation: "'Membanting tulang' adalah ungkapan/idiom yang bermakna kiasan, yaitu bekerja dengan sangat keras/sungguh-sungguh."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Surat penawaran barang atau jasa termasuk ke dalam jenis negosiasi lisan.",
        options: opsiBenarSalahIndo,
        answer: 1, 
        explanation: "Surat penawaran merupakan bentuk komunikasi tertulis (menggunakan surat/dokumen), sehingga termasuk ke dalam negosiasi tertulis, bukan negosiasi lisan."
    },
    {
        question: "Penggunaan konjungsi temporal (kata hubung penanda waktu) sangat penting dalam teks biografi. Berikut ini yang merupakan konjungsi temporal adalah...",
        options: [
            "Dan, serta, atau",
            "Karena, sebab, oleh karena itu",
            "Kemudian, selanjutnya, pada akhirnya",
            "Meskipun, walaupun, sedangkan",
            "Bahwa, agar, supaya"
        ],
        answer: 2, 
        explanation: "Biografi menggunakan alur kronologis, sehingga banyak memakai kata hubung waktu (temporal) seperti: lalu, kemudian, selanjutnya, pada suatu hari."
    },
    {
        question: "Penjual: <i>\"Wah, kalau Rp50.000,00 saya belum dapat untung, Mas. Bagaimana kalau Rp65.000,00 saja? Ini kualitas super, lho.\"</i><br><br>Tuturan di atas termasuk bagian...",
        options: [
            "Salam pembuka",
            "Pengajuan",
            "Penawaran",
            "Persetujuan",
            "Orientasi"
        ],
        answer: 2, 
        explanation: "Kalimat tersebut menunjukkan respon dari pengajuan pembeli, di mana penjual menurunkan harga sedikit dari harga awal namun menaikkannya dari harga tawaran pembeli (proses tawar-menawar = penawaran)."
    },
    {
        question: "<b>Pernyataan:</b> Membaca puisi (deklamasi) membutuhkan pelafalan, intonasi, dan ekspresi yang tepat.<br><br><b>Sebab</b><br><br><b>Alasan:</b> Nada dan ekspresi pembaca sangat menentukan apakah amanat dan emosi puisi dapat tersampaikan kepada pendengar atau tidak.",
        options: opsiSebabAkibatIndo,
        answer: 0, 
        explanation: "Pernyataan benar dan alasan benar serta memiliki hubungan kausalitas. Tanpa intonasi dan ekspresi/mimik (seperti nada sedih, marah, atau semangat), nyawa dari puisi tidak akan sampai ke pendengar."
    },
    {
        question: "Ciri-ciri mosi debat yang baik meliputi...<br><br>(1) Seimbang (bisa didebat pro dan kontra).<br>(2) Jelas dan tidak ambigu.<br>(3) Merupakan isu faktual atau sedang hangat dibicarakan.<br>(4) Harus diajukan oleh Tim Oposisi.",
        options: opsiKompleksIndo,
        answer: 0, 
        explanation: "Mosi harus seimbang (1), jelas definisinya (2), dan relevan/faktual (3). Poin (4) salah karena mosi biasanya disiapkan oleh panitia atau penyelenggara debat, bukan diajukan eksklusif oleh tim Oposisi."
    },
    {
        question: "Langkah pertama yang paling krusial sebelum menyusun teks biografi seorang tokoh adalah...",
        options: [
            "Mengarang cerita fiksi tentang tokoh tersebut agar dramatis.",
            "Menentukan judul yang paling clickbait.",
            "Mengumpulkan data dan fakta melalui wawancara, buku, atau dokumen.",
            "Mencetak buku biografi di percetakan.",
            "Menentukan majas yang akan digunakan."
        ],
        answer: 2, 
        explanation: "Biografi adalah teks faktual (berdasarkan kenyataan). Oleh karena itu, riset dan pengumpulan data yang valid adalah langkah pertama dan paling utama sebelum mulai menulis."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Dalam debat, tim afirmasi bertugas memberikan argumen yang membantah atau menentang mosi yang sedang diperdebatkan.",
        options: opsiBenarSalahIndo,
        answer: 1, 
        explanation: "Tim yang mendukung mosi adalah Tim Afirmasi (Pro). Tim yang membantah/menentang mosi disebut Tim Oposisi (Kontra)."
    },
    {
        question: "Rima atau persajakan dalam puisi berfungsi untuk...",
        options: [
            "Menyembunyikan makna puisi dari pembaca awam.",
            "Memberikan efek musikalitas/keindahan bunyi saat dibaca.",
            "Menambah jumlah kata agar puisi terlihat panjang.",
            "Menjelaskan asal-usul penyair.",
            "Memisahkan satu bait dengan bait lainnya secara visual."
        ],
        answer: 1, 
        explanation: "Rima (persamaan bunyi pada akhir larik) memberikan efek ritme dan nada yang memperindah puisi saat dideklamasikan (efek musikalitas)."
    },
    {
        question: "Kesimpulan dalam teks debat harus bersifat...",
        options: [
            "Memihak pada tim yang pandai berbicara.",
            "Menyerang kelemahan moderator.",
            "Objektif, meringkas poin-poin argumen utama, dan berpegang pada esensi mosi.",
            "Menambah argumen baru yang belum pernah dibahas.",
            "Menggantung agar pendengar menebak sendiri kelanjutannya."
        ],
        answer: 2, 
        explanation: "Kesimpulan debat bukan tempat memunculkan argumen baru. Kesimpulan harus objektif dan merupakan benang merah dari argumen yang telah disampaikan selama perdebatan."
    },
    {
        question: "Contoh kata konkret (kata yang maknanya dapat ditangkap indra) dalam puisi adalah...<br><br>(1) Rindu<br>(2) Batu karang<br>(3) Sedih<br>(4) Darah",
        options: opsiKompleksIndo,
        answer: 2, 
        explanation: "Kata konkret dapat ditangkap panca indra. 'Batu karang' (bisa dilihat/diraba) dan 'Darah' (bisa dilihat/dirasa) adalah konkret (2 dan 4). 'Rindu' dan 'Sedih' adalah kata abstrak (perasaan)."
    },
    {
        question: "<b>Pernyataan:</b> Bahasa yang digunakan dalam teks biografi sebagian besar didominasi oleh kalimat dalam bentuk masa lampau (Past Tense jika dalam bahasa Inggris).<br><br><b>Sebab</b><br><br><b>Alasan:</b> Biografi menceritakan riwayat, sejarah, dan peristiwa yang sudah berlalu dalam kehidupan seorang tokoh.",
        options: opsiSebabAkibatIndo,
        answer: 0, 
        explanation: "Pernyataan benar, alasan benar, dan berhubungan. Karena berkisah tentang perjalanan hidup yang sudah terjadi, biografi secara alamiah menggunakan penanda waktu lampau (telah, pada tahun..., saat kecil)."
    },
    {
        question: "Negosiasi yang dilakukan di pasar antara pembeli dan pedagang sayur tergolong ke dalam jenis negosiasi...",
        options: [
            "Formal tertulis",
            "Informal / Tidak resmi",
            "Delegasi perwakilan",
            "Arbitrase",
            "Bipartit hukum"
        ],
        answer: 1, 
        explanation: "Negosiasi di pasar bersifat santai, tanpa aturan tertulis baku, dan bahasa yang digunakan seringkali merupakan ragam bahasa lisan santai, sehingga termasuk negosiasi informal."
    },
    {
        question: "Fakta sangat penting dalam debat karena...",
        options: [
            "Fakta dapat menjatuhkan harga diri lawan.",
            "Fakta membuat suara pembicara menjadi lebih keras.",
            "Argumen tanpa fakta hanya berupa opini kosong yang mudah dipatahkan (fallacy).",
            "Fakta memperpanjang durasi waktu debat.",
            "Moderator menyukai fakta."
        ],
        answer: 2, 
        explanation: "Inti dari argumen yang kuat adalah A-R-E (Assertion, Reasoning, Evidence). Fakta (Evidence) berfungsi sebagai bukti nyata yang menopang logika agar tidak menjadi sekadar klaim sepihak."
    },
    {
        question: "<i>Rendra merupakan tokoh penting dalam dunia teater. Karyanya banyak diakui oleh dunia. Bahkan ia dijuluki \"Si Burung Merak\" karena penampilannya.</i><br><br>Dalam kaidah teks biografi, penggalan teks tersebut merupakan pemakaian kaidah...",
        options: [
            "Penggunaan kata sifat (Adjektiva).",
            "Penggunaan kata kerja pasif.",
            "Rujukan kata (Pronomina).",
            "Kata kerja tindakan.",
            "Majas ironi."
        ],
        answer: 2, 
        explanation: "Penggunaan kata 'Karyanya' dan 'ia' merujuk kembali pada subjek/tokoh utama yaitu 'Rendra'. Ini merupakan kaidah rujukan kata (pronomina)."
    },
    {
        question: "<b>Pernyataan Benar/Salah:</b> Meringkas teks biografi dilakukan dengan cara mengubah seluruh kata-kata aslinya dengan kata-kata sendiri tanpa harus mempertahankan urutan kronologis kejadian dari teks aslinya.",
        options: opsiBenarSalahIndo,
        answer: 1, 
        explanation: "Meskipun diringkas, urutan waktu/kronologi sejarah tokoh (Orientasi - Peristiwa) HARUS tetap dipertahankan agar tidak mengubah alur dan kebenaran fakta sejarah dari biografi tersebut."
    }
];