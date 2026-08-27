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
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import 'pannellum/build/pannellum.css'
import 'pannellum/build/pannellum.js'

const stats = [
  { value: '13', unit: '+', label: '累计参与项目' },
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
    href: '/?case=guangping',
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
    href: '/?case=bantou',
    ready: true,
    className: 'case-reverse',
  },
  {
    number: 'CASE 03',
    title: '黄田文化馆',
    location: '福建 · 平和',
    year: '2023 / 已建成',
    summary: '以“尊古不复古”为核心，将坍塌古民居更新为兼具文旅展示、社区交流与夜间活动能力的文化空间，并把单体改造纳入黄田村文农旅发展规划。',
    role: '核心设计参与',
    focus: '旧房活化 / 文旅展览 / 夜景光影 / 舞美延展',
    output: '规划 / 方案 / 模型 / 渲染 / 施工图 / 落地',
    image: '/images/huangtian/model.jpg',
    gallery: [
      { src: '/images/huangtian/model.jpg', label: '模型效果 / CONCEPT', alt: '黄田文化馆更新设计模型效果' },
      { src: '/images/huangtian/built-03.jpg', label: '建成实景 / BUILT', alt: '黄田文化馆木构与夯土墙建成实景' },
      { src: '/images/huangtian/night-02.jpg', label: '夜景光影 / NIGHT', alt: '黄田文化馆夜间光影空间' },
      { src: '/images/huangtian/planning.jpg', label: '文旅规划 / PLANNING', alt: '黄田村村庄文农旅产业发展规划' },
    ],
    href: '/?case=huangtian',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 04',
    title: '三旬火塘民谣小酒馆',
    location: '连锁品牌 · 商业空间',
    year: '已建成 / 运营中',
    summary: '围绕连锁品牌的火塘、民谣与社交体验，将品牌识别、舞台演艺、酒水餐饮和顾客停留组织为可运营、可传播、可复制的商业空间原型。',
    role: '核心设计参与',
    focus: '品牌表达 / 场景消费 / 运营转化',
    output: '方案讨论 / 效果图 / 部分施工图 / 落地',
    image: '/images/sanxun/stage-wide.jpg',
    gallery: [
      { src: '/images/sanxun/stage-wide.jpg', label: '运营实景 / LIVE', alt: '三旬火塘民谣小酒馆舞台运营实景' },
      { src: '/images/sanxun/facade-night.jpg', label: '品牌外立面 / FACADE', alt: '三旬火塘民谣小酒馆夜间外立面' },
      { src: '/images/sanxun/bar-operation.jpg', label: '吧台运营 / BAR', alt: '三旬火塘民谣小酒馆吧台运营场景' },
      { src: '/images/sanxun/operation-live-01.jpg', label: '现场演艺 / STAGE', alt: '三旬火塘民谣小酒馆现场演艺' },
    ],
    href: '/?case=sanxun',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 05',
    title: 'LA NIKAR 线下体验店',
    location: '新潮服装品牌 · 商业空间',
    year: '已建成 / 运营中',
    summary: '以轻盈、前卫的品牌视觉重组零售陈列、顾客社交与内容生产场景，并将直播空间、拍摄背景和运营动线纳入门店系统，让线下体验直接服务品牌传播与销售转化。',
    role: '核心设计参与',
    focus: '品牌体验 / 零售陈列 / 直播运营',
    output: '方案讨论 / 效果图 / 部分施工图 / 落地',
    image: '/images/lanikar/render-facade.jpg',
    gallery: [
      { src: '/images/lanikar/render-facade.jpg', label: '品牌门店 / CONCEPT', alt: 'LA NIKAR 服装品牌线下体验店门头效果图' },
      { src: '/images/lanikar/built-facade.jpg', label: '建成门店 / BUILT', alt: 'LA NIKAR 服装品牌线下体验店建成实景' },
      { src: '/images/lanikar/built-live-studio.jpg', label: '内容拍摄 / LIVE STUDIO', alt: 'LA NIKAR 门店直播与内容拍摄场景' },
      { src: '/images/lanikar/render-overview-rear.jpg', label: '零售体验 / RETAIL', alt: 'LA NIKAR 线下体验店零售空间效果图' },
    ],
    href: '/?case=lanikar',
    ready: true,
    className: 'case-reverse',
  },
]

const tulanduoGroups = [
  {
    key: 'store',
    label: '空间效果',
    en: 'STORE SYSTEM',
    images: [
      { src: '/images/tulanduo/store-facade.jpg', alt: '图兰朵品牌终端门店门头效果图' },
      { src: '/images/tulanduo/store-wall.jpg', alt: '图兰朵品牌终端墙面陈列效果图' },
      { src: '/images/tulanduo/store-fitting.jpg', alt: '图兰朵品牌终端试衣区效果图' },
      { src: '/images/tulanduo/store-display.jpg', alt: '图兰朵品牌终端商品陈列效果图' },
      { src: '/images/tulanduo/store-overview.jpg', alt: '图兰朵品牌终端空间全景效果图' },
    ],
  },
  {
    key: 'fixture',
    label: '陈列道具',
    en: 'FIXTURE SYSTEM',
    images: [
      { src: '/images/tulanduo/fixture-island.jpg', alt: '图兰朵中岛复合陈列道具效果图' },
      { src: '/images/tulanduo/fixture-rail.jpg', alt: '图兰朵弧形服装挂架效果图' },
      { src: '/images/tulanduo/fixture-combo.jpg', alt: '图兰朵组合陈列道具效果图' },
      { src: '/images/tulanduo/fixture-module.jpg', alt: '图兰朵模块化中岛陈列道具效果图' },
    ],
  },
  {
    key: 'drawing',
    label: '图纸系统',
    en: 'DRAWING SYSTEM',
    images: [
      { src: '/images/tulanduo/drawing-layout.jpg', alt: '图兰朵品牌终端平面布置图' },
      { src: '/images/tulanduo/drawing-ceiling.jpg', alt: '图兰朵品牌终端顶面造型尺寸图' },
      { src: '/images/tulanduo/drawing-lighting.jpg', alt: '图兰朵品牌终端开关线路图' },
      { src: '/images/tulanduo/drawing-elevation.jpg', alt: '图兰朵品牌终端立面深化图' },
      { src: '/images/tulanduo/drawing-logo.jpg', alt: '图兰朵品牌终端商标尺寸与材质图' },
      { src: '/images/tulanduo/drawing-facade.jpg', alt: '图兰朵品牌终端门头商标立面图' },
    ],
  },
]

const projectArchive = [
  {
    number: '07',
    title: '建瓯市第四次全国文物普查',
    location: '福建 · 南平',
    type: '文化遗产调查',
    role: '项目负责人 / 培训 / 对接 / 数据采集',
  },
  {
    number: '08',
    title: '石兰自然村传统村落重点改善提升',
    location: '福建 · 福鼎',
    type: '传统村落更新',
    role: '项目主导 / 方案 / 模型 / 图纸 / 文本',
  },
  {
    number: '09',
    title: '马尾船政局保护修缮图则编订',
    location: '福建 · 福州',
    type: '历史建筑保护',
    role: '法规分析 / 图则 / 示意图 / 文本',
  },
  {
    number: '10',
    title: '山坊村保护发展规划与重点改善提升',
    location: '福建',
    type: '保护规划与更新',
    role: '数据采集 / 分析图 / 图纸 / 文本',
  },
  {
    number: '11',
    title: '长校村传统村落重点改善提升',
    location: '福建 · 清流',
    type: '传统村落更新',
    role: '数据采集 / 图纸 / 文本',
  },
  {
    number: '12',
    title: '岑兜村传统村落保护发展规划',
    location: '福建 · 南安',
    type: '保护发展规划 2024—2035',
    role: '规划文本 / 模型渲染 / 分析图',
  },
  {
    number: '13',
    title: '前洋村中国传统村落重点提升',
    location: '福建 · 古田',
    type: '传统村落更新',
    role: '方案 / 模型 / 渲染 / 图纸 / 文本',
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

const bantouDrawings = [
  { src: '/images/bantou/drawing-section-phase2.jpg', label: '01 / 二期建筑剖面', alt: '坂头村二期建筑剖面图' },
  { src: '/images/bantou/drawing-building-section.jpg', label: '02 / 建筑修缮剖面', alt: '坂头村建筑修缮剖面与构造说明' },
  { src: '/images/bantou/drawing-stair-section.jpg', label: '03 / 景观楼梯剖面', alt: '坂头村景观楼梯剖面图' },
  { src: '/images/bantou/drawing-stair-elevation.jpg', label: '04 / 景观楼梯立面', alt: '坂头村景观楼梯正立面图' },
  { src: '/images/bantou/drawing-signage.jpg', label: '05 / 村标构造大样', alt: '坂头村村标构造大样图' },
  { src: '/images/bantou/drawing-timber-detail.jpg', label: '06 / 木构露台节点', alt: '坂头村木构露台梁架节点大样' },
  { src: '/images/bantou/drawing-floor-plan.jpg', label: '07 / 修缮建筑一层平面', alt: '坂头村修缮建筑一层平面图' },
  { src: '/images/bantou/drawing-phase2-plan.jpg', label: '08 / 二期一层平面', alt: '坂头村二期建筑一层平面图' },
]

const huangtianBuilt = [
  { src: '/images/huangtian/built-01.jpg', label: '01 / 入口与砖砌花墙', alt: '黄田文化馆入口与灰砖花墙建成实景' },
  { src: '/images/huangtian/built-02.jpg', label: '02 / 新旧界面的巷道', alt: '黄田文化馆传统木构与新建灰砖界面之间的巷道' },
  { src: '/images/huangtian/built-03.jpg', label: '03 / 夯土墙与木构屋架', alt: '黄田文化馆保留夯土墙与优化木构屋架建成实景', wide: true },
  { src: '/images/huangtian/built-04.jpg', label: '04 / 层叠瓦檐与木构细部', alt: '黄田文化馆层叠瓦檐与现代优化木构细部' },
  { src: '/images/huangtian/built-05.jpg', label: '05 / 展览空间外廊', alt: '黄田文化馆展览空间外廊与小青瓦构造' },
  { src: '/images/huangtian/built-06.jpg', label: '06 / 社区交流路径', alt: '黄田文化馆连接展览与社区交流空间的院落路径', wide: true },
]

const huangtianDrawings = [
  { src: '/images/huangtian/drawing-01.jpg', label: '01 / 建筑总平面布置', alt: '黄田文化馆建筑总平面布置图' },
  { src: '/images/huangtian/drawing-02.jpg', label: '02 / 东南立面与檩条尺寸', alt: '黄田文化馆东南立面与木构檩条尺寸图' },
  { src: '/images/huangtian/drawing-03.jpg', label: '03 / 建筑剖面', alt: '黄田文化馆建筑剖面及材料构造说明' },
  { src: '/images/huangtian/drawing-04.jpg', label: '04 / 屋面与檐口节点', alt: '黄田文化馆屋面瓦作与木构檐口节点大样' },
  { src: '/images/huangtian/drawing-05.jpg', label: '05 / 灯光与电路布置', alt: '黄田文化馆室内外灯光与电路布置图' },
  { src: '/images/huangtian/drawing-06.jpg', label: '06 / 木构纵剖面', alt: '黄田文化馆木结构纵剖面深化图' },
]

const sanxunBuilt = [
  { src: '/images/sanxun/stage-wide.jpg', label: '01 / 火塘舞台', alt: '三旬火塘民谣小酒馆火塘舞台实景' },
  { src: '/images/sanxun/facade-night.jpg', label: '02 / 夜间品牌界面', alt: '三旬火塘民谣小酒馆夜间品牌外立面' },
  { src: '/images/sanxun/entrance-night.jpg', label: '03 / 入口识别', alt: '三旬火塘民谣小酒馆入口品牌识别' },
  { src: '/images/sanxun/bar-operation.jpg', label: '04 / 吧台运营', alt: '三旬火塘民谣小酒馆吧台运营状态' },
  { src: '/images/sanxun/operation-live-01.jpg', label: '05 / 现场演艺', alt: '三旬火塘民谣小酒馆现场演艺场景' },
  { src: '/images/sanxun/operation-live-02.jpg', label: '06 / 民谣现场', alt: '三旬火塘民谣小酒馆民谣演出' },
  { src: '/images/sanxun/interior-overview.jpg', label: '07 / 客席空间', alt: '三旬火塘民谣小酒馆客席空间' },
  { src: '/images/sanxun/brand-detail.jpg', label: '08 / 品牌细节', alt: '三旬火塘民谣小酒馆品牌灯光细节' },
]

const sanxunDrawings = [
  { src: '/images/sanxun/drawing-plan-layout.jpg', label: '01 / 平面布置图', alt: '三旬火塘民谣小酒馆平面布置图' },
  { src: '/images/sanxun/drawing-plan-dimension.jpg', label: '02 / 平面尺寸图', alt: '三旬火塘民谣小酒馆平面尺寸图' },
  { src: '/images/sanxun/drawing-ceiling.jpg', label: '03 / 天花尺寸图', alt: '三旬火塘民谣小酒馆天花尺寸图' },
  { src: '/images/sanxun/drawing-power-layout.jpg', label: '04 / 插座布置图', alt: '三旬火塘民谣小酒馆插座布置图' },
  { src: '/images/sanxun/drawing-wall-elevation.jpg', label: '05 / 墙面立面图', alt: '三旬火塘民谣小酒馆墙面立面图' },
  { src: '/images/sanxun/drawing-elevation-detail.jpg', label: '06 / 立面构造大样', alt: '三旬火塘民谣小酒馆立面构造大样' },
]

const lanikarRenders = [
  { src: '/images/lanikar/render-facade.jpg', label: '01 / 品牌门头与橱窗', alt: 'LA NIKAR 线下体验店门头与橱窗效果图', wide: true },
  { src: '/images/lanikar/render-overview-front.jpg', label: '02 / 面向街道的零售客厅', alt: 'LA NIKAR 线下体验店零售客厅效果图' },
  { src: '/images/lanikar/render-overview-rear.jpg', label: '03 / 陈列与直播关系', alt: 'LA NIKAR 线下体验店陈列与直播空间效果图' },
  { src: '/images/lanikar/render-brand-wall.jpg', label: '04 / 品牌墙与柔性陈列', alt: 'LA NIKAR 品牌墙与柔性陈列空间效果图' },
  { src: '/images/lanikar/render-entry.jpg', label: '05 / 入口镜面界面', alt: 'LA NIKAR 门店入口镜面界面效果图' },
]

const lanikarBuilt = [
  { src: '/images/lanikar/built-facade.jpg', label: '01 / 建成品牌门店', alt: 'LA NIKAR 线下体验店建成门头', wide: true },
  { src: '/images/lanikar/built-live-studio.jpg', label: '02 / 门店内容拍摄', alt: 'LA NIKAR 门店内直播与内容拍摄运营现场' },
  { src: '/images/lanikar/built-merchandise.jpg', label: '03 / 商品陈列实景', alt: 'LA NIKAR 线下体验店商品陈列实景' },
]

const lanikarDrawings = [
  { src: '/images/lanikar/drawing-base-plan.jpg', label: '01 / 基础平面图', alt: 'LA NIKAR 线下体验店基础平面图' },
  { src: '/images/lanikar/drawing-layout.jpg', label: '02 / 平面布置图', alt: 'LA NIKAR 线下体验店陈列与直播区平面布置图' },
  { src: '/images/lanikar/drawing-lighting.jpg', label: '03 / 灯具与电源布置', alt: 'LA NIKAR 线下体验店灯具与电源布置图' },
  { src: '/images/lanikar/drawing-switch.jpg', label: '04 / 开关控制图', alt: 'LA NIKAR 线下体验店开关控制图' },
  { src: '/images/lanikar/drawing-elevation.jpg', label: '05 / 品牌墙立面图', alt: 'LA NIKAR 线下体验店品牌墙立面图' },
  { src: '/images/lanikar/drawing-detail.jpg', label: '06 / 软膜灯箱大样', alt: 'LA NIKAR 线下体验店软膜灯箱与墙面大样' },
]

const caseSequence = {
  guangping: {
    previous: { number: '05', title: 'LA NIKAR 线下体验店', href: '/?case=lanikar' },
    next: { number: '02', title: '坂头村文旅商业活化', href: '/?case=bantou' },
  },
  bantou: {
    previous: { number: '01', title: '广平村孝文化长廊', href: '/?case=guangping' },
    next: { number: '03', title: '黄田文化馆', href: '/?case=huangtian' },
  },
  huangtian: {
    previous: { number: '02', title: '坂头村文旅商业活化', href: '/?case=bantou' },
    next: { number: '04', title: '三旬火塘民谣小酒馆', href: '/?case=sanxun' },
  },
  sanxun: {
    previous: { number: '03', title: '黄田文化馆', href: '/?case=huangtian' },
    next: { number: '05', title: 'LA NIKAR 线下体验店', href: '/?case=lanikar' },
  },
  lanikar: {
    previous: { number: '04', title: '三旬火塘民谣小酒馆', href: '/?case=sanxun' },
    next: { number: '01', title: '广平村孝文化长廊', href: '/?case=guangping' },
  },
}

function CaseNavigation({ current }) {
  const sequence = caseSequence[current]

  return (
    <nav className="case-sequence-nav" aria-label="案例切换">
      <a className="case-sequence-link previous" href={sequence.previous.href}>
        <ArrowLeft size={28} aria-hidden="true" />
        <span><small>PREVIOUS / 上一个案例</small><strong>CASE {sequence.previous.number}<br />{sequence.previous.title}</strong></span>
      </a>
      <a className="case-sequence-home" href="/#projects">
        <Grid2X2 size={28} aria-hidden="true" />
        <span><small>CASE INDEX</small><strong>返回主页案例目录</strong></span>
      </a>
      <a className="case-sequence-link next" href={sequence.next.href}>
        <span><small>NEXT / 下一个案例</small><strong>CASE {sequence.next.number}<br />{sequence.next.title}</strong></span>
        <ArrowUpRight size={28} aria-hidden="true" />
      </a>
    </nav>
  )
}

function PanoramaViewer() {
  const panoramas = [
    { src: '/images/sanxun/panorama-01.jpg', label: '火塘舞台与客席全景' },
    { src: '/images/sanxun/panorama-02.jpg', label: '吧台与环形动线全景' },
  ]
  const [active, setActive] = useState(0)
  const viewerElement = useRef(null)

  const switchPanorama = (index) => {
    setActive(index)
  }

  useEffect(() => {
    if (!viewerElement.current || !window.pannellum) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const viewer = window.pannellum.viewer(viewerElement.current, {
      type: 'equirectangular',
      panorama: panoramas[active].src,
      autoLoad: true,
      autoRotate: reduceMotion ? false : -1.2,
      autoRotateInactivityDelay: 4500,
      pitch: -4,
      yaw: 0,
      hfov: 100,
      minHfov: 52,
      maxHfov: 115,
      showControls: true,
      showFullscreenCtrl: true,
      keyboardZoom: true,
      mouseZoom: true,
      compass: false,
      backgroundColor: [8, 8, 8],
    })

    return () => viewer.destroy()
  }, [active])

  return (
    <div className="panorama-module">
      <div className="panorama-toolbar">
        <div>
          <span>INTERACTIVE 360° PANORAMA</span>
          <p>拖动画面环视空间，滚轮缩放；也可使用方向键与全屏按钮。</p>
        </div>
        <div className="panorama-tabs" role="tablist" aria-label="选择全景视角">
          {panoramas.map((panorama, index) => (
            <button
              className={active === index ? 'active' : ''}
              key={panorama.src}
              onClick={() => switchPanorama(index)}
              role="tab"
              aria-selected={active === index}
              type="button"
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="panorama-sphere" ref={viewerElement} aria-label={`${panoramas[active].label}，360度球型全景`} />
      <div className="panorama-footer">
        <span>360° SPHERICAL VIEW</span>
        <span>VIEW 0{active + 1} / {panoramas[active].label}</span>
      </div>
    </div>
  )
}

function TulanduoShowcase() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const group = tulanduoGroups[activeGroup]

  const openGroup = (index) => {
    setActiveGroup(index)
    setActiveImage(0)
    setModalOpen(true)
  }

  useEffect(() => {
    if (!modalOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setModalOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [modalOpen])

  return (
    <>
      <section className="secondary-case-showcase" aria-labelledby="tulanduo-title">
        <div className="secondary-case-heading">
          <div>
            <span>SECONDARY CASE 06 / S.I. DESIGN</span>
            <h3 id="tulanduo-title">图兰朵<br />S.I.终端系统</h3>
          </div>
          <p>以统一的门店界面、陈列秩序与模块化道具，建立可识别、可落地、可复制的品牌终端语言。</p>
          <div className="secondary-case-tags" aria-label="项目关键词">
            <span>品牌终端</span>
            <span>陈列系统</span>
            <span>标准化道具</span>
          </div>
        </div>

        <div className="secondary-case-tabs" aria-label="图兰朵案例内容分类">
          {tulanduoGroups.map((item, index) => (
            <button
              className={activeGroup === index ? 'active' : ''}
              key={item.key}
              onClick={() => openGroup(index)}
              aria-haspopup="dialog"
              aria-controls="tulanduo-modal"
              type="button"
            >
              <span>0{index + 1}</span>
              <strong>{item.label}</strong>
              <small>{item.en}</small>
            </button>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div
          className="secondary-case-modal"
          id="tulanduo-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tulanduo-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModalOpen(false)
          }}
        >
          <div className="secondary-case-modal-panel">
            <header className="secondary-case-modal-header">
              <div>
                <span>SECONDARY CASE 06 / S.I. DESIGN</span>
                <h4 id="tulanduo-modal-title">{group.label} / {group.en}</h4>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} aria-label="关闭图兰朵案例图集">
                <X aria-hidden="true" />
              </button>
            </header>

            <div className="secondary-case-modal-body">
              <figure className={`secondary-case-main secondary-case-${group.key}`}>
                <img src={group.images[activeImage].src} alt={group.images[activeImage].alt} />
                <figcaption>
                  <span>06.{activeGroup + 1}.{String(activeImage + 1).padStart(2, '0')}</span>
                  <strong>{group.label} / {group.en}</strong>
                </figcaption>
              </figure>

              <div className="secondary-case-thumbnails" aria-label={`${group.label}图片选择`}>
                {group.images.map((image, index) => (
                  <button
                    className={activeImage === index ? 'active' : ''}
                    key={image.src}
                    onClick={() => setActiveImage(index)}
                    aria-label={`查看${group.label}图片 ${index + 1}`}
                    aria-pressed={activeImage === index}
                    type="button"
                  >
                    <img src={image.src} alt="" loading="lazy" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

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
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#case-overview">项目概览</a>
          <a href="#built-gallery">建成实景</a>
          <a href="#technical-drawings">技术图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/guangping/concept-render.jpg" alt="广平村孝文化长廊设计效果图" />
          <span>CONCEPT RENDER / 效果图</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
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
          <CaseNavigation current="guangping" />
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
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#bantou-overview">项目概览</a>
          <a href="#bantou-strategy">文旅策略</a>
          <a href="#bantou-programs">业态空间</a>
          <a href="#bantou-drawings">技术图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media photo-color-reveal">
          <img src="/images/bantou/river-elevation.jpg" alt="坂头村文旅商业设计整体沿河立面" />
          <span>RIVERFRONT / 沿河整体界面</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
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

          <div className="bantou-drawings-section" id="bantou-drawings">
            <div className="case-section-label"><span>04</span><p>TECHNICAL DELIVERY / 技术图纸</p></div>
            <div className="drawing-heading">
              <h2>让文旅策划落实到建筑、游线与木构节点。</h2>
              <p>平面、剖面、景观楼梯与木构大样共同建立可实施的技术依据，呈现从村落级文旅规划到单体修缮和节点深化的完整设计能力。</p>
            </div>
            <div className="drawing-grid">
              {bantouDrawings.map((drawing) => (
                <figure key={drawing.src}>
                  <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                  <figcaption>{drawing.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <CaseNavigation current="bantou" />
        </div>
      </section>
    </main>
  )
}

function HuangtianCasePage() {
  const lightingPoints = [
    { number: '01', en: 'GUIDE', title: '低位引导', text: '把灯具压低至步行视线之外，用连续光点提示路径与边界，避免强光破坏古建夜间气质。' },
    { number: '02', en: 'GRAZE', title: '掠射显材质', text: '以侧向与掠射光强化灰砖、木构、小青瓦的凹凸肌理，让被保留的材料成为夜景主角。' },
    { number: '03', en: 'RHYTHM', title: '阴影成节奏', text: '借助层叠檐口与木构间隙投射疏密变化的影子，使巷道在行走中形成连续的光影叙事。' },
    { number: '04', en: 'STAGE', title: '向舞美延展', text: '将光理解为组织视线、情绪与时间的媒介，这套方法可延展到舞台焦点、观演层次与场景切换。' },
  ]

  const planningPoints = [
    { number: '01', title: '资源识别', text: '从村庄区位、聚落肌理、文化资源与产业基础出发，建立文农旅协同发展的场所判断。' },
    { number: '02', title: '产业引导', text: '以特色农业、乡村文化与旅游体验形成互补内容，让短时到访转化为可停留、可参与的村庄体验。' },
    { number: '03', title: '节点落位', text: '把总体规划落实到重要建筑、公共空间与游线节点，文化馆成为村庄更新体系中的示范性触媒。' },
  ]

  return (
    <main className="case-study-page huangtian-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#huangtian-overview">项目概览</a>
          <a href="#huangtian-built">建成实景</a>
          <a href="#huangtian-lighting">夜景光影</a>
          <a href="#huangtian-planning">文旅规划</a>
          <a href="#huangtian-drawings">施工图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/huangtian/model.jpg" alt="黄田文化馆新旧共生更新设计模型效果" />
          <span>CONCEPT MODEL / 模型效果</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 03</span> / RURAL CULTURAL REGENERATION</p>
          <h1>黄田<br />文化馆</h1>
          <div className="case-detail-intro">
            <p>尊古不复古：让坍塌古民居在新旧共生中重新承载展览、交流与夜间文化活动。</p>
            <span>FUJIAN · PINGHE<br />2023 / BUILT</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="huangtian-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>保留时间留下的质感，也为当代生活腾出空间。</h2>
              <p>项目位于福建省平和县九峰镇黄田村，是一处乡村坍塌古民居的活化更新实践。设计以“尊古不复古”为核心，拒绝对仿古样式的直接复刻，转而采用“新旧共生”的改造策略，在原有建筑记忆与新的公共文化功能之间建立清晰关系。</p>
              <p>夯土墙、小青瓦与传统木构保留村落的地域肌理；新的灰砖界面、步行廊道与经过现代优化的木结构，则回应展览、社区交流和安全使用需求。低成本、低干预不是形式限制，而是让更新保持克制、可维护并真正回到村民日常。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>乡村文化馆 / 古民居活化 / 文旅展览</dd></div>
              <div><dt>项目地点</dt><dd>福建省平和县九峰镇黄田村</dd></div>
              <div><dt>项目时间</dt><dd>2023 / 已建成</dd></div>
              <div><dt>改造原则</dt><dd>尊古不复古 / 新旧共生 / 低成本低干预</dd></div>
              <div><dt>工作内容</dt><dd>文旅规划 / 方案 / 模型 / 渲染 / 施工图 / 落地</dd></div>
            </dl>
          </div>

          <div className="concept-built-grid huangtian-before-after">
            <figure>
              <img src="/images/huangtian/existing.jpg" alt="黄田文化馆改造前的坍塌古民居原址" loading="lazy" />
              <figcaption><span>01</span> 建筑原址 / BEFORE</figcaption>
            </figure>
            <figure>
              <img src="/images/huangtian/model.jpg" alt="黄田文化馆更新设计模型效果" loading="lazy" />
              <figcaption><span>02</span> 新旧共生策略 / CONCEPT</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="huangtian-built">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>BUILT WORK / 建成实景</p></div>
          <div className="built-gallery-heading">
            <h2>展览空间与村落巷道，在屋檐之间重新连接。</h2>
            <p>新建部分保持克制，借灰砖、木材与清晰的线性路径衬托旧构件；层叠瓦檐既延续地域记忆，也形成可停留、可观看、可交流的展览界面。</p>
          </div>
          <div className="built-photo-grid huangtian-built-grid">
            {huangtianBuilt.map((image) => (
              <figure className={image.wide ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="huangtian-lighting case-detail-section" id="huangtian-lighting">
        <div className="section-frame">
          <div className="case-section-label light"><span>03</span><p>LIGHT & STAGE / 夜景光影与舞美延展</p></div>
          <div className="built-gallery-heading">
            <h2>夜晚，光成为第二套空间结构。</h2>
            <p>照明不以整体打亮建筑为目标，而是控制亮度、方向与节奏：路径光保障行走，掠射光显露材料，檐下漏光建立层次，并把视觉焦点引向活动发生的位置。</p>
          </div>
          <div className="huangtian-night-grid">
            <figure>
              <img src="/images/huangtian/night-01.jpg" alt="黄田文化馆夜间巷道低位引导与木构光影" loading="lazy" />
              <figcaption>01 / PATH & SHADOW / 路径与影</figcaption>
            </figure>
            <figure>
              <img src="/images/huangtian/night-02.jpg" alt="黄田文化馆夜间灰砖墙与层叠檐口光影" loading="lazy" />
              <figcaption>02 / MATERIAL & RHYTHM / 材质与节奏</figcaption>
            </figure>
          </div>
          <div className="tourism-strategy-grid huangtian-lighting-points">
            {lightingPoints.map((point) => (
              <article key={point.number}>
                <div><span>{point.number}</span><small>{point.en}</small></div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <p className="huangtian-stage-note">从建筑夜景到舞美设计，核心都是用光建立观看关系：谁被看见、从哪里进入、情绪如何递进、场景何时切换。黄田文化馆验证了对光影、材质与行走节奏的控制，也形成了可迁移至小型演艺、展陈发布与乡村节庆舞台的设计方法。</p>
        </div>
      </section>

      <section className="huangtian-planning case-detail-section" id="huangtian-planning">
        <div className="section-frame">
          <div className="case-section-label"><span>04</span><p>CULTURAL TOURISM PLANNING / 文农旅发展规划</p></div>
          <div className="drawing-heading">
            <h2>由一座文化馆，连接村庄文农旅发展的整体图景。</h2>
            <p>单体更新不是孤立终点。项目同步回应黄田村的资源分析、产业引导、文旅分区与重要建筑节点，使文化馆成为串联村庄记忆、公共活动与旅游体验的空间触媒。</p>
          </div>
          <figure className="huangtian-planning-board">
            <img src="/images/huangtian/planning.jpg" alt="黄田村村庄文农旅产业发展规划总览" loading="lazy" />
            <figcaption><span>MASTER PLAN</span> 黄田村村庄文农旅产业发展规划</figcaption>
          </figure>
          <div className="huangtian-planning-points">
            {planningPoints.map((point) => (
              <article key={point.number}>
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="huangtian-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>05</span><p>TECHNICAL DELIVERY / 施工图纸</p></div>
          <div className="drawing-heading">
            <h2>从平面、木构到灯光电路，控制新旧交接的每一层关系。</h2>
            <p>总平面、立剖面、屋面节点与电路布置共同建立可实施依据，让材料保留、结构优化、展览使用和夜景塑造在同一套技术系统中落地。</p>
          </div>
          <div className="drawing-grid">
            {huangtianDrawings.map((drawing) => (
              <figure key={drawing.src}>
                <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                <figcaption>{drawing.label}</figcaption>
              </figure>
            ))}
          </div>
          <CaseNavigation current="huangtian" />
        </div>
      </section>
    </main>
  )
}

function SanxunCasePage() {
  const brandPoints = [
    { number: '01', en: 'IDENTITY', title: '品牌识别进入空间', text: '将火塘、民谣、木质肌理和暖色灯光转化为稳定的空间语言，使门店从外立面到内部体验保持一致识别。' },
    { number: '02', en: 'SCENE', title: '演艺成为消费核心', text: '以半围合火塘舞台建立视觉中心，控制客席距离、观演角度与声光关系，让内容表演直接带动停留和消费。' },
    { number: '03', en: 'OPERATION', title: '动线服务真实运营', text: '统筹吧台、后厨、客席、演艺设备与服务路径，减少交叉干扰，使高峰期点单、出品与翻台保持效率。' },
    { number: '04', en: 'REPLICATION', title: '形成可复制门店原型', text: '把标志性构件、材料、灯光和功能模块整理为连锁门店可延展的设计系统，兼顾统一品牌与不同场地适配。' },
  ]

  return (
    <main className="case-study-page sanxun-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#sanxun-overview">项目概览</a>
          <a href="#sanxun-brand">品牌策略</a>
          <a href="#sanxun-panorama">全景体验</a>
          <a href="#sanxun-built">运营实景</a>
          <a href="#sanxun-drawings">设计图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/sanxun/stage-wide.jpg" alt="三旬火塘民谣小酒馆运营中的火塘舞台" />
          <span>BUILT & OPERATING / 建成运营</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 04</span> / BRAND COMMERCIAL SPACE</p>
          <h1>三旬火塘<br />民谣小酒馆</h1>
          <div className="case-detail-intro">
            <p>让品牌故事、现场演艺与餐饮运营共同发生，把空间设计转化为可感知、可消费、可复制的连锁门店体验。</p>
            <span>CHAIN BRAND<br />BUILT / OPERATING</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="sanxun-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>空间不是品牌的背景，而是运营发生的基础设施。</h2>
              <p>项目围绕“三旬火塘民谣小酒馆”的连锁品牌定位，将火塘围坐、现场民谣、酒水餐饮与社交互动组织为清晰的空间体验。设计以中央舞台建立记忆锚点，并通过环绕客席、吧台与入口界面形成由识别、进入、停留到消费的完整路径。</p>
              <p>材料与灯光强调温暖、松弛和在地感；平面与设备则回应高峰营业时的出品效率、观演秩序和服务动线，使品牌氛围与商业运营彼此支撑。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>连锁品牌 / 餐饮娱乐商业空间</dd></div>
              <div><dt>空间业态</dt><dd>民谣酒馆 / 火塘餐饮 / 现场演艺</dd></div>
              <div><dt>项目状态</dt><dd>已建成 / 持续运营</dd></div>
              <div><dt>个人角色</dt><dd>核心设计参与</dd></div>
              <div><dt>工作内容</dt><dd>方案讨论 / 效果图 / 部分施工图 / 落地配合</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="tourism-strategy case-detail-section" id="sanxun-brand">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>BRAND & OPERATION / 品牌运营策略</p></div>
          <div className="built-gallery-heading">
            <h2>从品牌气质到营业效率，建立一套完整的商业空间逻辑。</h2>
            <p>空间设计同时服务品牌传播、顾客体验和门店运营，并把关键场景沉淀为连锁门店可复用的设计资产。</p>
          </div>
          <div className="tourism-strategy-grid">
            {brandPoints.map((point) => (
              <article key={point.number}>
                <div><span>{point.number}</span><small>{point.en}</small></div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panorama-section case-detail-section" id="sanxun-panorama">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>INTERACTIVE PANORAMA / 全景空间体验</p></div>
          <div className="drawing-heading">
            <h2>进入 360° 球型视角，阅读舞台、吧台与客席的完整关系。</h2>
            <p>两张等距柱状全景图分别呈现火塘舞台与吧台动线，可自由环视、缩放、全屏浏览，并支持鼠标、触控与键盘操作。</p>
          </div>
          <PanoramaViewer />
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="sanxun-built">
        <div className="section-frame">
          <div className="case-section-label light"><span>04</span><p>BUILT & OPERATING / 建成与运营实景</p></div>
          <div className="built-gallery-heading">
            <h2>设计在真实营业中被使用，也在顾客内容中持续传播。</h2>
            <p>从入口品牌界面、吧台出品到现场演艺和客席氛围，实景记录空间如何支撑夜间消费、社交互动与品牌记忆。</p>
          </div>
          <div className="built-photo-grid sanxun-built-grid">
            {sanxunBuilt.map((image, index) => (
              <figure className={index === 0 || index === 3 ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="sanxun-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>05</span><p>DESIGN DELIVERY / 设计图纸</p></div>
          <div className="drawing-heading">
            <h2>把品牌场景落实到平面、灯光、设备与立面细节。</h2>
            <p>图纸覆盖客席与舞台布局、吧台及后厨关系、天花照明、电气点位和墙面构造，为连锁商业空间的施工落地与后续复制提供依据。</p>
          </div>
          <div className="drawing-grid">
            {sanxunDrawings.map((drawing) => (
              <figure key={drawing.src}>
                <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                <figcaption>{drawing.label}</figcaption>
              </figure>
            ))}
          </div>
          <CaseNavigation current="sanxun" />
        </div>
      </section>
    </main>
  )
}

function LanikarCasePage() {
  const retailPoints = [
    { number: '01', en: 'IDENTITY', title: '把品牌气质做成空间', text: '以克制白色、浅紫品牌界面、镜面砖与轻量金属陈列建立年轻、清透且易识别的门店语言。' },
    { number: '02', en: 'RETAIL', title: '用动线提升选购体验', text: '开放陈列、中心体验客厅与柔性挂架共同形成可浏览、可试穿、可交流的零售路径，并为上新留出调整弹性。' },
    { number: '03', en: 'CONTENT', title: '直播空间进入门店系统', text: '将直播背景、补光、机位和内容拍摄动线纳入整体方案，让门店在营业之外也是品牌持续产出内容的现场。' },
    { number: '04', en: 'REPLICATION', title: '沉淀连锁复制逻辑', text: '把门头、品牌墙、软膜灯箱与陈列模块整理为可复用组件，在统一识别与不同店铺条件之间保持适配。' },
  ]

  return (
    <main className="case-study-page lanikar-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#lanikar-overview">项目概览</a>
          <a href="#lanikar-strategy">品牌策略</a>
          <a href="#lanikar-renders">方案效果</a>
          <a href="#lanikar-built">运营实景</a>
          <a href="#lanikar-drawings">设计图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/lanikar/render-facade.jpg" alt="LA NIKAR 服装品牌线下体验店门头效果图" />
          <span>BRAND RETAIL CONCEPT / 品牌零售空间</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 05</span> / BRAND RETAIL EXPERIENCE</p>
          <h1>LA NIKAR<br />线下体验店</h1>
          <div className="case-detail-intro">
            <p>把零售、社交与直播内容生产组织在同一空间中，让线下门店成为品牌体验、运营转化与持续传播的共同载体。</p>
            <span>FASHION CHAIN BRAND<br />BUILT / OPERATING</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="lanikar-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>让门店从商品容器，转变为品牌内容与顾客关系的发生地。</h2>
              <p>LA NIKAR 面向年轻消费人群。设计以明亮、开放的空间底色弱化传统服装店的货架压迫感，并以浅紫品牌墙、镜面砖、柔性挂架和中心休闲区建立清晰的视觉层次，让陈列、试穿、交流和拍摄自然衔接。</p>
              <p>项目进一步把直播与短视频内容生产纳入门店运营：预留稳定的品牌背景、灯光电源、机位和拍摄界面，使线下空间能够同时服务零售体验、品牌发布与直播转化。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>连锁服装品牌 / 线下体验店</dd></div>
              <div><dt>核心场景</dt><dd>零售陈列 / 社交体验 / 直播拍摄</dd></div>
              <div><dt>项目状态</dt><dd>已建成 / 持续运营</dd></div>
              <div><dt>个人角色</dt><dd>核心设计参与</dd></div>
              <div><dt>工作内容</dt><dd>方案讨论 / 效果图绘制 / 部分施工图 / 落地配合</dd></div>
            </dl>
          </div>

          <div className="concept-built-grid">
            <figure>
              <img src="/images/lanikar/render-facade.jpg" alt="LA NIKAR 线下体验店门头效果图" />
              <figcaption><span>01</span> 品牌空间效果 / CONCEPT</figcaption>
            </figure>
            <figure>
              <img src="/images/lanikar/built-facade.jpg" alt="LA NIKAR 线下体验店建成门头" />
              <figcaption><span>02</span> 门店建成实景 / BUILT</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="tourism-strategy case-detail-section" id="lanikar-strategy">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>BRAND & OPERATION / 品牌运营策略</p></div>
          <div className="built-gallery-heading">
            <h2>一套空间，同时服务品牌识别、商品销售与内容生产。</h2>
            <p>门店体验不止发生在现场，也会通过直播、短视频与社交传播继续延伸；设计因此同时考虑顾客、商品、镜头和运营团队。</p>
          </div>
          <div className="tourism-strategy-grid">
            {retailPoints.map((point) => (
              <article key={point.number}>
                <div><span>{point.number}</span><small>{point.en}</small></div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lanikar-renders case-detail-section" id="lanikar-renders">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>DESIGN VISUALIZATION / 方案效果</p></div>
          <div className="drawing-heading">
            <h2>用清晰的空间画面确认品牌尺度、陈列秩序与直播场景。</h2>
            <p>效果图围绕门头识别、入口通透性、中心体验区、品牌墙和内容拍摄背景展开，为方案讨论与落地校准提供直观依据。</p>
          </div>
          <div className="lanikar-render-grid">
            {lanikarRenders.map((image) => (
              <figure className={image.wide ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="lanikar-built">
        <div className="section-frame">
          <div className="case-section-label light"><span>04</span><p>BUILT & OPERATING / 建成与运营实景</p></div>
          <div className="built-gallery-heading">
            <h2>空间落地之后，继续参与陈列、拍摄与品牌运营。</h2>
            <p>门头、商品墙与直播拍摄现场共同说明：设计不仅完成视觉呈现，也为品牌持续上新、内容制作和顾客触达提供真实场景。</p>
          </div>
          <div className="built-photo-grid lanikar-built-grid">
            {lanikarBuilt.map((image) => (
              <figure className={image.wide ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="lanikar-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>05</span><p>DESIGN DELIVERY / 设计图纸</p></div>
          <div className="drawing-heading">
            <h2>把零售与直播需求落实到平面、电气、灯光和界面节点。</h2>
            <p>图纸覆盖空间布置、直播区、展示区、灯具电源、开关控制、品牌墙和软膜灯箱大样，建立从方案表达进入施工协同的技术链路。</p>
          </div>
          <div className="drawing-grid">
            {lanikarDrawings.map((drawing) => (
              <figure key={drawing.src}>
                <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                <figcaption>{drawing.label}</figcaption>
              </figure>
            ))}
          </div>
          <CaseNavigation current="lanikar" />
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
      huangtian: {
        title: '黄田文化馆｜安桐空间设计作品集',
        description: '以尊古不复古与新旧共生为核心，呈现黄田文化馆从旧房活化、文旅展览、夜景光影到村庄文农旅规划的完整实践。',
        image: '/images/huangtian/model.jpg',
      },
      sanxun: {
        title: '三旬火塘民谣小酒馆｜安桐空间设计作品集',
        description: '面向连锁品牌的商业空间设计：以火塘舞台、民谣演艺、吧台与客席动线，协同品牌识别、消费体验与门店运营。',
        image: '/images/sanxun/stage-wide.jpg',
      },
      lanikar: {
        title: 'LA NIKAR 线下体验店｜安桐空间设计作品集',
        description: '面向新潮连锁服装品牌的商业空间设计：整合零售陈列、顾客体验、直播拍摄与品牌运营。',
        image: '/images/lanikar/render-facade.jpg',
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

  if (activeCase === 'huangtian') {
    return <HuangtianCasePage />
  }

  if (activeCase === 'sanxun') {
    return <SanxunCasePage />
  }

  if (activeCase === 'lanikar') {
    return <LanikarCasePage />
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
                <strong>13</strong><span>PROJECT INDEX<br />05 FEATURED CASES</span>
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
                        <div className="case-link-copy">
                          <strong>查看完整案例</strong>
                          <span>VIEW FULL CASE</span>
                          <p>进入项目详情，查看效果与建成对照、实景空间及技术图纸。</p>
                        </div>
                        <span className="case-link-icon"><ArrowUpRight size={30} strokeWidth={2} aria-hidden="true" /></span>
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

            <TulanduoShowcase />

            <div className="project-archive">
              <div className="archive-heading">
                <div>
                  <span>PROJECT ARCHIVE / 07—13</span>
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
              <div><span>NEXT / 下一步</span><h3>5 个重点案例，持续扩展完整作品档案。</h3></div>
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
