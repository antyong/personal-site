import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  DraftingCompass,
  Grid2X2,
  Mail,
  MapPin,
  Phone,
  ScanLine,
} from 'lucide-react'

const stats = [
  { value: '11', unit: '+', label: '累计参与项目' },
  { value: '03', unit: '', label: '主导项目' },
  { value: '06', unit: '', label: '落地项目' },
  { value: '03', unit: '', label: '在施工项目' },
]

const experience = [
  {
    period: '2023.09—2026.05',
    place: '福建福大建筑规划设计研究院有限公司',
    role: '建筑设计师',
    detail: '文旅节点、乡村振兴公共空间、历史文化街区与建筑保护规划；负责从在地调研、方案策划到施工图深化与落地配合。',
  },
  {
    period: '2022.07—2023.07',
    place: '青岛市城市建设设计研究院有限公司',
    role: '建筑师助理',
    detail: '参与公共建筑方案、施工图绘制与汇报文本制作，承担规范校核及报建资料整理。',
  },
]

const education = [
  { period: '2023.09—2026.06', school: '福州大学', major: '建筑学 / 硕士研究生' },
  { period: '2018.09—2023.06', school: '济南大学', major: '设计学 / 本科' },
]

const projects = [
  {
    number: 'CASE 01',
    title: '秀峤村传统村落重点改善提升',
    location: '福建 · 尤溪',
    year: '2024—2025',
    summary: '以传统村落重点改善为工作对象，从现场数据采集进入设计，形成方案、空间模型、效果表达与图纸成果的一体化工作链。',
    role: '项目主导',
    focus: '传统村落 / 公共空间 / 在地更新',
    output: '调研 / 方案 / 模型 / 渲染 / 图纸',
    image: '/images/project-village.jpg',
    className: '',
  },
  {
    number: 'CASE 02',
    title: '广平村传统村落重点改善提升',
    location: '福建 · 大田',
    year: '2024—2025',
    summary: '围绕村落空间改善开展数据采集与方案工作，在整体场所关系、空间表达和技术图纸之间建立清晰衔接。',
    role: '项目主导',
    focus: '村落更新 / 场所策略 / 空间体验',
    output: '调研 / 方案 / 模型 / 渲染 / 图纸',
    image: '/images/project-heritage.jpg',
    className: 'case-reverse',
  },
  {
    number: 'CASE 03',
    title: '坂头村重点改善提升',
    location: '福建 · 政和',
    year: '一期 / 二期',
    summary: '参与分期推进的传统村落改善工作，以方案设计、模型制作、效果图与文本编订支持项目从概念走向实施表达。',
    role: '核心设计参与',
    focus: '分期更新 / 空间节点 / 文化场景',
    output: '方案 / 模型 / 渲染 / 图纸 / 文本',
    image: '/images/project-cultural.jpg',
    className: '',
  },
]

const projectArchive = [
  {
    number: '04',
    title: '建瓯市第四次全国文物普查',
    location: '福建 · 南平',
    type: '文化遗产调查',
    role: '项目负责人 / 培训 / 对接 / 数据采集',
  },
  {
    number: '05',
    title: '石兰自然村传统村落重点改善提升',
    location: '福建 · 福鼎',
    type: '传统村落更新',
    role: '项目主导 / 方案 / 模型 / 图纸 / 文本',
  },
  {
    number: '06',
    title: '马尾船政局保护修缮图则编订',
    location: '福建 · 福州',
    type: '历史建筑保护',
    role: '法规分析 / 图则 / 示意图 / 文本',
  },
  {
    number: '07',
    title: '山坊村保护发展规划与重点改善提升',
    location: '福建',
    type: '保护规划与更新',
    role: '数据采集 / 分析图 / 图纸 / 文本',
  },
  {
    number: '08',
    title: '长校村传统村落重点改善提升',
    location: '福建 · 清流',
    type: '传统村落更新',
    role: '数据采集 / 图纸 / 文本',
  },
  {
    number: '09',
    title: '岑兜村传统村落保护发展规划',
    location: '福建 · 南安',
    type: '保护发展规划 2024—2035',
    role: '规划文本 / 模型渲染 / 分析图',
  },
  {
    number: '10',
    title: '前洋村中国传统村落重点提升',
    location: '福建 · 古田',
    type: '传统村落更新',
    role: '方案 / 模型 / 渲染 / 图纸 / 文本',
  },
  {
    number: '11',
    title: '黄田村文农旅产业发展规划',
    location: '福建 · 平和',
    type: '文农旅规划 2023—2035',
    role: '规划文本 / 模型渲染 / 分析图',
  },
]

const methods = [
  { number: '01', en: 'READ', title: '读懂场所', text: '从环境、文化与使用者出发，识别真实问题。' },
  { number: '02', en: 'FRAME', title: '建立策略', text: '把复杂条件整理为空间目标与设计优先级。' },
  { number: '03', en: 'SHAPE', title: '塑造体验', text: '用动线、尺度、界面与节点组织空间叙事。' },
  { number: '04', en: 'DELIVER', title: '推动落地', text: '以模型、图纸与现场协同保持设计完整度。' },
]

const strengths = [
  {
    icon: ScanLine,
    number: '01',
    title: '在地研究力',
    en: 'CONTEXT RESEARCH',
    text: '不从形式预设出发，而是先阅读地形、聚落肌理、文化线索与真实使用需求，让设计建立在场所证据上。',
  },
  {
    icon: Grid2X2,
    number: '02',
    title: '空间策略力',
    en: 'SPATIAL STRATEGY',
    text: '把人群、运营、功能与场地限制转化为清晰的空间结构，建立从总体关系到关键节点的设计逻辑。',
  },
  {
    icon: Box,
    number: '03',
    title: '场景叙事力',
    en: 'EXPERIENCE DESIGN',
    text: '通过动线节奏、尺度变化、界面关系与主题节点，让空间承载记忆、行为和可被感知的在地故事。',
  },
  {
    icon: DraftingCompass,
    number: '04',
    title: '全流程落地力',
    en: 'DESIGN DELIVERY',
    text: '从概念、建模与效果表达延伸到施工图深化和现场调整，在技术条件中维护核心空间体验。',
  },
]

function SectionHeading({ index, label, title, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <p><span>{index}</span> / {label}</p>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#content">跳到主要内容</a>
      <main id="content">
        <section className="hero" id="top">
          <video className="hero-video" autoPlay muted loop playsInline poster="/images/project-village.jpg" aria-hidden="true">
            <source src="/video/hero-architecture.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />

          <header className="site-header frame">
            <a className="brand" href="#top" aria-label="返回首页">AT<span>®</span></a>
            <nav aria-label="主要导航">
              <a href="#about"><span>关于</span></a>
              <a href="#projects"><span>案例</span></a>
              <a href="#strengths"><span>能力</span></a>
            </nav>
            <a className="contact-link" href="#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
          </header>

          <div className="hero-copy frame">
            <p className="eyebrow"><span>SELECTED SPATIAL WORKS</span> / 2022—2026</p>
            <h1><span>以空间，</span><span>回应场所。</span></h1>
            <div className="hero-bottom hero-bottom-cases">
              <p>我从在地文化与真实使用出发，把复杂问题转译为空间策略、体验场景与可落地的设计成果。</p>
              <div className="hero-case-count" aria-label="案例概览">
                <strong>11</strong><span>PROJECT INDEX<br />03 FEATURED CASES</span>
              </div>
              <a href="#projects" className="scroll-cue" aria-label="查看精选案例"><ArrowDownRight size={30} /></a>
            </div>
          </div>

          <div className="hero-index">CASE-LED PORTFOLIO / 2026</div>
          <div className="media-note">VIDEO PLACEHOLDER / REPLACEABLE</div>
        </section>

        <section className="about section" id="about">
          <div className="section-frame">
            <SectionHeading index="01" label="PROFILE" title={'以研究建立秩序，\n以空间承载故事。'} />
            <div className="about-grid">
              <figure className="portrait-block">
                <img src="/images/an-tong-profile.jpg" alt="空间设计师安桐" />
                <figcaption><span>AN TONG</span><span>SPATIAL DESIGNER</span></figcaption>
              </figure>

              <div className="bio-block">
                <p className="lead">我关注空间如何回应真实生活，而不止于形式。</p>
                <p>安桐，空间与建筑设计师。拥有设计学与建筑学交叉背景，实践聚焦文旅空间、乡村振兴公共空间、历史文化街区及传统建筑保护。习惯从场所调研和文化线索中找到设计支点，再通过空间结构、场景节点与技术表达推动方案落地。</p>
                <div className="bio-meta">
                  <a href="mailto:1577288186@qq.com"><Mail size={18} /> 1577288186@qq.com</a>
                  <a href="tel:+8615653209989"><Phone size={18} /> +86 156 5320 9989</a>
                  <span><MapPin size={18} /> 山东青岛 / 福建福州</span>
                </div>
              </div>

              <div className="stats-grid" aria-label="项目数据">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <div><strong>{stat.value}</strong><sup>{stat.unit}</sup></div>
                    <p>{stat.label}</p>
                    <span className="stat-cross" aria-hidden="true">+</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="design-positioning" aria-label="空间设计能力定位">
              <p>SPATIAL DESIGN POSITIONING</p>
              <h3>我不把空间当作孤立的形式，而是把文化、行为、运营与建造条件组织成一个可被使用、感知和持续发生的场所系统。</h3>
              <div className="positioning-points">
                <span>01 / 发现空间价值</span>
                <span>02 / 建立体验秩序</span>
                <span>03 / 推动设计落地</span>
              </div>
            </div>

            <div className="resume-grid">
              <div className="resume-column">
                <p className="column-label">工作经历 / EXPERIENCE</p>
                {experience.map((item) => (
                  <article className="timeline-row" key={item.period}>
                    <time>{item.period}</time>
                    <div><h3>{item.place}</h3><p className="role">{item.role}</p><p>{item.detail}</p></div>
                  </article>
                ))}
              </div>
              <div className="resume-column education-column">
                <p className="column-label">教育背景 / EDUCATION</p>
                {education.map((item) => (
                  <article className="education-row" key={item.period}>
                    <time>{item.period}</time>
                    <div><h3>{item.school}</h3><p>{item.major}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-frame">
            <SectionHeading index="02" label="SELECTED CASES" title={'案例优先 /\n用过程证明能力'} light />

            <div className="case-manifesto">
              <p>CASE STUDY SYSTEM</p>
              <h3>案例不是结果图的堆叠，而是一条从问题识别、策略建立到空间落地的证据链。</h3>
              <div className="method-grid">
                {methods.map((method) => (
                  <div className="method-item" key={method.number}>
                    <div><span>{method.number}</span><small>{method.en}</small></div>
                    <h4>{method.title}</h4>
                    <p>{method.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-list">
              {projects.map((project) => (
                <article className={`case-card ${project.className}`} key={project.number}>
                  <div className="case-visual">
                    <img src={project.image} alt="建筑空间视觉占位图，后续替换为项目实景" />
                    <span className="placeholder-tag">VISUAL PLACEHOLDER / 待替换作品图</span>
                    <span className="case-number">{project.number}</span>
                  </div>

                  <div className="case-copy">
                    <div className="case-kicker"><span>{project.location}</span><span>{project.year}</span></div>
                    <h3>{project.title}</h3>
                    <p className="case-summary">{project.summary}</p>
                    <div className="case-facts">
                      <div><span>MY ROLE</span><p>{project.role}</p></div>
                      <div><span>DESIGN FOCUS</span><p>{project.focus}</p></div>
                      <div><span>OUTPUT</span><p>{project.output}</p></div>
                    </div>
                    <div className="case-ready">
                      <span>CASE CONTENT READY</span>
                      <p>已预设总览、过程、图纸与成果位置，待接入你的真实作品。</p>
                      <ArrowUpRight size={26} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-archive">
              <div className="archive-heading">
                <div>
                  <span>PROJECT ARCHIVE / 04—11</span>
                  <h3>更多项目，已经为后续作品材料预留完整展示入口。</h3>
                </div>
                <p>当前先以项目档案呈现。收到你的图片、图纸与说明后，可逐项升级为与上方一致的完整案例。</p>
              </div>

              <div className="archive-grid">
                {projectArchive.map((project) => (
                  <article className="archive-card" key={project.number}>
                    <div className="archive-number">{project.number}</div>
                    <div className="archive-meta"><span>{project.location}</span><span>{project.type}</span></div>
                    <h4>{project.title}</h4>
                    <p>{project.role}</p>
                    <div className="archive-status">
                      <span>CASE SLOT / 待接入作品</span>
                      <ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="case-upload-note">
              <div><span>NEXT / 下一步</span><h3>11 个项目框架，等待你的真实作品进入。</h3></div>
              <p>后续你可以提供项目照片、效果图、分析图、平面图、草图和项目说明。我会按“背景—问题—策略—过程—成果”的结构，为每个案例建立视觉节奏与叙事重点，让作品不只是被看见，也能清楚证明你的空间判断与落地能力。</p>
            </div>
          </div>
        </section>

        <section className="strengths section swiss-dots" id="strengths">
          <div className="section-frame">
            <SectionHeading index="03" label="DESIGN CAPABILITIES" title={'不止会画空间，\n更能定义问题。'} />

            <div className="capability-statement">
              <p>我的空间设计能力建立在一条完整路径上：</p>
              <h3>看见场所中尚未被表达的价值，建立清晰策略，再让它转化为可感知、可实施的空间体验。</h3>
            </div>

            <div className="strength-grid">
              {strengths.map(({ icon: Icon, ...item }) => (
                <article className="strength-card" key={item.number}>
                  <div className="strength-top"><span>{item.number}</span><Icon size={34} strokeWidth={1.7} aria-hidden="true" /></div>
                  <div><p>{item.en}</p><h3>{item.title}</h3></div>
                  <p className="strength-text">{item.text}</p>
                  <span className="strength-plus" aria-hidden="true">+</span>
                </article>
              ))}
            </div>
            <div className="tool-strip" aria-label="设计工具">
              <span>CAD</span><span>SKETCHUP</span><span>PHOTOSHOP</span><span>ILLUSTRATOR</span><span>LUMION</span><span>C4D</span><span>PYTHON</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-inner section-frame">
            <SectionHeading index="04" label="CONTACT" title={'让下一个案例，\n从真实问题开始。'} light />
            <div className="contact-content">
              <p>如果你正在寻找能够理解场所、组织体验并推动落地的空间设计合作，欢迎联系我。</p>
              <a className="email-cta" href="mailto:1577288186@qq.com"><span>聊聊你的项目</span><Mail size={36} strokeWidth={1.7} /></a>
            </div>
            <div className="contact-footer">
              <div><span>EMAIL</span><a href="mailto:1577288186@qq.com">1577288186@qq.com</a></div>
              <div><span>PHONE</span><a href="tel:+8615653209989">+86 156 5320 9989</a></div>
              <div><span>BASED IN</span><p>QINGDAO / FUZHOU</p></div>
              <a className="back-top" href="#top">回到顶部 <ArrowUpRight size={20} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
