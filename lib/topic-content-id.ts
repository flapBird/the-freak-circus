// Indonesian edition of the long-form guide pages.
//
// This file mirrors the English record in topic-content.ts: same five pages,
// same facts, same hedging. The English version stays the reference for
// structure, tone, and every factual claim — nothing here adds a fact that is
// not already in game-facts.ts, and every "planned / not confirmed / unverified"
// framing survives the translation.
//
// Notes for translators:
//   - Numeric lists (official age order, strength ranking) are derived from
//     game-facts.ts so the published numbers can never drift from the source.
//   - Prose lists (ending summaries, platform details, content warnings,
//     unverified claims) are written out here in Indonesian so the wording is
//     natural rather than a machine rendering of the English string.
//   - The `related` array holds internal slugs, not copy. It is copied
//     verbatim from the English pages on purpose and must never be translated.

import type { GuidePage } from './topic-content';
import { AGE_ORDER_OLDEST_FIRST, STRENGTH_RANKING } from './game-facts';

export const guideContentId: Record<string, GuidePage> = {
  endings: {
    slug: 'endings',
    title: 'Ending dan Rute The Freak Circus',
    metaTitle: 'Panduan Ending The Freak Circus: Semua Rute dan Hasilnya',
    metaDescription:
      'Berapa banyak ending yang dimiliki The Freak Circus? Ending buruk "Missing" yang terkonfirmasi, empat ending yang direncanakan, karakter mana yang punya rute, dan apa saja yang benar-benar dikonfirmasi developer.',
    intro:
      'Ending adalah topik yang paling banyak dicari di game ini, sekaligus yang paling mudah dilaporkan keliru. Build publik yang sekarang ini hanya memuat satu ending. Semua yang lain yang muncul di panduan, wiki, dan video adalah pekerjaan yang direncanakan atau hasil interpretasi pemain. Halaman ini memisahkan keduanya dan menautkan tiap klaim ke tempat developer mengatakannya.',
    quickFacts: [
      { label: 'Ending yang bisa dimainkan', value: '1', note: 'Ending buruk "Missing" di Day 1' },
      { label: 'Ending yang direncanakan', value: '4', note: 'Pierrot, Harlequin, Protagonis, "All together"' },
      { label: 'Versi saat ini', value: 'Prototipe versi 0.2' },
      { label: 'Pilihan rute yang terkonfirmasi', value: 'Pierrot, Harlequin, keduanya, atau tidak keduanya' },
      { label: 'Status Day 3', value: 'Dalam pengembangan, tanpa tanggal rilis' },
    ],
    sections: [
      {
        heading: 'Ending satu-satunya yang benar-benar ada',
        paragraphs: [
          'Versi 0.2 hanya memuat satu ending, dan itu adalah ending buruk. Ending itu tercapai di Day 1: jika protagonist tidak melakukan apa-apa selagi Pierrot diejek oleh seorang pria di depan sekawanan orang, protagonist diberi tiket merah muda oleh orang tak dikenal, dibawa ke tenda merah muda, dan ditolak masuk oleh setiap anggota sirkus. Game ini dengan blak-blakan menyatakan bahwa protagonist gagal menarik perhatian Pierrot dan berakhir secara tragis.',
          'Hal ini lebih penting daripada yang terdengar. Banyak materi fans mendeskripsikan empat atau lebih ending seolah-olah sudah bisa dicapai hari ini. Pada build saat ini, proses memilih rute masih dikembangkan — cabangnya ada, kesimpulannya belum.',
        ],
      },
      {
        heading: 'Empat ending yang direncanakan',
        paragraphs: [
          'Developer mencantumkan empat kesimpulan di halaman resmi dan FAQ resmi. Dua di antaranya adalah ending romantis, satu sengaja tanpa romance, dan satu ending poly.',
        ],
        list: [
          'Ending Pierrot (romance) — Kesimpulan romantis tempat protagonist berakhir bersama Pierrot. Dicantumkan developer sebagai pekerjaan yang direncanakan, dan terus kali digambarkan masih dalam pengembangan.',
          'Ending Harlequin (romance) — Kesimpulan romantis tempat protagonist berakhir bersama Harlequin. Dicantumkan developer sebagai pekerjaan yang direncanakan; naskahnya belum selesai.',
          'Ending Protagonis (tanpa romance) — Kesimpulan tempat protagonist mengakhiri cerita tanpa romance. Developer mengonfirmasi bahwa rute ini ada sebagai konsep dan bahwa pertemanan tetap bisa dipilih di sampingnya.',
          '"All together" (ending poly) — Kesimpulan tempat protagonist jatuh cinta pada Pierrot dan Harlequin sekaligus. Diumumkan sebagai rencana, bukan sebagai konten yang sudah diimplementasikan.',
        ],
      },
      {
        heading: 'Karakter mana yang sebenarnya bisa kamu rujuk',
        paragraphs: [
          'Jawaban resminya sempit: Pierrot, Harlequin, keduanya, atau tidak keduanya. Rute protagonist adalah pilihan "tidak keduanya", dan developer telah mengonfirmasi bahwa rute ini tidak mengandung romance, sambil tetap membiarkanmu memilih berteman dengan para karakter.',
          'Tidak ada rute untuk Jester, Ticket Taker, atau Doctor. Developer menyatakan bahwa jika nanti ada rute tambahan, kemungkinan besar akan datang sebagai add-on atau DLC, dan hal itu belum diputuskan. Menjadikan karakter sisanya sebagai pilihan romance disebut sebagai kemungkinan, bukan sebagai janji.',
        ],
      },
      {
        heading: 'Apa arti sebenarnya dari ending poly',
        paragraphs: [
          'Ending "All together" didefinisikan developer sebagai protagonist yang jatuh cinta pada Pierrot dan Harlequin sekaligus. Itu adalah kesimpulan yang dicantumkan secara terpisah, bukan varian sampingan dari salah satu rute romance, dan masih berupa pekerjaan yang direncanakan.',
        ],
      },
      {
        heading: 'Mengapa jumlah ending di berbagai panduan berbeda',
        paragraphs: [
          'Situs yang berbeda melaporkan total yang berbeda karena mereka menjawab pertanyaan yang berbeda. Sebagian hanya menghitung yang bisa dimainkan, sebagian hanya menghitung yang disebut developer, dan sebagian mencampur kesimpulan yang direncanakan dengan tebakan pemain. Membaca sebuah klaim dengan tiga ember di atas — sudah diimplementasikan, direncanakan, atau belum terverifikasi — adalah cara tercepat untuk menentukan klaim itu.',
          'Ada dua catatan tambahan. Developer menyatakan bahwa naskahnya masih dalam proses pengerjaan, sehingga ending yang direncanakan bisa berubah. Dan tidak ada jumlah ending resmi: jawaban untuk "ada berapa banyak ending" adalah bahwa ada beberapa yang direncanakan, tetapi angkanya belum bisa diberikan.',
        ],
      },
      {
        heading: 'Yang bisa diharapkan dari Day 3',
        paragraphs: [
          'Day 3 adalah hari berikutnya di dalam game dan sedang dikembangkan secara aktif. Pembaruan pengembangan telah mendeskripsikan bagian beta yang sudah selesai dan menempatkan beta pada sekitar 30–40% dari keseluruhan update, dengan naskah yang lebih besar daripada Day 2 serta tambahan konten ending buruk. Belum ada tanggal rilis yang diumumkan, dan developer meminta agar klaim tanggal dari luar tidak diulang.',
          'Karena Day 3 adalah tempat kesimpulan-kesimpulan baru sedang ditulis, halaman inilah yang layak dibuka lagi setelah pembaruan resmi berikutnya.',
        ],
      },
    ],
    faq: [
      {
        question: 'Berapa banyak ending yang dimiliki The Freak Circus?',
        answer:
          'Satu ending bisa dimainkan pada build saat ini. Empat lagi diumumkan sebagai rencana: Pierrot, Harlequin, Protagonis, dan "All together". Developer menyatakan beberapa ending direncanakan, tetapi tidak bisa memberikan jumlah total.',
      },
      {
        question: 'Bagaimana cara mendapatkan ending "Missing"?',
        answer:
          'Ini adalah satu-satunya ending yang sudah diimplementasikan. Di Day 1, tidak melakukan apa-apa selagi Pierrot diejek; protagonist diberi tiket merah muda, dibawa ke tenda merah muda, dan ditolak oleh sirkus.',
      },
      {
        question: 'Bagaimana cara mendapatkan ending Harlequin?',
        answer:
          'Belum ada panduan langkah demi langkah, karena ending itu belum diimplementasikan. Rute Harlequin masih dikembangkan. Daftar pemicu langkah demi langkah yang beredar di internet pasti menggambarkan build yang tidak ada secara publik.',
      },
      {
        question: 'Apakah Pierrot punya ending?',
        answer:
          'Ending romance Pierrot sudah diumumkan dan sedang dikembangkan, tetapi belum ada dalam build publik. Developer menyebut naskah dan ending sebagai pekerjaan yang masih berjalan.',
      },
      {
        question: 'Apakah ada rute Jester, Doctor, atau Ticket Taker?',
        answer:
          'Tidak. Pilihan rute yang terkonfirmasi adalah Pierrot, Harlequin, keduanya, atau tidak keduanya. Rute karakter tambahan kemungkinan besar datang sebagai add-on atau DLC, dan itu belum diputuskan.',
      },
      {
        question: 'Bisakah kamu menjalani romance dengan protagonist tanpa karakter lain?',
        answer:
          'Bisa. Rute protagonist ada sebagai konsep dan tidak mengandung romance, tapi kamu tetap bisa memilih membangun pertemanan dengan para karakter.',
      },
      {
        question: 'Berapa banyak ending yang akan ada di game versi final?',
        answer:
          'Developer menyatakan beberapa ending direncanakan, tetapi tidak bisa memberikan angka. Naskahnya masih dalam proses pengerjaan, jadi daftar di atas bisa berubah.',
      },
      {
        question: 'Apakah Day 3 akan menambah ending?',
        answer:
          'Day 3 sedang dikembangkan secara aktif, dan pembaruan pengembangan telah mendeskripsikan tambahan konten ending buruk serta adegan tersembunyi. Belum ada tanggal rilis yang diumumkan.',
      },
    ],
    related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
  },
  heights: {
    slug: 'characters/heights',
    title: 'Tinggi Badan, Urutan Usia, dan Peringkatan Karakter',
    metaTitle: 'Tabel Tinggi Karakter The Freak Circus: Semua Karakter Terperingkat',
    metaDescription:
      'Tabel tinggi resmi karakter The Freak Circus — Pierrot, Harlequin, Jester, Doctor, dan Ticket Taker — beserta urutan usia dan peringkat kekuatan yang dipublikasikan.',
    intro:
      'Developer pernah menerbitkan tabel tinggi bersanding dengan referensi sprite, dan urutan usia tersendiri. Dua daftar itulah alasan pertanyaan tentang tinggi badan di game ini punya jawaban yang pasti — dan juga alasan banyak daftar daring salah menulisnya. Halaman ini memuat ulang angka yang dipublikasikan dan menandai di mana peringkatnya berhenti.',
    quickFacts: [
      { label: 'Tertinggi', value: 'Doctor — 207 cm', note: 'Sekitar 6 ft 9.5 in' },
      { label: 'Terpendek', value: 'Ticket Taker — 183 cm', note: 'Sekitar 6 ft 0 in' },
      { label: 'Rentang tinggi', value: '24 cm', note: 'Antara yang tertinggi dan terpendek' },
      { label: 'Tertua', value: 'Ticket Taker', note: 'Urutan usia resmi, dari yang tertua' },
      { label: 'Termuda', value: 'Harlequin', note: 'Urutan usia resmi, dari yang tertua' },
      { label: 'Terkuat', value: 'Pierrot', note: 'Peringkat kekuatan murni dari developer' },
    ],
    sections: [
      {
        heading: 'Tabel tinggi resmi',
        paragraphs: [
          'Tabel ini diposting developer sebagai referensi saat menggambar sprite. Isinya lima karakter, yaitu seluruh karakter yang sudah diperkenalkan di build saat ini. Angka di bawah adalah nilai yang dipublikasikan, bukan estimasi dari gambar.',
        ],
      },
      {
        heading: 'Urutan usia resmi',
        paragraphs: [
          'Sebuah post AMA menjawab permintaan untuk mengurutkan para karakter dari yang tertua ke yang termuda. Urutannya adalah Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Tidak ada angka usia numerik yang pernah dipublikasikan untuk siapa pun, dan urutan ini adalah satu-satunya informasi usia yang pernah dikeluarkan developer.',
        ],
        list: AGE_ORDER_OLDEST_FIRST.map((entry) => `${entry.ageOrder}. ${entry.name} — tinggi ${entry.cm} cm`),
      },
      {
        heading: 'Peringkat kekuatan',
        paragraphs: [
          'Developer juga menerbitkan peringkat kekuatan fisik murni, yang terpisah dari tinggi badan. Urutannya: Pierrot pertama, Harlequin dan Jester seri di posisi kedua, Doctor ketiga, dan Ticket Taker terakhir. Peringkat ini diterbitkan sebagai sisipan dari sebuah pertanyaan fans, bukan sebagai mekanik game, jadi perlakukan sebagai penggambaran karakter, bukan sebagai layar statistik.',
        ],
        list: STRENGTH_RANKING.map(
          (entry) => `${entry.name} — peringkat ${entry.strengthRank}${entry.strengthRank === 2 ? ' (seri)' : ''}`,
        ),
      },
      {
        heading: 'Apa yang tidak dicakup tabel ini',
        paragraphs: [
          'Tabel ini hanya mencakup lima karakter yang sudah diperkenalkan. Columbina, yang kematiannya membentuk latar belakang kedua tokoh utama, tidak muncul di tabel yang dipublikasikan, dan tidak ditemukan tinggi numerik resmi untuknya. Tinggi yang beredar di wiki fans bukanlah informasi dari pihak pertama.',
          'Tanggal lahir juga sama tidak meratakannya. Satu tanggal lahir karakter telah dikonfirmasi lewat post resmi; tanggal-tanggal lain yang beredar daring berasal dari fans dan harus diperlakukan demikian.',
        ],
      },
      {
        heading: 'Mengapa daftar karakter antar situs berbeda',
        paragraphs: [
          'Sebagian besar perbedaan muncul karena mencampur tabel yang dipublikasikan dengan usia dan tanggal lahir yang ditebak fans, lalu disajikan seolah-olah itu informasi resmi. Angka tinggi dan urutan usia relatif terdokumentasi. Usia pasti, sebagian besar tanggal lahir, dan apa pun tentang karakter keenam tidak.',
        ],
      },
    ],
    faq: [
      {
        question: 'Tinggi Pierrot di The Freak Circus berapa?',
        answer: 'Pierrot 198 cm, sekitar 6 ft 5.95 in, menurut tabel tinggi yang dipublikasikan developer.',
      },
      {
        question: 'Tinggi Harlequin berapa?',
        answer:
          'Harlequin 187 cm, sekitar 6 ft 1.62 in. Dia yang terpendek di antara dua tokoh romance dan yang termuda dari lima karakter.',
      },
      {
        question: 'Siapa karakter tertinggi?',
        answer: 'Doctor, 207 cm — sekitar 6 ft 9.5 in. Dia 9 cm lebih tinggi dari Pierrot.',
      },
      {
        question: 'Siapa karakter terpendek?',
        answer: 'Ticket Taker, 183 cm — sekitar 6 ft 0 in. Dia juga yang tertua dari lima karakter.',
      },
      {
        question: 'Karakter mana yang paling tua?',
        answer:
          'Urutan usia resmi, dari yang tertua, adalah Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin yang termuda.',
      },
      {
        question: 'Siapa yang terkuat?',
        answer:
          'Pierrot menempati posisi pertama dalam daftar kekuatan developer, dengan Harlequin dan Jester seri di posisi kedua, Doctor ketiga, dan Ticket Taker terakhir.',
      },
      {
        question: 'Umur Harlequin berapa?',
        answer:
          'Tidak ada angka usia yang dipublikasikan. Dia yang termuda dari lima karakter dalam urutan usia resmi. Angka usia yang ditemukan di situs fans bukanlah informasi dari pihak pertama.',
      },
      {
        question: 'Tinggi Columbina berapa?',
        answer:
          'Tidak ada tinggi resmi yang dipublikasikan untuknya. Dia tidak muncul di tabel developer, yang mencakup lima karakter yang sudah diperkenalkan.',
      },
    ],
    related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
  },
  save: {
    slug: 'save',
    title: 'Cara Menyimpan dan Melanjutkan',
    metaTitle: 'Cara Menyimpan The Freak Circus: Melanjutkan, Slot, dan Simpanan Browser',
    metaDescription:
      'Cara menyimpan dan melanjutkan The Freak Circus di browser, PC, Mac, dan Android — perilaku bawaan mesin Ren\'Py, serta detail penyimpanan yang belum pernah didokumentasikan developer.',
    intro:
      'Menyimpan progres adalah bagian tempat panduan fans paling tidak bisa diandalkan. Beberapa situs menerbitkan jalur simpan yang tepat, jumlah slot, dan prosedur transfer dari browser ke desktop yang tidak pernah dipublikasikan developer. Halaman ini menjelaskan apa yang benar-benar diketahui — perilaku mesin dan titik masuk Day 2 yang terkonfirmasi — dan memisahkannya dari bagian yang belum terdokumentasi.',
    quickFacts: [
      { label: 'Mesin', value: "Ren'Py", note: 'Simpan, muat, simpan cepat, dan rollback standar' },
      { label: 'Lanjut tanpa mengulang Day 1', value: 'Bisa', note: 'Menu menyediakan titik masuk Day 2' },
      { label: 'Bermain di browser', value: 'Didukung', note: 'Disajikan lewat halaman itch.io resmi' },
      { label: 'Dokumentasi simpan resmi', value: 'Belum dipublikasikan' },
      { label: 'Jumlah slot simpan', value: 'Belum terkonfirmasi' },
      { label: 'Transfer browser ke desktop', value: 'Belum terkonfirmasi untuk game ini' },
    ],
    sections: [
      {
        heading: 'Yang didukung game ini sejak awal',
        paragraphs: [
          "The Freak Circus dibangun dengan Ren'Py, mesin visual novel standar. Artinya game ini memakai antarmuka normal mesin tersebut: tombol simpan yang membuka daftar slot, tombol muat, slot simpan cepat dan muat cepat, serta rollback adegan lewat riwayat. Kalau kamu pernah memainkan karya Ren'Py lain, cara kerjanya akan terasa familiar.",
          'Versi browser juga didukung dan disajikan lewat halaman itch.io resmi. Developer mendokumentasikan macet khas browser beserta cara memperbaikinya, dan itu mengonfirmasi bahwa bermain di browser adalah jalur yang dirawat, bukan sekadar kebetulan.',
        ],
      },
      {
        heading: 'Titik masuk Day 2',
        paragraphs: [
          'Satu fitur yang berdekatan dengan penyimpanan memang terkonfirmasi dan layak diketahui: menu memuat tombol untuk Day 2 dengan pengantar singkat, jadi kamu bisa melanjutkan ke Day 2 tanpa memainkan ulang Day 1. Ini penting bagi pemain yang ingin kembali ke konten saat ini tanpa mengulang pembukaan.',
        ],
      },
      {
        heading: 'Di mana simpanan tersimpan di desktop',
        paragraphs: [
          "Build desktop Ren'Py menyimpan file simpan di folder khusus proyek di dalam direktori data pengguna. Jalur persisnya berbeda antara Windows, macOS, dan Linux, dan game ini pernah dibagikan dengan lebih dari satu nama proyek. Kami tidak mencantumkan jalur tertentu di sini karena developer tidak pernah mendokumentasikannya untuk game ini, dan jalur yang salah di dalam panduan hanya membuat orang mencari folder yang tidak ada.",
          "Kalau kamu butuh jalur untuk mesinmu sendiri, cara yang andal adalah membuka menu muat atau simpan di dalam game lalu memakai fitur pengelolaan simpan dari engine overlay, yang akan langsung membuka folder yang benar untuk platform yang kamu pakai.",
        ],
      },
      {
        heading: 'Simpanan browser dan kenapa bisa hilang',
        paragraphs: [
          "Build browser menyimpan progres di penyimpanan milik browser itu sendiri, bukan di file yang kamu kendalikan. Hal ini punya konsekuensi praktis: membersihkan data situs, memakai jendela privat, atau konfigurasi privasi tertentu bisa menghapus simpanan tanpa peringatan. Ini juga berarti simpanan browser terikat pada browser dan profil yang membuatnya.",
          'Ini adalah perilaku mesin, bukan cirik khas game ini, dan ini adalah alasan paling sering pemain melaporkan progresnya hilang.',
        ],
      },
      {
        heading: 'Memindahkan simpanan antara browser dan desktop',
        paragraphs: [
          "Ren'Py menyediakan aksi ekspor dan impor untuk simpanan di engine overlay-nya. Apakah itu menghasilkan alur yang bisa diandalkan untuk memindahkan simpanan browser ke build desktop game ini belum dikonfirmasi developer, dan laporan berbeda-beda menurut browser dan platformnya.",
          'Anggap ini sebagai hal yang layak dicoba, bukan prosedur yang pasti berhasil, dan backup dulu isi yang penting bagi kamu sebelum bereksperimen.',
        ],
      },
      {
        heading: 'Klaim yang sengaja tidak kami ulang',
        paragraphs: [
          'Klaim berikut ini beredar luas dan disajikan sebagai fakta oleh beberapa panduan fans. Tidak satu pun berasal dari developer, dan halaman ini tidak akan mengulanginya sebagai hal yang sudah pasti:',
        ],
        list: [
          'Game ini mendukung jumlah slot simpan tertentu, melakukan autosave pada interval tetap, atau menyimpan simpanan di folder bernama khusus — Tidak ada dokumentasi simpan resmi. Build Ren\'Py memakai lokasi standar, tetapi developer tidak pernah menerbitkan detail spesifiknya.',
          'Simpanan browser bisa diekspor ke arsip zip lalu diimpor ke build desktop — Ren\'Py menyediakan aksi ekspor dan impor di engine overlay-nya, tetapi developer belum mengonfirmasi alur browser-ke-desktop untuk game ini.',
        ],
      },
    ],
    faq: [
      {
        question: 'Bagaimana cara menyimpan di The Freak Circus?',
        answer:
          "Ini rilis Ren'Py, jadi memakai tombol simpan dan muat standar mesin, dengan daftar slot, simpan cepat dan muat cepat, serta rollback di riwayat.",
      },
      {
        question: 'Bisakah saya langsung ke Day 2?',
        answer:
          'Bisa. Menu memuat tombol Day 2 dengan pengantar singkat, jadi kamu bisa melanjutkan ke Day 2 tanpa mengulang Day 1.',
      },
      {
        question: 'Kenapa simpanan browser saya hilang?',
        answer:
          'Build browser menyimpan progres di penyimpanan browser. Membersihkan data situs, jendela privat, atau pengaturan privasi yang ketat bisa menghapusnya. Simpanan browser juga terikat pada profil browser yang membuatnya.',
      },
      {
        question: 'Di mana file simpan saya di PC atau Mac?',
        answer:
          "Ren'Py menyimpan simpanan di folder khusus proyek di dalam direktori data pengguna sistem, dan jalurnya berbeda menurut platform serta nama build. Developer tidak pernah menerbitkan jalur untuk game ini, jadi pakai fitur pengelolaan simpan dari engine overlay di menu dalam game untuk membuka folder yang benar di mesinmu.",
      },
      {
        question: 'Bisakah saya memindahkan simpanan browser ke versi desktop?',
        answer:
          "Ren'Py menyediakan aksi ekspor dan impor untuk simpanan. Apakah itu bekerja andal untuk memindahkan simpanan browser ke build desktop game ini belum dikonfirmasi, jadi anggap sebagai hal yang layak dicoba dan backup dulu.",
      },
      {
        question: 'Ada berapa banyak slot simpan?',
        answer:
          'Itu belum didokumentasikan developer. Jumlah slot berasal dari build mesin, bukan dari pernyataan resmi.',
      },
      {
        question: 'Apakah game melakukan autosave?',
        answer:
          'Perilaku autosave berasal dari build mesin. Developer tidak pernah menerbitkan jadwal autosave tertentu untuk game ini.',
      },
      {
        question: 'Apakah ada masalah browser yang diketahui terkait penyimpanan?',
        answer:
          'Developer mendokumentasikan macet di browser pada tenda Ticket Taker dan beberapa adegan beranimasi, beserta cara memperbaikinya, dan juga menyebutkan bahwa melewati adegan terlalu cepat dapat membuat efek visual tidak sinkron. Itu adalah masalah playback, bukan masalah penyimpanan, tapi bisa memutus sesi yang sedang berjalan.',
      },
    ],
    related: ['save', 'download', 'faq', 'endings', 'day-3'],
  },
  download: {
    slug: 'download',
    title: 'Tempat Bermain dan Mengunduh',
    metaTitle: 'Unduh The Freak Circus: Gratis di Browser, PC, Mac, Android',
    metaDescription:
      'Tempat memainkan The Freak Circus dengan aman — halaman itch.io resmi, platform yang didukung, bermain di browser, dan cara mengenali unduhan palsu.',
    intro:
      "The Freak Circus dibagikan lewat halaman itch.io milik developer, dan halaman itu juga merupakan satu-satunya halaman resmi untuk game ini. Segala sesuatu yang mengaku menyediakan build lengkap hanyalah mirror atau penipuan. Berikut cara mendapatkan versi asli di tiap platform, dan beberapa tanda yang paling cepat memperlihatkan unduhan palsu.",
    quickFacts: [
      { label: 'Sumber resmi', value: 'itch.io — satu-satunya halaman resmi' },
      { label: 'Harga', value: 'Tentukan sendiri harganya', note: 'Kamu bisa membayar sesuai anggapanmu, termasuk nol' },
      { label: 'Versi saat ini', value: 'Versi 0.2' },
      { label: 'Platform', value: 'Browser, Windows, macOS, Linux, Android' },
      { label: 'Bahasa', value: 'Inggris, Portugis (Brasil), Tionghoa Sederhana' },
      { label: 'Dubbing', value: 'Hanya bahasa Inggris' },
    ],
    sections: [
      {
        heading: 'Satu-satunya sumber resmi',
        paragraphs: [
          'Game ini diterbitkan Garula di itch.io, dan developer menyatakan bahwa halaman tersebut adalah satu-satunya halaman resmi untuk game ini. Halaman itu menyediakan opsi "Run game" di dalam browser serta build yang bisa diunduh untuk platform desktop dan seluler di bawah. Opsi browser tidak butuh instalasi sama sekali.',
          'Karena harganya ditentukan sendiri, kamu bisa mengunduh build lengkap secara gratis. Membayar adalah cara mendukung developer solo yang menyatakan bahwa pengembangan game ini sebagian besar dikerjakan sendirian.',
        ],
      },
      {
        heading: 'Platform dan build',
        paragraphs: [
          'Versi 0.2 tersedia untuk kelima platform. Build browser adalah cara tercepat untuk mulai, dan jadi pilihan bagus kalau kamu ingin membaca panduan sambil memainkan game.',
        ],
        list: [
          'Web browser (HTML5) — Bisa dimainkan langsung di browser melalui halaman itch.io resmi',
          'Windows — Build PC, versi 0.2',
          'macOS — Build Mac, versi 0.2',
          'Linux — Build Linux, versi 0.2',
          'Android — Build APK, versi 0.2',
        ],
      },
      {
        heading: 'Bahasa dan dubbing',
        paragraphs: [
          'Game ini hadir dalam bahasa Inggris, Portugis (Brasil), dan Tionghoa Sederhana. Terjemahan Tionghoa disunting untuk versi 0.2, dan bahasa tambahan pernah dibahas sebagai terjemahan yang didukung komunitas.',
          'Dubbing hanya tersedia dalam bahasa Inggris, dibawakan oleh Darthsuki. Developer menjelaskan bahwa menambah bahasa dubbing lain awalnya tidak direncanakan dan akan menjadi pekerjaan baru.',
        ],
        list: ['Inggris', 'Portugis (Brasil)', 'Tionghoa Sederhana'],
      },
      {
        heading: 'Peringatan konten',
        paragraphs: [
          'Game ini diberi peringkat 18+ dan developer menerbitkan daftar peringatan yang eksplisit. Ini layak dibaca sebelum mulai bermain, terutama kalau sedang memutuskan berapa banyak cerita yang mau dibaca lebih dulu sebelum memulai.',
        ],
        list: [
          'Guncangan layar',
          'Darah, kematian, murdersi, dan gore',
          'Kiasan tentang kanibalisme',
          'Penyiksaan',
          'Bahasa kasar',
          'Penculikan',
          'Penggunaan obat tanpa persetujuan',
          'Dominasi fisik',
          'Pelecehan fisik ringan dan kontak fisik tanpa persetujuan',
        ],
      },
      {
        heading: 'Cara mengenali unduhan palsu',
        paragraphs: [
          'Tanda peringatan paling jelas adalah situs mana pun yang menawarkan game lengkap di luar halaman itch.io resmi. Developer secara eksplisit meminta agar game ini tidak diunggah ulang atau diposting ulang, dan telah mengonfirmasi tidak ada server Discord resmi, jadi setiap server harus dianggap dikelola fans.',
          'Hal lain yang perlu diwaspadai: aplikasi atau ekstensi browser "verifikasi" yang diminta, unduhan berukuran tidak biasa yang ternyata adalah installer untuk program lain, dan permintaan apa pun untuk mematikan proteksi antivirus.',
        ],
      },
      {
        heading: 'Keunggulan build browser dan di mana ia tersandung',
        paragraphs: [
          'Bermain di browser memang didukung, dan developer telah memperbaiki masalah khusus browser, termasuk macet di tenda Ticket Taker dan beberapa adegan beranimasi. Melewati adegan tertentu terlalu cepat masih bisa membuat efek visual tidak sinkron, dan ini perlu diketahui kalau kamu menekan skip dengan cepat.',
          "Kalau kamu ingin pengalaman paling mulus untuk mengulang permainan dan berburu rute, build desktop memberi antarmuka Ren'Py lengkap dengan rollback.",
        ],
      },
    ],
    faq: [
      {
        question: 'Di mana saya bisa memainkan The Freak Circus?',
        answer:
          'Di halaman itch.io milik developer, yang merupakan satu-satunya halaman resmi untuk game ini. Halaman itu menyediakan permainan di browser sekaligus build yang bisa diunduh.',
      },
      {
        question: 'Apakah The Freak Circus gratis?',
        answer:
          'Harga ditentukan sendiri di itch.io, jadi kamu bisa mengunduh build lengkap secara gratis dan membayar sesuai anggapanmu kalau ingin mendukung developer.',
      },
      {
        question: 'Bisakah saya memainkan The Freak Circus di ponsel?',
        answer:
          'Bisa. Build Android diterbitkan bersama versi browser, Windows, macOS, dan Linux.',
      },
      {
        question: 'Apakah ada versi bahasa Tionghoa?',
        answer: 'Ada. Tionghoa Sederhana disertakan dalam game, dan terjemahannya disunting untuk versi 0.2.',
      },
      {
        question: 'Bahasa apa lagi yang tersedia?',
        answer:
          'Game ini hadir dalam bahasa Inggris, Portugis (Brasil), dan Tionghoa Sederhana, dengan dubbing hanya dalam bahasa Inggris. Bahasa lain pernah dibahas sebagai terjemahan komunitas.',
      },
      {
        question: 'Bagaimana cara tahu kalau situs unduhan itu palsu?',
        answer:
          'Halaman itch.io resmi adalah satu-satunya sumber resmi. Developer meminta agar game ini tidak diposting ulang, jadi situs lain mana pun yang menawarkan build lengkap paling-paling tidak berlisensi. Jangan pernah memasang program "verifikasi" terpisah atau mematikan antivirus demi mendapatkan game ini.',
      },
      {
        question: 'Lebih baik bermain di browser atau mengunduh build desktop?',
        answer:
          "Build browser tidak butuh instalasi dan sudah cukup untuk bacaan pertama. Build desktop memberi antarmuka Ren'Py lengkap dengan rollback, yang lebih cocok untuk berburu rute dan mengulang permainan.",
      },
      {
        question: 'Apakah versi browser bermasalah?',
        answer:
          'Beberapa macet khusus browser sudah diperbaiki developer, termasuk yang terjadi di tenda Ticket Taker. Melewati adegan terlalu cepat masih bisa membuat efek visual tidak sinkron.',
      },
    ],
    related: ['download', 'save', 'faq', 'endings', 'characters'],
  },
  faq: {
    slug: 'faq',
    title: 'Pertanyaan yang Sering Diajukan',
    metaTitle: 'FAQ The Freak Circus: Bermain, Menyimpan, Ending, Karakter, dan Unduhan',
    metaDescription:
      'Jawaban atas pertanyaan paling umum tentang The Freak Circus — tempat bermain, cara menyimpan, berapa banyak ending yang ada, tinggi karakter, dan apa yang masih dikembangkan.',
    intro:
      'Ini versi ringkas dari situs ini. Kalau suatu pertanyaan punya panduan tersendiri, halaman ini memberikan jawabannya dan menautkan ke detailnya, bukan mengulanginya. Kalau jawabannya bergantung pada sesuatu yang belum dipublikasikan developer, hal itu dikatakan terus terang, bukan diisi dengan tebakan yang terdengar masuk akal.',
    quickFacts: [
      { label: 'Versi saat ini', value: 'Prototipe versi 0.2' },
      { label: 'Ending yang bisa dimainkan', value: '1', note: '"Missing" — ending buruk' },
      { label: 'Ending direncanakan', value: '4' },
      { label: 'Platform', value: '5', note: 'Browser, Windows, macOS, Linux, Android' },
      { label: 'Bahasa', value: '3', note: 'Inggris, Portugis, Tionghoa Sederhana' },
      { label: 'Day 3', value: 'Dalam pengembangan, tanpa tanggal rilis' },
    ],
    sections: [
      {
        heading: 'Bermain dan mengunduh',
        paragraphs: [
          'Semua hal tentang menjalankan game ada di panduan unduhan. Versi singkatnya: halaman itch.io resmi adalah satu-satunya sumber resmi, harganya ditentukan sendiri, dan halaman itu menyediakan permainan di browser serta build desktop dan Android.',
        ],
      },
      {
        heading: 'Menyimpan dan melanjutkan',
        paragraphs: [
          "Game ini adalah rilis Ren'Py standar, jadi penyimpanan berjalan lewat antarmuka normal mesin. Menu juga memungkinkanmu langsung masuk ke Day 2 tanpa mengulang Day 1. Detail yang beredar luas di internet tapi tidak pernah dikonfirmasi developer — jalur simpan yang tepat, jumlah slot, dan transfer browser-ke-desktop yang pasti berhasil — ditandai sebagai belum terverifikasi di panduan penyimpanan.",
        ],
      },
      {
        heading: 'Ending dan rute',
        paragraphs: [
          'Satu ending bisa dimainkan di build saat ini, dan itu ending buruk. Empat lagi diumumkan sebagai rencana: Pierrot, Harlequin, Protagonis, dan "All together". Pilihan rute adalah Pierrot, Harlequin, keduanya, atau tidak keduanya — tidak ada rute Jester, Doctor, atau Ticket Taker.',
        ],
      },
      {
        heading: 'Karakter dan ukuran tubuh',
        paragraphs: [
          'Developer menerbitkan tabel tinggi yang mencakup lima karakter yang sudah diperkenalkan, serta urutan usia tersendiri. Dua daftar itulah satu-satunya ukuran tubuh resmi. Usia pasti, sebagian besar tanggal lahir, dan tinggi Columbina beredar luas di internet tanpa sumber dari pihak pertama.',
        ],
      },
      {
        heading: 'Yang masih dikembangkan',
        paragraphs: [
          'Versi 0.2 memuat seluruh perkenalan lima karakter dan satu ending buruk. Day 3 sedang dikembangkan secara aktif, dengan pembaruan pengembangan yang menyebut bagian beta yang selesai sekitar 30–40% dari update. Belum ada tanggal rilis yang diumumkan, dan developer meminta agar klaim tanggal dari luar tidak diulang.',
        ],
      },
      {
        heading: 'Tentang situs ini',
        paragraphs: [
          'Ini adalah panduan fans independen. Situs ini bukan developer, penerbit, maupun saluran dukungan resmi. Developer telah mengonfirmasi tidak ada server Discord resmi, jadi setiap server dan akun yang tidak ditautkan dari halaman itch.io, Tumblr, Patreon, atau Bluesky resmi harus dianggap dikelola fans atau tidak resmi.',
        ],
      },
    ],
    faq: [
      {
        question: 'Di mana saya bisa memainkan The Freak Circus?',
        answer:
          'Di halaman itch.io milik developer, yang merupakan satu-satunya halaman resmi untuk game ini. Halaman itu menyediakan permainan di browser serta build yang bisa diunduh untuk Windows, macOS, Linux, dan Android.',
      },
      {
        question: 'Bagaimana cara mengunduh The Freak Circus dengan aman?',
        answer:
          'Gunakan hanya halaman itch.io resmi. Developer meminta agar game ini tidak diposting ulang, jadi situs lain mana pun yang menawarkan build lengkap paling-paling tidak berlisensi.',
      },
      {
        question: 'Bagaimana cara menyimpan The Freak Circus?',
        answer:
          "Ini rilis Ren'Py, jadi memakai antarmuka simpan dan muat standar mesin, lengkap dengan simpan cepat dan rollback.",
      },
      {
        question: 'Bisakah saya melanjutkan dari Day 2 tanpa mengulang Day 1?',
        answer: 'Bisa. Menu memuat tombol Day 2 dengan pengantar singkat.',
      },
      {
        question: 'Berapa banyak ending yang ada?',
        answer:
          'Satu bisa dimainkan sekarang — ending buruk "Missing". Empat lagi direncanakan: Pierrot, Harlequin, Protagonis, dan "All together". Tidak ada jumlah total yang diumumkan.',
      },
      {
        question: 'Bagaimana cara mendapatkan ending Harlequin?',
        answer:
          'Belum bisa — ending itu direncanakan dan belum diimplementasikan. Daftar pemicu klik demi klik yang terbit pasti menggambarkan build yang tidak ada secara publik.',
      },
      {
        question: 'Tinggi Pierrot berapa?',
        answer: '198 cm, sekitar 6 ft 5.95 in, menurut tabel tinggi yang dipublikasikan developer.',
      },
      {
        question: 'Karakter mana yang paling tua?',
        answer: 'Ticket Taker, dalam urutan usia resmi: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Kenapa Pierrot tidak bisa bicara?',
        answer:
          'Sinkronis resmi menyebutnya sebagai "the silent yandere" — "yandere" yaitu tipe karakter yang sangat obsesif dan cenderung posesif — dan keheningan itu adalah penggambaran karakter yang disengaja, bukan sekadar tidak adanya voice actor. Detail tentang alasan di dalam cerita berasal dari materi cerita, bukan dari pernyataan developer.',
      },
      {
        question: 'Kapan Day 3 keluar?',
        answer:
          'Tidak ada tanggal yang diumumkan. Day 3 sedang dikembangkan secara aktif, dengan pekerjaan beta yang disebut sekitar 30–40% dari update.',
      },
      {
        question: 'Apakah ada server Discord resmi?',
        answer:
          'Tidak. Developer telah mengonfirmasi tidak ada server resmi, dan setiap server komunitas harus dianggap dikelola fans.',
      },
      {
        question: 'Bisakah saya membuat fan art karakter game ini?',
        answer:
          'Bisa. Fan art adalah bagian normal dari fandom. Situs ini mengkurasi karya komunitas dengan izin dan atribusi kreatornya, dan tidak menyimpan file game maupun mengemas ulang game.',
      },
    ],
    related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
  },
};
