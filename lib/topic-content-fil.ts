// Filipino edition of the long-form guide pages.
//
// This file mirrors the English `guideContent` record in topic-content.ts:
// same five pages, same facts, same hedging. The English version stays the
// reference for structure, tone, and every factual claim — nothing here adds
// a fact that is not already in game-facts.ts, and every "planned / not
// confirmed / unverified" framing survives the translation.
//
// Rules kept while translating:
//   - Numeric lists (the official age order and the strength ranking) are
//     derived from game-facts.ts so the published numbers can never drift
//     from the source.
//   - Prose lists (the four planned endings, the platform details, the
//     shipped languages, the content warnings, and the unverified claims) are
//     written out here in Filipino so the wording reads like a native guide
//     rather than a machine rendering of the English string.
//   - The `related` array holds internal slugs, not copy. It is copied
//     verbatim from the English pages on purpose and must never be translated.
//
// Terminology follows the vocabulary already established in messages/fil.json:
// "ruta" for route, "ending" for ending, "browser", "save", "slot",
// "developer", "build", "bayan/developer" kept in Latin script, and
// "Araw 1 / Araw 2 / Araw 3" for the in-game days, matching the wiki
// glossary entry "Araw 1 / Araw 2". Character names and the game title stay
// in Latin script, as on the rest of the Filipino site.

import type { GuidePage } from './topic-content';
import { AGE_ORDER_OLDEST_FIRST, STRENGTH_RANKING } from './game-facts';

export const guideContentFil: Record<string, GuidePage> = {
  endings: {
    slug: 'endings',
    title: 'Mga Ending at Ruta ng The Freak Circus',
    metaTitle: 'Gabay sa mga Ending ng The Freak Circus: Lahat ng Ruta at Resulta',
    metaDescription:
      'Ilan ang ending ng The Freak Circus? Ang nakumpirmang masamang ending na "Missing", ang apat na plan na ending, sinong tauhan ang may ruta, at tungkol saan talaga nakumpirma ang developer.',
    intro:
      'Ang ending ang pinakamaraming hinahanap na paksa sa larong ito, at siya ring pinakamadingaling maling maiulat. Ang kasalukuyang pampublikong build ay may eksaktong isang ending. Lahat ng iba na binabanggit sa mga gabay, wiki, at video ay gawaing plan o pagpapakahulugan. Inhiwalay ng pahinang ito ang dalawa, at iniuugnay ang bawat claim sa kung saan sinabi ito ng developer.',
    quickFacts: [
      { label: 'Ending na puwedeng laruin ngayon', value: '1', note: 'Ang masamang ending na "Missing" sa Araw 1' },
      { label: 'Ending na ipinapahayag na plan', value: '4', note: 'Pierrot, Harlequin, Protagonist, "All together"' },
      { label: 'Kasalukuyang bersyon', value: 'Bersyong 0.2 prototype' },
      { label: 'Kinumpirmang opsyon sa ruta', value: 'Pierrot, Harlequin, pareho, o wala' },
      { label: 'Kalagayan ng Araw 3', value: 'Nagdederelop, walang ipinapahayag na petsa' },
    ],
    sections: [
      {
        heading: 'Ang iisang ending na talaga umiiral',
        paragraphs: [
          'Ang Bersyong 0.2 ay may isang ending lamang, at masamang ending ito. Nararating ito sa Araw 1: kung walang gagawin ang protagonist habang inaasar si Pierrot ng isang lalaki sa harap ng maraming tao, bibigyan siya ng pink na tiket ng isang taong hindi kilala, dadalhin siya sa pink na tent, at tatanggihan siya ng bawat kasapi ng sirko. Malinaw na sinasabi ng laro na nabigyan ng pagkakamali ang protagonist at namamatay nang trahediko.',
          'Mas mahalaga ito kaysa sa naririnig. Maraming materyal ng fan ang naglalarawan ng apat o higit pang ending na parang maaabot na ngayon. Sa kasalukuyang build, ang pagpili sa pagitan ng mga ruta ay nang developing pa — umiiral na ang mga branch, wala pa ang mga wakas.',
        ],
      },
      {
        heading: 'Ang apat na plan na ending',
        paragraphs: [
          'Ang developer ay naglilista ng apat na wakas sa opisyal na pahina at sa opisyal na FAQ. Dalawa ay ending ng romance, isa ay sinadyang walang romance, at isa ay poly ending.',
        ],
        list: [
          'Ending ni Pierrot (romance) — Isang romantikong wakas kung saan natatapos ang protagonist kasama ni Pierrot. Nakalista ito ng developer bilang plan, at paulit-ulit na tinatawag na nang developing pa.',
          'Ending ni Harlequin (romance) — Isang romantikong wakas kung saan natatapos ang protagonist kasama ni Harlequin. Nakalista ito ng developer bilang plan; hindi pa tapos ang script para rito.',
          'Ending ng Protagonist (walang romance) — Isang wakas kung saan natatapos ang kwento ng protagonist nang walang romance. Kinumpirma ng developer na umiiral ang rutang ito bilang konsepto, at na maaari pa ring pumili ng pakikipagkaibigan sa tabi nito.',
          '"All together" (poly ending) — Isang wakas kung saan mahilig ang protagonist sa Pierrot at Harlequin nang sabay. Ipinapahayag bilang plan, hindi bilang ipinatupad na nilalaman.',
        ],
      },
      {
        heading: 'Sinong tauhan ang talaga kayang puntahan',
        paragraphs: [
          'Ang opisyal na sagot ay makitid: Pierrot, Harlequin, pareho silang dalawa, o wala. Ang ruta ng Protagonist ay ang opsyonal na "wala", at kinumpirma ng developer na walang romance rito, ngunit maaari ka pa ring pumili na maging kaibigan ng mga tauhan.',
          'Walang ruta para sa Jester, Ticket Taker, o Doctor. Sinabi ng developer na kung magdaragdag ng karagdagang ruta sa bandang huli, malamang darating ito bilang add-on o DLC, at hindi pa ito napagkasunduan. Ang paggawa sa natitirang mga tauhan bilang mga opsyong romantik ay tinatawag na isang possibility, hindi pangako.',
        ],
      },
      {
        heading: 'Ang ibig sabihin ng poly ending',
        paragraphs: [
          'Ang ending na "All together" ay tinutukoy ng developer bilang ang mahilig ang protagonist sa Pierrot at Harlequin nang sabay. Ito ay hiwalay na nakalistang wakas, hindi isang side variant ng alinman sa dalawang rutang romantiko, at plan pa ito.',
        ],
      },
      {
        heading: 'Bakit magkakaiba ang bilang ng ending sa iba\'t ibang gabay',
        paragraphs: [
          'Magkakaiba ang kabuuan na iniuulat ng iba\'t ibang site dahil iba ang tinutugon ng bawat isa. May mga nagbibilang lamang ng puwedeng laruin, may mga nagbibilang lamang ng pinangalan ng developer, at may mga naghahalo ng plan na wakas at pinaghaka-haka ng fan. Ang pagbasa ng isang claim laban sa tatlong lalagyan sa itaas — nakatupad, plan, o hindi pa naverify — ang pinakamabilis na paraan para ilagay ito sa tamang lalagyan.',
          'May dalawa pang babala. Sinabi ng developer na ang script ay paunang ginagawa pa, kaya maaaring magbago ang mga plan na ending. At walang umiirang opisyal na bilang ng ending: ang sagot sa "ilan ang ending ang magkakaroon" ay maraming plan ngunit hindi pa maibigay ang bilang.',
        ],
      },
      {
        heading: 'Ano ang inaasahan mula sa Araw 3',
        paragraphs: [
          'Ang Araw 3 ay ang susunod na araw ng laro at aktibong binubuo. Inilarawan ng mga update sa development ang mga tapos nang bahagi ng beta at inilagay ang beta sa humigit-kumulang 30–40% ng update, na may mas malaking script kaysa Araw 2 at may idinadagdag na nilalaman ng masamang ending. Walang ipinapahayag na petsa ng paglabas, at hiling ng developer na huwag ipaulit ang mga petsang nanggagaling sa labas.',
          'Dahil sa Araw 3 ginagawa ang mga bagong wakas, ang pahinang ito ang dapat puntahan muli pagkatapos ng susunod na opisyal na update.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ilan ang ending ng The Freak Circus?',
        answer:
          'Isa lang ang ending na puwedeng laruin sa kasalukuyang build. Apat pa ang ipinapahayag na plan: Pierrot, Harlequin, Protagonist, at "All together". Sinabi ng developer na maraming ending ang binalak ngunit hindi niya maibigay ang kabuuang bilang.',
      },
      {
        question: 'Paano ko makukuha ang ending na "Missing"?',
        answer:
          'Ito lang ang ending na nakatupad. Sa Araw 1, huwag gumawa ng anuman habang inaasar si Pierrot; bibigyan ang protagonist ng pink na tiket, dadalhin sa pink na tent, at tatanggihan ng sirko.',
      },
      {
        question: 'Paano ko makukuha ang ending ni Harlequin?',
        answer:
          'Wala pang walkthrough, dahil hindi pa nakatupad ang ending na iyon. Binubuo pa ang pagpili sa rutang ni Harlequin. Ang anumang listahan ng hakbang-hakbang na trigger na nasa internet ay naglalarawan ng isang build na hindi pampublikong umiiral.',
      },
      {
        question: 'May ending ba si Pierrot?',
        answer:
          'Ang romantikong ending ni Pierrot ay ipinapahayag at binubuo pa, ngunit wala ito sa pampublikong build. Inilalarawan ng developer ang script at ang mga ending bilang paunang ginagawa pa.',
      },
      {
        question: 'May ruta ba para sa Jester, Doctor, o Ticket Taker?',
        answer:
          'Wala. Ang kinumpirmang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala. Ang mga karagdagang ruta para sa tauhan ay malamang darating bilang add-on o DLC, at hindi pa ito napagkasunduan.',
      },
      {
        question: 'Maaari ko bang mag-romance nang walang tauhan?',
        answer:
          'Oo. Umiiral ang ruta ng Protagonist bilang konsepto at walang romance ito, ngunit maaari ka pa ring pumili na makipagkaibigan sa mga tauhan.',
      },
      {
        question: 'Ilan ang ending ng tapos na laro?',
        answer:
          'Sinabi ng developer na maraming ending ang binalak ngunit hindi niya maibigay ang isang bilang. Ang script ay paunang ginagawa pa, kaya maaaring magbago ang listahan sa itaas.',
      },
      {
        question: 'Magdaragdag ba ang Araw 3 ng mga ending?',
        answer:
          'Aktibong binubuo ang Araw 3, at inilarawan ng mga update sa development ang karagdagang nilalaman ng masamang ending at mga nakatagong eksena. Walang ipinapahayag na petsa ng paglabas.',
      },
    ],
    related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
  },
  heights: {
    slug: 'characters/heights',
    title: 'Mga Taas ng Tauhan, Pagkakasunod ng Edad, at Mga Ranking',
    metaTitle: 'Height Chart ng The Freak Circus: Lahat ng Tauhan ayon sa Ranking',
    metaDescription:
      'Opisyal na height chart ng mga tauhan ng The Freak Circus — Pierrot, Harlequin, Jester, Doctor, at Ticket Taker — kasama ang ipinapahayag na pagkakasunod ng edad at ranking ng lakas.',
    intro:
      'Ang developer ay naglabas ng height chart kasama ang sprite reference, at ng hiwalay ding pagkakasunod ng edad. Ang dalawang listahang iyon ang dahilan kung bakit may tiyak na sagot ang mga tanong tungkol sa taas ng laro na ito — at kung bakit marami ring maling listahan online. Iniuulit ng pahinang ito ang mga nai-publish na numero at minamarkahan kung saan natatapos ang ranking.',
    quickFacts: [
      { label: 'Pinakamataas', value: 'Doctor — 207 cm', note: 'Humigit-kumulang 6 ft 9.5 in' },
      { label: 'Pinakamababa', value: 'Ticket Taker — 183 cm', note: 'Humigit-kumulang 6 ft 0 in' },
      { label: 'Saklaw ng taas', value: '24 cm', note: 'Dahil sa pinakamataas at pinakamababa' },
      { label: 'Pinakamatanda', value: 'Ticket Taker', note: 'Opisyal na pagkakasunod ng edad, pinakamatanda una' },
      { label: 'Pinakabata', value: 'Harlequin', note: 'Opisyal na pagkakasunod ng edad, pinakamatanda una' },
      { label: 'Pinakamalakas', value: 'Pierrot', note: 'Raw na ranking ng lakas mula sa developer' },
    ],
    sections: [
      {
        heading: 'Ang opisyal na height chart',
        paragraphs: [
          'Ang chart ay ini-post ng developer bilang reference na ginagamit sa pagguhit ng sprite. Nakalista rito ang limang tauhan, na siyang lahat ng tauhang ipinapakilala sa kasalukuyang build. Ang mga numero sa ibaba ay ang nai-publish na halaga, hindi mga tantiya mula sa sining.',
        ],
      },
      {
        heading: 'Ang opisyal na pagkakasunod ng edad',
        paragraphs: [
          'Hiwalay na AMA post ang sumagot sa kahilingang ayusin ang cast mula sa pinakamatanda hanggang pinakabata. Ang pagkakasunod ay Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Walang numerong edad na nai-publish para sa isa man sa kanila, at ang pagkakasunod lamang ang tanging impormasyon tungkol sa edad na inilabas ng developer.',
        ],
        list: AGE_ORDER_OLDEST_FIRST.map((entry) => `${entry.ageOrder}. ${entry.name} — ${entry.cm} cm ang taas`),
      },
      {
        heading: 'Ang ranking ng lakas',
        paragraphs: [
          'Naglabas din ang developer ng raw na ranking ng pisikal na lakas, na hiwalay sa taas. Ganito ang pagkakasunod: Pierrot una, Harlequin at Jester magkatie sa ikalawa, Doctor pangatlo, at Ticket Taker huli. Ang ranking ay ipinapahayag bilang karagdagang impormasyon sa tanong ng isang tagahanga, hindi bilang isang game mechanic, kaya ituring itong bahagi ng pagkakapareho ng karakter at hindi isang stat screen.',
        ],
        list: STRENGTH_RANKING.map(
          (entry) => `${entry.name} — rangko ${entry.strengthRank}${entry.strengthRank === 2 ? ' (magkatie)' : ''}`,
        ),
      },
      {
        heading: 'Ang hindi saklaw ng chart',
        paragraphs: [
          'Saklaw lamang ng chart ang limang tauhang ipinapakilala. Hindi lumilitaw sa nai-publish na chart si Columbina, na namamatay at humubog sa backstory ng dalawang lead, at walang nahanap na opisyal na numerong taas para sa kanya. Ang taas na umiikot sa mga fan wiki ay hindi first-party na impormasyon.',
          'Hindi rin pantay-pantay ang mga kaarawan. Isang kaarawan lang ng tauhan ang kinumpirma ng isang opisyal na post; ang mga petsang umiikot online ay galing sa mga tagahanga at dapat ituring na ganoon din.',
        ],
      },
      {
        heading: 'Bakit magkakaiba ang mga listahan ng tauhan',
        paragraphs: [
          'Ang halos lahat ng mga pagkakaiba ay nanggagaling sa paghahalo ng nai-publish na chart sa mga edad at kaarawang ibinigay ng tagahanga, pagkatapos ay ipinapakita ang resulta bilang opisyal. Nakadokumento ang mga numero ng taas at ang relatibong pagkakasunod ng edad. Hindi nakadokumento ang eksaktong edad, ang karamihan sa mga kaarawan, at kahit ano man tungkol sa isang pang-anim na tauhan.',
        ],
      },
    ],
    faq: [
      {
        question: 'Gaano kataas si Pierrot sa The Freak Circus?',
        answer: '198 cm ang Pierrot, humigit-kumulang 6 ft 5.95 in, sa height chart na nai-publish ng developer.',
      },
      {
        question: 'Gaano kataas si Harlequin?',
        answer:
          '187 cm ang Harlequin, humigit-kumulang 6 ft 1.62 in. Siya ang mas mababa sa dalawang lead na romantiko at ang pinakabata sa limang tauhan.',
      },
      {
        question: 'Sino ang pinakamataas na tauhan?',
        answer: 'Ang Doctor, 207 cm — humigit-kumulang 6 ft 9.5 in. 9 cm siyang mas mataas kaysa sa Pierrot.',
      },
      {
        question: 'Sino ang pinakamababang tauhan?',
        answer: 'Ang Ticket Taker, 183 cm — humigit-kumulang 6 ft 0 in. Siya rin ang pinakamatanda sa limang tauhan.',
      },
      {
        question: 'Alin ang pinakamatanda na tauhan?',
        answer:
          'Ang opisyal na pagkakasunod ng edad, pinakamatanda una, ay Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Ang Harlequin ang pinakabata.',
      },
      {
        question: 'Sino ang pinakamalakas?',
        answer:
          'Una si Pierrot sa listahan ng lakas ng developer, na may magkatie na ikalawa si Harlequin at Jester, pangatlo si Doctor, at huli si Ticket Taker.',
      },
      {
        question: 'Ilang taon si Harlequin?',
        answer:
          'Walang numerong edad na nai-publish. Siya ang pinakabata sa limang tauhan sa opisyal na pagkakasunod ng edad. Ang mga numerong edad na makikita sa mga fan site ay hindi first-party na impormasyon.',
      },
      {
        question: 'Gaano kataas si Columbina?',
        answer:
          'Walang opisyal na taas na nai-publish para sa kanya. Wala siya sa chart ng developer, na saklaw lamang ang limang tauhang ipinapakilala.',
      },
    ],
    related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
  },
  save: {
    slug: 'save',
    title: 'Paano Mag-save at Magpatuloy',
    metaTitle: 'Paano Mag-save ng The Freak Circus: Pagpapatuloy, Slot, at Browser Save',
    metaDescription:
      'Paano mag-save at magpatuloy sa The Freak Circus sa browser, PC, Mac, at Android — ang karaniwang gawi ng Ren\'Py engine, at kung aling mga detalye sa save ang hindi pa naitala ng developer.',
    intro:
      'Ang pag-save ang pinakamahinaw na bahagi ng mga gabay ng fan. Maraming site ang naglalathala ng eksaktong lokasyon ng save, bilang ng slot, at proseso ng paglipat mula sa browser patungo sa desktop na hindi kailanman nai-publish ng developer. Inilalarawan ng pahinang ito ang talagang alam — ang gawi ng engine at ang nakumpirmang Araw 2 entry point — at pinaghihiwalay ito sa hindi pa naitala.',
    quickFacts: [
      { label: 'Engine', value: "Ren'Py", note: 'Karaniwang save, load, quick save, at rollback' },
      { label: 'Magpatuloy nang hindi uulitin ang Araw 1', value: 'Oo', note: 'May Araw 2 entry point sa menu' },
      { label: 'Paglalaro sa browser', value: 'Sinusuportahan', note: 'Inihahain mula sa opisyal na itch.io page' },
      { label: 'Opisyal na dokumentasyon sa save', value: 'Hindi nai-publish' },
      { label: 'Bilang ng save slot', value: 'Hindi nakumpirma' },
      { label: 'Paglipat mula sa browser patungo sa desktop', value: 'Hindi nakumpirma para sa laro na ito' },
    ],
    sections: [
      {
        heading: 'Ang kinakapability ng laro mula sa simula',
        paragraphs: [
          "Ang The Freak Circus ay ginawa sa Ren'Py, isang karaniwang visual novel engine. Ibig sabihin, ginagamit nito ang karaniwang interface ng engine: isang save button na nagbubukas ng listahan ng slot, isang load button, quick save at quick load slot, at scene rollback sa history. Kung nagamit ka na ng ibang Ren'Py na laro, magiging pamilyar sa iyon ang dating ng lahat.",
          'Sinusuportahan din ang browser build, na inihahain mula sa opisyal na itch.io page. Nakatala at naaayos ng developer ang mga browser-specific na freeze at ang mga solusyon sa kanila, na nakumpirma na ang paglalaro sa browser ay isang napanatilih na landas at hindi aksidente.',
        ],
      },
      {
        heading: 'Ang Araw 2 entry point',
        paragraphs: [
          'Isang feature na kaugnay ng save ang nakumpirma at sulit malaman: kasama sa menu ang isang Araw 2 button na may maikling panimula, kaya maaari kang magpatuloy sa Araw 2 nang hindi naglalaro ng Araw 1 muli. Mahalaga ito sa mga manlalaro na ayaw nang magpatuloy sa kasalukuyang nilalaman nang binubasa muli ang pagbuka.',
        ],
      },
      {
        heading: 'Saan nakalalagyan ang mga save sa desktop',
        paragraphs: [
          "Ang desktop build ng Ren'Py ay iniimbak ang mga save sa folder na espesipiko sa proyekto sa loob ng directory ng user data. Magkaiba ang eksaktong lokasyon sa Windows, macOS, at Linux, at may ipinabahagi ang laro sa mahigit sa isang pangalan ng proyekto. Hindi namin ipinapublish ang isang partikular na lokasyon dito dahil hindi kailanman naitala ng developer ang ganito para sa laro na ito, at ang maling lokasyon sa isang gabay ay nagpapadala ng tao sa mga folder na wala naman.",
          "Kung kailangan mo ang lokasyon para sa sarili mong makina, ang maaasahang paraan ay buksan ang load o save menu sa loob ng laro at gamitin ang save-management action ng engine overlay, na diretsang nagbubukas ng tamang folder para sa platform na ginagamit mo.",
        ],
      },
      {
        heading: 'Bakit maaaring mawala ang mga browser save',
        paragraphs: [
          "Ang browser build ay iniimbak ang progreso sa sariling storage ng browser, hindi sa isang file na ikaw ang may hawak. May praktikal na bunga iyon: ang pag-clear ng site data, paggamit ng private window, o ilang mahigpit na privacy configuration ay magtatanggal ng mga save nang walang babala. Nangangahulugan din ito na nakatali ang browser save sa browser at profile na gumawa nito.",
          'Ito ay gawi ng engine at hindi lamang peculiaridad ng laro na ito, at ito ang pinakakaraniwang dahilan kung bakit nag-uulat ang mga manlalaro na nawalan ng progreso.',
        ],
      },
      {
        heading: 'Ang paglipat ng save sa pagitan ng browser at desktop',
        paragraphs: [
          "Nag-aalok ang Ren'Py ng export at import action para sa mga save sa engine overlay nito. Hindi pa nakumpirma ng developer kung makakapagbigay ito ng workflow na maaasahang maglipat ng browser save sa desktop build ng laro na ito, at magkakaiba ang mga ulat depende sa browser at platform.",
          'Ituring itong isang bagay na(subukan), hindi isang garantisadong paraan, at mag-back up ng anumang mahalaga sa iyo bago mag-eksperimento.',
        ],
      },
      {
        heading: 'Mga pahayag na pinili naming hindi paulit-ulitin',
        paragraphs: [
          'Lalabas ang mga sumusunod sa malawak na lugar at itinuturing na katotohanan ng ilang gabay ng fan. Walang isa man sa mga ito ang nanggaling sa developer, at hindi ito babalikan ng pahinang ito bilang katotohanan:',
        ],
        list: [
          "Ang laro ay may tiyak na bilang ng save slot, nag-a-autosave sa takdang agwat, o iniimbak ang mga save sa isang pinangalang folder. — Walang opisyal na dokumentasyon sa save. Ang mga build ng Ren'Py ay gumagamit ng karaniwang lokasyon, ngunit hindi pa nai-publish ng developer ang mga espesipiko.",
          'Maaaring i-export ang mga browser save sa isang zip archive at i-import sa desktop build. — May export at import action ang Ren\'Py sa engine overlay nito, ngunit hindi pa nakumpirma ng developer ang browser-to-desktop workflow para sa laro na ito.',
        ],
      },
    ],
    faq: [
      {
        question: 'Paano ko i-save ang The Freak Circus?',
        answer:
          "Isang Ren'Py release ito, kaya ginagamit nito ang karaniwang save at load button ng engine, na may listahan ng slot, quick save at quick load, at rollback sa history.",
      },
      {
        question: 'Maaari ko bang direktang pumunta sa Araw 2?',
        answer:
          'Oo. Kasama sa menu ang isang Araw 2 button na may maikling panimula, kaya maaari kang magpatuloy sa Araw 2 nang hindi naglalaro ng Araw 1.',
      },
      {
        question: 'Bakit nawala ang browser save ko?',
        answer:
          'Ang browser build ay iniimbak ang progreso sa browser storage. Ang pag-clear ng site data, private window, o mahigpit na privacy setting ay maaaring magtanggal nito. Nakatali din ang browser save sa browser profile na gumawa nito.',
      },
      {
        question: 'Saan ang mga save file ko sa PC o Mac?',
        answer:
          "Ang Ren'Py ay iniimbak ang mga save sa folder na espesifiko sa proyekto sa loob ng directory ng user data ng sistema, at magkaiba ang lokasyon depende sa platform at sa pangalan ng build. Hindi nai-publish ng developer ang lokasyon para sa laro na ito, kaya gamitin ang save-management action ng engine overlay mula sa menu ng laro upang mabuksan ang tamang folder sa iyong makina.",
      },
      {
        question: 'Maaari ko bang ilipat ang browser save sa bersyong desktop?',
        answer:
          "Nag-aalok ang Ren'Py ng export at import action para sa mga save. Hindi pa nakumpirma kung maaasahang magkatrabaho ang mga ito sa paglipat ng browser save sa desktop build ng laro na ito, kaya ituring itong bagay na(subukan) at mag-back up muna.",
      },
      {
        question: 'Ilang save slot ang mayroon?',
        answer:
          'Hindi ito naitala ng developer. Ang bilang ng slot ay galing sa engine build, hindi sa isang opisyal na pahayag.',
      },
      {
        question: 'Nag-a-autosave ba ang laro?',
        answer:
          'Ang gawi ng autosave ay galing sa engine build. Hindi nai-publish ng developer ang isang partikular na iskedyul ng autosave para sa laro na ito.',
      },
      {
        question: 'May kilalang problema ba sa browser sa pag-save?',
        answer:
          'Nakatala ng developer ang mga freeze sa browser sa loob ng tent ng Ticket Taker at sa ilang animated na bahagi, kasama ang mga solusyon, at binanggit din nitong ang napakabilis na paglaktaw ng mga eksena ay maaaring magpabukas sa hindi pagkakapareho ng visual effects. Mga isyu ito sa playback, hindi sa save, ngunit maaaring magpahinto ng isang session.',
      },
    ],
    related: ['save', 'download', 'faq', 'endings', 'day-3'],
  },
  download: {
    slug: 'download',
    title: 'Saan Maglaro at Mag-download',
    metaTitle: 'Pag-download ng The Freak Circus: Maglaro nang Libre sa Browser, PC, Mac, Android',
    metaDescription:
      'Saan ligtas na maglaro ng The Freak Circus — ang opisyal na itch.io page, ang mga suportadong platform, ang paglalaro sa browser, at paano matutukoy ang fake na download.',
    intro:
      'Ang The Freak Circus ay ipinamahagi sa itch.io page ng developer, na siya ring tanging opisyal na pahina ng laro. Lahat ng iba na nagsasabing may hawak ng buong build ay mirror o scam. Narito kung paano makuha ang totoong laro sa bawat platform, at ang ilang tanda na nagbibunyag ng fake.',
    quickFacts: [
      { label: 'Opisyal na pinagmumulan', value: 'itch.io — ang tanging opisyal na pahina' },
      { label: 'Presyo', value: 'Name your own price', note: 'Maaari mong bayaran ang anumang sa tingin mong makatarap, kahit zero' },
      { label: 'Kasalukuyang bersyon', value: 'Bersyong 0.2' },
      { label: 'Mga platform', value: 'Browser, Windows, macOS, Linux, Android' },
      { label: 'Mga wika', value: 'Ingles, Brazilian Portuguese, Simplified Chinese' },
      { label: 'Voice acting', value: 'Ingles lamang' },
    ],
    sections: [
      {
        heading: 'Ang tanging opisyal na pinagmumulan',
        paragraphs: [
          'Ang laro ay inilathala ni Garula sa itch.io, at sinabi ng developer na ito ang tanging opisyal na pahina ng laro. May "Run game" na option sa loob ng browser at mga build na puwedeng i-download para sa mga desktop at mobile platform na nakalistahan sa ibaba. Hindi nangangailangan ng anumang installation ang browser option.',
          'Dahil name-your-own-price ito, puwede mong i-download ang buong build nang libre. Ang pagbabayad ay isang paraan ng pagtulong sa isang solo developer na sinabing halos solo ang naganap ng development.',
        ],
      },
      {
        heading: 'Mga platform at build',
        paragraphs: [
          'Ang Bersyong 0.2 ay available sa lahat ng limang platform. Ang browser build ang pinakamabilis na paraan para magsimula at isang magandang pagpipilian kung gusto mong magbasa ng gabay habang naglalaro.',
        ],
        list: [
          'Web browser (HTML5) — Tumatakbo sa browser mula sa opisyal na itch.io page',
          'Windows — PC build, bersyong 0.2',
          'macOS — Mac build, bersyong 0.2',
          'Linux — Linux build, bersyong 0.2',
          'Android — APK build, bersyong 0.2',
        ],
      },
      {
        heading: 'Mga wika at voice acting',
        paragraphs: [
          'Ang laro ay may Ingles, Brazilian Portuguese, at Simplified Chinese. Inayos ang pagsasalin sa Tsino para sa bersyong 0.2, at napag-usapan din ang karagdagang wika bilang pagsasaling suportado ng komunidad.',
          'Ingles lamang ang voice acting, isinagawa ni Darthsuki. Ipinaliwanag ng developer na hindi orihinal na plano ang pagdagdag ng iba pang wika para sa voice, at magiging bagong trabaho iyon.',
        ],
        list: ['Ingles', 'Portuguese (Brasil)', 'Simplified Chinese'],
      },
      {
        heading: 'Mga babala sa nilalaman',
        paragraphs: [
          'Rated 18+ ang laro at naglalathala ang developer ng malinaw na listahan ng babala. Ito ang dapat basahin bago maglaro, lalo na kung pinipili mo kung magkano ng kwento ang babasahin mo bago magsimula.',
        ],
        list: [
          'Pagkakayanig ng screen',
          'Dugo, kamatayan, pagpatay, at gore',
          'Mga sanggunian sa kannibalismo',
          'Pang-aabuso',
          'Matinding wika',
          'Pagkidnap',
          'Paggamit ng gamot nang walang pahintulot',
          'Pisikal na dominasyon',
          'Mild na pisikal na pang-aabuso at pisikal na kontak nang walang pahintulot',
        ],
      },
      {
        heading: 'Paano matutukoy ang fake na download',
        paragraphs: [
          'Ang pinakamalinaw na tanda ng pagkabaliktad ay ang anumang site na nag-aalok ng buong laro sa labas ng opisyal na itch.io page. Hayagang hiniling ng developer na hindi i-re-upload o i-repost ang laro, at kinumpirma niyang walang opisyal na Discord server, kaya dapat ituring na pinapatakbo ng fan ang bawat server.',
          'Iba pa ring dapat pansinin: isang "verification" app o browser extension na kinakailangan, isang hindi karaniwang maliit na download na pala installer para sa ibang bagay, at anumang kahilingang i-disable ang antivirus protection.',
        ],
      },
      {
        heading: 'Ang maganda at mali ng browser build',
        paragraphs: [
          'Tunay na sinusuportahan ang paglalaro sa browser at naaayos ng developer ang mga problema sa browser, kasama ang isang freeze sa tent ng Ticket Taker at sa ilang animated na bahagi. Ang napakabilis na paglaktaw sa ilang eksena ay maaari pa ring mag-iwan ng hindi magkatugma ang visual effects, na nangangalawang malaman kung mabilis ka mag-click sa susunod.',
          "Kung gusto mo ang pinakakinis na karanasan para sa paulit-ulit na playthrough at paghahanap ng ruta, ang desktop build ay nagbibigay sa iyo ng buong Ren'Py interface na may rollback.",
        ],
      },
    ],
    faq: [
      {
        question: 'Saan ko maglaro ng The Freak Circus?',
        answer:
          'Sa itch.io page ng developer, na ang tanging opisyal na pahina ng laro. Mayroon itong in-browser play at mga build na puwedeng i-download.',
      },
      {
        question: 'Libre ba ang The Freak Circus?',
        answer:
          'Name-your-own-price ito sa itch.io, kaya puwede mong i-download ang buong build nang libre at magbayad ng anumang sa tingin mong makatarap kung gusto mong tumulong sa developer.',
      },
      {
        question: 'Maaari ko bang laruin ang The Freak Circus sa telepono ko?',
        answer:
          'Oo. May Android build na inilathala kasama ng browser, Windows, macOS, at Linux na bersyon.',
      },
      {
        question: 'May bersyong Tsino ba?',
        answer: 'Oo. Kasama sa laro ang Simplified Chinese, at inayos ang pagsasalin para sa bersyong 0.2.',
      },
      {
        question: 'Anong iba pang wika ang available?',
        answer:
          'Ang laro ay may Ingles, Portuguese (Brasil), at Simplified Chinese, na voice acting sa Ingles lamang. Napag-usapan ang iba pang wika bilang pagsasaling galing sa komunidad.',
      },
      {
        question: 'Paano ko malalaman kung fake ang isang download site?',
        answer:
          'Ang opisyal na itch.io page lang ang opisyal na pinagmumulan. Hiningi ng developer na hindi ipost muli ang laro, kaya ang anumang ibang site na nag-aalok ng buong build ay hindi lisensyado sa pinakamataas. Huwag kailanman mag-install ng hiwalay na "verification" program o i-disable ang antivirus para makuha ang laro.',
      },
      {
        question: 'Dapat ba akong maglaro sa browser o mag-download ng desktop build?',
        answer:
          "Ang browser build ay hindi nangangailangan ng installation at sapat na sa unang pagbasa. Ang desktop build ay nagbibigay ng buong Ren'Py interface na may rollback, na mas mainam para sa paghahanap ng ruta at paulit-ulit na playthrough.",
      },
      {
        question: 'May bug ba ang bersyong browser?',
        answer:
          'May ilang browser-specific na freeze ang naaayos ng developer, kasama ang isa sa tent ng Ticket Taker. Ang napakabilis na paglaktaw ng eksena ay maaari pa ring magpabukas sa hindi magkatugma ang visual effects.',
      },
    ],
    related: ['download', 'save', 'faq', 'endings', 'characters'],
  },
  faq: {
    slug: 'faq',
    title: 'Mga Madalas Itanong',
    metaTitle: 'FAQ ng The Freak Circus: Paglalaro, Pag-save, mga Ending, Mga Tauhan, at Pag-download',
    metaDescription:
      'Mga sagot sa pinakamaraming tanong tungkol sa The Freak Circus — saan maglaro, paano mag-save, ilan ang umiiral na ending, mga taas ng tauhan, at ano pa ang binubuo.',
    intro:
      'Ito ang maikling bersyon ng site. Kung may nakalaang gabay ang isang tanong, ibinibigay ng pahinang ito ang sagot at nag-uugnay sa detalye sa halip na ulitin ito. Kung nakadepende ang isang sagot sa impormasyong hindi pa nai-publish ng developer, sinasabi iyon nang malinaw sa halip na punan ng haka-hakang makatotohanang sagot.',
    quickFacts: [
      { label: 'Kasalukuyang bersyon', value: 'Bersyong 0.2 prototype' },
      { label: 'Ending na puwedeng laruin', value: '1', note: '"Missing" — isang masamang ending' },
      { label: 'Plan na ending', value: '4' },
      { label: 'Mga platform', value: '5', note: 'Browser, Windows, macOS, Linux, Android' },
      { label: 'Mga wika', value: '3', note: 'Ingles, Portuguese, Simplified Chinese' },
      { label: 'Araw 3', value: 'Nagdederelop, walang ipinapahayag na petsa' },
    ],
    sections: [
      {
        heading: 'Paglalaro at pag-download',
        paragraphs: [
          'Lahat ng impormasyon tungkol sa pagpapatakbo ng laro ay nasa gabay sa pag-download. Maikling bersyon: ang opisyal na itch.io page lang ang tanging opisyal na pinagmumulan, name-your-own-price ito, at mayroon itong in-browser play at mga build para sa desktop at Android.',
        ],
      },
      {
        heading: 'Pag-save at pagpapatuloy',
        paragraphs: [
          "Ang laro ay karaniwang Ren'Py release, kaya ang pag-save ay gumagana sa pamamagitan ng karaniwang interface ng engine. Sa menu ka rin makakapagpatuloy nang diretsa sa Araw 2 nang hindi naglalaro ng Araw 1. Ang mga detalyeng ipinapakita nang malawak online ngunit kailanman hindi nakumpirma ng developer — eksaktong lokasyon ng save, bilang ng slot, at garantisadong paglipat mula sa browser patungo sa desktop — ay nakamarkahan bilang hindi pa naverify sa gabay sa pag-save.",
        ],
      },
      {
        heading: 'Mga ending at ruta',
        paragraphs: [
          'Isa lang ang ending na puwedeng laruin sa kasalukuyang build, at masamang ending ito. Apat pa ang ipinapahayag na plan: Pierrot, Harlequin, ang Protagonist, at "All together". Ang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala — walang ruta para sa Jester, Doctor, o Ticket Taker.',
        ],
      },
      {
        heading: 'Mga tauhan at sukat',
        paragraphs: [
          'Ang developer ay naglabas ng height chart na saklaw ang limang tauhang ipinapakilala, at ng hiwalay na pagkakasunod ng edad. Ang dalawang listahang iyon lang ang opisyal na sukat. Walang first-party na pinagmumulan ang eksaktong edad, ang karamihan sa mga kaarawan, at ang taas ni Columbina na umiikot nang malawak online.',
        ],
      },
      {
        heading: 'Ang pinagpapatuloy pa',
        paragraphs: [
          'Ang Bersyong 0.2 ay naglalaman ng lahat ng limang pagpapakilala ng tauhan at isang masamang ending. Aktibong binubuo ang Araw 3, at inilarawan ng mga update sa development ang mga tapos nang bahagi ng beta sa humigit-kumulang 30–40% ng update. Walang ipinapahayag na petsa ng paglabas, at hiling ng developer na huwag ipaulit ang mga petsang nanggagaling sa labas.',
        ],
      },
      {
        heading: 'Tungkol sa site na ito',
        paragraphs: [
          'Isang hiwalay na gabay ng fan ito. Hindi ito ang developer, ang publisher, o isang opisyal na kanal ng suporta. Kinumpirma ng developer na walang opisyal na Discord server, kaya dapat ituring na pinapatakbo ng fan o hindi awtorisado ang bawat server at account na hindi naka-link mula sa opisyal na itch.io, Tumblr, Patreon, o Bluesky page.',
        ],
      },
    ],
    faq: [
      {
        question: 'Saan ko maglaro ng The Freak Circus?',
        answer:
          'Sa itch.io page ng developer, na ang tanging opisyal na pahina ng laro. Mayroon itong browser play at mga build na puwedeng i-download para sa Windows, macOS, Linux, at Android.',
      },
      {
        question: 'Paano ko ligtas na mag-download ng The Freak Circus?',
        answer:
          'Gumamit lamang ng opisyal na itch.io page. Hiningi ng developer na hindi ipost muli ang laro, kaya ang anumang ibang site na nag-aalok ng buong build ay hindi lisensyado.',
      },
      {
        question: 'Paano ko i-save ang The Freak Circus?',
        answer:
          "Isang Ren'Py release ito, kaya ginagamit nito ang karaniwang save at load interface ng engine, na may quick save at rollback.",
      },
      {
        question: 'Maaari ko bang magpatuloy mula sa Araw 2 nang hindi naglalaro ng Araw 1?',
        answer: 'Oo. Kasama sa menu ang isang Araw 2 button na may maikling panimula.',
      },
      {
        question: 'Ilan ang ending?',
        answer:
          'Isa lang ang puwedeng laruin ngayon — ang masamang ending na "Missing". Apat pa ang plan: Pierrot, Harlequin, ang Protagonist, at "All together". Walang ipinapahayag na kabuuan.',
      },
      {
        question: 'Paano ko makukuha ang ending ni Harlequin?',
        answer:
          'Hindi pa — plan ito at hindi pa nakatupad. Ang anumang nakalathalang listahan ng trigger na sunod-sunod ay maglalarawan ng isang build na hindi pampublikong umiiral.',
      },
      {
        question: 'Gaano kataas si Pierrot?',
        answer: '198 cm, humigit-kumulang 6 ft 5.95 in, sa height chart na nai-publish ng developer.',
      },
      {
        question: 'Sino ang pinakamatanda sa mga tauhan?',
        answer:
          'Ang Ticket Taker, sa opisyal na pagkakasunod ng edad: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Bakit hindi makapagsalita si Pierrot?',
        answer:
          'Ang opisyal na synopsis ay naglalarawan sa kanya bilang ang "silent yandere" — yandere, ibig sabihin, isang uri ng tauhan na labis nang possessive at obsesibo — at ang kanyang katahimikan ay piniling pagkakapareho ng karakter, hindi nawawalang voice actor. Ang mga detalye tungkol sa dahilan sa loob ng kuwento ay nagmumula sa materyal ng kuwento, hindi sa pahayag ng developer.',
      },
      {
        question: 'Kailan lalabas ang Araw 3?',
        answer:
          'Walang ipinapahayag na petsa. Aktibong binubuo ito, at ang beta ay humigit-kumulang 30–40% ng update.',
      },
      {
        question: 'May opisyal na Discord server ba?',
        answer:
          'Wala. Kinumpirma ng developer na walang opisyal na server, kaya ang bawat server ng komunidad ay dapat ituring na pinapatakbo ng fan.',
      },
      {
        question: 'Maaari ko bang gumawa ng fan art ng mga tauhan?',
        answer:
          'Oo. Ang fan art ay karaniwang bahagi ng fandom. Ang site na ito ay nagtitipon ng mga sining ng komunidad na may pahintulot at pagbibigay ng kredito sa gumagawa, at hindi nagho-host ng game files o nagrebalik ng laro.',
      },
    ],
    related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
  },
};
