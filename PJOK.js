// --- 📚 DATA KUIS ---
        const subjects = [
            { id: 'pjok', name: 'PJOK', icon: 'ph-person-simple-run', color: 'text-emerald-500 dark:text-emerald-400' }
        ];

        // Make subjects globally accessible
        window.subjects = subjects;

        // FUNGSI ACAK ARRAY
        function shuffleArray(array) {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Make shuffleArray globally accessible
        window.shuffleArray = shuffleArray;

        // 40 SOAL PJOK LENGKAP
        const quizData = {
            'pjok': [
                {
                    question: "Dalam situasi tendangan bebas tidak langsung di dalam kotak penalti, bola ditendang dan langsung masuk ke gawang lawan tanpa menyentuh pemain lain. Keputusan wasit yang benar adalah...",
                    options: ["Gol sah", "Tendangan penalti", "Tendangan gawang untuk tim lawan", "Tendangan bebas diulang"],
                    answer: 2,
                    explanation: "Sesuai aturan FIFA, bola dari tendangan bebas tidak langsung harus menyentuh pemain lain (kawan atau lawan) sebelum masuk gawang agar sah. Jika langsung masuk, maka dianggap bola mati dan dimulai kembali dengan tendangan gawang."
                },
                {
                    question: "Pemain yang berada dalam posisi offside tidak akan dijatuhi hukuman jika ia menerima bola langsung dari tendangan sudut.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Ada tiga kondisi di mana aturan offside tidak berlaku: menerima bola langsung dari lemparan ke dalam, tendangan gawang, dan tendangan sudut."
                },
                {
                    question: "Strategi Park the Bus dalam sepak bola sering dianggap negatif namun efektif. Fokus utama dari taktik ini adalah...",
                    options: ["Menyerang total dengan seluruh pemain", "Menumpuk pemain di area pertahanan untuk menutup ruang gerak lawan", "Melakukan pressing tinggi di area lawan", "Mengandalkan penguasaan bola di lini tengah"],
                    answer: 1,
                    explanation: "Taktik ini mengutamakan pertahanan rapat (low block) dengan menempatkan hampir seluruh pemain di area penalti sendiri untuk menyulitkan lawan mencetak gol."
                },
                {
                    question: "Jika bola keluar melewati garis gawang dan terakhir disentuh oleh pemain bertahan, maka wasit akan memberikan tendangan gawang (goal kick).",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Jika terakhir disentuh pemain bertahan, wasit akan memberikan tendangan sudut (corner kick). Tendangan gawang diberikan jika terakhir disentuh pemain penyerang."
                },
                {
                    question: "Seorang setter berada di posisi 1 (belakang kanan) saat servis dilakukan. Setelah bola menyeberang net, ia segera lari menuju depan net antara posisi 2 dan 3. Tindakan ini bertujuan untuk...",
                    options: ["Melakukan blocking", "Mengambil posisi ideal untuk memberikan umpan (taktik switch)", "Melakukan servis ulang", "Menggantikan peran libero"],
                    answer: 1,
                    explanation: "Dalam sistem voli modern, setter dari posisi belakang sering lari ke depan setelah servis agar tim memiliki 3 penyerang di baris depan yang siap menerima umpan."
                },
                {
                    question: "Seorang libero diperbolehkan melakukan servis untuk menggantikan pemain tengah (middle blocker) jika aturan kompetisi tersebut mengizinkannya.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Meskipun aturan FIVB internasional melarang, banyak liga mengizinkan libero melakukan satu rotasi servis. Namun secara umum, teknis libero tetaplah spesialis pertahanan."
                },
                {
                    question: "Dalam voli, pelanggaran \"Double Hit\" sering terjadi pada saat...",
                    options: ["Melakukan blocking yang mengenai dua tangan bersamaan", "Pemain menyentuh bola dua kali berturut-turut secara sengaja", "Bola mengenai net dua kali", "Bola mengenai lantai area sendiri"],
                    answer: 1,
                    explanation: "Pemain tidak boleh menyentuh bola dua kali berturut-turut, kecuali sentuhan pertama adalah hasil blocking."
                },
                {
                    question: "Poin tetap diberikan kepada salah satu tim meskipun terjadi double fault (pelanggaran bersamaan oleh kedua tim).",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Jika terjadi pelanggaran bersamaan, reli dianggap tidak sah dan harus diulang (replay) tanpa ada penambahan poin."
                },
                {
                    question: "Seorang pemain seringkali melakukan pukulan yang jatuh pelan di dekat net lawan saat lawan sedang bersiap di garis belakang. Strategi ini disebut...",
                    options: ["Smash tajam", "Dropshot", "Drive", "Clear/Lob"],
                    answer: 1,
                    explanation: "Dropshot bertujuan mengecoh lawan yang posisinya terlalu jauh di belakang agar kesulitan menjangkau bola pendek di depan net."
                },
                {
                    question: "Pada sistem rally point 21, jika skor mencapai 29-29, maka pemain yang mendapatkan poin ke-30 dinyatakan sebagai pemenang tanpa perlu selisih 2 poin.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Batas maksimal poin dalam bulutangkis adalah 30. Jika skor 29-29, tidak berlaku lagi selisih 2 poin (deuce)."
                },
                {
                    question: "Apa keunggulan utama dari pegangan raket American Grip?",
                    options: ["Memudahkan pukulan backhand", "Sangat efektif untuk melakukan smash keras karena permukaan raket menghadap bola", "Memudahkan netting silang", "Menghemat tenaga pergelangan tangan"],
                    answer: 1,
                    explanation: "American Grip menempatkan ibu jari dan jari telunjuk menempel pada bagian luas gagang raket, sehingga pukulan overhead (seperti smash) menjadi sangat kuat."
                },
                {
                    question: "Jika shuttlecock mengenai raket pemain sebanyak dua kali dalam satu ayunan yang sama secara tidak sengaja, maka hal tersebut dianggap sah.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Aturan terbaru BWF menyatakan jika terkena dua kali dalam satu gerakan ayunan tunggal (tidak sengaja), permainan tetap dilanjutkan."
                },
                {
                    question: "Saat melakukan guling depan, jika dagu tidak menempel ke dada, risiko cedera yang paling mungkin terjadi adalah pada bagian...",
                    options: ["Pergelangan tangan", "Tulang leher dan kepala", "Otot perut", "Tulang ekor"],
                    answer: 1,
                    explanation: "Dagu yang menempel ke dada memastikan tengkuk (bukan dahi atau ubun-ubun) yang menyentuh matras, sehingga leher terlindungi dari beban tubuh."
                },
                {
                    question: "Posisi tangan saat melakukan handstand harus selebar bahu dengan jari-jari dirapatkan untuk memperkuat tumpuan.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Jari-jari justru harus sedikit direnggangkan (seperti mencengkeram) untuk membantu keseimbangan dan distribusi berat badan yang lebih baik."
                },
                {
                    question: "Unsur gerakan yang paling dominan pada saat melakukan guling lenting (neck spring) adalah...",
                    options: ["Keseimbangan statis", "Fleksibilitas dan lecutan kaki", "Kekuatan otot lengan saja", "Ketahanan pernapasan"],
                    answer: 1,
                    explanation: "Guling lenting membutuhkan lenturan punggung dan lecutan kaki yang kuat untuk melemparkan tubuh ke depan atas."
                },
                {
                    question: "Gerakan meroda (cartwheel) menggunakan arah gerakan ke depan, searah dengan pandangan mata.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Gerakan meroda dilakukan ke samping (menyamping), bukan ke depan atau belakang."
                },
                {
                    question: "Zat adiktif dalam narkotika yang bekerja dengan cara mempercepat kerja jantung dan membuat pengguna merasa sangat bersemangat secara tidak wajar disebut...",
                    options: ["Depresan", "Stimulan", "Halusinogen", "Sedatif"],
                    answer: 1,
                    explanation: "Stimulan memicu sistem saraf pusat dan meningkatkan metabolisme tubuh, denyut jantung, serta tekanan darah."
                },
                {
                    question: "Seseorang yang sudah kecanduan narkoba jenis opioid akan mengalami gejala \"sakau\" yang hebat jika pemakaiannya dihentikan secara mendadak.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Tubuh yang sudah beradaptasi dengan zat tersebut akan mengalami reaksi fisik dan psikis yang menyakitkan (gejala putus zat) saat zat tersebut hilang dari sistem."
                },
                {
                    question: "Salah satu dampak sosial dari penyalahgunaan narkoba di tingkat remaja adalah...",
                    options: ["Meningkatnya prestasi akademik", "Terganggunya keharmonisan keluarga dan meningkatnya kriminalitas", "Tubuh menjadi lebih kebal terhadap penyakit", "Memperluas pergaulan yang sehat"],
                    answer: 1,
                    explanation: "Narkoba sering memicu perilaku impulsif, emosi tidak stabil, dan kebutuhan finansial tinggi yang berujung pada tindakan kriminal atau konflik keluarga."
                },
                {
                    question: "Narkotika Golongan II adalah zat yang memiliki potensi ketergantungan sangat tinggi dan sama sekali tidak boleh digunakan untuk pengobatan.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Itu adalah definisi Golongan I. Golongan II memiliki potensi tinggi tetapi bisa digunakan untuk pengobatan sebagai pilihan terakhir."
                },
                {
                    question: "Posisi kaki yang simetris di mana kedua kaki dibuka lebar dan berat badan berada di tengah disebut kuda-kuda...",
                    options: ["Depan", "Samping", "Tengah", "Belakang"],
                    answer: 2,
                    explanation: "Kuda-kuda tengah memberikan stabilitas yang paling kuat untuk menahan serangan dari arah mana pun karena titik berat berada tepat di tengah."
                },
                {
                    question: "Teknik elakan dilakukan dengan cara memindahkan posisi kaki untuk menjauh dari serangan lawan.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Elakan hanya memindahkan posisi tubuh (bidang sasaran) tanpa memindahkan kaki. Jika kaki berpindah, itu disebut hindaran."
                },
                {
                    question: "Dalam sebuah pertandingan, pesilat berhasil menjatuhkan lawan dengan teknik sapuan yang sah. Poin yang didapatkan adalah...",
                    options: ["1 poin", "2 poin", "3 poin", "4 poin"],
                    answer: 2,
                    explanation: "Teknik menjatuhkan lawan (bantingan/sapuan/guntingan) yang sah dalam pencak silat bernilai 3 poin."
                },
                {
                    question: "Pukulan yang dilakukan dengan lintasan dari samping bawah ke atas dengan mengepal disebut pukulan bandul.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Pukulan bandul atau sengkol memiliki lintasan melengkung dari bawah ke atas menuju sasaran dagu atau ulu hati."
                },
                {
                    question: "Seorang pemain bertahan sengaja menghentikan bola dengan tangan tepat di garis gawang untuk mencegah gol. Keputusan wasit adalah...",
                    options: ["Kartu kuning dan tendangan bebas", "Kartu merah dan tendangan penalti", "Hanya tendangan sudut", "Peringatan lisan"],
                    answer: 1,
                    explanation: "Menghalangi peluang gol yang pasti dengan tangan (DOGSO) berbuah kartu merah langsung dan penalti."
                },
                {
                    question: "Sentuhan bola pada saat blocking tidak dihitung sebagai satu dari tiga sentuhan yang diperbolehkan bagi sebuah tim.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Setelah block, tim masih memiliki hak 3 kali sentuhan untuk mengembalikan bola."
                },
                {
                    question: "Jenis servis yang sering digunakan dalam permainan ganda untuk mencegah lawan melakukan serangan langsung adalah...",
                    options: ["Servis panjang (High serve)", "Servis pendek (Short serve)", "Servis drive", "Servis lob"],
                    answer: 1,
                    explanation: "Servis pendek memaksa lawan memukul bola dari bawah ke atas, sehingga tidak bisa langsung melakukan smash tajam."
                },
                {
                    question: "Sikap kayang yang benar mengharuskan tumpuan berat badan berada sepenuhnya pada otot punggung.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Tumpuan harus merata pada kedua telapak tangan dan kedua telapak kaki dengan lengan dan kaki yang lurus."
                },
                {
                    question: "Halusinogen seperti LSD dapat menyebabkan fenomena \"flashback\". Apa yang dimaksud dengan fenomena ini?",
                    options: ["Pengguna merasa kembali sehat", "Pengguna mengalami kembali efek halusinasi meskipun sudah lama tidak memakai zat tersebut", "Pengguna tertidur pulas", "Pengguna merasa sangat lapar"],
                    answer: 1,
                    explanation: "LSD tersimpan dalam jaringan tubuh dan bisa \"terlepas\" kembali secara tiba-tiba, memicu halusinasi tanpa konsumsi baru."
                },
                {
                    question: "Tangkisan luar dilakukan dengan menggerakkan tangan dari dalam dada ke arah luar untuk membuang serangan lawan.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Sesuai namanya, arah gerakannya menuju luar tubuh pemain."
                },
                {
                    question: "Jika tim lawan menggunakan strategi High Pressing, langkah taktis yang paling logis untuk membangun serangan adalah...",
                    options: ["Melakukan umpan-umpan pendek di area sendiri", "Menggunakan umpan lambung panjang (long ball) langsung ke lini depan", "Meminta kiper berdiam diri dengan bola", "Menambah jumlah pemain bertahan di kotak penalti"],
                    answer: 1,
                    explanation: "Umpan panjang melewati lini tengah akan mematikan jebakan pressing lawan dan memanfaatkan ruang kosong yang ditinggalkan pemain lawan di area belakang mereka."
                },
                {
                    question: "Bola dinyatakan \"masuk\" jika menyentuh garis lapangan, meskipun sebagian besar bola berada di luar garis.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Garis adalah bagian dari area permainan. Selama ada bagian bola yang menyentuh garis, maka poin sah."
                },
                {
                    question: "Seorang pemain tunggal memiliki jangkauan kaki yang terbatas. Latihan fisik apa yang paling tepat untuk memperbaiki performanya?",
                    options: ["Angkat beban berat", "Latihan Footwork dan kelincahan (shuttle run)", "Lari maraton 10 km", "Renang gaya dada"],
                    answer: 1,
                    explanation: "Bulutangkis sangat mengandalkan kecepatan perpindahan kaki (footwork) untuk menjangkau seluruh sudut lapangan dengan efisien."
                },
                {
                    question: "Lompat harimau (tiger sprong) membutuhkan keberanian yang lebih tinggi dibandingkan guling depan karena adanya fase melayang di udara.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Secara teknis, lompat harimau adalah guling depan yang didahului dengan loncatan dan fase melayang."
                },
                {
                    question: "Apa yang harus dilakukan jika melihat teman menunjukkan gejala pengguna narkoba?",
                    options: ["Menjauhinya agar tidak tertular", "Melaporkannya ke polisi untuk dipenjara", "Mendekati secara persuasif dan menyarankan rehabilitasi", "Mengabaikannya karena itu urusan pribadi"],
                    answer: 2,
                    explanation: "Pengguna adalah korban yang butuh bantuan medis dan rehabilitasi, bukan kriminal yang harus langsung dipenjara (jika hanya sebagai pengguna)."
                },
                {
                    question: "Variasi pola langkah dalam silat (seperti pola langkah S atau U) hanya berfungsi sebagai tarian keindahan dalam seni.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Pola langkah berfungsi untuk mencari posisi strategis, mengecoh lawan, dan mengatur jarak serang/bela secara taktis."
                },
                {
                    question: "Siapakah pemain yang bertugas mengoordinasi pertahanan dan sering menjadi orang terakhir sebelum kiper?",
                    options: ["Playmaker", "Stopper / Center Back", "Winger", "Target man"],
                    answer: 1,
                    explanation: "Bek tengah (CB) adalah jantung pertahanan yang bertugas memotong serangan lawan di area sentral."
                },
                {
                    question: "Tim dinyatakan menang dalam satu set (kecuali set penentuan) jika sudah mencapai poin 25 dengan selisih minimal 1 poin.",
                    options: ["BENAR", "SALAH"],
                    answer: 1,
                    explanation: "Harus selisih minimal 2 poin (misal 25-23). Jika 25-24, permainan lanjut hingga ada selisih 2."
                },
                {
                    question: "Mengapa pemanasan (warming up) sangat wajib dilakukan sebelum olahraga berat seperti voli atau sepak bola?",
                    options: ["Agar badan cepat berkeringat", "Meningkatkan suhu otot dan elastisitas tendon untuk mengurangi risiko cedera", "Untuk menghabiskan waktu latihan", "Supaya tidak perlu melakukan pendinginan nantinya"],
                    answer: 1,
                    explanation: "Otot yang \"hangat\" lebih fleksibel dan siap menerima beban kontraksi yang mendadak."
                },
                {
                    question: "Dalam pencak silat, etika atau budi pekerti luhur lebih diutamakan daripada sekadar kemampuan fisik untuk menyakiti orang lain.",
                    options: ["BENAR", "SALAH"],
                    answer: 0,
                    explanation: "Pencak silat adalah budaya bangsa yang mengajarkan pengendalian diri, sportivitas, dan penghormatan kepada lawan."
                }
            ]
        };

        // Make quizData globally accessible
        window.quizData = quizData;
