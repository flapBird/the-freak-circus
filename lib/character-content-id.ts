// Indonesian (id) editorial content for the character profile pages.
//
// This file mirrors lib/character-content.ts, but only carries the editorial
// fields: the numeric fields (cm, feet, inches, ageOrder, strengthRank) are
// always derived from the official height chart in game-facts.ts so that no
// translation can drift away from the published numbers.
//
// Fact discipline is unchanged from the English source:
//   - Confirmed / from the current build / fan-derived labels are preserved
//     as three separate categories, with the same meaning in Indonesian.
//   - No hedge is upgraded into a certainty, and no fandom claim is promoted
//     into a developer statement.
//
// Terminology notes for this edition:
//   - Character names stay in Latin script (Pierrot, Harlequin, Jester,
//     Doctor, Ticket Taker, Columbina); "yandere" is kept as a fandom term
//     and glossed in Indonesian on first use.
//   - "developer", "fans", "rute", "ending", and "build" follow the wording
//     already used by the Indonesian edition of the long-form guide pages.

import { HEIGHT_CHART, formatHeight } from './game-facts';
import type { CharacterEditorial } from './character-content';

const chartFor = (slug: string) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

export const characterProfilesId: Record<
  'pierrot' | 'harlequin' | 'jester' | 'the-doctor' | 'ticket-taker',
  CharacterEditorial
> = {
  pierrot: {
    role: 'Salah satu dari dua pesaing utama, sekaligus obsesi sunyi di pusat cerita',
    intro:
      'Pierrot adalah karakter yang dibangun seluruh game, dan dia yang paling sering digambarkan dengan satu kata saja: diam. Sinopsis dari developer sendiri menyebutnya "yandere yang diam" ("yandere" adalah istilah fandom untuk obsesi romantis yang berakhir pada kendali) — deskripsi yang jauh lebih cermat daripada kelihatannya pada pertama baca. Diam di sini adalah pilihan penulisan karakter, bukan suara yang hilang atau tempat kosong yang belum diisi. Itulah sebabnya setiap gerak-geriknya membawa bobot, dan itulah pula mekanisme yang membuat perhatiannya sulit dipisahkan dari possessesi.',
    sections: [
      {
        heading: 'Jawaban singkat',
        paragraphs: [
          'Pierrot setinggi 198 cm, sehingga dia adalah karakter tertinggi kedua dari lima karakter yang sudah diperkenalkan, dan yang tertinggi di antara dua protagonis romance. Dalam urutan usia yang dipublikasikan developer, dia menempati posisi ketiga dari lima, dihitung dari yang tertua. Rutenya direncanakan dan sedang dikembangkan, dan itu adalah salah satu dari hanya dua rute romance yang pernah disebut developer.',
        ],
      },
      {
        heading: 'Siapa Pierrot',
        paragraphs: [
          'Sinopsis resmi menyatakan situasinya dengan lugas: kamu bekerja di sebuah kafe, takdir membawa kamu bertemu Pierrot, dan di situlah obsesinya dimulai. Kerangka game ini cukup presisi soal mekanismenya — ini bukan pria yang baru menjadi mengerikan di satu titik balik yang dramatis, melainkan seseorang yang perhatiannya mengeras perlahan, sepanjang hari-hari biasa, sampai hal-hal biasa itu ditata ulang di sekelilingnya.',
          'Yang membuatnya jadi karakter yang sulit ditulis secara akurat adalah kenyataan bahwa game ini adalah novel visual, dan Pierrot adalah karakter yang nyaris tidak bicara. Sebagian besar dari apa yang pemain gambarkan sebagai kepribadiannya dirakit dari apa yang tidak dia katakan dan dari bagaimana dia merespons protagonist. Materi itu nyata dan ada di dalam build, tetapi itu adalah interpretasi di atas observasi, dan halaman ini memisahkannya.',
        ],
      },
      {
        heading: 'Tinggi badan dan detail fisik',
        paragraphs: [
          `Tabel tinggi yang dipublikasikan developer menempatkan Pierrot di ${formatHeight(chartFor('pierrot')).metric}, kira-kira ${formatHeight(chartFor('pierrot')).imperial}. Tabel yang sama menyebutkan bahwa developer memakainya sebagai acuan saat menggambar sprite, dan itulah sebabnya angka di sini dianggap sebagai angka kanonik, bukan perkiraan yang dibaca dari gambar.`,
          'Wiki fans mendeskripsikan desainnya dengan cukup rinci: rambut putih sedang panjang, topeng putih dengan garis vertikal hitam yang panjangnya tidak seragam, mata keemasan, topi badut merah-hitam dengan lonceng, jas badut merah dengan aksen emas, dan sarung tangan hitam beruas. Detail kostum setingkat itu berguna untuk mengenali dia di tangkapan layar dan fan art, dan itu berasal dari fandom, bukan dari pernyataan developer, jadi di sini ditampilkan sebagai deskripsi fans.',
        ],
      },
      {
        heading: 'Urutan usia dan posisinya di antara lima karakter',
        paragraphs: [
          'Sebuah post AMA menjawab permintaan langsung untuk mengurutkan para karakter dari yang tertua ke yang termuda. Urutan yang dipublikasikan adalah Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pierrot dengan demikian berada di posisi ketiga dari lima — lebih tua dari Jester dan Harlequin, lebih muda dari Ticket Taker dan Doctor.',
          'Tidak ada angka usia yang pernah dipublikasikan untuk karakter mana pun, dan ini layak disebut secara eksplisit karena wiki fans serta basis data karakter sering menetapkan usia tertentu yang tidak punya dasar dari pihak pertama. Urutan usia adalah satu-satunya informasi usia yang pernah dikeluarkan developer.',
        ],
      },
      {
        heading: 'Peringkat kekuatan',
        paragraphs: [
          'Developer juga menerbitkan peringkat kekuatan fisik murni, dan Pierrot ada di posisi pertama — di depan Harlequin dan Jester yang seri di posisi kedua, lalu Doctor, dan terakhir Ticket Taker. Peringkat itu diterbitkan sebagai sisipan dari pertanyaan seorang fans, bukan sebagai mekanik game, jadi lebih tepat dibaca sebagai penggambaran karakter: anggota terkuat sirkus sekaligus orang yang paling menahan diri secara fisik.',
        ],
      },
      {
        heading: 'Mengapa Pierrot tidak bicara',
        paragraphs: [
          'Sinopsis resmi menggambarkan Pierrot sebagai "yandere yang diam". Frasa tunggal itu berasal dari developer sendiri, dan itulah batas terjauh yang pernah dicapai material pihak pertama soal alasannya. Wiki fans menambahkan penjelasan di dalam fiksi: ada aturan untuk tidak berbicara di ruang publik yang ditetapkan Jester, dan Jester adalah figur otoritas yang sangat dihormati Pierrot. Detail itu memuaskan dan konsisten dengan cara kedua karakter itu ditulis, tetapi sumbernya adalah wiki, bukan developer.',
          'Pembedaan ini penting karena satu alasan praktis: jika kamu membaca terjemahan naskahnya dan Pierrot tampak menjawab, itu adalah soal pelokalan atau penafsiran, bukan kontradiksi dengan latar cerita. Diam adalah ciri yang menentukan karakter ini, bukan cacat pada teks.',
        ],
      },
      {
        heading: 'Kepribadian dan bentuk obsesinya',
        paragraphs: [
          'Sepanjang material cerita, Pierrot terbaca sebagai sabar dan penuh perhatian, bukan impulsif. Obsesi yang digambarkan dalam sinopsis resmi tidak dibingkai sebagai kemarahan; ia dibingkai sebagai sebuah awal, dan itu adalah pernyataan tentang tempo, bukan tentang tingkat keparahan. Justru perbedaan itulah yang membuat ceritanya terasa tidak nyaman: karakter yang perhatiannya sudah menjadi total dan sunyi lebih mengerikan daripada karakter yang berteriak-teriak soal keinginannya.',
          'Wiki fans menggolongkannya sebagai lembut dan sopan di permukaan sambil menguntit protagonist, serta melindungi protagonist dan Columbina. Wiki itu juga mencatat jawaban spesifik developer atas pertanyaan apakah Pierrot suatu saat akan meninggalkan protagonist: jawabannya tidak, dan dengan tegas. Jawaban itu adalah sinyal kuat ke arah mana rutenya akan bergerak, meskipun rute itu sendiri belum selesai.',
        ],
      },
      {
        heading: 'Pierrot dan Harlequin',
        paragraphs: [
          'Persaingan antara keduanya adalah pusat struktural game. Sinopsis menyebut Harlequin sebagai "rival yang mempesona" milik Pierrot, dan menggambarkan game sebagai yang dipimpin oleh salah satu dari mereka. Keduanya berlawanan dalam metode — Pierrot tenang dan konsisten, Harlequin teateris dan berubah-ubah — dan juga berlawanan dalam cara mereka memperebutkan perhatian protagonist.',
          'Wiki fans menggambarkan sejarah bersama mereka sebagai yang melibatkan Columbina, dan sebuah jawaban AMA dari developer menyebut mereka pernah bertemu sejak kecil. Yang bisa dikatakan tanpa meregangkan sumbernya adalah bahwa persaingan ini mendahului masa kini game, dan ia membawa sejarah yang di build saat ini hanya terbongkar sedikit demi sedikit.',
        ],
      },
      {
        heading: 'Pierrot dan Columbina',
        paragraphs: [
          'Columbina adalah anggota lama sirkus, dan figur yang kematiannya membentuk latar belakang kedua protagonis. Wiki fans mencatat bahwa Pierrot dan Columbina tidak pernah punya hubungan romantis, dan itu bertentangan dengan pembacaan atas narasi cinta milik sirkus itu sendiri; secara terpisah, developer menyatakan bahwa Pierrot sudah meninggalkan sejarah itu dan sudah berkembang sejak itu.',
          'Catatan praktis bagi siapa pun yang membaca build saat ini: developer sudah mengatakan bahwa desain Columbina masih dikerjakan dan detailnya ditahan secara sengaja. Pembaruan pengembangan terbaru menyebut sebuah adegan pendek baru yang merujuk dia. Jadi bentuk ceritanya sedang dikonfirmasi sementara karakternya masih dalam produksi — posisi yang tidak biasa untuk ditulis dalam panduan fans, dan alasan bagian ini sengaja dibuat pendek.',
        ],
      },
      {
        heading: 'Status rute dan ending',
        paragraphs: [
          'Ending romance Pierrot ada di dalam daftar ending yang direncanakan developer, bersama ending Harlequin, ending Protagonis, dan "All together". Tidak satu pun dari mereka sudah diimplementasikan. Build saat ini memuat tepat satu ending, dan itu ending buruk — ending "Missing" yang dicapai di Day 1 dengan cara menolak bereaksi selagi Pierrot diejek.',
          'Karena itu, tidak ada daftar pemicu yang dipublikasikan untuk rute Pierrot. Setiap tabel pilihan yang mengklaim bisa membuka ending-nya sedang menggambarkan build yang tidak ada secara publik. Saat rute itu rilis, halaman ini akan diperbarui dengan pilihan dan titik simpan yang sebenarnya, bukan dengan tebakan.',
        ],
      },
      {
        heading: 'Fakta terkonfirmasi versus interpretasi',
        paragraphs: [
          'Agar bedanya terasa konkret, begini pembagian material di halaman ini.',
        ],
        list: [
          'Terkonfirmasi oleh developer: tinggi badannya, posisinya dalam urutan usia, peringkat pertama di peringkat kekuatan, penggambaran dirinya sebagai "yandere yang diam", perannya sebagai salah satu dari dua protagonis, dan bahwa ending romance Pierrot direncanakan.',
          'Dari build saat ini: penampilannya, adegan-adegannya, dan cara dia merespons protagonist.',
          'Berasal dari fans: deskripsi kostum dan topeng lengkap, alasan dalam fiksi atas keheningannya, sejarah pribadinya, serta rincian hubungannya dengan karakter lain.',
        ],
      },
    ],
    faq: [
      {
        question: 'Seberapa tinggi Pierrot di The Freak Circus?',
        answer:
          'Pierrot setinggi 198 cm, kira-kira 6 ft 5.95 in, dalam tabel tinggi yang dipublikasikan developer. Dia karakter tertinggi kedua dari lima, dan yang tertinggi dari dua protagonis romance.',
      },
      {
        question: 'Berapa umur Pierrot?',
        answer:
          'Tidak ada angka umur yang dipublikasikan. Dalam urutan usia resmi developer, dia berada di posisi ketiga dari lima, dari yang tertua: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Apakah Pierrot lebih tua dari Harlequin?',
        answer: 'Ya. Harlequin adalah yang termuda dari lima, dan Pierrot adalah yang ketiga tertua.',
      },
      {
        question: 'Apakah Pierrot karakter terkuat?',
        answer:
          'Ya. Dia peringkat pertama dalam daftar kekuatan yang dipublikasikan developer, di depan Harlequin dan Jester yang seri di posisi kedua.',
      },
      {
        question: 'Bisakah aku berromance dengan Pierrot?',
        answer:
          'Ending romance Pierrot direncanakan dan sedang dikembangkan, tetapi belum ada di build publik. Tidak ada kondisi pemicu yang bisa dipublikasikan.',
      },
      {
        question: 'Apakah Pierrot punya ending?',
        answer:
          'Belum. Satu-satunya ending yang sudah diimplementasikan adalah ending buruk "Missing" di Day 1. Ending Pierrot sudah diumumkan dan masih ditulis.',
      },
      {
        question: 'Mengapa Pierrot tidak bisa bicara?',
        answer:
          'Sinopsis resmi menyebutnya "yandere yang diam", jadi diamnya adalah penggambaran karakter dari developer, bukan celah dalam teks. Wiki fans memberi alasan dalam fiksi yang melibatkan Jester, tetapi detail itu tidak berasal dari pernyataan developer.',
      },
      {
        question: 'Apakah Pierrot termasuk yandere?',
        answer:
          'Ya — itu kata milik developer sendiri dalam sinopsis resmi, bukan sekadar singkatan fans.',
      },
      {
        question: 'Apa hubungan Pierrot dengan Harlequin?',
        answer:
          'Mereka adalah pesaing utama, dan game ini dibingkai sebagai yang dipimpin oleh salah satu dari mereka. Harlequin digambarkan sebagai "rival yang mempesona" milik Pierrot, dan keduanya berlawanan dalam metode: Pierrot tenang dan konsisten, Harlequin teateris dan berubah-ubah.',
      },
      {
        question: 'Apa yang terjadi antara Pierrot dan Columbina?',
        answer:
          'Columbina adalah anggota lama sirkus yang kematiannya membentuk latar belakang kedua protagonis. Wiki fans mencatat bahwa dia dan Pierrot tidak pernah punya hubungan romantis. Desainnya masih dalam produksi, dan detailnya ditahan developer secara sengaja.',
      },
      {
        question: 'Apakah Pierrot manusia?',
        answer:
          'Menurut wiki fans, dia adalah salah satu monster di sirkus itu. Sinopsis developer menggambarkan para karakter dan premis game dalam istilah sirkus monster, dan Pierrot termasuk bagian dari kelompok itu.',
      },
      {
        question: 'Bagaimana tampilan Pierrot tanpa topengnya?',
        answer:
          'Wiki fans menggambarkan rambut putih sedang panjang dan mata keemasan di balik topeng putih dengan garis vertikal hitam yang panjangnya tidak seragam. Deskripsi itu berasal dari fandom, bukan pernyataan developer, dan gunanya terutama untuk mengenali dia di fan art.',
      },
    ],
  },
  harlequin: {
    role: 'Rival yang mempesona, dan yang kedua dari dua rute romance',
    intro:
      'Harlequin adalah karakter yang membuat The Freak Circus menjadi sebuah pilihan, bukan cerita dengan satu jalur. Sinopsis resmi menyebutnya "rival yang mempesona" milik Pierrot dan menggambarkan game sebagai yang dipimpin oleh salah satu dari mereka — ringkasan yang tepat untuk sebuah desain yang dibangun di atas dua cara yang tidak kompatibel untuk mendapatkan perhatian protagonist.',
    sections: [
      {
        heading: 'Jawaban singkat',
        paragraphs: [
          'Harlequin setinggi 187 cm, yang terpendek dari lima karakter yang sudah diperkenalkan dan yang terpendek kedua dari dua protagonis romance. Dalam urutan usia yang dipublikasikan developer, dia ada di posisi kelima dari lima, yang berarti dia yang termuda. Dia berbagi posisi kedua di peringkat kekuatan dengan Jester, dan dia punya rute romance yang direncanakan tetapi belum diimplementasikan.',
        ],
      },
      {
        heading: 'Siapa Harlequin',
        paragraphs: [
          'Kalau Pierrot bekerja dengan konsistensi, Harlequin bekerja dengan pertunjukan. Kata yang dipakai developer adalah "mempesona", dan karakternya ditulis agar hanya bisa dibaca dalam gerakan: keberadaan yang teateris dan berubah-ubah, yang niatnya sulit ditahan cukup lama untuk dipastikan. Dalam novel visual, di mana hampir seluruh bobotnya bertumpu pada dialog, itu membuatnya jadi protagonis yang lebih sulit diringkas dari keduanya, dan lebih memuaskan untuk ditonton sepanjang satu playthrough.',
          'Wiki fans menggolongkannya sebagai santai, sadis, suka menggoda, dan diam-diam cemburu, serta mencatat bahwa dia tidak nyaman dengan kasih sayang. Cemburunya adalah bagian menarik dari deskripsi itu, karena membingkai ulang persaingan ini menjadi sesuatu yang ia inginkan tidak kalah dari Pierrot, bukan sekadar sesuatu yang sedang ia perebutkan.',
        ],
      },
      {
        heading: 'Tinggi badan dan detail fisik',
        paragraphs: [
          `Tabel tinggi developer menempatkan Harlequin di ${formatHeight(chartFor('harlequin')).metric}, kira-kira ${formatHeight(chartFor('harlequin')).imperial}. Itu membuatnya 11 cm lebih pendek dari Pierrot, selisih yang dianggap wiki fans berarti bagi cara keduanya ditata berhadapan satu sama lain.`,
          'Desainnya digambarkan wiki fans sebagai rambut hitam keriting sampai pipi dengan dua anak rambut yang melingkar menjadi hati di dahi kiri, topeng putih dengan belah ketupat hijau menembus satu mata dan segitiga hijau di bawah mata yang lain, mata hijau racun yang menyala saat topengnya dilepas, serta hood dan kostum hijau-hitam dengan sarung tangan yang tidak serasi. Sekali lagi, ini deskripsi fans, bukan pernyataan developer, dan paling berguna untuk mengenali dia di tangkapan layar dan karya seni.',
        ],
      },
      {
        heading: 'Urutan usia dan yang termuda dari lima karakter',
        paragraphs: [
          'Dalam urutan usia yang dipublikasikan developer, Harlequin berada di urutan terakhir: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Dia yang termuda dari karakter yang sudah diperkenalkan, dan termuda dari dua protagonis romance dengan selisih empat posisi.',
          'Ini fakta yang benar-benar terdokumentasi, dan sekaligus salah satu yang paling sering dikacaukan secara online. Banyak materi fans menetapkan usia numerik tertentu untuk Harlequin, dan beberapa angka itu bertentangan dengan urutan yang dipublikasikan. Urutan itulah versi yang bisa diandalkan.',
        ],
      },
      {
        heading: 'Peringkat kekuatan',
        paragraphs: [
          'Harlequin berbagi posisi kedua di peringkat kekuatan developer dengan Jester, di belakang Pierrot dan di depan Doctor serta Ticket Taker. Digabung dengan kenyataan bahwa dia yang termuda dan yang terpendek, dia secara konsisten digambarkan sebagai yang tercepat di antara kelompok itu, bukan yang terberat — wiki fans juga mencatat bahwa keduanya seri di kategori kedua untuk kekuatan fisik murni.',
        ],
      },
      {
        heading: 'Apa yang dikatakan material resmi tentang hubungannya',
        paragraphs: [
          'Ada satu pernyataan developer yang mudah disalahartikan dan layak dikutip dengan hati-hati. Saat ditanya tentang gigitan yang ditinggalkan Harlequin saat menggoda, jawabannya: itu bukan lamaran, bekasnya tidak meninggalkan bekas luka, dan pernikahan serta pendekatan di antara monster bekerja berbeda dari cara protagonist memahaminya. Kalimatnya pendek, tapi bekerja banyak: ia menetapkan bahwa menggoda milik Harlequin punya logikanya sendiri, dan bahwa kerangka acuan protagonist bukan kerangka acuan sirkus.',
          'Wiki fans mencatat bahwa Harlequin merasa aman di dekat Doctor, bahwa Doctor adalah orang favoritnya di sirkus, dan bahwa ia akur dengan Ticket Taker meski selera mereka beda. Wiki itu juga mencatat kaitan tersirat dengan kematian Columbina — bahwa Harlequin membunuhnya untuk "menyelamatkannya" — klaim yang berat dan yang oleh wiki itu sendiri disajikan sebagai penyimpulan, bukan pernyataan. Developer sudah mengonfirmasi bentuk umum sejarah sirkus dalam jawaban AMA, jadi ceritanya nyata, tetapi pembacaan spesifik tentang peran Harlequin di dalamnya belum dikonfirmasi oleh sumber pihak pertama.',
        ],
      },
      {
        heading: 'Status rute dan ending',
        paragraphs: [
          'Ending romance Harlequin adalah salah satu dari empat yang disebut developer, bersama ending Pierrot, ending Protagonis, dan "All together". Tidak satu pun dari keempatnya sudah diimplementasikan. Build saat ini hanya memuat satu ending, yaitu ending buruk "Missing" di Day 1.',
          'Karena itu, panduan untuk ending Harlequin belum bisa ditulis dengan jujur. Sebuah panduan yang mencantumkan pilihan persis dan warna tiket yang dibutuhkan sedang menggambarkan build yang tidak ada secara publik, dan pemain yang mengikutinya akan mendapati rutenya tidak tersedia. Saat rilis, panduan yang berguna adalah strategi checkpoint dan slot simpan, bukan tabel pemicu yang dikarang.',
        ],
      },
      {
        heading: 'Fakta terkonfirmasi versus interpretasi',
        paragraphs: [
          'Pembagian di halaman ini adalah sebagai berikut.',
        ],
        list: [
          'Terkonfirmasi oleh developer: tinggi badannya, posisinya sebagai yang termuda dalam urutan usia, serinya di posisi kedua kekuatan, penggambaran dirinya sebagai "rival yang mempesona" milik Pierrot, fakta bahwa gigitan menggodanya bukan lamaran, dan bahwa ending romance Harlequin direncanakan.',
          'Dari build saat ini: penampilannya, adegan-adegannya, dan cabang-cabangnya — sebagian kemunculannya berubah tergantung cabang cerita, yang itu sendiri dikonfirmasi oleh catatan perbaikan bug resmi.',
          'Berasal dari fans: deskripsi kostum dan topeng lengkap, sejarah pribadinya, dan rincian hubungannya dengan Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Seberapa tinggi Harlequin di The Freak Circus?',
        answer:
          'Harlequin setinggi 187 cm, kira-kira 6 ft 1.62 in, dalam tabel tinggi yang dipublikasikan developer. Dia yang terpendek dari lima karakter.',
      },
      {
        question: 'Apakah Harlequin karakter termuda?',
        answer:
          'Ya. Dalam urutan usia resmi developer, dia ada di posisi kelima dari lima, dari yang tertua: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Berapa umur Harlequin?',
        answer:
          'Tidak ada angka umur yang pernah dipublikasikan untuk karakter mana pun. Hanya urutan relatifnya yang terdokumentasi, dan urutan itu menempatkan Harlequin di akhir.',
      },
      {
        question: 'Kepribadian Harlequin seperti apa?',
        answer:
          'Wiki fans menggolongkannya sebagai santai, sadis, suka menggoda, dan diam-diam cemburu, serta mencatat bahwa dia tidak nyaman dengan kasih sayang. Dia adalah kebalikan teateris dari Pierrot, dan justru itulah yang membuat persaingan ini bekerja.',
      },
      {
        question: 'Apa hubungan Harlequin dengan Pierrot?',
        answer:
          'Mereka adalah pesaing utama game. Sinopsis resmi menyebut Harlequin sebagai "rival yang mempesona" milik Pierrot dan membingkai game sebagai yang dipimpin oleh salah satu dari mereka. Wiki fans menambahkan bahwa mereka bertemu sejak kecil dan bahwa sejarah bersama mereka melibatkan Columbina.',
      },
      {
        question: 'Apakah Harlequin punya rute?',
        answer:
          'Ending romance Harlequin direncanakan dan sedang dikembangkan, tetapi belum diimplementasikan di build publik, jadi tidak ada kondisi pemicu yang bisa didokumentasikan.',
      },
      {
        question: 'Bisakah aku mendapatkan ending Harlequin?',
        answer:
          'Belum. Satu-satunya ending yang bisa dimainkan adalah ending buruk "Missing" di Day 1. Ending Harlequin sudah diumumkan dan masih ditulis.',
      },
      {
        question: 'Apakah Harlequin berbahaya?',
        answer:
          'Game ini berperingkat 18+ dan peringatan kontaknya mencakup Pembunuhan, penculikan, penggunaan obat tanpa persetujuan, dan dominasi fisik, jadi seluruh kelompok karakter ditulis sebagai berbahaya. Untuk Harlequin secara spesifik, deskripsi fans atas adegan-adegannya menulisnya sebagai tidak terduga dan sadis.',
      },
      {
        question: 'Apa yang terjadi pada Columbina?',
        answer:
          'Dia anggota lama sirkus yang kematiannya membentuk latar belakang kedua protagonis. Wiki fans mencatat penyimpulan bahwa Harlequin membunuhnya untuk "menyelamatkannya", dan bahwa Pierrot menolak ikut campur. Desainnya masih dalam produksi dan detailnya ditahan secara sengaja.',
      },
      {
        question: 'Apakah Harlequin punya ending baik?',
        answer:
          'Tidak ada ending baik yang sudah diimplementasikan. Satu-satunya ending di build saat ini adalah ending buruk, dan ending romance Harlequin adalah pekerjaan yang direncanakan tetapi belum dirilis.',
      },
    ],
  },
  jester: {
    role: 'Pemimpin sirkus, dan karakter yang tidak punya rute sendiri',
    intro:
      'Jester adalah karakter yang paling sering salah digambarkan secara online, biasanya ke arah memberinya rute romance yang tidak dia miliki. Developer sudah tegas: pilihan rutenya hanya Pierrot, Harlequin, keduanya, atau tidak keduanya. Jester diperkenalkan di build saat ini sebagai bagian dari kelompok yang lebih luas, dan keberadaannya itulah yang membuat sirkus terasa seperti sebuah institusi, bukan sekadar sepasang pesaing dengan latar belakang.',
    sections: [
      {
        heading: 'Jawaban singkat',
        paragraphs: [
          'Jester setinggi 192 cm, tertinggi kedua dari lima karakter yang sudah diperkenalkan, dan di posisi keempat dari lima dalam urutan usia developer. Dia berbagi posisi kedua di peringkat kekuatan dengan Harlequin. Dia tidak punya rute dan tidak punya ending, dan developer menyatakan bahwa menjadikan karakter-karakter sisanya sebagai pilihan romance adalah sebuah kemungkinan, bukan sebuah komitmen.',
        ],
      },
      {
        heading: 'Siapa Jester',
        paragraphs: [
          'Jester berfungsi sebagai figur otoritas sirkus itu. Wiki fans menggolongkannya sebagai antagonis utama Freak Circus, tetapi tenang dan terkumpul, bukan mudah berubah — deskripsi yang lebih cocok dengan desainnya daripada kata "antagonis" semata. Dialah yang menentukan peran, yang membagi tugas-tugas dalam sirkus, dan yang dibicarakan dengan campuran rasa hormat dan kesal.',
          'Yang penting bagi pembaca adalah bahwa pengaruhnya atas karakter lain bersifat struktural. Ketika sebuah sumber mengatakan seorang karakter menghormati Jester, atau takut padanya, atau bergerak di dalam aturan yang ditetapkan Jester, itu sedang menggambarkan bentuk sirkus itu, bukan satu titik adegan dalam cerita.',
        ],
      },
      {
        heading: 'Tinggi badan dan detail fisik',
        paragraphs: [
          `Tabel tinggi developer menempatkan Jester di ${formatHeight(chartFor('jester')).metric}, kira-kira ${formatHeight(chartFor('jester')).imperial}. Dia 6 cm lebih pendek dari Pierrot dan 15 cm lebih pendek dari Doctor.`,
          'Wiki fans menggolongkannya dengan rambut ungu tua yang panjang, topeng putih bertanda hati ungu terbalik dan bintang ungu, jas dinner ungu, serta sarung tangan opera, dan mencatat bahwa dia ambidekter. Deskripsi itu berasal dari fans, bukan pernyataan developer.',
        ],
      },
      {
        heading: 'Urutan usia',
        paragraphs: [
          'Dalam urutan usia yang dipublikasikan developer, Jester ada di posisi keempat dari lima, dari yang tertua: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Dia lebih tua dari Harlequin dan lebih muda dari Pierrot, Doctor, serta Ticket Taker.',
          'Wiki fans mencatat ulang tahun Jester dan menyatakan bahwa developer pernah memposting ucapan ulang tahun untuknya, yang membuat tanggal ulang tahun-nya lebih berdasar dibanding yang lain — tetapi tanggal-tanggal yang beredar untuk anggota kelompok lainnya berasal dari fans, dan urutan usia tetap satu-satunya ukuran resmi.',
        ],
      },
      {
        heading: 'Peringkat kekuatan',
        paragraphs: [
          'Jester berbagi posisi kedua dengan Harlequin di peringkat kekuatan developer, di belakang Pierrot dan di depan Doctor serta Ticket Taker. Seperti Harlequin, wiki fans mencatatnya sebagai kuat, tetapi kalah oleh Pierrot dalam kekuatan fisik murni.',
        ],
      },
      {
        heading: 'Apa yang ditegaskan material resmi',
        paragraphs: [
          'Pernyataan resmi paling jelas tentang Jester datang dari jawaban AMA tentang rute: tidak ada rute Jester, dan jika suatu saat rute-rute lain ditambahkan, kemungkinan besar mereka akan datang sebagai add-on atau DLC, dengan belum ada keputusan. Jawaban lain menggambarkan menjadikan karakter sisanya sebagai pilihan romance sebagai sesuatu yang ingin dikerjakan developer tetapi tidak bisa dia janjikan.',
          'Semua yang lain yang biasa disebut tentang dia — bahwa dia mengendalikan para "Fools", bahwa dia menyebut manusia sebagai "strays" (anak terlantar), bahwa dia memilih peran sirkus semua orang — berasal dari wiki fans, bukan developer, dan sebaiknya diperlakukan sebagai penafsiran atas adegan-adegannya.',
        ],
      },
      {
        heading: 'Status rute dan ending',
        paragraphs: [
          'Tidak ada rute Jester dan tidak ada ending Jester. Empat ending yang disebut developer milik Pierrot, Harlequin, Protagonis, dan kesimpulan gabungan "All together".',
          'Ada juga kesalahan umum lain yang layak disebut langsung: gagasan bahwa rute Jester "terbuka di Day 2" muncul di beberapa panduan. Hal semacam itu tidak ada. Yang tiba bersama pembaruan Day 2 adalah karakter tambahan, sprite beranimasi, menu yang didesain ulang, dan versi Android — bukan rute-rute baru.',
        ],
      },
      {
        heading: 'Fakta terkonfirmasi versus interpretasi',
        paragraphs: [
          'Untuk Jester khususnya, perbandingannya penting, karena begitu banyak materi yang terbit tentang dia menyajikan spekulasi seolah-olah itu mekanik.',
        ],
        list: [
          'Terkonfirmasi oleh developer: tinggi badannya, posisinya dalam urutan usia, serinya di posisi kedua kekuatan, dan bahwa dia tidak punya rute.',
          'Dari build saat ini: penampilannya, adegan-adegannya, dan otoritas yang dia pegang atas karakter lain.',
          'Berasal dari fans: konsep "Fools", kerangka "strays" (anak terlantar), rincian cara dia membagi peran, dan sejarah pribadinya.',
        ],
      },
    ],
    faq: [
      {
        question: 'Seberapa tinggi Jester?',
        answer:
          '192 cm, kira-kira 6 ft 3.59 in, dalam tabel tinggi yang dipublikasikan developer. Dia tertinggi kedua dari lima.',
      },
      {
        question: 'Apakah Jester pemimpin sirkus?',
        answer:
          'Wiki fans menggolongkannya sebagai pemimpin dan antagonis utama sirkus, dan otoritasnya atas karakter lain konsisten sepanjang build. Deskripsi itu berasal dari fandom, bukan pernyataan developer.',
      },
      {
        question: 'Apakah Jester punya rute?',
        answer:
          'Tidak. Developer sudah mengonfirmasi bahwa tidak ada rute Jester. Pilihan yang ada hanya Pierrot, Harlequin, keduanya, atau tidak keduanya.',
      },
      {
        question: 'Apakah Jester punya ending?',
        answer:
          'Tidak. Empat ending yang direncanakan milik Pierrot, Harlequin, Protagonis, dan "All together".',
      },
      {
        question: 'Apakah rute Jester terbuka di Day 2?',
        answer:
          'Tidak. Beberapa panduan mengklaim begitu, tetapi hal semacam itu tidak ada. Pembaruan Day 2 menambahkan karakter, sprite beranimasi, menu yang didesain ulang, dan versi Android.',
      },
      {
        question: 'Berapa umur Jester?',
        answer:
          'Tidak ada angka umur yang dipublikasikan. Dalam urutan usia resmi, dia ada di posisi keempat dari lima, dari yang tertua.',
      },
      {
        question: 'Apakah Jester yang terkuat?',
        answer: 'Tidak — Pierrot ada di posisi pertama. Jester berbagi posisi kedua dengan Harlequin.',
      },
      {
        question: 'Bisakah aku berromance dengan Jester?',
        answer:
          'Tidak di build saat ini. Developer sudah berkata bahwa menjadikan karakter lain sebagai pilihan romance adalah kemungkinan yang ingin dia eksplorasi, tetapi tidak bisa dia janjikan.',
      },
    ],
  },
  'the-doctor': {
    role: 'Kehadiran klinis di tepi kelompok karakter',
    intro:
      'Doctor diperkenalkan di build saat ini dan tidak punya rute, tidak punya ending, serta tidak punya entri tinggi badan resmi di tabel publik yang dikutip fans. Yang membuatnya menarik untuk dibaca adalah kontras yang ia ciptakan: register klinis yang dijatuhkan ke dalam sebuah karnaval, dan karakter yang oleh fandom digambarkan sekaligus sebagai orang paling tenang dan paling berbahaya di tenda itu.',
    sections: [
      {
        heading: 'Jawaban singkat',
        paragraphs: [
          'Doctor setinggi 207 cm, yang membuatnya karakter tertinggi dari lima karakter yang sudah diperkenalkan dengan selisih yang jelas — 9 cm di atas Pierrot. Dia ada di posisi kedua dari lima dalam urutan usia developer, artinya hanya Ticket Taker yang lebih tua. Di kekuatan, dia peringkat keempat dari lima, dan dia tidak punya rute maupun ending.',
        ],
      },
      {
        heading: 'Siapa Doctor',
        paragraphs: [
          'Wiki fans menggambarkan Doctor sebagai antagonis sekunder atau mungkin sebagai figur netral, dan memberinya dua sisi: tenang dan terkendali di satu sisi, berapi-api dan sadis di sisi lain. Itu cara yang berguna untuk membaca adegan-adegannya, karena perubahannya digambarkan terlihat — matanya menyala merah saat emosi tertentu mengambil alih. Wiki itu juga mencatat bahwa ia lebih menyukai kelicikan daripada kekuatan brute, yang konsisten dengan karakter yang sekaligus paling tinggi tetapi hanya keempat dalam kekuatan fisik murni.',
          'Dia juga karakter yang paling mungkin digambarkan keliru sebagai memiliki rute. Gagasan tentang rute Doctor dengan "ending baik" beredar di beberapa panduan lama, dan itu tidak berkorespondensi dengan apa pun yang pernah dideskripsikan developer.',
        ],
      },
      {
        heading: 'Tinggi badan dan detail fisik',
        paragraphs: [
          `Tabel tinggi developer menempatkan Doctor di ${formatHeight(chartFor('the-doctor')).metric}, kira-kira ${formatHeight(chartFor('the-doctor')).imperial} — tertinggi dari lima dengan selisih 9 cm.`,
          'Wiki fans menggolongkannya dengan kulit merah, rambut merah pendek, dan topeng dokter pesakumpar dengan lensa cyan bercahaya, dan mencatat bahwa kaki serta telapak kakinya tidak pernah ditampilkan. Wiki itu juga mencatat bahwa ia kidal, tidak bisa berenang, dan bahwa matanya menyala merah saat mengalami emosi tertentu. Semua itu adalah deskripsi fans yang diambil dari materinya, bukan pernyataan developer.',
        ],
      },
      {
        heading: 'Urutan usia dan kekuatan',
        paragraphs: [
          'Doctor ada di posisi kedua dari lima dalam urutan usia resmi, dari yang tertua: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Hanya Ticket Taker yang lebih tua darinya.',
          'Di peringkat kekuatan dia berada di posisi keempat, di depan Ticket Taker dan di belakang Pierrot, Harlequin, serta Jester. Menjadi yang tertinggi sekaligus keempat terkuat adalah kombinasi menarik di sini: Doctor besar, bukan kuat, dan deskripsi fans bahwa ia lebih memilih kelicikan daripada kekuatan persis seperti yang bisa diharapkan dari itu.',
        ],
      },
      {
        heading: 'Detail yang layak diketahui tentang suaranya',
        paragraphs: [
          'Doctor punya aksen Rusia dalam naskah bahasa Inggris, meski kelompok karakternya berasal dari Brasil. Ini adalah lelucon internal yang disengaja antara pengisi suara dan pencipta, dan tercatat di wiki fans dengan rujukan ke unggahan Tumblr milik pengisi suara itu sendiri. Ini detail kecil, tapi dari jenis yang menunjukkan berapa banyak dokumentasi fans yang benar-benar bersumber dan bukan ditebak.',
        ],
      },
      {
        heading: 'Status rute dan ending',
        paragraphs: [
          'Doctor tidak punya rute dan tidak punya ending. Developer sudah mengonfirmasi bahwa pilihan rutenya adalah Pierrot, Harlequin, keduanya, atau tidak keduanya, dan bahwa setiap rute karakter tambahan kemungkinan besar akan datang sebagai add-on atau DLC, dengan belum ada keputusan.',
          'Ending "Clean Hands" yang sebagian halaman fans lama atribusikan kepada Doctor tidak didukung sumber pihak pertama mana pun, dan situs ini tidak meneruskannya sebagai fakta.',
        ],
      },
      {
        heading: 'Fakta terkonfirmasi versus interpretasi',
        paragraphs: [
          'Halaman Doctor punya lebih banyak materi fans dibanding materi resmi, relatif terhadap karakter lain mana pun di kelompok ini, sebagian besar karena dia tidak punya rute dan karena itu tidak ada deskripsi naratif pihak pertama tentangnya.',
        ],
        list: [
          'Terkonfirmasi oleh developer: tinggi badannya sebagai yang tertinggi dari lima, posisi kedua dalam urutan usia, posisi keempat di peringkat kekuatan, dan bahwa dia tidak punya rute.',
          'Dari build saat ini: penampilannya, adegan-adegannya, dan cara ketenangan itu pecah.',
          'Berasal dari fans: eksperimen dan sampel yang dikaitkan dengan tendanya, sejarah pribadinya, dan trivia karakter tentang seleranya.',
        ],
      },
    ],
    faq: [
      {
        question: 'Seberapa tinggi Doctor?',
        answer:
          '207 cm, kira-kira 6 ft 9.5 in — tertinggi dari lima karakter, 9 cm di atas Pierrot.',
      },
      {
        question: 'Apakah Doctor yang tertua?',
        answer:
          'Dia yang kedua tertua. Urutan usia resmi, dari yang tertua, adalah Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Apakah Doctor yang terkuat?',
        answer:
          'Tidak. Dia peringkat keempat di daftar kekuatan developer, di belakang Pierrot, Harlequin, dan Jester.',
      },
      {
        question: 'Apakah Doctor punya rute?',
        answer: 'Tidak. Developer sudah mengonfirmasi bahwa tidak ada rute Doctor.',
      },
      {
        question: 'Apakah Doctor punya ending baik?',
        answer:
          'Tidak. Doctor tidak punya rute maupun ending di build saat ini. Satu-satunya ending yang ada adalah ending buruk "Missing" di Day 1.',
      },
      {
        question: 'Apakah ada ending "Clean Hands" untuk Doctor?',
        answer:
          'Tidak. Klaim itu muncul di sebagian halaman fans, tetapi tidak didukung sumber pihak pertama mana pun, dan situs ini tidak mencantumkannya sebagai fakta.',
      },
      {
        question: 'Apa hubungan Doctor dengan Harlequin?',
        answer:
          'Wiki fans mencatat bahwa Harlequin merasa aman di dekat Doctor dan bahwa Doctor adalah orang favoritnya di sirkus. Itu penggambaran karakter yang berasal dari fans, bukan pernyataan developer.',
      },
      {
        question: 'Kenapa Doctor punya aksen Rusia?',
        answer:
          'Itu lelucon internal yang disengaja antara pengisi suara dan pencipta, dicatat wiki fans dengan rujukan ke Tumblr milik pengisi suara itu sendiri. Kelompok karakternya selain itu berasal dari Brasil.',
      },
      {
        question: 'Bisakah aku berromance dengan Doctor?',
        answer:
          'Belum saat ini. Developer sudah berkata bahwa menjadikan karakter lain sebagai pilihan romance adalah kemungkinan yang ingin dia eksplorasi, tetapi tidak bisa dia janjikan.',
      },
    ],
  },
  'ticket-taker': {
    role: 'Penjaga ambang, dan yang tertua dari lima karakter',
    intro:
      'Ticket Taker (di antarmuka situs ini ia dikenal sebagai "Pengambil Tiket") adalah karakter yang kamu temui pertama, dan yang usianya paling terdokumentasi: urutan usia yang dipublikasikan developer menempatkannya di posisi teratas. Dia juga karakter yang paling sering diberi rute romance yang tidak ada, yang membuatnya menjadi kasus uji yang berguna untuk membaca materi fans secara kritis.',
    sections: [
      {
        heading: 'Jawaban singkat',
        paragraphs: [
          'Ticket Taker setinggi 183 cm, terpendek dari lima karakter yang sudah diperkenalkan, dan di posisi pertama dari lima dalam urutan usia developer, yang membuatnya yang tertua. Di peringkat kekuatan dia berada di posisi terakhir. Dia tidak punya rute dan tidak punya ending, dan developer sudah mengonfirmasinya secara langsung.',
        ],
      },
      {
        heading: 'Siapa Ticket Taker',
        paragraphs: [
          'Dia menempati posisi liminal dalam fiksi: figur di pintu masuk sirkus, yang berkaitan dengan izin, ambang batas, dan mesin pertunjukan. Wiki fans menggolongkannya sebagai patuh dan berdedikasi pada agenda sirkus, dewasa dan profesional, sibuk dengan kebersihan dan keteraturan, serta menyatakan prinsipnya dengan lugas: di sini, tak ada yang keluar dari perannya.',
          'Detail terakhir itulah yang membuatnya bekerja sebagai karakter, bukan sekadar penjaga gerbang. Dalam cerita tentang sirkus yang berjalan di atas pertunjukan, karakter yang tugasnya menegakkan batas antara penonton dan penampil harus percaya pada pertunjukan itu sendiri.',
        ],
      },
      {
        heading: 'Tinggi badan dan detail fisik',
        paragraphs: [
          `Tabel tinggi developer menempatkan Ticket Taker di ${formatHeight(chartFor('ticket-taker')).metric}, kira-kira ${formatHeight(chartFor('ticket-taker')).imperial} — terpendek dari lima, 24 cm di bawah Doctor.`,
          'Wiki fans menggolongkannya dengan rambut biru tua pendek, topeng yang terbelah dua dengan bagian putih dan hitam, jas dinner biru tua dengan aksen emas, dasi leher emas, dan topi tinggi, serta mencatat bahwa matanya tidak serasi — satu putih, satu biru. Nama karakter ini dalam bahasa Portugis, Bilheteiro, muncul di materi yang sama.',
        ],
      },
      {
        heading: 'Yang tertua dari lima karakter',
        paragraphs: [
          'Ini fakta yang paling kokoh terdokumentasi tentang Ticket Taker. Dia memimpin urutan usia yang dipublikasikan developer: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Sebagai yang tertua dalam kelompok sekaligus penjaga ketertiban, usianya cocok dengan perannya, bukan merumitkannya.',
          'Seperti karakter lainnya, tidak ada angka usia yang dipublikasikan, dan ulang tahun yang beredar tentang dia berasal dari fans.',
        ],
      },
      {
        heading: 'Peringkat kekuatan',
        paragraphs: [
          'Dia peringkat terakhir dari lima di daftar kekuatan developer, di bawah Doctor. Digabung dengan kenyataan bahwa dia yang terpendek, itu membuatnya anggota kelompok yang paling tidak mengintimidasi secara fisik — yang konsisten dengan karakter yang otoritasnya sepenuhnya prosedural.',
        ],
      },
      {
        heading: 'Sistem tiket',
        paragraphs: [
          'Developer sudah mengonfirmasi bahwa ada delapan jenis tiket. Merah muda berada di bawah kelompok utama, merah dan hijau menandakan pilihan yang dibuat protagonist, dan kombinasi merah muda plus merah berarti Ticket Taker mengambil opsi merah secara otomatis. Inilah salah satu informasi mekanik resmi yang paling konkret di game ini, dan itu menjelaskan mengapa Ticket Taker penting bagi percabangan meski dia tidak punya rute sendiri.',
          'Wiki fans menambahkan bahwa figur di kafe yang memberi protagonist tiket merah muda adalah Ticket Taker yang menyamar, dan itulah juga cara dimulainya ending buruk "Missing". Identifikasi itu berasal dari fans, tetapi terhubung langsung dengan satu-satunya ending yang benar-benar ada di dalam build.',
        ],
      },
      {
        heading: 'Status rute dan ending',
        paragraphs: [
          'Ticket Taker tidak punya rute dan tidak punya ending. Developer menyatakan bahwa pilihan rutenya adalah Pierrot, Harlequin, keduanya, atau tidak keduanya, dan bahwa karakter sisanya mungkin hanya mendapat rute sebagai add-on atau DLC kalau itu terjadi.',
          'Perlu disebutkan secara terus terang: sebagian panduan fans yang sudah lama beredar menggambarkan rute romance Ticket Taker yang terbuka lewat ketekunan dan dialog yang saksama. Rute seperti itu tidak ada di dalam build publik.',
        ],
      },
      {
        heading: 'Fakta terkonfirmasi versus interpretasi',
        paragraphs: [
          'Untuk karakter pendukung, Ticket Taker terdokumentasi dengan luar biasa baik di dalam material resmi, sebagian besar karena sistem tiket adalah salah satu dari sedikit mekanik yang terkonfirmasi.',
        ],
        list: [
          'Terkonfirmasi oleh developer: tinggi badannya sebagai yang terpendek dari lima, posisi pertamanya dalam urutan usia, posisi terakhirnya di peringkat kekuatan, keberadaan delapan jenis tiket, dan bahwa dia tidak punya rute.',
          'Dari build saat ini: penampilannya, adegan-adegannya, dan fakta bahwa protagonist diberi tiket merah muda selama Day 1.',
          'Berasal dari fans: penyamaran sebagai "Tidak Dikenal" di kafe, julukan "manipulator realitas", dan rincian sejarahnya dengan Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Seberapa tinggi Ticket Taker?',
        answer:
          '183 cm, kira-kira 6 ft 0 in — terpendek dari lima karakter, 24 cm lebih pendek dari Doctor.',
      },
      {
        question: 'Apakah Ticket Taker yang tertua?',
        answer:
          'Ya. Dia memimpin urutan usia resmi developer: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Apakah Ticket Taker yang terkuat?',
        answer: 'Tidak. Dia peringkat terakhir dari lima di daftar kekuatan developer.',
      },
      {
        question: 'Bisakah aku berromance dengan Ticket Taker?',
        answer:
          'Tidak. Developer sudah mengonfirmasi bahwa tidak ada rute Ticket Taker. Pilihan yang ada adalah Pierrot, Harlequin, keduanya, atau tidak keduanya.',
      },
      {
        question: 'Apakah Ticket Taker punya rute atau ending?',
        answer:
          'Tidak keduanya. Dia muncul sepanjang cerita sebagai figur otoritas, tapi tidak ada rute maupun ending yang miliknya.',
      },
      {
        question: 'Ada berapa jenis tiket?',
        answer:
          'Developer sudah mengonfirmasi delapan. Merah muda berada di bawah kelompok utama, merah dan hijau menandakan pilihan protagonist, dan kombinasi merah muda plus merah berarti Ticket Taker mengambil opsi merah secara otomatis.',
      },
      {
        question: 'Apa itu tiket merah?',
        answer:
          'Merah dan hijau adalah warna yang menandai pilihan yang dibuat protagonist. Kombinasi merah muda dan merah berarti Ticket Taker memilih opsi merah untuk mereka.',
      },
      {
        question: 'Apakah Ticket Taker orang dari kafe itu?',
        answer:
          'Wiki fans mengidentifikasi figur "Tidak Dikenal" di kafe yang memberi protagonist tiket merah muda sebagai Ticket Taker yang menyamar. Itu berasal dari fans, dan tiket merah muda itulah yang memulai ending "Missing".',
      },
      {
        question: 'Kenapa Ticket Taker penting kalau dia tidak punya rute?',
        answer:
          'Dia mengendalikan sistem tiket, yang merupakan salah satu dari sedikit mekanik terkonfirmasi dalam game ini, dan dialah karakter yang menetapkan batas antara protagonist sebagai pengunjung dan sebagai peserta.',
      },
    ],
  },
};
