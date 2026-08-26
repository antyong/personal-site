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
    number: 'P.01',
    title: '秀峤村传统村落重点改善提升',
    location: '福建 · 尤溪',
    year: '2024—2025',
    scope: '项目主导 / 数据采集 / 方案设计 / 模型与图纸',
    image: '/images/project-village.jpg',
    className: 'project-wide',
  },
  {
    number: 'P.02',
    title: '广平村传统村落重点改善提升',
    location: '福建 · 大田',
    year: '2024—2025',
    scope: '项目主导 / 场所策略 / 效果图渲染 / 图纸绘制',
    image: '/images/project-heritage.jpg',
    className: 'project-tall',
  },
  {
    number: 'P.03',
    title: '坂头村重点改善提升',
    location: '福建 · 政和',
    year: '一期 / 二期',
    scope: '方案设计 / 模型制作 / 施工表达 / 文本编订',
    image: '/images/project-cultural.jpg',
    className: 'project-standard',
  },
]

const strengths = [
  {
    icon: DraftingCompass,
    number: '01',
    title: '全流程设计',
    en: 'END-TO-END DESIGN',
    text: '从文化调研、空间策划、概念方案到施工图深化和现场调整，保持设计逻辑在落地过程中的完整。',
  },
  {
    icon: Grid2X2,
    number: '02',
    title: '场所叙事',
    en: 'SPATIAL NARRATIVE',
    text: '围绕项目定位与客群需求组织动线、场景与触点，让空间回应在地文化并建立可感知的体验。',
  },
  {
    icon: Box,
    number: '03',
    title: '视觉表达',
    en: 'VISUALIZATION',
    text: '熟练使用 CAD、SU、PS、AI、Lumion、C4D 与 PR，将空间策略转译为清晰、精准的设计表达。',
  },
  {
    icon: ScanLine,
    number: '04',
    title: '数字研究',
    en: 'DIGITAL RESEARCH',
    text: '参与福建古建数字化测绘与分析，并开发基于 AI 的木质建筑构件识别检测程序，已进入应用阶段。',
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
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/project-village.jpg"
            aria-hidden="true"
          >
            <source src="/video/hero-architecture.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />

          <header className="site-header frame">
            <a className="brand" href="#top" aria-label="返回首页">AT<span>®</span></a>
            <nav aria-label="主要导航">
              <a href="#about"><span>关于</span></a>
              <a href="#projects"><span>项目</span></a>
              <a href="#strengths"><span>能力</span></a>
            </nav>
            <a className="contact-link" href="#contact">
              联系我 <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          </header>

          <div className="hero-copy frame">
            <p className="eyebrow"><span>空间设计师</span> / 青岛 · 福州</p>
            <h1><span>空间，</span><span>让场所发生。</span></h1>
            <div className="hero-bottom">
              <p>聚焦文旅空间、乡村振兴与历史文化场所，从在地研究与策略，到空间叙事与设计落地。</p>
              <a href="#about" className="scroll-cue" aria-label="向下浏览"><ArrowDownRight size={30} /></a>
            </div>
          </div>

          <div className="hero-index">PORTFOLIO / 2026</div>
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
                <p className="lead">安桐，空间与建筑设计师。</p>
                <p>拥有设计学与建筑学交叉背景，实践聚焦文旅空间、乡村振兴公共空间、历史文化街区及传统建筑保护。擅长从场所调研与文化线索出发，完成空间策划、场景设计、可视化表达与施工深化。</p>
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
            <SectionHeading index="02" label="SELECTED WORK" title={'精选项目 /\n在地空间实践'} />
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card ${project.className}`} key={project.number}>
                  <div className="project-image">
                    <img src={project.image} alt="建筑空间视觉占位图，后续替换为项目实景" />
                    <span className="placeholder-tag">VISUAL PLACEHOLDER / 待替换作品图</span>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div className="project-info">
                    <div><p>{project.location} / {project.year}</p><h3>{project.title}</h3></div>
                    <p className="project-scope">{project.scope}</p>
                    <ArrowUpRight className="project-arrow" size={36} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
            <div className="project-footnote">
              <span>＋ 另参与 8 个传统村落、文化名村及保护规划项目</span>
              <span>项目内容与图片将在下一阶段继续完善</span>
            </div>
          </div>
        </section>

        <section className="strengths section swiss-dots" id="strengths">
          <div className="section-frame">
            <SectionHeading index="03" label="CAPABILITIES" title={'把复杂问题，\n转译为清晰空间。'} />
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
            <SectionHeading index="04" label="CONTACT" title={'一起创造，\n值得发生的场所。'} light />
            <div className="contact-content">
              <p>开放空间设计、建筑与文旅项目合作，也期待与你交流关于场所、文化与体验的想法。</p>
              <a className="email-cta" href="mailto:1577288186@qq.com"><span>写邮件给我</span><Mail size={36} strokeWidth={1.7} /></a>
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
