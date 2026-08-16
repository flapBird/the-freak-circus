import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({
    title: zh ? 'The Freak Circus Day 3 状态与下一章指南' : 'The Freak Circus Day 3 Status & Next Chapter Guide',
    description: zh ? '了解 The Freak Circus Day 3 当前状态、已确认范围、传言辨别与更新前的准备事项。' : 'Understand the current Day 3 status, what is confirmed, how to assess rumors, and how to prepare for the next build.',
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/day-3`,
  });
}

export default function DayThreePage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  const c = zh ? copyZh : copyEn;
  return (
    <main>
      <header className="page-hero day3-hero">
        <div className="page-container">
          <h1>The Freak Circus Day 3</h1>
          <p className="page-hero-lead">{c.lead}</p>
          <div className="page-hero-actions">
            <Link className="button-primary" href={`${p}/updates`}>{c.tracker}</Link>
            <Link className="button-secondary" href={`${p}/wiki`}>{c.wiki}</Link>
          </div>
        </div>
      </header>

      <section className="page-section page-container content-split">
        <div className="content-stack">
          <article className="day3-editorial">
            <p className="section-kicker">{zh ? '从当前版本到下一章' : 'FROM THE CURRENT BUILD TO THE NEXT DAY'}</p>
            <h2>{zh ? 'Day 3 不是已经发布的隐藏章节' : 'Day 3 is a continuation, not a hidden finished chapter'}</h2>
            <p>{zh ? <>玩家所说的 Day 3，指的是 0.2 原型版之后的下一段故事。当前可玩的版本已经让主角遇见 <Link className="character-inline-link is-pierrot" href={`${p}/characters/pierrot`}>Pierrot</Link>，并把他与 <Link className="character-inline-link is-harlequin" href={`${p}/characters/harlequin`}>Harlequin</Link> 的竞争推到舞台中央；五位人物介绍与一个坏结局已经存在，但更完整的剧本与结局仍在制作中。</> : <>Players use “Day 3” for the story continuation after version 0.2. The playable prototype has already brought the protagonist into contact with <Link className="character-inline-link is-pierrot" href={`${p}/characters/pierrot`}>Pierrot</Link> and placed his rivalry with <Link className="character-inline-link is-harlequin" href={`${p}/characters/harlequin`}>Harlequin</Link> at the center. Five character introductions and one bad ending exist, while the broader script and endings remain in development.</>}</p>
            <h3>{zh ? '已经完成的工作不等于发布日期' : 'Development progress is not a release date'}</h3>
            <p>{zh ? <>写作、美术、场景编程与测试都是真实进度，但只有新的公开版本出现，玩家才真正拥有可游玩的下一章。可以通过站内 <Link href={`${p}/updates`}>Updates 时间线</Link>核对里程碑；如果消息只有截图、转述或倒计时，却没有对应的公开版本，就不应把它当成发布日期。</> : <>Writing, art, scene programming, and testing are meaningful progress, but players only have a new chapter when a new public build exists. Use the on-site <Link href={`${p}/updates`}>Updates timeline</Link> to place milestones in order. A screenshot, paraphrase, or countdown without a corresponding public build is not a release date.</>}</p>
            <h3>{zh ? '下一章最可能改变什么' : 'What a continuation can change'}</h3>
            <p>{zh ? <>新的故事日意味着更多对白、分支场景与角色关系可能被整合进游戏，但不能预设所有计划结局会一次完成。想区分“当前已玩到的内容”和“开发计划”，可以先看 <Link href={`${p}/wiki`}>Wiki 的版本说明</Link>；准备游玩时，则在 <Link href={`${p}/download`}>Download 页面</Link>确认平台与存档注意事项。</> : <>A new in-game day can integrate more dialogue, branch scenes, and character relationships, but it should not be read as a promise that every planned ending will arrive together. The <Link href={`${p}/wiki`}>Wiki build notes</Link> separate playable material from plans, while the <Link href={`${p}/download`}>Download page</Link> explains platforms and save precautions before a future build.</>}</p>
          </article>

          <article className="reference-card status-answer-card">
            <p className="section-kicker">{c.answerKicker}</p>
            <h2>{c.answerTitle}</h2>
            <p>{c.answer}</p>
            <p>{c.answer2}</p>
          </article>

          <article className="reference-card">
            <h2>{c.confirmedTitle}</h2>
            <ul>{c.confirmed.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>

          <article className="reference-card">
            <h2>{c.meaningTitle}</h2>
            <p>{c.meaningIntro}</p>
            <div className="day3-compare-grid">
              <div><span>{c.isLabel}</span><h3>{c.isTitle}</h3><p>{c.isText}</p></div>
              <div><span>{c.isNotLabel}</span><h3>{c.isNotTitle}</h3><p>{c.isNotText}</p></div>
            </div>
          </article>

          <article className="reference-card">
            <h2>{c.signalsTitle}</h2>
            <p>{c.signalsText}</p>
            <div className="signal-grid">
              {c.signals.map((signal, index) => <div key={signal.title}><span>0{index + 1}</span><h3>{signal.title}</h3><p>{signal.text}</p></div>)}
            </div>
          </article>

          <article className="reference-card">
            <h2>{c.prepareTitle}</h2>
            <ol className="numbered-checklist">
              {c.prepare.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>

          <article className="reference-card">
            <h2>{c.faqTitle}</h2>
            <div className="faq-grid">
              {c.faq.map((item) => <div className="faq-item" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
            </div>
          </article>
        </div>

        <aside className="content-stack day3-sidebar">
          <div className="reference-card">
            <p className="section-kicker">{c.snapshot}</p>
            <table className="fact-table"><tbody>
              <tr><th>DAY 3</th><td>{c.notReleased}</td></tr>
              <tr><th>{c.dateLabel}</th><td>{c.noDate}</td></tr>
              <tr><th>{c.currentLabel}</th><td>0.2 · Prototype</td></tr>
              <tr><th>{c.reviewedLabel}</th><td>2026-08-15</td></tr>
            </tbody></table>
          </div>
          <div className="reference-card">
            <h2>{c.ruleTitle}</h2>
            <p>{c.ruleText}</p>
          </div>
          <div className="reference-card">
            <h2>{c.nextTitle}</h2>
            <div className="blog-related-list">
              <Link href={`${p}/updates`}><span>{c.tracker}</span><small>→</small></Link>
              <Link href={`${p}/blog/day-3-rumor-checklist`}><span>{c.rumorArticle}</span><small>→</small></Link>
              <Link href={`${p}/download`}><span>{c.download}</span><small>→</small></Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

const copyEn = {
  lead: 'A practical status hub for the next in-game day: what exists now, what remains uncertain, and how to prepare without turning development notes into promises.',
  tracker: 'Read the update timeline', wiki: 'Open the Wiki', answerKicker: 'THE ANSWER IN ONE LINE',
  answerTitle: 'Day 3 is in development and has no published release date',
  answer: 'Version 0.2 remains the current public prototype. It contains the established opening, five character introductions, and one bad ending; the next in-game day is not yet part of a finished public release.',
  answer2: 'Development can move through writing, programming, artwork, and testing without producing a reliable launch date. This page will not convert those milestones into a countdown.',
  confirmedTitle: 'What the current build confirms',
  confirmed: ['Version 0.2 is the current public build.', 'All five character introductions are described as complete.', 'One bad ending is available in the prototype.', 'Pierrot, Harlequin, protagonist, and shared conclusions are planned rather than complete.', 'The story is intended to continue for another in-game day.'],
  meaningTitle: 'What “Day 3” means here', meaningIntro: 'Players use the phrase as shorthand for the next continuation. The label is helpful, but it can blur the line between a work-in-progress scene and a released chapter.',
  isLabel: 'USEFUL MEANING', isTitle: 'The next story continuation', isText: 'New dialogue, scenes, art, and branching work that extends the current prototype.',
  isNotLabel: 'DO NOT ASSUME', isNotTitle: 'A finished route pack', isNotText: 'It is not evidence that every romance route or planned ending will arrive at the same time.',
  signalsTitle: 'How to read development signals', signalsText: 'Progress is real, but each signal answers a different question. Use this three-part check before repeating a claim.',
  signals: [
    { title: 'Creation', text: 'Writing, sprites, backgrounds, and dialogue programming show that new material is being made.' },
    { title: 'Integration', text: 'Scene implementation and route testing show that separate assets are becoming a playable sequence.' },
    { title: 'Release', text: 'Only a dated public build turns development work into something players can download or run.' },
  ],
  prepareTitle: 'Prepare your current playthrough', prepare: ['Keep one untouched save from your first playthrough.', 'Name experimental saves by scene and version.', 'Record whether you played in a browser or a downloaded build.', 'Read the next build notes before reusing an old choice guide.'],
  faqTitle: 'Day 3 questions', faq: [
    { q: 'Is there a confirmed date?', a: 'No. An exact date or countdown should be treated as speculation until a public release is announced.' },
    { q: 'Is the current story complete?', a: 'No. The public build is a prototype and says the rest of the script and endings are still being developed.' },
    { q: 'Will every character get an ending?', a: 'The current plan names Pierrot, Harlequin, protagonist, and shared endings. Other route claims are not confirmed here.' },
    { q: 'Will old saves work?', a: 'That cannot be guaranteed before a new build ships. Back up local saves and keep your current version noted.' },
  ],
  snapshot: 'STATUS SNAPSHOT', notReleased: 'In development', dateLabel: 'DATE', noDate: 'Not announced', currentLabel: 'CURRENT', reviewedLabel: 'REVIEWED',
  ruleTitle: 'The simple verification rule', ruleText: 'A progress post describes work. A release notice names a playable build. Do not treat them as the same thing.',
  nextTitle: 'Continue on this site', rumorArticle: 'Release-rumor checklist', download: 'Download guide',
};

const copyZh: typeof copyEn = {
  lead: '围绕下一个游戏日整理的实用状态页：现在有什么、哪些仍不确定，以及如何在不把开发记录当成承诺的前提下做好准备。',
  tracker: '查看站内更新记录', wiki: '打开 Wiki', answerKicker: '一句话结论',
  answerTitle: 'Day 3 正在开发，但目前没有发布日期',
  answer: '0.2 仍是当前公开原型版，包含已经建立的开场、五位角色介绍和一个坏结局；下一个游戏日尚未成为完整公开版本的一部分。',
  answer2: '开发会经历写作、编程、美术和测试等阶段，但这些里程碑无法自动推导出可靠日期。本站不会把它们改写成倒计时。',
  confirmedTitle: '当前版本能够确认什么',
  confirmed: ['0.2 是当前公开版本。', '五位角色介绍已经完成。', '原型版包含一个坏结局。', 'Pierrot、Harlequin、主角与共同结局属于计划内容，并非已完成。', '故事计划继续推进一个游戏日。'],
  meaningTitle: '这里所说的“Day 3”是什么', meaningIntro: '玩家常用这个词指代下一段剧情，但方便的简称也容易把制作中的场景与已发布章节混在一起。',
  isLabel: '合理理解', isTitle: '下一段剧情延续', isText: '通过新对白、场景、美术与分支工作，把当前原型版继续向前推进。',
  isNotLabel: '不要预设', isNotTitle: '一次完成所有路线', isNotText: '它不能证明每条恋爱路线或所有计划结局会在同一版本中上线。',
  signalsTitle: '怎样理解开发信号', signalsText: '进度是真实的，但不同信号回答的问题不同。传播消息前，可以按下面三层判断。',
  signals: [
    { title: '创作', text: '剧本、立绘、背景和对白编程说明新内容正在被制作。' },
    { title: '整合', text: '场景实现与路线测试说明独立素材正在变成可游玩的流程。' },
    { title: '发布', text: '只有带日期的公开版本，才意味着玩家真正可以下载或运行。' },
  ],
  prepareTitle: '为当前存档做好准备', prepare: ['保留一个未改动的首次游玩存档。', '用场景名和版本号命名测试存档。', '记录自己使用的是浏览器版还是下载版。', '新版本上线后先看变更说明，再使用旧选项指南。'],
  faqTitle: 'Day 3 常见问题', faq: [
    { q: '有确认日期吗？', a: '没有。在公开发布被确认前，具体日期或倒计时都应视为推测。' },
    { q: '当前故事已经完整了吗？', a: '没有。公开版本仍是原型版，其余剧本与结局仍在开发。' },
    { q: '每个角色都会有结局吗？', a: '当前计划点名 Pierrot、Harlequin、主角与共同结局；本站不确认其它路线说法。' },
    { q: '旧存档一定兼容吗？', a: '新版本发布前无法保证。请备份本地存档，并记录当前版本。' },
  ],
  snapshot: '状态速览', notReleased: '正在开发', dateLabel: '日期', noDate: '尚未公布', currentLabel: '当前版本', reviewedLabel: '核验日期',
  ruleTitle: '最简单的判断规则', ruleText: '进度记录描述正在做什么；发布通知会给出可玩的版本。不要把两者当作同一件事。',
  nextTitle: '继续浏览站内内容', rumorArticle: '发布日期传言核对清单', download: '下载指南',
};
