// Filipino (fil) editorial content for the character profile pages.
//
// This file mirrors lib/character-content.ts, but only carries the editorial
// fields: the numeric fields (cm, feet, inches, ageOrder, strengthRank) are
// always derived from the official height chart in game-facts.ts so that no
// translation can drift away from the published numbers.
//
// Fact discipline is unchanged from the English source:
//   - Confirmed / from the current build / fan-derived labels are preserved
//     as three separate categories, with the same meaning in Filipino.
//   - No hedge is upgraded into a certainty, and no fandom claim is promoted
//     into a developer statement.
//
// Vocabulary follows the existing Filipino UI copy in messages/fil.json:
// "ruta", "ending", "trigger conditions", "build", "age order", "height
// chart", "developer", "save", "browser", "Araw 1", "Protagonist", "fan art".

import { HEIGHT_CHART, formatHeight } from './game-facts';
import type { CharacterEditorial } from './character-content';

const chartFor = (slug: string) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

/**
 * Ordinal place in a ranking, oldest-first age order or strength ranking.
 * Filipino ordinals used here: unang, ikalawang, pangatlong, ika-apat,
 * ikalimang.
 */
const FIL_ORDINALS = ['unang', 'ikalawang', 'pangatlong', 'ika-apat', 'ikalimang'];
const ordinal = (position: number) => FIL_ORDINALS[position - 1] ?? `${position}`;

/**
 * Imperial measurement rendered the way the Filipino pages already write it
 * ("mga 6 na talaga at 5,95 pulgada"). Derived from the chart, never typed by
 * hand, so it can never drift from the published numbers.
 */
const imperialFil = (slug: string) => {
  const chart = chartFor(slug);
  const inches = chart.inches.toFixed(2).replace(/0$/, '').replace('.', ',');
  return `${chart.feet} na talaga at ${inches} pulgada`;
};

export const characterProfilesFil: Record<
  'pierrot' | 'harlequin' | 'jester' | 'the-doctor' | 'ticket-taker',
  CharacterEditorial
> = {
  pierrot: {
    role: 'Ang isa sa dalawang pangunahing kakumpete, at ang tahimik na obsesya sa gitna ng kuwentong ito',
    intro:
      'Si Pierrot ang tauhan na buong laro ay nakabatay, at siya ring pinakamadalas na binubukas ng isang salitang: tahimik. Ang sarili mismong synopsis ng developer ay tumatawag sa kanya na "the silent yandere" (ang "yandere" ay ang pananalit ng komunidad para sa obsessed na romansa na humahantong sa kontrol) — isang paglalarawan na napakamaingat kaysa sa unang tingin. Ang katahimikan dito ay bahagi ng pagkakakapareho ng karakter, hindi nawawalang boses o placeholder. Ito ang dahilan kung bakit may bigat ang bawat galaw niya, at ito rin ang paraan kung paano naging mahirap ihiwalay ang kanyang pansin sa pag-aari.',
    sections: [
      {
        heading: 'Madaliang sagot',
        paragraphs: [
          `Ang Pierrot ay ${formatHeight(chartFor('pierrot')).metric}, kaya siya ang pinakapangatong isa sa limang karakter na ipinakilala, at pinakamataas sa dalawang romance lead. Sa age order na inilathala ng developer, nasa ${ordinal(chartFor('pierrot').ageOrder)} lugar sa limang, mula sa pinakamatanda patungo sa pinakamabata. Ang ruta niya ay binalak at naglalaban pa sa development, at isa ito sa dalawang romance route lang na binanggit ng developer.`,
        ],
      },
      {
        heading: 'Sino ang Pierrot',
        paragraphs: [
          'Ang opisyal na synopsis ay inilalagay nang tapat ang sitwasyon: nagtatrabaho ka sa isang café, pinamalo ka ng swerte sa pagkakatagpo ng Pierrot, at doon nagsisimula ang kanyang obsesya. Napreciso ang balangkas ng laro tungkol sa mekanismo: hindi siya isang lalaki na biglang naging nakababahala sa isang mahabang pagbabago ng eksena, kundi isang tao na unti-unting tumitigas ang kanyang pansin sa mga ordinaryong araw, hanggang maaaring na ayon na sa kanyang pansin ang mismong ordinaryo.',
          'Mahirap siyang taktikan nang tumpak dahil visual novel ang laro, at si Pierrot ay halos hindi nagsasalita. Marami sa mga tinutukoy ng mga manlalaro bilang kanyang personalidad ay binubuo mula sa hindi sinasabi niya at sa kung paano siya tumutugon sa player. Tunay ang materyal na ito at nasa build, ngunit interpretasyon na nakatayo sa obserbasyon, at pinaghiwalay ng pahinang ito ang dalawa.',
        ],
      },
      {
        heading: 'Tatig at detalyeng pisikal',
        paragraphs: [
          `Ang height chart na inilathala ng developer ay naglalagay ng Pierrot sa ${formatHeight(chartFor('pierrot')).metric}, mga ${imperialFil('pierrot')}. Sinabi rin ng parehong chart na ginamit ito ng developer bilang reference habang iginuguhit ang mga sprite, kaya itinuturing dito ang mga bilang na opisyal at hindi pala estimate na nabasa sa artwork.`,
          'Inilalarawan ng fandom wiki (ang wiki ng mga fan) ang kanyang disenyo nang detalyado: puting buhok na katamtaman ang haba, puting maskara na may itim na berdikal na guhit na hindi pantay-pantay ang haba, gintong mata, pula at itim na jester cap na may mga kampanilya, pula na motley coat na may gintong detalye, at itim na guanteng may kuko. Ang ganitong antas ng detalye sa kasuotan ay kapaki-pakinabang para matukoy siya sa mga screenshot at fan art, ngunit mula ito sa fandom at hindi sa pahayag ng developer, kaya ipinapakita rito bilang deskripsiyon ng mga fan.',
        ],
      },
      {
        heading: 'Age order at kinalalagyan niya sa limang karakter',
        paragraphs: [
          'Isang partikular na AMA post ang sumagot sa direktang kahilingan na ayusin ang cast mula sa pinakamatanda patungo sa pinakamabata. Ang inilathala na pagkakasunod ay Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pangatlong lugar kaya si Pierrot sa limang — mas matanda kaysa Jester at Harlequin, mas bata kaysa Ticket Taker at Doctor.',
          'Walang numerikong edad na inilathala para sa kahit na karakter, at worth itong sabihin nang eksakto dahil madalas na nagbibigay ang mga fan wiki at database ng karakter ng tiyak na edad na walang batayan sa first-party. Ang age order lang ang impormasyon tungkol sa edad na inilabas ng developer.',
        ],
      },
      {
        heading: 'Ranking ng lakas',
        paragraphs: [
          'Naglathala rin ang developer ng raw ranking ng pisikal na lakas, at nasa unang lugar si Pierrot — ahead ng Harlequin at Jester na magkatie sa ikalawa, saka ang Doctor, at sa dulo ang Ticket Taker. Inilathala ang ranking na ito bilang panig ng isang tanong mula sa isang fan at hindi bilang mekanismo ng laro, kaya mas maituturing itong paglalarawan ng karakter: ang pinakamalakas na miyembro ng sirko ay siya ring pinakamahigpit sa sarili.',
        ],
      },
      {
        heading: 'Bakit hindi nagsasalita si Pierrot',
        paragraphs: [
          'Ang opisyal na synopsis ay naglalarawan ng Pierrot bilang "the silent yandere". Ang iisang frasyong ito ay galing mismo sa developer, at ito ang pinakamalayo na umaabot ang first-party na materyal sa tanong ng dahilan. Nagdaragdag ang fandom wiki ng isang paliwanag sa loob ng kuwento: may patakaran na hindi magsalita sa publiko ang ipinatupad ng Jester, at si Jester ay isang pigurang awtoridad na lubos na iginalang ni Pierrot. Kasiyakan at tugma sa kung paano isinusulat ang dalawang karakter, ngunit mula ito sa wiki at hindi sa developer.',
          'Ang pagkakaiba ay mahalaga para sa isang praktikal na dahilan: kung nagbabasa ka ng pagsasalin ng script at mukhang sumasagot si Pierrot, isang tanong ito ng pagsasalin o interpretasyon at hindi kasalungat ng setting. Ang katahimikan ay ang pinakadefinisyong katangian ng karakter, hindi sira ng teksto.',
        ],
      },
      {
        heading: 'Personalidad at hugis ng kanyang obsesya',
        paragraphs: [
          'Sa buong materyal ng kuwentong ito, ang Pierrot ay nagmumukhang matiyaga at maingat, hindi impulsive. Hindi binubuo ng opisyal na synopsis ang obsesya bilang buong paggalit; binubuo ito bilang simula, na siyang usapin ng pacing at hindi ng intensity. Ang pagkakaiba sa iyon ang nagiging nakababahala ng kanyang kuwentong ito — mas nakababahala ang isang karakter na naging lubos at tahimik ang pansin kaysa sa isa ng tahimik na ipinapahayag ang kanyang kagustuhan.',
          'Tinatawagan ng fandom wiki siya ng magiliit at magalang sa labas habang ginugubat ang protagonist, at protektibo sa protagonist at sa Columbina. Itinatala rin nito ang isang tiyak na sagot ng developer sa tanong kung kailanman ay iiwan ni Pierrot ang protagonist: ang sagot ay hindi, at napakasigla. Malakas ang tugon na ito sa direksiyon ng kanyang ruta, kahit hindi pa tapos ang ruta mismo.',
        ],
      },
      {
        heading: 'Pierrot at Harlequin',
        paragraphs: [
          'Ang tunggalian sa pagitan ng dalawa ang sentrong balangkas ng laro. Tinawag ng synopsis si Harlequin na "seductive rival" ni Pierrot, at inilalarawan ang laro bilang pinamunuan ng isa sa dalawa. Magkaopposite sila sa paraan — tahimik at constant si Pierrot, theatrical at changing si Harlequin — at magkaopposite rin sa paraan ng paghahabol nila ng pansin ng protagonist.',
          'Inilalarawan ng fandom wiki ang kanilang kasaysayan bilang kasangkot si Columbina, at sinabi ng isang sagot ng AMA ng developer na nagkilala sila bilang mga bata. Ang masasabing hindi lumalabag sa materyal: ang tunggalian ay mas luma pa sa kasalukuyang panahon ng laro, at may kasaysayan itong ibinubunyag lamang ng kasalukuyang build sa mga pira-piraso.',
        ],
      },
      {
        heading: 'Pierrot at Columbina',
        paragraphs: [
          'Si Columbina ay dating miyembro ng sirko, at siya ang pigurang ang kamatayan niya ang humuhubog sa backstory ng dalawang lead. Itinatala ng fandom wiki na kailanman ay hindi nagkaroon ng romantikong relasyon si Pierrot at Columbina, na salungat sa isang pagbasa ng love-story narration ng sirko mismo, at hiwalay na sinabi ng developer na nalampasan na ni Pierrot ang history na iyon at lumaki mula noon.',
          'Praktikal na tala para sa sinumang nagbabasa ng kasalukuyang build: sinabi ng developer na ginagawa pa ang disenyo ng Columbina at sadyang itinatago ang mga detalye niya. Ang pinakabagong mga update sa development ay nagbanggit ng isang bago at maikling eksena na tumutukoy sa kanya. Ibig sabihin, ang hugis ng kuwento ay kinukumpirma habang ang karakter ay nasa production pa — hindi karaniwang posisyon para sa isang fan guide na sumusulat tungkol dito, at iyon ang dahilan kung bakit maikli ang seksiyong ito.',
        ],
      },
      {
        heading: 'Ruta at status ng ending',
        paragraphs: [
          'Nasa listahan ng mga planong ending ng developer ang romance ending ni Pierrot, kasama ang kay Harlequin, ang kay Protagonist, at ang "All together". Wala pa sa mga ito ang ipinatutupad. Ang kasalukuyang build ay may eksaktong isang ending, at ito ay masama: ang "Missing" ending na reached sa Araw 1 sa pamamagitan ng pagtanggi sa pag-react habang iniyaok si Pierrot.',
          'Dahil doon, walang naipapublikong trigger list para sa ruta ni Pierrot. Ang anumang choice chart na nangangako na mag-unlock ng kanyang ending ay naglalarawan ng build na hindi umiiral sa pampublikong bersyon. Kapag nalabas na ang ruta, ia-update ang pahinang ito ng aktuwal na mga pagpipilian at save point, hindi ng hula.',
        ],
      },
      {
        heading: 'Kinukumpirmang katotohanan laban sa interpretasyon',
        paragraphs: [
          'Para malinaw ang pagkakaiba, ganito ang paghahati ng materyal sa pahinang ito.',
        ],
        list: [
          'Kinukumpirma ng developer: ang kanyang taas, ang kanyang posisyon sa age order, ang kanyang unang lugar sa ranking ng lakas, ang paglalarawan sa kanya bilang "the silent yandere", ang kanyang tungkulin bilang isa sa dalawang lead, at ang katotohanan na binalak ang romance ending ni Pierrot.',
          'Mula sa kasalukuyang build: ang kanyang anyo, ang kanyang mga eksena, at ang paraan ng kanyang pagtugon sa protagonist.',
          'Mula sa fandom: ang buong deskripsiyon ng kostume at maskara, ang dahilan sa loob ng kuwento ng kanyang katahimikan, ang kanyang personal na kasaysayan, at ang mga espesipiko ng kanyang relasyon sa iba pang karakter.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ano ang taas ni Pierrot sa The Freak Circus?',
        answer: `Ang Pierrot ay ${formatHeight(chartFor('pierrot')).metric}, mga ${imperialFil('pierrot')}, sa height chart na inilathala ng developer. Siya ang pinakapangatong isa sa limang karakter, at pinakamataas sa dalawang romance lead.`,
      },
      {
        question: 'Ilang taas ang si Pierrot?',
        answer: `Walang numerikong edad na inilathala. Sa opisyal na age order ng developer, nasa ${ordinal(chartFor('pierrot').ageOrder)} lugar sa limang, mula sa pinakamatanda patungo sa pinakamabata: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.`,
      },
      {
        question: 'Mas matanda ba si Pierrot kaysa Harlequin?',
        answer:
          'Oo. Ang Harlequin ang pinakamabata sa limang, at si Pierrot ang pangatlong pinakamamatanda.',
      },
      {
        question: 'Ang pinakamalakas ba si Pierrot?',
        answer:
          'Oo. Nasa unang lugar siya sa strength list na inilathala ng developer, ahead ng Harlequin at Jester na magkatie sa ikalawa.',
      },
      {
        question: 'Puwede bang makipag-relationship kay Pierrot?',
        answer:
          'Binalak at naglalaban pa sa development ang romance ending ni Pierrot, ngunit wala pa ito sa pampublikong build. Walang mga trigger condition na maipapublish.',
      },
      {
        question: 'May ending ba si Pierrot?',
        answer:
          'Wala pa. Ang tanging ipinatutupad na ending ay ang masamang "Missing" ending sa Araw 1. Ipinapahayag ang ending ni Pierrot at nagsusulat pa.',
      },
      {
        question: 'Bakit hindi makapagsalita si Pierrot?',
        answer:
          'Ang opisyal na synopsis ay tumatawag sa kanya na "the silent yandere", kaya ang katahimikan ay paglalarawan ng developer at hindi kahinaan ng teksto. Ang fandom wiki ay nagbibigay ng dahilan sa loob ng kuwento na kasangkot si Jester, ngunit hindi galing sa developer ang detalyeng iyon.',
      },
      {
        question: 'Yandere ba si Pierrot?',
        answer:
          'Oo — iyon mismo ang tawag ng developer sa kanya sa opisyal na synopsis, hindi lamang pansalang pansin ng mga fan.',
      },
      {
        question: 'Ano ang relasyon ni Pierrot at Harlequin?',
        answer:
          'Sila ang pangunahing kakumpete, at inilalagay ang laro bilang pinamunuan ng isa sa dalawa. Ang Harlequin ay "seductive rival" ni Pierrot, at magkaopposite sila sa paraan: tahimik at constant si Pierrot, theatrical at changing si Harlequin.',
      },
      {
        question: 'Ano ang nangyari sa pagitan ng Pierrot at Columbina?',
        answer:
          'Si Columbina ay dating miyembro ng sirko at ang kamatayan niya ang humuhubog sa backstory ng dalawang lead. Itinatala ng fandom wiki na kailanman ay hindi nagkaroon ng romantikong relasyon siya at Pierrot. Nasa production pa ang disenyo niya, at sadyang itinatago ng developer ang mga detalye.',
      },
      {
        question: 'Tao ba si Pierrot?',
        answer:
          'Ayon sa fandom wiki, isa siya sa mga monster ng sirko. Inilalarawan ng synopsis ng developer ang cast at ang premis ng laro sa mga tuntunin ng sirko ng mga monster, at si Pierrot ay bahagi ng kumpanyadong iyon.',
      },
      {
        question: 'Ano ang itsura ni Pierrot nang walang maskara?',
        answer:
          'Inilalarawan ng fandom wiki ang puting buhok na katamtaman ang haba at gintong mata sa likod ng puting maskara na may itim na berdikal na guhit na hindi pantay-pantay ang haba. Mula sa fandom ang paglalarawang ito at hindi sa pahayag ng developer, at kapaki-pakinabang lalo na sa pagkilala sa kanya sa fan art.',
      },
    ],
  },
  harlequin: {
    role: 'Ang mapang-akit na kakumpete, at ang ikalawa sa dalawang romance route',
    intro:
      'Si Harlequin ang tauhan na ginagawang The Freak Circus isang pagpipilian sa halip na isang kuwento na may iisang landas. Ang opisyal na synopsis ay tumatawag sa kanya na "seductive rival" (mapang-akit na kalaban) ni Pierrot at inilalarawan ang laro bilang pinamunuan ng isa sa dalawa — isang maikling buod ng disenyo na binuo sa paligid ng dalawang hindi katugmang paraan ng pagkamanaig sa pansin ng protagonist.',
    sections: [
      {
        heading: 'Madaliang sagot',
        paragraphs: [
          `Ang Harlequin ay ${formatHeight(chartFor('harlequin')).metric}, ang pinakababa sa limang karakter na ipinakilala, at ang mas mababa sa dalawang romance lead. Sa age order na inilathala ng developer, nasa ${ordinal(chartFor('harlequin').ageOrder)} lugar sa limang, kaya siya ang pinakamabata. Nagtataya siya ng ikalawang lugar sa ranking ng lakas kasama si Jester, at mayroon siyang binalak na romance route na hindi pa ipinatutupad.`,
        ],
      },
      {
        heading: 'Sino ang Harlequin',
        paragraphs: [
          'Habang gumagana si Pierrot sa pamamagitan ng katatagan, gumagana si Harlequin sa pamamagitan ng pagtatanghal. Ang salitang ginamit ng developer ay "seductive", at ang karakter ay isinusulat para mabasa lamang habang gumagalaw: isang teatrikal at pabagu-bagong presensya na mahirap ikapit ang kanyang intensyon nang sapat para sigurado. Sa isang visual novel, kung saan halos lahat ng bigat nasa diyalogo, ito ang mas mahirap ibuod sa dalawang lead at ang mas sulit tingnan sa isang buong playthrough.',
          'Inilalarawan ng fandom wiki siya na walang-alala, sadistiko, nang-aasar, at lihim na seloso, at itinuturo na hindi siya komportable sa affeksyon. Ang selos ang kagiliwiling bahagi ng ganitong paglalarawan, sapagkat ito ang muling nagbibigay-kahulugan sa tunggalian bilang isang bagay na gusto niya gaya ng gusto ni Pierrot, at hindi lamang isang bagay na inaaway niya.',
        ],
      },
      {
        heading: 'Tatig at detalyeng pisikal',
        paragraphs: [
          `Ang height chart ng developer ay naglalagay ng Harlequin sa ${formatHeight(chartFor('harlequin')).metric}, mga ${imperialFil('harlequin')}. Ipinapamantit nito na 11 cm mas mababa kaysa Pierrot, isang pagkakaiba na itinuturing ng fandom wiki bilang makabuluhan sa kung paano sila pinapares laban sa isa't isa.`,
          'Inilalarawan ng fandom wiki ang kanyang disenyo bilang buhok na itim na kulot hanggang sa mga pisang, na may dalang tuplas na nakakulot sa hugis ng puso sa kaliwang noo, puting maskara na may berdeng rhombus na dumadaan sa isang mata at berdeng tatsulo sa ilalim ng kabila, mga mata na berde ng lason na lumilabag kapag inalis ang maskara, at berdeng-itim na hood at kostume na may hindi magkapantay na mga guante. Muli, ito ay deskripsiyon ng mga fan at hindi pahayag ng developer, at pinakakinabangan sa pagkilala sa kanya sa mga screenshot at artwork.',
        ],
      },
      {
        heading: 'Age order at ang pinakamabata sa limang',
        paragraphs: [
          'Sa age order na inilathala ng developer, ang Harlequin ang huli: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Siya ang pinakamabata sa ipinakilalang cast, at pinakamabata sa dalawang romance lead nang apat na posisyon.',
          'Ito ay tunay na dokumentadong katotohanan, at kasabay nito, isa sa mga pinakamadalas na maliwanag sa internet. Napakaraming materyal ng mga fan ang nagbibigay sa Harlequin ng tiyak na numerikong edad, at ilan sa mga numerong iyon ay salungat sa inilathala na pagkakasunod. Ang pagkakasunod ang maaasahang bersyon.',
        ],
      },
      {
        heading: 'Ranking ng lakas',
        paragraphs: [
          'Nagtataya ang Harlequin ng ikalawang lugar sa ranking ng lakas ng developer kasama si Jester, sa likuran ng Pierrot at sa unahan ng Doctor at ng Ticket Taker. Kasama ang pagiging pinakamabata at pinakababa, siya ay patuloy na inilalarawan bilang pinakamabilis sa grupo at hindi pinakamabigat — itinatala rin ng fandom wiki na magkatie sila ng Jester sa ikalawang kategorya para sa raw na pisikal na lakas.',
        ],
      },
      {
        heading: 'Ang sinasabi ng opisyal na materyal tungkol sa kanyang mga relasyon',
        paragraphs: [
          'May isang pahayag ng developer na madaling maliwanagin at sulit i-quote nang maingat. Tanong ang naglalagay ng mga kagat na iniiwan ng Harlequin habang naglaloko, at ang sagot ay: hindi mga iyon alok sa kasal, hindi nag-iipon ng pila ang marka, at gumagana ang kasal at ang paninindigan sa pagitan ng mga monster nang iba sa paraang mauunawaan ito ng protagonist. Maikli ang linyang iyon, ngunit maraming ginagawa: itinatatag nito na may sariling loob ang paglaloko ni Harlequin, at hindi ang reference frame ng protagonist ang reference frame ng sirko.',
          'Itinatala ng fandom wiki na secure ang pakiramdam ni Harlequin sa pagitan ng Doctor, na ang Doctor ang paboritong tao niya sa sirko, at na magkasundo sila ng Ticket Taker sa kabila ng magkakaibang kagustuhan. Itinatala rin nito ang isang implied na ugnayan sa kamatayan ni Columbina — na pinatay ni Harlequin siya upang "ligtasin" siya — na isang mabigat na pananaw at mismong itinuturing ng wiki bilang pananaw lamang, hindi pahayag. Kinukumpirma ng developer sa mga sagot ng AMA ang pangkalahatang hugis ng kasaysayan ng sirko, kaya totoo ang kuwento, ngunit hindi first-party na nakumpirma ang tiyak na pagkakahulugan ng tungkulin ni Harlequin dito.',
        ],
      },
      {
        heading: 'Ruta at status ng ending',
        paragraphs: [
          'Ang romance ending ni Harlequin ay isa sa apat na binanggit ng developer, kasama ang kay Pierrot, ang kay Protagonist, at ang "All together". Wala pa sa apat ang ipinatutupad. Ang kasalukuyang build ay may isang ending, ang masamang "Missing" ending sa Araw 1.',
          'Kaya hindi pa matapat na makakapagulat ng walkthrough para sa ending ni Harlequin. Ang gabay na naglilista ng eksaktong mga pagpipilian at kinakailangang kulay ng tiket ay naglalarawan ng build na hindi umiiral sa pampublikong bersyon, at makararating ang mga manlalaro na sumusunod dito sa ruta na hindi pa available. Kapag nalabas na ito, ang kapaki-pakinabang na gabay ay ang estratehiya ng checkpoint at save slot, hindi ang gawa-gawang tala ng mga trigger.',
        ],
      },
      {
        heading: 'Kinukumpirmang katotohanan laban sa interpretasyon',
        paragraphs: [
          'Ganito ang paghahati sa pahinang ito.',
        ],
        list: [
          'Kinukumpirma ng developer: ang kanyang taas, ang kanyang posisyon bilang pinakamabata sa age order, ang kanyang pagtaya sa ikalawang lugar sa ranking ng lakas, ang paglalarawan sa kanya bilang "seductive rival" ni Pierrot, ang katotohanan na hindi mga alok sa kasal ang kanyang mga kagat habang naglaloko, at ang katotohanan na binalak ang romance ending ni Harlequin.',
          'Mula sa kasalukuyang build: ang kanyang anyo, ang kanyang mga eksena, at ang kanyang mga branch — may ilang paglabas niya na nagbabago depende sa branch ng kuwento, na mismong kinukumpirma ng isang opisyal na bug note.',
          'Mula sa fandom: ang buong deskripsiyon ng kostume at maskara, ang kanyang personal na kasaysayan, at ang mga espesipiko ng kanyang relasyon sa Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ano ang taas ni Harlequin sa The Freak Circus?',
        answer: `Ang Harlequin ay ${formatHeight(chartFor('harlequin')).metric}, mga ${imperialFil('harlequin')}, sa height chart na inilathala ng developer. Siya ang pinakababa sa limang karakter.`,
      },
      {
        question: 'Ang pinakamabata ba si Harlequin?',
        answer: `Oo. Sa opisyal na age order ng developer, nasa ${ordinal(chartFor('harlequin').ageOrder)} lugar sa limang, mula sa pinakamatanda patungo sa pinakamabata: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.`,
      },
      {
        question: 'Ilang taas ang si Harlequin?',
        answer:
          'Walang numerikong edad na kailanmanman inilathala para sa kahit na karakter. Dokumentado lang ang relative order, at ito ay naglalagay sa kanya sa dulo.',
      },
      {
        question: 'Ano ang klase ng personalidad ni Harlequin?',
        answer:
          'Inilalarawan ng fandom wiki siya na walang-alala, sadistiko, nang-aasar, at lihim na seloso, at itinuturo na hindi siya komportable sa affeksyon. Siya ang teatrikal na kabaligtaran ni Pierrot, at iyon ang dahilan kung bakit gumagana ang tunggalian.',
      },
      {
        question: 'Ano ang relasyon ni Harlequin at Pierrot?',
        answer:
          'Sila ang pangunahing kakumpete ng laro. Ang opisyal na synopsis ay tumatawag sa Harlequin na "seductive rival" ni Pierrot at inilalagay ang laro bilang pinamunuan ng isa sa dalawa. Ipinapakita rin ng fandom wiki na nagkilala sila bilang mga bata at na kasangkot si Columbina sa kanilang kasaysayan.',
      },
      {
        question: 'May ruta ba si Harlequin?',
        answer:
          'Binalak at naglalaban pa sa development ang romance ending ni Harlequin, ngunit hindi pa ipinatutupad sa pampublikong build, kaya walang mga trigger condition na maipatatala.',
      },
      {
        question: 'Maaari ba makuha ang ending ni Harlequin?',
        answer:
          'Wala pa. Ang tanging naglalaro na ending ay ang masamang "Missing" ending sa Araw 1. Ipinapahayag ang ending ni Harlequin at nagsusulat pa.',
      },
      {
        question: 'Mapanganib ba si Harlequin?',
        answer:
          'Rated 18+ ang laro at kasama sa mga content warning nito ang murder, kidnapping, hindi pangkonsensuwal na paggamit ng gamot, at physical domination, kaya ang buong cast ay isinusulat bilang mapanganib. Si Harlequin mismo ay isinusulat bilang mahirap hulaan at sadistiko ayon sa deskripsiyon ng mga fan sa kanyang mga eksena.',
      },
      {
        question: 'Ano ang nangyari kay Columbina?',
        answer:
          'Siya ay dating miyembro ng sirko at ang kamatayan niya ang humuhubog sa backstory ng dalawang lead. Itinatala ng fandom wiki ang pananaw na si Harlequin ang pumatay sa kanya upang "ligtasin" siya, at tumanggi si Pierrot na makilahok. Nasa production pa ang disenyo niya at sadyang itinatago ang mga detalye.',
      },
      {
        question: 'May magandang ending ba si Harlequin?',
        answer:
          'Walang ipinatutupad na magandang ending. Ang tanging ending sa kasalukuyang build ay masama, at ang romance ending ni Harlequin ay planadong gawain na hindi pa inilabas.',
      },
    ],
  },
  jester: {
    role: 'Ang leader ng sirko, at isang karakter na walang sariling ruta',
    intro:
      'Si Jester ang pinakamadalas na maling ilalarawan sa internet, karaniwang sa direksiyong pagbibigay sa kanya ng romance route na wala naman siya. Malinaw ang developer: ang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala. Si Jester ay ipinakilala sa kasalukuyang build bilang bahagi ng mas malaking kumpanya, at ang kanyang presensya ang dahilan kung bakit nararamdaman ang sirko bilang isang institusyon at hindi lamang dalawang kakumpete at isang backdrop.',
    sections: [
      {
        heading: 'Madaliang sagot',
        paragraphs: [
          `Ang Jester ay ${formatHeight(chartFor('jester')).metric}, ang ikalawang pinakamataas sa limang karakter na ipinakilala, at nasa ${ordinal(chartFor('jester').ageOrder)} lugar sa limang sa age order ng developer. Nagtataya siya ng ikalawang lugar sa ranking ng lakas kasama si Harlequin. Wala siyang ruta at walang ending, at sinabi ng developer na ang paggawa sa iba pang karakter bilang mga opsyong romantik ay isang posibilidad, hindi isang pangako.`,
        ],
      },
      {
        heading: 'Sino ang Jester',
        paragraphs: [
          'Gumagana si Jester bilang pigurang awtoridad ng sirko. Inilalarawan ng fandom wiki siya bilang pangunahing kontrabida ng Freak Circus, ngunit kalmado at matino sa halip na pabagu-bago — isang paglalarawan na mas tumutugma sa disenyo kaysa sa salitang "kontrabida" lamang. Siya ang nagpapasiya ng mga tungkulin, ang naghahati ng mga papel ng sirko, at siyang pinapag-usap ng iba na may halo ng paggalang at pag-aalboroto.',
          'Ang mahalaga sa mambabasa ay ang kanyang impluwensya sa ibang karakter ay struktural. Kapag sinasabi ng isang source na may isang karakter na naggalang sa Jester, natatakot sa kanya, o kumikilos sa loob ng mga tuntuning itinakda ni Jester, inilalarawan nito ang hugis ng sirko at hindi ang isang eksena sa plot.',
        ],
      },
      {
        heading: 'Tatig at detalyeng pisikal',
        paragraphs: [
          `Ang height chart ng developer ay naglalagay ng Jester sa ${formatHeight(chartFor('jester')).metric}, mga ${imperialFil('jester')}. Mas mababa siya ng 6 cm kaysa Pierrot at ng 20 cm kaysa Doctor.`,
          'Inilalarawan ng fandom wiki siya na may mahabang malalim na violet na buhok, puting maskara na may violet na pabaligtad na puso at violet na bituin, violet na tailcoat, at opera gloves, at itinuturo na ambidextrous siya. Mula sa fandom ang paglalarawang ito at hindi sa pahayag ng developer.',
        ],
      },
      {
        heading: 'Age order',
        paragraphs: [
          `Sa age order na inilathala ng developer, nasa ${ordinal(chartFor('jester').ageOrder)} lugar sa limang si Jester, mula sa pinakamatanda patungo sa pinakamabata: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Mas matanda siya kaysa Harlequin at mas bata kaysa Pierrot, sa Doctor, at sa Ticket Taker.`,
          'Itinatala ng fandom wiki ang kaarawan ni Jester at sinasabing nagpa-publish ang developer ng pagbati para sa kanya, na dahil doon ay mas maayos ang kanyang petsa kaysa sa karamihan sa iba — ngunit ang mga petsang umiikot para sa iba pang karakter ay iniuugnay ng mga fan, at ang age order pa rin ang tanging opisyal na sukat.',
        ],
      },
      {
        heading: 'Ranking ng lakas',
        paragraphs: [
          'Nagtataya ang Jester ng ikalawang lugar kasama si Harlequin sa ranking ng lakas ng developer, sa likuran ng Pierrot at sa unahan ng Doctor at ng Ticket Taker. Gaya ng sa Harlequin, itinala ng fandom wiki siya bilang makapangyarihan, pero hindi siya makapagpantay sa Pierrot sa raw na lakas.',
        ],
      },
      {
        heading: 'Ang itinatatag ng opisyal na materyal',
        paragraphs: [
          'Ang pinakamalinaw na opisyal na pahayag tungkol sa Jester ay galing sa isang sagot ng AMA tungkol sa mga ruta: walang rutang Jester, at kung magdaragdag ng karagdagang ruta, malamang darating ito bilang add-on o DLC, na walang pinagkasunduang anuman. Isang hiwalay na sagot naman ang naglalarawan ng paggawa sa iba pang karakter bilang mga opsyong romantik bilang isang bagay na nais ng developer nang gawin ngunit hindi niya maipangako.',
          'Ang lahat ng iba pang karaniwang sinasabi tungkol sa kanya — na siya ang nagkokontrol sa "Fools", na tinutukoy niya ang mga tao bilang "strays", na siya ang pumili ng papel ng bawat isa sa sirko — ay mula sa fandom wiki at hindi sa developer, at pinakamabuting ituring na interpretasyon ng kanyang mga eksena.',
        ],
      },
      {
        heading: 'Ruta at status ng ending',
        paragraphs: [
          'Walang ruta ng Jester at walang ending ng Jester. Ang apat na ending na binanggit ng developer ay pag-aari ng Pierrot, ng Harlequin, ng Protagonist, at ng pinagsamang "All together" na katapusan.',
          'Sulit ding banggitin nang tuwiran ang isa pang karaniwang pagkakamali: ang ideya na na-u-unlock ang ruta ni Jester sa Araw 2 ay lumalabas sa ilang gabay. Walang ganoong bagay na umiiral. Ang ipinadalha ng update ng Araw 2 ay karagdagang mga karakter, animated na sprites, na-re-redesign na menu, at bersyong Android — hindi mga bagong ruta.',
        ],
      },
      {
        heading: 'Kinukumpirmang katotohanan laban sa interpretasyon',
        paragraphs: [
          'Lalo na sa kaso ni Jester ang proporsyon ang mahalaga, sapagkat napakaraming inilabas na materyal tungkol sa kanya ang espesipasyong ipinapakita bilang mekanismo.',
        ],
        list: [
          'Kinukumpirma ng developer: ang kanyang taas, ang kanyang posisyon sa age order, ang kanyang pagtaya sa ikalawang lugar sa ranking ng lakas, at ang katotohanan na wala siyang ruta.',
          'Mula sa kasalukuyang build: ang kanyang anyo, ang kanyang mga eksena, at ang awtoridad niya sa ibang karakter.',
          'Mula sa fandom: ang konsepto ng "Fools", ang pagbalangkas ng "strays", ang mga detalye kung paano niya hahatiin ang mga papel, at ang kanyang personal na kasaysayan.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ano ang taas ni Jester?',
        answer: `${formatHeight(chartFor('jester')).metric}, mga ${imperialFil('jester')}, sa height chart na inilathala ng developer. Siya ang ikalawang pinakamataas sa limang karakter.`,
      },
      {
        question: 'Leader ba si Jester ng sirko?',
        answer:
          'Inilalarawan ng fandom wiki siya bilang leader at pangunahing kontrabida ng sirko, at tuloy-tuloy sa build ang kanyang awtoridad sa ibang karakter. Mula sa fandom ang paglalarawang ito at hindi sa pahayag ng developer.',
      },
      {
        question: 'May ruta ba si Jester?',
        answer:
          'Wala. Kinukumpirma ng developer na walang rutang Jester. Ang tanging mga opsyon ay Pierrot, Harlequin, pareho, o wala.',
      },
      {
        question: 'May ending ba si Jester?',
        answer:
          'Wala. Ang apat na planong ending ay pag-aari ng Pierrot, ng Harlequin, ng Protagonist, at ng "All together".',
      },
      {
        question: 'Na-u-unlock ba ang ruta ni Jester sa Araw 2?',
        answer:
          'Wala. Ipinapahayag ito ng ilang gabay, ngunit walang ganoong bagay na umiiral. Ang update ng Araw 2 ay nagdagdag ng mga karakter, animated na sprites, na-re-redesign na menu, at bersyong Android.',
      },
      {
        question: 'Ilang taas ang si Jester?',
        answer: `Walang numerikong edad na inilathala. Sa opisyal na age order, nasa ${ordinal(chartFor('jester').ageOrder)} lugar sa limang, mula sa pinakamatanda patungo sa pinakamabata.`,
      },
      {
        question: 'Ang pinakamalakas ba si Jester?',
        answer:
          'Wala — nasa unang lugar si Pierrot. Nagtataya ang Jester ng ikalawang lugar kasama si Harlequin.',
      },
      {
        question: 'Puwede bang makipag-relationship kay Jester?',
        answer:
          'Hindi sa kasalukuyang build. Sinabi ng developer na ang paggawa sa iba pang karakter bilang mga opsyong romantik ay isang posibilidad na nais niyang i-explore ngunit hindi niya maipangako.',
      },
    ],
  },
  'the-doctor': {
    role: 'Ang klinikal na presensya sa gilid ng cast',
    intro:
      'Si Doctor ay ipinakilala sa kasalukuyang build at walang ruta, walang ending, at walang opisyal na entry sa taas sa pampublikong chart na binabanggit ng mga fan. Ang kaibha ng isang klinikal na tono na inilagay sa loob ng isang carnival, at isang karakter na inilalarawan ng fandom bilang sabay na siyang pinakamatinong at pinakamapanganib na tao sa tent.',
    sections: [
      {
        heading: 'Madaliang sagot',
        paragraphs: [
          `Ang Doctor ay ${formatHeight(chartFor('the-doctor')).metric}, kaya siya ang pinakatall sa limang karakter na ipinakilala nang may malinaw na margin — 9 cm sa itaas ng Pierrot. Nasa ${ordinal(chartFor('the-doctor').ageOrder)} lugar sa limang siya sa age order ng developer, ibig sabihin, ang Ticket Taker lang ang mas matanda sa kanya. Nasa ${ordinal(chartFor('the-doctor').strengthRank)} lugar sa limang siya sa ranking ng lakas, at wala siyang ruta at walang ending.`,
        ],
      },
      {
        heading: 'Sino ang Doctor',
        paragraphs: [
          'Inilalarawan ng fandom wiki ang Doctor bilang pangalawang kontrabida o posibleng neutral na pigura, at nagbibigay sa kanya ng dalawang mukha: kalmado at matino sa isa, mainit at sadistikong sa iba. Nakakatulong ito sa pagbabasa ng kanyang mga eksena, sapagkat inilalarawan ang pagbabago bilang makikita — nagiging pula ang kanyang mga mata kapag may partikular na damdamin ang nakuha sa kanya. Ipinapakita rin ng wiki na mas gusto niya ang talino kaysa sa brutal na lakas, na tugma sa isang karakter na siyang pinakatall at ika-apat lang sa raw na lakas.',
          'Siya rin ang karakter na pinakamalamang malalarawan bilang may ruta. Ang ideya ng isang ruta ng Doctor na may "magandang ending" ay umiikot sa ilang lumang gabay, at hindi ito tumutugma sa kahit anong inilarawan ng developer.',
        ],
      },
      {
        heading: 'Tatig at detalyeng pisikal',
        paragraphs: [
          `Ang height chart ng developer ay naglalagay ng Doctor sa ${formatHeight(chartFor('the-doctor')).metric}, mga ${imperialFil('the-doctor')} — ang pinakatall sa limang may 9 cm na lamang.`,
          'Inilalarawan ng fandom wiki siya na may pulang balat, maiikling pulang buhok, at isang beak na plague-doctor mask na may lumilabag na cyan na lente, at itinuturo na kailanman ay hindi ipinapakita ang kanyang mga binti at paa. Itinatala rin nito na kaliitin ang kamay niya, hindi siya marunong lumangoy, at nagiging pula ang kanyang mga mata kapag naranasan niya ang ilang damdamin. Lahat ng iyon ay deskripsiyon ng mga fan mula sa materyal, hindi mga pahayag ng developer.',
        ],
      },
      {
        heading: 'Age order at lakas',
        paragraphs: [
          `Nasa ${ordinal(chartFor('the-doctor').ageOrder)} lugar sa limang si Doctor sa opisyal na age order, mula sa pinakamatanda patungo sa pinakamabata: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Ang Ticket Taker lang ang mas matanda sa kanya.`,
          `Sa ranking ng lakas, nasa ${ordinal(chartFor('the-doctor').strengthRank)} lugar siya, sa unahan ng Ticket Taker at sa likuran ng Pierrot, ng Harlequin, at ng Jester. Ang pagiging pinakatall at ika-apat sa lakas ang kagiliwilang kombinasyon dito: malaki ang Doctor ngunit hindi napakalakas, at eksakto iyon ang inaasahan mula sa deskripsiyon ng mga fan na mas gusto niya ang talino kaysa sa lakas.`,
        ],
      },
      {
        heading: 'Isang detalyeng dapat malaman tungkol sa boses',
        paragraphs: [
          'May Russian accent si Doctor sa English script, bagaman Brazilian ang cast. Ito ay isang deliberate na in-joke sa pagitan ng voice actor at ang lumikha, at nakatala ito sa fandom wiki na may sangguniang sa sariling Tumblr post ng voice actor. Maliit na bagay ito, ngunit ito ang uri ng detalye na nagpapakita kung gaano karami sa dokumentasyon ng mga fan ang talagang may pinagmulang basehan sa halip na haka-haka.',
        ],
      },
      {
        heading: 'Ruta at status ng ending',
        paragraphs: [
          'Walang ruta at walang ending si Doctor. Kinukumpirma ng developer na ang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala, at na ang anumang karagdagang ruta ng karakter ay malamang darating bilang add-on o DLC, na walang pinagkasunduang anuman.',
          'Ang ending na "Clean Hands" na iniuugnay sa Doctor ng ilang lumang pahina ng mga fan ay walang suporta mula sa kahit na first-party source, at hindi ito isinasama ng site na ito bilang katotohanan.',
        ],
      },
      {
        heading: 'Kinukumpirmang katotohanan laban sa interpretasyon',
        paragraphs: [
          'May mas maraming materyal na mula sa fandom ang pahinang ng Doctor kumpara sa materyal na opisyal, kumpara sa iba pang karakter sa cast, sa malaking bahagi dahil walang siyang ruta at kaya walang first-party na deskripsiyon ng narrative tungkol dito.',
        ],
        list: [
          'Kinukumpirma ng developer: ang kanyang taas bilang pinakatall sa limang, ang kanyang ikalawang posisyon sa age order, ang kanyang ika-apat na posisyon sa ranking ng lakas, at ang katotohanan na wala siyang ruta.',
          'Mula sa kasalukuyang build: ang kanyang anyo, ang kanyang mga eksena, at ang paraan kung paano nagbubuo ang kanyang kalmaduhan.',
          'Mula sa fandom: ang mga eksperimento at espesimen na iniuugnay sa kanyang tent, ang kanyang personal na kasaysayan, at ang trivia ng karakter tungkol sa kanyang mga kagustuhan.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ano ang taas ng Doctor?',
        answer: `${formatHeight(chartFor('the-doctor')).metric}, mga ${imperialFil('the-doctor')} — ang pinakatall sa limang karakter, 9 cm sa itaas ng Pierrot.`,
      },
      {
        question: 'Ang pinakamamatanda ba ang Doctor?',
        answer:
          'Ika-apat siya mula sa pinakamatanda. Ang opisyal na age order, mula sa pinakamatanda patungo sa pinakamabata, ay Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Ang pinakamalakas ba ang Doctor?',
        answer:
          'Wala. Nasa ika-apat na lugar siya sa strength list ng developer, sa likuran ng Pierrot, ng Harlequin, at ng Jester.',
      },
      {
        question: 'May ruta ba ang Doctor?',
        answer: 'Wala. Kinukumpirma ng developer na walang rutang Doctor.',
      },
      {
        question: 'May magandang ending ba ang Doctor?',
        answer:
          'Wala. Walang ruta at walang ending ang Doctor sa kasalukuyang build. Ang tanging ending na umiiral ay ang masamang "Missing" ending sa Araw 1.',
      },
      {
        question: 'May "Clean Hands" ending ba para sa ang Doctor?',
        answer:
          'Wala. Lumalabas ang claim na iyon sa ilang pahina ng mga fan, ngunit walang suporta mula sa kahit na first-party source, at hindi ito nakalista ng site na ito bilang katotohanan.',
      },
      {
        question: 'Ano ang relasyon ng Doctor at Harlequin?',
        answer:
          'Itinatala ng fandom wiki na secure ang pakiramdam ni Harlequin sa pagitan ng Doctor at na ang Doctor ang paboritong tao niya sa sirko. Ito ay karakterisasyon na mula sa fandom at hindi pahayag ng developer.',
      },
      {
        question: 'Bakit may Russian accent ang Doctor?',
        answer:
          'Ito ay isang deliberate na in-joke sa pagitan ng voice actor at ang lumikha, na nakatala ng fandom wiki na may sangguniang sa sariling Tumblr ng voice actor. Brazilian ang iba pang cast.',
      },
      {
        question: 'Puwede bang makipag-relationship sa Doctor?',
        answer:
          'Hindi sa ngayon. Sinabi ng developer na ang paggawa sa iba pang karakter bilang mga opsyong romantik ay isang posibilidad na nais niyang i-explore ngunit hindi niya maipangako.',
      },
    ],
  },
  'ticket-taker': {
    role: 'Ang tagapangalaga ng tarangkahan, at ang pinakamamatanda sa limang karakter',
    intro:
      'Si Ticket Taker ang tauhan na una mong nakikita, at siya ring pinakamahusay na nakadokumento tungkol sa edad: ang age order na inilathala ng developer ay naglalagay sa kanya sa itaas. Siya rin ang tauhan na pinakamadalas na binibigyan ng romance route na wala, kaya siya ay isang magandang pagsubok para basahing mangkritikal ang materyal ng mga fan.',
    sections: [
      {
        heading: 'Madaliang sagot',
        paragraphs: [
          `Ang Ticket Taker ay ${formatHeight(chartFor('ticket-taker')).metric}, ang pinakababa sa limang karakter na ipinakilala, at nasa ${ordinal(chartFor('ticket-taker').ageOrder)} lugar sa limang sa age order ng developer, kaya siya ang pinakamamatanda. Nasa ${ordinal(chartFor('ticket-taker').strengthRank)} lugar sa limang siya sa ranking ng lakas. Wala siyang ruta at walang ending, at kinukumpirma ito nang tuwiran ng developer.`,
        ],
      },
      {
        heading: 'Sino ang Ticket Taker',
        paragraphs: [
          'Nasa isang posisyong liminal siya sa loob ng kuwento: isang pigura sa pasukan ng sirko, na kaugnay ng pahintulot, ng mga tarangkahan, at ng makina ng pagtatanghal. Inilalarawan ng fandom wiki siya na sumusunod at tapat sa layunin ng sirko, mature at propesyonal, labis na nababahala sa kalinisan at organisasyon, at inilalarawan ang kanyang tuntuning tapat nang walang palayaw: dito, walang nakakabali sa karakter.',
          'Iyon ang detalyeng dahil dito siya gumagana bilang karakter at hindi lamang bilang gatekeeper. Sa isang kuwento tungkol sa sirko na umaandar sa pagtatanghal, ang karakter na ang trabaho ay ipatupad ang hangganan sa pagitan ng manonood at ng performer ay kailangang maniwala rin sa mismong pagtatanghal.',
        ],
      },
      {
        heading: 'Tatig at detalyeng pisikal',
        paragraphs: [
          `Ang height chart ng developer ay naglalagay ng Ticket Taker sa ${formatHeight(chartFor('ticket-taker')).metric}, mga ${imperialFil('ticket-taker')} — ang pinakababa sa limang, 24 cm sa ibaba ng Doctor.`,
          'Inilalarawan ng fandom wiki siya na may maiikling madilim na navy na buhok, isang maskara na hatiin sa puting at itim na bahagi, navy na tailcoat na may gintong trim, gintong cravat, at top hat, at itinuturo na magkaibaw ang kanyang mga mata — isa puti, isa asul. Ang Portuguese na pangalan ng karakter, Bilheteiro, ay lumilitaw sa parehong materyal.',
        ],
      },
      {
        heading: 'Ang pinakamamatanda sa limang',
        paragraphs: [
          'Ito ang pinakamamatag na dokumentadong katotohanan tungkol sa Ticket Taker. Nangunguna siya sa age order na inilathala ng developer: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Bilang pinakamamatanda ng grupo at ang naglakad ng kaayusan, ang edad niya ay bagay sa kanyang tungkulin sa halip na guluhin ito.',
          'Gaya ng sa bawat karakter, walang numerikong edad na inilathala, at ang kaarawan na umiikot para sa kanya ay iniuugnay ng mga fan.',
        ],
      },
      {
        heading: 'Ranking ng lakas',
        paragraphs: [
          `Nasa ${ordinal(chartFor('ticket-taker').strengthRank)} lugar sa limang siya sa strength list ng developer, sa ibaba ng Doctor. Kasama ang pagiging pinakababa, ito ang pinakamababa sa presensya sa pisikal na anyo ng kumpanya — na tugma sa isang karakter na ang kanyang awtoridad ay prosedural lamang.`,
        ],
      },
      {
        heading: 'Ang sistema ng tiket',
        paragraphs: [
          'Kinukumpirma ng developer na walong uri ng tiket ang umiiral. Nasa ilalim ng pangunahing cast ang pink, ang pula at berde ay nagpapakita ng pagpipiliang ginagawa ng protagonist, at ang kombinasyon ng pink at pula ay nangangahulugang awtomatikong kinukuha ng Ticket Taker ang pula. Isa ito sa mas kongkretong piraso ng opisyal na impormasyong mekanikal sa laro, at ipinapaliwanag nito kung bakit mahalaga ang Ticket Taker sa mga branch kahit walang siyang sariling ruta.',
          'Ipinadagdag ng fandom wiki na ang pigura sa café na nagbibigay ng pink tiket sa protagonist ay ang Ticket Taker na naka-disguise, na siya rin ang paraan kung paano nagsisimula ang masamang "Missing" ending. Fan-derived ang pagkakakilanlan na iyon, ngunit direktang nakakabit ito sa tanging ending na talagang nasa build.',
        ],
      },
      {
        heading: 'Ruta at status ng ending',
        paragraphs: [
          'Walang ruta at walang ending si Ticket Taker. Sinabi ng developer na ang mga opsyon sa ruta ay Pierrot, Harlequin, pareho, o wala, at na ang natitirang mga karakter ay maaaring magkaroon lang ng ruta bilang add-on o DLC, kung mayroon man talaga.',
          'Sulit na sabihin nang tapat: may mga gabay ng fan na matagal nang naglalarawan ng romance route ng Ticket Taker na na-u-unlock sa pamamagitan ng pasensya at maingat na diyalogo. Walang ganoong ruta sa pampublikong build.',
        ],
      },
      {
        heading: 'Kinukumpirmang katotohanan laban sa interpretasyon',
        paragraphs: [
          'Ang Ticket Taker ay hindi karaniwang mabuting dokumentado sa materyal na opisyal para sa isang suporting character, lalo na dahil ang sistema ng tiket ay isa sa ilang kakaunting mekanikal na kinukumpirma.',
        ],
        list: [
          'Kinukumpirma ng developer: ang kanyang taas bilang pinakababa sa limang, ang kanyang unang posisyon sa age order, ang kanyang huling posisyon sa ranking ng lakas, ang pag-iralang ng walong uri ng tiket, at ang katotohanan na wala siyang ruta.',
          'Mula sa kasalukuyang build: ang kanyang anyo, ang kanyang mga eksena, at ang katotohanan na binibigyan ang protagonist ng pink tiket sa Araw 1.',
          'Mula sa fandom: ang pagkakadisguise bilang "Unknown" ng café, ang epitetong "reality manipulator", at ang mga detalye ng kanyang kasaysayan sa Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ano ang taas ng Ticket Taker?',
        answer: `${formatHeight(chartFor('ticket-taker')).metric}, mga ${imperialFil('ticket-taker')} — ang pinakababa sa limang karakter, 24 cm mas mababa kaysa Doctor.`,
      },
      {
        question: 'Ang pinakamamatanda ba si Ticket Taker?',
        answer:
          'Oo. Nangunguna siya sa opisyal na age order ng developer: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Ang pinakamalakas ba si Ticket Taker?',
        answer:
          'Wala. Nasa huling lugar sa limang siya sa strength list ng developer.',
      },
      {
        question: 'Puwede bang makipag-relationship sa Ticket Taker?',
        answer:
          'Wala. Kinukumpirma ng developer na walang rutang Ticket Taker. Ang mga opsyon ay Pierrot, Harlequin, pareho, o wala.',
      },
      {
        question: 'May ruta o ending ba si Ticket Taker?',
        answer:
          'Wala sa dalawa. Lumalabas siya sa buong kuwento bilang pigurang awtoridad, ngunit walang ruta o ending na pag-aari niya.',
      },
      {
        question: 'Ilang uri ng tiket ang mayroon?',
        answer:
          'Kinukumpirma ng developer ang walo. Nasa ilalim ng pangunahing cast ang pink, ang pula at berde ang nagpapakita ng pagpipiliang ng protagonist, at ang kombinasyon ng pink at pula ay nangangahulugang awtomatikong kinukuha ng Ticket Taker ang pula.',
      },
      {
        question: 'Ano ang pulang tiket?',
        answer:
          'Ang pula at berde ang mga kulay na nagpapakita ng pagpipiliang ginagawa ng protagonist. Ang kombinasyon ng pink at pula ay nangangahulugang pinipili ng Ticket Taker ang pula para sa kanya.',
      },
      {
        question: 'Ang lalaki sa café ba si Ticket Taker?',
        answer:
          'Itinutukoy ng fandom wiki ang pigurang "Unknown" sa café na nagbibigay ng pink tiket sa protagonist bilang ang Ticket Taker na naka-disguise. Fan-derived ito, at siya rin ang pink tiket na nagpapasimula ng ending na "Missing".',
      },
      {
        question: 'Bakit mahalaga si Ticket Taker kung walang siyang ruta?',
        answer:
          'Siya ang nagkokontrol ng sistema ng tiket, na isa sa ilang kakaunting mekanikal na kinukumpirma sa laro, at siya ang karakter na nagtatakda ng hangganan sa pagitan ng protagonist bilang bisita at bilang kalahok.',
      },
    ],
  },
};
