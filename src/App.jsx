import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Box,
  DraftingCompass,
  Grid2X2,
  Mail,
  MapPin,
  Phone,
  ScanLine,
} from 'lucide-react'
import { useEffect } from 'react'

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
    title: '广平村孝文化长廊',
    location: '福建 · 大田',
    year: '2024—2025',
    summary: '以孝文化为叙事线索，将村落路径、公共停留与文化展示组织成连续长廊；以木构、灰瓦与院落尺度回应原有村落肌理，并通过节点深化推动方案落地。',
    role: '项目主导',
    focus: '文化叙事 / 廊道空间 / 在地更新',
    output: '调研 / 方案 / 模型 / 渲染 / 图纸',
    image: '/images/guangping/concept-render.jpg',
    gallery: [
      { src: '/images/guangping/concept-render.jpg', label: '效果图 / CONCEPT', alt: '广平村孝文化长廊设计效果图' },
      { src: '/images/guangping/built-entrance.jpg', label: '建成实景 / BUILT', alt: '广平村孝文化长廊建成入口' },
      { src: '/images/guangping/built-corridor-portrait.jpg', label: '廊道空间 / CORRIDOR', alt: '广平村孝文化长廊内部空间' },
      { src: '/images/guangping/built-aerial.jpg', label: '建成航拍 / AERIAL', alt: '广平村孝文化长廊建成航拍' },
    ],
    href: '?case=guangping',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 02',
    title: '坂头村文旅商业活化设计',
    location: '福建 · 政和',
    year: '一期 / 二期',
    summary: '以古村活化与文旅融合为核心，将古建保护、风貌整治、餐饮咖啡、民宿集群和滨水游线统筹为一套可运营的乡村文旅空间系统。',
    role: '核心设计参与',
    focus: '文旅策划 / 商业植入 / 古村活化',
    output: '方案 / 模型 / 渲染 / 图纸 / 文本',
    image: '/images/bantou/river-elevation.jpg',
    gallery: [
      { src: '/images/bantou/river-elevation.jpg', label: '沿河界面 / RIVERFRONT', alt: '坂头村文旅商业空间整体沿河立面' },
      { src: '/images/bantou/dining-01.jpg', label: '餐饮空间 / DINING', alt: '坂头村乡土餐饮空间实景' },
      { src: '/images/bantou/coffee-03.jpg', label: '咖啡空间 / COFFEE', alt: '坂头村咖啡空间设计效果' },
      { src: '/images/bantou/homestay-03.jpg', label: '民宿集群 / HOMESTAY', alt: '坂头村文旅民宿群木构空间' },
    ],
    href: '?case=bantou',
    ready: true,
    className: 'case-reverse',
  },
  {
    number: 'CASE 03',
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

const guangpingBuilt = [
  { src: '/images/guangping/built-aerial.jpg', label: '01 / 建成航拍', alt: '孝文化长廊及周边村落建成航拍' },
  { src: '/images/guangping/built-entrance.jpg', label: '02 / 入口与木构节点', alt: '孝文化长廊入口和木构节点' },
  { src: '/images/guangping/built-overview.jpg', label: '03 / 村落中的连续屋面', alt: '孝文化长廊连续坡屋面实景' },
  { src: '/images/guangping/built-street.jpg', label: '04 / 街巷界面', alt: '孝文化长廊沿街建成实景' },
  { src: '/images/guangping/built-facade.jpg', label: '05 / 廊道立面', alt: '孝文化长廊木构立面实景' },
  { src: '/images/guangping/built-pavilion.jpg', label: '06 / 停留节点', alt: '孝文化长廊亭廊停留节点' },
  { src: '/images/guangping/built-corridor-wide.jpg', label: '07 / 空间序列', alt: '孝文化长廊横向空间序列' },
  { src: '/images/guangping/built-corridor-portrait.jpg', label: '08 / 廊下体验', alt: '孝文化长廊纵深空间体验' },
  { src: '/images/guangping/built-timber-detail.jpg', label: '09 / 木构节点近景', alt: '孝文化长廊木构屋架建成细节' },
  { src: '/images/guangping/built-roof-detail.jpg', label: '10 / 屋架与采光', alt: '孝文化长廊屋架与自然采光细节' },
]

const bantouPrograms = [
  {
    key: 'dining',
    number: '01',
    en: 'LOCAL DINING',
    title: '乡土餐饮空间',
    text: '以本地饮食作为进入古村的第一层体验，在保留石墙、木构与街巷尺度的基础上植入餐饮功能，让消费场景与村落日常自然共存。',
    images: [
      { src: '/images/bantou/dining-01.jpg', alt: '坂头村乡土餐饮空间沿巷入口' },
      { src: '/images/bantou/dining-02.jpg', alt: '坂头村乡土餐饮空间内部木构' },
      { src: '/images/bantou/dining-03.jpg', alt: '坂头村乡土餐饮空间修缮立面' },
    ],
  },
  {
    key: 'coffee',
    number: '02',
    en: 'VILLAGE CAFE',
    title: '村落咖啡空间',
    text: '把闲置乡土建筑转化为低门槛的停留节点，以咖啡业态连接游客与村民；通过原结构梳理、石墙保留和轻量化陈设，形成具有在地辨识度的休闲场景。',
    images: [
      { src: '/images/bantou/coffee-01.jpg', alt: '坂头村咖啡空间沿巷立面' },
      { src: '/images/bantou/coffee-02.jpg', alt: '坂头村咖啡空间改造前后结构关系' },
      { src: '/images/bantou/coffee-03.jpg', alt: '坂头村咖啡空间运营场景效果' },
    ],
  },
  {
    key: 'homestay',
    number: '03',
    en: 'HOMESTAY CLUSTER',
    title: '特色民宿集群',
    text: '将分散的闲置民居视为一组可协同运营的住宿单元，在保护原有肌理的前提下优化采光、交通与公共交流空间，让住宿体验成为理解古村生活的入口。',
    images: [
      { src: '/images/bantou/homestay-01.jpg', alt: '坂头村民宿群内部交通空间' },
      { src: '/images/bantou/homestay-02.jpg', alt: '坂头村民宿群木楼梯与砖墙' },
      { src: '/images/bantou/homestay-03.jpg', alt: '坂头村民宿群多层木构立面' },
      { src: '/images/bantou/homestay-04.jpg', alt: '坂头村民宿群室内空间' },
    ],
  },
  {
    key: 'route',
    number: '04',
    en: 'CULTURAL ROUTE',
    title: '滨水游线与景观楼梯',
    text: '通过外置景观楼梯、沿河步行界面和节点串联，重新组织到达、观景与进入商业空间的路径，使分散业态形成连续可阅读的文旅体验。',
    images: [
      { src: '/images/bantou/landscape-stair-01.jpg', alt: '坂头村沿河景观楼梯与商业空间' },
      { src: '/images/bantou/landscape-stair-02.jpg', alt: '坂头村沿河景观楼梯整体关系' },
      { src: '/images/bantou/river-elevation.jpg', alt: '坂头村文旅商业空间整体沿河立面' },
    ],
  },
]

const guangpingDrawings = [
  { src: '/images/guangping/drawing-plan.jpg', label: '01 / 一层平面图', alt: '广平村孝文化长廊一层平面图' },
  { src: '/images/guangping/drawing-section.jpg', label: '02 / 建筑剖面图', alt: '广平村孝文化长廊建筑剖面图' },
  { src: '/images/guangping/drawing-detail-01.jpg', label: '03 / 构造大样', alt: '广平村孝文化长廊铺装与柱基础构造大样' },
  { src: '/images/guangping/drawing-detail-02.jpg', label: '04 / 木构节点', alt: '广平村孝文化长廊木构基础与连接节点' },
]

function SectionHeading({ index, label, title, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <p><span>{index}</span> / {label}</p>
      <h2>{title}</h2>
    </div>
  )
}

function GuangpingCasePage() {
  return (
    <main className="case-study-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="./#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#case-overview">项目概览</a>
          <a href="#built-gallery">建成实景</a>
          <a href="#technical-drawings">技术图纸</a>
        </nav>
        <a className="contact-link" href="./#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/guangping/concept-render.jpg" alt="广平村孝文化长廊设计效果图" />
          <span>CONCEPT RENDER / 效果图</span>
        </div>
        <div className="case-detail-title frame">
          <a href="./#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 01</span> / CULTURAL CORRIDOR</p>
          <h1>广平村<br />孝文化长廊</h1>
          <div className="case-detail-intro">
            <p>在传统村落的日常尺度中，建立一条能够行走、停留、交流并承载文化记忆的公共空间。</p>
            <span>FUJIAN · DATIAN<br />2024—2025</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="case-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>让文化表达进入村落生活，而不是停留在展示表面。</h2>
              <p>设计以“孝文化”为叙事线索，将原本分散的村落路径、公共停留与文化展示整合为连续的廊道系统。木构架、灰瓦坡屋面与收放有致的空间节点回应既有村落肌理，让新的公共空间保持亲切的尺度与清晰的识别度。</p>
              <p>从效果表达、空间模型到施工图节点深化，设计持续校准屋面关系、通行尺度、构件连接与场地衔接，使概念能够转化为真实可使用的建成空间。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>传统村落改善 / 文化长廊</dd></div>
              <div><dt>项目地点</dt><dd>福建省大田县广平镇广平村</dd></div>
              <div><dt>项目时间</dt><dd>2024—2025</dd></div>
              <div><dt>个人角色</dt><dd>项目主导</dd></div>
              <div><dt>工作内容</dt><dd>调研 / 方案 / 模型 / 渲染 / 施工图</dd></div>
            </dl>
          </div>

          <div className="concept-built-grid">
            <figure>
              <img src="/images/guangping/concept-render.jpg" alt="广平村孝文化长廊效果图" />
              <figcaption><span>01</span> 设计效果 / CONCEPT</figcaption>
            </figure>
            <figure>
              <img src="/images/guangping/built-entrance.jpg" alt="广平村孝文化长廊建成入口" />
              <figcaption><span>02</span> 建成实景 / BUILT</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="built-gallery">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>BUILT WORK / 建成实景</p></div>
          <div className="built-gallery-heading">
            <h2>从整体屋面到廊下细部，空间在真实使用中成立。</h2>
            <p>航拍呈现长廊与村落建筑的整体关系；街巷、入口、亭廊与室内视角进一步记录尺度、结构和连续步行体验。</p>
          </div>
          <div className="built-photo-grid">
            {guangpingBuilt.map((image, index) => (
              <figure className={index === 0 || index === 6 ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="technical-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>TECHNICAL DELIVERY / 技术图纸</p></div>
          <div className="drawing-heading">
            <h2>用图纸把空间意图落实到构造、尺度与施工节点。</h2>
            <p>平面、剖面与构造大样共同建立从总体空间到木构连接的实施依据，体现设计从概念表达进入技术落地的完整链路。</p>
          </div>
          <div className="drawing-grid">
            {guangpingDrawings.map((drawing) => (
              <figure key={drawing.src}>
                <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                <figcaption>{drawing.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="case-end-nav">
            <div><span>NEXT CASE / CASE 02</span><h2>坂头村文旅商业活化设计</h2></div>
            <a href="?case=bantou">查看下一案例 <ArrowUpRight size={28} /></a>
          </div>
        </div>
      </section>
    </main>
  )
}

function BantouCasePage() {
  const planningPoints = [
    { number: '01', en: 'PRESERVE', title: '保护性活化', text: '以古建本体与村落肌理为前提，修缮并延续石墙、木构、坡屋面及街巷尺度。' },
    { number: '02', en: 'PROGRAM', title: '复合业态植入', text: '以餐饮、咖啡与民宿形成互补消费场景，盘活闲置乡土建筑资源。' },
    { number: '03', en: 'CONNECT', title: '文旅游线串联', text: '通过景观楼梯、巷道与滨水路径组织到达、停留、观景和消费的完整体验。' },
    { number: '04', en: 'OPERATE', title: '运营导向设计', text: '从单体空间延伸到集群关系，让设计同时回应日常生活、游客体验与持续运营。' },
  ]

  return (
    <main className="case-study-page bantou-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="./#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#bantou-overview">项目概览</a>
          <a href="#bantou-strategy">文旅策略</a>
          <a href="#bantou-programs">业态空间</a>
        </nav>
        <a className="contact-link" href="./#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media photo-color-reveal">
          <img src="/images/bantou/river-elevation.jpg" alt="坂头村文旅商业设计整体沿河立面" />
          <span>RIVERFRONT / 沿河整体界面</span>
        </div>
        <div className="case-detail-title frame">
          <a href="./#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 02</span> / CULTURAL TOURISM REGENERATION</p>
          <h1>坂头村<br />文旅商业活化</h1>
          <div className="case-detail-intro">
            <p>把古建保护、空间更新与文旅运营放进同一套系统，让古村既保留原生烟火气，也获得持续生长的产业动力。</p>
            <span>FUJIAN · ZHENGHE<br />PHASE I / II</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="bantou-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>不是改造几栋房子，而是重建一套古村文旅体验。</h2>
              <p>坂头村位于福建省南平市政和县杨源乡。项目以“古村活化 + 文旅融合”为核心，将古建保护性修缮、乡土风貌环境整治与文旅商业植入统筹推进，在保留村落原生生活与历史文脉的基础上，激活闲置建筑资源。</p>
              <p>设计从村落整体空间格局出发，形成乡土餐饮、村落咖啡、特色民宿集群和滨水景观游线四类互补场景，使古韵传承、人居品质提升与乡村文旅产业形成协同关系。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>古村活化 / 文旅商业设计</dd></div>
              <div><dt>项目地点</dt><dd>福建省南平市政和县杨源乡坂头村</dd></div>
              <div><dt>项目阶段</dt><dd>一期 / 二期</dd></div>
              <div><dt>个人角色</dt><dd>核心设计参与</dd></div>
              <div><dt>工作内容</dt><dd>方案 / 模型 / 渲染 / 图纸 / 文本</dd></div>
            </dl>
          </div>

          <div className="concept-built-grid">
            <figure className="photo-color-reveal">
              <img src="/images/bantou/river-elevation.jpg" alt="坂头村文旅商业整体沿河界面" />
              <figcaption><span>01</span> 整体沿河界面 / RIVERFRONT</figcaption>
            </figure>
            <figure className="photo-color-reveal">
              <img src="/images/bantou/coffee-03.jpg" alt="坂头村咖啡空间运营场景" />
              <figcaption><span>02</span> 文旅运营场景 / TOURISM PROGRAM</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="tourism-strategy case-detail-section" id="bantou-strategy">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>TOURISM STRATEGY / 文旅策略</p></div>
          <div className="built-gallery-heading">
            <h2>从建筑修缮走向业态、游线与运营协同。</h2>
            <p>通过保护、植入、串联与运营四个层级，将古村空间资源转化为可体验、可停留、可消费并能持续运营的文旅产品。</p>
          </div>
          <div className="tourism-strategy-grid">
            {planningPoints.map((point) => (
              <article key={point.number}>
                <div><span>{point.number}</span><small>{point.en}</small></div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-programs case-detail-section" id="bantou-programs">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>PROGRAM SYSTEM / 文旅业态空间</p></div>
          <div className="drawing-heading">
            <h2>四类场景，共同构成古村文旅的完整消费与停留链路。</h2>
            <p>每一处改造既是独立业态，也是村落整体体验的一部分；从餐饮与咖啡的短时停留，到民宿的深度体验，再由滨水游线完成空间串联。</p>
          </div>

          <div className="program-list">
            {bantouPrograms.map((program) => (
              <article className="program-block" key={program.key}>
                <div className="program-copy">
                  <div><span>{program.number}</span><small>{program.en}</small></div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
                <div className={`program-photo-grid program-photo-grid-${program.images.length}`}>
                  {program.images.map((image, index) => (
                    <figure className={index === program.images.length - 1 && program.key === 'route' ? 'program-wide' : ''} key={image.src}>
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <figcaption>{String(index + 1).padStart(2, '0')} / {program.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="case-end-nav">
            <div><span>CASE INDEX</span><h2>从文化长廊到文旅商业，设计回应不同场所命题。</h2></div>
            <a href="?case=guangping">查看案例 01 <ArrowUpRight size={28} /></a>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const activeCase = new URLSearchParams(window.location.search).get('case')

  useEffect(() => {
    const metadata = {
      guangping: {
        title: '广平村孝文化长廊｜安桐空间设计作品集',
        description: '从孝文化叙事、廊道空间到木构节点落地，查看广平村孝文化长廊的效果图、建成实景与技术图纸。',
        image: '/images/guangping/concept-render.jpg',
      },
      bantou: {
        title: '坂头村文旅商业活化｜安桐空间设计作品集',
        description: '以古村活化与文旅融合为核心，统筹餐饮、咖啡、民宿集群和滨水游线的乡村文旅商业设计。',
        image: '/images/bantou/river-elevation.jpg',
      },
      home: {
        title: '安桐｜空间设计师',
        description: '案例优先的空间设计作品集：从场所问题、设计策略到空间体验与项目落地。',
        image: '/og.png',
      },
    }[activeCase] || {
      title: '安桐｜空间设计师',
      description: '案例优先的空间设计作品集：从场所问题、设计策略到空间体验与项目落地。',
      image: '/og.png',
    }

    document.title = metadata.title
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)
    const absoluteImage = new URL(metadata.image, window.location.origin).href
    setMeta('meta[name="description"]', metadata.description)
    setMeta('meta[property="og:title"]', metadata.title)
    setMeta('meta[property="og:description"]', metadata.description)
    setMeta('meta[property="og:image"]', absoluteImage)
    setMeta('meta[name="twitter:title"]', metadata.title)
    setMeta('meta[name="twitter:description"]', metadata.description)
    setMeta('meta[name="twitter:image"]', absoluteImage)
  }, [activeCase])

  if (activeCase === 'guangping') {
    return <GuangpingCasePage />
  }

  if (activeCase === 'bantou') {
    return <BantouCasePage />
  }

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
                  <div className={`case-visual ${project.gallery ? 'case-visual-real' : ''}`}>
                    {project.gallery ? (
                      <div className="case-montage">
                        {project.gallery.map((image, index) => (
                          <figure className={index === 0 ? 'montage-main' : ''} key={image.src}>
                            <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                            <figcaption>{image.label}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <>
                        <img src={project.image} alt="建筑空间视觉占位图，后续替换为项目实景" />
                        <span className="placeholder-tag">VISUAL PLACEHOLDER / 待替换作品图</span>
                      </>
                    )}
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
                    {project.ready ? (
                      <a className="case-ready case-ready-link" href={project.href}>
                        <span>VIEW FULL CASE / 查看完整案例</span>
                        <p>进入项目详情，查看效果与建成对照、实景空间及技术图纸。</p>
                        <ArrowUpRight size={26} strokeWidth={1.8} aria-hidden="true" />
                      </a>
                    ) : (
                      <div className="case-ready">
                        <span>CASE CONTENT READY</span>
                        <p>已预设总览、过程、图纸与成果位置，待接入你的真实作品。</p>
                        <ArrowUpRight size={26} strokeWidth={1.8} aria-hidden="true" />
                      </div>
                    )}
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
