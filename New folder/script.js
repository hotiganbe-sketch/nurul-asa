
// Data profesi dan ayat-ayat pendukung
const professions = [
    {
        id: 1,
        title: "Dokter & Tenaga Medis",
        category: "kesehatan",
        icon: "fa-user-md",
        verses: [
            {
                text: "Dan apabila aku sakit, Dialah Yang menyembuhkan aku.",
                reference: "QS. Asy-Syu'ara' (26): 80"
            },
            {
                text: "Barangsiapa yang menyelamatkan satu jiwa, maka seakan-akan dia telah menyelamatkan manusia seluruhnya.",
                reference: "QS. Al-Maidah (5): 32"
            },
            {
                text: "Dan janganlah kamu membunuh jiwa yang diharamkan Allah (membunuhnya) kecuali dengan alasan yang benar.",
                reference: "QS. Al-Isra (17): 33"
            }
        ],
        explanation: "Profesi dokter dan tenaga medis sangat mulia dalam Islam karena berhubungan dengan penyelamatan nyawa dan pengobatan penyakit, yang merupakan bentuk pengamalan perintah Allah untuk menjaga kehidupan.",
        quote: "Kesehatan adalah mahkota yang tidak terlihat, yang hanya dapat dilihat oleh mereka yang sakit.",
        quotePerson: "Ibnu Sina (Bapak Kedokteran Modern)",
        quote2: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.",
        quotePerson2: "HR. Ahmad"
    },
    {
        id: 2,
        title: "Guru & Pendidik",
        category: "pendidikan",
        icon: "fa-chalkboard-teacher",
        verses: [
            {
                text: "Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat.",
                reference: "QS. Al-Mujadilah (58): 11"
            },
            {
                text: "Bacalah dengan (menyebut) nama Tuhanmu Yang menciptakan. Dia telah menciptakan manusia dari segumpal darah.",
                reference: "QS. Al-Alaq (96): 1-2"
            },
            {
                text: "Yang mengajar (manusia) dengan perantaran kalam.",
                reference: "QS. Al-Alaq (96): 4"
            }
        ],
        explanation: "Guru memiliki kedudukan yang sangat tinggi dalam Islam karena peran mereka dalam mencerdaskan umat dan menyebarkan ilmu pengetahuan, yang merupakan perintah pertama Allah dalam Al-Quran.",
        quote: "Didiklah anak-anakmu sesuai dengan zamannya, karena mereka hidup di zaman mereka, bukan pada zamanmu.",
        quotePerson: "Ali bin Abi Thalib",
        quote2: "Tuntutlah ilmu dari buaian hingga liang lahat.",
        quotePerson2: "HR. Al-Baihaqi"
    },
    {
        id: 3,
        title: "Pengusaha & Wirausaha",
        category: "bisnis",
        icon: "fa-store",
        verses: [
            {
                text: "Hai orang-orang yang beriman, janganlah kamu saling memakan harta sesamamu dengan jalan yang batil.",
                reference: "QS. An-Nisa (4): 29"
            },
            {
                text: "Allah telah menghalalkan jual beli dan mengharamkan riba.",
                reference: "QS. Al-Baqarah (2): 275"
            },
            {
                text: "Sesungguhnya usahamu beraneka macam.",
                reference: "QS. Al-Lail (92): 4"
            }
        ],
        explanation: "Bisnis dan perdagangan yang jujur dan adil sangat dianjurkan dalam Islam. Nabi Muhammad SAW sendiri adalah seorang pedagang sebelum menjadi Nabi, menunjukkan mulianya profesi ini.",
        quote: "Pedagang yang jujur dan terpercaya akan bersama para nabi, orang-orang shiddiq, dan syuhada.",
        quotePerson: "HR. Tirmidzi",
        quote2: "Sesungguhnya Allah mencintai seorang hamba yang jika bekerja, dia menyempurnakan pekerjaannya.",
        quotePerson2: "HR. Al-Baihaqi"
    },
    {
        id: 4,
        title: "Ilmuwan & Peneliti",
        category: "teknologi",
        icon: "fa-microscope",
        verses: [
            {
                text: "Katakanlah: 'Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?'",
                reference: "QS. Az-Zumar (39): 9"
            },
            {
                text: "Maka apakah mereka tidak memperhatikan unta, bagaimana dia diciptakan?",
                reference: "QS. Al-Ghasyiyah (88): 17"
            },
            {
                text: "Dan bumi, bagaimana ia dihamparkan?",
                reference: "QS. Al-Ghasyiyah (88): 20"
            }
        ],
        explanation: "Islam mendorong umatnya untuk meneliti dan mempelajari alam semesta sebagai tanda kebesaran Allah. Ilmuwan dan peneliti melakukan tugas mulia dengan menggali pengetahuan untuk kemaslahatan umat manusia.",
        quote: "Ilmu adalah kehidupan bagi pikiran dan cahaya bagi akal yang membimbing kepada kebenaran.",
        quotePerson: "Al-Kindi (Filsuf Muslim)",
        quote2: "Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan ke surga.",
        quotePerson2: "HR. Muslim"
    },
    {
        id: 5,
        title: "Petani & Pekebun",
        category: "pertanian",
        icon: "fa-seedling",
        verses: [
            {
                text: "Dialah Yang telah menurunkan air hujan dari langit untuk kamu, sebagiannya menjadi minuman dan sebagiannya (menyuburkan) tumbuhan.",
                reference: "QS. An-Nahl (16): 10"
            },
            {
                text: "Dan Dialah yang menurunkan air hujan dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan.",
                reference: "QS. Al-An'am (6): 99"
            },
            {
                text: "Dan janganlah kamu berbuat kerusakan di bumi setelah (diciptakan) dengan baik.",
                reference: "QS. Al-A'raf (7): 56"
            }
        ],
        explanation: "Bercocok tanam dan mengelola bumi merupakan profesi yang sangat dianjurkan dalam Islam. Rasulullah SAW bersabda bahwa tidaklah seorang muslim menanam tanaman lalu dimakan oleh manusia, binatang atau burung, melainkan itu menjadi sedekah baginya.",
        quote: "Bumi menyediakan cukup untuk memenuhi kebutuhan setiap orang, tetapi tidak untuk memenuhi keserakahan setiap orang.",
        quotePerson: "Mahatma Gandhi",
        quote2: "Tidaklah seorang muslim menanam tanaman lalu dimakan oleh manusia, binatang atau burung, melainkan itu menjadi sedekah baginya.",
        quotePerson2: "HR. Bukhari"
    },
    {
        id: 6,
        title: "Psikolog & Konselor",
        category: "kesehatan",
        icon: "fa-brain",
        verses: [
            {
                text: "Sesungguhnya Allah tidak merubah keadaan sesuatu kaum sehingga mereka merubah keadaan yang ada pada diri mereka sendiri.",
                reference: "QS. Ar-Ra'd (13): 11"
            },
            {
                text: "Hai orang-orang yang beriman, jauhilah kebanyakan prasangka (kecurigaan), karena sebagian dari prasangka itu dosa.",
                reference: "QS. Al-Hujurat (49): 12"
            },
            {
                text: "Dan Dia telah menciptakan manusia dalam bentuk yang sebaik-baiknya.",
                reference: "QS. At-Tin (95): 4"
            }
        ],
        explanation: "Profesi yang berhubungan dengan kesehatan mental dan bimbingan konseling sangat penting dalam Islam. Membersihkan hati dan jiwa merupakan bagian dari proses penyempurnaan iman.",
        quote: "Jiwa yang sehat berada dalam tubuh yang sehat.",
        quotePerson: "Imam Al-Ghazali",
        quote2: "Barangsiapa yang tidak menyayangi, maka ia tidak akan disayangi.",
        quotePerson2: "HR. Bukhari"
    },
    {
        id: 7,
        title: "Peternak",
        category: "pertanian",
        icon: "fa-cow",
        verses: [
            {
                text: "Dan sesungguhnya pada binatang ternak itu benar-benar terdapat pelajaran bagi kamu.",
                reference: "QS. An-Nahl (16): 66"
            },
            {
                text: "Dan Dia menjadikan binatang ternak untuk kamu; padanya ada (bulu) yang menghangatkan dan berbagai-bagai manfaat.",
                reference: "QS. An-Nahl (16): 5"
            },
            {
                text: "Dan dari binatang ternak itu kamu memperoleh makanan.",
                reference: "QS. Al-Mu'minun (23): 21"
            }
        ],
        explanation: "Peternakan adalah profesi yang mulia dalam Islam karena memanfaatkan hewan yang diciptakan Allah untuk kemaslahatan manusia, baik sebagai sumber makanan, pakaian, maupun transportasi.",
        quote: "Sebaik-baik pekerjaan adalah pekerjaan seseorang dengan tangannya, selama itu halal.",
        quotePerson: "HR. Ahmad",
        quote2: "Barangsiapa memberi makan binatang, maka itu adalah sedekah.",
        quotePerson2: "HR. Bukhari"
    },
    {
        id: 8,
        title: "Teknik Sipil & Arsitek",
        category: "teknologi",
        icon: "fa-ruler-combined",
        verses: [
            {
                text: "Dan ingatlah ketika Ibrahim meninggikan (membina) dasar-dasar Baitullah bersama Ismail.",
                reference: "QS. Al-Baqarah (2): 127"
            },
            {
                text: "Sesungguhnya Allah menyukai orang yang berperang dijalan-Nya dalam barisan yang teratur seakan-akan mereka seperti suatu bangunan yang tersusun kokoh.",
                reference: "QS. As-Saff (61): 4"
            },
            {
                text: "Dan janganlah kamu berbuat kerusakan di bumi setelah (diciptakan) dengan baik.",
                reference: "QS. Al-A'raf (7): 56"
            }
        ],
        explanation: "Perancangan kota dan arsitektur yang baik mencerminkan keteraturan dan keindahan ciptaan Allah. Islam mendorong pembangunan yang bermanfaat bagi masyarakat dan tidak merusak lingkungan.",
        quote: "Allah itu Indah dan menyukai keindahan.",
        quotePerson: "HR. Muslim",
        quote2: "Sesungguhnya Allah menyukai orang yang jika bekerja, dia menyempurnakan pekerjaannya.",
        quotePerson2: "HR. Al-Baihaqi"
    },
    {
        id: 9,
        title: "Editor & Penulis",
        category: "media",
        icon: "fa-pen-fancy",
        verses: [
            {
                text: "Bacalah dengan (menyebut) nama Tuhanmu Yang menciptakan.",
                reference: "QS. Al-Alaq (96): 1"
            },
            {
                text: "Nun, demi kalam dan apa yang mereka tulis.",
                reference: "QS. Al-Qalam (68): 1"
            },
            {
                text: "Dan hendaklah seorang penulis di antara kamu menuliskannya dengan benar.",
                reference: "QS. Al-Baqarah (2): 282"
            }
        ],
        explanation: "Menulis dan menyunting adalah profesi mulia dalam Islam karena merupakan sarana untuk menyebarkan ilmu dan kebaikan. Tulisan yang bermanfaat akan terus mengalirkan pahala meskipun penulisnya telah meninggal.",
        quote: "Ikatlah ilmu dengan menuliskannya.",
        quotePerson: "Ali bin Abi Thalib",
        quote2: "Tulisan adalah saksi yang tidak pernah lupa.",
        quotePerson2: "Ali bin Abi Thalib"
    },
    {
        id: 10,
        title: "Influencer & Content Creator",
        category: "media",
        icon: "fa-video",
        verses: [
            {
                text: "Dan janganlah kamu mengikuti apa yang tidak kamu tidak mempunyai pengetahuan tentangnya.",
                reference: "QS. Al-Isra (17): 36"
            },
            {
                text: "Sesungguhnya Kami telah menawarkan amanah kepada langit, bumi, dan gunung-gunung.",
                reference: "QS. Al-Ahzab (33): 72"
            },
            {
                text: "Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah.",
                reference: "QS. Fussilat (41): 33"
            }
        ],
        explanation: "Dalam Islam, menyebarkan konten positif dan bermanfaat adalah bagian dari dakwah. Seorang content creator muslim bertanggung jawab untuk menyebarkan nilai-nilai kebaikan dan kebenaran.",
        quote: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.",
        quotePerson: "HR. Ahmad",
        quote2: "Sampaikan dariku walau hanya satu ayat.",
        quotePerson2: "HR. Bukhari"
    },
    {
        id: 11,
        title: "Perintis & Inovator",
        category: "bisnis",
        icon: "fa-lightbulb",
        verses: [
            {
                text: "Apabila telah ditunaikan shalat, maka bertebaranlah kamu di muka bumi; dan carilah karunia Allah.",
                reference: "QS. Al-Jumu'ah (62): 10"
            },
            {
                text: "Sesungguhnya usahamu beraneka macam.",
                reference: "QS. Al-Lail (92): 4"
            },
            {
                text: "Dan Allah telah menjadikan bumi untukmu sebagai hamparan.",
                reference: "QS. Al-Baqarah (2): 22"
            }
        ],
        explanation: "Entrepreneur atau pengusaha dalam Islam didorong untuk menciptakan lapangan kerja dan memberikan manfaat seluas-luasnya bagi masyarakat. Keuntungan yang halal dan cara berbisnis yang jujur merupakan ibadah.",
        quote: "Sesungguhnya Allah mencintai seorang hamba yang jika bekerja, dia menyempurnakan pekerjaannya.",
        quotePerson: "HR. Al-Baihaqi",
        quote2: "Pedagang yang jujur dan terpercaya akan bersama para nabi, orang-orang shiddiq, dan syuhada.",
        quotePerson2: "HR. Tirmidzi"
    },
    {
        id: 12,
        title: "Pemimpin & Gubernur",
        category: "pemerintahan",
        icon: "fa-crown",
        verses: [
            {
                text: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya.",
                reference: "QS. An-Nisa (4): 58"
            },
            {
                text: "Hai Daud, sesungguhnya Kami menjadikan kamu khalifah (penguasa) di muka bumi.",
                reference: "QS. Sad (38): 26"
            },
            {
                text: "Dan hendaklah kamu menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil.",
                reference: "QS. Al-Ma'idah (5): 42"
            }
        ],
        explanation: "Kepemimpinan dalam Islam adalah amanah yang harus dijalankan dengan keadilan dan tanggung jawab. Pemimpin yang adil akan mendapat tempat yang mulia di sisi Allah.",
        quote: "Pemimpin suatu kaum adalah pelayan mereka.",
        quotePerson: "Ali bin Abi Thalib",
        quote2: "Keadilan adalah pondasi utama dalam pemerintahan dan kehidupan bermasyarakat.",
        quotePerson2: "Umar bin Khattab"
    },
    {
        id: 13,
        title: "Ustadz & Dai",
        category: "pendidikan",
        icon: "fa-mosque",
        verses: [
            {
                text: "Serulah (manusia) kepada jalan Tuhan-mu dengan hikmah dan pelajaran yang baik.",
                reference: "QS. An-Nahl (16): 125"
            },
            {
                text: "Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah.",
                reference: "QS. Fussilat (41): 33"
            },
            {
                text: "Dan sampaikanlah berita gembira kepada orang-orang yang beriman.",
                reference: "QS. Al-Baqarah (2): 223"
            }
        ],
        explanation: "Menyampaikan ajaran Islam dan membimbing umat adalah tugas mulia yang memiliki pahala besar. Seorang dai harus memiliki ilmu yang cukup dan akhlak yang baik.",
        quote: "Sampaikan dariku walau hanya satu ayat.",
        quotePerson: "HR. Bukhari",
        quote2: "Didiklah anak-anakmu sesuai dengan zamannya.",
        quotePerson2: "Ali bin Abi Thalib"
    },
    {
        id: 14,
        title: "Polisi & Tentara",
        category: "sosial",
        icon: "fa-shield-alt",
        verses: [
            {
                text: "Sesungguhnya Allah menyukai orang yang berperang dijalan-Nya dalam barisan yang teratur.",
                reference: "QS. As-Saff (61): 4"
            },
            {
                text: "Siapkanlah untuk menghadapi mereka kekuatan apa saja yang kamu sanggupi.",
                reference: "QS. Al-Anfal (8): 60"
            },
            {
                text: "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa.",
                reference: "QS. Al-Maidah (5): 2"
            }
        ],
        explanation: "Menjaga keamanan dan ketertiban masyarakat adalah tugas mulia dalam Islam. Polisi dan tentara bertugas melindungi negara dan rakyat dari ancaman, yang merupakan bagian dari amar ma'ruf nahi munkar.",
        quote: "Keberanian bukan hanya fisik, tetapi juga moral. Keberanian untuk membela kebenaran adalah puncak keberanian.",
        quotePerson: "Saladin",
        quote2: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.",
        quotePerson2: "HR. Ahmad"
    },
    {
        id: 15,
        title: "Pekerja Sosial",
        category: "sosial",
        icon: "fa-hands-helping",
        verses: [
            {
                text: "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa.",
                reference: "QS. Al-Maidah (5): 2"
            },
            {
                text: "Dan mereka memberikan makanan yang disukainya kepada orang miskin, anak yatim dan orang yang ditawan.",
                reference: "QS. Al-Insan (76): 8"
            },
            {
                text: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.",
                reference: "HR. Ahmad"
            }
        ],
        explanation: "Bekerja di bidang sosial adalah bentuk ibadah yang sangat mulia dalam Islam. Membantu sesama manusia, terutama yang lemah dan membutuhkan, merupakan perwujudan dari keimanan.",
        quote: "Tangan di atas (memberi) lebih baik daripada tangan di bawah (menerima).",
        quotePerson: "HR. Bukhari",
        quote2: "Barangsiapa yang menolong saudaranya, maka Allah akan menolongnya.",
        quotePerson2: "HR. Muslim"
    },
    {
        id: 16,
        title: "Hakim & Pengacara",
        category: "hukum",
        icon: "fa-balance-scale",
        verses: [
            {
                text: "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya.",
                reference: "QS. An-Nisa (4): 58"
            },
            {
                text: "Dan jika kamu memutuskan perkara di antara manusia, hendaklah kamu memutuskan dengan adil.",
                reference: "QS. Al-Ma'idah (5): 42"
            },
            {
                text: "Dan janganlah kamu mengikuti hawa nafsu.",
                reference: "QS. Sad (38): 26"
            }
        ],
        explanation: "Profesi hakim dan pengacara sangat penting dalam Islam untuk menegakkan keadilan dan melindungi hak-hak masyarakat. Setiap keputusan harus berdasarkan kejujuran dan tidak mengikuti hawa nafsu.",
        quote: "Keadilan adalah pondasi utama dalam pemerintahan dan kehidupan bermasyarakat.",
        quotePerson: "Umar bin Khattab",
        quote2: "Pemimpin suatu kaum adalah pelayan mereka.",
        quotePerson2: "Ali bin Abi Thalib"
    },
    {
        id: 17,
        title: "Notaris & Legal Konsultan",
        category: "hukum",
        icon: "fa-file-signature",
        verses: [
            {
                text: "Hai orang-orang yang beriman, apabila kamu bermuamalah tidak secara tunai untuk waktu yang ditentukan, hendaklah kamu menuliskannya.",
                reference: "QS. Al-Baqarah (2): 282"
            },
            {
                text: "Dan hendaklah seorang penulis di antara kamu menuliskannya dengan benar.",
                reference: "QS. Al-Baqarah (2): 282"
            },
            {
                text: "Dan janganlah kamu menutupi kebenaran dengan kebatilan.",
                reference: "QS. Al-Baqarah (2): 42"
            }
        ],
        explanation: "Notaris dan konsultan hukum berperan dalam menjaga keabsahan dokumen dan transaksi sesuai syariat. Penulisan dan pencatatan yang benar adalah perintah Allah untuk menghindari perselisihan.",
        quote: "Tulisan adalah saksi yang tidak pernah lupa.",
        quotePerson: "Ali bin Abi Thalib",
        quote2: "Ikatlah ilmu dengan menuliskannya.",
        quotePerson2: "Ali bin Abi Thalib"
    },
    {
        id: 18,
        title: "Mediator & Arbiter",
        category: "hukum",
        icon: "fa-handshake",
        verses: [
            {
                text: "Dan jika kamu khawatir terjadi perselisihan antara keduanya, maka kirimlah seorang hakam dari keluarga laki-laki dan seorang hakam dari keluarga perempuan.",
                reference: "QS. An-Nisa (4): 35"
            },
            {
                text: "Dan jika dua golongan dari orang-orang mukmin berperang maka damaikanlah antara keduanya.",
                reference: "QS. Al-Hujurat (49): 9"
            },
            {
                text: "Perdamaian lebih baik daripada permusuhan.",
                reference: "QS. An-Nisa (4): 128"
            }
        ],
        explanation: "Mediator dan arbiter membantu menyelesaikan konflik secara damai dan adil. Islam sangat menganjurkan perdamaian dan penyelesaian sengketa tanpa permusuhan.",
        quote: "Perdamaian lebih baik daripada permusuhan.",
        quotePerson: "QS. An-Nisa (4): 128",
        quote2: "Barangsiapa yang mendamaikan dua orang yang berselisih, maka Allah akan memberinya pahala yang besar.",
        quotePerson2: "HR. Abu Dawud"
    },
    {
        id: 19,
        title: "Jurnalis & Wartawan",
        category: "media",
        icon: "fa-newspaper",
        verses: [
            {
                text: "Hai orang-orang yang beriman, jika datang kepadamu orang fasik membawa suatu berita, maka periksalah dengan teliti.",
                reference: "QS. Al-Hujurat (49): 6"
            },
            {
                text: "Dan janganlah kamu mengikuti apa yang tidak kamu tidak mempunyai pengetahuan tentangnya.",
                reference: "QS. Al-Isra (17): 36"
            },
            {
                text: "Wahai orang-orang yang beriman! Jadilah kamu sebagai penegak keadilan, menjadi saksi karena Allah.",
                reference: "QS. An-Nisa (4): 135"
            }
        ],
        explanation: "Jurnalis dan wartawan memiliki tanggung jawab besar dalam menyampaikan informasi yang benar dan bermanfaat. Mereka harus mengedepankan kejujuran dan integritas sesuai ajaran Islam.",
        quote: "Barangsiapa yang menipu kami, maka dia bukan dari golongan kami.",
        quotePerson: "HR. Muslim",
        quote2: "Siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam.",
        quotePerson2: "HR. Bukhari dan Muslim"
    },
    {
        id: 20,
        title: "Ibu Rumah Tangga",
        category: "ibu rumah tangga",
        icon: "fa-home",
        verses: [
            {
                text: "Dan orang-orang yang beriman, lelaki dan perempuan, sebagian mereka menjadi penolong bagi sebagian yang lain.",
                reference: "QS. At-Taubah (9): 71"
            },
            {
                text: "Istri-istrimu adalah pakaian bagimu, dan kamu adalah pakaian bagi mereka.",
                reference: "QS. Al-Baqarah (2): 187"
            },
            {
                text: "Dan Kami ilhamkan kepada ibu Musa, Susuilah dia (Musa), dan apabila engkau khawatir terhadapnya, maka hanyutkanlah dia ke sungai (Nil).",
                reference: "QS. Al-Qashash (28): 7"
            }
        ],
        explanation: "Ibu rumah tangga memiliki peran yang sangat penting dalam mendidik anak-anak dan mengelola rumah tangga. Islam sangat menghargai peran ini sebagai fondasi keluarga yang harmonis.",
        quote: "Surga itu di bawah telapak kaki ibu.",
        quotePerson: "HR. Nasai",
        quote2: "Seorang wanita (ibu) adalah sekolah pertama bagi anaknya.",
        quotePerson2: "Ali bin Abi Thalib"
    },
    {
        id: 21,
        title: "Aktivis Lingkungan",
        category: "lingkungan",
        icon: "fa-tree",
        verses: [
            {
                text: "Dan janganlah kamu berbuat kerusakan di bumi setelah (diciptakan) dengan baik.",
                reference: "QS. Al-A'raf (7): 56"
            },
            {
                text: "Dan Dia menjadikan kamu penguasa-penguasa di bumi dan Dia meninggikan sebahagian kamu atas sebahagian yang lain beberapa derajat.",
                reference: "QS. Al-An'am (6): 165"
            },
            {
                text: "Dan langit telah ditinggikan-Nya dan Dia ciptakan keseimbangan.",
                reference: "QS. Ar-Rahman (55): 7"
            }
        ],
        explanation: "Menjaga lingkungan adalah bagian dari tanggung jawab seorang muslim terhadap ciptaan Allah. Aktivis lingkungan berperan dalam melestarikan alam demi kesejahteraan umat manusia.",
        quote: "Bumi ini adalah masjid bagi setiap muslim, maka jagalah ia.",
        quotePerson: "HR. Ahmad",
        quote2: "Sesungguhnya Allah tidak menyukai orang yang berbuat kerusakan.",
        quotePerson2: "QS. Al-Baqarah (2): 205"
    },
    {
        id: 22,
        title: "Seniman & Budayawan",
        category: "seni budaya",
        icon: "fas fa-palette",
        verses: [
            {
                text: "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.",
                reference: "QS. At-Tin (95): 4"
            },
            {
                text: "Dan Dia menciptakan kamu berpasang-pasangan.",
                reference: "QS. An-Naba (78): 8"
            },
            {
                text: "Maka hadapkanlah wajahmu dengan lurus kepada agama (Islam); (tetaplah) sebagai seorang muslim.",
                reference: "QS. Al-Jumu'ah (62): 8"
            }
        ],
        explanation: "Seni dan budaya adalah ekspresi kreativitas manusia yang dapat digunakan untuk menyampaikan pesan moral dan nilai-nilai kebaikan. Islam menghargai seni yang tidak bertentangan dengan syariat.",
        quote: "Setiap anak Adam adalah seniman, dan Allah adalah seniman yang paling hebat.",
        quotePerson: "Rumi",
        quote2: "Allah itu Indah dan menyukai keindahan.",
        quotePerson2: "HR. Muslim"
    }
];

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Fungsi untuk menampilkan profesi
function displayProfessions(professionsToShow) {
    const container = document.getElementById('professionContainer');

    if (professionsToShow.length === 0) {
        container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <h3>Tidak ada profesi ditemukan</h3>
                        <p>Coba gunakan kata kunci pencarian yang berbeda atau pilih kategori lain</p>
                    </div>
                `;
        return;
    }

    let cardsHTML = '';

    professionsToShow.forEach(profession => {
        const isBookmarked = bookmarks.includes(profession.id);

        let versesHTML = '';
        profession.verses.forEach(verse => {
            versesHTML += `
                        <div class="verse">
                            <p>"${verse.text}"</p>
                            <div class="verse-reference">${verse.reference}</div>
                        </div>
                    `;
        });

        let quoteHTML = '';
        if (profession.quote) {
            quoteHTML = `
                        <div class="quote-section">
                            <div class="quote-title">
                                <i class="fas fa-quote-left"></i> Quote Inspirasi
                            </div>
                            <div class="quote-box">
                                <p>"${profession.quote}"</p>
                                <div class="quote-person">- ${profession.quotePerson}</div>
                            </div>
                        </div>
                    `;
        }

        // Handle additional quotes if they exist
        let additionalQuotesHTML = '';
        if (profession.quote2) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote2}"</p>
                            <div class="quote-person">- ${profession.quotePerson2 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (profession.quote3) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote3}"</p>
                            <div class="quote-person">- ${profession.quotePerson3 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (profession.quote4) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote4}"</p>
                            <div class="quote-person">- ${profession.quotePerson4 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (additionalQuotesHTML) {
            quoteHTML += additionalQuotesHTML;
        }

        // Handle additional explanations if they exist
        let additionalExplanationHTML = '';
        if (profession.explanation2) {
            additionalExplanationHTML += `
                        <div class="explanation" style="margin-top: 1rem;">
                            <p>${profession.explanation2}</p>
                        </div>
                    `;
        }

        cardsHTML += `
                    <div class="profession-card" data-category="${profession.category}" data-id="${profession.id}">
                        <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${profession.id}">
                            <i class="fas fa-bookmark"></i>
                        </button>
                        <div class="card-header">
                            <h3>${profession.title}</h3>
                            <i class="fas ${profession.icon} card-icon"></i>
                        </div>
                        <div class="card-body">
                            ${versesHTML}
                            ${quoteHTML}
                            <div class="explanation">
                                <p>${profession.explanation}</p>
                            </div>
                            ${additionalExplanationHTML}
                        </div>
                    </div>
                `;
    });

    container.innerHTML = cardsHTML;

    // Add event listeners to bookmark buttons
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const wasBookmarked = this.classList.contains('bookmarked');
            toggleBookmark(id);

            if (wasBookmarked) {
                showNotification('Bookmark dihapus');
            } else {
                showNotification('Bookmark ditambahkan');
            }
        });
    });

    // Update result count
    document.getElementById('resultCount').textContent = `Menampilkan ${professionsToShow.length} dari ${professions.length} profesi`;
}

// Fungsi untuk menampilkan bookmark
function displayBookmarks() {
    const container = document.getElementById('bookmarksList');

    if (bookmarks.length === 0) {
        container.innerHTML = `
                    <div class="bookmarks-placeholder">
                        <i class="fas fa-bookmark" style="font-size: 3rem; margin-bottom: 1rem; color: #ccc;"></i>
                        <h3>Belum ada bookmark</h3>
                        <p>Klik ikon bookmark pada kartu profesi untuk menambahkannya ke sini</p>
                    </div>
                `;
        return;
    }

    let cardsHTML = '';
    const bookmarkedProfessions = professions.filter(p => bookmarks.includes(p.id));

    bookmarkedProfessions.forEach(profession => {
        let versesHTML = '';
        profession.verses.forEach(verse => {
            versesHTML += `
                        <div class="verse">
                            <p>"${verse.text}"</p>
                            <div class="verse-reference">${verse.reference}</div>
                        </div>
                    `;
        });

        let quoteHTML = '';
        if (profession.quote) {
            quoteHTML = `
                        <div class="quote-section">
                            <div class="quote-title">
                                <i class="fas fa-quote-left"></i> Quote Inspirasi
                            </div>
                            <div class="quote-box">
                                <p>"${profession.quote}"</p>
                                <div class="quote-person">- ${profession.quotePerson}</div>
                            </div>
                        </div>
                    `;
        }

        // Handle additional quotes if they exist
        let additionalQuotesHTML = '';
        if (profession.quote2) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote2}"</p>
                            <div class="quote-person">- ${profession.quotePerson2 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (profession.quote3) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote3}"</p>
                            <div class="quote-person">- ${profession.quotePerson3 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (profession.quote4) {
            additionalQuotesHTML += `
                        <div class="quote-box" style="margin-top: 10px;">
                            <p>"${profession.quote4}"</p>
                            <div class="quote-person">- ${profession.quotePerson4 || 'Sumber tidak diketahui'}</div>
                        </div>
                    `;
        }

        if (additionalQuotesHTML) {
            quoteHTML += additionalQuotesHTML;
        }

        // Handle additional explanations if they exist
        let additionalExplanationHTML = '';
        if (profession.explanation2) {
            additionalExplanationHTML += `
                        <div class="explanation" style="margin-top: 1rem;">
                            <p>${profession.explanation2}</p>
                        </div>
                    `;
        }

        cardsHTML += `
                    <div class="profession-card" data-category="${profession.category}" data-id="${profession.id}">
                        <button class="bookmark-btn bookmarked" data-id="${profession.id}">
                            <i class="fas fa-bookmark"></i>
                        </button>
                        <div class="card-header">
                            <h3>${profession.title}</h3>
                            <i class="fas ${profession.icon} card-icon"></i>
                        </div>
                        <div class="card-body">
                            ${versesHTML}
                            ${quoteHTML}
                            <div class="explanation">
                                <p>${profession.explanation}</p>
                            </div>
                            ${additionalExplanationHTML}
                        </div>
                    </div>
                `;
    });

    container.innerHTML = cardsHTML;

    // Add event listeners to bookmark buttons
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            toggleBookmark(id);
            showNotification('Bookmark dihapus');
            displayBookmarks(); // Refresh bookmarks view
        });
    });
}

// Fungsi untuk mencari dan memfilter
function filterProfessions() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;

    let filteredProfessions = professions;

    // Filter berdasarkan kategori
    if (activeCategory !== 'all') {
        filteredProfessions = filteredProfessions.filter(profession =>
            profession.category === activeCategory
        );
    }

    // Filter berdasarkan pencarian
    if (searchText) {
        filteredProfessions = filteredProfessions.filter(profession => {
            const titleMatch = profession.title.toLowerCase().includes(searchText);

            let verseMatch = false;
            profession.verses.forEach(verse => {
                if (verse.text.toLowerCase().includes(searchText) ||
                    verse.reference.toLowerCase().includes(searchText)) {
                    verseMatch = true;
                }
            });

            const quoteMatch = profession.quote && profession.quote.toLowerCase().includes(searchText);
            const explanationMatch = profession.explanation.toLowerCase().includes(searchText);

            // Check additional quotes and explanations
            const quote2Match = profession.quote2 && profession.quote2.toLowerCase().includes(searchText);
            const explanation2Match = profession.explanation2 && profession.explanation2.toLowerCase().includes(searchText);

            return titleMatch || verseMatch || quoteMatch || explanationMatch || quote2Match || explanation2Match;
        });
    }

    displayProfessions(filteredProfessions);
}

// Bookmark functionality
let bookmarks = JSON.parse(localStorage.getItem('professionBookmarks')) || [];

function toggleBookmark(id) {
    const index = bookmarks.indexOf(id);
    if (index === -1) {
        bookmarks.push(id);
    } else {
        bookmarks.splice(index, 1);
    }
    localStorage.setItem('professionBookmarks', JSON.stringify(bookmarks));

    // Update bookmark buttons in professions tab
    document.querySelectorAll(`.bookmark-btn[data-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('bookmarked');
    });
}

// Tab functionality
function switchTab(tabName) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.nav-tab[data-tab="${tabName}"]`).classList.add('active');

    document.getElementById('professionsTab').classList.toggle('hidden', tabName !== 'professions');
    document.getElementById('bookmarksTab').classList.toggle('hidden', tabName !== 'bookmarks');

    if (tabName === 'bookmarks') {
        displayBookmarks();
    } else {
        filterProfessions();
    }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    // Perbaiki teks typo
    document.querySelector('#bookmarksTab h2').textContent = "Profesi yang Dibuukmark";

    // Tampilkan semua profesi pertama kali setelah delay kecil untuk loading effect
    setTimeout(() => {
        displayProfessions(professions);
    }, 800);

    // Event listener untuk pencarian
    document.getElementById('searchInput').addEventListener('input', filterProfessions);

    // Event listener untuk kategori
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterProfessions();
        });
    });

    // Event listener untuk tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            switchTab(this.dataset.tab);
        });
    });
});

