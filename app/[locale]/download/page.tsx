import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale, OFFICIAL_GAME_URL } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? 'The Freak Circus 下载指南（非官方）' : 'Unofficial The Freak Circus Download Guide', description: zh ? '说明如何通过创作者的 itch.io 页面获取 The Freak Circus，以及当前列出的浏览器版和各平台下载包。' : 'Learn how to get The Freak Circus from the creator’s itch.io page and what browser and platform builds are currently listed.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/download` });
}

export default function DownloadPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const p = locale === 'en' ? '' : `/${locale}`;
  const c = zh ? zhCopy : enCopy;

  return (
    <main>
      <header className="page-hero download-hero">
        <div className="page-container download-hero-content">
          <h1>The Freak Circus Download</h1>
          <p className="page-hero-lead">{c.lead}</p>
        </div>
      </header>

      <section className="page-section page-container content-split">
        <div className="content-stack">
          <article className="reference-card">
            <h2>{c.chooseTitle}</h2>
            <p>{c.chooseIntro}</p>
            <div className="download-option-grid">
              {c.options.map((option) => (
                <div className="download-option" key={option.name}>
                  <span>{option.label}</span><h3>{option.name}</h3><p>{option.text}</p><small>{option.note}</small>
                </div>
              ))}
            </div>
            <a className="button-primary download-primary-link" href={OFFICIAL_GAME_URL} target="_blank" rel="noopener noreferrer">{c.cta} ↗</a>
            <p className="file-list-note">{c.ctaNote}</p>
          </article>

          <article className="reference-card">
            <h2>{c.safeTitle}</h2>
            <p>{c.safeText}</p>
            <p>{c.noMirror}</p>
            <ol className="numbered-checklist">{c.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </article>

          <article className="reference-card">
            <h2>{c.installTitle}</h2>
            <div className="install-guide-list">
              {c.install.map((item) => <div key={item.platform}><h3>{item.platform}</h3><p>{item.text}</p></div>)}
            </div>
          </article>

          <article className="reference-card">
            <h2>{c.saveTitle}</h2>
            <p>{c.saveText}</p>
            <div className="signal-grid">
              {c.saveTips.map((tip, index) => <div key={tip.title}><span>0{index + 1}</span><h3>{tip.title}</h3><p>{tip.text}</p></div>)}
            </div>
          </article>

          <article className="reference-card">
            <h2>{c.troubleTitle}</h2>
            <div className="faq-grid">
              {c.troubleshooting.map((item) => <div className="faq-item" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
            </div>
          </article>
        </div>

        <aside className="content-stack download-sidebar">
          <div className="reference-card">
            <p className="section-kicker">{c.snapshot}</p>
            <table className="fact-table"><tbody>
              <tr><th>{c.version}</th><td>0.2</td></tr>
              <tr><th>{c.status}</th><td>Prototype</td></tr>
              <tr><th>{c.priceLabel}</th><td>{c.price}</td></tr>
              <tr><th>{c.rating}</th><td>18+</td></tr>
              <tr><th>{c.session}</th><td>{c.sessionValue}</td></tr>
              <tr><th>{c.languages}</th><td>English · Português (Brasil) · 中文</td></tr>
            </tbody></table>
          </div>
          <div className="reference-card">
            <h2>{c.filesTitle}</h2>
            <div className="file-list">
              <div><span>Android · APK</span><strong>423 MB</strong></div>
              <div><span>Windows · ZIP</span><strong>412 MB</strong></div>
              <div><span>Linux · TAR.BZ2</span><strong>387 MB</strong></div>
              <div><span>macOS · ZIP</span><strong>408 MB</strong></div>
            </div>
            <p className="file-list-note">{c.fileNote}</p>
          </div>
          <div className="reference-card">
            <h2>{c.related}</h2>
            <div className="blog-related-list">
              <Link href={`${p}/blog/browser-or-download`}><span>{c.fullGuide}</span><small>→</small></Link>
              <Link href={`${p}/wiki`}><span>The Freak Circus Wiki</span><small>→</small></Link>
              <Link href={`${p}/characters/pierrot`}><span>Pierrot</span><small>→</small></Link>
              <Link href={`${p}/characters/harlequin`}><span>Harlequin</span><small>→</small></Link>
              <Link href={`${p}/day-3`}><span>Day 3</span><small>→</small></Link>
              <Link href={`${p}/updates`}><span>{c.updates}</span><small>→</small></Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

const enCopy = {
  lead: 'An independent guide to the versions listed on Garula’s itch.io page. This fan site does not host or distribute the game files.',
  cta: 'Download The Freak Circus Now', ctaNote: 'The button opens Garula’s itch.io page in a new tab.', updates: 'Updates',
  chooseTitle: 'Download options on itch.io', chooseIntro: 'The creator’s itch.io page currently provides a browser version and separate packages for Windows, macOS, Linux, and Android. Availability, version numbers, and file sizes can change when Garula publishes a new build.',
  options: [
    { label: 'PLAY ONLINE', name: 'Browser / HTML5', text: 'Runs from the itch.io page without downloading a package.', note: 'Uses browser storage for saves' },
    { label: 'DOWNLOAD', name: 'Windows', text: 'A ZIP package for Windows computers.', note: 'Extract the archive before playing' },
    { label: 'DOWNLOAD', name: 'macOS', text: 'A ZIP package for compatible Mac computers.', note: 'Local macOS build' },
    { label: 'DOWNLOAD', name: 'Linux', text: 'A TAR.BZ2 package for Linux systems.', note: 'Local Linux build' },
    { label: 'DOWNLOAD', name: 'Android', text: 'An APK package for compatible Android devices.', note: 'Android may request install permission' },
  ],
  safeTitle: 'Before downloading', safeText: 'Downloads are supplied by Garula through itch.io. This independent fan guide only explains the available choices and links to that platform.',
  noMirror: 'Do not use a page that adds its own launcher, password, “speed download,” or unrelated browser extension.',
  steps: ['Open Garula’s itch.io page using the button above.', 'Choose Run game or Download Now.', 'Check the publisher and current version shown on itch.io.', 'Select the package for your operating system.', 'Back up an older local save before replacing a build.'],
  installTitle: 'Setup notes by platform', install: [
    { platform: 'Browser', text: 'Let the game load completely and avoid clearing site data if you rely on browser saves.' },
    { platform: 'Windows & Linux', text: 'Extract the entire archive into its own folder. Do not run the executable from inside the compressed file.' },
    { platform: 'macOS', text: 'Extract the ZIP, keep the app in a writable location, and use only the operating system’s normal security prompts.' },
    { platform: 'Android', text: 'Download the APK directly from the verified listing. Android may ask you to allow installs from that browser for this file.' },
  ],
  saveTitle: 'Protect your progress before an update', saveText: 'A prototype can change its script, labels, and save behavior between builds. A few small habits make updates much less stressful.',
  saveTips: [
    { title: 'Label', text: 'Name important slots by scene and build number.' },
    { title: 'Separate', text: 'Keep first-playthrough and experiment saves apart.' },
    { title: 'Back up', text: 'Copy local saves before deleting or replacing a build.' },
  ],
  troubleTitle: 'Quick troubleshooting', troubleshooting: [
    { q: 'The browser build stays black', a: 'Wait for the first load, use a current browser, and retry without aggressive translation or script-blocking on the game tab.' },
    { q: 'The desktop game will not start', a: 'Confirm the correct platform package and extract every file before opening the executable.' },
    { q: 'My save disappeared', a: 'Check whether you switched from browser to desktop or cleared site data. Those environments do not necessarily share saves.' },
    { q: 'A download page looks different', a: 'Stop if the publisher, domain, version, or file type does not match the verified listing.' },
  ],
  snapshot: 'CURRENT LISTING', version: 'VERSION', status: 'STATUS', priceLabel: 'PRICE', price: 'Name your own price', rating: 'RATING', session: 'SESSION', sessionValue: 'About half an hour', languages: 'LANGUAGES',
  filesTitle: 'Version 0.2 files', fileNote: 'Sizes were checked on 2026-08-15 and can change when a new build is uploaded.', related: 'Related pages', fullGuide: 'Browser vs. download article',
};

const zhCopy: typeof enCopy = {
  lead: '介绍 Garula 在 itch.io 页面列出的游戏版本。本站是独立粉丝指南，不托管或分发游戏文件。',
  cta: 'Download The Freak Circus Now', ctaNote: '按钮将在新标签页打开 Garula 的 itch.io 页面。', updates: '更新',
  chooseTitle: 'itch.io 提供的版本', chooseIntro: '创作者的 itch.io 页面目前提供浏览器版本，以及 Windows、macOS、Linux 和 Android 下载包。Garula 发布新版本后，可用平台、版本号和文件大小可能变化。',
  options: [
    { label: '在线游玩', name: '浏览器 / HTML5', text: '直接在 itch.io 页面运行，不需要下载本地包。', note: '存档使用浏览器站点数据' },
    { label: '下载', name: 'Windows', text: '适用于 Windows 电脑的 ZIP 下载包。', note: '游玩前先完整解压' },
    { label: '下载', name: 'macOS', text: '适用于兼容 Mac 电脑的 ZIP 下载包。', note: 'macOS 本地版本' },
    { label: '下载', name: 'Linux', text: '适用于 Linux 系统的 TAR.BZ2 下载包。', note: 'Linux 本地版本' },
    { label: '下载', name: 'Android', text: '适用于兼容 Android 设备的 APK 下载包。', note: '系统可能要求安装权限' },
  ],
  safeTitle: '下载前说明', safeText: '游戏文件由 Garula 通过 itch.io 提供。这个独立粉丝页面只解释可选版本并链接到该平台。',
  noMirror: '遇到要求安装额外启动器、输入解压密码、使用“高速下载”或安装无关浏览器扩展的页面，请停止。',
  steps: ['使用上方按钮打开 Garula 的 itch.io 页面。', '选择 Run game 或 Download Now。', '核对 itch.io 页面显示的发布者和当前版本。', '选择与操作系统匹配的下载包。', '替换旧版本前备份已有本地存档。'],
  installTitle: '各平台设置说明', install: [
    { platform: '浏览器', text: '等待游戏完整加载；如果依赖浏览器存档，请不要清除该站点的数据。' },
    { platform: 'Windows 与 Linux', text: '把整个压缩包解压到独立文件夹，不要直接从压缩包内部运行程序。' },
    { platform: 'macOS', text: '解压 ZIP，把应用放在可写位置，并且只使用操作系统正常提供的安全提示。' },
    { platform: 'Android', text: '从已核验页面直接下载 APK；Android 可能会询问是否允许当前浏览器安装这个文件。' },
  ],
  saveTitle: '更新前保护游玩进度', saveText: '原型版在不同构建之间可能调整剧本、标签和存档行为，几个简单习惯能显著降低更新压力。',
  saveTips: [
    { title: '标记', text: '用场景名称和版本号命名重要存档。' },
    { title: '分开', text: '把第一次游玩与测试选择的存档分开。' },
    { title: '备份', text: '删除或替换本地版本前复制存档。' },
  ],
  troubleTitle: '快速排查', troubleshooting: [
    { q: '浏览器版一直黑屏', a: '等待首次加载完成，使用当前版本浏览器，并尝试关闭游戏标签页上的强制翻译或脚本拦截。' },
    { q: '桌面版无法启动', a: '确认下载了正确平台的包，并在启动前完整解压所有文件。' },
    { q: '存档不见了', a: '检查自己是否从浏览器切换到桌面端，或清除了站点数据；不同环境不一定共用存档。' },
    { q: '下载页面看起来不一样', a: '如果发布者、域名、版本或文件类型与核验信息不一致，请停止下载。' },
  ],
  snapshot: '当前版本', version: '版本', status: '状态', priceLabel: '价格', price: '自由定价', rating: '年龄', session: '时长', sessionValue: '约半小时', languages: '语言',
  filesTitle: '0.2 版本文件', fileNote: '文件大小核验于 2026-08-15，新版本上传后可能变化。', related: '相关页面', fullGuide: '浏览器版与下载版比较',
};
