import type { BlogPost } from './blog-posts';

// Filipino edition of the blog posts.
//
// This mirrors POSTS_EN in blog-posts.ts: same slugs, same order, same dates,
// same images, same HTML structure (heading/list counts and order). The English
// version is the source of truth; this file only re-expresses it in Filipino
// prose. Every hedge in the English text survives the translation — planned
// stays planned, unverified stays unverified.
//
// Terminology follows the vocabulary already established in messages/fil.json
// and lib/topic-content-fil.ts: "ruta" for route, "ending", "developer",
// "browser", "save", "slot", and "build" kept in Latin script, "sirko" for
// circus, "Bersyon 0.2", "Araw 1 / Araw 2 / Araw 3", and «Missing» for the one
// implemented ending. Character names and the game title stay in Latin script,
// as on the rest of the Filipino site.

export const POSTS_FIL: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'Walkthrough ng Araw 2 sa The Freak Circus: Mga Tent, Save, at ang Masamang Ending',
    description: 'Isang gabay sa bersyong 0.2 na may marka ng spoiler tungkol sa pagbukang-bihag, mga tent ng sirko, mga pagpapakilala ng tauhan, mga save point, at ang pinakaligtas na paraan ng paggalugad sa Araw 2 nang hindi pinagkakamalan ang mga variation ng eksena bilang mga tapos nang ruta.',
    date: '2026-09-02',
    tags: ['Araw 2', 'Walkthrough', 'Bersyon 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Ang mga tauhan ng The Freak Circus na nakatipon sa paligid ng protagonist',
    readingTime: '10-minutong pagbasa',
    content: `
      <p class="article-lede">Sa Araw 2 humihinto ang <em>The Freak Circus</em> sa pagiging isang hindi komportableng pagpapakilala at nagsisimula nang humawak nang mahigpit sa protagonist. Ang kapaki-pakinabang na tanong ay hindi "Aling tapos nang ruta ang dapat kong i-lock in?" — walang tapos na ending ni Pierrot o Harlequin sa bersyong 0.2 — kundi "Saan ako dapat mag-save para makita ang mga available na variation nang hindi tinutugtog muli ang buong prototype?"</p>
      <div class="walkthrough-note"><strong>Hangganan ng gabay</strong><p>Saklaw ng artikulong ito ang pampublikong prototype na bersyong 0.2 at naglalaman ng spoiler ng kwento. Kinukumpirma ng opisyal na listing ang limang pagpapakilala ng tauhan at isang masamang ending. Hindi nito kinukumpirma ang maraming tapos nang ruta, isang sistema ng koleksyon, o isang menu ng mga nakatagong eksenang mabubuksan.</p></div>

      <h2>Gawin ang mga save na ito bago magsimula ang presyon</h2>
      <p>Maikli ang Araw 2 para malaro muli, ngunit sapat na mahaba ang pagbukang-bihag para maging nakakapagod ang pag-uulit nito kung isa lang sagot ang nais subukan. Panatilihin ang magkakaibang slot sa halip na patungan ang pinakabagong save:</p>
      <ol class="walkthrough-steps">
        <li><strong>ARAW 2 — SIMULA:</strong> ang unang sandali na bibigyan ka ng kontrol ng bagong araw.</li>
        <li><strong>KUARTO NG BIHAG:</strong> bago magpasya sa isang sagot na puno ng tensyon sa paligid ni Pierrot o Harlequin.</li>
        <li><strong>PAGBALIK SA SIRKO:</strong> bago pumasok sa isang tent ng atraksyon.</li>
        <li><strong>BRANCH NG TENT:</strong> panibagong slot para sa bawat tent o pagpapakilala ng tauhan.</li>
        <li><strong>EKSENA SA DULO:</strong> bago ang anumang pagpipilian na mukhang pinal, palaban, o sadyang mapanganib.</li>
      </ol>
      <p>Mas maaasahan ito kaysa sa isahang rolling save. Kung matatapos agad ang isang eksena kaysa inaasahan — o umabot sa masamang ending — may malinis ka pa ring punto na ilang minuto lamang ang layo.</p>

      <h2>Ang pagbukang-bihag sa kuarto: basahin ang pagkakaiba, hindi ang metro ng pagmamahal</h2>
      <p>Bubukas ang araw sa protagonist na nakagapos sa isang hindi pamilyar na kuarto. Inihahayag ni Pierrot ang kanyang mga ginagawa bilang pagprotekta; ang pagdating ni Harlequin ay ginagawang sagupaan ang claim na iyon. Mahalaga ang eksena dahil ipinapakita nito kung gaano magkaiba ang dalawang kaagaw sa paggamit ng kontrol, hindi dahil hinihiling sa iyong pumili ng permanenteng rutang romance.</p>
      <p>Sa unang playthrough, sumagot sa paraang natural sa iyo at magpatuloy. Sa replay, bumalik sa save na <strong>KUARTO NG BIHAG</strong> at baguhin ang isang sagot nang paisa-isa. Kitang-kita rito kung nakakita ka ng tunay na variation ng eksena o isa lang namang ibang linya.</p>
      <div class="walkthrough-tip"><strong>Huwag sobrang basahin ang mga props.</strong><p>May kabuluhan ang maskara at pulang tiket bilang bagay ng kwento, ngunit hindi nagtatatag ang bersyong 0.2 ng karaniwang inventory kung saan bubuksan ng pangongolekta sa mga ito ang mga susunod na ending. May kinumpirmang kahulugan ang mga kulay ng tiket sa larong ito — minamarkahan ng pula at berde ang isang pagpipilian ng protagonist, at mas mababa ang pink sa pangunahing mga tauhan — ngunit senyales ito ng pag-branch, hindi checklist ng koleksyon. Ituring ang maskara bilang bagay sa eksena maliban kung ipapakita mismo ng laro ang isang susunod na interaksyon.</p></div>

      <h2>Pagbabalik sa sirko: paano galugarin ang mga tent</h2>
      <p>Pinalalawak ng bahaging sirko ang mga tauhan sa pamamagitan ng mga espasyong may tema. Simple ang pinakamahusay na estratehiya: mag-save bago pumasok, tapusin ang eksena nang hindi lumilipat, at gamitin ang save na iyon para sa susunod na variation. Huwag ipagpalagay na ang isang pagpapakilala ng tauhan ay kumpletong ruta.</p>

      <h3>Asul na tent — si Ticket Taker at ang mga salamin</h3>
      <p>Ang pangkat ng mga salamin ay binuo upang maging hindi kapani-paniwala ang impormasyong biswal. Tumingin nang mabuti kung aling repleksyon ang nagsasalita at kung paano ini-frame ni Ticket Taker ang nakikita mo. Walang kailangang lutasin ang bawat imahe bilang palaisipan sa unang pagbisita; ang praktikal na layunin ay tapusin ang pagpapakilala at panatilihin ang isang save para sa mas mahinahong pangalawang pagbasa.</p>

      <h3>Cyan na tent — si Doctor</h3>
      <p>Ang pagpapakilala sa Doctor ang pinakamalakas humawak sa pagpigil, pagsusuri, at imahen ng medikal na horror. Kung hindi komportable ang mga temang iyon sa iyo, ito ang sandaling gamitin nang maingat ang mga kontrol sa paglaktaw o huminto muna. Mula sa pananaw ng ruta, maaaring baguhin ng pagsunod o paglaban ang tekstura ng palitan, ngunit huwag dapat itanghal ang alinman sa dalawa bilang tapos nang ruta o ending ng Doctor.</p>

      <h3>Lila o itim na espasyo ng pagtatanghal — si Jester</h3>
      <p>Dala-dala ng pagtatanghal ni Jester ang ilan sa pinakamalamang lore ng Araw 2. Hayaang umusad nang normal ang dayalogo sa halip na mabilis itong laktawan. Mas mahalaga, ituring ang pagtatanghal bilang kwentong isinaysay <em>sa loob</em> ng laro: ibinubunyag nito kung paano pinag-uusapan ng sirko ang nakaraan nito, ngunit hindi ito awtomatikong neutral at kumpletong salaysay ng mga motibo ng bawat tauhan.</p>

      <h2>Paano protektahan ang paglalaro mo mula sa masamang ending</h2>
      <p>Naglalista ang opisyal na paglalarawan ng bersyon ng isang masamang ending. Hindi dapat mag-imbento ang isang maingat na gabay ng unibersal na "tamang sagot" nang walang nasusubukang pagpipilian na mauulit, kaya gamitin ang mismong laro bilang senyales:</p>
      <ul>
        <li>Mag-save bago ang mga sagot na hayagang mapanganib o parang pinal na ang tunog.</li>
        <li>Kung puputulin ng kwento papunta sa isang ending o babalik sa menu, i-reload ang pinakabagong save sa branch.</li>
        <li>Baguhin muna lamang ang huling may-kahulugang sagot; huwag agad i-restart ang Araw 2.</li>
        <li>Panatilihin ang save ng masamang ending kung nais mo ng kumpletong tala ng kasalukuyang prototype.</li>
      </ul>
      <p>Ang pinakamahalaga: ang pag-abot sa masamang ending ay hindi nangangahulugang nasira ang save. Nangangahulugan itong nakatagpo ka ng isa sa iilang resulta na malinaw na sinasabi ng kasalukuyang build na available.</p>

      <h2>Isang malinis na estratehiyang dalawang round</h2>
      <div class="walkthrough-route"><div><strong>Round 1 — kwento</strong><p>Maglaro nang tuloy-tuloy, pumili nang natural, at mag-save lamang sa limang checkpoint sa itaas. Iwasan ang mga gabay habang nasa mismong mga eksena.</p></div><div><strong>Round 2 — saklaw</strong><p>Bumalik sa mga save sa tent at sa mga eksena sa dulo. Baligtarin ang isang mahalagang sagot nang paisa-isa at ituon ang talagang nagbabago.</p></div></div>
      <p>Hindi kasing-glamoroso ng metodong ito ang isang malaking tsart na "lahat ng ending", ngunit tumutugma ito sa build na talagang umiiral. Ang bersyong 0.2 ay isang prototype na puno ng pagpapakilala; hindi ito koleksyon ng tapos nang ruta.</p>

      <h2>Ano ang bibilangin bilang pagtatapos ng Araw 2?</h2>
      <p>Nakahabol ka na kapag narating mo ang dulo ng kasalukuyang pampublikong kwento, hindi kapag nabuksan mo ang isang huling rutang romance na hindi naman umiiral. Dapat maiwan sa iyo ng isang masusing paglalaro ang mga sumusunod:</p>
      <ul class="walkthrough-checklist">
        <li>ang alitan sa kuarto ng bihag na napanood nang hindi lumilipat;</li>
        <li>ang save ng pagbabalik sa sirko na napreserba;</li>
        <li>ang mga pagpapakilala kay Ticket Taker, Doctor, at Jester na nakita;</li>
        <li>ang masamang ending na naitala o ligtas na naiwasan;</li>
        <li>isang malinis na huling save na handa para sa susunod na opisyal na update.</li>
      </ul>
      <p>Nasa development pa rin ang Araw 3. Panatilihin ang huling save na ito, ngunit tingnan ang mga susunod na release note bago ipagpalagay na mapa-mapang walang pagbabago ang mga pagpipilian sa bersyong 0.2 sa susunod na pampublikong build.</p>

      <h2>Mga claim na sadyang hindi ginagawa ng gabay na ito</h2>
      <p>May mga walkthrough na naglalarawan ng maraming tapos nang ending, galeriya ng nakatagong eksena, mga kolektibing pin na may mekanikal na epekto sa hinaharap, o ganap na magagamit na ruta para sa bawat ipinakilalang tauhan. Walang isa man sa mga iyon ang kinukumpirma ng opisyal na pahina bilang tapos nang feature. Para sa beripikadong status, gamitin ang <a href="/fil/day-3">tracker ng Araw 3</a> at <a href="/fil/wiki">Wiki ng bersyong 0.2</a> ng site.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'Walkthrough ng Araw 1 sa The Freak Circus: Isang Maingat na Unang Playthrough',
    description: 'Isang praktikal na gabay sa bersyong 0.2 tungkol sa pagkikita kay Pierrot, pagbasa sa maagang pagtutunggali, paglalagay ng mga kapaki-pakinabang na save, at pag-abot sa Araw 2 nang hindi hinahabol ang mga rutang hindi pa tapos.',
    date: '2026-09-02',
    tags: ['Araw 1', 'Walkthrough', 'Mga Bagong Manlalaro'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Isang eksena mula sa kasalukuyang prototype ng The Freak Circus',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Pinakamahusay gumana ang Araw 1 kapag hinayaan mo itong maging hindi komportable. Ipinapakilala nito si Pierrot sa isang karaniwang lakad papunta sa trabaho, pagkatapos ay unti-unting ginagawang simula ng isang mapanganib na pagtutunggali ang isang maliit na pagkikita. Hindi mo kailangan ng perpektong answer sheet para umabot sa Araw 2; kailangan mo ng ilang matinong save at malinaw na ideya kung ano ang kayang — at hindi kayang — resolbahin ng kasalukuyang prototype.</p>
      <div class="walkthrough-note"><strong>Hangganan ng gabay</strong><p>Ito ay gabay na may marka ng spoiler para sa pampublikong bersyong 0.2. Ipinaliwanag nito ang estratehiya sa pag-usad at replay nang hindi umaakmang may tapos nang ending na sina Pierrot, Harlequin, o ang mas malawak na mga tauhan.</p></div>
      <div class="walkthrough-note"><strong>Tungkol sa pag-save</strong><p>Hindi pa nai-publish ng developer ang mga lokasyon ng save, bilang ng slot, ugali ng autosave, o anumang proseso ng paglilipat mula browser patungong desktop para sa larong ito. Ang mga pangalan ng save sa ibaba ay mga label na ibinibigay mo sa sariling mong slot gamit ang karaniwang save at load interface ng engine, hindi opisyal na pangalan ng file.</p></div>

      <h2>Bago magsimula: maghanda ng paglalaro na talagang mababalikan mo</h2>
      <p>Kasama sa mga opisyal na babala sa nilalaman ang dugo, kamatayan, pang-aabuso, pagkidnap, paggamit ng gamot nang walang pahintulot, pisikal na dominasyon, at pakikipag-ugnayang hindi kanais-nais. Hindi ipinapakita ng Araw 1 ang bawat babala sa pinakamataas na intensity, ngunit naitatak nito ang tono. Ipasya kung angkop ba sa iyo ang mga temang iyon bago habulin ang pagkumpleto.</p>
      <p>Gumamit ng tatlong pinangalanang slot mula sa simula:</p>
      <ol class="walkthrough-steps">
        <li><strong>ARAW 1 — MALINIS:</strong> bago ang unang mahalagang pagpipilian.</li>
        <li><strong>PIERROT — KALSADA:</strong> bago pumili kung paano sasagot sa panahon ng pagkikita papunta sa trabaho.</li>
        <li><strong>ARAW 1 — DULO:</strong> bago ang huling pangkat ng mga eksenang nagdadala ng kwento patungo sa Araw 2.</li>
      </ol>
      <p>Huwag tuloy-tuloy na mag-save sa ibabaw ng unang slot. Mas kapaki-pakinabang ang malinis na checkpoint kaysa screenshot ng mga pagpipilian ng ibang tao dahil maaari mong subukan mismo ang kasalukuyang build.</p>

      <h2>Ang pagkikita sa kalsada kay Pierrot</h2>
      <p>Ang pagpapakilala kay Pierrot ang emosyonal na bisagra ng Araw 1. Tinatanong ng eksena kung paano tumutugon ang protagonist sa isang tahimik na estrangherong trinato na bilang taga-labas. Mas maraming gagawin ang pagsulat kapag pumili ka ng sagot na kaya mong panindigan sa halip na subukang i-reverse-engineer ang isang hindi nakikitang "love score".</p>
      <p>Sa unang paglalaro, manatiling konsistente: kung lumapit ka sa kanya nang may pag-aalala, panatilihin ang tonong iyon sa buong eksena; kung pinaghihinalaan mo siya, hayaang manatili ang hindi komportableng pakiramdam. Sa pangalawang paglalaro, i-load ang <strong>PIERROT — KALSADA</strong> at baguhin lamang ang unang pangunahing sagot. Paghambingin ang dayalogo at lenggwahe ng katawan sa halip na ipagpalagay na nakabukas na ng tapos na ruta ang branch.</p>
      <div class="walkthrough-tip"><strong>Tip sa pagkumpleto</strong><p>Huwag mag-restart dahil lang pakiramdam mo ay awkward ang isang sagot. Dinisenyo ang Araw 1 upang magpatuloy sa kabila ng hindi kaginhawahan. Ang save-scumming sa bawat linya ay sumisira sa pacing at karaniwan ay mas kaunti ang impormasyong ibinibigay kaysa sa isang hindi putol-putol na playthrough.</p></div>

      <h2>Nang magsimulang lumawak ang pagtutunggali</h2>
      <p>Hindi simpleng mas maliwanag na alternatibo kay Pierrot si Harlequin. Binabago ng kanyang presensya ang kahulugan ng unang pagkikita sa pamamagitan ng paggawa sa atensyon bilang kompetisyon. Obserbahan kung paano hawak ng bawat performer ang distansya, ang pahintulot, at ang pag-aalinlangan ng protagonist. Mas mahalaga ang mga pagkakaibang iyon sa Araw 1 kaysa sa pagtatangkang magpahayag ng panalo.</p>
      <p>Ang mas malawak na mga tauhan ng sirko ay kabilang sa arc ng pagpapakilala ng prototype. Ang pagkita kay Jester, Doctor, o Ticket Taker ay hindi nangangahulugang nakapasok ka na sa kumpletong rutang romance. Sinasabi lamang ng opisyal na pahina na available ang limang pagpapakilala ng tauhan; hindi pa tapos ang mga planadong ending.</p>

      <h2>Paano umabot sa Araw 2</h2>
      <p>Bahagi na ng bersyong 0.2 ang Araw 2. Hindi ito hiwalay na download at hindi ito nangangailangan ng lihim na code ng ruta. Ipagpatuloy ang kwento pagkatapos ng mga huling eksena ng Araw 1 at hayaang maglaro ang transisyon. Kung babalik bigla ang laro sa isang mas maagang punto:</p>
      <ul>
        <li>tiyakin na ang title screen ay nagpapakita ng kasalukuyang build na 0.2;</li>
        <li>i-load ang <strong>ARAW 1 — DULO</strong> sa halip na mag-restart;</li>
        <li>iwasan ang mabilis na paglaktaw sa mga transisyon o animated na eksena;</li>
        <li>sa browser build, panatilihing bukas ang tab habang natatapos ang pag-load ng eksena, dahil nasa browser storage ang mga browser save.</li>
      </ul>

      <h2>Sadyang simple ang pinakamahusay na estratehiya sa unang paglalaro</h2>
      <div class="walkthrough-route"><div><strong>Unang round</strong><p>Pumili nang natural, huwag laktawan ang dayalogo, at hayaang lumalim ang tensyon. Ang layunin mo ay maunawaan ang mga tauhan, hindi i-optimize ang isang ruta.</p></div><div><strong>Pangalawang round</strong><p>Bumalik sa save sa kalsada at baguhin ang isang sagot. Gamitin ang save sa dulo para sa anumang huling variation ng Araw 1 sa halip na ulitin mula sa title screen.</p></div></div>

      <h2>Mga karaniwang pagkakamali sa Araw 1</h2>
      <h3>Paghahanap ng "good ending ni Pierrot"</h3>
      <p>Walang nilalaman ang bersyong 0.2 na tapos na ending ni Pierrot. Maaaring baguhin ng isang mainit na sagot ang pakiramdam ng isang eksena nang hindi ginagawang tapos nang ruta ang prototype.</p>
      <h3>Pagpapalagay na bawat linya ay nagbabago sa Araw 2</h3>
      <p>May dayalogong naroon lamang upang magtatag ng boses at mood. Maliban kung dalawang paglalaro ang maglabas ng mapapatunayang pagbabago, huwag itanghal ang isang linya bilang kandado ng ruta.</p>
      <h3>Paggamit lamang ng isang save slot</h3>
      <p>Ito ang pinakamadaling paraan para gawing buong restart ang isang maikling replay. Pangalagaan ang mga checkpoint sa kalsada at sa dulo ng Araw 1.</p>
      <h3>Paglaktaw sa mga bahaging hindi komportable</h3>
      <p>Bahagi ng pagkakarakter ang mga babala ng kwento. Kung matitiis mo ang nilalaman, ang maingat na pagbasa sa mga sandaling iyon ay nagpapadali nang husto ng pag-unawa sa Araw 2. Kung hindi, ang paghinto ay wastong pagpipilian.</p>

      <h2>Checklist ng pagkumpleto sa Araw 1</h2>
      <ul class="walkthrough-checklist">
        <li>nakasalamuha mo si Pierrot papunta sa trabaho;</li>
        <li>napreserba mo ang isang save bago ang unang pangunahing sagot;</li>
        <li>nakita mo ang sentral na pagtutunggali na nagsisimulang humugis;</li>
        <li>narating mo ang transisyon papasok sa Araw 2;</li>
        <li>hindi mo pinagkamalan ang isang pagpapakilala bilang tapos na ending.</li>
      </ul>
      <p>Kapag na-check na ang mga iyon, magpatuloy sa <a href="/fil/blog/day-2-walkthrough-save-strategy">walkthrough ng Araw 2</a>. Para sa konteksto ng tauhan nang walang haka-haka sa ruta, basahin ang mga beripikadong profile ni <a href="/fil/characters/pierrot">Pierrot</a> at <a href="/fil/characters/harlequin">Harlequin</a>.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'Ano Talaga ang Nilalaman ng Kasalukuyang Prototype ng The Freak Circus',
    description: 'Isang malinaw at konti-lang-spoiler na gabay sa bersyong 0.2: ano ang pwedeng laruin ngayon, ano ang nasa development pa, at ano ang aasahan ng mga bagong manlalaro.',
    date: '2026-08-15',
    tags: ['Bersyon 0.2', 'Mga Bagong Manlalaro', 'Gabay sa Laro'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'Ang cover artwork ng The Freak Circus',
    readingTime: '5-minutong pagbasa',
    content: `
      <p class="article-lede"><em>Ang The Freak Circus</em> ay pinakamainam lapitan bilang isang pinong gawaing pambungad sa halip na isang tapos at kumpletong-ruta na visual novel. Ang kasalukuyang pampublikong build ay bersyong 0.2 at prototype pa rin ang label nito.</p>
      <h2>Ang maikling sagot</h2>
      <p>Ipinapakilala ng available na build ang sentral na tunggalian at limang kasapi ng mga tauhan. May kasama itong isang masamang ending, habang ang mas malaking script at mga planadong wakas nina Pierrot, Harlequin, ng protagonist, at ang pinagsamang wakas ay nasa development pa rin.</p>
      <p>Mahalaga ang pagkakaibang iyon. Ang paglitaw ng isang tauhan sa prototype ay hindi awtomatikong nangangahulugang may kumpleto na itong rutang romance o huling ending.</p>
      <h2>Ano ang pakiramdam ng unang session</h2>
      <p>Inilalarawan ng opisyal na listing ang karaniwang session na humigit-kumulang kalahating oras. Nagpapadali ito ng pagsubok sa prototype, ngunit nangangahulugan din ito na ang unang playthrough ay dinisenyo upang magtatag ng tono, mga relasyon, at panganib — hindi upang lutasin ang bawat thread.</p>
      <ul><li>Asahan ang orihinal na art ng tauhan at mga background.</li><li>Asahan ang mga may-kahulugang variation ng eksena at isang available na masamang ending.</li><li>Huwag asahan na lalaruin na ang bawat planadong ending.</li></ul>
      <h2>Kilalanin ang hangganan ng nilalaman bago maglaro</h2>
      <p>Ito ay kuwentong psychological horror para sa mga nasa wastong gulang lamang. Kabilang sa mga babala nito ang dugo, kamatayan, pang-aabuso, pagkidnap, pagpapahilo, pisikal na dominasyon, at pakikipag-ugnayang walang pahintulot. Basahin ang mga babalang iyon bago ipasya kung angkop ba sa iyo ang laro.</p>
      <h2>Isang mas mainam na paraan ng paggamit ng mga gabay ng fan</h2>
      <p>Tingnan ang numero ng build bago sundan ang anumang payo sa ruta, panatilihin ang malinis na save bago ang mga pangunahing pagpipilian, at ituring ang mga screenshot o tsart ng pagpipilian na walang nasubukang bersyon bilang pagpapakahulugan ng komunidad. Dapat sabihin ng isang kapaki-pakinabang na gabay kung ano ang naobserbahan, sa aling build, at saan nagsisimula ang mga spoiler.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Browser o Download? Pagpili sa Tamang Paraan ng Paglalaro',
    description: 'Paghambingin ang browser build sa mga lokal na download na Windows, macOS, Linux, at Android, pagkatapos ay ihanda ang iyong mga save file bago magpalit ng bersyon.',
    date: '2026-08-14',
    tags: ['Pag-download', 'Browser', 'Pag-setup'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Isang eksena mula sa browser build ng The Freak Circus',
    readingTime: '4-minutong pagbasa',
    content: `
      <p class="article-lede">Pareho ang kwento, ngunit ang pinakamahusay na paraan ng paglalaro ay nakasalalay sa kung gaano karaming setup ang nais mo at kung kailangan mo ng lokal na kopyang dadalhin.</p>
      <h2>Piliin ang browser build para sa pinakamabilis na simula</h2>
      <p>Ang bersyong HTML5 ang pinakasimpleng pagpipilian para sa unang tingin: buksan ang laro, hintaying mag-load ang pahina, at magsimula nang walang ini-install na archive. Kapaki-pakinabang din ito kapag naglalaro ka sa shared na makina at ayaw mong mag-iwan ng mga file ng laro.</p>
      <p>Maaaring burahin ng mga tool sa privacy o ng pag-reset ng browser ang browser storage, kaya hindi ito ang pinakamainam na lagyan ng save na hindi mo kayang mawala.</p>
      <h2>Pumili ng download para sa patuloy na lokal na kopya</h2>
      <p>Nakalista ang mga package na Windows, macOS, Linux, at Android para sa bersyong 0.2. Iniiwasan ng lokal na build ang mga limitasyon ng browser storage at karaniwang mas komportableng pagpipilian para sa paulit-ulit na playthrough.</p>
      <ul><li>Itugma ang package sa iyong operating system.</li><li>I-extract ang mga archive ng desktop bago ilunsad ang laro.</li><li>Mag-back up ng mga save bago palitan ang isang luming build.</li></ul>
      <h2>Bakit mahalaga ang pinagmumulan</h2>
      <p>Gamitin ang itch.io listing ng developer sa halip na isang repost o muling na-package na installer. Itinuturo ng developer ang listing na iyon bilang opisyal na pahina ng pamamahagi at hinihiling sa mga manlalaro na huwag gumamit ng mga kopyang muling na-upload.</p>
      <h2>Kung may magkulang</h2>
      <p>Una, tiyakin ang numero ng build at ang platform. Para sa mga problema sa browser, sumubok ng kasalukuyang browser na pamilya Chrome o Edge at i-disable ang agresibong pagsasalin ng pahina para sa tab ng laro. Para sa archive ng desktop, i-extract ito nang buo at panatilihin ang application kasama ng mga isinama nitong file.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Paghintay sa Araw 3 nang Hindi Nadadala sa mga Rumor ng Petsa ng Paglabas',
    description: 'Isang praktikal na checklist para paghiwalayin ang tunay na usad ng development mula sa mga countdown, hula, at paulit-ulit na claim tungkol sa susunod na kabanata.',
    date: '2026-08-13',
    tags: ['Araw 3', 'Mga Update', 'Fact-check'],
    image: '/images/home/characters.webp',
    imageAlt: 'Character artwork ng The Freak Circus',
    readingTime: '5-minutong pagbasa',
    content: `
      <p class="article-lede">Nasa development ang Araw 3, ngunit hindi pareho ang aktibidad ng development at isang kinumpirmang petsa ng paglunsad. Ang paghihiwalay ng dalawang ideyang iyon ang pinakamadaling paraan para maiwasan ang mga mapanlinlang na pahina ng countdown at paulit-ulit na rumor.</p>
      <h2>Ano ang talagang naitatag</h2>
      <p>Sinasabi ng pampublikong pahina ng laro na magpapatuloy ang kwento sa isa pang araw sa loob ng laro at na ginagawa pa ang bahaging ito. Hindi ito naglalathala ng araw ng paglabas. Hanggang sa lumabas ang isang anunsyo ng paglabas na may petsa, ang anumang tiyak na petsa ay dapat ituring na haka-haka.</p>
      <h2>Nakakatulong ang mga senyales ng usad — ngunit limitado</h2>
      <p>Ang programming ng dayalogo, bagong artwork, mga pagbabago sa background, pagsubok, at preview ng eksena ay nagpapakita lahat na gumagalaw ang trabaho. Walang isa man sa mga milestone na iyan ang nag-iisang nagsasabi kung kailan magiging handa ang isang matatag na pampublikong build.</p>
      <h2>Gawin ang mabilis na pagsusuri ng rumor</h2>
      <ol><li>Hanapin ang tiyak na petsa ng paglalathala at pinangalanang may-akda.</li><li>Tingnan kung ang sinasabi ay "nailabas na" o "nasa development" lamang.</li><li>Ihiwalay ang mga screenshot ng gawaing isinasagawa mula sa isang build na maaaring i-download.</li><li>Tanggihan ang mga pahinang ginagawang countdown ang tantya ng isang fan.</li></ol>
      <h2>Gamitin nang mabuti ang oras ng paghihintay</h2>
      <p>Panatilihin ang iyong mga kasalukuyang save, ituon kung aling build ang gumawa sa mga ito, at iwasan ang pagpatong sa slot ng unang playthrough. Kapag dumating ang susunod na build, basahin ang mga change note nito bago ipagpalagay na gumagana pa rin ang lumang payo sa ruta.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Taas at Pagkakasunod ng Edad ni Pierrot sa The Freak Circus',
    description: 'Ang taas ni Pierrot ay 198 cm at pangatlo siya sa lima sa opisyal na pagkakasunod ng edad, pinakamatanda una — ang inilathala ng developer, at ang idinagdag ng fandom sa ibabaw nito.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Mga Taas', 'Mga Katotohanan sa Tauhan'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Si Pierrot, ang tahimik na payaso sa gitna ng The Freak Circus',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Ang taas ni Pierrot ay 198 cm, at sa inilathalang pagkakasunod ng edad ng developer ay pangatlo siya sa lima, pinakamatanda una. Galing ang dalawang numerong iyon sa parehong opisyal na materyal ng natitirang tsart ng mga tauhan, at sa pagitan ng mga ito ay nalulutas ang karamihan sa argumentong umiikot online tungkol sa laki at edad niya — habang nag-iiwan ng dalawang butas na pinupuno ng fandom sa sarili nitong paraan.</p>
      <div class="walkthrough-note"><strong>Kung saan nakabatay ang artikulong ito</strong><p>Galing ang taas, pagkakasunod ng edad, at ranking ng lakas sa inilathalang tsart ng developer at mga sagot sa AMA. Walang edad, kaarawan, o tinantiyang numerong itinalaga ng fan ang itinuturing na katotohanan dito. Ang materyal na galing sa fandom wiki ay nilalagyan ng label na galing sa fandom sa halip na opisyal.</p></div>

      <h2>Ang taas: 198 cm</h2>
      <p>Naglathala ang developer ng height chart kasama ng sprite reference na ginamit sa pagguhit ng mga tauhan. Ang entry ni Pierrot ay 198 cm, na katumbas ng humigit-kumulang 6 ft 5.95 in. Inilalagay nito siya bilang pangalawang pinakamataas sa limang ipinakilalang tauhan: siyam na sentimetro ang layo sa Doctor na 207 cm, at labing-isang sentimetro ang taas kay Harlequin na 187 cm.</p>
      <p>Dahil umiiral ang tsart bilang reference sa pagguhit sa halip na bilang set ng mga numerong isinulat pagkatapos ng pangyayari, ito ang uri ng pagsukat na nananatiling matatag. May dalawang bagay na sumusunod dito. Ang buong ipinakilalang mga tauhan ay saklaw lamang ng 24 cm, mula sa 207 ng Doctor hanggang sa 183 ng Ticket Taker — isang makitid na saklaw at isang kapaki-pakinabang na pagsusuri sa fan art na nagpapakita ng isang tauhang lumulusob sa ibabaw ng isa pa. At totoo ang labing-isang sentimetrong agwat ng dalawang lead sa romance, kaya itinuturing ito ng fandom wiki na may kahulugan sa pagkaka-stage nina Pierrot at Harlequin laban sa isa't isa.</p>
      <h2>Ang pagkakasunod ng edad: pangatlo sa lima, pinakamatanda una</h2>
      <p>Isang hiwalay na sagot sa AMA ang tumugon sa kahilingang ayusin ang mga tauhan mula pinakamatanda hanggang pinakabata at nagbigay ng nakapirming pagkakasunod:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — una, ang pinakamatanda.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — pangatlo.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — huli, ang pinakabata.</li>
      </ol>
      <p>Kaya nakaupo si Pierrot sa gitna ng kompanya: mas matanda kaysa Jester at Harlequin, mas bata kaysa Ticket Taker at Doctor. Sa mga tauhang itinayo sa paligid ng tunggalian ng dalawang dulo ng listahang iyon, ang pagiging pangatlo ay nangangahulugang mas matanda siya sa lalaking kinakalaban niya at mas bata sa dalawang pigurang nagpapanatiling buo ang sirko.</p>
      <h3>Ang hindi sinasabi sa iyo ng "pangatlo"</h3>
      <p>Walang binibigay na numero, at walang binibigay na agwat. Ang isang relatibong pagkakasunod ay nagsasabi lamang na mas matanda ang isang tauhan kaysa isa; maaaring magkatabi sa listahan ang dalawang tauhan at malayo pa rin ang layo ng kanilang mga edad. Walang numerong edad na kailanman nai-publish para sa isa man sa lima, kaya ang pagkakasunod lamang ang tanging impormasyon tungkol sa edad na inilabas ng developer. Mahalaga iyon dahil ang isang tiyak na numero ang pinakakaraniwang idinadagdag ng mga fan site sa mga tauhang ito, at halos kailanma'y walang pinagmumulan ang mga numerong iyon.</p>
      <div class="walkthrough-tip"><strong>Paano suriin ang claim sa taas o edad na natagpuan mo sa iba</strong><p>Magtanong ng tatlong tanong. Ituro ba ng pinagmumulan sa tsart ng developer, isang sagot sa AMA, o isang opisyal na post? Itinatangi ba nito ang nai-publish na numero mula sa tantya? At sinasabi ba nito kung aling build ang inilalarawan ng impormasyon? Mapagkakatiwalaan sa mga detalye ang gabay na sumasagot sa tatlo; ang walang nasasagot man ay dekorasyon lamang sa ibabaw ng hula ng iba.</p></div>

      <h2>Hiwalay na listahan ang lakas</h2>
      <p>Naglathala din ang developer ng raw na ranking ng pisikal na lakas, at hindi ito sumusunod sa taas. Una si Pierrot rito — sa unahan nina Harlequin at Jester na magkatie sa pangalawa, pagkatapos ang Doctor, at huli ang Ticket Taker.</p>
      <p>Ang pagiging parehong pangalawang pinakamataas at pinakamalakas ni Pierrot ay sadyang pagkakarakter, hindi nagkataon lamang ng tsart. Tinatawag siya ng opisyal na synopsis na "the silent yandere", at ang isang tauhang pisikal na nangingibabaw at halos ganap na tahimik ay isang tiyak na uri ng banta: ang panganib ay hindi sa magpapahayag siya ng sarili, kundi sa hindi niya kailangang gawin iyon. Ang paglalarawan ng fandom wiki sa kanya bilang mabait at magalang sa ibabaw habang sinusundan ang protagonist ay akma sa hugis na iyon, bagaman galing sa fan ang partikular na pagkakarakter na iyon.</p>

      <h2>Ano ang kinumpirma at ano ang idinagdag</h2>
      <ul>
        <li><strong>Kinumpirma ng developer:</strong> ang taas niyang 198 cm, ang kanyang pangatlong puwesto sa pagkakasunod ng edad, ang kanyang unang puwesto sa ranking ng lakas, ang paglalarawan sa kanya bilang "the silent yandere", at ang katotohanang planado ang isang romantikong ending ni Pierrot.</li>
        <li><strong>Mula sa kasalukuyang build:</strong> ang kanyang hitsura, ang kanyang mga eksena, at ang paraan ng kanyang pagtugon sa protagonist sa mga branch.</li>
        <li><strong>Galing sa fandom:</strong> ang detalyadong paglalarawan ng kasuotan — puting maskara na may itim na patayong hiwa, gintong mga mata, pulang-itim na jester cap, pulang motley na amerika — ang dahil sa loob ng kwento ng kanyang katahimikan, at anumang tiyak na edad o kaarawang iniuugnay sa kanya.</li>
      </ul>
      <p>Isang maliit na paliwanag tungkol sa kasuotan at katahimikan, dahil madalas maling buuran ang dalawa. Ang salaysay ng fandom wiki ay nagtatag si Jester ng isang patakaran tungkol sa hindi pagsasalita sa publiko, at malalim na iginagalang ni Pierlot si Jester. Kaaya-ayang detalye ito, umaangkop sa kung paano isinulat ang dalawang tauhan, ngunit galing ito sa wiki sa halip na sa developer. Humihinto sa pariralang "the silent yandere" ang first-party na materyal at itinuturing ang katahimikan bilang bahagi ng pagkakarakter sa halip na isang voice track na kulang.</p>

      <h2>Bakit sulit pakialaman ang mga numero</h2>
      <p>Ang mga sukat ang bahagi ng cast sheet na pinakamadaling suriin at pinakamadalas gawa-gawain, at naranasan ng larong ito ang dalawa: isang totoong inilathalang tsart at maraming numerong hindi galing dito. Ang pag-alam na si Pierrot ay 198 cm at pangatlo sa pinakamatanda ay nangangahulugang makikita mo agad kung kailan palihim na pinalitan ng wiki ang isang bilang — at, mas kapaki-pakinabang, mababasa mo ang mga eksena niya nang may tamang larawan. Ang isang tauhang 198 cm na siya ring pinakamalakas sa lima ay kumikilos nang iba sa screen kaysa sa isang lalaking karaniwang taas, at nakasalalay dito ang pagkaka-stage sa kanya ng laro.</p>
      <p>Para sa buong larawan ng mga tauhan, nakalista sa <a href="/fil/characters/heights">gabay sa taas at ranking</a> ang lahat ng limang tauhan, at sumasaklaw ang <a href="/fil/characters/pierrot">profile ni Pierrot</a> sa status ng kanyang ruta at sa materyal ng fandom nang mas detalyado.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Taas at Pagkakasunod ng Edad ni Harlequin sa The Freak Circus',
    description: 'Ang taas ni Harlequin ay 187 cm at siya ang pinakabata sa limang ipinakilalang tauhan — ang mga numerong inilathala ng developer, at ang mga claim ng fan na sinasalungat nila.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Mga Taas', 'Mga Katotohanan sa Tauhan'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Si Harlequin, ang teatrikal na kaagaw ni Pierrot sa The Freak Circus',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Ang taas ni Harlequin ay 187 cm, ang pinakamababa sa limang ipinakilalang tauhan, at ang pinakabata sa lima sa inilathalang pagkakasunod ng edad ng developer. Nakadokumento ang dalawang katotohanang ito. Ang tiyak na edad na umiikot para sa kanya online ay karaniwang hindi — at sa karamihan ng mga kaso ay salungat ito sa tanging pahayag ng edad na talagang ginawa ng developer.</p>
      <div class="walkthrough-note"><strong>Saklaw at pinagmumulan</strong><p>Kinuha ang taas, pagkakasunod ng edad, at ranking ng lakas mula sa inilathalang tsart ng developer at mga sagot sa AMA. Ang paglalarawan ng kasuotan, buod ng personalidad, at anumang tiyak na edad o kaarawan ay galing sa fandom wiki at nakamarka bilang galing sa fandom. Hindi itinuturing ng artikulong ito ang isang tantya mula sa loob ng kwento bilang pagsukat.</p></div>

      <h2>Ang taas: 187 cm</h2>
      <p>Ang entry ni Harlequin sa height chart ng developer ay 187 cm, humigit-kumulang 6 ft 1.62 in. Ginagawa ito siyang pinakamababa sa limang ipinakilalang tauhan: 20 cm ang layo sa Doctor na 207 cm, 11 cm kay Pierrot, 5 cm kay Jester, at 4 cm ang taas sa Ticket Taker.</p>
      <p>Ang kawili-wiling bahagi ng numerong iyon ay kung ano ang kapareha nito. Hawak ni Harlequin ang pangalawang puwesto sa ranking ng lakas ng developer kapuwang si Jester, sa likod ni Pierrot at sa unahan ng Doctor at Ticket Taker. Binabasa ng fandom wiki ang kombinasyong iyon — pinakabata at pinakamababa ang taas, ngunit magkatie sa pangalawang pinakamalakas — bilang dahilan kung bakit isinulat si Harlequin na mabilis at pisikal sa halip na mabigat. Pagpapakahulugan ang pagbasa na iyon, ngunit pagpapakahulugan itong itinayo sa dalawang nai-publish na numero sa halip na sa hula.</p>
      <h2>Ang pagkakasunod ng edad: huli sa lima</h2>
      <p>Ang pagkakasunod ng edad ng developer, pinakamatanda una, ay Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Panglima si Harlequin — ang pinakabata sa ipinakilalang mga tauhan, at ang pinakabata sa dalawang lead sa romance nang dalawang puwesto.</p>
      <p>Ito ay tunay na nakadokumentong katotohanan at isa sa pinakamadalas mausok online. Malaking bahagi ng materyal ng fan ay nagtatalaga kay Harlequin ng tiyak na numerong edad, at ilan sa mga numerong iyon ay hindi mapapag-isa sa isang inilathalang pagkakasunod na naglalagay sa kanya sa ilalim ng mas matandang Ticket Taker at Doctor at walang nasa ilalim niya. Ang pagkakasunod ang maaasahang bersyon, at ito rin ang tanging bersyong umiiral: walang numerong edad na nai-publish para sa anumang tauhan sa larong ito.</p>
      <div class="walkthrough-tip"><strong>Kung gusto mong i-quote ang edad niya, i-quote ang pagkakasunod</strong><p>Isulat ang "pinakabata sa limang ipinakilalang tauhan" sa halip na numero. Tumpak ito, may pinagmumulan, at tatagal sa susunod na update. Ang mga numerong itinalaga ng mga fan site sa mga tauhang ito ay may gawing masalungat ng mga sumunod na sagot sa AMA — kaya rin naglalathala ang developer ng pagkakasunod sa halip na numero.</p></div>

      <h2>Ang labing-isang sentimetrong agwat</h2>
      <p>Mas mababa nang 11 cm si Harlequin kaysa Pierrot, at sapat na malaki ang pagkakaibang ito para mabasa sa screen nang hindi kailangang palakihin. Itinuturing ng fandom wiki na may kahulugan ang agwat sa paraan ng pagkaka-stage ng dalawang lead laban sa isa't isa — ang tahimik na pumupuno ng frame, ang teatikal na gumagalaw sa paligid nito. Kung disenyo ng layunin iyon o bunga ng sprite reference ay hindi sinabi ng developer, kaya nananatili ito sa kolum ng fandom.</p>
      <p>Mas simple ang kinumpirma: inilathala ang tsart ng developer bilang reference na ginamit sa pagguhit ng mga sprite, kaya itinuturing na kanonikal ang mga numero sa halip na binasa mula sa artwork. Kung nagguhit ang isang fan art kay Harlequin na mas matangkad kay Pierrot, istilisado ang art; nananatili ang opisyal na mga bilang na 187 at 198.</p>

      <h2>Ano ang sinasabi ng opisyal na materyal tungkol sa kanya</h2>
      <p>Bukod sa mga tsart, may direktang sinabi ang developer na ilang bagay tungkol kay Harlequin. Tinatawag siya ng opisyal na synopsis na "seductive rival" ni Pierrot at inilalarawan ang laro bilang pinangungunahan ng alinman sa dalawa — ang pinakamalinaw na mungkahi ng isang kuwentong may dalawang rutang romance at walang iba.</p>
      <p>Sulit maingat na i-quote ang isang sagot sa AMA dahil madali itong maling mabasa. Tanong tungkol sa mga kagat na iniwan ni Harlequin habang nanliligaw, ang sagot ay hindi mga pagpapakasal ang mga iyon, na hindi nag-iiwan ng peklat ang marka, at na iba ang paggana ng kasal at panliligawan sa mga monster kaysa sa pag-unawa ng protagonist sa mga ito. May tunay na ginagawa ang maliit na palitan na iyon: nagtatatag ito na umiikot sa sariling lohika ng sirko ang panliligaw ni Harlequin, at na ang frame of reference ng protagonist ay hindi ang frame of reference ng mga taong nakapaligid sa kanya.</p>
      <p>Dagdag pa ng fandom wiki na mas ligtas nararamdaman ni Harlequin sa paligid ng Doctor, na ang Doctor ang paborito niyang tao sa sirko, at na ayos ang samahan niya sa Ticket Taker sa kabila ng bangayan ng kagustuhan. Nagtala rin ito ng ipinahiwatig na ugnayan sa kamatayan ni Columbina — na pinatay ni Harlequin siya para "iligtas" siya — na mismong wiki ay inihaharap bilang pahiwatig sa halip na pahayag. Kinukumpirma ang pangkalahatang hugis ng kasaysayan ng sirko sa mga sagot sa AMA; ang partikular na pagbasa na iyon sa papel ni Harlequin dito ay hindi first-party.</p>

      <h2>Status ng ruta: planado, hindi pa lalaruin</h2>
      <p>Ang romantikong ending ni Harlequin ay isa sa apat na wakas na pinangalanan ng developer, kasama ang kina Pierrot, ng Protagonist, at ang pinagsamang ending na "All together". Walang isa man sa apat ang naipatupad. May eksaktong isang ending ang kasalukuyang build — ang masamang ending na «Missing» sa Araw 1 — kaya walang kondisyong trigger na maaaring i-publish at walang tapat na walkthrough na maisusulat.</p>
      <ul>
        <li><strong>Kinumpirma:</strong> ang kanyang taas, ang kanyang huling puwesto sa pagkakasunod ng edad, ang kanyang pagkakatie sa pangalawa sa lakas, ang paglalarawan sa kanya bilang "seductive rival" ni Pierrot, ang paliwanag na ang kanyang mga kagat sa panliligaw ay hindi mga proposal, at na planado ang isang romantikong ending ni Harlequin.</li>
        <li><strong>Mula sa kasalukuyang build:</strong> ang kanyang hitsura, ang kanyang mga eksena, at ang katotohanan na ilan sa kanyang mga paglitaw ay nag-iiba depende sa branch ng kwento, na kinukumpirma ng isang opisyal na tala ng bug.</li>
        <li><strong>Galing sa fandom:</strong> ang paglalarawan ng maskara — puting maskara na may berdeng diyamante at berdeng tatsulok, mata na berdeng lason, kulot na itim na buhok na may hiblang hugis puso — ang kanyang personal na kasaysayan, at mga detalye ng kanyang relasyon kay Columbina.</li>
      </ul>

      <h2>Pagsasama-sama ng mga numero</h2>
      <p>Inilalarawan ng mga opisyal na sukat ni Harlequin ang isang tiyak na tauhan: ang pinakabata, ang pinakamababa ang taas, at magkatie sa pangalawang pinakamalakas ng limataong kompanya, na nakikipagkumpitensya sa atensyon kasama ang pangalawang pinakamataas at pinakamalakas na kasapi ng parehong kompanya. Hindi siya pisikal na nangingibabaw at hindi siya walang karanasan — mabilis siya, teatikal, at gumagana mula sa posisyong talagang magkapareho ang tunggalian. Mas kapaki-pakinabang iyon nang husto kaysa sa gawa-gawang edad, at ganap itong nakadokumento.</p>
      <p>Para sa buong mga tauhan nang sabay-sabay, tingnan ang <a href="/fil/characters/heights">gabay sa taas at ranking</a>; para sa status ng kanyang ruta at mga relasyon, tingnan ang <a href="/fil/characters/harlequin">profile ni Harlequin</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'Mga Ending ng The Freak Circus: Ano ang Umiiral at Ano ang Hindi',
    description: 'Isang kumpletong listahan ng status ng mga ending sa The Freak Circus — isang naipatupad na masamang ending, apat na planadong wakas, at ang mga rutang hindi umiiral.',
    date: '2026-09-28',
    tags: ['Mga Ending', 'Mga Ruta', 'Bersyon 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Ang mga tauhan ng The Freak Circus na natipon sa paligid ng protagonist',
    readingTime: '9-minutong pagbasa',
    content: `
      <p class="article-lede">May isang lalaruin na ending ang The Freak Circus ngayon, at apat pa na pinangalanan ng developer ngunit hindi pa nasusulat sa alinmang build. Halos bawat tsart na "lahat ng ending" sa internet ay pinagsasama ang dalawang kategoryang iyon, kaya rin ang parehong tanong ay nakakakuha ng apat na magkakaibang sagot. Narito ang listahan na malinaw na nakasaad ang status ng bawat entry.</p>
      <div class="walkthrough-note"><strong>Saklaw ng listahang ito</strong><p>Saklaw nito ang pampublikong prototype na bersyong 0.2 at ang mismong mga inilathalang pahayag ng developer tungkol sa planadong gawain. Naglalaman ito ng spoiler ng kwento para sa isang ending na umiiral. Walang konklusyong pinaghaka-haka o pinangalanan ng fan na nakalista bilang ending, dahil walang ganoong bagay na umiiral bilang ending hangga't hindi pa inilalabas ng developer.</p></div>

      <h2>Ang maikling bersyon</h2>
      <ul>
        <li><strong>Pwedeng laruin ngayon: 1.</strong> Ang ending na «Missing» — isang masamang ending sa Araw 1.</li>
        <li><strong>Ipinapahayag bilang plan: 4.</strong> Pierrot (romance), Harlequin (romance), Protagonist (walang romance), at "All together" (poly).</li>
        <li><strong>Mga opsyon sa rutang kinumpirma: 4.</strong> Pierrot, Harlequin, pareho sila, o walang isa man.</li>
        <li><strong>Mga rutang hindi umiiral: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Opisyal na kabuuang bilang ng mga ending: walang nai-publish.</strong> Sinabi ng developer na maraming ending ang planado ngunit hindi niya maibibigay ang bilang.</li>
      </ul>

      <h2>Ang isang ending na umiiral</h2>
      <p>May isang ending lamang ang nilalaman ng bersyong 0.2, at masama ito. Nararating ito sa Araw 1, at sadyang simple ang kondisyon: kung walang gagawin ang protagonist habang inaasar si Pierlot ng isang lalaki sa harap ng maraming tao, ibibigay sa protagonist ang isang pink na tiket ng isang di-kilalang tao, dadalhin sa pink na tent, at tatanggihin ng bawat kasapi ng sirko. Malinaw na sinasabi ng laro na nabigo ang protagonist sa pag-abot sa atensyon ni Pierlot at nagtapos nang trahediko.</p>
      <p>Totoong ending iyon na may totoong bunga, hindi placeholder — at ito ang buong nilalaman ng kategoryang ending sa kasalukuyang build. Ito rin, istruktural, ang argumento ng laro sa maliit na anyo: ang protagonist na hindi nakikisali sa sentral na tunggalian ay palihim na inaalis dito.</p>
      <div class="walkthrough-tip"><strong>I-record ito sa halip na iwasan</strong><p>Ang ending na «Missing» ang tanging resultang opisyal na iniaalok ng build, kaya ang pag-abot dito ay kumukumpleto sa kasalukuyang prototype sa halip na sisirain ito. Kapag sinabi ng isang gabay na i-reload mo at huwag nang makita ito, itinuturing nito ang ending bilang bagay na dapat protektahan sa halip na bagay na umiiral.</p></div>

      <h2>Ang apat na planadong ending</h2>
      <p>Naglilista ang developer ng apat na wakas sa opisyal na pahina at sa opisyal na FAQ. Dalawa ay ending ng romance, isa ay malinaw na walang romance, at isa ay poly ending.</p>
      <ul>
        <li><strong>Ending ni Pierrot (romance)</strong> — natatapos ang protagonist kasama ni Pierrot. Nakalista bilang planadong gawain at paulit-ulit na inilalarawan na nasa development pa.</li>
        <li><strong>Ending ni Harlequin (romance)</strong> — natatapos ang protagonist kasama ni Harlequin. Hindi pa tapos ang script para rito.</li>
        <li><strong>Ending ng Protagonist (walang romance)</strong> — tinatapos ng protagonist ang kwento nang walang romance. Kinumpirma ng developer na umiiral ang rutang ito bilang konsepto at na maaari pa ring piliin ang mga pagkakaibigan sa tabi nito.</li>
        <li><strong>"All together" (poly)</strong> — umiibig ang protagonist kay Pierrot at Harlequin nang sabay-sabay. Hiwalay itong nakalistang wakas, hindi variant ng alinmang rutang romance.</li>
      </ul>
      <p>Mahalagang hindi gawing numero ang listahang ito. Tuwirang tinanong ang developer kung ilang ending ang magkakaroon ang tapos na laro at sinabi niyang marami ang planado ngunit walang bilang na maibibigay, dahil ang script ay ginagawa pa. Ang pahinang nagsasabing "may limang ending ang The Freak Circus" ay kumuha ng apat na pinangalanang planadong wakas dagdag ang isang naipatupad at gumawa ng kabuuang hindi kailanman sinabi ng developer.</p>

      <h2>Sinong mga tauhan ang maaaring puntahan ng ruta</h2>
      <p>Makitid ang opisyal na sagot: Pierrot, Harlequin, pareho sila, o wala. Ang ruta ng Protagonist ang opsyong "wala" — kinumpirmang walang romance, habang pinapayagan ka pa ring pumiling makipagkaibigan sa mga tauhan.</p>
      <p>Walang ruta para sa Jester, Ticket Taker, o Doctor. Sinabi ng developer na kung magdadagdag pa ng mga ruta sa bandang huli, malamang darating ang mga ito bilang add-on o DLC, at hindi pa ito napagpapasyahan. Ang paggawa sa natitirang mga tauhan bilang mga opsyong romance ay inilalarawan bilang posibilidad sa halip na pangako — pagkakaibang mahalaga, dahil madalas ilarawan ng mga gabay ng fan ang mga rutang iyon sa kasalukuyang panahunon na para bang nakatago lamang.</p>
      <p>May dalawang claim na kumakalat nang malawakan na hindi tumutugma sa anumang inilarawan ng developer: na ang ruta ni Jester ay "nabubuksan sa Araw 2", at na may "Clean Hands" na ending ang Doctor. Nagdagdag ang update ng Araw 2 ng mga tauhan, animated na mga sprite, muling dinisenyong menu, at bersyong Android — hindi mga bagong ruta.</p>

      <h2>Bakit hindi magkakasundo ang mga gabay tungkol sa bilang</h2>
      <p>Iba't ibang site ang tumutugon sa iba't ibang tanong. May mga bumibilang lamang ng pwedeng laruin, may mga bumibilang lamang ng pinangalanan ng developer, at may mga bumibilang ng halo-halong planadong wakas at pinaghaka-haka ng fan. Ang pag-uuri ng anumang claim sa tatlong lalagyan — naipatupad, planado, o hindi pa naverify — ay nalulutas ang hindi pagkakasundo nang mas mabilis kaysa pagtatalo tungkol sa numero.</p>
      <p>May dalawang babala para sa listahan ng mga planado. Isinusulat pa ang script, kaya maaaring magbago ang set ng mga wakas bago maibalot ang alinman sa kanila. At ang Araw 3 ang kinasisulatan ngayon ng mga bagong wakas, na gumagawang snapshot ang kasalukuyang listahan ng isang planang isinasagawa sa halip na tapos na katalogo.</p>

      <h2>Ano ang ibig sabihin nito sa paglalaro</h2>
      <p>Ituring ang prototype bilang unang dalawang araw ng isang tatlong-araw na kwento. Ang available ay isang pambukang arc na nagtatatag ng mga tauhan, ng tunggalian, at ng isang ending ng pagkabigo. Umiiral ang estruktura ng ruta sa pag-branch; hindi pa umiiral ang mga wakas sa build. Ang paglalaro ng kasalukuyang bersyon ay paraan ng pagkakita kung paano gumagana ang pag-branch, hindi paraan ng pagkumpleto sa laro.</p>
      <p>Para sa mas buong paliwanag na may pinagmumulan, tingnan ang <a href="/fil/endings">gabay sa mga ending at ruta</a>; para sa isinusulat pa, tingnan ang <a href="/fil/day-3">tracker ng Araw 3</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'Ang Limang Tauhan ng The Freak Circus',
    description: 'Isang pahinang pangkalahatang tanaw sa limang ipinakilalang tauhan — sina Pierrot, Harlequin, Jester, Doctor, at Ticket Taker — na may mga taas, rangko, at status ng ruta.',
    date: '2026-10-01',
    tags: ['Mga Tauhan', 'Pangkalahatang Tanaw', 'Bersyon 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Si Jester, ang pigura ng awtoridad ng The Freak Circus',
    readingTime: '10-minutong pagbasa',
    content: `
      <p class="article-lede">Nagpapakilala ang bersyong 0.2 ng limang tauhan, at lahat ng lima ay may sariling mga eksena ng pagpapakilala sa pampublikong build. Ang numerong iyon ang madalas maging pinagmumulan ng ikalawang, maling palagay — na ang limang ipinakilalang tauhan ay nangangahulugang limang available na ruta. Hindi ito ganoon. Dalawa sa kanila ang may planadong rutang romance, tatlo ay wala, at walang isa man sa mga planadong ending ang lalaruin pa.</p>
      <div class="walkthrough-note"><strong>Paano basahin ang pangkalahatang tanaw na ito</strong><p>Galing ang mga taas, puwesto sa pagkakasunod ng edad, at rangko ng lakas sa inilathalang tsart ng developer. Sumusunod ang status ng ruta at ending sa mismong mga pahayag ng developer. Ang mga detalye sa personalidad at relasyon na iniuugnay sa fandom wiki ay nilalagyan ng label na ganoon, dahil ang karamihan sa kawili-wiling detalye tungkol sa mga tauhang ito ay galing sa materyal ng kwento sa halip na sa mga post ng developer.</p></div>

      <h2>Ang mga tauhan sa isang tingin</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, pangatlo sa pinakamatanda, pinakamalakas. Ang tahimik na obsesyon sa gitna ng kwento at ang mas mataas sa dalawang lead sa romance.</li>
        <li><strong>Harlequin</strong> — 187 cm, pinakabata, magkatie sa pangalawa sa lakas. Ang "seductive rival" ni Pierrot at ang mas mababa sa dalawang lead sa romance.</li>
        <li><strong>Jester</strong> — 192 cm, ikaapat sa pinakamatanda, magkatie sa pangalawa sa lakas. Ang pigura ng awtoridad na gumagawang parang institusyon ang sirko. Walang ruta.</li>
        <li><strong>Doctor</strong> — 207 cm, pangalawa sa pinakamatanda, pangatlo sa pinakamalakas. Ang pinakamataas sa lima at isa sa mas klinikal na presensya sa mga tauhan. Walang ruta.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, pinakamatanda, pinakamahina. Ang tagapagbantay ng hangganan at ang tauhang pinaka-ugnay sa pag-branch. Walang ruta.</li>
      </ul>
      <p>May tatlong katotohanang angkop sa lahat ng lima nang sabay. Inilathala ang height chart ng developer bilang reference na ginamit sa pagguhit ng mga sprite, kaya kanonikal ang mga numero. Ang pagkakasunod ng edad ay relatibo lamang — walang numerong edad para kaninuman. At ang ranking ng lakas ay inilathala bilang dagdag na puna sa tanong ng isang fan, kaya nababasa ito bilang bahagi ng pagkakarakter sa halip na bilang stat screen.</p>

      <h2>Pierrot</h2>
      <p>Ang tauhang pinagtayo ng laro. Tinatawag siya ng opisyal na synopsis na "the silent yandere" — mismong paglalarawan ng developer, at ang dahilan kung bakit may timbang ang bawat galaw niya sa midyum na umiikot sa dayalogo. Inilalarawan siya ng fandom wiki bilang mabait at magalang sa ibabaw habang sinusundan ang protagonist, at bilang maprotekta sa protagonist at kay Columbina; nagtala rin ito ng sagot ng developer na hindi kailanman pababayaan ni Pierlot ang protagonist, at buong diin. Planado ang isang romantikong ending ni Pierlot at nasa development.</p>
      <h2>Harlequin</h2>
      <p>Kung saan gumagana si Pierlot sa pamamagitan ng katiyagaan, si Harlequin ay gumagana sa pagtatanghal. Tinatawag siya ng opisyal na synopsis na "seductive rival" ni Pierlot at inihaharap ang laro bilang pinangungunahan ng alinman sa dalawa. Inilalarawan siya ng fandom wiki bilang walang-pakialam, sadistiko, nanunukso, at palihim na naiinggit — at binabanggit na hindi komportable sa pagmamahal, na muling binubuo ang tunggalian bilang bagay na nais niya kasing nais ni Pierlot. Planado ang kanyang romantikong ending at hindi pa naipatupad.</p>
      <h2>Jester</h2>
      <p>Ang pinakamadalas maling ilarawan online, kadalasan sa pamamagitan ng pagbibigay sa kanya ng rutang romance na wala naman siya. Gumagana siya bilang pigura ng awtoridad ng sirko: tinatawag siya ng fandom wiki na pinuno at pangunahing antagonist, kalmado at nakokolekta sa halip na pabagu-bago, at inilalarawan din siya ng fandom bilang kumokontrol sa mga "Fools" at tinatawag ang mga tao na mga gala. Interpretasyon ng kanyang mga eksena ang mga detalyeng iyon sa halip na mga pahayag ng developer, ngunit ang kanyang awtoridad sa ibang mga tauhan ay pare-pareho sa buong build. Walang rutang Jester at walang ending na Jester.</p>
      <h2>Doctor</h2>
      <p>Ang pinakamataas sa lima sa 207 cm at pangatlo lamang sa pinakamalakas, na ipinapaliwanag ng fandom wiki sa pamamagitan ng pagpili sa talino kaysa sa baseng lakas. Ang kanyang pagpapakilala ang pinakamalakas humawak sa pagpigil, pagsusuri, at imahen ng medikal na horror, at inilalarawan ang kanyang komposure na naibubuka nang kitang-kita sa isang partikular na rehistro ng emosyon. Walang ruta siya at walang ending, at ang ending na "Clean Hands" na iniuugnay sa kanya ng ilang lumang pahina ng fan ay hindi sinusuportahan ng anumang first-party na pinagmumulan.</p>
      <h2>Ticket Taker</h2>
      <p>Pinakamatanda, pinakamababa ang taas, at huli sa ranking ng lakas — ngunit isa pa rin sa mas nababatid na mga tauhan sa opisyal na materyal, dahil ang sistema ng tiket ang isa sa iilang mekanikang kinumpirma sa laro. Kinumpirma ng developer ang walong uri ng tiket, kung saan ang pink ay nasa ilalim ng pangunahing mga tauhan at ang pula at berde ay senyales ng pagpipilian ng protagonist. Walang ruta siya, at inilalarawan ng ilang matatagal nang gabay ng fan ang isang rutang Ticket Taker na romansable na nabubuksan sa pamamagitan ng tiyaga at maingat na dayalogo; walang ganoong ruta sa pampublikong build.</p>

      <h2>Sino talaga ang maaaring puntahan ng ruta</h2>
      <p>Ang mga kinumpirmang opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala. Ang opsyong "wala" ay tumutugma sa ending ng Protagonist, na walang romance ngunit pinapayayan pa rin ang mga pagkakaibigan sa mga tauhan. Walang mga ruta sina Jester, Ticket Taker, at Doctor; inilarawan ng developer ang paggawa sa kanila bilang mga opsyong romance bilang posibilidad sa halip na pangako, at iminungkahi na ang anumang ganoong dagdag ay malamang darating bilang add-on o DLC.</p>
      <div class="walkthrough-tip"><strong>Paano gamitin ang profile ng tauhan</strong><p>Basahin muna ang seksyong kinumpirma at ang seksyong fandom pangalawa. Ang mga bagay na kinumpirma ay magiging totoo pa rin pagkatapos ng susunod na update; ang materyal ng fandom ay interpretasyon ng kasalukuyang build at maaaring mabago kapag dumating ang mga karagdagang eksena. Ang mga profile na naghahalo sa dalawa nang walang label ang dapat ingatan.</p></div>

      <h2>Ano ang kulang sa mga tauhan</h2>
      <p>Si Columbina ay dating kasapi ng sirko na ang kamatayan ay humuhubog sa backstory ng dalawang lead, ngunit hindi siya kabilang sa limang ipinakilalang tauhan at hindi lumilitaw sa inilathalang height chart. Ang kanyang disenyo ay nasa produksyon pa at sadyang inilihim ng developer ang mga detalye. Sinumang sumulat tungkol sa mga tauhang ito ay dapat ituring siya bilang totoong bahagi ng kasaysayan ng kwento at bilang hindi pa tapos na tauhan nang sabay.</p>
      <p>Para sa buong mga profile, tingnan ang mga pahina nina <a href="/fil/characters/pierrot">Pierrot</a>, <a href="/fil/characters/harlequin">Harlequin</a>, <a href="/fil/characters/jester">Jester</a>, <a href="/fil/characters/the-doctor">Doctor</a>, at <a href="/fil/characters/ticket-taker">Ticket Taker</a>, pati na ang <a href="/fil/characters/heights">gabay sa taas at ranking</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'Paliwanag sa Sistema ng Tiket ng The Freak Circus',
    description: 'Kinumpirma ng developer ang walong uri ng tiket sa The Freak Circus, kung saan may tiyak na kahulugan ang pink, pula, at berde sa paraan ng pag-branch ng kwento.',
    date: '2026-10-05',
    tags: ['Mga Tiket', 'Mekanika', 'Pag-branch'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Si Ticket Taker, ang tauhang kumokontrol sa sistema ng tiket ng laro',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Ang mga tiket ang isa sa iilang sistema sa The Freak Circus na tuwirang ipinaliwanag ng developer, at ang paliwanag ay sumasaklaw nang higit kaysa inaamin ng karamihan sa mga gabay ng fan. Ang kinumpirmang bilang ay walong uri ng tiket. Nasa ilalim ng pangunahing mga tauhan ang pink, minamarkahan ng pula at berde ang pagpipilian ng protagonist, at ang kombinasyon ng pink at pula ay nangangahulugang awtomatikong kinukuha ni Ticket Taker ang pulang opsyon.</p>
      <div class="walkthrough-note"><strong>Ano ang naitala at ano ang hindi</strong><p>Galing sa developer ang bilang ng mga uri ng tiket at ang kahulugan ng pink, pula, at berde. Hindi pa nai-publish ang kumpletong talaan ng lahat ng walo — ang mga pangalan at kulay ng natitirang mga uri — kaya hindi huhulaan ng artikulong ito ang mga ito. Ang pagkakakilanlan sa taong nasa café na nagbibigay ng pink na tiket bilang si Ticket Taker na nakapagpatago ay galing sa fandom at nakamarka bilang ganoon.</p></div>

      <h2>Ano ang kinumpirma ng developer</h2>
      <ul>
        <li><strong>May walong uri ng tiket.</strong> Ito ay bilang, tuwirang kinumpirma.</li>
        <li><strong>Nasa ilalim ng pangunahing mga tauhan ang pink.</strong> Ito ang tier na tatanggapin mo kapag hindi ka hinahabol ng mga performer.</li>
        <li><strong>Nagpapahiwatig ang pula at berde ng pagpipilian ng protagonist.</strong> Minamarkahan ng dalawang kulay na ito ang desisyong pag-aari ng manlalaro.</li>
        <li><strong>Ang pagsasama ng pink at pula ay nangangahulugang awtomatikong kinukuha ni Ticket Taker ang pulang opsyon.</strong> Sa kasong iyon, ang pagpipilian ay ginagawa para sa iyo, ng tauhang nagpapatakbo ng buong sistema.</li>
      </ul>
      <p>Ang huling patakaran ang pinakakapaki-pakinabang sa pagbasa ng mga eksena, dahil sinasabi nito sa iyo na hindi lang basta nagbibigay ang laro ng mga pagpipilian at pinapayagan kang pumili nang malaya. May mga desisyong ginagawa ng sirko. Ang protagonist na nabigong kumilos ay hindi nakakakuha ng neutral na resulta; ang resulta ng sirko ang nakukuha niya.</p>

      <h2>Ang pink na tiket at ang isang ending na umiiral</h2>
      <p>Lumilitaw ang pink na tiket sa kasalukuyang build, at ito ang bagay na nagsisimula sa tanging naipatupad na ending ng laro. Sa Araw 1, kung walang gagawin ang protagonist habang inaasar si Pierrot ng isang lalaki sa harap ng maraming tao, ibibigay sa protagonist ang isang pink na tiket ng isang di-kilalang tao. Dadalhin ang protagonist sa pink na tent at tatanggihin ng bawat kasapi ng sirko, at sasabihin ng laro na nabigo silang abutin ang atensyon ni Pierrot at nagtapos nang trahediko.</p>
      <p>Kinikilala ng fandom wiki ang taong iyon sa café — ang lalaking "Unknown" — bilang si Ticket Taker na nakapagpatago. Galing sa fan ang pagkakakilanang iyon, ngunit direktang nakakonekta ito sa isang ending na nilalaman ng build, at ipinaliwanag nito kung bakit ang tauhang walang sariling ruta ay napakahalaga pala sa mekanika.</p>
      <div class="walkthrough-tip"><strong>Huwag ituring ang mga tiket bilang koleksyon</strong><p>Hindi nagtatatag ang bersyong 0.2 ng karaniwang inventory kung saan kinokolekta ang mga tiket para buksan ang mga susunod na ending. Minamarkahan ng mga tiket dito ang katayuan at pagpipilian, hindi isang checklist. Kung naglalarawan ang isang gabay ng istante ng tiket, counter ng tiket, o nakatagong tiket kada ending, naglalarawan ito ng sistemang wala sa build.</p></div>

      <h2>Bakit hawak ng isang pang-suportang tauhan ang pag-branch</h2>
      <p>Walang ruta at walang ending si Ticket Taker, at huli siya sa lima sa ranking ng lakas at ang pinakamababa sa mga tauhan. Sa larong ang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala, gagawin sana siyang background na pigura nito. Ang sistema ng tiket ang dahilan kung bakit hindi.</p>
      <p>Isipin kung ano ang ginagawa ng tiket sa loob ng piksyon: tinutukoy nito kung sino ang pinapayagan kang maging. Naglalagay sa iyo ang pink na tiket sa ilalim ng mga performer, na siyang eksaktong posisyong ibinabato ng ending na «Missing» sa protagonist — nasa labas, pinapanood, tinatanggihan sa pinto ng tent. Minamarkahan ng pula at berde ang mga pagpipiliang pag-aari ng manlalaro. At kapag nagsama ang pink at pula, aalisin ng pigura ng awtoridad ang pagpipilian ng manlalaro. Ang tauwang nagpapatakbo ng patakarang iyon ay hindi tagapagbukas ng pinto; siya ang mekanismo kung saan pinamamahalaan ng sirko ang protagonist.</p>
      <p>Umaangkop din ito sa kanyang pagkakarakter. Inilalarawan siya ng fandom wiki bilang masunurin at nakalaan sa agenda ng sirko, matanda ang ugali at propesyonal, abala sa kalinisan at organisasyon, at malinaw na sinasabi ang prinsipyo niya: dito sa amin, walang humihiwalay sa karakter. Ang sistema ang karakter. Ang isang pagtatanghal na tumatakbo sa mga tiket ay nangangailangan ng taong nagbibigay nito.</p>

      <h2>Paano nababasa ang mga kulay sa praktika</h2>
      <ul>
        <li><strong>Pink</strong> — nasa loob ka ng gusali ngunit hindi sa palabas. Ito ang tier na nagtatapos sa tanging ending na kasalukuyang nasa build.</li>
        <li><strong>Pula</strong> — isang desisyong iniuugnay sa iyo, at maaaring i-override ng sirko kapag ipinares ito sa pink.</li>
        <li><strong>Berde</strong> — isang desisyong iniuugnay sa iyo, nang walang override.</li>
        <li><strong>Ang iba pang limang uri</strong> — hindi pa naitala isa-isa. Kinumpirma ang bilang nila; hindi pa pampubliko ang pagkakakilanlan nila.</li>
      </ul>
      <p>Sulit maging tapat tungkol sa kung gaano kaunti rito ang nakikita pa. Ang bersyong 0.2 ay isang prototype na puno ng pagpapakilala na may isang ending, at ang sistema ng tiket ay inilalarawan bilang set ng mga patakaran sa halip na ipinapakita nang malalim. Karamihan ng makikita ng manlalaro sa kasalukuyang build ay pink sa praktika, dagdag ang pula at berde kung saan iniaalok ang pagpipilian. Ang pagbasa sa sistema bilang kumpletong mapa ng pag-branch ay lampas na sa ipinapakita ng kasalukuyang build.</p>

      <h2>Ano ang kinumpirma kumpara sa idinagdag ng fandom</h2>
      <ul>
        <li><strong>Kinumpirma ng developer:</strong> may walong uri ng tiket; nasa ilalim ng pangunahing mga tauhan ang pink; nagpapahiwatig ang pula at berde ng pagpipilian ng protagonist; ang pink dagdag pula ay nangangahulugang awtomatikong kinukuha ni Ticket Taker ang pulang opsyon; at walang ruta si Ticket Taker.</li>
        <li><strong>Mula sa kasalukuyang build:</strong> binibigyan ang protagonist ng pink na tiket sa panahon ng Araw 1, at papunta nang direkta ang tiket na iyon sa ending na «Missing».</li>
        <li><strong>Galing sa fandom:</strong> ang pagkakataong ang lalaking "Unknown" sa café ay si Ticket Taker na nakapagpatago, ang palayaw na "reality manipulator", at ang mga detalye ng kanyang kasaysayan kay Columbina.</li>
      </ul>
      <p>Para sa kung paano ito nakakonekta sa mga ending, tingnan ang <a href="/fil/endings">gabay sa mga ending</a>; para sa sariling profile ng tauhan, tingnan ang <a href="/fil/characters/ticket-taker">pahina ni Ticket Taker</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'Ano ang Alam Tungkol kay Columbina sa The Freak Circus',
    description: 'Humuhubog si Columbina sa backstory ng dalawang lead, ngunit nasa produksyon pa ang kanyang disenyo — ano ang kinumpirma ng developer tungkol sa kanya at ano ang idinagdag ng fandom.',
    date: '2026-10-07',
    tags: ['Columbina', 'Lore', 'Mga Katotohanan sa Tauhan'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Si Columbina, ang dating kasapi ng sirko sa gitna ng backstory ng dalawang lead',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Si Columbina ang tauhang kinikilala ng lahat ngunit walang makapaglalarawan nang may kumpiyansa. Humuhubog ang kanyang kamatayan sa backstory ng dalawang lead sa romance, at nagtayo ang fandom ng malaking pagbasa tungkol sa kanya sa paligid nito. Sa parehong panahon, sinabi ng developer na nasa produksyon pa ang kanyang disenyo at na sadyang inilihim ang mga detalye. Totoo ang dalawang bagay na iyon nang sabay, at ang artikulong ito ay tungkol sa paghihiwalay ng mga ito.</p>
      <div class="walkthrough-note"><strong>Saklaw ng artikulong ito</strong><p>Saklaw nito ang kinumpirma ng developer, ang mga tinatala ng fandom wiki, at kung saan bangga ang dalawa. Naglalaman ito ng spoiler ng kwento tungkol sa pinagsasamang backstory ng dalawang lead. Walang claim tungkol kay Columbina na inihaharap bilang ayos maliban kung sinabi ito ng developer.</p></div>

      <h2>Ano ang kinumpirma ng developer</h2>
      <ul>
        <li><strong>Siya ay dating kasapi ng sirko.</strong> Ang kanyang kasaysayan sa kompanya ay nasa likod niya, hindi sa loob nito.</li>
        <li><strong>Humuhubog ang kanyang kamatayan sa backstory ng dalawang lead.</strong> Parehong tumatakas sina Pierrot at Harlequin mula sa isang bagay na may kinalaman sa kanya.</li>
        <li><strong>Hindi kaugnay ang protagonist kay Columbina.</strong> Tuwirang kinumpirma ito ng developer, na sulit sabihin nang malinaw dahil madalas ilagay ng mga teorya ng fan ang protagonist sa kanyang kwento.</li>
        <li><strong>Ang "Columbina" ay nangangahulugang "maliit na kalapati".</strong> Kinumpirma ng developer ang kahulugan ng pangalan.</li>
        <li><strong>Nasa produksyon pa ang kanyang disenyo, at sadyang inilihim ang mga detalye.</strong> Hindi pa tapos ang hugis ng karakter at sinabi ito mismo ng developer.</li>
        <li><strong>Walang opisyal na taas para sa kanya.</strong> Saklaw ng inilathalang height chart ang limang ipinakilalang tauhan, at wala siya sa mga ito.</li>
      </ul>
      <p>Ang huling punto ay umaugnay sa isang detalye sa mga update sa development. Binabanggit ng isang kamakailang opisyal na update ang isang bagong, napakaikling eksenang tumutukoy sa kanya, at binabanggit na nakaplanado ang kanyang disenyo upang manatiling pare-pareho ang mga silwet ng flashback. Sa ibang salita, kinukumpirma ng kwento ang presensya niya habang guhit-guhit pa ang karakter — isang hindi karaniwang posisyon para isulat ng isang gabay ng fan, at ang dahilan kung bakit sadyang maikli sa pagkakarakter ang artikulong ito.</p>

      <h2>Ano ang mga tinatala ng fandom wiki</h2>
      <p>Ang fandom wiki ang pinagmumulan ng karamihan sa sinasabi ng mga tao tungkol kay Columbina, at dalawa sa mga claim nito ang sapat ang bigat para banggitin.</p>
      <p>Ang una ay na kailanman ay walang naging romantikong relasyon sila ni Pierrot. Salungat ito sa isang pagbasa sa mismong pagsasalaysay ng love story ng sirko at sumasalungat sa palagay na ang trahedya sa gitna ng nakaraan ni Pierlot ay isang romance. Hiwalay na sinabi ng developer na nakalipas na ni Pierlot ang kasaysayang iyon at lumago na siya mula noon — na nagmumungkahi na ang backstory ay pinagmumulan ng karakter sa halip na nakapirming sugat.</p>
      <p>Ang pangalawa ay ang ipinahiwatig na ugnayan sa papel ni Harlequin sa kanyang kamatayan: naitala ng wiki na pinatay ni Harlequin siya para "iligtas" siya, at tumangging lumahok si Pierlot. Inihaharap ng wiki ito bilang pahiwatig sa halip na pahayag, at dapat itong mabasa nang ganoon din. Kinumpirma ng developer ang pangkalahatang hugis ng kasaysayan ng sirko sa mga sagot sa AMA, kaya totoo ang kwento; ang partikular na pagbasa sa bahagi ni Harlequin dito ay hindi kinumpirmang first-party.</p>
      <div class="walkthrough-note"><strong>Pagmarka ng materyal ng fandom bilang materyal ng fandom</strong><p>Ang "naitala ng fandom wiki na pinatay ni Harlequin siya para iligtas siya" ay ibang claim sa "pinatay ni Harlequin siya para iligtas siya". Ang una ay maaaring suriin laban sa isang pinagmumulan. Ang pangalawa ay hindi, dahil walang pinagmumulang nagsasabi nito. Ang mga gabay na binabawas-bawasan ang atribusyon ay gumagawa ng desisyong editorial na hindi sinusuportahan ng ebidensya.</p></div>

      <h2>Bakit sadya ang mga inilihim na detalye</h2>
      <p>May dahilan kung bakit hawak pa ng developer ang mga partikular sa kanya, at hindi ito aksidente ng iskedyul. Ang isang karakter na hindi pa tapos ang disenyo ay hindi mailalarawan sa mga huling termino — ang taas, ang kasuotan, at ang silwet ay lahat pinagpasyahan pa, at anumang gabay na magsasabi ng mga ito ay naglalarawan ng intensyon sa halip na katotohanan. Ito rin ang dahilan kung bakit walang opisyal na kaarawan at walang opisyal na numerong edad para sa kanya, at kung bakit ang "isang kinumpirmang kaarawan" sa mga tauhang ito ay pag-aari ng iba pang tao.</p>
      <p>Ang praktikal na bunga para sa mambabasa ay na anumang pahinang naglalarawan kay Columbina nang detalyado — ang kanyang hitsura, taas, eksaktong papel sa gabing namatay siya — ay naglalarawan ng isang bagay na hindi pa napagpasyahan, anuman ang ipinapahiwatig ng antas ng kumpiyansa nito.</p>

      <h2>Saan siya lumilitaw sa kasalukuyang build</h2>
      <ul>
        <li><strong>Bilang backstory.</strong> Umiiikot sa kanya ang mga kasaysayan ng dalawang lead, at ibinubunyag ng kasalukuyang build ang kasaysayang iyon sa mga piyesa sa halip na sa isang eksena.</li>
        <li><strong>Bilang pangalan.</strong> Nagtala ang mga opisyal na tala ng maintenance na lumabas ang isang dating hindi kumpletong linya noong ilagay ang kanyang pangalan, at inilalarawan ng isang mas bagong update sa development ang isang bagong maikling eksenang binabanggit siya.</li>
        <li><strong>Bilang silwet.</strong> Tinutukoy ng mga tala sa development ang mga silwet ng flashback, na nagpapahiwatig na nakikita siya sa nakaraan kahit hindi pa tapos ang kanyang disenyo.</li>
      </ul>
      <p>Ang katotohanang binabanggit siya sa build habang nasa produksyon pa ay hindi isang salungatan na kailangang ipaliwanag ng developer. Ito ang paraan ng paggawa ng trabaho, at ito ang dahilan kung bakit makapagsasalita ang isang maingat na gabay tungkol sa kanya nang hindi siya inilalarawan.</p>

      <div class="walkthrough-tip"><strong>Isang praktikal na paraan ng pag-abot sa kanya</strong><p>Huwag maghintay ng pahina ng wiki para ibuod siya para sa iyo. Panoorin ang mga maikling eksenang binabanggit siya, ituon ang mga salitang ginagamit mismo ng laro para sa kanya, at ituring ang bawat deskriptibong detalyeng matatagpuan mo sa iba bilang mungkahi hangga't hindi pa ipinapakita ng developer ang tapos na disenyo. Sa ganoon, nananatiling nasa unahan ang kwento kaysa haka-haka — ang tanging paraan para talagang makagulat sa iyo ang development ng karakter na ito.</p></div>

      <h2>Paano pag-usapan nang may pananagutan si Columbina</h2>
      <ul>
        <li>Iugnay ang mga claim ng fandom sa fandom, nang malinaw at sa tuwina.</li>
        <li>Huwag maglathala ng taas, edad, kaarawan, o kasuotan bilang katotohanan para sa kanya.</li>
        <li>Huwag ilagay ang protagonist sa kanyang kwento; napasiyahan na iyon ng developer.</li>
        <li>Basahin ang tala na "kailanmang hindi naging romantiko kay Pierrot" bilang pagwawasto ng karaniwang maling pagbasa, hindi bilang pagdaragdag ng bagong romance.</li>
        <li>Ituring ang sinulid na "pinatay siya para iligtas siya" bilang pahiwating iginuhit ng fandom, hindi bilang kinumpirmang pangyayari.</li>
      </ul>
      <p>Siya ang emosyonal na gitna ng isang kwento tungkol sa dalawang taong hindi makahinto sa pagkompitensya, at ang dahilan kung bakit sira ang dalawa. Hanggang diyan ay ligtas nang sabihin. Ang natitira ng larawan ay sulit basahin kapag natapos ng developer ang pagguhit sa kanya at inilabas ang mga detalye — at ang pahinang ito ay mababago noon sa halip na punuin ngayon.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Araw 3: Status ng Paglabas at Beripikadong Usad',
    description: 'Isang beripikadong ulat ng status sa Araw 3 ng The Freak Circus — ano ang kinukumpirma ng mga opisyal na update sa development, ano ang ibig sabihin ng saklaw ng beta, at kung bakit walang petsa.',
    date: '2026-10-10',
    tags: ['Araw 3', 'Mga Update', 'Fact-check'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'Isang opisyal na imahe ng update sa development mula sa build ng Araw 3',
    readingTime: '9-minutong pagbasa',
    content: `
      <p class="article-lede">May ginagawa sa Araw 3, hindi ito tapos, at walang inanunsyong petsa ng paglabas. Ang kombinasyong iyon ang buong tapat na buod. Ang lahat ng iba pang kumakalat tungkol sa Araw 3 — mga buwan, katapusan ng linggo, mga countdown — ay hinuha na itinayo sa ibabaw ng aktibidad ng development, at malinaw na hiningi ng developer na huwag ipaulit ang mga claim ng petsang galing sa labas.</p>
      <div class="walkthrough-note"><strong>Status sa isang tingin</strong><p>Kasalukuyang pampublikong build: bersyong 0.2. Nasa aktibong development ang Araw 3. Walang inanunsyong petsa, buwan, o katapusan ng linggo ng paglabas. Ang mga numerong binabanggit sa ibaba ay mga numero ng saklaw ng beta, hindi porsyento ng buong feature, at mahalaga ang pagkakaiba.</p></div>

      <h2>Ano ang kinukumpirma ng mga opisyal na update</h2>
      <p>Naglalathala ang developer ng lingguhang update sa development at serye ng mga sagot sa AMA sa opisyal na Tumblr, at ang mga post tungkol sa Araw 3 doon ay bumubuo ng maaasahang tala ng gawaing isinasagawa. Inilalarawan ng mga kamakailang entry ang:</p>
      <ul>
        <li><strong>Tuloy na coding na may mga placeholder asset.</strong> Ang mga bagong na-code na eksena ay gumagamit pa rin ng mga placeholder at bahagya lamang gumagana, na may mga transisyon, pagpipilian, at imaheng aayusin kapag napagpasyahan na ang mga desisyon sa eksena.</li>
        <li><strong>Isang bagong, napakaikling eksenang tumutukoy kay Columbina.</strong> Nakaplanong gawin sa lalong madaling panahon ang disenyo ng kanyang karakter upang manatiling pare-pareho ang mga silwet ng flashback.</li>
        <li><strong>Usad ng beta.</strong> Inilarawan ng isang naunang update ang isang bahagi ng beta ng Araw 3 bilang tapos at inilagay ang beta sa humigit-kumulang 30–40% ng buong update. Inilarawan naman ng isang sumunod na update ang pagiging halos kalahati ng nilalamang nakaplanado para sa beta test.</li>
        <li><strong>Mas malaking script kaysa Araw 2</strong>, na may karagdagang nilalaman ng masamang ending at mga nakatagong eksenang inilarawan.</li>
        <li><strong>Gawaing isinasagawa sa eksena sa café</strong>, na may ilang pagpipilian at situasyon na nangangailangan pa ng rebisyon, at mas maraming sketch at posibleng mga bagong background na kailangan pa.</li>
        <li><strong>Mga bagong sprite na napili para kina Harlequin, Pierrot, at Jester</strong>, na may mga rebisyon at bagong sprite para sa Doctor na nakaplanong gawin kapag umabot na ang development sa eksena niya.</li>
      </ul>
      <p>Walang isa man diyan ang iskedyul ng paglabas. Kinukumpirma ng mga update sa pagsulat, artwork, sprite, at programming na aktibo ang development; hindi ibig sabihin nito na tapos na ang Araw 3. Dapat lang ituring na nailabas ang Araw 3 kapag talagang lumabas ang isang bagong pampublikong build.</p>
      <div class="walkthrough-tip"><strong>Basahin nang maingat ang porsyento</strong><p>Naglalarawan ang "30–40% ng buong update" at "halos kalahati ng nakaplanong nilalaman ng beta" ng magkakaibang saklaw. Ang una ay sumusukat sa buong update; ang pangalawa ay sumusukat sa mas maliit na hiwa ng nilalamang nakalaan para sa beta. Walang isa man sa dalawa ang porsyento ng tapos na laro, at ang beta mismo ay milestone sa halip na paglabas.</p></div>

      <h2>Bakit walang ibinibigay na petsa</h2>
      <p>Pare-pareho ang posisyon ng developer sa opisyal na FAQ at mga sagot sa Askbox: walang inanunsyong petsa ng paglabas, at ang mga claim ng petsang galing sa labas ng mga opisyal na post ay hindi dapat ipaulit. Sadyang tagubilin ito sa fandom, hindi napabayaan.</p>
      <p>May praktikal na konteksto rito. Kasama sa parehong panahon ng development ang pangangasiwa sa mga hindi awtorisadong upload sa Google Play, at binanggit ng developer na may sariling anunsyo ang isang opisyal na paglabas sa store. Ang petsang iaanunsyo bago matapos ang isang build, at bago maayos ang tanong ng pamamahagi, ay pangakong hindi matutupad.</p>

      <h2>Ano ang inaasahang babaguhin ng Araw 3</h2>
      <p>Ang planadong hugis ng Araw 3 ay mas malaki kaysa sa nauna rito, at may diretsang bunga iyon sa kung ano ang ipinapakita at hindi ipinapakita ng kasalukuyang build.</p>
      <ul>
        <li><strong>Inilalarawan ang bagong nilalaman ng masamang ending</strong> sa mga post sa development, na nangangahulugang lalaki ang kategoryang ending sa build nang lampas sa tanging ending na «Missing» na umiiral ngayon.</li>
        <li><strong>Inilalarawan din ang mga nakatagong eksena</strong>, na ibang bagay sa ruta — ang nakatagong eksena ay nilalaman, hindi konklusyon.</li>
        <li><strong>Mas maraming branch.</strong> Mas malaki ang script kaysa sa Araw 2, at kasama sa trabahong pag-branch na inilalarawan ang mga seksyong maraming pagpipilian na nangangailangan ng karagdagang pagsubok.</li>
        <li><strong>Kwento ni Columbina.</strong> Ang bagong maikling eksena at ang trabaho sa mga silwet ng flashback ay parehong nagtuturo sa paglitaw ng karagdagang pinagsasamang backstory.</li>
      </ul>
      <p>Ang hindi pa inaanunsyo ay ang alinman sa apat na planadong ending na ilalabas sa Araw 3. Planado pa rin ang mga planadong ending.</p>

      <h2>Ano ang kinumpirma tungkol mismo sa paglabas</h2>
      <p>May ilang bagay tungkol sa paraan ng paghahatid sa Araw 3 na ayos na, kahit na hindi ang petsa.</p>
      <ul>
        <li><strong>Magiging pampublikong build ito sa opisyal na pahina.</strong> Kinumpirma ng developer ang itch.io page bilang tanging opisyal na pahina, kaya doon lalabas ang Araw 3 sa halip na sa pamamagitan ng third-party launcher o hiwalay na store front.</li>
        <li><strong>Naitatag na ang mga platform.</strong> Umiiral ang bersyong 0.2 para sa browser, Windows, macOS, Linux, at Android, kaya ang parehong set ang makatwirang asahan para sa Araw 3 — bagaman walang inanunsyong pagkakasunod ng paglabas kada platform.</li>
        <li><strong>Ang anumang opisyal na paglabas sa store ay hiwalay na iaanunsyo.</strong> Binanggit ng developer na may sariling anunsyo ang bersyong store sa halip na dahan-dahang dumating kasama ng update sa itch.io.</li>
        <li><strong>Hinaharap ang mga hindi awtorisadong upload.</strong> May oras na ginasto sa pangangasiwa sa mga hindi awtorisadong upload sa Google Play, na problema sa pamamahagi sa halip na sa development — ngunit nangangahulugan ito na hindi pa ganap na simple ang daan ng manlalaro patungo sa opisyal na paglabas.</li>
      </ul>

      <h2>Paano suriin mo mismo ang kasalukuyang status</h2>
      <ol class="walkthrough-steps">
        <li><strong>Buksan ang opisyal na itch.io page</strong> at tiyakin na ang nakalistang build ay bersyong 0.2 pa rin.</li>
        <li><strong>Basahin nang sunod-sunod ang mga entry ng devlog.</strong> May petsa ang mga ito at first-party ang mga ito.</li>
        <li><strong>Tingnan ang opisyal na Tumblr</strong> para sa pinakabagong lingguhang update at serye ng mga sagot sa AMA.</li>
        <li><strong>Ituring na hindi pa naverify ang anumang petsang matatagpuan mo sa iba</strong> maliban kung lumilitaw ito sa alinman sa mga lugar na iyon.</li>
        <li><strong>Huwag pansinin ang mga pahina ng countdown.</strong> Ang countdown ay tantya ng fan na may kalakip na orasan.</li>
      </ol>
      <p>Kinumpirma ng developer na walang opisyal na Discord server, kaya anumang server na hindi naka-link mula sa mga opisyal na pahina ng itch.io, Tumblr, Patreon, o Bluesky ay dapat ituring na pinapatakbo ng fan o hindi awtorisado. Ang patakarang iyon ay naaangkop din sa mga anunsyo ng petsa: ang petsang binabanggit sa isang Discord ng fan ay petsa ng fan.</p>

      <h2>Ano ang gagawin sa kasalukuyang build habang naghihintay</h2>
      <p>Panatilihin ang iyong mga save, ituon kung aling build ang gumawa sa mga ito, at iwasan ang pagpatong sa slot ng unang playthrough. Kapag dumating ang susunod na build, basahin ang mga change note nito bago ipagpalagay na gumagana pa rin ang payo sa ruta ng bersyong 0.2. Maaaring muling ayusin ang pag-branch ng isang prototype sa pagitan ng mga build, at magbabago ang listahan ng ending kapag natapos ang script.</p>
      <p>Para sa talaang araw-araw, tingnan ang <a href="/fil/day-3">tracker ng Araw 3</a> ng site, at para sa nilalaman na ng kasalukuyang build, tingnan ang <a href="/fil/blog/current-prototype-guide">gabay sa prototype</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: 'Bersyong Browser o Download? Aling Paraan ng Paglalaro ng The Freak Circus',
    description: 'Isang praktikal na paghahambing ng browser build at mga download na desktop at Android ng The Freak Circus, kabilang kung paano magkaiba ang ugali ng pag-save.',
    date: '2026-10-13',
    tags: ['Browser', 'Pag-download', 'Pag-setup'],
    image: '/images/home/about-game.webp',
    imageAlt: 'Ang The Freak Circus, ang tanging opisyal na itch.io page ng laro',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Parehong bersyon ang tumatakbo ng parehong build na bersyong 0.2 ng parehong kwento, kaya ang pagpipilian ay hindi tungkol sa nilalaman. Tungkol ito sa pagiging maaasahan, setup, at kung gaano karami sa progreso mo ang handa mong ipagkatiwala sa isang browser. Para sa karamihan ng manlalaro ang sagot ay: browser muna, download bago ka magsimulang magmalasakit sa mga save.</p>
      <div class="walkthrough-note"><strong>Lahat galing sa isang lugar</strong><p>Sinabi ng developer na ang itch.io page ang tanging opisyal na pahina ng laro, at hiningi niyang huwag muling i-upload o i-repost ang laro. Walang opisyal na Discord server. Kung mag-aalok ang isang pahina ng "full download" sa iba, hindi ito lisensyado sa pinakamabuti, at hindi ito nililink ng site.</p></div>

      <h2>Ano ang available</h2>
      <ul>
        <li><strong>Web browser (HTML5)</strong> — tumatakbo sa browser sa pamamagitan ng opisyal na itch.io page. Walang installation.</li>
        <li><strong>Windows</strong> — PC build, bersyong 0.2.</li>
        <li><strong>macOS</strong> — Mac build, bersyong 0.2.</li>
        <li><strong>Linux</strong> — Linux build, bersyong 0.2.</li>
        <li><strong>Android</strong> — APK build, bersyong 0.2.</li>
      </ul>
      <p>Lahat ng ito ay name-your-own-price, kaya maaaring i-download nang libre ang buong build at ang pagbabayad ay opsyonal na suporta sa isang developer na naglarawan ng proyekto bilang halos solong gawain.</p>

      <h2>Piliin ang browser build kapag</h2>
      <p>Ang bersyong browser ang pinakamabilis na paraan ng pagsimula at ang pinakamadaling paraan ng pagbasa ng gabay habang naglalaro. Walang archive na dapat i-extract, walang platform na dapat itugma, at walang dapat i-uninstall mamaya. Ito rin ang matinong pagpipilian sa shared o pansamantalang makina kung saan ayaw mong mag-iwan ng mga file ng laro.</p>
      <p>Ang paglalaro sa browser ay inaalagaang landas sa halip na aksidente: naitala ng developer ang mga freeze na espesipiko sa browser — kabilang ang isa sa tent ni Ticket Taker at sa ilang animated na bahagi — at naglabas ng mga solusyon. Ang kilalang natitirang babala ay ang napakabilis na paglaktaw sa ilang eksena ay maaaring mag-iwan ng mga visual effect na hindi magkatugma, kaya bigyan ng kaunting pasensya ang bersyong browser kapag nagti-click ka.</p>

      <h2>Pumili ng download kapag</h2>
      <p>Ang mga desktop build ang mas mainam na pagpipilian para sa paulit-ulit na playthrough, at para kaninumang planoing panatilihing buo ang save ng unang paglalaro. Hindi sakop ng mga limitasyon ng browser storage ang lokal na install, may sariling kopya ito ng mga file ng laro, at binibigyan ka nito ng buong interface ng Ren'Py na may rollback sa history — ang feature na gumagawang praktikal sa halip na nakakapagod ang paghahambing ng branch.</p>
      <div class="walkthrough-tip"><strong>I-extract nang buo ang mga archive ng desktop bago maglunsad</strong><p>Nakapreso ang mga desktop package. I-extract ang buong archive at panatilihin ang application kasama ang mga isinama nitong file, pagkatapos ay ilunsad ito. Ang paglunsad ng isang executable mula sa loob ng archive ang pinakakaraniwang dahilan ng build na parang magsisimula tapos magkukulang.</p></div>

      <h2>Paano magkaiba ang pag-save, at ano ang hindi naitala</h2>
      <p>Dito talaga naghihiwalay ang dalawang bersyon, at dito pinakamahirap umasa sa mga inilathalang payo.</p>
      <ul>
        <li><strong>Parehong gumagamit ng karaniwang interface ng engine.</strong> Isang release na Ren'Py ang The Freak Circus, kaya ang pag-save ay gumagamit ng karaniwang save at load button, listahan ng slot, quick save at quick load, at rollback sa history.</li>
        <li><strong>Parehong may alok ng entry point sa Araw 2.</strong> Kasama sa menu ang isang button ng Araw 2 na may maikling panimula, kaya maaari kang magpatuloy sa Araw 2 nang hindi inuulit ang Araw 1.</li>
        <li><strong>Nasa browser storage ang mga browser save.</strong> Ang pag-clear ng site data, pagbubukas ng private window, o pagtakbo ng mahigpit na privacy configuration ay maaaring mag-alis sa mga ito nang walang babala, at nakatali ang mga ito sa browser profile na gumawa sa mga ito. Ito ang pinakakaraniwang dahilan ng mga ulat ng manlalaro na nawawalan ng progreso.</li>
        <li><strong>Walang umiiral na opisyal na dokumentasyon sa save.</strong> Hindi pa nai-publish ng developer ang mga lokasyon ng save, bilang ng slot, ugali ng autosave, o kung maaari bang ilipat ang mga browser save sa isang desktop build. Ang anumang gabay na nagbibigay sa iyo ng tiyak na path, bilang ng slot, o garantisadong proseso ng paglilipat ay naglalarawan ng ugali ng engine sa halip na opisyal na sagot para sa larong ito.</li>
      </ul>
      <p>Nag-aalok ang Ren'Py ng mga export at import action para sa mga save sa engine overlay nito, at kung maaasahang gumagana ang mga ito sa paglilipat ng browser save sa isang desktop build ng larong ito ay hindi pa nakumpirma. Ituring itong sulit subukan sa halip na isang proseso, at mag-back up ng anumang mahalaga sa iyo bago mag-eksperimento.</p>

      <h2>Isang simpleng patakaran</h2>
      <ul>
        <li><strong>Babasahin nang isang beses, sa shared na makina, o nang walang ini-install:</strong> gamitin ang browser build.</li>
        <li><strong>Nagpaplano ng mga replay, naghahambing ng mga branch, o nag-iingat ng pangmatagalang save:</strong> mag-download para sa iyong platform.</li>
        <li><strong>Sa telepono:</strong> ang Android APK ang sinusuportahang pagpipilian.</li>
        <li><strong>Anuman ang platform:</strong> kunin ang download mula sa opisyal na itch.io page, at panatilihin ang sarili mong kopyang backup ng anumang save na ikaiinisin mo ang mawala.</li>
      </ul>
      <p>Walang isa man sa dalawang bersyon ang nagbibigay sa iyo ng mas maraming kwento kaysa isa. May parehong dalawang araw at parehong isang ending ang bersyong 0.2 sa alinmang paraan, kaya ang praktikal na pagkakaiba ay tungkol lahat sa kung gaano kaligtas makakaligtas ang progreso mo.</p>

      <h2>Ibang pagkakaibang sulit malaman</h2>
      <p>May tatlong mas maliliit na bagay na naghihiwalay sa mga bersyon, at walang isa man sa mga ito ang tungkol sa kalidad.</p>
      <ul>
        <li><strong>Mga wika at boses.</strong> Kasama sa paglabas ng laro ang Ingles, Brazilian Portuguese, at Simplified Chinese, na inayos ang pagsasalin sa Tsino para sa bersyong 0.2. Ingles lamang ang voice acting, isinagawa ni Darthsuki, kaya ang setting ng wika ay nagbabago ng teksto sa halip na audio sa bawat bersyon.</li>
        <li><strong>Paghawak ng input at teksto.</strong> Sinusuportahan ng mga desktop build ang karaniwang kaginhawahan ng keyboard, mouse, at windowed, kabilang ang pag-scroll pabalik sa isang eksena. Nakasalalay ang paglalaro sa browser sa pahina, na ayos para sa isang diretsahang pagbasa ngunit mas mahirap para sa paghahambing ng dalawang branch nang magkatabi.</li>
        <li><strong>Mga menu at interface.</strong> Kasama sa menu ang entry point sa Araw 2 sa dalawang bersyon, ang pinakakapaki-pakinabang na feature para kaninumang nais bumalik sa kasalukuyang nilalaman nang hindi inuulit ang Araw 1.</li>
      </ul>
      <p>May babala ring hindi nakasalalay sa bersyon na naaangkop sa dalawa: ang laro ay rated 18+, at kabilang sa mga inilathalang babala sa nilalaman nito ang dugo, kamatayan, pagpatay at gore, mga pahinuha sa kannibalismo, pang-aabuso, pagkidnap, paggamit ng gamot nang walang pahintulot, pisikal na dominasyon, at pisikal na kontak nang walang pahintulot. Basahin ang listahang iyon bago ipasya kung gaano karami sa kwento ang nais mong mabasa nang mas maaga.</p>
      <p>Para sa listahan ng platform at mga tala sa kaligtasan, tingnan ang <a href="/fil/download">gabay sa download</a>; para sa ugali ng pag-save, tingnan ang <a href="/fil/save">gabay sa pag-save</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Bakit Isang Ending Lamang ang The Freak Circus sa Ngayon',
    description: 'May isang lalaruin na ending ang The Freak Circus dahil prototype ito — kung paano nagkakatugma ang naipatupad na masamang ending, ang apat na planadong ending, at ang Araw 3.',
    date: '2026-10-16',
    tags: ['Mga Ending', 'Bersyon 0.2', 'Development'],
    image: '/images/home/faq.webp',
    imageAlt: 'Ang kasalukuyang prototype ng The Freak Circus, bersyong 0.2',
    readingTime: '8-minutong pagbasa',
    content: `
      <p class="article-lede">Ang dahilan kung bakit isang ending lamang ay hindi dahil nakatago ang mga ibang ending, o nabubuksan ang mga ito sa susunod na playthrough ng bersyong 0.2, o nakaligtaan mo ang isang kondisyon. Ang dahilan ay prototype ang laro, at ang mga ending ang bahagi ng script na huling isinusulat.</p>
      <div class="walkthrough-note"><strong>Ano ang ipinaliwanag ng artikulong ito</strong><p>Ang ugnayan sa pagitan ng isang naipatupad na ending, ang apat na ending na pinangalanan ng developer, at ang kalagayan ng script. Naglalaman ito ng spoiler para sa isang ending na umiiral sa pampublikong build.</p></div>

      <h2>Isang ending, at masama ito</h2>
      <p>May eksaktong isang ending ang bersyong 0.2: ang «Missing». Nararating ito sa Araw 1 kapag walang ginawa ang protagonist habang inaasar si Pierlot ng isang lalaki sa harap ng maraming tao. Bibigyan ng di-kilalang tao ang protagonist ng pink na tiket, dadalhin sila sa pink na tent, at tatanggihan ng bawat kasapi ng sirko ang pagpasok nila. Sinasabi ng laro na nabigo ang protagonist sa pag-abot sa atensyon ni Pierlot at nagtapos nang trahediko.</p>
      <p>Hindi placeholder ang ending na iyon para sa isang mabuti. Isang tapos na piraso ng pagsulat ito na may kalakip na tema — ang protagonist na tumatangging makisali sa sentral na tunggalian ay inaalis dito — at ito ang tanging konklusyong opisyal na iniaalok ng kasalukuyang build.</p>

      <h2>Apat na konklusyon ang planado, at walang isa man sa kanila ang nasa build</h2>
      <ul>
        <li><strong>Ending ni Pierrot</strong> — isang romantikong konklusyon kasama si Pierrot.</li>
        <li><strong>Ending ni Harlequin</strong> — isang romantikong konklusyon kasama si Harlequin.</li>
        <li><strong>Ending ng Protagonist</strong> — isang konklusyong walang romance, bagaman maaari pa ring piliin ang mga pagkakaibigan sa tabi nito.</li>
        <li><strong>"All together"</strong> — umiibig ang protagonist kay Pierrot at Harlequin nang sabay-sabay.</li>
      </ul>
      <p>Pinangalanan ang mga ito ng developer sa opisyal na pahina at sa opisyal na FAQ, at paulit-ulit na inilalarawan na nasa development pa. Walang nai-publish na listahan ng trigger para sa alinman sa kanila, dahil walang matitrigger. Ang isang hakbang-hakbang na gabay para buksan ang ending ni Harlequin ay maglalarawan ng build na hindi umiiral nang pampubliko.</p>
      <h3>At walang opisyal na kabuuan</h3>
      <p>Madaling dagdagan ang mga numero at makakuha ng lima. Hindi kailanman sinabi ang kabuuang iyon. Sinabi ng developer na maraming ending ang planado ngunit hindi niya maibibigay ang bilang, dahil ang script ay ginagawa pa — at ang isang planadong konklusyon ay maaaring pagsamahin, muling gawin, o dagdagan bago ito ilabas.</p>

      <h2>Ang mga ending ang huling bagay na pinoprodyus ng isang script</h2>
      <p>Ito ang praktikal na dahilan kung bakit ganyan ang itsura ng kasalukuyang build. Ang isang naratibong may branch ay kailangang itayo mula sa loob palabas: kailangan ng araw ng mga eksena nito, kailangan ng mga eksena ng mga pagpipilian nito, kailangan ng mga pagpipilian ng mga bungang dumadaloy sa mga susunod na eksena, at sa ganoon lamang umiiral ang hugis ng isang konklusyon. May Araw 1 at 2 ang kasalukuyang build na may mga pagpapakilala, mga branch, at mga variation ng eksena nito, dagdag ang isang ending na inilagay sa lugar na nagpapakita ng isang bunga.</p>
      <p>Di-karaniwang tapat ang opisyal na listahan ng feature tungkol dito. Naitala nito ang limang ipinakilalang tauhan, isang masamang ending na naipatupad, at kumpletong mga pagpapakilala ng tauhan na ang natitira ng kwento ay nasa development pa. Apat na hiwalay na claim ang mga iyon, at umaangkop ang mga ito sa isang proyektong natapos na ang pambungad at nagtatayo pa rin ng gitna at wakas.</p>
      <div class="walkthrough-tip"><strong>Paano subukan kung talagang magkaiba ang isang branch</strong><p>Dahil walang mga ending na mahahambing, ang may-kahulugang pagsubok ay kung nagbabago ba ang isang eksena. Mag-load ng save, baguhin ang isang may-kahulugang sagot, at paghambingin ang susunod. Kapag naglabas ang dalawang paglalaro ng mapapatunayang pagkakaiba sa dayalogo, pagkaka-stage, o kung sino ang lumilitaw, totoo ang branch. Kapag isang ibang linya lamang ang nilabas nila, variation iyon, hindi ruta.</p></div>

      <h2>Sa Araw 3 isinusulat ang mga konklusyon</h2>
      <p>Nasa aktibong development ang susunod na araw sa loob ng laro, at inilalarawan ng mga opisyal na update ang isang script na mas malaki kaysa sa Araw 2, na may karagdagang nilalaman ng masamang ending at mga nakatagong eksena. Malinaw na ang kategoryang ending ang uri ng bagay na lumalaki: nakalista sa kasalukuyang build ang isang masamang ending, at tumutukoy ang mga tala ng update sa karagdagang nilalamang ending na isinusulat.</p>
      <p>Iyon din ang dahilan kung bakit walang petsa ng paglabas. Hiningi ng developer na huwag ipaulit ang mga claim ng petsang galing sa labas, na nababasa bilang pagtatangkang mapigilan ang pagbuo ng iskedyul sa paligid ng gawaing hindi pa tapos. Inilalarawan ng mga update sa development ang usad ng beta — isang bahagi ng beta ang tapos, ang beta sa humigit-kumulang 30–40% ng update, pagkatapos ay halos kalahati ng nakaplanong nilalaman ng beta — ngunit ang beta ay isang milestone, hindi isang paglabas.</p>

      <h2>Ano ang ibig sabihin nito sa isang manlalaro ngayon</h2>
      <ul>
        <li><strong>Walang dapat buksan.</strong> Ang paglalaro ng bersyong 0.2 hanggang dulo ay umabot sa ending na «Missing», at iyon ang kumpletong nilalamang ending ng build.</li>
        <li><strong>Sulit pa rin ang mga replay.</strong> Totoo ang pag-branch, at ang mga variation ng eksena, paglitaw ng tauhan, at magkakaibang pagbasa ay mga bagay na nilalaman ng kasalukuyang build.</li>
        <li><strong>Huwag bibili o hahabulin ang isang bundle na "all endings"</strong> para sa larong may isang ending sa kasalukuyan. Walang awtorisado ang anuman sa labas ng opisyal na itch.io page.</li>
        <li><strong>Panatilihin ang iyong mga save.</strong> Ang mga pagpipilian sa bersyong 0.2 ay hindi tiyak na mamamapa sa susunod na pampublikong build, at magbabago ang listahan ng ending.</li>
      </ul>
      <p>Ang tapat na buod ay na ang The Freak Circus ay dalawang araw at medyo pa ng isang tatlong-araw na kwento, na ang huling araw ay nasa produksyon. Ang pwede mong laruin ay isang mahusay na itinayong pambungad na may totoong mga branch. Ang hindi mo malalaro ang ending — at sa ngayon, kasama rito ang mga mabubuti.</p>
      <p>Para sa listahan ng mga ending at rutang may pinagmumulan, tingnan ang <a href="/fil/endings">gabay sa mga ending</a>; para sa kalagayan ng development, tingnan ang <a href="/fil/day-3">tracker ng Araw 3</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'Paano Magbasa ng mga Gabay ng Fan nang Hindi Nakakakuha ng Maling Impormasyon',
    description: 'Isang paraan ng pagsusuri sa anumang gabay ng fan para sa The Freak Circus — uriin ang mga claim sa naipatupad, planado, at hindi pa naverify, at tukuyin ang mga pinakakaraniwang pagkakamali.',
    date: '2026-10-19',
    tags: ['Fact-check', 'Mga Gabay', 'Komunidad'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Likhang sining ng komunidad ng mga tauhan ng The Freak Circus',
    readingTime: '9-minutong pagbasa',
    content: `
      <p class="article-lede">Bawat visual novel na may maliit at masugid na fandom ay sa bandang huli nagkakalikom ng mga gabay na hindi magkakaintindihan, at ang ilan sa mga ito ay kumpiyansang mali. Hindi mahirap basahin ang mga ito kung may paraan ka. Simple ang paraan: uriin ang bawat claim sa tatlong lalagyan — naipatupad, planado, o hindi pa naverify — at tanggihang mapalipat ang isang claim ng lalagyan dahil madalas itong lumilitaw.</p>
      <div class="walkthrough-note"><strong>Bakit mahalaga ito dito</strong><p>May tatlong hindi karaniwang katangian ang The Freak Circus na gumagawang karaniwan ng mga masamang gabay: prototype ang laro na may isang naipatupad na ending, ang mga tauhan nito ay may nai-publish na mga sukat ngunit walang nai-publish na mga edad, at marami sa kawili-wiling materyal ng karakter ay galing sa mga pahina ng fandom wiki sa halip na sa mga post ng developer. Bawat isa sa mga iyon ay lumikha ng tiyak na kategorya ng maling impormasyon.</p></div>

      <h2>Ang tatlong lalagyan</h2>
      <ul>
        <li><strong>Naipatupad.</strong> Nararating mo ito sa pampublikong build ngayon mismo. Isang ending ang kabilang: ang «Missing», ang masamang ending sa Araw 1 na nararating sa pamamagitan ng pagwalang-gawa habang inaasar si Pierrot.</li>
        <li><strong>Planado.</strong> Pinangalanan ito ng developer, at wala ito sa alinmang build. Apat ang kabilang: Pierrot, Harlequin, Protagonist, at "All together".</li>
        <li><strong>Hindi pa naverify.</strong> Walang first-party na pinagmumulan, ngunit paulit-ulit nang malawakan. Mga path ng save, bilang ng slot, iskedyul ng autosave, eksaktong mga edad at kaarawan, kabuuang oras ng pagtatapos, mga petsa ng paglabas ng Araw 3, at anumang tiyak na bilang ng mga ending.</li>
      </ul>
      <p>Karamihan sa mga faktwal na argumento tungkol sa larong ito ay natutunaw kapag nasa lalagyan na ang bawat pangungusap. Ang "may limang ending ang laro" ay error ng pagsasama: isang naipatupad na ending dagdag ang apat na planado, inihaharap bilang kinumpirmang kabuuan na hindi kailanman ibinigay ng developer.</p>

      <h2>Limang tanong na itanong sa isang gabay</h2>
      <ol class="walkthrough-steps">
        <li><strong>Tungkol sa aling build ito?</strong> Ang bersyong 0.2 ang kasalukuyang pampublikong build. Ang gabay na hindi kailanman nagngangalan ng bersyon ay naglalarawan ng alaala ng may-akda.</li>
        <li><strong>Nagli-link ba ito ng pinagmumulan?</strong> Isang opisyal na pahina, entry ng devlog, sagot sa AMA, post sa Tumblr. Ang gabay na hindi maturo sa alinman sa mga ito ay nagpapakahulugan.</li>
        <li><strong>Namamarkahan ba nito ang materyal ng fandom bilang materyal ng fandom?</strong> Ang mga detalye ng kasuotan, ang dahilan kung bakit tahimik si Pierrot, ang papel ni Harlequin sa kamatayan ni Columbina — lahat kapaki-pakinabang, lahat galing sa fandom wiki, lahat sulat lagyan ng label.</li>
        <li><strong>Sinasabi ba nito kung saan nagsisimula ang mga spoiler?</strong> Ang gabay na sumisira sa pagbukang-bihag ng Araw 2 nang walang babala ay hindi mas kapaki-pakinabang kaysa sa hindi.</li>
        <li><strong>Nagbabantulot ba ito kung saan dapat?</strong> Ang "planado", "hindi pa naipatupad", "hindi pa kumpirmado" ay hindi kahinaan ng isang gabay. Ang mga bahaging iyon ang magiging totoo pa rin pagkatapos ng susunod na update.</li>
      </ol>

      <h2>Mga partikular na pagkakamaling sulit hulihin</h2>
      <h3>Mga rutang romance para sa mga tauhang wala nito</h3>
      <p>Ang mga kinumpirmang opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala. Walang rutang Jester, walang rutang Ticket Taker, at walang rutang Doctor. Inilarawan ng developer ang paggawa sa natitirang mga tauhan bilang mga opsyong romance bilang posibilidad sa halip na pangako, at ang anumang ganoong ruta ay malamang darating bilang add-on o DLC. Ang mga gabay na naglalarawan ng rutang Ticket Taker na "nabubuksan sa pamamagitan ng tiyaga at maingat na dayalogo", ng "Clean Hands" na ending ng Doctor, o ng rutang Jester na "nabubuksan sa Araw 2" ay lahat naglalarawan ng mga bagay na hindi umiiral. Nagdagdag ang update ng Araw 2 ng mga tauhan, animated na mga sprite, muling dinisenyong menu, at bersyong Android — hindi mga bagong ruta.</p>
      <h3>Ang "good ending" na hindi umiiral</h3>
      <p>Walang naipatupad na mga mabuting ending. Ang tanging ending sa build ay masama, at ang mga romantikong konklusyong madalas ilarawan bilang mga "mabuting" resulta ay ang parehong mga planadong ending sa itaas — hindi pa tapos, at hindi garantisadong magiging mga resultang inaasahan ng mga fan.</p>
      <h3>Mga tiyak na numerong walang pinagmumulan</h3>
      <p>Ang mga tiyak na edad, kaarawan, taas para kay Columbina, kabuuang runtime, eksaktong bilang ng mga ending, at tiyak na lokasyon ng save ay lahat imbensyon ng fan na naka-damit na datos. Ang tunay na mga sukat ay ang height chart ng developer at ang relatibong pagkakasunod ng edad — at walang numerong edad na kailanman nai-publish para kaninuman sa mga tauhan.</p>
      <h3>Mga petsa para sa Araw 3</h3>
      <p>Walang inanunsyong petsa ng paglabas, at hiningi ng developer na huwag ipaulit ang mga claim ng petsang galing sa labas. Ang pahina ng countdown ay tantya ng fan na may orasan sa ibabaw. Ang tanging petsang bibilangin ay yaong nasa opisyal na itch.io page o sa isang opisyal na post.</p>

      <h2>Pagbasa ng mga pinagmumulan nang hindi bulagang nagtitiwala</h2>
      <p>Tunay na mahalaga ang fandom wiki para sa larong ito at sulit itong gamitin — na may isang partikular na babala. Nititiklop nito ang materyal ng karakter mula sa mismong mga eksena ng laro, na nangangahulugang malapit sa pinagmumulan ang mga paglalarawan ng karakter nito, habang ang mga hinuha at petsa nito ay hindi first-party. Ang praktikal na gawi ay panatilihing hiwalay ang dalawa habang nagbabasa.</p>
      <ul>
        <li><strong>Ang nagagawa nang maayos ng wiki:</strong> detalye ng kasuotan, paliwanag sa loob ng piksyon, buod ng mga relasyon, at tala ng mga sinagot ng developer sa mga thread ng AMA.</li>
        <li><strong>Ang mali ng wiki:</strong> mga numerong edad at karamihan sa mga kaarawan, taas para kay Columbina, at mga pagbasa sa mga hindi malinaw na pangyayari ng kwento na sinasbing mas tigas kaysa sa pinapayagan ng ebidensya.</li>
        <li><strong>Anong gagawin:</strong> kopyahin ang paglalarawan, panatilihin ang pagbabantulot.</li>
      </ul>
      <div class="walkthrough-tip"><strong>Isang linyang pagsubok para sa anumang claim</strong><p>Itanong: "Maaari bang salungatin ito ng developer bukas nang walang nakakapansin?" Kung oo, ang claim ay nangangailangan ng pagbabantulot o atribusyon. Ang "kinumpirma ng developer ang walong uri ng tiket" ay hindi mailalabag nang palihim. Ang "21 taong gulang si Harlequin" ay maaari, at nangyari na.</p></div>

      <h2>Isa pang bagay: kung saan mo nakuha ang laro</h2>
      <p>Bago suriin ang anumang gabay, tingnan ang mga link ng pinagmumulan nito. Sinabi ng developer na ang itch.io page ang tanging opisyal na pahina ng laro at hiningi niyang huwag muling i-upload o i-repost ang laro. Walang opisyal na Discord server, kaya bawat server na hindi naka-link mula sa mga opisyal na pahina ng itch.io, Tumblr, Patreon, o Bluesky ay pinapatakbo ng fan o hindi awtorisado.</p>
      <p>Ang mga gabay na itinutulak ang "mirrored download", isang programang "verification", o isang installer na "patched" ay hindi talaga mga gabay. Huwag kailanman mag-install ng hiwalay na programa o i-disable ang proteksyon ng antivirus para makuha ang larong ito.</p>

      <h2>Isang gumaganang gawi</h2>
      <p>Basahin muna ang tala ng saklaw ng isang gabay. Kapag sinabi nito kung aling build ang saklaw nito, nasaan ang mga pinagmumulan nito, at aling mga bahagi ang nasa development pa, ang natira nito ay maaaring pagkatiwalaan nang proporsyonal. Kapag binuksan nito ng kumpiyansang claim tungkol sa isang ending na hindi umiiral, iwanan ito — gabay iyon na kumpiyansang magsasabi sa iyo ng mali tungkol sa lahat pa ng iba.</p>
      <p>Para sa beripikadong bersyon ng mga pinakahinahanap na paksa, simulan sa <a href="/fil/endings">gabay sa mga ending</a>, <a href="/fil/characters/heights">gabay sa mga taas</a>, at <a href="/fil/save">gabay sa pag-save</a> — na lahat ay naghihiwalay ng kinumpirmang katotohanan mula sa mga hindi pa naverify na claim sa parehong paraan.</p>
    `,
  },
];
