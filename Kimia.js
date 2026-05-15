// --- 📚 DATA KUIS KIMIA ---
subjects.push({
    id: 'kimia',
    name: 'Kimia', 
    icon: 'ph-flask', 
    color: 'text-purple-500 dark:text-purple-400'
});

quizData['kimia'] = [
    // --- BAGIAN I: PILIHAN GANDA ANALITIS ---
    {
        story: "Bagian I: Pilihan Ganda Analitis (Larutan Elektrolit)",
        question: "Sekelompok siswa melakukan uji daya hantar listrik terhadap beberapa larutan. Pada larutan X, lampu tidak menyala tetapi terdapat sedikit gelembung gas pada elektrode. Kesimpulan yang paling tepat mengenai larutan X adalah...",
        options: [
            "Larutan X adalah elektrolit kuat dengan derajat ionisasi &alpha; = 1.",
            "Larutan X mengandung senyawa ionik yang terdisosiasi sempurna.",
            "Larutan X adalah elektrolit lemah yang terionisasi sebagian.",
            "Larutan X adalah non-elektrolit karena lampu tidak menyala.",
            "Larutan X merupakan pelarut murni tanpa zat terlarut."
        ],
        answer: 2,
        explanation: "Ciri elektrolit lemah adalah gelembung gas sedikit dan lampu redup/tidak menyala. Hal ini terjadi karena molekul hanya terionisasi sebagian (0 < &alpha; < 1), sehingga ion bebas yang menghantarkan listrik jumlahnya sedikit."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Sifat Larutan)",
        question: "Senyawa NaCl dalam wujud padat (kristal) tidak dapat menghantarkan arus listrik, tetapi ketika dilarutkan dalam air dapat menjadi konduktor yang baik. Hal ini disebabkan...",
        options: [
            "Dalam wujud padat, NaCl tidak memiliki elektron valensi.",
            "Air memberikan elektron tambahan kepada kristal NaCl.",
            "Dalam air, ikatan kovalen pada NaCl terputus.",
            "Kristal NaCl pecah menjadi ion Na<sup>+</sup> dan Cl<sup>-</sup> yang dapat bergerak bebas dalam pelarut air.",
            "Molekul air bereaksi dengan NaCl menghasilkan gas hidrogen."
        ],
        answer: 3,
        explanation: "Syarat menghantarkan listrik adalah adanya ion-ion yang bergerak bebas. Pada padatan ionik, ion-ion terikat kuat dalam kisi kristal. Saat dilarutkan, kisi tersebut hancur dan ion-ionnya bergerak bebas (terdisosiasi)."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Bilangan Oksidasi)",
        question: "Bilangan oksidasi unsur kromium (Cr) pada senyawa kalium dikromat (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) adalah...",
        options: ["+2", "+3", "+4", "+6", "+7"],
        answer: 3,
        explanation: "Aturan biloks: K (Gol I A) = +1, O = -2.<br>2(Biloks K) + 2(Biloks Cr) + 7(Biloks O) = 0<br>2(+1) + 2(x) + 7(-2) = 0<br>+2 + 2x - 14 = 0<br>2x = +12 &rarr; x = +6."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Reaksi Redoks)",
        question: "Perhatikan persamaan reaksi berikut:<br>Zn<sub>(s)</sub> + CuSO<sub>4(aq)</sub> &rarr; ZnSO<sub>4(aq)</sub> + Cu<sub>(s)</sub><br>Spesi yang bertindak sebagai reduktor dalam reaksi tersebut adalah...",
        options: ["Zn", "CuSO<sub>4</sub>", "ZnSO<sub>4</sub>", "Cu", "SO<sub>4</sub><sup>2-</sup>"],
        answer: 0,
        explanation: "Reduktor adalah zat yang mengalami oksidasi (kenaikan biloks). Biloks Zn berubah dari 0 (unsur bebas) menjadi +2 (dalam ZnSO<sub>4</sub>). Karena Zn mengalami oksidasi, maka ia adalah reduktor."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Autoredoks)",
        question: "Reaksi autoredoks (disproporsionasi) terjadi ketika satu zat mengalami reaksi oksidasi dan reduksi sekaligus. Manakah dari reaksi berikut yang merupakan reaksi autoredoks?",
        options: [
            "2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O",
            "Cl<sub>2</sub> + 2KOH &rarr; KCl + KClO + H<sub>2</sub>O",
            "CuO + H<sub>2</sub> &rarr; Cu + H<sub>2</sub>O",
            "NaOH + HCl &rarr; NaCl + H<sub>2</sub>O",
            "Fe<sub>2</sub>O<sub>3</sub> + 3CO &rarr; 2Fe + 3CO<sub>2</sub>"
        ],
        answer: 1,
        explanation: "Pada reaksi B, unsur Cl dalam Cl<sub>2</sub> (biloks 0) berubah menjadi Cl<sup>-</sup> dalam KCl (biloks -1, reduksi) dan Cl<sup>+</sup> dalam KClO (biloks +1, oksidasi)."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Tata Nama)",
        question: "Penamaan senyawa IUPAC yang benar untuk senyawa dengan rumus kimia Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> adalah...",
        options: ["Besi sulfat", "Besi(II) sulfat", "Besi(III) sulfat", "Dibesi trisulfat", "Feri sulfida"],
        answer: 2,
        explanation: "Besi (Fe) adalah logam transisi yang memiliki lebih dari satu biloks. Dalam Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, ion sulfat adalah SO<sub>4</sub><sup>2-</sup>. Agar netral, muatan total Fe harus +6 (dibagi 2 atom Fe = +3). Jadi, namanya Besi(III) sulfat."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Hukum Dasar)",
        question: "Pembakaran kayu di tempat terbuka menghasilkan abu yang massanya lebih ringan daripada massa kayu semula. Apakah fenomena ini melanggar Hukum Kekekalan Massa (Lavoisier)?",
        options: [
            "Ya, karena massa zat sebelum dan sesudah reaksi tidak sama.",
            "Ya, karena kayu terbakar kehilangan atom-atomnya.",
            "Tidak, karena massa sebagian besar kayu diubah menjadi energi panas.",
            "Tidak, karena jika gas CO<sub>2</sub> dan uap air hasil pembakaran ikut ditimbang, total massanya akan sama dengan kayu dan oksigen yang bereaksi.",
            "Tidak, karena abu memiliki massa jenis yang lebih rendah dari kayu."
        ],
        answer: 3,
        explanation: "Hukum Lavoisier berlaku di sistem tertutup. Kayu terbakar melepaskan gas (CO<sub>2</sub> dan uap air) ke udara. Jika massa gas yang terbang ini ditotalkan dengan abu, massanya akan sama persis dengan kayu + oksigen awal."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Hukum Proust)",
        question: "Perbandingan massa Fe : S dalam senyawa FeS adalah 7 : 4. Jika 10 gram besi dipanaskan dengan 4 gram belerang, maka zat yang tersisa setelah reaksi adalah...",
        options: ["Besi bersisa 2 gram", "Besi bersisa 3 gram", "Belerang bersisa 1 gram", "Belerang bersisa 2 gram", "Tidak ada zat yang bersisa"],
        answer: 1,
        explanation: "(Hukum Proust). Reaksi butuh perbandingan 7:4. Karena belerang hanya ada 4 gram, ia akan habis bereaksi dengan tepat 7 gram besi. Massa besi awal = 10 gram. Sisa besi = 10 - 7 = 3 gram."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Stoikiometri)",
        question: "Berapakah jumlah mol dari 11 gram gas CO<sub>2</sub> jika diketahui Ar C = 12, O = 16?",
        options: ["0,1 mol", "0,25 mol", "0,5 mol", "2,5 mol", "4 mol"],
        answer: 1,
        explanation: "Mr CO<sub>2</sub> = 12 + (2 &times; 16) = 44 g/mol.<br>n = m / Mr = 11 / 44 = 0,25 mol."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Rumus Molekul)",
        question: "Suatu gas hidrokarbon memiliki rumus empiris CH<sub>2</sub>. Jika massa molekul relatif (Mr) senyawa tersebut adalah 56, rumus molekul senyawa itu adalah... (Ar C=12, H=1)",
        options: ["C<sub>2</sub>H<sub>4</sub>", "C<sub>3</sub>H<sub>6</sub>", "C<sub>4</sub>H<sub>8</sub>", "C<sub>5</sub>H<sub>10</sub>", "C<sub>6</sub>H<sub>12</sub>"],
        answer: 2,
        explanation: "Rumus Molekul = (CH<sub>2</sub>)<sub>n</sub> = Mr.<br>(12 + 2)n = 56 &rarr; 14n = 56 &rarr; n = 4.<br>Maka rumus molekulnya adalah C<sub>4</sub>H<sub>8</sub>."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Gay-Lussac)",
        question: "Jika 5 liter gas metana (CH<sub>4</sub>) dibakar sempurna sesuai reaksi: CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O. Berapa liter gas oksigen yang dibutuhkan jika diukur pada suhu dan tekanan yang sama?",
        options: ["2,5 Liter", "5 Liter", "10 Liter", "15 Liter", "20 Liter"],
        answer: 2,
        explanation: "Hukum Gay-Lussac menyatakan perbandingan volume gas sama dengan perbandingan koefisien. Koefisien CH<sub>4</sub> : O<sub>2</sub> = 1 : 2. Jika CH<sub>4</sub> = 5 L, maka O<sub>2</sub> = 2 &times; 5 = 10 L."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Hukum Dalton)",
        question: "Unsur fosfor dan oksigen dapat membentuk dua macam senyawa, yaitu P<sub>2</sub>O<sub>3</sub> dan P<sub>2</sub>O<sub>5</sub>. Fenomena ini paling tepat dijelaskan menggunakan...",
        options: ["Hukum Lavoisier", "Hukum Proust", "Hukum Dalton", "Hukum Gay-Lussac", "Hipotesis Avogadro"],
        answer: 2,
        explanation: "Hukum Perbandingan Berganda (Dalton) membahas dua unsur yang dapat membentuk lebih dari satu jenis senyawa yang berbeda dengan perbandingan massa unsur yang bulat dan sederhana."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Ikatan & Elektrolit)",
        question: "Di antara kelompok senyawa berikut, yang seluruhnya tergolong senyawa kovalen polar dan dapat menghantarkan listrik dalam air adalah...",
        options: [
            "CH<sub>4</sub>, CCl<sub>4</sub>, H<sub>2</sub>O",
            "HCl, NH<sub>3</sub>, CH<sub>3</sub>COOH",
            "NaCl, KCl, MgCl<sub>2</sub>",
            "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, CO(NH<sub>2</sub>)<sub>2</sub>, C<sub>2</sub>H<sub>5</sub>OH",
            "H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>"
        ],
        answer: 1,
        explanation: "HCl, NH<sub>3</sub>, dan CH<sub>3</sub>COOH adalah ikatan kovalen yang bersifat polar. Saat dilarutkan ke dalam air, molekulnya terhidrolisis/terionisasi membentuk ion sehingga bisa mengantar listrik. (Opsi C adalah senyawa ion, opsi D non-elektrolit)."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Kondisi STP)",
        question: "Volume molar gas pada keadaan standar (STP) yaitu suhu 0&deg;C dan tekanan 1 atm adalah...",
        options: ["22,4 L/mol", "24,4 L/mol", "11,2 L/mol", "24 L/mol", "6,02 L/mol"],
        answer: 0,
        explanation: "Sesuai ketetapan gas ideal, 1 mol gas apa saja pada kondisi STP (0&deg;C, 1 atm) volumenya adalah 22,4 Liter."
    },
    {
        story: "Bagian I: Pilihan Ganda Analitis (Pereaksi Pembatas)",
        question: "Dalam reaksi pembuatan amonia: N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>. Jika direaksikan 2 mol N<sub>2</sub> dan 3 mol H<sub>2</sub>, pernyataan yang benar tentang pereaksi pembatas adalah...",
        options: [
            "N<sub>2</sub> adalah pereaksi pembatas karena massanya lebih besar.",
            "H<sub>2</sub> adalah pereaksi pembatas karena perbandingan mol/koefisiennya lebih kecil.",
            "Kedua pereaksi habis bereaksi secara bersamaan.",
            "NH<sub>3</sub> yang dihasilkan adalah 4 mol.",
            "Tersisa 1 mol gas hidrogen."
        ],
        answer: 1,
        explanation: "Menentukan pereaksi pembatas = Mol dibagi koefisien.<br>Untuk N<sub>2</sub> = 2/1 = 2. Untuk H<sub>2</sub> = 3/3 = 1.<br>Angka terkecil adalah H<sub>2</sub>, maka H<sub>2</sub> adalah pereaksi pembatas (habis duluan)."
    },

    // --- BAGIAN II: PILIHAN GANDA KOMPLEKS ---
    {
        story: "Bagian II: Pilihan Ganda Kompleks (A: 1,2,3; B: 1,3; C: 2,4; D: 4; E: Semua)",
        question: "Karakteristik senyawa elektrolit kuat ditunjukkan oleh ciri-ciri...<br>(1) Derajat ionisasi (&alpha;) mendekati 1.<br>(2) Memiliki ikatan kovalen non-polar.<br>(3) Menghasilkan banyak gelembung gas pada elektroda.<br>(4) Lampu alat uji tidak menyala.",
        options: [
            "A. Jika (1), (2), dan (3) benar",
            "B. Jika (1) dan (3) benar",
            "C. Jika (2) dan (4) benar",
            "D. Jika hanya (4) yang benar",
            "E. Jika semuanya benar"
        ],
        answer: 1,
        explanation: "Elektrolit kuat berderajat ionisasi = 1, lampu terang, dan banyak gelembung gas. Senyawanya berikatan ionik atau kovalen polar yang kuat. (2 dan 4 salah)."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks (Oksidasi)",
        question: "Senyawa di bawah ini yang mengalami reaksi oksidasi (berperan sebagai reduktor) adalah...<br>(1) Besi yang berkarat membentuk Fe<sub>2</sub>O<sub>3</sub>.<br>(2) Gas Klorin (Cl<sub>2</sub>) yang berubah menjadi ion klorida (Cl<sup>-</sup>).<br>(3) Pita magnesium yang dibakar menghasilkan MgO.<br>(4) Ion tembaga (Cu<sup>2+</sup>) yang mengendap menjadi logam tembaga padat (Cu).",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 1,
        explanation: "Oksidasi adalah kenaikan biloks (mengikat oksigen). Fe menjadi +3 (oksidasi), Mg menjadi +2 (oksidasi). Klorin dan tembaga pada poin 2 dan 4 mengalami penurunan biloks (reduksi)."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks (Wujud Zat)",
        question: "Senyawa yang wujud lelehannya (liquid) TIDAK dapat menghantarkan listrik, tetapi larutannya dalam air (aqueous) DAPAT menghantarkan listrik adalah...<br>(1) NaCl<br>(2) HCl<br>(3) KOH<br>(4) H<sub>2</sub>SO<sub>4</sub>",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 2,
        explanation: "Senyawa yang lelehannya tidak menghantarkan listrik tetapi larutannya menghantarkan listrik adalah senyawa kovalen polar (HCl, H<sub>2</sub>SO<sub>4</sub>). Senyawa ionik (NaCl, KOH) lelehannya sudah bisa menghantar listrik."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks (Tata Nama)",
        question: "Aturan tata nama senyawa kovalen biner (non-logam + non-logam) yang tepat adalah...<br>(1) Menggunakan awalan angka Yunani (mono, di, tri, dsb).<br>(2) Unsur logam ditulis di depan.<br>(3) Akhiran unsur kedua diganti menjadi -ida.<br>(4) Tidak perlu memperhatikan jumlah atom (indeks).",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 1,
        explanation: "Senyawa kovalen biner dibentuk dari non-logam & non-logam, menggunakan awalan Yunani, dan akhiran -ida. Contoh: CO<sub>2</sub> (Karbon dioksida)."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks (Konsep Mol)",
        question: "Berdasarkan prinsip mol, 1 mol suatu unsur/senyawa identik dengan...<br>(1) 6,02 &times; 10<sup>23</sup> partikel unsur/senyawa tersebut.<br>(2) Massa atom relatif (Ar) atau massa molekul relatif (Mr) dalam gram.<br>(3) 22,4 Liter gas pada keadaan STP.<br>(4) 1 gram dari zat tersebut.",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 0,
        explanation: "(1) Ketetapan Avogadro, (2) Massa molar, (3) Volume molar STP. Poin 4 salah karena massa 1 mol bergantung pada Mr masing-masing zat, bukan mutlak 1 gram."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks",
        question: "Pernyataan yang benar mengenai rumus hidrat (air kristal) Tembaga(II) sulfat pentahidrat adalah...<br>(1) Rumus kimianya CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O.<br>(2) Berwarna biru terang dalam bentuk kristalnya.<br>(3) Jika dipanaskan, air kristalnya akan menguap.<br>(4) Mengandung 10 atom hidrogen dalam setiap molekul kristalnya.",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 4,
        explanation: "CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O memiliki 5 molekul air. Pemanasan membuat air lepas menghasilkan serbuk putih. Terdapat 5 &times; 2 = 10 atom H."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks",
        question: "Bilangan oksidasi unsur Nitrogen (N) yang bernilai positif terdapat pada senyawa...<br>(1) NH<sub>3</sub><br>(2) HNO<sub>3</sub><br>(3) N<sub>2</sub>H<sub>4</sub><br>(4) NO<sub>2</sub>",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 2,
        explanation: "Di NH<sub>3</sub>, biloks N = -3. Di HNO<sub>3</sub>, biloks N = +5. Di N<sub>2</sub>H<sub>4</sub>, biloks N = -2. Di NO<sub>2</sub>, biloks N = +4."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks",
        question: "Pada reaksi redoks, konsep perpindahan elektron menyatakan bahwa...<br>(1) Oksidasi adalah peristiwa pelepasan elektron.<br>(2) Reduksi adalah peristiwa pengikatan elektron.<br>(3) Zat yang teroksidasi adalah agen pereduksi.<br>(4) Elektron dilepaskan dari katoda ke anoda.",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 0,
        explanation: "Oksidasi = lepas elektron, Reduksi = tangkap elektron. Zat yang melepas elektron menyebabkan zat lain tereduksi (agen pereduksi). Poin 4 adalah konsep sel elektrokimia yang terbalik posisinya."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks",
        question: "Contoh senyawa non-elektrolit yang sering dijumpai dalam kehidupan sehari-hari adalah...<br>(1) Gula pasir (Sukrosa)<br>(2) Garam dapur<br>(3) Urea<br>(4) Cuka makan",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 1,
        explanation: "Gula dan urea adalah senyawa kovalen non-polar/organik yang tidak terionisasi dalam air (non-elektrolit). Garam adalah elektrolit kuat, cuka adalah elektrolit lemah."
    },
    {
        story: "Bagian II: Pilihan Ganda Kompleks",
        question: "Ciri dari Pereaksi Pembatas (Limiting Reactant) dalam suatu stoikiometri reaksi adalah...<br>(1) Reaktan yang memiliki massa paling kecil.<br>(2) Reaktan yang pertama kali habis dalam reaksi.<br>(3) Reaktan yang memiliki koefisien paling besar.<br>(4) Penentu jumlah produk (hasil reaksi) yang terbentuk.",
        options: ["A (1, 2, 3 benar)", "B (1, 3 benar)", "C (2, 4 benar)", "D (4 benar)", "E (Semuanya benar)"],
        answer: 2,
        explanation: "Massa kecil atau koefisien besar belum tentu menjadi pembatas. Pembatas murni ditentukan dari hasil bagi terkecil antara mol dan koefisiennya. Ia akan habis duluan (2) dan membatasi/menentukan jumlah produk (4)."
    },

    // --- BAGIAN III: SEBAB AKIBAT ---
    {
        story: "Bagian III: Sebab Akibat",
        question: "<b>Pernyataan:</b> Larutan gula (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) tidak dapat menyalakan lampu pada alat uji elektrolit.<br><b>SEBAB</b><br><b>Alasan:</b> Gula di dalam air tidak dapat terurai menjadi ion-ion positif dan negatif.",
        options: [
            "A (Pernyataan BENAR, Alasan BENAR, ADA hubungan sebab-akibat)",
            "B (Pernyataan BENAR, Alasan BENAR, TIDAK ADA hubungan)",
            "C (Pernyataan BENAR, Alasan SALAH)",
            "D (Pernyataan SALAH, Alasan BENAR)",
            "E (Keduanya SALAH)"
        ],
        answer: 0,
        explanation: "Pernyataan benar, alasan benar, ada hubungan. Ketiadaan ion yang bergerak bebas akibat tidak terjadinya ionisasi adalah alasan tunggal larutan gula bersifat non-elektrolit (lampu mati)."
    },
    {
        story: "Bagian III: Sebab Akibat",
        question: "<b>Pernyataan:</b> Reaksi penambahan hidrogen pada gas etena (C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub> &rarr; C<sub>2</sub>H<sub>6</sub>) diklasifikasikan sebagai reaksi reduksi bagi etena.<br><b>SEBAB</b><br><b>Alasan:</b> Menurut konsep klasik redoks, reduksi diartikan sebagai peristiwa pengikatan oksigen oleh suatu zat.",
        options: ["A (Benar, Benar, Berhubungan)", "B (Benar, Benar, Tdk Berhubungan)", "C (Benar, Salah)", "D (Salah, Benar)", "E (Salah, Salah)"],
        answer: 2,
        explanation: "Pernyataan benar (pengikatan atom Hidrogen adalah ciri reaksi reduksi secara konsep klasik). Namun alasan salah, karena pengikatan oksigen disebut Oksidasi, bukan reduksi."
    },
    {
        story: "Bagian III: Sebab Akibat",
        question: "<b>Pernyataan:</b> Dalam ruang tertutup, massa zat sebelum dan sesudah reaksi selalu sama sesuai Hukum Kekekalan Massa.<br><b>SEBAB</b><br><b>Alasan:</b> Atom-atom reaktan tidak ada yang musnah melainkan hanya mengalami penataan ulang (rearrangement) membentuk ikatan produk baru.",
        options: ["A (Benar, Benar, Berhubungan)", "B (Benar, Benar, Tdk Berhubungan)", "C (Benar, Salah)", "D (Salah, Benar)", "E (Salah, Salah)"],
        answer: 0,
        explanation: "Keduanya benar dan saling berhubungan. Penataan ulang atom tanpa ada yang musnah (Dalton) adalah penjelasan logis mengapa massa total selalu kekal (Lavoisier)."
    },
    {
        story: "Bagian III: Sebab Akibat",
        question: "<b>Pernyataan:</b> Satu mol gas nitrogen (N<sub>2</sub>) dan satu mol gas oksigen (O<sub>2</sub>) memiliki massa yang sama besar jika ditimbang.<br><b>SEBAB</b><br><b>Alasan:</b> Satu mol unsur gas diatomik apapun pada STP memiliki volume yang sama yaitu 22,4 Liter.",
        options: ["A (Benar, Benar, Berhubungan)", "B (Benar, Benar, Tdk Berhubungan)", "C (Benar, Salah)", "D (Salah, Benar)", "E (Salah, Salah)"],
        answer: 3,
        explanation: "Pernyataan SALAH (Massa 1 mol N<sub>2</sub> = 28 gram, 1 mol O<sub>2</sub> = 32 gram, massanya berbeda). Alasan BENAR (pada keadaan STP volumenya memang sama-sama 22,4 Liter asal jumlah molnya sama)."
    },
    {
        story: "Bagian III: Sebab Akibat",
        question: "<b>Pernyataan:</b> Senyawa Asam Sulfat (H<sub>2</sub>SO<sub>4</sub>) dilarutkan dalam air akan menghasilkan dua jenis kation hidrogen.<br><b>SEBAB</b><br><b>Alasan:</b> Asam sulfat adalah asam kuat berbasa dua (diprotik) yang terionisasi sempurna dalam pelarut air menghasilkan ion 2H<sup>+</sup> dan SO<sub>4</sub><sup>2-</sup>.",
        options: ["A (Benar, Benar, Berhubungan)", "B (Benar, Benar, Tdk Berhubungan)", "C (Benar, Salah)", "D (Salah, Benar)", "E (Salah, Salah)"],
        answer: 0,
        explanation: "Pernyataan benar, alasan benar dan berhubungan. Reaksi ionisasinya adalah: H<sub>2</sub>SO<sub>4(aq)</sub> &rarr; 2H<sup>+</sup><sub>(aq)</sub> + SO<sub>4</sub><sup>2-</sup><sub>(aq)</sub>."
    },

    // --- BAGIAN IV: BENAR / SALAH ---
    {
        story: "Bagian IV: Benar - Salah Analisis",
        question: "<b>Pernyataan:</b> Pada sel aki kendaraan yang sedang digunakan, reaksi yang mengubah energi kimia menjadi listrik merupakan aplikasi langsung dari reaksi reduksi-oksidasi.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "Baterai dan aki (sel Volta) bekerja berdasarkan aliran elektron spontan hasil dari reaksi redoks (Timbal (Pb) teroksidasi dan Timbal(IV) oksida (PbO<sub>2</sub>) tereduksi)."
    },
    {
        story: "Bagian IV: Benar - Salah Analisis",
        question: "<b>Kasus:</b> Andi diminta memberi nama senyawa dengan rumus N<sub>2</sub>O<sub>5</sub>. Andi menjawab namanya adalah Nitrogen pentaoksida.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Salah. Aturan senyawa kovalen harus menyebutkan jumlah awalan unsur pertama jika lebih dari satu. N-nya ada 2, jadi harusnya Dinitrogen pentaoksida."
    },
    {
        story: "Bagian IV: Benar - Salah Analisis",
        question: "<b>Kasus:</b> Rumus empiris adalah rumus kimia yang menunjukkan jumlah asli sesungguhnya dari atom-atom unsur pembentuk molekul suatu senyawa.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Salah. Rumus empiris adalah perbandingan paling sederhana dari atom-atom. Rumus yang menunjukkan jumlah asli atom sesungguhnya disebut Rumus Molekul. Contoh: Benzena rumus empirisnya CH, rumus molekulnya C<sub>6</sub>H<sub>6</sub>."
    },
    {
        story: "Bagian IV: Benar - Salah Analisis",
        question: "<b>Pernyataan:</b> Jika kita membuat larutan garam dapur dan larutan asam cuka dengan konsentrasi molaritas yang sama persis (misalnya 1 Molar), maka daya hantar listrik keduanya akan sama kuat.",
        options: ["BENAR", "SALAH"],
        answer: 1,
        explanation: "Salah. Konsentrasi sama tidak menjamin daya hantar sama. Garam dapur terionisasi sempurna (&alpha;=1) sehingga ionnya banyak sekali (elektrolit kuat). Asam cuka hanya terionisasi sebagian (&alpha; kecil) sehingga ionnya sangat sedikit (elektrolit lemah). Garam dapur menang telak."
    },
    {
        story: "Bagian IV: Benar - Salah Analisis",
        question: "<b>Pernyataan:</b> Menurut Hukum Perbandingan Tetap (Proust), jika air (H<sub>2</sub>O) diambil dari sungai Mahakam, laut Jawa, atau hasil pembakaran hidrogen murni, perbandingan massa atom H dan O di dalamnya akan selalu 1 : 8.",
        options: ["BENAR", "SALAH"],
        answer: 0,
        explanation: "Benar. Esensi Hukum Proust adalah sumber dan cara pembuatan senyawa tidak memengaruhi komposisi penyusun senyawa murni. Air (H<sub>2</sub>O) dari manapun selalu memiliki perbandingan massa H:O = 2 : 16 atau disederhanakan menjadi 1 : 8."
    }
];