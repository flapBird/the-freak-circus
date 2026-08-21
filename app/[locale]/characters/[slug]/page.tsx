import { notFound } from 'next/navigation';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { CharacterSlug, characterCopy, characterSlugs, editorialLocale } from '@/lib/site-content';

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return characterSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  if (!characterSlugs.includes(params.slug as CharacterSlug)) return {};
  const lang = editorialLocale(params.locale);
  const ch = characterCopy[lang][params.slug as CharacterSlug];
  const description = lang === 'zh'
    ? `${ch.summary} 探索 ${ch.name} 在 The Freak Circus 中的性格、故事与人物关系。`
    : `${ch.summary} Explore ${ch.name}'s personality, story, and relationships in The Freak Circus.`;
  return buildMetadata({ title: `${ch.name} — The Freak Circus Character`, description, canonical: `${SITE_URL}${params.locale === 'en' ? '' : `/${params.locale}`}/characters/${params.slug}`, ogImage: `${SITE_URL}${ch.image}` });
}

export default function CharacterPage({ params: { locale, slug } }: Props) {
  if (!characterSlugs.includes(slug as CharacterSlug)) notFound();
  const current = slug as CharacterSlug;
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const ch = characterCopy[lang][current];
  const detail = characterEditorial[lang][current];
  const p = locale === 'en' ? '' : `/${locale}`;
  const characterLink = (target: CharacterSlug) => <Link className={`character-inline-link is-${target}`} href={`${p}/characters/${target}`}>{characterCopy[lang][target].name}</Link>;

  return (
    <main className="character-profile-page">
      <header className="page-hero character-profile-hero"><div className="page-container">
        <h1>{ch.name}</h1><p className="page-hero-lead">{ch.summary}</p>
        <div className="page-hero-actions"><Link className="button-secondary" href={`${p}/characters`}>← {zh ? '返回全部角色' : 'Back to all characters'}</Link><Link className="button-primary" href={`${p}/#play`}>{zh ? '进入故事' : 'Enter the story'}</Link></div>
      </div></header>

      <section className="page-section page-container profile-layout character-profile-layout">
        <aside className="profile-visual-column">
          <div className="profile-art"><SafeImage src={ch.image} alt={`${ch.name} in The Freak Circus`} width={740} height={940} /></div>
          <dl className="character-fact-list">
            <div><dt>{zh ? '登场版本' : 'Introduced'}</dt><dd>0.2 Prototype</dd></div>
            <div><dt>{zh ? '人物定位' : 'Story position'}</dt><dd>{ch.label}</dd></div>
            <div><dt>{zh ? '资料状态' : 'Profile status'}</dt><dd>{zh ? '依当前版本整理' : 'Current-build evidence'}</dd></div>
          </dl>
        </aside>

        <article className="character-story">
          <section><p className="section-kicker">{zh ? '人物速写' : 'CHARACTER PORTRAIT'}</p><h2>{detail.portraitTitle}</h2><p className="character-story-intro">{detail.portrait}</p></section>
          <section><h2>{detail.storyTitle}</h2><p>{detail.storyBefore}{detail.primary ? characterLink(detail.primary) : null}{detail.storyAfter}</p><p>{detail.storySecond}</p></section>
          <blockquote className="character-theme-quote"><span>{zh ? '阅读关键词' : 'READING THE CHARACTER'}</span><p>{detail.theme}</p></blockquote>
          <section><h2>{zh ? '人物关系' : 'Connections inside the circus'}</h2><p>{detail.connectionsBefore}{detail.connections.map((target, index) => <span key={target}>{index > 0 ? (index === detail.connections.length - 1 ? (zh ? '与' : ' and ') : '、') : ''}{characterLink(target)}</span>)}{detail.connectionsAfter}</p></section>
          <section><h2>{zh ? '0.2 原型版已经展示的内容' : 'What version 0.2 actually shows'}</h2><ul className="character-evidence-list">{ch.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="character-boundary"><h2>{zh ? '路线与结局边界' : 'Route and ending boundary'}</h2><p>{ch.scope}</p><p>{zh ? '这里把已发布剧情与开发计划分开：人物登场、暗示或分支画面都不能自动证明一条完整路线已经存在。新版本出现可复核内容后，本页才会补充选择、场景与结局说明。' : 'Released scenes and future plans are kept separate here. An introduction, implication, or branch-specific appearance does not by itself prove that a complete route exists. Choice, scene, and ending notes will be added only when a playable build supports them.'}</p></section>
          <nav className="character-reading" aria-label={zh ? '继续阅读' : 'Continue reading'}><h2>{zh ? '继续深入马戏团' : 'Go deeper into the circus'}</h2><div>
            <Link href={`${p}/wiki`}><span>Wiki</span><small>{zh ? '世界观与版本事实' : 'World and build facts'} →</small></Link>
            <Link href={`${p}/day-3`}><span>Day 3</span><small>{zh ? '下一章当前状态' : 'Next-chapter status'} →</small></Link>
            <Link href={`${p}/updates`}><span>{zh ? '更新记录' : 'Updates'}</span><small>{zh ? '按时间核对进度' : 'Follow verified progress'} →</small></Link>
          </div></nav>
        </article>
      </section>
    </main>
  );
}

type EditorialEntry = { portraitTitle: string; portrait: string; storyTitle: string; storyBefore: string; primary?: CharacterSlug; storyAfter: string; storySecond: string; theme: string; connectionsBefore: string; connections: CharacterSlug[]; connectionsAfter: string };

const characterEditorial: Record<'en' | 'zh', Record<CharacterSlug, EditorialEntry>> = {
  en: {
    pierrot: { portraitTitle: 'Quiet devotion with a dangerous direction', portrait: 'Pierrot is the emotional center of the current conflict: a silent clown whose attention begins with the protagonist and steadily becomes harder to separate from possession. His stillness is not emptiness; it makes every gesture carry more weight.', storyTitle: 'Where Pierrot enters the story', storyBefore: 'The established opening brings Pierrot into the café worker’s ordinary day and places his attachment beside a growing rivalry with ', primary: 'harlequin', storyAfter: '. That rivalry turns romance into pressure: the protagonist is not simply choosing between personalities, but navigating two forms of attention that can both become dangerous.', storySecond: 'The current prototype establishes this tension without pretending to resolve it. Pierrot’s planned conclusion remains part of the work still being developed.', theme: 'Silence, devotion, jealousy, and the uneasy moment when care stops feeling safe.', connectionsBefore: 'Pierrot’s story is clearest when read beside ', connections: ['harlequin', 'jester'], connectionsAfter: '. One anchors the central rivalry; the other helps show that the circus is larger than a two-person contest.' },
    harlequin: { portraitTitle: 'Charm sharpened into rivalry', portrait: 'Harlequin is Pierrot’s unpredictable counterpart: expressive where Pierrot is quiet, inviting where the atmosphere warns the player to hesitate. His charm gives the rivalry momentum while keeping his intentions difficult to read.', storyTitle: 'A second suitor changes the shape of the story', storyBefore: 'Harlequin cannot be understood in isolation from ', primary: 'pierrot', storyAfter: '. Their opposition gives the protagonist’s choices emotional and strategic weight, because attention from either performer can alter how the other responds.', storySecond: 'Some appearances vary by branch in the current build, which makes route context important. Those variations are evidence of branching, not evidence of a finished ending.', theme: 'Performance, temptation, rivalry, and the risk hidden inside an easy smile.', connectionsBefore: 'Harlequin’s strongest documented connection is to ', connections: ['pierrot', 'ticket-taker'], connectionsAfter: '. Reading the wider cast alongside that rivalry helps separate the central conflict from the circus around it.' },
    jester: { portraitTitle: 'A new presence beyond the central rivalry', portrait: 'Jester broadens the current cast beyond its two leading rivals. The prototype establishes an introduction and a distinct place in the circus, but leaves the character’s larger purpose deliberately unresolved.', storyTitle: 'What the introduction contributes', storyBefore: 'Jester’s arrival helps frame the conflict around ', primary: 'pierrot', storyAfter: ' as part of a larger ensemble rather than a sealed romance triangle.', storySecond: 'That narrative function is visible now; a completed standalone route or ending is not. The distinction matters when interpreting screenshots, fan theories, or isolated dialogue.', theme: 'Misdirection, ensemble tension, and the suspicion that every performer knows more than they reveal.', connectionsBefore: 'For useful context, compare Jester’s introduction with ', connections: ['pierrot', 'harlequin'], connectionsAfter: '. Their established rivalry provides the clearest baseline for understanding how a new performer changes the room.' },
    'the-doctor': { portraitTitle: 'Clinical imagery inside a theatrical nightmare', portrait: 'The Doctor adds a colder register to the current cast. The introduction is present in the prototype, while the character’s full motives, route significance, and outcome remain outside what the released build can confirm.', storyTitle: 'Reading the Doctor without filling the gaps', storyBefore: 'The Doctor enters a story already shaped by ', primary: 'harlequin', storyAfter: ' and his rivalry with Pierrot, but the current material does not justify turning that entrance into a complete route summary.', storySecond: 'A careful profile can describe what the player meets and the atmosphere it creates while leaving unsupported route names, endings, and motivations out of the record.', theme: 'Control, uncertainty, and the contrast between clinical authority and carnival disorder.', connectionsBefore: 'The most useful reading path places the Doctor beside ', connections: ['pierrot', 'harlequin'], connectionsAfter: ', then returns to the version timeline before drawing conclusions about later scenes.' },
    'ticket-taker': { portraitTitle: 'The threshold between visitor and participant', portrait: 'Ticket Taker occupies a naturally liminal role in the current cast: a figure associated with entering the circus and the systems that govern its spectacle. The prototype confirms the introduction, not a completed romance route.', storyTitle: 'Why a supporting entrance still matters', storyBefore: 'The Ticket Taker helps turn the circus from a backdrop into an organized place surrounding ', primary: 'pierrot', storyAfter: ', Harlequin, and the protagonist.', storySecond: 'Maintenance notes also show that this introduction has received technical attention, including a browser-animation freeze fix. That supports the scene’s presence, but does not establish an ending.', theme: 'Thresholds, permission, spectacle, and the cost of stepping farther inside.', connectionsBefore: 'Read Ticket Taker alongside ', connections: ['pierrot', 'harlequin'], connectionsAfter: ' to see how the wider circus frames the central rivalry without assuming every performer is a finished suitor.' },
  },
  zh: {
    pierrot: { portraitTitle: '安静爱意正在朝危险方向生长', portrait: 'Pierrot 是当前冲突的情感中心：这位沉默的小丑把注意力投向主角，而这份关注逐渐难以与占有欲分开。他的沉默并非空白，反而让每一个动作都显得更有分量。', storyTitle: 'Pierrot 如何进入故事', storyBefore: '已经公开的开场让 Pierrot 闯入咖啡店员工原本平常的一天，并把他的依恋放到与 ', primary: 'harlequin', storyAfter: ' 日益升级的竞争旁边。于是浪漫变成了压力：主角面对的不只是两种性格，也是两种都可能滑向危险的关注。', storySecond: '当前原型版确立了这份张力，却没有假装已经给出答案。Pierrot 的计划结局仍属于后续开发内容。', theme: '沉默、爱意、嫉妒，以及关心开始让人感到不安全的那个瞬间。', connectionsBefore: '把 Pierrot 与 ', connections: ['harlequin', 'jester'], connectionsAfter: ' 放在一起阅读最清楚：前者构成核心竞争，后者则提醒玩家马戏团远比两人的对峙更大。' },
    harlequin: { portraitTitle: '被竞争磨出锋芒的魅力', portrait: 'Harlequin 是 Pierrot 难以预测的对照面：一个安静，一个张扬；一个用沉默施压，一个用魅力邀请你靠近。他让竞争持续升温，也让自己的真实意图始终难以看透。', storyTitle: '第二位追求者改变了故事形状', storyBefore: '理解 Harlequin 无法绕开 ', primary: 'pierrot', storyAfter: '。两人的对立让主角的选择同时带上情感与策略重量，因为任何一方的注意都可能改变另一方的反应。', storySecond: '当前版本中的部分登场会随分支变化。这证明故事存在分支，但不能据此声称某个结局已经完成。', theme: '表演、诱惑、竞争，以及轻松笑容背后藏着的风险。', connectionsBefore: 'Harlequin 最清晰的关系指向 ', connections: ['pierrot', 'ticket-taker'], connectionsAfter: '。把更大的角色群放回竞争周围，才能看见马戏团本身的轮廓。' },
    jester: { portraitTitle: '核心竞争之外的新存在', portrait: 'Jester 让当前角色群不再只围绕两位主要对手展开。原型版已经建立其登场与鲜明位置，但更大的作用仍然保持开放。', storyTitle: '这次登场为故事带来了什么', storyBefore: 'Jester 的出现让围绕 ', primary: 'pierrot', storyAfter: ' 的冲突更像一个大型群像，而不是封闭的三角关系。', storySecond: '这种叙事作用现在已经可见；独立完整路线或结局则尚未得到当前版本支持。阅读截图、同人推测或单句对白时，这一区别很重要。', theme: '误导、群像张力，以及每位表演者似乎都藏着更多秘密的怀疑。', connectionsBefore: '想理解 Jester 的登场，可以先对照 ', connections: ['pierrot', 'harlequin'], connectionsAfter: '。两人的既有竞争是观察新人物如何改变局面的最佳基线。' },
    'the-doctor': { portraitTitle: '舞台噩梦中的冰冷秩序', portrait: 'Doctor 为当前角色群带来更冷峻的气质。原型版已经包含其介绍，但完整动机、路线意义与结果仍超出公开版本能够确认的范围。', storyTitle: '不替空白编写答案', storyBefore: 'Doctor 进入的是一个已经被 ', primary: 'harlequin', storyAfter: ' 与 Pierrot 的竞争塑造的故事，但当前素材不足以把这次登场扩写成完整路线总结。', storySecond: '可靠的人物页可以说明玩家确实见到了什么、场景营造了怎样的氛围，同时把未经支持的路线名、结局与动机留在记录之外。', theme: '控制、不确定性，以及临床权威与马戏混乱之间的反差。', connectionsBefore: '更稳妥的阅读方式，是把 Doctor 与 ', connections: ['pierrot', 'harlequin'], connectionsAfter: ' 放在同一版本脉络中，再判断后续内容。' },
    'ticket-taker': { portraitTitle: '站在访客与参与者之间的门槛', portrait: 'Ticket Taker 在当前角色群中天然处于边界位置：与进入马戏团、观看规则和舞台秩序相连。原型版确认了这次介绍，却没有确认一条完整恋爱路线。', storyTitle: '配角式登场为什么仍然重要', storyBefore: 'Ticket Taker 让马戏团不只是背景，而成为包围 ', primary: 'pierrot', storyAfter: '、Harlequin 与主角的有组织空间。', storySecond: '维护记录还显示这段介绍得到过技术修复，包括浏览器动画卡死问题。这能证明场景确实存在，却不能证明角色已经拥有结局。', theme: '门槛、许可、观看，以及继续走进马戏团需要付出的代价。', connectionsBefore: '把 Ticket Taker 与 ', connections: ['pierrot', 'harlequin'], connectionsAfter: ' 放在一起阅读，可以看到更大的马戏团如何框住核心竞争，而不必假设每位表演者都是已完成的追求对象。' },
  },
};
