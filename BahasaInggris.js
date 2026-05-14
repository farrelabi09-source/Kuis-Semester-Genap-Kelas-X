// --- 📚 DATA KUIS BAHASA INGGRIS ---
const subjects = [
    { id: 'english', name: 'Bahasa Inggris', icon: 'ph-book-open', color: 'text-blue-500 dark:text-blue-400' }
];

  // FUNGSI ACAK ARRAY
        function shuffleArray(array) {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        //40 SOAL BAHASA INGGRIS
const quizData = {
    'english': [
        // --- TEXT 1: SURA AND BAYA ---
        {
            story: "Once upon a time in East Java, there were two strong animals, Sura and Baya. Sura was a shark and Baya was a crocodile. They lived in the sea. Actually, they were friends. But when they were hungry, they were very greedy and did not want to share their food. They would fight for it and never stop until one of them gave up.\n\nOne day, they fought over a goat. After several hours, they were exhausted. Sura had a plan to stop their bad behavior. \"I'm tired of fighting, Baya,\" said Sura. \"Me too. What should we do?\" asked Baya. Sura suggested that they share their territory. Sura lived in the water and Baya lived on the land. However, one day Sura went to the land to look for food. Baya was very angry when he knew Sura broke the promise. They fought again fiercely until Sura finally gave up and went back to the sea.",
            question: "What is the main idea of the first paragraph?",
            options: [
                "The friendship of two strong animals.",
                "The greediness of Sura and Baya over food.",
                "The agreement made by the shark and crocodile.",
                "Sura's violation of the territorial promise.",
                "The origin of Sura and Baya's conflict."
            ],
            answer: 1,
            explanation: "Paragraf pertama berfokus menceritakan bahwa meski mereka berteman, rasa serakah saat lapar membuat mereka selalu berkelahi memperebutkan makanan."
        },
        {
            story: "Text 1 (Sura and Baya)",
            question: "From the text, we can infer that the conflict sparked again because...",
            options: [
                "Baya attacked Sura in the sea.",
                "Sura could not find any food in the water.",
                "Sura violated the mutual agreement.",
                "Baya wanted to expand his territory.",
                "They both wanted to eat another goat."
            ],
            answer: 2,
            explanation: "Informasi tersirat (inferensi) dari teks adalah konflik kedua terjadi karena Sura melanggar perjanjian pembagian wilayah dengan mencari makan di darat."
        },
        {
            story: "Text 1 (Sura and Baya)",
            question: "\"They fought again fiercely until Sura finally gave up...\" The underlined word is closest in meaning to...",
            options: ["Gently", "Violently", "Slowly", "Carefully", "Secretly"],
            answer: 1,
            explanation: "\"Fiercely\" berarti dengan buas/sengit. Sinonim yang paling tepat adalah \"violently\" (dengan keras/kasar)."
        },
        {
            story: "Text 1 (Sura and Baya)",
            question: "What moral value can we learn from the story?",
            options: [
                "We must fight for what we want.",
                "Greediness will lead to endless conflict.",
                "A promise is meant to be broken.",
                "The strong will always defeat the weak.",
                "We should never share our food with others."
            ],
            answer: 1,
            explanation: "Pesan moral dari cerita ini adalah keserakahan (greediness) dan keengganan untuk berbagi hanya akan menghasilkan konflik."
        },
        {
            story: "Text 1 (Sura and Baya)",
            question: "What does the word \"it\" in the phrase \"They would fight for it...\" refer to?",
            options: ["The sea", "Their friendship", "The food", "The territory", "The goat"],
            answer: 2,
            explanation: "Kalimat sebelumnya membahas tentang makanan yang tidak ingin mereka bagi, sehingga \"it\" merujuk pada \"food\"."
        },

        // --- TEXT 2: B.J. HABIBIE ---
        {
            story: "B.J. Habibie was the third President of Indonesia. He was born on June 25, 1936, in Parepare, South Sulawesi. Habibie moved to Bandung to study at the Bandung Institute of Technology (ITB). He later received a scholarship to study aerospace engineering in Germany. He was known as a brilliant engineer who made significant contributions to the aviation industry, earning him the nickname \"Mr. Crack\" for his theory on thermodynamics.\n\nAfter spending years in Germany, Habibie returned to Indonesia in 1974 at the request of President Soeharto to help develop the country's industrial and technological sectors. He served as the Minister of Research and Technology for 20 years before becoming the Vice President and eventually the President.",
            question: "What is the author's primary purpose in writing this text?",
            options: [
                "To persuade readers to study aerospace engineering.",
                "To retell the life story and achievements of B.J. Habibie.",
                "To describe the aviation industry in Indonesia.",
                "To entertain the readers with a story about a president.",
                "To compare Habibie with other Indonesian presidents."
            ],
            answer: 1,
            explanation: "Teks ini adalah Recount Text jenis biografi, tujuannya adalah menceritakan kembali (retell) kisah hidup dan pencapaian tokoh."
        },
        {
            story: "Text 2 (B.J. Habibie)",
            question: "Why was B.J. Habibie nicknamed \"Mr. Crack\"?",
            options: [
                "He was the third President of Indonesia.",
                "He cracked many political problems in Indonesia.",
                "He discovered a prominent theory in thermodynamics related to aviation.",
                "He broke the record as the longest-serving minister.",
                "He studied in Germany for a long time."
            ],
            answer: 2,
            explanation: "Teks secara eksplisit menyebutkan ia dijuluki \"Mr. Crack\" karena teorinya terkait termodinamika di industri penerbangan."
        },
        {
            story: "Text 2 (B.J. Habibie)",
            question: "It is implied in the second paragraph that...",
            options: [
                "Habibie did not want to return to Indonesia.",
                "The Indonesian government highly valued Habibie's expertise.",
                "Habibie became president immediately after returning from Germany.",
                "President Soeharto forced Habibie to leave Germany.",
                "Habibie failed in his career in Germany."
            ],
            answer: 1,
            explanation: "Fakta bahwa Presiden memintanya pulang secara khusus untuk membangun sektor teknologi menyiratkan bahwa keahliannya sangat dihargai oleh pemerintah."
        },
        {
            story: "Text 2 (B.J. Habibie)",
            question: "\"...who made significant contributions to the aviation industry...\" The word significant can be replaced by...",
            options: ["Meaningless", "Minor", "Substantial", "Temporary", "Hidden"],
            answer: 2,
            explanation: "\"Significant\" berarti penting atau besar. Sinonimnya adalah \"substantial\"."
        },
        {
            story: "Text 2 (B.J. Habibie)",
            question: "Which of the following statements is NOT TRUE according to the text?",
            options: [
                "Habibie was born in South Sulawesi.",
                "He studied aerospace engineering in Germany.",
                "He became the President of Indonesia before becoming Vice President.",
                "He served as Minister of Research and Technology for two decades.",
                "He briefly studied at ITB in Bandung."
            ],
            answer: 2,
            explanation: "Teks menyebutkan ia menjadi Wakil Presiden sebelum akhirnya menjadi Presiden, bukan sebaliknya."
        },

        // --- TEXT 3: BANDUNG SEA OF FIRE ---
        {
            story: "The Bandung Sea of Fire was a major historical event in Indonesia. On March 24, 1946, the city of Bandung was deliberately burned down by Indonesian republicans and local militia. This drastic measure was taken to prevent the Allied forces and the Dutch NICA from using Bandung as a strategic military base during the Indonesian National Revolution.\n\nThe British commander, MacDonald, had issued an ultimatum demanding the Indonesian forces to surrender their weapons and leave the city. Instead of surrendering, the fighters evacuated the civilians and set their own homes and buildings ablaze. Within hours, the southern part of Bandung became a sea of fire.",
            question: "The text mainly discusses...",
            options: [
                "The British military strategy in Indonesia.",
                "The evacuation of civilians in Bandung.",
                "The historical event of the Bandung Sea of Fire.",
                "The defeat of the Dutch NICA.",
                "The negotiation between Indonesia and the Allied forces."
            ],
            answer: 2,
            explanation: "Teks secara keseluruhan membahas peristiwa pembakaran kota Bandung."
        },
        {
            story: "Text 3 (Bandung Sea of Fire)",
            question: "Why did the Indonesian fighters burn the city?",
            options: [
                "They were ordered by the British commander.",
                "They wanted to rebuild the city from scratch.",
                "They were angry at the civilians.",
                "To prevent the enemy from using the city as a military base.",
                "Because they lost the battle against NICA."
            ],
            answer: 3,
            explanation: "Teks menyebutkan 'to prevent the Allied forces and the Dutch NICA from using Bandung as a strategic military base'."
        },
        {
            story: "Text 3 (Bandung Sea of Fire)",
            question: "\"This drastic measure was taken...\" The word drastic implies an action that is...",
            options: ["Slow and careful", "Extreme and severe", "Normal and expected", "Weak and ineffective", "Peaceful and calm"],
            answer: 1,
            explanation: "Tindakan membakar kota sendiri adalah tindakan yang ekstrem/keras ('drastic')."
        },
        {
            story: "Text 3 (Bandung Sea of Fire)",
            question: "What was the trigger for the event according to paragraph 2?",
            options: [
                "The Indonesian forces attacked the British.",
                "The civilians refused to leave their homes.",
                "MacDonald's ultimatum to surrender weapons and leave.",
                "The arrival of the Dutch NICA.",
                "A natural disaster that caused a fire."
            ],
            answer: 2,
            explanation: "Paragraf 2 menyatakan komandan Inggris mengeluarkan ultimatum, pejuang merespons dengan membakar kota."
        },
        {
            story: "Text 3 (Bandung Sea of Fire)",
            question: "What is the tone of the author in describing the Indonesian fighters?",
            options: ["Critical", "Mocking", "Objective and informative", "Disappointed", "Sarcastic"],
            answer: 2,
            explanation: "Penulis menyampaikan fakta sejarah secara netral dan informatif."
        },

        // --- TEXT 4: THE ANT AND THE DOVE ---
        {
            story: "One hot day, an ant was seeking some water. After walking around for a moment, she came to a spring. To reach the spring, she had to climb up a blade of grass. While making her way up, she slipped and fell into the water. She could have drowned if a dove up a nearby tree had not seen her. Seeing that the ant was in trouble, the dove quickly plucked a leaf and dropped it into the water near the struggling ant. The ant moved towards the leaf and climbed up there. Soon it carried her safely to dry ground.\n\nNot long after that, there was a hunter nearby who was throwing out his net towards the dove, hoping to trap it. Guessing what he was about to do, the ant quickly bit him on the heel. Feeling the pain, the hunter dropped his net. The dove was quick to fly away to safety.",
            question: "What kind of text is the passage above?",
            options: ["Descriptive", "Procedure", "Recount", "Narrative", "Exposition"],
            answer: 3,
            explanation: "Teks berupa fabel yang bertujuan menghibur dan memiliki resolusi, ciri khas Narrative Text."
        },
        {
            story: "Text 4 (The Ant and the Dove)",
            question: "What problem did the ant face at the beginning of the story?",
            options: [
                "She was hunted by a man.",
                "She could not find the dove.",
                "She slipped and fell into the water.",
                "She lost her food.",
                "She was trapped in a net."
            ],
            answer: 2,
            explanation: "Paragraf pertama menyebutkan 'she slipped and fell into the water'."
        },
        {
            story: "Text 4 (The Ant and the Dove)",
            question: "How did the ant save the dove's life?",
            options: [
                "By shouting to the dove.",
                "By dropping a leaf.",
                "By pushing the hunter into the water.",
                "By biting the hunter's heel.",
                "By flying towards the net."
            ],
            answer: 3,
            explanation: "Ant membalas budi dengan menggigit tumit pemburu."
        },
        {
            story: "Text 4 (The Ant and the Dove)",
            question: "\"...dropping it into the water near the struggling ant.\" The word struggling means...",
            options: ["Relaxing", "Trying hard to survive", "Swimming smoothly", "Playing around", "Sleeping deeply"],
            answer: 1,
            explanation: "Struggling berarti berjuang keras menghadapi kesulitan agar selamat."
        },
        {
            story: "Text 4 (The Ant and the Dove)",
            question: "The most appropriate proverb to represent the story is...",
            options: [
                "A friend in need is a friend indeed.",
                "Don't judge a book by its cover.",
                "One good turn deserves another.",
                "Actions speak louder than words.",
                "Better late than never."
            ],
            answer: 2,
            explanation: "Kebaikan dibalas dengan kebaikan ('One good turn deserves another')."
        },

        // --- TEXT 5: YOGYAKARTA TRIP ---
        {
            story: "Last month, my family and I went to Yogyakarta. We departed from Jakarta by train at 8 AM and arrived at Tugu Station at 4 PM. We immediately checked into our hotel near Malioboro.\n\nThe next day, we visited Borobudur Temple early in the morning to catch the sunrise. It was magnificent. After that, we went to a traditional market to buy some souvenirs and local snacks like Bakpia. On the third day, we went to Parangtritis Beach. The waves were quite huge, so we were not allowed to swim. We just walked along the shoreline and enjoyed the sunset before heading back to Jakarta the following morning.",
            question: "Based on the text, what did the writer do on the second day?",
            options: [
                "Arrived at Tugu Station.",
                "Walked along Parangtritis Beach.",
                "Checked into the hotel.",
                "Visited Borobudur and bought souvenirs.",
                "Departed for Jakarta."
            ],
            answer: 3,
            explanation: "Hari kedua mereka ke Borobudur dan membeli suvenir."
        },
        {
            story: "Text 5 (Yogyakarta Trip)",
            question: "Why didn't the writer swim at Parangtritis Beach?",
            options: [
                "Because they arrived too late.",
                "Because they didn't bring swimsuits.",
                "Because the waves were too big and dangerous.",
                "Because the beach was closed.",
                "Because they were busy enjoying the sunset."
            ],
            answer: 2,
            explanation: "Disebutkan 'The waves were quite huge, so we were not allowed to swim'."
        },
        {
            story: "Text 5 (Yogyakarta Trip)",
            question: "\"It was magnificent.\" (Paragraph 2). The word magnificent has the closest meaning to...",
            options: ["Terrible", "Splendid", "Ordinary", "Boring", "Disappointing"],
            answer: 1,
            explanation: "Magnificent berarti luar biasa indah. Sinonimnya adalah 'splendid'."
        },
        {
            story: "Text 5 (Yogyakarta Trip)",
            question: "The text is organized using which time sequence?",
            options: ["Spatial order", "Flashback", "Chronological order", "Cause and effect", "Problem and solution"],
            answer: 2,
            explanation: "Disusun berdasarkan urutan waktu kejadian (Chronological), ciri Recount Text."
        },
        {
            story: "Text 5 (Yogyakarta Trip)",
            question: "From the text, we can conclude that the writer's trip was...",
            options: [
                "Exhausting and terrible.",
                "Enjoyable and memorable.",
                "Too short to enjoy anything.",
                "Very dangerous.",
                "Full of bad luck."
            ],
            answer: 1,
            explanation: "Penulis mendeskripsikan aktivitas yang menyenangkan dan pemandangan indah."
        },

        // --- GRAMMAR & LANGUAGE FEATURES ---
        {
            story: "Grammar Section",
            question: "Rina: \"Did you go to the cinema last night?\"\nBudi: \"No, I didn't. I ______ my homework.\"",
            options: ["do", "am doing", "was doing", "have done", "will do"],
            answer: 2,
            explanation: "Past Continuous ('was doing') menyatakan kejadian yang sedang berlangsung di waktu lampau."
        },
        {
            story: "Grammar Section",
            question: "The beautiful painting ______ by Raden Saleh in the 19th century.",
            options: ["paints", "is painted", "has painted", "was painted", "painting"],
            answer: 3,
            explanation: "Passive voice lampau: was + Verb 3."
        },
        {
            story: "Grammar Section",
            question: "My father ______ a new car last week.",
            options: ["buy", "buys", "bought", "has bought", "was buying"],
            answer: 2,
            explanation: "Keterangan waktu 'last week' menggunakan Simple Past (V2)."
        },
        {
            story: "Grammar Section",
            question: "When I arrived at the party, Sarah ______ home.",
            options: ["has already gone", "had already gone", "already went", "is going", "goes"],
            answer: 1,
            explanation: "Past Perfect (had+V3) menunjukkan kejadian yang selesai sebelum kejadian lampau lainnya."
        },
        {
            story: "Grammar Section",
            question: "Many houses ______ by the earthquake yesterday.",
            options: ["destroy", "destroyed", "were destroyed", "are destroyed", "destroying"],
            answer: 2,
            explanation: "Passive lampau jamak: were + V3."
        },
        {
            story: "Grammar Section",
            question: "\"The man who is standing near the door is my uncle.\"\nThe underlined word serves as a...",
            options: ["Relative Pronoun", "Personal Pronoun", "Possessive Adjective", "Conjunction", "Preposition"],
            answer: 0,
            explanation: "'Who' menjelaskan subjek manusia sebagai Relative Pronoun."
        },
        {
            story: "Grammar Section",
            question: "I used to _____ a lot of comics when I was a kid, but now I prefer reading novels.",
            options: ["reading", "read", "reads", "readed", "have read"],
            answer: 1,
            explanation: "Used to + Verb 1 (infinitive) untuk kebiasaan masa lalu."
        },
        {
            story: "Grammar Section",
            question: "Rearrange: 1. Eventually sunset. 2. Start midnight. 3. Decide camping. 4. Track steep.",
            options: ["3-2-4-1", "3-4-2-1", "2-4-3-1", "2-3-4-1", "4-2-3-1"],
            answer: 0,
            explanation: "Urutan logis: Putuskan berkemah -> mulai mendaki -> kondisi jalur -> sampai puncak."
        },
        {
            story: "Grammar Section",
            question: "The Borobudur Temple was built in the 9th century. Therefore, it is considered a historical site.\nThe word 'Therefore' indicates...",
            options: ["Contrast", "Addition", "Reason", "Conclusion/Effect", "Time sequence"],
            answer: 3,
            explanation: "'Therefore' menunjukkan akibat atau kesimpulan."
        },
        {
            story: "Grammar Section",
            question: "If he _____ carefully, he would not have crashed the car.",
            options: ["drives", "drove", "has driven", "had driven", "is driving"],
            answer: 3,
            explanation: "Conditional Type 3 (Past Unreal): If + had + V3."
        },

        // --- UTBK STYLE ---
        {
            story: "In the digital age, cyberbullying has become a pervasive issue affecting teenagers. Unlike traditional bullying, cyberbullying can happen 24/7 and reach a wider audience instantly through social media. Victims often suffer from severe anxiety, depression, and a drop in academic performance. Parents and educators must be vigilant. Open communication is crucial. Teenagers should be taught how to protect their privacy online and encouraged to report any harassing behavior.",
            question: "What is the author's main concern in the text?",
            options: [
                "The rise of social media usage among teenagers.",
                "How to improve teenagers' academic performance.",
                "The definition of traditional bullying.",
                "The impact of cyberbullying and how to address it.",
                "The importance of internet connection 24/7."
            ],
            answer: 3,
            explanation: "Fokus teks adalah masalah cyberbullying, dampaknya, dan solusinya."
        },
        {
            story: "UTBK Style Text (Cyberbullying)",
            question: "How does cyberbullying differ from traditional bullying?",
            options: [
                "It only happens at school.",
                "It involves physical harm.",
                "It is less harmful to students.",
                "It can occur continuously and spread quickly online.",
                "It is easier to identify the bully."
            ],
            answer: 3,
            explanation: "Disebutkan cyberbullying bisa terjadi 24/7 dan menjangkau audiens luas secara instan."
        },
        {
            story: "UTBK Style Text (Cyberbullying)",
            question: "The word \"vigilant\" in the text is synonymous with...",
            options: ["Careless", "Watchful", "Ignorant", "Confused", "Aggressive"],
            answer: 1,
            explanation: "Vigilant berarti waspada (watchful)."
        },
        {
            story: "UTBK Style Text (Cyberbullying)",
            question: "What can be inferred about the victims of cyberbullying?",
            options: [
                "They usually perform better at school to hide their pain.",
                "They often become bullies themselves.",
                "Their psychological well-being is heavily compromised.",
                "They easily report the bullies to the police.",
                "They do not care about their online privacy."
            ],
            answer: 2,
            explanation: "Dampak berupa kecemasan dan depresi menyiratkan kondisi psikologis yang terganggu."
        },
        {
            story: "UTBK Style Text (Cyberbullying)",
            question: "The author's recommendation to solve the problem is...",
            options: [
                "Banning teenagers from using the internet.",
                "Punishing the bullies strictly in school.",
                "Establishing open communication and teaching online privacy.",
                "Making social media platforms illegal.",
                "Ignoring the comments on social media."
            ],
            answer: 2,
            explanation: "Teks menyarankan komunikasi terbuka dan edukasi privasi online."
        }
    ]
};