import type { BlogPost } from './blog-posts';

// Indonesian edition of the blog posts.
//
// This mirrors POSTS_EN in blog-posts.ts: same slugs, same order, same dates,
// same images, same HTML structure (heading/list counts and order). The English
// version is the source of truth; this file only re-expresses it in Indonesian
// prose. Every hedge in the English text survives the translation — planned
// stays planned, unverified stays unverified.

export const POSTS_ID: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'Walkthrough Hari 2 The Freak Circus: Tenda, Save, dan Ending Buruk',
    description: 'Panduan versi 0.2 dengan penanda spoiler tentang pembukaan di ruang tahanan, tenda sirkus, perkenalan karakter, titik save, dan cara paling aman menjelajahi Hari 2 tanpa keliru menganggap variasi adegan sebagai rute yang sudah selesai.',
    date: '2026-09-02',
    tags: ['Hari 2', 'Walkthrough', 'Versi 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Jajaran karakter The Freak Circus berkumpul mengelilingi protagonist',
    readingTime: 'Bacaan 10 menit',
    content: `
      <p class="article-lede">Hari 2 adalah titik ketika <em>The Freak Circus</em> berhenti terasa seperti perkenalan yang mencemaskan dan mulai mengatupkan tangannya di sekitar protagonist. Pertanyaan yang berguna bukanlah "rute lengkap mana yang harus saya kunci?" — tidak ada ending Pierrot atau Harlequin yang sudah selesai di versi 0.2 — melainkan "di mana saya harus save agar bisa melihat variasi yang tersedia tanpa memainkan ulang seluruh prototipe?"</p>
      <div class="walkthrough-note"><strong>Batas panduan</strong><p>Artikel ini membahas prototipe publik versi 0.2 dan memuat spoiler cerita. Daftar resmi mengonfirmasi lima perkenalan karakter dan satu ending buruk. Daftar itu tidak mengonfirmasi banyak rute yang sudah selesai, sistem koleksi, atau menu adegan tersembunyi yang bisa dibuka.</p></div>

      <h2>Buatlah save-save ini sebelum tekanan dimulai</h2>
      <p>Hari 2 cukup pendek untuk dimainkan ulang, tetapi pembukaannya cukup panjang sehingga mengulanginya hanya demi menguji satu respons menjadi melelahkan. Simpan di slot-slot terpisah alih-alih menimpa save terbaru:</p>
      <ol class="walkthrough-steps">
        <li><strong>HARI 2 — MULAI:</strong> momen pertama ketika hari yang baru memberi kamu kendali.</li>
        <li><strong>RUANG TAHANAN:</strong> sebelum memutuskan respons yang menegangkan seputar Pierrot atau Harlequin.</li>
        <li><strong>KEMBALI KE SIRKUS:</strong> sebelum memasuki tenda atraksi.</li>
        <li><strong>CABANG TENDA:</strong> satu slot baru untuk setiap tenda atau perkenalan karakter.</li>
        <li><strong>ADEGAN AKHIR:</strong> sebelum pilihan apa pun yang terdengar final, menantang, atau sengaja berbahaya.</li>
      </ol>
      <p>Cara ini lebih andal daripada satu save bergulir. Jika sebuah adegan berakhir lebih cepat dari dugaan — atau mencapai ending buruk — kamu tetap punya titik bersih hanya beberapa menit ke belakang.</p>

      <h2>Pembukaan ruang tahanan: baca kontrasnya, bukan meter afeksi</h2>
      <p>Hari ini dibuka dengan protagonist ditahan di sebuah ruangan asing. Pierrot membingkai tindakannya sebagai perlindungan; kedatangan Harlequin mengubah klaim itu menjadi konfrontasi. Adegan ini penting karena menegaskan betapa berbedanya kedua rival itu menjalankan kendali, bukan karena memintamu memilih rute romansa permanen.</p>
      <p>Untuk playthrough pertama, jawablah dengan cara yang terasa wajar dan teruslah maju. Saat replay, kembalilah ke save <strong>RUANG TAHANAN</strong> dan ubah satu respons pada satu waktu. Dengan begitu menjadi jelas apakah kamu menemukan variasi adegan yang sungguhan atau sekadar kalimat yang berbeda.</p>
      <div class="walkthrough-tip"><strong>Jangan membaca berlebihan properti-adegan.</strong><p>Topeng dan tiket merah adalah objek cerita yang bermakna, tetapi versi 0.2 tidak menetapkan inventaris konvensional tempat mengumpulkannya untuk membuka ending di masa depan. Warna tiket memang membawa makna yang terkonfirmasi dalam game ini — merah dan hijau menandai pilihan yang dibuat protagonist, dan merah muda berada di bawah jajaran karakter utama — tetapi itu sinyal percabangan, bukan daftar koleksi. Perlakukan topeng sebagai objek adegan kecuali game itu sendiri menyajikan interaksi lanjutan.</p></div>

      <h2>Kembali ke sirkus: cara menjelajahi tenda</h2>
      <p>Bagian sirkus memperluas jajaran karakter lewat ruang-ruang bertema. Strategi terbaiknya sederhana: save sebelum masuk, tonton adegannya sampai tuntas tanpa men-skip, lalu gunakan save itu untuk variasi berikutnya. Jangan berasumsi bahwa perkenalan karakter adalah rute yang lengkap.</p>

      <h3>Tenda biru — Ticket Taker dan cermin-cermin</h3>
      <p>Rangkaian cermin dibangun agar informasi visual terasa tidak dapat dipercaya. Perhatikan saksama pantulan mana yang berbicara dan bagaimana Ticket Taker membingkai apa yang kamu lihat. Tidak perlu memecahkan setiap gambar sebagai teka-teki pada kunjungan pertama; tujuan praktisnya adalah menuntaskan perkenalan itu dan mempertahankan satu save untuk pembacaan kedua yang lebih pelan.</p>

      <h3>Tenda cyan — Doctor</h3>
      <p>Perkenalan Doctor paling deras menyuguhkan pembatasan ruang gerak, pemeriksaan, dan citra horor medis. Jika tema-tema itu membuatmu tidak nyaman, inilah saatnya memakai kontrol skip dengan hati-hati atau berhenti sejenak. Dari sudut pandang rute, kepatuhan atau perlawanan bisa mengubah tekstur interaksinya, tetapi keduanya tidak boleh diiklankan sebagai rute atau ending Doctor yang sudah selesai.</p>

      <h3>Ruang pertunjukan ungu atau hitam — Jester</h3>
      <p>Pertunjukan Jester memuat sebagian lore terpadat di Hari 2. Biarkan dialog berjalan normal alih-alih fast-skip. Lebih penting lagi, perlakukan pertunjukan itu sebagai cerita yang diceritakan <em>di dalam</em> game: ia menyingkap bagaimana sirkus membicarakan masa lalunya, tetapi ia tidak otomatis merupakan kisah yang netral dan lengkap tentang motif setiap karakter.</p>

      <h2>Cara melindungi permainanmu dari ending buruk</h2>
      <p>Deskripsi versi resmi mencantumkan satu ending buruk. Panduan yang hati-hati seharusnya tidak mengarang "jawaban benar" universal tanpa uji pilihan yang bisa direproduksi, jadi gunakan game itu sendiri sebagai sinyal:</p>
      <ul>
        <li>Save sebelum respons yang terang-terangan berbahaya atau terdengar final.</li>
        <li>Jika cerita memotong ke sebuah ending atau kembali ke menu, muat ulang save cabang terbaru.</li>
        <li>Ubah lebih dulu hanya respons bermakna yang terakhir; jangan langsung memulai ulang Hari 2.</li>
        <li>Pertahankan save ending buruk jika kamu menginginkan catatan lengkap tentang prototipe saat ini.</li>
      </ul>
      <p>Yang paling penting: mencapai ending buruk tidak berarti save-nya rusak. Itu berarti kamu menemukan salah satu dari sedikit hasil yang secara eksplisit dinyatakan tersedia oleh build saat ini.</p>

      <h2>Rute dua putaran yang bersih</h2>
      <div class="walkthrough-route"><div><strong>Putaran 1 — cerita</strong><p>Main terus-menerus, pilih secara wajar, dan save hanya di lima titik pemeriksaan di atas. Hindari panduan selama adegan-adegan itu berlangsung.</p></div><div><strong>Putaran 2 — cakupan</strong><p>Kembali ke save tenda dan save adegan akhir. Balikkan satu respons penting pada satu waktu dan catat apa yang benar-benar berubah.</p></div></div>
      <p>Metode ini kurang glamor dibanding diagram raksasa "semua ending", tetapi cocok dengan build yang benar-benar ada. Versi 0.2 adalah prototipe yang berat pada perkenalan; ia bukan koleksi rute yang sudah selesai.</p>

      <h2>Apa yang dianggap menyelesaikan Hari 2?</h2>
      <p>Kamu sudah mengikuti sampai titik terkini saat mencapai akhir cerita publik saat ini, bukan saat membuka ending romansa final yang tidak ada. Permainan yang menyeluruh seharusnya meninggalkanmu dengan:</p>
      <ul class="walkthrough-checklist">
        <li>konflik ruang tahanan ditonton tanpa men-skip;</li>
        <li>save kembali ke sirkus tetap terpelihara;</li>
        <li>perkenalan Ticket Taker, Doctor, dan Jester sudah dilihat;</li>
        <li>ending buruk sudah tercatat atau aman terhindari;</li>
        <li>satu save akhir yang bersih siap untuk pembaruan resmi berikutnya.</li>
      </ul>
      <p>Hari 3 masih dalam pengembangan. Simpan save akhir ini, tetapi periksa catatan rilis mendatang sebelum berasumsi pilihan versi 0.2 akan terpetakan tanpa perubahan ke build publik berikutnya.</p>

      <h2>Klaim yang sengaja tidak dibuat panduan ini</h2>
      <p>Beberapa walkthrough mendeskripsikan banyak ending yang sudah selesai, galeri adegan tersembunyi, pin koleksi dengan efek mekanis di masa depan, atau rute yang sepenuhnya tersedia untuk setiap karakter yang diperkenalkan. Halaman resmi saat ini tidak mengonfirmasi satu pun dari hal itu sebagai fitur yang sudah selesai. Untuk status terverifikasi, gunakan <a href="/id/day-3">pelacak Hari 3</a> dan <a href="/id/wiki">Wiki versi 0.2</a> di situs ini.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'Walkthrough Hari 1 The Freak Circus: Playthrough Pertama yang Hati-hati',
    description: 'Panduan praktis versi 0.2 tentang bertemu Pierrot, membaca rivalitas awal, menempatkan save yang berguna, dan mencapai Hari 2 tanpa mengejar rute yang belum selesai.',
    date: '2026-09-02',
    tags: ['Hari 1', 'Walkthrough', 'Pemain baru'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Sebuah adegan dari prototipe saat ini The Freak Circus',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Hari 1 bekerja paling baik ketika kamu membiarkannya terasa tidak nyaman. Hari ini memperkenalkan Pierrot dalam perjalanan biasa ke tempat kerja, lalu perlahan mengubah pertemuan kecil menjadi awal sebuah rivalitas berbahaya. Kamu tidak membutuhkan lembar jawaban sempurna untuk mencapai Hari 2; kamu butuh beberapa save yang masuk akal dan gambaran jelas tentang apa yang bisa — dan tidak bisa — diselesaikan prototipe saat ini.</p>
      <div class="walkthrough-note"><strong>Batas panduan</strong><p>Ini adalah panduan dengan penanda spoiler untuk versi publik 0.2. Panduan ini menjelaskan progresi dan strategi replay tanpa berpura-pura bahwa Pierrot, Harlequin, atau jajaran karakter yang lebih luas sudah memiliki ending yang selesai.</p></div>
      <div class="walkthrough-note"><strong>Tentang penyimpanan</strong><p>Developer belum mempublikasikan lokasi save, jumlah slot, perilaku autosave, maupun prosedur pemindahan dari browser ke desktop untuk game ini. Nama-nama save di bawah adalah label yang kamu berikan sendiri pada slot-slotmu dengan antarmuka simpan dan muat standar milik engine, bukan nama file resmi.</p></div>

      <h2>Sebelum mulai: siapkan permainan yang benar-benar bisa kamu kunjungi lagi</h2>
      <p>Peringatan konten resmi mencakup darah, kematian, pelecehan, penculikan, penggunaan obat tanpa persetujuan, dominasi fisik, dan kontak yang tidak dikehendaki. Hari 1 tidak menampilkan setiap peringatan pada intensitas maksimum, tetapi menetapkan nadanya. Putuskan apakah tema-tema itu cocok untukmu sebelum mengejar kelengkapan.</p>
      <p>Gunakan tiga slot bernama sejak awal:</p>
      <ol class="walkthrough-steps">
        <li><strong>HARI 1 — BERSIH:</strong> sebelum pilihan substantif pertama.</li>
        <li><strong>PIERROT — JALAN:</strong> sebelum memilih cara merespons selama pertemuan dalam perjalanan ke tempat kerja.</li>
        <li><strong>HARI 1 — AKHIR:</strong> sebelum gugusan adegan terakhir yang mengarahkan cerita menuju Hari 2.</li>
      </ol>
      <p>Jangan terus menimpa slot pertama. Titik pemeriksaan yang bersih lebih berguna daripada tangkapan layar pilihan orang lain, karena kamu bisa menguji build saat ini sendiri.</p>

      <h2>Pertemuan di jalan dengan Pierrot</h2>
      <p>Perkenalan Pierrot adalah poros emosional Hari 1. Adegan ini menanyakan bagaimana protagonist bereaksi terhadap orang asing yang sunyi yang sudah diperlakukan sebagai orang luar. Tulisannya bekerja lebih keras ketika kamu memilih respons yang sanggup kamu pegang, alih-alih mencoba merekayasa balik "skor cinta" yang tak terlihat.</p>
      <p>Untuk putaran pertama, jaga konsistensi: jika kamu mendekatinya dengan kepedulian, pertahankan nada itu sepanjang adegan; jika kamu curiga, biarkan rasa tidak nyaman itu tinggal. Pada putaran kedua, muat <strong>PIERROT — JALAN</strong> dan ubah hanya respons besar pertama. Bandingkan dialog dan bahasa tubuhnya alih-alih berasumsi cabang itu telah membuka rute yang selesai.</p>
      <div class="walkthrough-tip"><strong>Saran penyelesaian</strong><p>Jangan memulai ulang hanya karena sebuah respons terasa canggung. Hari 1 memang dirancang untuk terus berjalan melewati rasa tidak nyaman. Save-scumming di setiap kalimat merusak ritme dan biasanya memberitahumu lebih sedikit daripada satu playthrough tanpa gangguan.</p></div>

      <h2>Ketika rivalitas mulai melebar</h2>
      <p>Harlequin bukan sekadar alternatif yang lebih cerah untuk Pierrot. Kehadirannya mengubah makna pertemuan pertama dengan mengubah perhatian menjadi kompetisi. Perhatikan bagaimana masing-masing penampil menangani jarak, persetujuan, dan keraguan protagonist. Kontras-kontras itu lebih penting di Hari 1 daripada berusaha menyatakan siapa pemenangnya.</p>
      <p>Jajaran karakter sirkus yang lebih luas termasuk ke dalam busur perkenalan prototipe. Melihat Jester, Doctor, atau Ticket Taker tidak berarti kamu telah memasuki rute romansa yang lengkap. Halaman resmi hanya mengatakan bahwa lima perkenalan karakter tersedia; ending yang direncanakan tetap belum selesai.</p>

      <h2>Cara mencapai Hari 2</h2>
      <p>Hari 2 sudah menjadi bagian dari versi 0.2. Ia bukan unduhan terpisah dan tidak memerlukan kode rute rahasia. Lanjutkan cerita setelah adegan-adegan akhir Hari 1 dan biarkan transisinya berjalan. Jika game kembali ke titik yang lebih awal secara tak terduga:</p>
      <ul>
        <li>pastikan layar judul menampilkan build 0.2 saat ini;</li>
        <li>muat <strong>HARI 1 — AKHIR</strong> alih-alih memulai ulang;</li>
        <li>hindari melewati transisi atau adegan animasi dengan sangat cepat;</li>
        <li>pada build browser, biarkan tab tetap terbuka selagi adegan selesai dimuat, karena save browser tersimpan di penyimpanan browser.</li>
      </ul>

      <h2>Strategi putaran pertama terbaik sengaja dibuat sederhana</h2>
      <div class="walkthrough-route"><div><strong>Putaran pertama</strong><p>Pilih secara wajar, jangan melewati dialog, dan biarkan ketegangan terbangun. Tujuanmu adalah memahami para karakter, bukan mengoptimalkan sebuah rute.</p></div><div><strong>Putaran kedua</strong><p>Kembali ke save jalan dan ubah satu respons. Gunakan save akhir untuk variasi akhir Hari 1 mana pun alih-alih memainkan ulang dari layar judul.</p></div></div>

      <h2>Kesalahan umum di Hari 1</h2>
      <h3>Mencari "ending baik Pierrot"</h3>
      <p>Versi 0.2 tidak memuat ending Pierrot yang sudah selesai. Respons yang hangat bisa mengubah nuansa sebuah adegan tanpa mengubah prototipe menjadi rute yang lengkap.</p>
      <h3>Berasumsi setiap kalimat mengubah Hari 2</h3>
      <p>Sebagian dialog ada untuk membangun suara dan suasana. Kecuali dua permainan menghasilkan perubahan yang bisa direproduksi, jangan angkat sebuah kalimat menjadi kunci rute.</p>
      <h3>Hanya memakai satu slot save</h3>
      <p>Ini cara termudah mengubah replay singkat menjadi restart penuh. Pertahankan titik pemeriksaan jalan dan akhir Hari 1.</p>
      <h3>Melewatkan bagian-bagian yang tidak nyaman</h3>
      <p>Tanda-tanda bahaya dalam cerita adalah bagian dari penggambaran karakter. Jika kontennya masih bisa kamu tanggung, membaca momen-momen itu dengan saksama membuat Hari 2 jauh lebih mudah dipahami. Jika tidak, berhenti adalah pilihan yang sah.</p>

      <h2>Daftar periksa penyelesaian Hari 1</h2>
      <ul class="walkthrough-checklist">
        <li>kamu bertemu Pierrot dalam perjalanan ke tempat kerja;</li>
        <li>kamu mempertahankan satu save sebelum respons besar pertama;</li>
        <li>kamu melihat rivalitas inti mulai terbentuk;</li>
        <li>kamu mencapai transisi menuju Hari 2;</li>
        <li>kamu tidak keliru menganggap perkenalan sebagai ending yang sudah selesai.</li>
      </ul>
      <p>Setelah butir-butir itu tercentang, lanjutkan dengan <a href="/id/blog/day-2-walkthrough-save-strategy">walkthrough Hari 2</a>. Untuk konteks karakter tanpa spekulasi rute, baca profil <a href="/id/characters/pierrot">Pierrot</a> dan <a href="/id/characters/harlequin">Harlequin</a> yang terverifikasi.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'Apa yang Sebenarnya Ada di Prototipe The Freak Circus Saat Ini',
    description: 'Panduan ringkas minim spoiler untuk versi 0.2: apa yang bisa dimainkan sekarang, apa yang masih dikembangkan, dan apa yang sebaiknya diharapkan pemain baru.',
    date: '2026-08-15',
    tags: ['Versi 0.2', 'Pemain baru', 'Panduan game'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'Karya seni sampul The Freak Circus',
    readingTime: 'Bacaan 5 menit',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> paling tepat didekati sebagai pembuka acara yang dipoles, bukan novel visual yang sudah tuntas dengan rute lengkap. Build publik saat ini adalah versi 0.2 dan masih berlabel prototipe.</p>
      <h2>Jawaban singkatnya</h2>
      <p>Build yang tersedia memperkenalkan konflik inti dan lima anggota jajaran karakter. Build itu memuat satu ending buruk, sementara naskah yang lebih besar beserta kesimpulan Pierrot, Harlequin, protagonist, dan kesimpulan bersama yang direncanakan masih dalam pengembangan.</p>
      <p>Pembedaan itu penting. Sebuah karakter muncul dalam prototipe tidak otomatis berarti karakter itu sudah memiliki rute romansa yang lengkap atau ending final.</p>
      <h2>Seperti apa sesi pertama</h2>
      <p>Daftar resmi mendeskripsikan sesi rata-rata sebagai sekitar setengah jam. Itu membuat prototipe mudah dicicipi, tetapi juga berarti playthrough pertama dirancang untuk membangun nada, hubungan, dan rasa bahaya — bukan untuk menuntaskan setiap alur cerita.</p>
      <ul><li>Harapkan karya seni karakter dan latar yang orisinal.</li><li>Harapkan variasi adegan yang bermakna dan satu ending buruk yang tersedia.</li><li>Jangan mengharapkan setiap ending yang direncanakan sudah bisa dimainkan.</li></ul>
      <h2>Kenali batas konten sebelum bermain</h2>
      <p>Ini adalah cerita horor psikologis khusus dewasa. Peringatannya mencakup darah, kematian, pelecehan, penculikan, pemberian obat, dominasi fisik, dan kontak tanpa persetujuan. Baca peringatan itu sebelum memutuskan apakah game ini cocok untukmu.</p>
      <h2>Cara yang lebih baik memakai panduan fans</h2>
      <p>Periksa nomor build sebelum mengikuti saran rute apa pun, simpan save bersih sebelum pilihan besar, dan perlakukan tangkapan layar atau bagan pilihan tanpa versi yang teruji sebagai interpretasi komunitas. Panduan yang berguna seharusnya memberitahumu apa yang diamati, pada build mana, dan di mana spoiler dimulai.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Browser atau Unduhan? Memilih Cara Bermain yang Tepat',
    description: 'Bandingkan build browser dengan unduhan lokal Windows, macOS, Linux, dan Android, lalu siapkan file save sebelum berganti versi.',
    date: '2026-08-14',
    tags: ['Unduhan', 'Browser', 'Instalasi'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Sebuah adegan dari build browser The Freak Circus',
    readingTime: 'Bacaan 4 menit',
    content: `
      <p class="article-lede">Ceritanya sama, tetapi cara bermain terbaik bergantung pada seberapa banyak penyiapan yang kamu inginkan dan apakah kamu membutuhkan salinan lokal yang portabel.</p>
      <h2>Pilih build browser untuk awal yang tercepat</h2>
      <p>Versi HTML5 adalah opsi paling sederhana untuk lihatan pertama: buka game, biarkan halaman memuat, dan mulai tanpa memasang arsip apa pun. Ini juga berguna saat kamu bermain di mesin bersama dan tidak ingin menyimpan file game.</p>
      <p>Penyimpanan browser bisa dibersihkan oleh alat privasi atau reset browser, jadi itu bukan tempat terbaik untuk save yang tidak boleh hilang.</p>
      <h2>Pilih unduhan untuk salinan lokal yang permanen</h2>
      <p>Paket Windows, macOS, Linux, dan Android tercantum untuk versi 0.2. Build lokal menghindari batas penyimpanan browser dan biasanya menjadi opsi yang lebih nyaman untuk playthrough berulang.</p>
      <ul><li>Sesuaikan paket dengan sistem operasimu.</li><li>Ekstrak arsip desktop sebelum menjalankan game.</li><li>Backup save sebelum mengganti build yang lebih lama.</li></ul>
      <h2>Mengapa sumber itu penting</h2>
      <p>Gunakan daftar itch.io milik developer alih-alih repost atau installer yang dikemas ulang. Developer menyatakan daftar itu sebagai halaman distribusi resmi dan meminta pemain tidak memakai salinan yang diunggah ulang.</p>
      <h2>Jika terjadi masalah</h2>
      <p>Pertama pastikan nomor build dan platformnya. Untuk masalah browser, coba peramban mutakhir keluarga Chrome atau Edge dan matikan terjemahan halaman yang agresif untuk tab game. Untuk arsip desktop, ekstrak sepenuhnya dan biarkan aplikasi tetap bersama file bawaannya.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Menunggu Hari 3 Tanpa Terjebak Rumor Tanggal Rilis',
    description: 'Daftar periksa praktis untuk memisahkan kemajuan pengembangan yang nyata dari hitung mundur, tebakan, dan klaim daur ulang tentang bab berikutnya.',
    date: '2026-08-13',
    tags: ['Hari 3', 'Pembaruan', 'Pemeriksaan fakta'],
    image: '/images/home/characters.webp',
    imageAlt: 'Karya seni karakter The Freak Circus',
    readingTime: 'Bacaan 5 menit',
    content: `
      <p class="article-lede">Hari 3 sedang dikembangkan, tetapi aktivitas pengembangan bukanlah hal yang sama dengan tanggal rilis yang terkonfirmasi. Memisahkan dua gagasan itu adalah cara termudah menghindari halaman hitung mundur yang menyesatkan dan rumor daur ulang.</p>
      <h2>Apa yang benar-benar sudah mapan</h2>
      <p>Halaman game publik mengatakan bahwa cerita berlanjut selama satu hari dalam game lagi dan bahwa bagian ini masih dikerjakan. Halaman itu tidak mempublikasikan hari rilis. Sampai pengumuman rilis bertanggal muncul, tanggal pasti apa pun harus diperlakukan sebagai spekulasi.</p>
      <h2>Sinyal kemajuan berguna — tetapi terbatas</h2>
      <p>Pemrograman dialog, karya seni baru, perubahan latar, pengujian, dan pratinjau adegan semuanya menunjukkan bahwa pekerjaan terus berjalan. Tak satu pun dari tonggak itu, sendiri-sendiri, memberi tahu kapan build publik yang stabil akan siap.</p>
      <h2>Jalankan pemeriksaan rumor cepat</h2>
      <ol><li>Carilah tanggal publikasi yang pasti dan penulis yang jelas identitasnya.</li><li>Periksa apakah kalimatnya mengatakan "sudah dirilis" atau hanya "dalam pengembangan".</li><li>Pisahkan tangkapan layar pekerjaan yang sedang berjalan dari build yang bisa diunduh.</li><li>Tolak halaman yang mengubah estimasi fans menjadi hitung mundur.</li></ol>
      <h2>Manfaatkan masa tunggu dengan baik</h2>
      <p>Simpan save kamu saat ini, catat build mana yang membuatnya, dan hindari menimpa slot playthrough pertama. Ketika build berikutnya tiba, baca catatan perubahannya sebelum berasumsi saran rute lama masih berlaku.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Tinggi dan Urutan Usia Pierrot di The Freak Circus',
    description: 'Pierrot tingginya 198 cm dan ketiga dari lima dalam urutan usia resmi dihitung dari yang tertua — apa yang dipublikasikan developer, dan apa yang ditambahkan fandom di atasnya.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Tinggi badan', 'Fakta karakter'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Pierrot, badut sunyi di pusat The Freak Circus',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Pierrot tingginya 198 cm, dan dalam urutan usia yang dipublikasikan developer ia berada ketiga dari lima, dihitung dari yang tertua. Kedua angka itu berasal dari materi resmi yang sama dengan bagan jajaran karakter lainnya, dan di antara keduanya mereka menuntaskan sebagian besar argumen yang beredar daring tentang ukuran dan usianya — sembari menyisakan dua kekosongan yang diisi sendiri oleh fandom.</p>
      <div class="walkthrough-note"><strong>Apa yang menjadi dasar artikel ini</strong><p>Tinggi, urutan usia, dan peringkat kekuatan berasal dari bagan yang dipublikasikan developer dan jawaban AMA. Tidak ada usia buatan fans, tanggal lahir, atau angka estimasi yang diperlakukan sebagai fakta di sini. Materi yang berasal dari wiki fandom diberi label turunan penggemar, bukan resmi.</p></div>

      <h2>Tinggi: 198 cm</h2>
      <p>Developer menerbitkan bagan tinggi bersandingan dengan referensi sprite yang dipakai saat menggambar jajaran karakter. Entri Pierrot tertulis 198 cm, yang setara kira-kira 6 ft 5,95 inci. Itu menempatkannya sebagai tertinggi kedua dari lima karakter yang diperkenalkan: sembilan sentimeter di bawah Doctor yang 207 cm, dan sebelas sentimeter di atas Harlequin yang 187 cm.</p>
      <p>Karena bagan itu ada sebagai referensi menggambar, bukan sebagai kumpulan angka yang ditulis belakangan, ia adalah jenis pengukuran yang tetap stabil. Dua hal mengikuti darinya. Seluruh jajaran yang diperkenalkan hanya membentang 24 cm, dari 207 milik Doctor hingga 183 milik Ticket Taker — rentang yang sempit dan berguna sebagai pemeriksa atas fan art yang menggambarkan satu karakter menjulang di atas yang lain. Dan jarak sebelas sentimeter antara kedua tokoh romansa itu nyata, itulah sebabnya wiki fandom menganggapnya berarti bagi cara Pierrot dan Harlequin disandingkan satu sama lain.</p>
      <h2>Urutan usia: ketiga dari lima, dihitung dari yang tertua</h2>
      <p>Sebuah jawaban AMA terpisah menanggapi permintaan mengurutkan jajaran karakter dari yang tertua ke yang termuda dan memberi urutan yang tetap:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — pertama, yang tertua.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — ketiga.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — terakhir, yang termuda.</li>
      </ol>
      <p>Dengan demikian Pierrot berada di tengah rombongan: lebih tua daripada Jester dan Harlequin, lebih muda daripada Ticket Taker dan Doctor. Dalam jajaran yang dibangun di sekitar rivalitas antara kedua ujung daftar itu, berada di urutan ketiga berarti ia lebih tua daripada pria yang ia persaingi dan lebih muda daripada dua sosok yang menopang sirkus.</p>
      <h3>Apa yang tidak dikatakan oleh posisi "ketiga"</h3>
      <p>Itu tidak memberikan angka, dan tidak memberikan selisih. Urutan relatif hanya mengatakan bahwa satu karakter lebih tua dari yang lain; dua karakter bisa bersebelahan dalam daftar namun tetap berjauhan banyak tahun. Tidak ada usia numerik yang pernah dipublikasikan untuk kelima karakter itu, sehingga urutan ini adalah satu-satunya informasi usia yang pernah dirilis developer. Itu penting karena angka spesifik adalah hal yang paling sering ditambahkan situs fans pada jajaran ini, dan angka-angka itu hampir tidak pernah punya sumber.</p>
      <div class="walkthrough-tip"><strong>Cara memeriksa klaim tinggi atau usia yang kamu temukan di tempat lain</strong><p>Bertanyalah tiga hal. Apakah sumbernya menunjuk bagan developer, jawaban AMA, atau postingan resmi? Apakah ia membedakan angka yang dipublikasikan dari estimasi? Dan apakah ia memberitahumu informasi itu menjelaskan build yang mana? Panduan yang menjawab ketiganya bisa dipercaya soal detail; yang tidak menjawab satu pun hanyalah hiasan di atas tebakan orang lain.</p></div>

      <h2>Kekuatan adalah daftar yang terpisah</h2>
      <p>Developer juga menerbitkan peringkat kekuatan fisik murni, dan ia tidak mengikuti tinggi badan. Pierrot ada di urutan pertama — di atas Harlequin dan Jester yang seri di urutan kedua, lalu Doctor, lalu Ticket Taker di urutan terakhir.</p>
      <p>Pierrot yang sekaligus tertinggi kedua dan terkuat adalah penggambaran karakter yang disengaja, bukan kebetulan bagan. Sinopsis resmi menyebutnya "yandere yang sunyi" ("yandere" adalah istilah fandom untuk obsesi romantis yang bermuara pada kendali), dan karakter yang dominan secara fisik sekaligus nyaris tanpa suara adalah jenis ancaman tersendiri: bahayanya bukan bahwa ia akan mengumumkan diri, melainkan bahwa ia tidak perlu melakukannya. Deskripsi wiki fandom tentangnya sebagai sosok yang lembut dan sopan di permukaan sambil menguntit protagonist cocok dengan wujud itu, meskipun penggambaran khusus itu adalah turunan penggemar.</p>

      <h2>Apa yang terkonfirmasi dan apa yang ditambahkan</h2>
      <ul>
        <li><strong>Dikonfirmasi developer:</strong> tingginya 198 cm, posisi ketiganya dalam urutan usia, posisi pertamanya dalam peringkat kekuatan, deskripsinya sebagai "yandere yang sunyi", dan fakta bahwa ending romansa Pierrot direncanakan.</li>
        <li><strong>Dari build saat ini:</strong> penampilannya, adegan-adagannya, dan cara ia bereaksi terhadap protagonist lintas cabang.</li>
        <li><strong>Turunan penggemar:</strong> deskripsi kostum yang terperinci — topeng putih dengan celah vertikal hitam, mata keemasan, topi jester merah-hitam, jubah motley merah — alasan di dalam cerita untuk keheningannya, dan usia atau tanggal lahir spesifik apa pun yang dilekatkan padanya.</li>
      </ul>
      <p>Satu penjelasan kecil tentang kostum dan keheningan, karena keduanya sering salah dirangkum. Versi wiki fandom adalah bahwa aturan tentang tidak berbicara di depan umum diberlakukan oleh Jester, yang sangat dihormati Pierrot. Itu detail yang memuaskan dan konsisten dengan cara kedua karakter ditulis, tetapi berasal dari wiki alih-alih dari developer. Materi pihak pertama berhenti pada frasa "yandere yang sunyi" dan memperlakukan keheningan itu sebagai penggambaran karakter, bukan jalur suara yang hilang.</p>

      <h2>Mengapa angka-angka ini layak diperdulikan</h2>
      <p>Pengukuran adalah bagian lembar karakter yang paling mudah diperiksa sekaligus paling sering dikarang, dan game ini mengalami keduanya: bagan resmi yang benar-benar diterbitkan dan banyak angka yang tidak berasal darinya. Mengetahui Pierrot 198 cm dan tertua ketiga berarti kamu bisa melihat sekilas kapan sebuah wiki diam-diam menukarnya dengan angka lain — dan, lebih berguna lagi, kamu bisa membaca adegan-adagannya dengan gambaran yang akurat. Karakter 198 cm yang sekaligus terkuat dari kelima itu berperilaku berbeda di layar dibanding pria bertinggi rata-rata, dan penyutradaraan game atasnya bergantung pada kebenaran hal itu.</p>
      <p>Untuk gambaran lengkap seluruh jajaran, <a href="/id/characters/heights">panduan tinggi dan peringkat</a> memuat kelima karakter, dan <a href="/id/characters/pierrot">profil Pierrot</a> membahas status rutenya serta materi fandom secara lebih rinci.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Tinggi dan Urutan Usia Harlequin di The Freak Circus',
    description: 'Harlequin tingginya 187 cm dan yang termuda dari lima karakter yang diperkenalkan — angka yang dipublikasikan developer, dan klaim fans yang justru bertentangan dengannya.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Tinggi badan', 'Fakta karakter'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Harlequin, rival panggung Pierrot di The Freak Circus',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Harlequin tingginya 187 cm, terpendek dari lima karakter yang diperkenalkan, dan yang termuda dari kelima menurut urutan usia yang dipublikasikan developer. Kedua fakta itu terdokumentasi. Usia spesifik yang beredar untuknya di daring biasanya tidak — dan dalam banyak kasus usia itu bertentangan dengan satu-satunya pernyataan usia yang benar-benar pernah dibuat developer.</p>
      <div class="walkthrough-note"><strong>Cakupan dan sumber</strong><p>Tinggi, urutan usia, dan peringkat kekuatan diambil dari bagan yang dipublikasikan developer dan jawaban AMA. Deskripsi kostum, ringkasan kepribadian, serta usia atau tanggal lahir spesifik berasal dari wiki fandom dan ditandai sebagai turunan penggemar. Artikel ini tidak memperlakukan estimasi di dalam cerita sebagai hasil pengukuran.</p></div>

      <h2>Tinggi: 187 cm</h2>
      <p>Entri Harlequin dalam bagan tinggi developer tertulis 187 cm, kira-kira 6 ft 1,62 inci. Itu menjadikannya terpendek dari lima karakter yang diperkenalkan: 20 cm di bawah Doctor yang 207 cm, 11 cm di bawah Pierrot, 5 cm di bawah Jester, dan 4 cm di atas Ticket Taker.</p>
      <p>Bagian menarik dari angka itu adalah apa yang membuahkannya. Harlequin berbagi posisi kedua dalam peringkat kekuatan developer dengan Jester, di belakang Pierrot dan di depan Doctor serta Ticket Taker. Wiki fandom membaca kombinasi itu — termuda dan terpendek, tetapi seri di posisi kedua terkuat — sebagai alasan Harlequin ditulis sebagai sosok yang lincah dan andal secara fisik alih-alih kekar. Pembacaan itu adalah interpretasi, tetapi interpretasi yang dibangun di atas dua angka yang dipublikasikan, bukan di atas tebakan.</p>
      <h2>Urutan usia: terakhir dari lima</h2>
      <p>Urutan usia developer, dari yang tertua, adalah Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin kelima — termuda dari jajaran yang diperkenalkan, dan termuda dari dua tokoh romansa dengan selisih dua posisi.</p>
      <p>Ini fakta yang benar-benar terdokumentasi sekaligus salah satu yang paling sering tercabik di daring. Banyak materi fans memberi Harlequin usia numerik yang spesifik, dan beberapa angka itu tidak bisa didamaikan dengan urutan terpublikasi yang menempatkannya di bawah Ticket Taker dan Doctor yang jauh lebih tua dan tidak di atas siapa pun. Urutan itulah versi yang andal, sekaligus satu-satunya versi yang ada: tidak ada usia numerik yang pernah dipublikasikan untuk karakter mana pun dalam game ini.</p>
      <div class="walkthrough-tip"><strong>Jika ingin mengutip usianya, kutiplah urutannya</strong><p>Tulislah "yang termuda dari lima karakter yang diperkenalkan", bukan sebuah angka. Itu akurat, bersumber, dan tetap bertahan melewati pembaruan berikutnya. Angka-angka yang diberikan situs fans pada jajaran ini punya kebiasaan untuk dibantah jawaban AMA selanjutnya — itulah sebabnya developer menerbitkan urutan, bukan angka.</p></div>

      <h2>Jarak sebelas sentimeter</h2>
      <p>Harlequin 11 cm lebih pendek dari Pierrot, dan selisih itu cukup besar untuk terbaca di layar tanpa perlu dilebih-lebihkan. Wiki fandom menganggap jarak itu berarti bagi cara kedua tokoh disandingkan — yang sunyi memenuhi bingkai, yang teatrikal bergerak di sekelilingnya. Apakah itu memang maksud desain atau akibat dari referensi sprite, tidak pernah dinyatakan developer, jadi hal itu tetap di kolom fandom.</p>
      <p>Yang terkonfirmasi lebih sederhana: bagan itu diterbitkan developer sebagai referensi yang dipakai saat menggambar sprite, itulah sebabnya angka-angkanya diperlakukan kanonik alih-alih diukur dari karya seni. Jika sebuah fan art menggambar Harlequin lebih tinggi dari Pierrot, karya seninya telah distilisasi; angka resminya tetap 187 dan 198.</p>

      <h2>Apa yang dikatakan materi resmi tentangnya</h2>
      <p>Di luar bagan, developer telah mengatakan beberapa hal tentang Harlequin secara langsung. Sinopsis resmi menyebutnya "rival yang memikat" milik Pierrot dan mendeskripsikan game ini dipimpin oleh salah satu dari keduanya — pembingkaian paling jernih untuk sebuah cerita dengan dua rute romansa dan tidak lebih.</p>
      <p>Satu jawaban AMA layak dikutip dengan hati-hati karena mudah salah baca. Ditanya tentang gigitan yang ditinggalkan Harlequin saat menggoda, jawabannya adalah bahwa itu bukan lamaran pernikahan, bahwa tanda itu tidak meninggalkan bekas luka, dan bahwa pernikahan serta pacaran di antara monster bekerja berbeda dari pemahaman protagonist. Pertukaran kecil itu benar-benar bekerja: ia menetapkan bahwa godaan Harlequin berjalan dengan logika milik sirkus sendiri, dan bahwa kerangka rujukan protagonist bukanlah kerangka rujukan orang-orang di sekitarnya.</p>
      <p>Wiki fandom menambahkan bahwa Harlequin merasa aman di dekat Doctor, bahwa Doctor adalah orang favoritnya di sirkus, dan bahwa ia akur dengan Ticket Taker meskipun selera mereka berbenturan. Wiki itu juga mencatat kaitan tersirat dengan kematian Columbina — bahwa Harlequin membunuhnya untuk "menyelamatkannya" — yang oleh wiki itu sendiri dibingkai sebagai implikasi, bukan pernyataan. Bentuk umum sejarah sirkus dikonfirmasi dalam jawaban AMA; pembacaan spesifik tentang peran Harlequin di dalamnya bukan informasi pihak pertama.</p>

      <h2>Status rute: direncanakan, belum bisa dimainkan</h2>
      <p>Ending romansa Harlequin adalah satu dari empat kesimpulan yang disebut developer, bersama ending Pierrot, ending Protagonis, dan ending gabungan "All together". Keempatnya belum diimplementasikan. Build saat ini memuat tepat satu ending — ending buruk «Missing» di Hari 1 — sehingga tidak ada kondisi pemicu untuk dipublikasikan dan tidak ada walkthrough jujur untuk ditulis.</p>
      <ul>
        <li><strong>Terkonfirmasi:</strong> tingginya, posisi terakhirnya dalam urutan usia, seri keduanya dalam kekuatan, deskripsinya sebagai "rival yang memikat" milik Pierrot, penjelasan bahwa gigitan godaannya bukan lamaran, dan bahwa ending romansa Harlequin direncanakan.</li>
        <li><strong>Dari build saat ini:</strong> penampilannya, adegan-adagannya, dan fakta bahwa sebagian kemunculannya berbeda tergantung cabang cerita, yang dikonfirmasi oleh catatan bug resmi.</li>
        <li><strong>Turunan penggemar:</strong> deskripsi topengnya — topeng putih dengan wajik hijau dan segitiga hijau, mata hijau semacam bisa, rambut hitam keriting dengan puncal berbentuk hati — sejarah pribadinya, dan detail spesifik hubungannya dengan Columbina.</li>
      </ul>

      <h2>Merangkai angka-angkanya</h2>
      <p>Pengukuran resmi Harlequin mendeskripsikan karakter yang spesifik: yang termuda, terpendek, dan seri di posisi kedua terkuat dari rombongan lima orang, yang bersaing memperebutkan perhatian dengan anggota tertinggi kedua sekaligus terkuat dari rombongan yang sama. Ia bukan yang dominan secara fisik dan bukan pula yang tak berpengalaman — ia lincah, teatrikal, dan bermain dari posisi tempat rivalitas itu benar-benar berimbang. Itu jauh lebih berguna daripada usia karangan, dan sepenuhnya terdokumentasi.</p>
      <p>Untuk seluruh jajaran dalam satu pandangan, lihat <a href="/id/characters/heights">panduan tinggi dan peringkat</a>; untuk status rute dan hubungannya, lihat <a href="/id/characters/harlequin">profil Harlequin</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'Ending The Freak Circus: Mana yang Ada dan Mana yang Tidak',
    description: 'Daftar status lengkap ending di The Freak Circus — satu ending buruk yang sudah diimplementasikan, empat kesimpulan yang direncanakan, dan rute-rute yang tidak ada.',
    date: '2026-09-28',
    tags: ['Ending', 'Rute', 'Versi 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Jajaran karakter The Freak Circus berkumpul mengelilingi protagonist',
    readingTime: 'Bacaan 9 menit',
    content: `
      <p class="article-lede">The Freak Circus hari ini punya satu ending yang bisa dimainkan, dan empat lagi yang sudah disebut developer tetapi belum ditulis ke dalam build mana pun. Hampir setiap bagan "semua ending" di internet menciutkan dua kategori itu menjadi satu, itulah sebabnya pertanyaan yang sama mendapat empat jawaban yang berbeda. Berikut daftarnya dengan status tiap entri dinyatakan dengan lugas.</p>
      <div class="walkthrough-note"><strong>Cakupan daftar ini</strong><p>Daftar ini mencakup prototipe publik versi 0.2 dan pernyataan yang dipublikasikan developer sendiri tentang pekerjaan yang direncanakan. Daftar ini memuat spoiler cerita untuk satu-satunya ending yang ada. Tidak ada kesimpulan buatan teori fans atau bernama fans yang didaftarkan sebagai ending, karena belum ada hal seperti itu sebagai ending sampai developer merilisnya.</p></div>

      <h2>Versi singkatnya</h2>
      <ul>
        <li><strong>Bisa dimainkan sekarang: 1.</strong> Ending «Missing» — sebuah ending buruk di Hari 1.</li>
        <li><strong>Diumumkan sebagai rencana: 4.</strong> Pierrot (romansa), Harlequin (romansa), Protagonis (tanpa romansa), dan "All together" (poly).</li>
        <li><strong>Pilihan rute yang terkonfirmasi: 4.</strong> Pierrot, Harlequin, keduanya, atau tidak keduanya.</li>
        <li><strong>Rute yang tidak ada: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Jumlah total ending resmi: tidak ada yang dipublikasikan.</strong> Developer telah menyatakan beberapa ending direncanakan tetapi tidak bisa memberikan angkanya.</li>
      </ul>

      <h2>Satu-satunya ending yang ada</h2>
      <p>Versi 0.2 memuat satu ending tunggal, dan itu ending buruk. Ending itu dicapai pada Hari 1, dan syaratnya sengaja dibuat sederhana: jika protagonist tidak melakukan apa-apa selagi Pierrot diejek oleh seorang pria di depan orang banyak, protagonist diberi tiket merah muda oleh sosok tak dikenal, dibawa ke tenda merah muda, dan ditolak masuk oleh setiap anggota sirkus. Game itu menyatakan dengan lugas bahwa protagonist gagal menarik perhatian Pierrot dan berakhir secara tragis.</p>
      <p>Itu ending sungguhan dengan konsekuensi nyata, bukan placeholder — dan itulah seluruh isi kategori ending pada build saat ini. Secara struktur, ia juga argumen game itu dalam bentuk mini: protagonist yang tidak terlibat dalam konflik inti diam-diam dikeluarkan darinya.</p>
      <div class="walkthrough-tip"><strong>Rekamlah alih-alih menghindarinya</strong><p>Ending «Missing» adalah satu-satunya hasil yang secara resmi ditawarkan build itu, jadi mencapainya berarti menuntaskan prototipe saat ini, bukan merusaknya. Jika sebuah panduan menyuruhmu memuat ulang dan tak pernah melihatnya, panduan itu memperlakukan ending tersebut sebagai sesuatu yang harus dilindungi, bukan sesuatu yang memang ada.</p></div>

      <h2>Empat ending yang direncanakan</h2>
      <p>Developer mencantumkan empat kesimpulan di halaman resmi dan dalam FAQ resmi. Dua adalah ending romansa, satu dengan tegas tanpa romansa, dan satu adalah ending poly.</p>
      <ul>
        <li><strong>Ending Pierrot (romansa)</strong> — protagonist berakhir bersama Pierrot. Tercantum sebagai pekerjaan yang direncanakan dan berulang kali digambarkan masih dalam pengembangan.</li>
        <li><strong>Ending Harlequin (romansa)</strong> — protagonist berakhir bersama Harlequin. Naskah untuk ending itu belum selesai.</li>
        <li><strong>Ending Protagonis (tanpa romansa)</strong> — protagonist mengakhiri cerita tanpa romansa. Developer telah mengonfirmasi rute ini ada sebagai konsep dan bahwa pertemanan tetap bisa dipilih di sampingnya.</li>
        <li><strong>"All together" (poly)</strong> — protagonist jatuh cinta pada Pierrot dan Harlequin pada saat bersamaan. Kesimpulan tersendiri yang dicantumkan, bukan varian dari salah satu rute romansa.</li>
      </ul>
      <p>Penting untuk tidak mengubah daftar ini menjadi sebuah angka. Developer pernah ditanya langsung berapa banyak ending game finalnya, dan menjawab bahwa beberapa direncanakan tetapi angkanya belum bisa diberikan, karena naskahnya masih dalam proses pengerjaan. Halaman yang menyatakan "The Freak Circus punya lima ending" telah menjumlahkan empat kesimpulan terencana yang disebut namanya plus satu yang sudah diimplementasikan, lalu menghasilkan total yang tak pernah diucapkan developer.</p>

      <h2>Karakter mana yang bisa dijadikan rute</h2>
      <p>Jawaban resminya sempit: Pierrot, Harlequin, keduanya, atau tidak keduanya. Rute Protagonis adalah pilihan "tidak keduanya" — dikonfirmasi tanpa romansa, sambil tetap membiarkanmu memilih berteman dengan para karakter.</p>
      <p>Tidak ada rute untuk Jester, Ticket Taker, atau Doctor. Developer telah mengatakan bahwa jika rute tambahan ditambahkan nanti, kemungkinan besar hadir sebagai add-on atau DLC, dan bahwa hal itu belum diputuskan. Menjadikan karakter sisanya pilihan romansa dideskripsikan sebagai kemungkinan, bukan janji — pembedaan yang penting, karena panduan fans sering mendeskripsikan rute-rute itu dalam bentuk sekarang seolah-olah hanya tersembunyi.</p>
      <p>Dua klaim yang beredar luas tidak sesuai dengan apa pun yang pernah dideskripsikan developer: bahwa rute Jester "terbuka di Hari 2", dan bahwa Doctor punya ending "Clean Hands". Pembaruan Hari 2 menambahkan karakter, sprite animasi, menu yang didesain ulang, dan versi Android — bukan rute baru.</p>

      <h2>Mengapa panduan-panduan saling berselisih soal jumlahnya</h2>
      <p>Situs yang berbeda menjawab pertanyaan yang berbeda. Sebagian hanya menghitung yang bisa dimainkan, sebagian hanya menghitung yang disebut developer, dan sebagian menghitung campuran kesimpulan terencana dan teorisasi fans. Menyortir klaim apa pun ke dalam tiga wadah — sudah diimplementasikan, direncanakan, atau belum terverifikasi — menyelesaikan perselisihan lebih cepat daripada berdebat soal angkanya.</p>
      <p>Dua catatan berlaku untuk daftar yang direncanakan. Naskahnya masih ditulis, jadi himpunan kesimpulannya bisa berubah sebelum salah satunya rilis. Dan Hari 3 adalah tempat kesimpulan-kesimpulan baru sedang ditulis sekarang, yang membuat daftar saat ini hanyalah potret rencana yang sedang berjalan, bukan katalog yang sudah final.</p>

      <h2>Apa artinya bagi permainan</h2>
      <p>Perlakukan prototipe ini sebagai dua hari pertama dari cerita tiga hari. Yang tersedia adalah busur pembuka yang membangun jajaran karakter, rivalitas, dan satu ending kegagalan. Struktur rute ada di percabangannya; kesimpulannya belum ada di build-nya. Memainkan versi saat ini adalah cara melihat bagaimana percabangannya bekerja, bukan cara menuntaskan game-nya.</p>
      <p>Untuk rincian lebih lengkap beserta sumbernya, lihat <a href="/id/endings">panduan ending dan rute</a>; untuk apa yang masih sedang ditulis, lihat <a href="/id/day-3">pelacak Hari 3</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'Lima Karakter The Freak Circus',
    description: 'Ikhtisar satu halaman tentang lima karakter yang diperkenalkan — Pierrot, Harlequin, Jester, Doctor, dan Ticket Taker — beserta tinggi, peringkat, dan status rute.',
    date: '2026-10-01',
    tags: ['Karakter', 'Ikhtisar', 'Versi 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Jester, sosok otoritas The Freak Circus',
    readingTime: 'Bacaan 10 menit',
    content: `
      <p class="article-lede">Versi 0.2 memperkenalkan lima karakter, dan kelimanya punya adegan perkenalan sendiri di build publik. Angka itu sering menjadi sumber asumsi kedua yang keliru — bahwa lima karakter yang diperkenalkan berarti lima rute yang tersedia. Tidak demikian. Dua di antaranya punya rute romansa yang direncanakan, tiga tidak punya rute, dan tak satu pun dari ending yang direncanakan bisa dimainkan saat ini.</p>
      <div class="walkthrough-note"><strong>Cara membaca ikhtisar ini</strong><p>Tinggi, posisi urutan usia, dan peringkat kekuatan berasal dari bagan yang dipublikasikan developer. Status rute dan ending mengikuti pernyataan developer sendiri. Detail kepribadian dan hubungan yang disandarkan pada wiki fandom diberi label demikian, karena sebagian besar detail menarik tentang jajaran ini berasal dari materi cerita, bukan dari postingan developer.</p></div>

      <h2>Jajaran karakter secara sekilas</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, tertua ketiga, terkuat. Obsesi yang sunyi di pusat cerita dan yang lebih tinggi dari dua tokoh romansa.</li>
        <li><strong>Harlequin</strong> — 187 cm, termuda, seri kedua untuk kekuatan. "Rival yang memikat" milik Pierrot dan yang lebih pendek dari dua tokoh romansa.</li>
        <li><strong>Jester</strong> — 192 cm, tertua keempat, seri kedua untuk kekuatan. Sosok otoritas yang membuat sirkus terasa seperti sebuah lembaga. Tidak ada rute.</li>
        <li><strong>Doctor</strong> — 207 cm, tertua kedua, terkuat ketiga. Tertinggi dari kelima dan salah satu kehadiran paling klinis di jajaran. Tidak ada rute.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, tertua, terlemah. Penjaga ambang gerbang dan karakter yang paling terikat pada percabangan. Tidak ada rute.</li>
      </ul>
      <p>Tiga fakta berlaku untuk kelimanya sekaligus. Bagan tinggi diterbitkan developer sebagai referensi yang dipakai saat menggambar sprite, itulah sebabnya angkanya kanonik. Urutan usia hanya relatif — tidak ada usia numerik untuk siapa pun. Dan peringkat kekuatan diterbitkan sebagai sisipan atas sebuah pertanyaan fans, jadi ia terbaca sebagai penggambaran karakter, bukan sebagai layar statistik.</p>

      <h2>Pierrot</h2>
      <p>Karakter yang menjadi poros game ini. Sinopsis resmi menyebutnya "yandere yang sunyi" ("yandere" adalah istilah fandom untuk obsesi romantis yang bermuara pada kendali) — deskripsi dari developer sendiri, dan alasan setiap gerakannya berbobot dalam medium yang berjalan lewat dialog. Wiki fandom menggambarkannya lembut dan sopan di permukaan sambil menguntit protagonist, serta protektif terhadap protagonist dan Columbina; wiki itu juga mencatat jawaban developer bahwa Pierrot tidak akan pernah meninggalkan protagonist, dengan penekanan. Ending romansa Pierrot direncanakan dan sedang dikembangkan.</p>
      <h2>Harlequin</h2>
      <p>Jika Pierrot bekerja lewat keteguhan, Harlequin bekerja lewat pertunjukan. Sinopsis resmi menyebutnya "rival yang memikat" milik Pierrot dan membingkai game ini dipimpin oleh salah satu dari keduanya. Wiki fandom mendeskripsikannya ceria, sadis, suka menggoda, dan diam-diam cemburu — serta mencatat bahwa ia tidak nyaman dengan kasih sayang, yang membaca ulang rivalitas itu sebagai sesuatu yang ia inginkan sama besar dengan Pierrot. Ending romansanya direncanakan dan belum diimplementasikan.</p>
      <h2>Jester</h2>
      <p>Karakter yang paling sering salah dideskripsikan di daring, biasanya dengan diberi rute romansa yang tidak ia miliki. Ia berfungsi sebagai sosok otoritas sirkus: wiki fandom menyebutnya pemimpin dan antagonis utama, tenang dan terkendali alih-alih mudah meledak, dan fandom juga mendeskripsikannya mengendalikan para "Fools" dan menyebut manusia sebagai anak-anak liar. Detail-detail itu adalah interpretasi atas adegan-adagannya, bukan pernyataan developer, tetapi otoritasnya atas karakter lain konsisten di seluruh build. Tidak ada rute Jester dan tidak ada ending Jester.</p>
      <h2>Doctor</h2>
      <p>Tertinggi dari kelima dengan 207 cm dan hanya terkuat ketiga, yang oleh wiki fandom dijelaskan lewat preferensi pada kecerdikan alih-alih kekuatan kasar. Perkenalannya paling deras menyuguhkan pembatasan ruang gerak, pemeriksaan, dan citra horor medis, dan ketenangannya digambarkan retak secara kasatmata pada register emosi tertentu. Ia tidak punya rute dan tidak punya ending, dan ending "Clean Hands" yang dilekatkan padanya oleh beberapa halaman fans lama tidak didukung sumber pihak pertama mana pun.</p>
      <h2>Ticket Taker</h2>
      <p>Tertua, terpendek, dan terakhir dalam peringkat kekuatan — tetapi sekaligus salah satu karakter dengan dokumentasi resmi terbaik, karena sistem tiket adalah salah satu mekanik yang terkonfirmasi dalam game. Developer mengonfirmasi delapan jenis tiket, dengan merah muda berada di bawah jajaran utama dan merah serta hijau menandakan pilihan yang dibuat protagonist. Ia tidak punya rute, dan beberapa panduan fans lama mendeskripsikan rute romansa Ticket Taker yang terbuka lewat ketekunan dan dialog yang cermat; rute seperti itu tidak ada dalam build publik.</p>

      <h2>Siapa yang sebenarnya bisa dijadikan rute</h2>
      <p>Pilihan rute yang terkonfirmasi adalah Pierrot, Harlequin, keduanya, atau tidak keduanya. Pilihan "tidak keduanya" bersesuaian dengan ending Protagonis, yang tidak melibatkan romansa tetapi tetap mengizinkan pertemanan dengan para karakter. Jester, Ticket Taker, dan Doctor tidak punya rute; developer mendeskripsikan menjadikan mereka pilihan romansa sebagai kemungkinan, bukan janji, dan mengisyaratkan penambahan semacam itu kemungkinan besar hadir sebagai add-on atau DLC.</p>
      <div class="walkthrough-tip"><strong>Cara memakai profil karakter</strong><p>Baca bagian terkonfirmasi lebih dulu dan bagian fandom kemudian. Butir-butir terkonfirmasi akan tetap benar setelah pembaruan berikutnya; materi fandom adalah interpretasi atas build saat ini dan bisa direvisi saat lebih banyak adegan hadir. Profil yang mencampur keduanya tanpa label adalah yang perlu diwaspadai.</p></div>

      <h2>Apa yang belum ada di jajaran ini</h2>
      <p>Columbina adalah mantan anggota sirkus yang kematiannya membentuk latar belakang kedua tokoh utama, tetapi ia bukan salah satu dari lima karakter yang diperkenalkan dan tidak muncul dalam bagan tinggi yang dipublikasikan. Desainnya masih dalam tahap produksi dan developer sengaja menahan detailnya. Siapa pun yang menulis tentang jajaran ini sebaiknya memperlakukan dia sebagai bagian nyata dari sejarah cerita sekaligus karakter yang belum selesai.</p>
      <p>Untuk profil lengkapnya, lihat halaman <a href="/id/characters/pierrot">Pierrot</a>, <a href="/id/characters/harlequin">Harlequin</a>, <a href="/id/characters/jester">Jester</a>, <a href="/id/characters/the-doctor">Doctor</a>, dan <a href="/id/characters/ticket-taker">Ticket Taker</a>, plus <a href="/id/characters/heights">panduan tinggi dan peringkat</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'Sistem Tiket di The Freak Circus Dijelaskan',
    description: 'Developer telah mengonfirmasi delapan jenis tiket di The Freak Circus, dengan merah muda, merah, dan hijau membawa makna khusus tentang percabangan cerita.',
    date: '2026-10-05',
    tags: ['Tiket', 'Mekanik', 'Percabangan'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Ticket Taker, karakter yang mengendalikan sistem tiket game',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Tiket adalah salah satu dari sedikit sistem dalam The Freak Circus yang dijelaskan developer secara langsung, dan penjelasannya mencakup lebih banyak hal daripada yang diakui kebanyakan panduan fans. Jumlah yang terkonfirmasi adalah delapan jenis tiket. Merah muda berada di bawah jajaran utama, merah dan hijau menandai pilihan yang dibuat protagonist, dan kombinasi merah muda-merah berarti Ticket Taker mengambil opsi merah secara otomatis.</p>
      <div class="walkthrough-note"><strong>Apa yang terdokumentasi dan apa yang tidak</strong><p>Jumlah jenis tiket serta makna merah muda, merah, dan hijau berasal dari developer. Daftar lengkap kedelapan tiket — nama dan warna jenis sisanya — belum dipublikasikan, jadi artikel ini tidak menduganya. Identifikasi sosok di kafe yang menyerahkan tiket merah muda sebagai Ticket Taker yang menyamar adalah turunan penggemar dan ditandai demikian.</p></div>

      <h2>Apa yang sudah dikonfirmasi developer</h2>
      <ul>
        <li><strong>Ada delapan jenis tiket.</strong> Ini adalah hasil hitung, dikonfirmasi secara langsung.</li>
        <li><strong>Merah muda berada di bawah jajaran utama.</strong> Ini tingkatan yang kamu terima saat tidak sedang diperebutkan para penampil.</li>
        <li><strong>Merah dan hijau menandakan pilihan yang dibuat protagonist.</strong> Dua warna ini menandai keputusan yang menjadi milik pemain.</li>
        <li><strong>Merah muda dan merah yang digabungkan berarti Ticket Taker mengambil opsi merah secara otomatis.</strong> Dalam kasus itu, pilihan dibuatkan untukmu oleh karakter yang mengelola seluruh sistem.</li>
      </ul>
      <p>Aturan terakhir itulah yang paling berguna untuk membaca adegan, karena aturan itu memberitahumu bahwa game ini tidak sekadar menyerahkan pilihan lalu membiarkanmu bebas memilih. Sebagian keputusan dibuat oleh sirkus. Protagonist yang gagal bertindak tidak mendapatkan hasil yang netral; mereka mendapatkan hasil milik sirkus.</p>

      <h2>Tiket merah muda dan satu-satunya ending yang ada</h2>
      <p>Tiket merah muda muncul dalam build saat ini, dan itulah objek yang memulai satu-satunya ending yang sudah diimplementasikan. Pada Hari 1, jika protagonist tidak melakukan apa-apa selagi Pierrot diejek oleh seorang pria di depan orang banyak, sosok tak dikenal menyerahkan tiket merah muda kepada protagonist. Protagonist dibawa ke tenda merah muda dan ditolak masuk oleh setiap anggota sirkus, dan game itu menyatakan bahwa mereka gagal menarik perhatian Pierrot dan berakhir secara tragis.</p>
      <p>Wiki fandom mengidentifikasi sosok di kafe itu — pria "Unknown" — sebagai Ticket Taker yang menyamar. Identifikasi itu berasal dari fans, tetapi terhubung langsung dengan satu-satunya ending yang dimuat build, dan menjelaskan mengapa karakter tanpa rute sendiri ternyata penting secara mekanis.</p>
      <div class="walkthrough-tip"><strong>Jangan memperlakukan tiket sebagai barang koleksi</strong><p>Versi 0.2 tidak menetapkan inventaris konvensional tempat tiket dikumpulkan untuk membuka ending di masa depan. Tiket di sini menandai kedudukan dan pilihan, bukan daftar centang. Jika sebuah panduan mendeskripsikan rak tiket, penghitung tiket, atau tiket tersembunyi untuk tiap ending, ia sedang mendeskripsikan sistem yang tidak dimiliki build itu.</p></div>

      <h2>Mengapa karakter pendukung memegang percabangan</h2>
      <p>Ticket Taker tidak punya rute dan tidak punya ending, ia terakhir dari lima dalam peringkat kekuatan dan terpendek dari jajaran. Dalam game yang pilihan rutenya Pierrot, Harlequin, keduanya, atau tidak keduanya, hal itu biasanya menjadikannya figur latar. Sistem tiketlah alasan ia tidak demikian.</p>
      <p>Pikirkan apa yang dilakukan tiket di dalam kisahnya: tiket memutuskan siapa yang kauizinkan menjadi. Tiket merah muda menempatkanmu di bawah para penampil, dan itulah persis posisi yang diberikan ending «Missing» kepada protagonist — di luar, ditonton, ditolak di pintu tenda. Merah dan hijau menandai pilihan-pilihan milik pemain. Dan ketika merah muda dan merah bergabung, sosok berwenang mengambil pilihan pemain. Karakter yang mengelola aturan itu bukan penjaga pintu; ia adalah mekanisme sirkus untuk mengelola protagonist.</p>
      <p>Itu juga cocok dengan penggambaran karakternya. Wiki fandom mendeskripsikannya patuh dan berbakti pada agenda sirkus, matang dan profesional, terpaku pada kebersihan dan keteraturan, dan menyatakan prinsipnya dengan lugas: di tempat ini, tidak ada yang keluar dari peran. Sistemnya itulah karakternya. Pertunjukan yang berjalan dengan tiket membutuhkan seseorang untuk membagikannya.</p>

      <h2>Bagaimana warna-warna itu terbaca dalam praktik</h2>
      <ul>
        <li><strong>Merah muda</strong> — kamu ada di dalam gedung tetapi tidak di dalam pertunjukan. Ini tingkatan yang mengakhiri satu-satunya ending yang saat ini ada di build.</li>
        <li><strong>Merah</strong> — keputusan yang disandarkan padamu, dan yang bisa diambil alih sirkus ketika dipasangkan dengan merah muda.</li>
        <li><strong>Hijau</strong> — keputusan yang disandarkan padamu, tanpa pengambilalihan itu.</li>
        <li><strong>Lima jenis lainnya</strong> — tidak didokumentasikan satu per satu. Jumlahnya terkonfirmasi; identitasnya tidak dipublikasikan.</li>
      </ul>
      <p>Perlu jujur bahwa sedikit dari semua ini yang sudah terlihat. Versi 0.2 adalah prototipe yang berat pada perkenalan dengan satu ending, dan sistem tiket dideskripsikan sebagai seperangkat aturan, bukan didemonstrasikan secara mendalam. Pemain pada build saat ini sebagian besar akan melihat merah muda dalam praktik, plus merah dan hijau saat sebuah pilihan ditawarkan. Membaca sistem ini sebagai peta percabangan yang penuh melampaui apa yang ditunjukkan build saat ini.</p>

      <h2>Apa yang terkonfirmasi versus apa yang ditambahkan fandom</h2>
      <ul>
        <li><strong>Dikonfirmasi developer:</strong> ada delapan jenis tiket; merah muda berada di bawah jajaran utama; merah dan hijau menandakan pilihan protagonist; merah muda plus merah berarti Ticket Taker mengambil opsi merah secara otomatis; dan Ticket Taker tidak punya rute.</li>
        <li><strong>Dari build saat ini:</strong> protagonist diberi tiket merah muda selama Hari 1, dan tiket itu mengarah langsung ke ending «Missing».</li>
        <li><strong>Turunan penggemar:</strong> pria "Unknown" di kafe adalah Ticket Taker yang menyamar, gelar "manipulator realitas", dan detail sejarahnya dengan Columbina.</li>
      </ul>
      <p>Untuk kaitannya dengan ending, lihat <a href="/id/endings">panduan ending</a>; untuk profil karakternya sendiri, lihat <a href="/id/characters/ticket-taker">halaman Ticket Taker</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'Apa yang Diketahui tentang Columbina di The Freak Circus',
    description: 'Columbina membentuk latar belakang kedua tokoh utama, tetapi desainnya masih dalam tahap produksi — apa yang dikonfirmasi developer tentangnya dan apa yang ditambahkan fandom.',
    date: '2026-10-07',
    tags: ['Columbina', 'Lore', 'Fakta karakter'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina, mantan anggota sirkus di pusat latar belakang kedua tokoh utama',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Columbina adalah karakter yang semua orang kenali tetapi tak seorang pun bisa mendeskripsikannya dengan yakin. Kematiannya membentuk latar belakang kedua tokoh romansa, dan fandom membangun pembacaan yang substansial tentangnya dari situ. Pada saat yang sama, developer telah mengatakan desainnya masih dalam tahap produksi dan detail-detailnya sengaja ditahan. Keduanya benar pada saat bersamaan, dan artikel ini tentang menjaga keduanya tetap terpisah.</p>
      <div class="walkthrough-note"><strong>Cakupan artikel ini</strong><p>Artikel ini mencakup apa yang dikonfirmasi developer, apa yang dicatat wiki fandom, dan di mana keduanya bertentangan. Artikel ini memuat spoiler cerita tentang latar belakang bersama kedua tokoh utama. Tidak ada klaim tentang Columbina yang disajikan sebagai hal yang sudah pasti kecuali developer yang menyatakannya.</p></div>

      <h2>Apa yang sudah dikonfirmasi developer</h2>
      <ul>
        <li><strong>Ia adalah mantan anggota sirkus.</strong> Sejarahnya dengan rombongan itu sudah di belakangnya, bukan di dalamnya.</li>
        <li><strong>Kematiannya membentuk latar belakang kedua tokoh utama.</strong> Pierrot dan Harlequin sama-sama lari dari sesuatu yang melibatkan dia.</li>
        <li><strong>Protagonist tidak terhubung dengan Columbina.</strong> Developer mengonfirmasi ini secara langsung, dan hal itu layak dinyatakan dengan lugas karena teori fans sering menempatkan protagonist dalam kisahnya.</li>
        <li><strong>"Columbina" berarti "merpati kecil".</strong> Developer telah mengonfirmasi arti nama itu.</li>
        <li><strong>Desainnya masih dalam tahap produksi, dan detail-detailnya sengaja ditahan.</strong> Wujud karakternya belum selesai dan developer telah mengatakannya.</li>
        <li><strong>Tidak ada tinggi resmi untuknya.</strong> Bagan tinggi yang dipublikasikan mencakup lima karakter yang diperkenalkan, dan ia tidak termasuk di dalamnya.</li>
      </ul>
      <p>Poin terakhir terhubung dengan sebuah detail dalam pembaruan pengembangan. Pembaruan resmi terbaru menyebut adegan sangat pendek yang baru dan merujuk padanya, serta mencatat desainnya direncanakan agar siluet kilas balik tetap konsisten. Dengan kata lain, cerita mengonfirmasi kehadirannya sementara karakternya masih digambar — posisi yang tidak biasa untuk ditulis oleh sebuah panduan fans, dan alasan artikel ini sengaja pendek pada penggambaran karakter.</p>

      <h2>Apa yang dicatat wiki fandom</h2>
      <p>Wiki fandom adalah sumber dari sebagian besar yang dikatakan orang tentang Columbina, dan dua klaimnya cukup penting untuk disebutkan namanya.</p>
      <p>Yang pertama adalah bahwa dia dan Pierrot tidak pernah menjalin hubungan romantis. Ini membantah pembacaan atas narasi kisah cinta milik sirkus itu sendiri dan melawan asumsi bahwa tragedi di pusat masa lalu Pierrot adalah sebuah romansa. Developer secara terpisah menyatakan bahwa Pierrot telah melangkah dari sejarah itu dan telah bertumbuh sejak saat itu — yang mengisyaratkan latar belakang itu adalah sumber penggambaran karakter, bukan luka yang permanen.</p>
      <p>Yang kedua adalah kaitan tersirat dengan peran Harlequin dalam kematiannya: wiki mencatat bahwa Harlequin membunuhnya untuk "menyelamatkannya", dan bahwa Pierrot menolak terlibat. Wiki membingkai hal ini sebagai implikasi, bukan pernyataan, dan sebaiknya dibaca demikian juga. Developer telah mengonfirmasi bentuk umum sejarah sirkus dalam jawaban AMA, jadi kisahnya nyata; pembacaan spesifik tentang bagian Harlequin di dalamnya tidak dikonfirmasi pihak pertama.</p>
      <div class="walkthrough-note"><strong>Menandai materi fandom sebagai materi fandom</strong><p>"Wiki fandom mencatat bahwa Harlequin membunuhnya untuk menyelamatkannya" adalah klaim yang berbeda dari "Harlequin membunuhnya untuk menyelamatkannya". Yang pertama bisa diperiksa terhadap sebuah sumber. Yang kedua tidak bisa, karena tidak ada sumber yang menyatakannya. Panduan yang menjatuhkan atribusi itu sedang membuat keputusan editorial yang tidak didukung bukti.</p></div>

      <h2>Mengapa detail yang ditahan itu disengaja</h2>
      <p>Ada alasan developer menahan spesifikasinya, dan itu bukan soal jadwal. Karakter yang desainnya belum selesai tidak bisa dideskripsikan dalam kata-kata final — tinggi, kostum, dan siluetnya semuanya masih diputuskan, dan panduan mana pun yang menyatakannya akan mendeskripsikan sebuah niat, bukan fakta. Itu juga alasan tidak ada tanggal lahir resmi dan tidak ada usia numerik resmi untuknya, dan alasan "satu tanggal lahir yang terkonfirmasi" dalam jajaran ini milik orang lain sama sekali.</p>
      <p>Konsekuensi praktisnya bagi pembaca adalah bahwa halaman mana pun yang mendeskripsikan Columbina secara rinci — penampilannya, tingginya, peran persisnya pada malam kematiannya — sedang mendeskripsikan sesuatu yang belum diputuskan, apa pun tingkat keyakinan yang dipancarkannya.</p>

      <h2>Di mana ia muncul dalam build saat ini</h2>
      <ul>
        <li><strong>Sebagai latar belakang.</strong> Sejarah kedua tokoh utama mengelilinginya, dan build saat ini mengungkap sejarah itu dalam fragmen, bukan dalam satu adegan.</li>
        <li><strong>Sebagai nama.</strong> Catatan pemeliharaan resmi mencatat bahwa sebuah baris yang sebelumnya belum lengkap muncul ketika namanya dimasukkan, dan pembaruan pengembangan yang lebih baru mendeskripsikan adegan pendek baru yang menyebutnya.</li>
        <li><strong>Sebagai siluet.</strong> Catatan pengembangan merujuk siluet kilas balik, yang mengisyaratkan bahwa ia terlihat di masa lalu meski desainnya belum selesai.</li>
      </ul>
      <p>Fakta bahwa ia dirujuk dalam build sementara masih dalam tahap produksi bukanlah kontradiksi yang harus dijelaskan developer. Itulah cara pengerjaannya, dan itulah alasan panduan yang cermat bisa membicarakannya tanpa mendeskripsikannya.</p>

      <div class="walkthrough-tip"><strong>Cara praktis untuk terus mengikutinya</strong><p>Jangan menunggu halaman wiki meringkaskannya untukmu. Tonton adegan-adegan pendek yang menyebutnya, catat kalimat yang dipakai game itu sendiri untuknya, dan perlakukan setiap detail deskriptif yang kamu temukan di tempat lain sebagai usulan sampai developer menunjukkan desain finalnya. Dengan begitu cerita tetap berada di depan spekulasi — satu-satunya cara perkembangan karakter ini benar-benar bisa mengejutkanmu.</p></div>

      <h2>Cara membicarakan Columbina secara bertanggung jawab</h2>
      <ul>
        <li>Atribusikan klaim fandom kepada fandom, secara eksplisit dan setiap kali.</li>
        <li>Jangan menerbitkan tinggi, usia, tanggal lahir, atau kostum sebagai fakta untuknya.</li>
        <li>Jangan menempatkan protagonist dalam kisahnya; developer telah menyingkirkannya.</li>
        <li>Bacalah catatan "tidak pernah romantis dengan Pierrot" sebagai koreksi atas salah baca yang umum, bukan sebagai tambahan romansa baru.</li>
        <li>Perlakukan utas "membunuhnya untuk menyelamatkannya" sebagai implikasi yang ditarik fandom, bukan peristiwa yang terkonfirmasi.</li>
      </ul>
      <p>Ia adalah pusat emosional dari sebuah cerita tentang dua orang yang tak bisa berhenti bersaing, dan alasan keduanya terluka. Sejauh itu aman untuk dikatakan. Sisa dari gambarannya akan layak dibaca ketika developer selesai menggambarnya dan merilis detailnya — dan halaman ini akan diperbarui saat itu tiba, bukan diisi sekarang.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Hari 3: Status Rilis dan Kemajuan yang Terverifikasi',
    description: 'Laporan status terverifikasi tentang Hari 3 di The Freak Circus — apa yang dikonfirmasi pembaruan pengembangan resmi, apa arti cakupan beta, dan mengapa tidak ada tanggalnya.',
    date: '2026-10-10',
    tags: ['Hari 3', 'Pembaruan', 'Pemeriksaan fakta'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'Gambar pembaruan pengembangan resmi dari build Hari 3',
    readingTime: 'Bacaan 9 menit',
    content: `
      <p class="article-lede">Hari 3 sedang dikerjakan, belum selesai, dan tidak ada tanggal rilis yang diumumkan. Kombinasi itulah keseluruhan ringkasan yang jujur. Hal lain apa pun yang beredar tentang Hari 3 — bulan, akhir pekan, hitung mundur — adalah inferensi yang dibangun di atas aktivitas pengembangan, dan developer secara eksplisit meminta agar klaim tanggal dari luar tidak diulang.</p>
      <div class="walkthrough-note"><strong>Status sekilas</strong><p>Build publik hari ini: versi 0.2. Hari 3 dalam pengembangan aktif. Tidak ada tanggal rilis, tidak ada bulan, dan tidak ada akhir pekan yang diumumkan. Angka-angka yang dikutip di bawah adalah angka cakupan beta, bukan persentase fitur yang utuh, dan bedanya penting.</p></div>

      <h2>Apa yang dikonfirmasi pembaruan resmi</h2>
      <p>Developer menerbitkan pembaruan pengembangan mingguan dan seri jawaban AMA di Tumblr resmi, dan postingan Hari 3 di sana membentuk catatan yang andal tentang pekerjaan yang sedang berjalan. Entri terbaru mendeskripsikan:</p>
      <ul>
        <li><strong>Koding yang berlanjut dengan aset placeholder.</strong> Adegan yang baru dikoding masih memakai placeholder dan baru berjalan sebagian, dengan transisi, pilihan, dan gambar yang akan dipoles setelah keputusan adegan itu ditetapkan.</li>
        <li><strong>Sebuah adegan sangat pendek yang baru dan merujuk Columbina.</strong> Desain karakternya direncanakan segera agar siluet kilas balik tetap konsisten.</li>
        <li><strong>Kemajuan beta.</strong> Pembaruan yang lebih awal mendeskripsikan satu bagian beta Hari 3 sebagai selesai dan menempatkan beta pada sekitar 30–40% dari keseluruhan update. Pembaruan yang kemudian mendeskripsikan hampir separuh jalan melalui konten yang direncanakan untuk uji beta.</li>
        <li><strong>Naskah yang lebih besar daripada Hari 2</strong>, dengan tambahan konten ending buruk dan adegan tersembunyi yang dideskripsikan.</li>
        <li><strong>Pengerjaan adegan kafe yang masih berjalan</strong>, dengan sebagian pilihan dan situasi yang masih perlu revisi lanjutan, serta sketsa tambahan dan mungkin latar baru yang masih dibutuhkan.</li>
        <li><strong>Sprite baru yang terpilih</strong> untuk Harlequin, Pierrot, dan Jester, dengan revisi dan sprite baru untuk Doctor direncanakan saat pengembangan mencapai adegannya.</li>
      </ul>
      <p>Tak satu pun dari itu adalah jadwal rilis. Pembaruan penulisan, karya seni, sprite, dan pemrograman mengonfirmasi bahwa pengembangan sedang aktif; itu tidak berarti Hari 3 sudah selesai. Hari 3 baru boleh diperlakukan sebagai rilis ketika build publik yang baru benar-benar muncul.</p>
      <div class="walkthrough-tip"><strong>Bacalah persentasenya dengan cermat</strong><p>"30–40% dari keseluruhan update" dan "hampir separuh jalan melalui konten beta yang direncanakan" mendeskripsikan cakupan yang berbeda. Yang pertama mengukur keseluruhan update; yang kedua mengukur irisan konten yang lebih kecil yang dicadangkan untuk beta. Tidak satu pun adalah persentase dari game yang sudah final, dan beta itu sendiri adalah tonggak, bukan rilis.</p></div>

      <h2>Mengapa tidak ada tanggal yang diberikan</h2>
      <p>Posisi developer konsisten di seluruh FAQ resmi dan jawaban Askbox: tidak ada tanggal rilis yang diumumkan, dan klaim tanggal dari luar postingan resmi tidak boleh diulang. Itu instruksi yang disengaja untuk fandom, bukan kelalaian.</p>
      <p>Ada konteks praktis untuknya. Periode pengembangan yang sama mencakup penanganan unggahan Google Play yang tak resmi, dan developer mencatat bahwa rilis toko resmi akan mendapatkan pengumumannya sendiri. Tanggal yang diumumkan sebelum sebuah build selesai, dan sebelum soal distribusi tuntas, akan menjadi janji yang tak mungkin ditepati.</p>

      <h2>Apa yang diperkirakan berubah pada Hari 3</h2>
      <p>Bentuk rencana Hari 3 lebih besar daripada apa pun sebelumnya, dan itu berdampak langsung pada apa yang ditunjukkan dan tidak ditunjukkan oleh build saat ini.</p>
      <ul>
        <li><strong>Konten ending buruk baru</strong> dideskripsikan dalam postingan pengembangan, yang berarti kategori ending dalam build akan bertambah melampaui ending «Missing» tunggal yang ada hari ini.</li>
        <li><strong>Adegan tersembunyi</strong> juga dideskripsikan, dan itu hal yang berbeda dari rute — adegan tersembunyi adalah konten, bukan kesimpulan.</li>
        <li><strong>Lebih banyak cabang.</strong> Naskahnya lebih besar daripada naskah Hari 2, dan pekerjaan percabangan yang dideskripsikan mencakup bagian-bagian dengan banyak pilihan yang butuh pengujian ekstra.</li>
        <li><strong>Kisah Columbina.</strong> Adegan pendek yang baru dan pekerjaan siluet kilas balik keduanya mengarah pada lebih banyak latar belakang bersama yang akan muncul ke permukaan.</li>
      </ul>
      <p>Yang belum diumumkan adalah salah satu dari empat ending yang direncanakan hadir di Hari 3. Ending yang direncanakan tetap direncanakan.</p>

      <h2>Apa yang terkonfirmasi tentang rilisnya sendiri</h2>
      <p>Beberapa hal tentang cara Hari 3 akan disampaikan sudah pasti, meskipun tanggalnya belum.</p>
      <ul>
        <li><strong>Ini akan menjadi build publik di halaman resmi.</strong> Developer telah mengonfirmasi halaman itch.io sebagai satu-satunya halaman resmi, jadi Hari 3 akan muncul di sana alih-alih lewat launcher pihak ketiga atau etalase toko yang terpisah.</li>
        <li><strong>Platformnya sudah mapan.</strong> Versi 0.2 tersedia untuk browser, Windows, macOS, Linux, dan Android, jadi set yang sama adalah harapan yang wajar untuk Hari 3 — meski tidak ada urutan rilis per platform yang diumumkan.</li>
        <li><strong>Rilis toko resmi apa pun akan diumumkan secara terpisah.</strong> Developer mencatat bahwa versi toko akan mendapat pengumuman tersendiri alih-alih hadir diam-diam bersamaan dengan pembaruan itch.io.</li>
        <li><strong>Unggahan tak resmi sedang ditangani.</strong> Waktu telah dihabiskan untuk menangani unggahan Google Play yang tak resmi, yang merupakan masalah distribusi alih-alih pengembangan — tetapi artinya jalur yang ditempuh pemain menuju rilis resmi belum sepenuhnya sederhana.</li>
      </ul>

      <h2>Cara memeriksa status saat ini sendiri</h2>
      <ol class="walkthrough-steps">
        <li><strong>Buka halaman itch.io resmi</strong> dan pastikan build yang tercantum masih versi 0.2.</li>
        <li><strong>Baca entri devlog secara berurutan.</strong> Semuanya bertanggal dan bersumber pihak pertama.</li>
        <li><strong>Periksa Tumblr resmi</strong> untuk pembaruan mingguan terbaru dan seri jawaban AMA.</li>
        <li><strong>Perlakukan tanggal apa pun yang kamu temukan di tempat lain sebagai belum terverifikasi</strong> kecuali muncul di salah satu tempat itu.</li>
        <li><strong>Abaikan halaman hitung mundur.</strong> Hitung mundur adalah estimasi fans dengan jam yang terpasang padanya.</li>
      </ol>
      <p>Developer telah mengonfirmasi tidak ada server Discord resmi, jadi server mana pun yang tidak ditautkan dari halaman itch.io, Tumblr, Patreon, atau Bluesky resmi harus diperlakukan sebagai dikelola fans atau tak resmi. Aturan itu berlaku juga untuk pengumuman tanggal: tanggal yang dikutip di Discord fans adalah tanggal fans.</p>

      <h2>Apa yang dilakukan dengan build saat ini selama menunggu</h2>
      <p>Simpan save-mu, catat build mana yang membuatnya, dan hindari menimpa slot playthrough pertama. Ketika build berikutnya tiba, baca catatan perubahannya sebelum berasumsi saran rute versi 0.2 masih berlaku. Percabangan sebuah prototipe bisa disusun ulang antar-build, dan daftar ending akan berubah seiring rampungnya naskah.</p>
      <p>Untuk catatan hari demi hari, lihat <a href="/id/day-3">pelacak Hari 3</a> di situs ini, dan untuk apa yang sudah dimuat build saat ini, lihat <a href="/id/blog/current-prototype-guide">panduan prototipe</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: 'Versi Browser atau Unduhan? Memilih Cara Bermain The Freak Circus',
    description: 'Perbandingan praktis antara build browser dan unduhan desktop serta Android The Freak Circus, termasuk bagaimana penyimpanan berperilaku berbeda.',
    date: '2026-10-13',
    tags: ['Browser', 'Unduhan', 'Instalasi'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus, satu-satunya halaman itch.io resmi untuk game ini',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Kedua versi menjalankan build versi 0.2 yang sama dari cerita yang sama, jadi pilihannya bukan soal konten. Pilihannya soal keandalan, penyiapan, dan seberapa besar progresmu yang kaupercayakan pada sebuah browser. Untuk sebagian besar pemain jawabannya: browser dulu, unduh sebelum kamu mulai peduli pada save.</p>
      <div class="walkthrough-note"><strong>Semuanya berasal dari satu tempat</strong><p>Developer telah menyatakan bahwa halaman itch.io adalah satu-satunya halaman resmi untuk game ini, dan meminta agar game tidak diunggah ulang atau direpost. Tidak ada server Discord resmi. Jika sebuah halaman menawarkan "unduhan penuh" di tempat lain, itu paling baik tanpa izin, dan situs ini tidak menautkannya.</p></div>

      <h2>Apa yang tersedia</h2>
      <ul>
        <li><strong>Peramban web (HTML5)</strong> — berjalan di browser melalui halaman itch.io resmi. Tanpa instalasi.</li>
        <li><strong>Windows</strong> — build PC, versi 0.2.</li>
        <li><strong>macOS</strong> — build Mac, versi 0.2.</li>
        <li><strong>Linux</strong> — build Linux, versi 0.2.</li>
        <li><strong>Android</strong> — build APK, versi 0.2.</li>
      </ul>
      <p>Semuanya name-your-own-price, jadi build lengkap bisa diunduh gratis dan membayar adalah dukungan opsional untuk developer yang telah mendeskripsikan proyek ini sebagai karya yang sebagian besar dikerjakan sendiri.</p>

      <h2>Pilih build browser ketika</h2>
      <p>Versi browser adalah cara tercepat memulai dan cara termudah membaca panduan sambil bermain. Tidak ada arsip untuk diekstrak, tidak ada platform untuk disesuaikan, dan tidak ada yang perlu di-uninstall kemudian. Ini juga pilihan yang masuk akal di mesin bersama atau sementara tempat kamu lebih memilih tidak meninggalkan file game.</p>
      <p>Bermain di browser adalah jalur yang dirawat, bukan kebetulan: developer telah mendokumentasikan macet khas browser — termasuk satu di tenda Ticket Taker dan beberapa bagian animasi — dan merilis perbaikannya. Peringatan tersisa yang diketahui adalah bahwa melewati beberapa adegan dengan sangat cepat bisa membuat efek visual tidak sinkron, jadi beri versi browser sedikit kesabaran saat kamu mengklikinya.</p>

      <h2>Pilih unduhan ketika</h2>
      <p>Build desktop adalah pilihan yang lebih baik untuk playthrough berulang, dan bagi siapa pun yang berencana menjaga save putaran pertama tetap utuh. Instalasi lokal tidak terkena batas penyimpanan browser, menyimpan salinan file game sendiri, dan memberimu antarmuka Ren'Py yang lengkap dengan rollback dalam riwayat — fitur yang membuat perbandingan cabang menjadi praktis, bukan melelahkan.</p>
      <div class="walkthrough-tip"><strong>Ekstrak arsip desktop sepenuhnya sebelum menjalankan</strong><p>Paket desktop datang terkompresi. Ekstrak seluruh arsipnya dan biarkan aplikasi tetap bersama file bawaannya, lalu jalankan. Menjalankan executable dari dalam arsip adalah penyebab paling umum dari build yang tampak mulai lalu berperilaku aneh.</p></div>

      <h2>Bagaimana penyimpanan berbeda, dan apa yang tidak didokumentasikan</h2>
      <p>Di sinilah kedua versi benar-benar berbeda, dan di sinilah saran yang beredar paling tidak bisa diandalkan.</p>
      <ul>
        <li><strong>Keduanya memakai antarmuka standar engine.</strong> The Freak Circus adalah rilis Ren'Py, jadi penyimpanan memakai tombol simpan dan muat yang normal, daftar slot, simpan cepat dan muat cepat, serta rollback dalam riwayat.</li>
        <li><strong>Keduanya menawarkan titik masuk Hari 2.</strong> Menunya memuat tombol Hari 2 dengan pengantar singkat, jadi kamu bisa melanjutkan ke Hari 2 tanpa memainkan ulang Hari 1.</li>
        <li><strong>Save browser tersimpan di penyimpanan browser.</strong> Membersihkan data situs, membuka jendela privat, atau menjalankan konfigurasi privasi yang ketat bisa menghapusnya tanpa peringatan, dan save itu terikat pada profil browser yang membuatnya. Ini alasan tunggal paling umum pemain melaporkan kehilangan progres.</li>
        <li><strong>Dokumentasi save resmi tidak ada.</strong> Developer belum mempublikasikan lokasi save, jumlah slot, perilaku autosave, maupun apakah save browser bisa dipindahkan ke build desktop. Panduan mana pun yang memberimu jalur spesifik, jumlah slot, atau prosedur transfer yang dijamin berhasil sedang mendeskripsikan perilaku engine, bukan jawaban resmi untuk game ini.</li>
      </ul>
      <p>Ren'Py memang menyediakan aksi ekspor dan impor untuk save di engine overlay-nya, dan apakah itu bekerja dengan andal untuk memindahkan save browser ke build desktop game ini belum dikonfirmasi. Perlakukan sebagai sesuatu yang layak dicoba alih-alih prosedur, dan backup dulu semua yang kamu pedulikan sebelum bereksperimen.</p>

      <h2>Aturan sederhana</h2>
      <ul>
        <li><strong>Membaca sekali, di mesin bersama, atau tanpa memasang apa pun:</strong> pakai build browser.</li>
        <li><strong>Merencakan replay, membandingkan cabang, atau menjaga save jangka panjang:</strong> unduh untuk platformmu.</li>
        <li><strong>Di ponsel:</strong> APK Android adalah opsi yang didukung.</li>
        <li><strong>Apa pun platformnya:</strong> ambil unduhan dari halaman itch.io resmi, dan simpan salinan backup sendiri untuk save apa pun yang akan kamu sesali bila hilang.</li>
      </ul>
      <p>Tidak ada versi yang memberimu cerita lebih banyak daripada yang lain. Versi 0.2 memuat dua hari yang sama dan satu ending yang sama di keduanya, jadi perbedaan praktisnya sepenuhnya soal seberapa aman progresmu bertahan.</p>

      <h2>Perbedaan lain yang layak diketahui</h2>
      <p>Tiga hal kecil memisahkan kedua versi, dan tak satu pun soal kualitas.</p>
      <ul>
        <li><strong>Bahasa dan suara.</strong> Game hadir dalam bahasa Inggris, Portugis Brasil, dan Tionghoa Sederhana, dengan terjemahan Tionghoa yang direvisi untuk versi 0.2. Sulih suara hanya dalam bahasa Inggris, diperankan oleh Darthsuki, jadi pengaturan bahasa mengubah teks, bukan audio, di setiap versi.</li>
        <li><strong>Input dan penanganan teks.</strong> Build desktop mendukung kenyamanan papan ketik, tetikus, dan jendela yang lazim, termasuk menelusuri kembali sebuah adegan. Bermain di browser bergantung pada halamannya, yang baik untuk pembacaan lurus tetapi lebih canggung untuk membandingkan dua cabang berdampingan.</li>
        <li><strong>Menu dan antarmuka.</strong> Menunya memuat titik masuk Hari 2 di kedua versi, yang merupakan fitur paling berguna bagi siapa pun yang ingin kembali ke konten saat ini tanpa memainkan ulang Hari 1.</li>
      </ul>
      <p>Ada juga peringatan yang berlaku untuk keduanya: game ini berperingkat 18+, dan peringatan konten yang diterbitkan mencakup darah, kematian, pembunuhan dan gore, sindiran kanibalisme, pelecehan, penculikan, penggunaan obat tanpa persetujuan, dominasi fisik, dan kontak fisik tanpa persetujuan. Baca daftar itu sebelum memutuskan seberapa banyak cerita yang ingin kamu baca lebih dulu.</p>
      <p>Untuk daftar platform dan catatan keamanan, lihat <a href="/id/download">panduan unduhan</a>; untuk perilaku penyimpanan, lihat <a href="/id/save">panduan penyimpanan</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Mengapa The Freak Circus Saat Ini Hanya Punya Satu Ending',
    description: 'The Freak Circus mengirim satu ending yang bisa dimainkan karena game ini adalah prototipe — bagaimana ending buruk yang sudah diimplementasikan, empat ending yang direncanakan, dan Hari 3 saling terhubung.',
    date: '2026-10-16',
    tags: ['Ending', 'Versi 0.2', 'Pengembangan'],
    image: '/images/home/faq.webp',
    imageAlt: 'Prototipe saat ini The Freak Circus, versi 0.2',
    readingTime: 'Bacaan 8 menit',
    content: `
      <p class="article-lede">Alasan hanya ada satu ending bukanlah karena ending yang lain tersembunyi, atau karena terbuka di playthrough versi 0.2 selanjutnya, atau karena kamu melewatkan sebuah syarat. Alasannya adalah game ini adalah prototipe, dan ending adalah bagian dari naskah yang ditulis paling akhir.</p>
      <div class="walkthrough-note"><strong>Apa yang dijelaskan artikel ini</strong><p>Hubungan antara satu ending yang diimplementasikan, empat ending yang disebut developer, dan keadaan naskah. Artikel ini memuat spoiler untuk satu-satunya ending yang ada dalam build publik.</p></div>

      <h2>Satu ending, dan itu ending buruk</h2>
      <p>Versi 0.2 memuat tepat satu ending: «Missing». Ending itu dicapai pada Hari 1 ketika protagonist tidak melakukan apa-apa selagi Pierrot diejek oleh seorang pria di depan orang banyak. Sosok tak dikenal menyerahkan tiket merah muda kepada protagonist, membawa mereka ke tenda merah muda, dan setiap anggota sirkus menolak mereka masuk. Game itu menyatakan bahwa protagonist gagal menarik perhatian Pierrot dan berakhir secara tragis.</p>
      <p>Ending itu bukan placeholder untuk sebuah ending baik. Ia adalah tulisan yang selesai dengan tema yang melekat — protagonist yang menolak terlibat dalam konflik inti dikeluarkan darinya — dan ia adalah satu-satunya kesimpulan yang secara resmi ditawarkan build saat ini.</p>

      <h2>Empat kesimpulan direncanakan, dan tak satu pun ada di build</h2>
      <ul>
        <li><strong>Ending Pierrot</strong> — kesimpulan romansa dengan Pierrot.</li>
        <li><strong>Ending Harlequin</strong> — kesimpulan romansa dengan Harlequin.</li>
        <li><strong>Ending Protagonis</strong> — kesimpulan tanpa romansa, meski pertemanan tetap bisa dipilih di sampingnya.</li>
        <li><strong>"All together"</strong> — protagonist jatuh cinta pada Pierrot dan Harlequin pada saat bersamaan.</li>
      </ul>
      <p>Keempatnya disebut developer di halaman resmi dan dalam FAQ resmi, dan berulang kali digambarkan masih dalam pengembangan. Tidak ada daftar pemicu yang dipublikasikan untuk salah satunya, karena tidak ada yang bisa dipicu. Panduan langkah demi langkah untuk membuka ending Harlequin akan mendeskripsikan build yang tidak ada secara publik.</p>
      <h3>Dan tidak ada total resmi</h3>
      <p>Mudah menjumlahkan angkanya dan mendapat lima. Total itu tak pernah dinyatakan. Developer telah mengatakan beberapa ending direncanakan tetapi tidak bisa memberikan angkanya, karena naskahnya masih dalam proses pengerjaan — dan sebuah kesimpulan yang direncanakan bisa digabung, dikerjakan ulang, atau ditambah sebelum rilis.</p>

      <h2>Ending adalah hal terakhir yang dihasilkan sebuah naskah</h2>
      <p>Ini alasan praktis build saat ini tampak seperti sekarang. Narasi bercabang harus dibangun dari dalam ke luar: hari membutuhkan adegan-adagannya, adegan membutuhkan pilihan-pilihannya, pilihan membutuhkan konsekuensi yang mengalir ke adegan selanjutnya, dan baru setelah itu bentuk sebuah kesimpulan ada. Build saat ini punya Hari 1 dan 2 dengan perkenalan, cabang, dan variasi adegannya, plus satu ending yang ditempatkan di titik yang memperagakan sebuah konsekuensi.</p>
      <p>Daftar fitur resminya tidak biasanya jujur tentang hal ini. Daftar itu mencatat lima karakter yang diperkenalkan, satu ending buruk yang diimplementasikan, dan perkenalan karakter yang lengkap dengan sisa cerita yang masih dalam pengembangan. Itu empat klaim yang terpisah, dan semuanya konsisten dengan sebuah proyek yang telah menyelesaikan pembukanya dan masih membangun bagian tengah serta akhirnya.</p>
      <div class="walkthrough-tip"><strong>Cara menguji apakah sebuah cabang benar-benar berbeda</strong><p>Karena tidak ada ending untuk dibandingkan, uji yang bermakna adalah apakah sebuah adegan berubah. Muat sebuah save, ubah satu respons yang bermakna, dan bandingkan yang mengikutinya. Jika dua permainan menghasilkan perbedaan yang bisa direproduksi pada dialog, penyutradaraan, atau siapa yang muncul, cabangnya nyata. Jika hanya menghasilkan satu kalimat yang berbeda, itu variasi, bukan rute.</p></div>

      <h2>Hari 3 adalah tempat kesimpulan-kesimpulan itu ditulis</h2>
      <p>Hari dalam game berikutnya dalam pengembangan aktif, dan pembaruan resmi mendeskripsikan naskah yang lebih besar daripada Hari 2, dengan tambahan konten ending buruk dan adegan tersembunyi. Kategori ending secara eksplisit adalah jenis hal yang bertumbuh: build saat ini mencantumkan satu ending buruk, dan catatan pembaruan merujuk lebih banyak konten ending yang sedang ditulis.</p>
      <p>Itu juga alasan tidak ada tanggal rilis. Developer meminta agar klaim tanggal dari luar tidak diulang, yang terbaca sebagai upaya mencegah sebuah jadwal terbentuk di sekitar pekerjaan yang belum selesai. Pembaruan pengembangan mendeskripsikan kemajuan beta — satu bagian beta selesai, beta pada sekitar 30–40% dari update, kemudian hampir separuh jalan melalui konten beta yang direncanakan — tetapi beta adalah tonggak, bukan rilis.</p>

      <h2>Apa artinya bagi pemain hari ini</h2>
      <ul>
        <li><strong>Tidak ada yang bisa dibuka.</strong> Memainkan versi 0.2 sampai akhir mencapai ending «Missing», dan itulah seluruh konten ending build itu.</li>
        <li><strong>Replay tetap layak dilakukan.</strong> Percabangannya nyata, dan variasi adegan, kemunculan karakter, serta pembacaan yang berbeda semuanya adalah hal yang dimuat build saat ini.</li>
        <li><strong>Jangan membeli atau mengejar paket "semua ending"</strong> untuk game yang saat ini punya satu ending. Apa pun di luar halaman itch.io resmi memang tak resmi.</li>
        <li><strong>Simpan save-mu.</strong> Pilihan versi 0.2 belum tentu terpetakan ke build publik berikutnya, dan daftar ending akan berubah.</li>
      </ul>
      <p>Ringkasan yang jujur adalah bahwa The Freak Circus saat ini adalah dua hari dan sedikitnya lagi dari cerita tiga hari, dengan hari terakhirnya dalam produksi. Yang bisa kamu mainkan adalah pembuka yang dibangun dengan baik dan bercabang sungguhan. Yang tidak bisa kamu mainkan adalah endingnya — dan untuk sekarang, itu termasuk ending yang baik.</p>
      <p>Untuk daftar ending dan rute beserta sumbernya, lihat <a href="/id/endings">panduan ending</a>; untuk keadaan pengembangannya, lihat <a href="/id/day-3">pelacak Hari 3</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'Cara Membaca Panduan Fans Tanpa Terpapar Misinformasi',
    description: 'Sebuah metode untuk mengevaluasi panduan fans The Freak Circus mana pun — pisahkan klaim ke dalam sudah diimplementasikan, direncanakan, dan belum terverifikasi, dan kenali kesalahan yang paling umum.',
    date: '2026-10-19',
    tags: ['Pemeriksaan fakta', 'Panduan', 'Komunitas'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Karya seni komunitas karakter The Freak Circus',
    readingTime: 'Bacaan 9 menit',
    content: `
      <p class="article-lede">Setiap novel visual dengan fandom kecil yang antusias pada akhirnya mengumpulkan panduan-panduan yang saling bertentangan, dan sebagian di antaranya salah dengan penuh percaya diri. Membacanya tidak sulit jika kamu punya metode. Metodenya sederhana: masukkan setiap klaim ke dalam tiga wadah — sudah diimplementasikan, direncanakan, atau belum terverifikasi — dan tolak membiarkan sebuah klaim berpindah wadah hanya karena cukup sering muncul.</p>
      <div class="walkthrough-note"><strong>Mengapa hal ini penting di sini</strong><p>The Freak Circus punya tiga sifat tidak biasa yang membuat panduan buruk menjadi umum: game ini adalah prototipe dengan satu ending yang diimplementasikan, jajaran karakternya punya pengukuran yang dipublikasikan tetapi tanpa usia yang dipublikasikan, dan banyak materi karakter yang menarik berasal dari halaman wiki fandom alih-alih postingan developer. Masing-masing telah menghasilkan kategori misinformasi yang spesifik.</p></div>

      <h2>Tiga wadah</h2>
      <ul>
        <li><strong>Sudah diimplementasikan.</strong> Bisa kamu capai di build publik sekarang. Satu ending memenuhi syarat: «Missing», ending buruk di Hari 1 yang dicapai dengan tidak melakukan apa-apa selagi Pierrot diejek.</li>
        <li><strong>Direncanakan.</strong> Developer telah menamainya, dan ia tidak ada dalam sebuah build. Empat memenuhi syarat: Pierrot, Harlequin, Protagonis, dan "All together".</li>
        <li><strong>Belum terverifikasi.</strong> Tanpa sumber pihak pertama, tetapi beredar luas. Jalur save, jumlah slot, jadwal autosave, usia dan tanggal lahir yang pasti, total waktu penyelesaian, tanggal rilis Hari 3, dan jumlah ending yang spesifik.</li>
      </ul>
      <p>Sebagian besar argumen faktual tentang game ini luruh begitu setiap kalimat berada dalam wadahnya. "Game ini punya lima ending" adalah kesalahan penggabungan: satu ending yang diimplementasikan ditambah empat yang direncanakan, disajikan sebagai total terkonfirmasi yang tak pernah diberikan developer.</p>

      <h2>Lima pertanyaan untuk sebuah panduan</h2>
      <ol class="walkthrough-steps">
        <li><strong>Panduan ini tentang build yang mana?</strong> Versi 0.2 adalah build publik saat ini. Panduan yang tak pernah menyebut versi sedang mendeskripsikan ingatan penulisnya.</li>
        <li><strong>Apakah ia menautkan sebuah sumber?</strong> Halaman resmi, entri devlog, jawaban AMA, postingan Tumblr. Panduan yang tak bisa menunjuk salah satunya sedang menginterpretasikan.</li>
        <li><strong>Apakah ia menandai materi fandom sebagai materi fandom?</strong> Detail kostum, alasan Pierrot sunyi, peran Harlequin dalam kematian Columbina — semuanya berguna, semuanya dari wiki fandom, semuanya layak diberi label.</li>
        <li><strong>Apakah ia mengatakan di mana spoiler dimulai?</strong> Panduan yang membocorkan pembukaan Hari 2 tanpa peringatan tidak lebih berguna daripada yang tidak.</li>
        <li><strong>Apakah ia berhati-hati di tempat yang semestinya?</strong> "Direncanakan", "belum diimplementasikan", "belum terkonfirmasi" bukanlah kelemahan dalam sebuah panduan. Itulah bagian-bagian yang akan tetap benar setelah pembaruan berikutnya.</li>
      </ol>

      <h2>Kesalahan spesifik yang layak ditangkap</h2>
      <h3>Rute romansa untuk karakter yang tidak memilikinya</h3>
      <p>Pilihan rute yang terkonfirmasi adalah Pierrot, Harlequin, keduanya, atau tidak keduanya. Tidak ada rute Jester, tidak ada rute Ticket Taker, dan tidak ada rute Doctor. Developer mendeskripsikan menjadikan karakter sisanya pilihan romansa sebagai kemungkinan, bukan janji, dan rute semacam itu kemungkinan besar hadir sebagai add-on atau DLC. Panduan yang mendeskripsikan rute Ticket Taker yang "terbuka lewat ketekunan dan dialog yang cermat", ending Doctor "Clean Hands", atau rute Jester yang "terbuka di Hari 2" semuanya mendeskripsikan hal-hal yang tidak ada. Pembaruan Hari 2 menambahkan karakter, sprite animasi, menu yang didesain ulang, dan versi Android — bukan rute baru.</p>
      <h3>"Ending baik" yang tidak ada</h3>
      <p>Tidak ada ending baik yang diimplementasikan. Satu-satunya ending dalam build adalah ending buruk, dan kesimpulan romansa yang sering dideskripsikan sebagai hasil "baik" adalah ending yang direncanakan yang sama seperti di atas — belum selesai, dan tidak dijamin menjadi hasil yang fans harapkan.</p>
      <h3>Angka presisi tanpa sumber</h3>
      <p>Usia yang spesifik, tanggal lahir, tinggi untuk Columbina, durasi total, jumlah ending yang pasti, dan lokasi save yang presisi semuanya adalah karangan fans yang didandani sebagai data. Pengukuran yang asli adalah bagan tinggi developer dan urutan usia relatif — dan tidak ada usia numerik yang pernah dipublikasikan untuk siapa pun dalam jajaran ini.</p>
      <h3>Tanggal untuk Hari 3</h3>
      <p>Tidak ada tanggal rilis yang diumumkan, dan developer meminta agar klaim tanggal dari luar tidak diulang. Halaman hitung mundur adalah estimasi fans dengan jam terpasang padanya. Satu-satunya tanggal yang berlaku adalah yang ada di halaman itch.io resmi atau dalam sebuah postingan resmi.</p>

      <h2>Membaca sumber tanpa mempercayainya secara buta</h2>
      <p>Wiki fandom sungguh berharga untuk game ini dan layak dipakai — dengan satu catatan khusus. Wiki itu mengompilasi materi karakter dari adegan-adegan game sendiri, yang berarti deskripsi karakternya dekat dengan sumber, sementara inferensi dan tanggalnya bukan pihak pertama. Kebiasaan praktisnya adalah menjaga keduanya tetap terpisah selagi kamu membaca.</p>
      <ul>
        <li><strong>Apa yang dilakukan wiki dengan baik:</strong> detail kostum, penjelasan di dalam cerita, ringkasan hubungan, dan catatan tentang apa yang telah dijawab developer di thread AMA.</li>
        <li><strong>Apa yang salah pada wiki:</strong> usia numerik dan sebagian besar tanggal lahir, tinggi untuk Columbina, dan pembacaan peristiwa cerita yang ambigu yang dinyatakan lebih tegas daripada yang bukti izinkan.</li>
        <li><strong>Apa yang harus dilakukan:</strong> salin deskripsinya, pertahankan kehati-hatian redaksinya.</li>
      </ul>
      <div class="walkthrough-tip"><strong>Tes satu kalimat untuk klaim apa pun</strong><p>Bertanya: "Bisakah developer membantah ini besok tanpa ada yang menyadarinya?" Jika ya, klaim itu membutuhkan redaksi hati-hati atau atribusi. "Developer telah mengonfirmasi delapan jenis tiket" tidak bisa dibantah diam-diam. "Harlequin berusia 21 tahun" bisa, dan telah dibantah.</p></div>

      <h2>Satu hal lagi: dari mana kamu mendapatkan game-nya</h2>
      <p>Sebelum mengevaluasi panduan apa pun, periksa tautan sumbernya. Developer telah menyatakan bahwa halaman itch.io adalah satu-satunya halaman resmi untuk game ini dan meminta agar game tidak diunggah ulang atau direpost. Tidak ada server Discord resmi, jadi setiap server yang tidak ditautkan dari halaman itch.io, Tumblr, Patreon, atau Bluesky resmi adalah dikelola fans atau tak resmi.</p>
      <p>Panduan yang mendorong "unduhan mirror", program "verifikasi", atau installer "patched" bukanlah panduan sama sekali. Jangan pernah memasang program terpisah atau mematikan perlindungan antivirus untuk memperoleh game ini.</p>

      <h2>Sebuah kebiasaan yang bekerja</h2>
      <p>Baca lebih dulu catatan cakupan sebuah panduan. Jika ia menyebut build mana yang dicakup, di mana sumbernya, dan bagian mana yang masih dalam pengembangan, sisanya bisa dipercaya secara sebanding. Jika ia dibuka dengan klaim penuh percaya diri tentang ending yang tidak ada, letakkan saja — itu panduan yang juga akan dengan penuh percaya diri memberitahumu hal yang salah tentang semua hal lainnya.</p>
      <p>Untuk versi terverifikasi dari topik yang paling banyak dicari, mulailah dengan <a href="/id/endings">panduan ending</a>, <a href="/id/characters/heights">panduan tinggi badan</a>, dan <a href="/id/save">panduan penyimpanan</a> — semuanya memisahkan fakta terkonfirmasi dari klaim yang belum terverifikasi dengan cara yang sama.</p>
    `,
  },
];
