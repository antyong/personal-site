import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Box,
  DraftingCompass,
  Grid2X2,
  Mail,
  Phone,
  ScanLine,
  X,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import 'pannellum/build/pannellum.css'
import 'pannellum/build/pannellum.js'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '20', unit: '+', label: '累计参与项目' },
  { value: '07', unit: '', label: '主导项目' },
  { value: '14', unit: '', label: '落地项目' },
  { value: '03', unit: '', label: '在施工项目' },
]

const experience = [
  {
    period: '2023.09—2026.05',
    place: '福建福大建筑规划设计研究院有限公司',
    role: '设计师',
    detail: '专注文旅更新、精品民宿酒店、特色餐饮酒馆、服饰零售等商业空间设计；统筹在地调研、业态策划、方案创作到施工图深化及现场落地，擅长打造文化沉浸式商业场景。',
  },
  {
    period: '2022.07—2023.07',
    place: '青岛市城市建设设计研究院有限公司',
    role: '设计师助理',
    detail: '参与公共建筑与文旅商业空间设计，完成方案文本、图纸绘制、规范校核及项目报建，熟悉项目全流程落地管控。',
  },
]

const education = [
  { period: '2023.09—2026.06', school: '福州大学', major: '建筑学 / 硕士研究生', detail: '研究历史建筑数字化保护与文化商业空间更新；掌握三维点云古建测绘技术，结合 AI 完成福建木结构古建筑病害检测修缮研究，相关论文已发表。' },
  { period: '2018.09—2023.06', school: '济南大学', major: '设计学 / 本科', detail: '深耕室内外一体化空间叙事、文旅与商业场景营造设计。' },
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
    image: '/images/guangping/built-entrance.jpg',
    gallery: [
      { src: '/images/guangping/built-entrance.jpg', label: '建成入口 / BUILT', alt: '广平村孝文化长廊建成入口' },
      { src: '/images/guangping/built-corridor-portrait.jpg', label: '廊道空间 / CORRIDOR', alt: '广平村孝文化长廊内部空间' },
      { src: '/images/guangping/built-aerial.jpg', label: '建成航拍 / AERIAL', alt: '广平村孝文化长廊建成航拍' },
      { src: '/images/guangping/built-facade.jpg', label: '建成立面 / FACADE', alt: '广平村孝文化长廊木构立面实景' },
    ],
    href: '/?case=guangping',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 02',
    title: '坂头村文旅商业活化设计',
    location: '福建 · 政和',
    year: '2024—2025',
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
    title: '黄田文化空间',
    location: '福建 · 平和',
    year: '2023 / 已建成',
    summary: '以“尊古不复古”为核心，将坍塌古民居更新为兼具文旅展示、社区交流与夜间活动能力的文化空间，并把单体改造纳入黄田村文农旅发展规划。',
    role: '核心设计参与',
    focus: '旧房活化 / 文旅展览 / 夜景光影 / 舞美延展',
    output: '规划 / 方案 / 模型 / 渲染 / 施工图 / 落地',
    image: '/images/huangtian/built-03.jpg',
    gallery: [
      { src: '/images/huangtian/built-03.jpg', label: '建成实景 / BUILT', alt: '黄田文化馆木构与夯土墙建成实景' },
      { src: '/images/huangtian/built-01.jpg', label: '入口界面 / ENTRY', alt: '黄田文化馆入口与灰砖花墙建成实景' },
      { src: '/images/huangtian/night-02.jpg', label: '夜景光影 / NIGHT', alt: '黄田文化馆夜间光影空间' },
      { src: '/images/huangtian/built-04.jpg', label: '木构细部 / DETAIL', alt: '黄田文化馆层叠瓦檐与木构细部' },
    ],
    href: '/?case=huangtian',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 04',
    title: '石兰古村文旅活化改造设计',
    location: '福建 · 福鼎',
    year: '2025 / 在建',
    summary: '以传统石厝保护与再生为底线，统筹古村保护、民宿旅居、文化展厅与业态导入；通过总体规划锁定文旅路径与功能节点，再以民居修缮、木构更新和展厅空间完成局部落地。',
    role: '项目主导',
    focus: '文旅规划 / 古建修缮 / 民宿活化 / 展陈空间',
    output: '调研 / 总体规划 / 方案 / 效果图 / 施工图 / 现场配合',
    image: '/images/shilan/tourism-render-01.jpg',
    gallery: [
      { src: '/images/shilan/tourism-render-01.jpg', label: '古村规划 / MASTERPLAN', alt: '石兰村古村保护与活化总体效果图' },
      { src: '/images/shilan/homestay-built-01.jpg', label: '民宿修缮 / BUILT', alt: '石兰村民宿修缮建成实景' },
      { src: '/images/shilan/exhibition-built-01.jpg', label: '文化展厅 / EXHIBITION', alt: '石兰村文化展厅建成外观' },
      { src: '/images/shilan/homestay-interior-01.jpg', label: '民宿室内 / INTERIOR', alt: '石兰村民宿改造室内空间效果图' },
    ],
    href: '/?case=shilan',
    ready: true,
    className: 'case-reverse',
  },
  {
    number: 'CASE 05',
    title: '日照城市规划展厅室内空间设计',
    location: '山东 · 日照',
    year: '2023—2024 / 已落地',
    summary: '以环形中庭、城市沙盘与巨型影像屏为视觉核心，在极简素雅的空间基底中组织人流动线、政务接待与公众观展两种使用场景，兼顾落地窗采光和结构柱网对视线的影响。',
    role: '核心设计参与',
    focus: '展厅展馆 / 动线组织 / 公共展示',
    output: '建模 / 效果表达 / 部分施工图 / 落地',
    image: '/images/rizhao/IMG_20240228_160422.webp',
    gallery: [
      { src: '/images/rizhao/IMG_20240228_160422.webp', label: '环形中庭 / ATRIUM', alt: '日照城市规划展厅环形中庭与城市沙盘实景' },
      { src: '/images/rizhao/IMG_20240228_160359.webp', label: '沙盘与大屏 / MODEL + SCREEN', alt: '日照城市规划展厅城市沙盘与巨型大屏实景' },
      { src: '/images/rizhao/concept-01.webp', label: '方案效果 / CONCEPT', alt: '日照城市规划展厅方案效果图' },
      { src: '/images/rizhao/9a693725876ca44be93f3347c02c57db.webp', label: '施工图纸 / DRAWING', alt: '日照城市规划展厅平面施工图' },
    ],
    href: '/?case=rizhao',
    ready: true,
    className: '',
  },
  {
    number: 'CASE 06',
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
    number: 'CASE 07',
    title: 'LA NIKAR 线下体验店',
    location: '新潮服装品牌 · 商业空间',
    year: '已建成 / 运营中',
    summary: '以轻盈、前卫的品牌视觉重组零售陈列、顾客社交与内容生产场景，并将直播空间、拍摄背景和运营动线纳入门店系统，让线下体验直接服务品牌传播与销售转化。',
    role: '核心设计参与',
    focus: '品牌体验 / 零售陈列 / 直播运营',
    output: '方案讨论 / 效果图 / 部分施工图 / 落地',
    image: '/images/lanikar/built-facade.jpg',
    gallery: [
      { src: '/images/lanikar/built-facade.jpg', label: '建成门店 / BUILT', alt: 'LA NIKAR 服装品牌线下体验店建成实景' },
      { src: '/images/lanikar/built-live-studio.jpg', label: '内容拍摄 / LIVE STUDIO', alt: 'LA NIKAR 门店直播与内容拍摄场景' },
      { src: '/images/lanikar/built-merchandise.jpg', label: '商品陈列 / RETAIL', alt: 'LA NIKAR 线下体验店商品陈列实景' },
      { src: '/images/lanikar/render-lounge.jpg', label: '空间效果 / LOUNGE', alt: 'LA NIKAR 线下体验店会客区与零售空间效果图' },
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

const fengyuGroups = [
  {
    key: 'corridor',
    label: '景观长廊实景',
    en: 'BUILT CORRIDOR',
    images: [
      { src: '/images/fengyu/corridor-overview.jpg', alt: '丰余村景观长廊建成全景' },
      { src: '/images/fengyu/corridor-roof.jpg', alt: '丰余村景观长廊层叠瓦屋面' },
      { src: '/images/fengyu/corridor-hillside.jpg', alt: '丰余村景观长廊靠山侧建成实景' },
      { src: '/images/fengyu/corridor-structure.jpg', alt: '丰余村景观长廊木构施工完成实景' },
      { src: '/images/fengyu/corridor-interior.jpg', alt: '丰余村景观长廊内部木构与座椅' },
      { src: '/images/fengyu/corridor-entry.jpg', alt: '丰余村景观长廊入口及卵石墙' },
    ],
  },
  {
    key: 'facade',
    label: '立面空间实景',
    en: 'FACADE RENEWAL',
    images: [
      { src: '/images/fengyu/facade-street.jpg', alt: '丰余村沿街建筑立面整治实景' },
      { src: '/images/fengyu/facade-timber.jpg', alt: '丰余村木构立面与格栅实景' },
      { src: '/images/fengyu/facade-earth.jpg', alt: '丰余村夯土立面与木构檐口实景' },
    ],
  },
  {
    key: 'drawing',
    label: '立面整治图纸',
    en: 'FACADE DRAWINGS',
    images: [
      { src: '/images/fengyu/facade-detail-01.jpg', alt: '丰余村立面整治木构节点大样图一' },
      { src: '/images/fengyu/facade-detail-02.jpg', alt: '丰余村立面整治屋面与梁柱节点图' },
      { src: '/images/fengyu/facade-elevation-01.jpg', alt: '丰余村一号建筑立面整治正立面图' },
      { src: '/images/fengyu/facade-elevation-02.jpg', alt: '丰余村一号建筑立面整治侧立面图' },
    ],
  },
  {
    key: 'drawing',
    label: '长廊施工图纸',
    en: 'CORRIDOR DRAWINGS',
    images: [
      { src: '/images/fengyu/corridor-plan.jpg', alt: '丰余村景观长廊平面图' },
      { src: '/images/fengyu/corridor-section.jpg', alt: '丰余村景观长廊轴线立面图' },
      { src: '/images/fengyu/corridor-detail-01.jpg', alt: '丰余村景观长廊梁柱连接节点大样图一' },
      { src: '/images/fengyu/corridor-detail-02.jpg', alt: '丰余村景观长廊梁柱连接节点大样图二' },
    ],
  },
]

const likeGroups = [
  {
    key: 'built',
    label: '民宿建成实景',
    en: 'BUILT HOMESTAY',
    images: [
      { src: '/images/like/built-corridor.jpg', alt: '李窠村乡村民宿建成木构立面与外廊' },
      { src: '/images/like/built-entry.jpg', alt: '李窠村乡村民宿建成入口与二层增建体量' },
    ],
  },
  {
    key: 'existing',
    label: '旧房改造原址',
    en: 'EXISTING CONDITION',
    images: [
      { src: '/images/like/existing-condition.jpg', alt: '李窠村民宿改造前的原建筑、村道与航拍原址综合对比图' },
    ],
  },
  {
    key: 'drawing',
    label: '施工深化图纸',
    en: 'DESIGN DELIVERY',
    images: [
      { src: '/images/like/drawing-timber-detail.jpg', alt: '李窠村民宿加建木构节点大样图' },
      { src: '/images/like/drawing-timber-elevation.jpg', alt: '李窠村民宿加建木构构造立面图' },
      { src: '/images/like/drawing-elevations.jpg', alt: '李窠村民宿建筑立面整治图' },
      { src: '/images/like/drawing-south-elevation.jpg', alt: '李窠村民宿南立面施工图' },
      { src: '/images/like/drawing-second-plan.jpg', alt: '李窠村民宿二层平面图' },
      { src: '/images/like/drawing-first-plan.jpg', alt: '李窠村民宿首层平面图' },
    ],
  },
]

const xiuqiaoGroups = [
  {
    key: 'overview',
    label: '建筑效果',
    en: 'ARCHITECTURAL VISION',
    images: [
      { src: '/images/xiuqiao/hero-exterior-01.webp', alt: '秀峤村民宿与文旅活动中心建筑整体效果图' },
      { src: '/images/xiuqiao/hero-exterior-02.webp', alt: '秀峤村民宿与文旅活动中心鸟瞰效果图' },
      { src: '/images/xiuqiao/hero-exterior-03.webp', alt: '秀峤村滨水木构建筑群效果图' },
    ],
  },
  {
    key: 'homestay',
    label: '民宿空间',
    en: 'HOMESTAY INTERIOR',
    images: [
      { src: '/images/xiuqiao/homestay-interior-01.webp', alt: '民宿客房木构屋顶与床榻空间参考' },
      { src: '/images/xiuqiao/homestay-interior-02.webp', alt: '民宿保留梁架的起居空间参考' },
      { src: '/images/xiuqiao/homestay-interior-03.webp', alt: '民宿客房暖色室内氛围参考' },
      { src: '/images/xiuqiao/homestay-interior-04.webp', alt: '民宿保留木柱的客房空间参考' },
    ],
  },
  {
    key: 'activity',
    label: '活动中心',
    en: 'ACTIVITY CENTRE',
    images: [
      { src: '/images/xiuqiao/activity-space-01.webp', alt: '文旅活动中心公共休憩空间参考' },
      { src: '/images/xiuqiao/activity-space-02.webp', alt: '文旅活动中心公共长桌空间参考' },
      { src: '/images/xiuqiao/activity-space-03.webp', alt: '文旅活动中心木构公共大厅空间参考' },
    ],
  },
  {
    key: 'drawings',
    label: '施工图纸',
    en: 'TECHNICAL DRAWINGS',
    images: [
      { src: '/images/xiuqiao/activity-drawing-01.webp', alt: '文旅活动中心一层平面施工图' },
      { src: '/images/xiuqiao/activity-drawing-02.webp', alt: '文旅活动中心立面施工图' },
      { src: '/images/xiuqiao/activity-drawing-03.webp', alt: '文旅活动中心木构节点施工图' },
      { src: '/images/xiuqiao/activity-drawing-04.webp', alt: '文旅活动中心滨水步道平面施工图' },
      { src: '/images/xiuqiao/homestay-drawing-01.webp', alt: '民宿地面铺装构造施工图' },
      { src: '/images/xiuqiao/homestay-drawing-02.webp', alt: '民宿二层平面施工图' },
      { src: '/images/xiuqiao/homestay-drawing-03.webp', alt: '民宿立面施工图' },
      { src: '/images/xiuqiao/homestay-drawing-04.webp', alt: '民宿剖面施工图' },
    ],
  },
  {
    key: 'site',
    label: '在建记录',
    en: 'SITE PROGRESS',
    images: [
      { src: '/images/xiuqiao/site-01.webp', alt: '秀峤村文旅项目滨水场地施工现场' },
      { src: '/images/xiuqiao/site-02.webp', alt: '秀峤村民宿木构走廊施工现场' },
      { src: '/images/xiuqiao/site-03.webp', alt: '秀峤村民宿原木梁柱与夯土墙施工现场' },
      { src: '/images/xiuqiao/site-04.webp', alt: '秀峤村民宿竹编隔墙施工现场' },
    ],
  },
]

const sishuGroups = [
  {
    key: 'space',
    label: '空间实景',
    en: 'BUILT CULTURAL SPACE',
    images: [
      { src: '/images/sishu/space-01.webp', alt: '私塾馆分层夯土墙与公共活动空间实景' },
      { src: '/images/sishu/space-02.webp', alt: '私塾馆木门与竹构院落空间实景' },
      { src: '/images/sishu/space-03.webp', alt: '私塾馆分层夯土与木饰面空间实景' },
      { src: '/images/sishu/space-04.webp', alt: '私塾馆青瓦木构院落空间实景' },
      { src: '/images/sishu/space-05.webp', alt: '私塾馆青砖透砌墙与夯土走廊实景' },
      { src: '/images/sishu/space-06.webp', alt: '私塾馆竹木屏风与旧屋架实景' },
      { src: '/images/sishu/space-07.webp', alt: '私塾馆夯土院墙与木构檐下活动实景' },
      { src: '/images/sishu/space-08.webp', alt: '私塾馆不同色阶夯土肌理实景' },
    ],
  },
  {
    key: 'drawings',
    label: '施工图纸',
    en: 'TECHNICAL DRAWINGS',
    images: [
      { src: '/images/sishu/drawing-01.webp', alt: '私塾馆二层平面大样施工图' },
      { src: '/images/sishu/drawing-02.webp', alt: '私塾馆一层灯具布置施工图' },
      { src: '/images/sishu/drawing-03.webp', alt: '私塾馆卫生间给排水大样施工图' },
      { src: '/images/sishu/drawing-04.webp', alt: '私塾馆一层平面施工图' },
      { src: '/images/sishu/drawing-05.webp', alt: '私塾馆剖面施工图' },
      { src: '/images/sishu/drawing-06.webp', alt: '私塾馆立面施工图' },
    ],
  },
]

const robinhoodGroups = [
  {
    key: 'panorama',
    label: '360° 全景',
    en: 'INTERACTIVE PANORAMA',
    panorama: true,
    images: [
      { src: '/images/robinhood/panorama-01.webp', alt: '罗宾汉连锁服装门店室内360度全景效果图' },
    ],
  },
  {
    key: 'render',
    label: '门店效果',
    en: 'STOREFRONT RENDER',
    images: [
      { src: '/images/robinhood/render-facade.webp', alt: '罗宾汉连锁服装门店外立面效果图' },
    ],
  },
  {
    key: 'built',
    label: '落地实拍',
    en: 'BUILT STORE',
    images: [
      { src: '/images/robinhood/built-facade.webp', alt: '罗宾汉连锁服装门店建成实拍' },
    ],
  },
  {
    key: 'drawings',
    label: '施工图纸',
    en: 'TECHNICAL DRAWINGS',
    images: [
      { src: '/images/robinhood/drawing-plan.webp', alt: '罗宾汉门店平面尺寸图' },
      { src: '/images/robinhood/drawing-switch.webp', alt: '罗宾汉门店开关布置图' },
      { src: '/images/robinhood/drawing-elevation.webp', alt: '罗宾汉门店衣架立面图' },
      { src: '/images/robinhood/drawing-display-detail.webp', alt: '罗宾汉门店展台节点大样图' },
      { src: '/images/robinhood/drawing-cashier-detail.webp', alt: '罗宾汉门店收银台节点大样图' },
    ],
  },
]

const fanhuayinGroups = [
  {
    key: 'panorama',
    label: '360° 全景',
    en: 'INTERACTIVE PANORAMA',
    panorama: true,
    images: [
      { src: '/images/fanhuayin/panorama-01.webp', alt: '繁花吟珠宝门店室内360度全景效果图' },
    ],
  },
  {
    key: 'render',
    label: '空间效果',
    en: 'JEWELLERY INTERIOR',
    images: [
      { src: '/images/fanhuayin/render-01.webp', alt: '繁花吟珠宝门店陈列与洽谈空间效果图' },
      { src: '/images/fanhuayin/render-02.webp', alt: '繁花吟珠宝门店中岛陈列空间效果图' },
      { src: '/images/fanhuayin/render-03.webp', alt: '繁花吟珠宝门店洽谈桌与旋梯空间效果图' },
      { src: '/images/fanhuayin/render-04.webp', alt: '繁花吟珠宝门店环形珠宝陈列空间效果图' },
      { src: '/images/fanhuayin/render-05.webp', alt: '繁花吟珠宝门店饰品陈列墙效果图' },
      { src: '/images/fanhuayin/render-06.webp', alt: '繁花吟珠宝门店首层陈列空间效果图' },
      { src: '/images/fanhuayin/render-07.webp', alt: '繁花吟珠宝门店休息与陈列空间效果图' },
    ],
  },
  {
    key: 'drawings',
    label: '施工图纸',
    en: 'TECHNICAL DRAWINGS',
    images: [
      { src: '/images/fanhuayin/drawing-plan-01.webp', alt: '繁花吟珠宝门店一层平面尺寸图' },
      { src: '/images/fanhuayin/drawing-plan-02.webp', alt: '繁花吟珠宝门店一层灯具定位图' },
      { src: '/images/fanhuayin/drawing-plan-03.webp', alt: '繁花吟珠宝门店一层照明控制图' },
      { src: '/images/fanhuayin/drawing-plan-04.webp', alt: '繁花吟珠宝门店二层平面尺寸图' },
      { src: '/images/fanhuayin/drawing-elevation-01.webp', alt: '繁花吟珠宝门店立面施工图' },
      { src: '/images/fanhuayin/drawing-detail-01.webp', alt: '繁花吟珠宝门店钢结构大样图' },
    ],
  },
]

const nailsalonGroups = [
  {
    key: 'panorama',
    label: '360° 全景',
    en: 'INTERACTIVE PANORAMA',
    panorama: true,
    images: [
      { src: '/images/nailsalon/panorama-01.webp', alt: '美甲店甜品复合空间360度全景效果图' },
    ],
  },
  {
    key: 'render',
    label: '空间效果',
    en: 'SPACE VISUALS',
    images: [
      { src: '/images/nailsalon/render-01.webp', alt: '美甲店服务区空间效果图' },
      { src: '/images/nailsalon/render-02.webp', alt: '美甲店等候与服务区空间效果图' },
      { src: '/images/nailsalon/render-03.webp', alt: '美甲店服务动线空间效果图' },
      { src: '/images/nailsalon/render-04.webp', alt: '美甲店门头效果图' },
    ],
  },
  {
    key: 'drawings',
    label: '施工图纸',
    en: 'TECHNICAL DRAWINGS',
    images: [
      { src: '/images/nailsalon/drawing-plan-01.webp', alt: '美甲店平面尺寸图' },
      { src: '/images/nailsalon/drawing-plan-02.webp', alt: '美甲店平面布置图' },
      { src: '/images/nailsalon/drawing-plan-03.webp', alt: '美甲店天花放线图' },
      { src: '/images/nailsalon/drawing-plan-04.webp', alt: '美甲店开关示意图' },
      { src: '/images/nailsalon/drawing-elevation-01.webp', alt: '美甲店隔断立面图A-2' },
      { src: '/images/nailsalon/drawing-elevation-02.webp', alt: '美甲店隔断立面图D-1' },
    ],
  },
]

const liveFashionGroups = [
  {
    key: 'panorama',
    label: '360° 全景',
    en: 'INTERACTIVE PANORAMA',
    panorama: true,
    images: [
      { src: '/images/live-fashion/panorama-01.webp', alt: '服装品牌直播展示空间360度全景效果图' },
    ],
  },
  {
    key: 'render',
    label: '空间效果',
    en: 'SPACE VISUALS',
    images: [
      { src: '/images/live-fashion/render-01.webp', alt: '服装品牌直播展示空间效果图一' },
      { src: '/images/live-fashion/render-02.webp', alt: '服装品牌直播展示空间效果图二' },
      { src: '/images/live-fashion/render-03.webp', alt: '服装品牌直播展示空间效果图三' },
      { src: '/images/live-fashion/render-04.webp', alt: '服装品牌直播展示空间效果图四' },
    ],
  },
  {
    key: 'layout',
    label: '空间布局',
    en: 'SPATIAL LAYOUT',
    images: [
      { src: '/images/live-fashion/layout-01.webp', alt: '服装品牌直播展示空间布局图' },
    ],
  },
]

const disneyLiveGroups = [
  {
    key: 'panorama',
    label: '360° 全景',
    en: 'INTERACTIVE PANORAMA',
    panorama: true,
    images: [
      { src: '/images/disney-live/panorama-01.webp', alt: '迪士尼家纺直播展示空间360度全景效果图' },
    ],
  },
  {
    key: 'render',
    label: '空间效果',
    en: 'SPACE VISUALS',
    images: [
      { src: '/images/disney-live/render-01.webp', alt: '迪士尼家纺直播展示空间效果图一' },
      { src: '/images/disney-live/render-02.webp', alt: '迪士尼家纺卧室场景效果图' },
      { src: '/images/disney-live/render-03.webp', alt: '迪士尼家纺直播画面模拟图' },
      { src: '/images/disney-live/render-04.webp', alt: '迪士尼家纺直播场景效果图' },
    ],
  },
  {
    key: 'layout',
    label: '空间布局',
    en: 'SPATIAL LAYOUT',
    images: [
      { src: '/images/disney-live/layout-01.webp', alt: '迪士尼家纺直播展示空间布局图' },
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
  { src: '/images/guangping/built-aerial.jpg', label: '01 / 建成航拍', alt: '孝文化长廊及周边村落建成航拍', wide: true },
  { src: '/images/guangping/built-entrance.jpg', label: '02 / 入口与木构节点', alt: '孝文化长廊入口和木构节点' },
  { src: '/images/guangping/built-overview.jpg', label: '03 / 村落中的连续屋面', alt: '孝文化长廊连续坡屋面实景' },
  { src: '/images/guangping/built-street.jpg', label: '04 / 街巷界面', alt: '孝文化长廊沿街建成实景' },
  { src: '/images/guangping/built-facade.jpg', label: '05 / 廊道立面', alt: '孝文化长廊木构立面实景' },
  { src: '/images/guangping/built-pavilion.jpg', label: '06 / 停留节点', alt: '孝文化长廊亭廊停留节点' },
  { src: '/images/guangping/built-corridor-portrait.jpg', label: '08 / 廊下体验', alt: '孝文化长廊纵深空间体验' },
  { src: '/images/guangping/built-corridor-wide.jpg', label: '07 / 空间序列', alt: '孝文化长廊横向空间序列', wide: true },
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
  { src: '/images/huangtian/built-04.jpg', label: '04 / 层叠瓦檐与木构细部', alt: '黄田文化馆层叠瓦檐与现代优化木构细部', wide: true, feature: true },
  { src: '/images/huangtian/built-05.jpg', label: '05 / 展览空间外廊', alt: '黄田文化馆展览空间外廊与小青瓦构造', portrait: true },
  { src: '/images/huangtian/built-06.jpg', label: '06 / 社区交流路径', alt: '黄田文化馆连接展览与社区交流空间的院落路径', portrait: true },
]

const huangtianDrawings = [
  { src: '/images/huangtian/drawing-01.jpg', label: '01 / 建筑总平面布置', alt: '黄田文化馆建筑总平面布置图' },
  { src: '/images/huangtian/drawing-02.jpg', label: '02 / 东南立面与檩条尺寸', alt: '黄田文化馆东南立面与木构檩条尺寸图' },
  { src: '/images/huangtian/drawing-03.jpg', label: '03 / 建筑剖面', alt: '黄田文化馆建筑剖面及材料构造说明' },
  { src: '/images/huangtian/drawing-04.jpg', label: '04 / 屋面与檐口节点', alt: '黄田文化馆屋面瓦作与木构檐口节点大样' },
  { src: '/images/huangtian/drawing-05.jpg', label: '05 / 灯光与电路布置', alt: '黄田文化馆室内外灯光与电路布置图' },
  { src: '/images/huangtian/drawing-06.jpg', label: '06 / 木构纵剖面', alt: '黄田文化馆木结构纵剖面深化图' },
]

const shilanTourism = [
  { src: '/images/shilan/tourism-render-01.jpg', label: '01 / 核心古村更新', alt: '石兰村核心古村保护活化总体效果图' },
  { src: '/images/shilan/tourism-render-02.jpg', label: '02 / 文旅业态场景', alt: '石兰村文旅业态与古村环境总体效果图' },
  { src: '/images/shilan/tourism-plan.jpg', label: '03 / 保护发展规划', alt: '石兰村传统村落保护发展规划图' },
]

const shilanHomestayRenders = [
  { src: '/images/shilan/homestay-interior-01.jpg', label: '01 / 石厝客房', alt: '石兰村民宿保留木构的客房室内效果图' },
  { src: '/images/shilan/homestay-interior-02.jpg', label: '02 / 木构睡眠空间', alt: '石兰村民宿木构睡眠空间效果图' },
  { src: '/images/shilan/homestay-render-01.jpg', label: '03 / 院落民宿', alt: '石兰村民宿建筑院落效果图' },
  { src: '/images/shilan/homestay-render-02.jpg', label: '04 / 临水石厝', alt: '石兰村民宿建筑临水效果图' },
]

const shilanHomestayExisting = [
  { src: '/images/shilan/homestay-existing-01.jpg', label: '01 / 修缮前整体原址', alt: '石兰村民宿建筑修缮前原址航拍' },
  { src: '/images/shilan/homestay-existing-02.jpg', label: '02 / 修缮前石厝现状', alt: '石兰村民宿建筑修缮前石厝现状' },
]

const shilanHomestayBuilt = [
  { src: '/images/shilan/homestay-built-01.jpg', label: '01 / 石墙与木构界面', alt: '石兰村民宿修缮后石墙与木构界面' },
  { src: '/images/shilan/homestay-built-02.jpg', label: '02 / 新旧立面衔接', alt: '石兰村民宿修缮后新旧立面衔接' },
  { src: '/images/shilan/homestay-built-03.jpg', label: '03 / 院落灰空间', alt: '石兰村民宿修缮后院落灰空间' },
  { src: '/images/shilan/homestay-built-04.jpg', label: '04 / 木构廊道', alt: '石兰村民宿修缮后木构廊道' },
]

const shilanExhibitionBuilt = [
  { src: '/images/shilan/exhibition-built-01.jpg', label: '01 / 祠堂文化展厅', alt: '石兰村祠堂改造文化展厅建成外观' },
  { src: '/images/shilan/exhibition-built-02.jpg', label: '02 / 保留屋架', alt: '石兰村文化展厅修缮后屋架与栏板' },
]

const shilanExhibitionRenders = [
  { src: '/images/shilan/exhibition-render-01.jpg', label: '01 / 族谱展示', alt: '石兰村文化展厅族谱展示空间效果图' },
  { src: '/images/shilan/exhibition-render-02.jpg', label: '02 / 村史长廊', alt: '石兰村文化展厅村史长廊效果图' },
  { src: '/images/shilan/exhibition-render-03.jpg', label: '03 / 文化陈列', alt: '石兰村文化展厅文化陈列空间效果图' },
  { src: '/images/shilan/exhibition-render-04.jpg', label: '04 / 书画展陈', alt: '石兰村文化展厅书画展陈空间效果图' },
]

const shilanDrawings = [
  { src: '/images/shilan/drawing-plan-01.jpg', label: '01 / 民宿一层平面', alt: '石兰村民宿修缮一层平面图' },
  { src: '/images/shilan/drawing-plan-02.jpg', label: '02 / 展厅一层平面', alt: '石兰村文化展厅一层平面图' },
  { src: '/images/shilan/drawing-plan-03.jpg', label: '03 / 展厅二层平面', alt: '石兰村文化展厅二层平面图' },
  { src: '/images/shilan/drawing-elevation-01.jpg', label: '04 / 修缮立面图', alt: '石兰村建筑修缮立面图' },
  { src: '/images/shilan/drawing-section.jpg', label: '05 / 建筑剖面图', alt: '石兰村建筑修缮剖面图' },
  { src: '/images/shilan/drawing-exhibition-plan-01.jpg', label: '06 / 展厅平面深化', alt: '石兰村文化展厅平面深化图' },
  { src: '/images/shilan/drawing-exhibition-plan-02.jpg', label: '07 / 展陈布置图', alt: '石兰村文化展厅展陈布置图' },
  { src: '/images/shilan/drawing-roof-plan.jpg', label: '08 / 屋顶修缮图', alt: '石兰村建筑屋顶修缮图' },
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

const rizhaoConcepts = [
  { src: '/images/rizhao/concept-01.webp', label: '01 / 环形中庭与沙盘核心', alt: '日照城市规划展厅环形中庭、城市沙盘与巨型屏幕方案效果图', wide: true },
  { src: '/images/rizhao/concept-02.webp', label: '02 / 入口与主展厅视线', alt: '日照城市规划展厅入口及主展厅视线关系方案效果图' },
  { src: '/images/rizhao/concept-03.webp', label: '03 / 展示界面与导视', alt: '日照城市规划展厅弧形展示界面方案效果图' },
  { src: '/images/rizhao/concept-04.webp', label: '04 / 环形平面布局', alt: '日照城市规划展厅环形平面布局方案图' },
  { src: '/images/rizhao/concept-05.webp', label: '05 / 展陈空间氛围', alt: '日照城市规划展厅展陈空间方案效果图' },
  { src: '/images/rizhao/concept-06.webp', label: '06 / 弧形展墙空间', alt: '日照城市规划展厅弧形展墙与公共动线方案效果图' },
  { src: '/images/rizhao/concept-07.webp', label: '07 / 城市规划展陈', alt: '日照城市规划展厅城市规划展陈方案效果图' },
  { src: '/images/rizhao/concept-08.webp', label: '08 / 接待与公共服务', alt: '日照城市规划展厅接待与公共服务空间方案效果图' },
  { src: '/images/rizhao/concept-09.webp', label: '09 / 沙盘展示空间', alt: '日照城市规划展厅沙盘展示空间方案效果图' },
]

const rizhaoBuilt = [
  { src: '/images/rizhao/IMG_20240228_160422.webp', label: '01 / 沙盘与巨型大屏', alt: '日照城市规划展厅城市沙盘与巨型大屏建成实景', wide: true },
  { src: '/images/rizhao/IMG_20240228_160359.webp', label: '02 / 中庭主视角', alt: '日照城市规划展厅环形中庭主视角建成实景' },
  { src: '/images/rizhao/IMG_20240228_160549.webp', label: '03 / 环形展厅动线', alt: '日照城市规划展厅环形展厅动线建成实景' },
  { src: '/images/rizhao/IMG_20240228_160912.webp', label: '04 / 天窗与环形灯带', alt: '日照城市规划展厅天窗与环形灯带建成实景', wide: true },
  { src: '/images/rizhao/IMG_20240228_160435.webp', label: '05 / 沙盘边界与采光', alt: '日照城市规划展厅沙盘边界、落地窗与采光建成实景' },
  { src: '/images/rizhao/IMG_20240228_160621.webp', label: '06 / 柱网与服务空间', alt: '日照城市规划展厅柱网与接待服务空间建成实景' },
  { src: '/images/rizhao/IMG_20240228_160633.webp', label: '07 / 接待台与弧形界面', alt: '日照城市规划展厅接待台与弧形界面建成实景' },
  { src: '/images/rizhao/IMG_20240228_160518.webp', label: '08 / 沙盘近景', alt: '日照城市规划展厅城市沙盘近景建成实景', wide: true },
  { src: '/images/rizhao/IMG_20240228_160651.webp', label: '09 / 后勤通道', alt: '日照城市规划展厅后勤通道建成实景' },
]

const rizhaoDrawings = [
  { src: '/images/rizhao/9a693725876ca44be93f3347c02c57db.webp', label: '01 / 一层平面布置图', alt: '日照城市规划展厅一层平面布置施工图' },
  { src: '/images/rizhao/a2ac17819e9e8e757e5a86081ffb4b09.webp', label: '02 / 地面铺装图', alt: '日照城市规划展厅地面铺装施工图' },
  { src: '/images/rizhao/b70ba134141fa61c5cbbfe3ba94cdd26.webp', label: '03 / 展陈布置图', alt: '日照城市规划展厅展陈布置施工图' },
  { src: '/images/rizhao/8ef1a90209cc2c85132eab832b1447e4.webp', label: '04 / 大厅立面图', alt: '日照城市规划展厅大厅立面施工图' },
  { src: '/images/rizhao/58c22fe2c7027a9129290d0bb9068d7d.webp', label: '05 / 儿童区立面图', alt: '日照城市规划展厅儿童区阅读区立面施工图' },
  { src: '/images/rizhao/1562653b9612987ca018dc555d7ccc1d.webp', label: '06 / 走廊与展厅立面', alt: '日照城市规划展厅走廊与展厅立面施工图' },
  { src: '/images/rizhao/ed425e92ea9793b393b9515c757cf44b.webp', label: '07 / 展柜节点大样', alt: '日照城市规划展厅展柜节点施工图' },
  { src: '/images/rizhao/6b97d73f74b6582f2fb63ccd67e5aca9.webp', label: '08 / 墙面与顶面节点', alt: '日照城市规划展厅墙面与顶面节点施工图' },
]

const caseSequence = {
  guangping: {
    previous: { number: '06', title: 'LA NIKAR 线下体验店', href: '/?case=lanikar' },
    next: { number: '02', title: '坂头村文旅商业活化', href: '/?case=bantou' },
  },
  bantou: {
    previous: { number: '01', title: '广平村孝文化长廊', href: '/?case=guangping' },
    next: { number: '03', title: '黄田文化馆', href: '/?case=huangtian' },
  },
  huangtian: {
    previous: { number: '02', title: '坂头村文旅商业活化', href: '/?case=bantou' },
    next: { number: '04', title: '石兰古村文旅活化改造设计', href: '/?case=shilan' },
  },
  shilan: {
    previous: { number: '03', title: '黄田文化馆', href: '/?case=huangtian' },
    next: { number: '05', title: '日照城市规划展厅', href: '/?case=rizhao' },
  },
  rizhao: {
    previous: { number: '04', title: '石兰古村文旅活化改造设计', href: '/?case=shilan' },
    next: { number: '06', title: '三旬火塘民谣小酒馆', href: '/?case=sanxun' },
  },
  sanxun: {
    previous: { number: '05', title: '日照城市规划展厅', href: '/?case=rizhao' },
    next: { number: '07', title: 'LA NIKAR 线下体验店', href: '/?case=lanikar' },
  },
  lanikar: {
    previous: { number: '06', title: '三旬火塘民谣小酒馆', href: '/?case=sanxun' },
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

function SecondaryPanoramaViewer({ panorama }) {
  const viewerElement = useRef(null)

  useEffect(() => {
    if (!viewerElement.current || !window.pannellum) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const viewer = window.pannellum.viewer(viewerElement.current, {
      type: 'equirectangular',
      panorama: panorama.src,
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
  }, [panorama.src])

  return <div className="secondary-case-panorama" ref={viewerElement} aria-label={`${panorama.alt}，360度球型全景`} />
}

function SecondaryCaseShowcase({ id, number, title, label, summary, tags, groups }) {
  const [activeGroup, setActiveGroup] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const group = groups[activeGroup]

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
      <section className="secondary-case-showcase" aria-labelledby={`${id}-title`}>
        <div className="secondary-case-heading">
          <div>
            <span>SECONDARY CASE {number} / {label}</span>
            <h3 id={`${id}-title`}>{title}</h3>
          </div>
          <p>{summary}</p>
          <div className="secondary-case-tags" aria-label="项目关键词">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className={`secondary-case-tabs secondary-case-tabs-${groups.length}`} aria-label={`${title}内容分类`}>
          {groups.map((item, index) => (
            <button
              className={activeGroup === index ? 'active' : ''}
              key={`${item.key}-${index}`}
              onClick={() => openGroup(index)}
              aria-haspopup="dialog"
              aria-controls={`${id}-modal`}
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
          id={`${id}-modal`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-modal-title`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModalOpen(false)
          }}
        >
          <div className="secondary-case-modal-panel">
            <header className="secondary-case-modal-header">
              <div>
                <span>SECONDARY CASE {number} / {label}</span>
                <h4 id={`${id}-modal-title`}>{group.label} / {group.en}</h4>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} aria-label={`关闭${title}案例图集`}>
                <X aria-hidden="true" />
              </button>
            </header>

            {group.panorama ? (
              <div className="secondary-case-modal-body secondary-case-panorama-body">
                <SecondaryPanoramaViewer panorama={group.images[0]} />
                <div className="secondary-case-panorama-note"><span>360° SPHERICAL VIEW</span><span>拖动画面环视空间，滚轮缩放</span></div>
              </div>
            ) : (
              <div className="secondary-case-modal-body">
                <figure className={`secondary-case-main secondary-case-${group.key}`}>
                  <img src={group.images[activeImage].src} alt={group.images[activeImage].alt} />
                  <figcaption>
                    <span>{number}.{activeGroup + 1}.{String(activeImage + 1).padStart(2, '0')}</span>
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
            )}
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
            {guangpingBuilt.map((image) => (
              <figure className={image.wide ? 'wide' : ''} key={image.src}>
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
              <img src="/images/huangtian/built-03.jpg" alt="黄田文化馆更新建成后的木构与夯土墙界面" loading="lazy" />
              <figcaption><span>02</span> 建成现状 / AFTER</figcaption>
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
              <figure className={`${image.wide ? 'wide' : ''} ${image.feature ? 'feature-wide' : ''} ${image.portrait ? 'portrait' : ''}`} key={image.src}>
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
          </figure>
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

function ShilanCasePage() {
  const planningPoints = [
    { number: '01', en: 'PROTECT', title: '石厝保护再生', text: '以传统石厝、瓦屋面、木构架和院落尺度为基础，修缮而非复制，让村落记忆继续成为空间主角。' },
    { number: '02', en: 'STAY', title: '旅居功能植入', text: '以民宿、餐饮和公共活动节点补足旅居体验，使闲置建筑转化为可使用、可停留、可运营的目的地。' },
    { number: '03', en: 'CULTURE', title: '祠堂文化再述', text: '将旧有祠堂转化为文化展厅，以展陈、族谱与村史内容延续集体记忆并服务公共文化活动。' },
    { number: '04', en: 'OPERATE', title: '规划带动业态', text: '从整体游线、核心节点到局部空间，建立可分期实施的文旅系统，以设计持续吸引多元业态。' },
  ]

  return (
    <main className="case-study-page shilan-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#shilan-overview">项目概览</a>
          <a href="#shilan-tourism">整体规划</a>
          <a href="#shilan-homestay">民宿活化</a>
          <a href="#shilan-exhibition">文化展厅</a>
          <a href="#shilan-drawings">技术图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/shilan/tourism-render-01.jpg" alt="石兰村传统古村保护与活化总体效果图" />
          <span>MASTERPLAN RENDER / 古村总体效果</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 04</span> / RURAL CONSERVATION & ACTIVATION</p>
          <h1>石兰古村文旅<br />活化改造设计</h1>
          <div className="case-detail-intro">
            <p>从古村整体保护发展到民宿旅居与祠堂展陈，让石厝、文化和可持续运营在同一套空间系统中重新发生。</p>
            <span>FUJIAN · FUDING<br />2025 / ONGOING</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="shilan-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>以石厝保护为底线，把旅游区整体规划落到可使用的建筑与场景。</h2>
              <p>石兰村项目以渔村传统石厝的保护与再生为核心，通过民居修缮、民宿改造与村文化馆建设，构建“保护 + 旅居 + 康养”三位一体的更新体系。总体规划先梳理资源、游线、节点与业态关系，再将策略落实至民宿客房、院落灰空间和祠堂展厅。</p>
              <p>设计不止于修复建筑外观，而是同时处理保护尺度、空间体验、游客停留与长期运营：保留石墙、木构和瓦屋面形成的场所记忆，以适度增建、动线重组和展陈植入回应当代文旅需求。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>古村保护 / 文旅规划 / 民宿与展厅改造</dd></div>
              <div><dt>项目地点</dt><dd>福建省福鼎市石兰村</dd></div>
              <div><dt>项目时间</dt><dd>2025 / 在建</dd></div>
              <div><dt>个人角色</dt><dd>项目主导</dd></div>
              <div><dt>工作内容</dt><dd>调研 / 总体规划 / 方案 / 效果图 / 施工图 / 现场配合</dd></div>
            </dl>
          </div>
          <div className="concept-built-grid">
            <figure><img src="/images/shilan/tourism-render-02.jpg" alt="石兰村文旅业态与古村整体效果图" loading="lazy" /><figcaption><span>01</span> 整体更新 / MASTERPLAN</figcaption></figure>
            <figure><img src="/images/shilan/homestay-built-01.jpg" alt="石兰村民宿修缮落地实景" loading="lazy" /><figcaption><span>02</span> 局部落地 / BUILT</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="tourism-strategy case-detail-section" id="shilan-tourism">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>TOURISM FRAMEWORK / 整体文旅规划</p></div>
          <div className="built-gallery-heading"><h2>用总体规划建立保护、体验、业态与运营的共同框架。</h2><p>以古村为整体而非孤立单体来组织设计：传统石厝是基底，旅居停留是支撑，文化体验与公共服务共同形成持续吸引人的目的地系统。</p></div>
          <div className="tourism-strategy-grid">
            {planningPoints.map((point) => <article key={point.number}><div><span>{point.number}</span><small>{point.en}</small></div><h3>{point.title}</h3><p>{point.text}</p></article>)}
          </div>
          <div className="concept-built-grid">
            {shilanTourism.slice(0, 2).map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}
          </div>
          <figure className="huangtian-planning-board"><img src="/images/shilan/tourism-plan.jpg" alt="石兰村传统村落保护发展规划图" loading="lazy" /><figcaption>总体保护发展规划 / MASTER PLAN</figcaption></figure>
        </div>
      </section>

      <section className="tourism-programs case-detail-section" id="shilan-homestay">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>HOMESTAY ACTIVATION / 民宿修缮与旅居空间</p></div>
          <div className="drawing-heading"><h2>保留石厝气质，以新功能和清晰动线提升旅居体验。</h2><p>从修缮前的建筑研判到客房、院落和廊道的重组，设计通过新旧材质对照、灰空间串联与可维护的木构细部，让民宿兼具在地体验、舒适性与运营弹性。</p></div>
          <div className="program-list">
            <article className="program-block">
              <div className="program-copy"><div><span>01</span><small>RENDER</small></div><h3>从客房到院落的旅居体验</h3><p>室内保留原有屋架和木构尺度，辅以克制的现代界面；建筑层面通过院落、屋檐和石墙延续古村肌理。</p></div>
              <div className="program-photo-grid program-photo-grid-4">{shilanHomestayRenders.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
            </article>
            <article className="program-block">
              <div className="program-copy"><div><span>02</span><small>BEFORE / AFTER</small></div><h3>从原址研判到建成转化</h3><p>原址的石厝体量、屋面关系和场地高差被保留并重新组织；新的木构廊道、界面与院落路径让抵达、停留和服务动线更加清晰。</p></div>
              <div className="program-photo-grid program-photo-grid-2">{shilanHomestayExisting.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
            </article>
          </div>
          <div className="built-photo-grid huangtian-built-grid">{shilanHomestayBuilt.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="huangtian-lighting case-detail-section" id="shilan-exhibition">
        <div className="section-frame">
          <div className="case-section-label light"><span>04</span><p>CULTURAL EXHIBITION / 祠堂文化展厅</p></div>
          <div className="built-gallery-heading"><h2>让祠堂从静态遗存转为可阅读、可停留的文化展厅。</h2><p>以保留的梁架、屋面和原有空间秩序承载村史、族谱与文化展陈；新增的照明、展柜和行走路径以轻介入的方式强化叙事与观看体验。</p></div>
          <div className="huangtian-night-grid">{shilanExhibitionBuilt.slice(0, 2).map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
          <div className="concept-built-grid">{shilanExhibitionRenders.slice(0, 2).map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
          <div className="lanikar-render-grid">{shilanExhibitionRenders.slice(2).map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.label}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="shilan-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>05</span><p>TECHNICAL DELIVERY / 技术图纸</p></div>
          <div className="drawing-heading"><h2>从总体策略到单体图纸，建立可实施的修缮与活化依据。</h2><p>平面、立面、剖面、屋面与展陈布置图共同呈现从古村级更新到民宿、展厅局部空间的设计控制能力。</p></div>
          <div className="drawing-grid">{shilanDrawings.map((drawing) => <figure key={drawing.src}><img src={drawing.src} alt={drawing.alt} loading="lazy" /><figcaption>{drawing.label}</figcaption></figure>)}</div>
          <CaseNavigation current="shilan" />
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
          <p><span>CASE 05</span> / BRAND COMMERCIAL SPACE</p>
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
          <p><span>CASE 06</span> / BRAND RETAIL EXPERIENCE</p>
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

function RizhaoCasePage() {
  return (
    <main className="case-study-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="案例导航">
          <a href="#rizhao-overview">项目概览</a>
          <a href="#rizhao-concepts">设计效果</a>
          <a href="#rizhao-built">落地实景</a>
          <a href="#rizhao-drawings">施工图纸</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="case-detail-hero" id="case-top">
        <div className="case-detail-hero-media">
          <img src="/images/rizhao/IMG_20240228_160422.webp" alt="日照城市规划展厅环形中庭与城市沙盘建成实景" />
          <span>BUILT SPACE / 落地实景</span>
        </div>
        <div className="case-detail-title frame">
          <a href="/#projects"><ArrowLeft size={20} /> 返回案例目录</a>
          <p><span>CASE 05</span> / PUBLIC EXHIBITION SPACE</p>
          <h1>日照城市规划<br />展厅室内空间设计</h1>
          <div className="case-detail-intro">
            <p>让城市沙盘成为空间的视觉中心，让观展、接待与城市内容在一条连续动线上自然发生。</p>
            <span>SHANDONG · RIZHAO<br />2023—2024 / BUILT</span>
          </div>
        </div>
      </section>

      <section className="case-overview case-detail-section" id="rizhao-overview">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>PROJECT OVERVIEW / 项目概览</p></div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <h2>用一个环形中庭，把城市展示变成可被行走和阅读的空间体验。</h2>
              <p>项目为日照城市规划展厅，属于公共展示类空间。整体以环形中庭、巨型沙盘与大屏为视觉核心，设计以极简素雅的基底收纳展陈内容，让空间成为城市影像与模型的“画布”。</p>
              <p>我主要参与整体空间布局与人流动线设计，负责空间建模及部分施工图绘制；重点处理落地窗采光、大圆柱结构对参观视线的影响，并兼顾政务接待与公众观展两种使用场景。</p>
            </div>
            <dl className="case-meta-list">
              <div><dt>项目类型</dt><dd>公共展示类空间 / 城市规划展厅</dd></div>
              <div><dt>项目地点</dt><dd>山东省日照市学苑路北片区</dd></div>
              <div><dt>项目时间</dt><dd>2023—2024 / 已落地</dd></div>
              <div><dt>个人角色</dt><dd>核心设计参与</dd></div>
              <div><dt>工作内容</dt><dd>建模 / 部分施工图绘制</dd></div>
            </dl>
          </div>
          <div className="concept-built-grid">
            <figure>
              <img src="/images/rizhao/concept-01.webp" alt="日照城市规划展厅环形中庭方案效果图" />
              <figcaption><span>01</span> 设计效果 / CONCEPT</figcaption>
            </figure>
            <figure>
              <img src="/images/rizhao/IMG_20240228_160422.webp" alt="日照城市规划展厅环形中庭建成实景" />
              <figcaption><span>02</span> 建成实景 / BUILT</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="rizhao-concepts">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>DESIGN INTENT / 设计效果</p></div>
          <div className="built-gallery-heading">
            <h2>以环形秩序承载城市内容，让造型退后，让展示成为主角。</h2>
            <p>方案效果图集中呈现中庭核心、弧形展墙、主入口与公共服务空间的关系，展示从空间布局到展陈界面的设计推演。</p>
          </div>
          <div className="built-photo-grid">
            {rizhaoConcepts.map((image) => (
              <figure className={`${image.wide ? 'wide ' : ''}rizhao-concept-image`} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="built-gallery case-detail-section" id="rizhao-built">
        <div className="section-frame">
          <div className="case-section-label light"><span>03</span><p>BUILT WORK / 落地实景</p></div>
          <div className="built-gallery-heading">
            <h2>从效果图到真实空间，环形中庭、沙盘与大屏完成了设计意图的落地。</h2>
            <p>落地照片记录中庭主视角、环形灯带、柱网与落地窗采光，以及服务空间与后勤动线等关键节点。</p>
          </div>
          <div className="built-photo-grid">
            {rizhaoBuilt.map((image) => (
              <figure className={image.wide ? 'wide' : ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="technical-drawings case-detail-section" id="rizhao-drawings">
        <div className="section-frame">
          <div className="case-section-label"><span>04</span><p>TECHNICAL DELIVERY / 技术图纸</p></div>
          <div className="drawing-heading">
            <h2>通过平面、立面与节点图纸，把展厅秩序落实到施工表达。</h2>
            <p>图纸内容覆盖总体平面、环形展陈、走廊与展厅立面，以及展柜、墙面和顶面节点，体现从建模到部分施工图深化的工作链路。</p>
          </div>
          <div className="drawing-grid">
            {rizhaoDrawings.map((drawing) => (
              <figure key={drawing.src}>
                <img src={drawing.src} alt={drawing.alt} loading="lazy" />
                <figcaption>{drawing.label}</figcaption>
              </figure>
            ))}
          </div>
          <CaseNavigation current="rizhao" />
        </div>
      </section>
    </main>
  )
}

function ResearchCasePage() {
  return (
    <main className="case-study-page research-case-page" id="case-content">
      <header className="case-detail-header frame">
        <a className="brand" href="/#top" aria-label="返回作品集首页">AT<span>®</span></a>
        <nav aria-label="研究项目导航">
          <a href="#research-insight">业务洞察</a>
          <a href="#research-architecture">产品架构</a>
          <a href="#research-validation">验证落地</a>
        </nav>
        <a className="contact-link" href="/#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
      </header>

      <section className="research-detail-hero" id="research-top">
        <div className="frame">
          <a className="research-back" href="/#projects"><ArrowLeft size={20} /> 返回作品目录</a>
          <p className="research-kicker">PERSONAL RESEARCH / CROSS-DISCIPLINARY AI PRODUCT</p>
          <h1>古建筑木结构<br />点云智能检测<br />修缮系统</h1>
          <div className="research-detail-lead">
            <p>面向古建筑修缮勘察工程师的 B 端产品原型。以“现场采集—智能分析—国标评估—工程交付”为完整业务链路，将多源技术转译为可执行的修缮决策。</p>
            <dl><div><dt>项目角色</dt><dd>项目负责人 / 产品方案主导</dd></div><div><dt>技术融合</dt><dd>点云采集 / AI / 几何算法 / 文保国标</dd></div></dl>
          </div>
        </div>
        <figure className="research-detail-hero-image">
          <img src="/images/research/heritage-pointcloud.webp" alt="大田琵琶堡与永盛梁氏宗祠三维点云扫描成果" />
          <figcaption>REAL-WORLD TEST CASES / 大田琵琶堡 · 永盛梁氏宗祠</figcaption>
        </figure>
      </section>

      <section className="research-detail-section research-insight-section" id="research-insight">
        <div className="section-frame">
          <div className="case-section-label"><span>01</span><p>BUSINESS INSIGHT / 业务洞察与需求定义</p></div>
          <div className="research-detail-heading">
            <h2>不是做一个“识别模型”，而是重构古建筑修缮的检测与决策流程。</h2>
            <p>用户是古建筑修缮勘察工程师与文保项目负责人。产品从源头采集质量出发，将模糊、依赖经验的勘测诉求拆解为可输入、可计算、可评估、可交付的系统能力。</p>
          </div>
          <div className="research-pain-grid">
            <article><span>01</span><h3>采集源头失控</h3><p>空间狭窄、构件遮挡与非接触约束容易造成漏扫和密度不均，原始点云不合格会直接使后续分析失效。</p></article>
            <article><span>02</span><h3>人工判断难量化</h3><p>倾斜、挠度与隐蔽位置依赖人工经验，缺少统一量化标准，也难以覆盖高危节点。</p></article>
            <article><span>03</span><h3>技术与业务脱节</h3><p>通用模型无法适配复杂古建；分类点云也不能直接转换为残损等级、修缮建议和工程图纸。</p></article>
          </div>
          <div className="research-demand-strip"><span>采集层：标准化作业与质检</span><span>能力层：柱 / 墙 / 梁枋识别</span><span>计算层：尺寸、倾斜、挠度</span><span>规则层：国标风险与修缮</span><span>交付层：报告、图纸与安全结论</span></div>
        </div>
      </section>

      <section className="research-detail-section research-architecture-section" id="research-architecture">
        <div className="section-frame">
          <div className="case-section-label light"><span>02</span><p>PRODUCT ARCHITECTURE / 端到端产品架构</p></div>
          <div className="research-detail-heading light">
            <h2>用六个模块，把现场原始数据变成工程师能够直接使用的依据。</h2>
            <p>我负责定义各模块的目标、输入、输出与业务约束，评估技术组合与能力边界；AI 语义分割只作为中间能力，不直接作为最终产品交付。</p>
          </div>
          <ol className="research-detail-flow">
            <li><b>01</b><strong>外业采集</strong><span>分区扫描、正面扫描与侧面补扫；定义距离、分辨率、重叠率和补扫规则。</span></li>
            <li><b>02</b><strong>点云预处理</strong><span>ICP 配准、非本体剔除、滤波去噪、体素下采样与坐标归一化。</span></li>
            <li><b>03</b><strong>AI 语义分割</strong><span>基于 RandLA-Net 识别柱、墙、梁枋；以类别权重、数据增强和交叉验证处理古建数据差异。</span></li>
            <li><b>04</b><strong>几何后处理</strong><span>DBSCAN、RANSAC、PCA、KDE 组合为构件处理链路，提取尺寸、倾斜、挠度等参数。</span></li>
            <li><b>05</b><strong>国标规则引擎</strong><span>依据 GB/T 50165-2020，将数值映射为残损等级、风险提示与修缮建议。</span></li>
            <li><b>06</b><strong>工程交付物</strong><span>输出质检报告、参数表、风险标注图、补充 CAD 图与整体安全评估报告。</span></li>
          </ol>
          <div className="research-detail-images">
            <figure><img src="/images/research/semantic-dataset.webp" alt="福建古建筑点云语义数据集" loading="lazy" /><figcaption><b>数据集建设</b>完成 9 座福建古建筑的点云采集与标注，建立场景专用训练与测试数据集。</figcaption></figure>
            <figure><img src="/images/research/wall-segmentation.webp" alt="墙体点云分割过程" loading="lazy" /><figcaption><b>能力边界</b>AI 输出为粗分割点云，仍需通过独立几何后处理得到可用于修缮的物理参数。</figcaption></figure>
          </div>
          <div className="research-component-grid">
            <article><h3>木柱</h3><p>实例提纯 → 粗拟合 → 点云补全 → 精拟合</p><span>直径 / 高度 / 倾斜角 / 柱头偏移 / 无支高度</span></article>
            <article><h3>墙体</h3><p>降噪与墙地分离 → 双约束聚类 → 单体拆分</p><span>尺寸 / 倾斜角 / 偏移量</span></article>
            <article><h3>梁枋</h3><p>连通域拆分 → 全局方向识别 → 高度分层 → 曲线拟合</p><span>长度 / 挠度变形参数</span></article>
          </div>
        </div>
      </section>

      <section className="research-detail-section research-validation-section" id="research-validation">
        <div className="section-frame">
          <div className="case-section-label"><span>03</span><p>VALIDATION & DELIVERY / 验证、评估与工程落地</p></div>
          <div className="research-detail-heading">
            <h2>把检测数值翻译为国标化风险判断，并在真实文保项目中验证完整链路。</h2>
            <p>以大田琵琶堡、永盛梁氏宗祠为测试案例，完成从外业采集、数据处理、构件分析到评估输出的全流程验证，同时识别现场遮挡、扫描噪声、模型误差与构件残缺等适用边界。</p>
          </div>
          <div className="research-validation-layout">
            <figure><img src="/images/research/stability-assessment.webp" alt="古建筑梁架四向稳定性检测与风险评估" loading="lazy" /><figcaption>四级评估模型：勘查项目残损等级 → 单构件安全等级 → 构件集安全等级 → 结构体系安全等级。</figcaption></figure>
            <div className="research-results">
              <article><strong>±1cm</strong><span>木柱直径误差</span></article>
              <article><strong>≤2mm</strong><span>梁枋挠度误差</span></article>
              <article><strong>≤10cm</strong><span>墙体检测误差</span></article>
              <p>检测发现：大田琵琶堡约 80% 木柱倾斜超限；永盛梁氏宗祠超过 60% 墙体存在中重度残损，为人工勘测中容易遗漏的隐患提供量化依据。</p>
            </div>
          </div>
          <div className="research-results-heading">
            <p>STANDARD-BASED COMPUTATION / 国标模型运算成果</p>
            <h3>从构件识别到风险判断，所有检测成果均基于国标构建的模型完成运算。</h3>
          </div>
          <div className="research-results-gallery">
            <article>
              <div><span>01</span><h3>柱体检测成果</h3><p>柱体定位与截面拟合，输出偏移、倾斜等可量化检测结果。</p></div>
              <div className="research-result-images"><figure><img src="/images/research/results/column-layout.png" alt="古建筑木柱平面检测与偏移标注成果" loading="lazy" /></figure><figure><img src="/images/research/results/column-fit.png" alt="古建筑木柱截面拟合检测成果" loading="lazy" /></figure></div>
            </article>
            <article>
              <div><span>02</span><h3>梁架检测成果</h3><p>基于梁架点云的构件识别、挠度计算与形变结果输出。</p></div>
              <div className="research-result-images"><figure><img src="/images/research/results/beam-detection.png" alt="古建筑梁架构件检测与编号成果" loading="lazy" /></figure><figure><img src="/images/research/results/beam-fit.png" alt="古建筑梁枋拟合与挠度检测成果" loading="lazy" /></figure></div>
            </article>
            <article>
              <div><span>03</span><h3>墙体检测成果</h3><p>以国标评价规则计算墙体偏移、倾斜及残损风险等级。</p></div>
              <div className="research-result-images"><figure><img src="/images/research/results/wall-detection.png" alt="古建筑墙体检测与定位成果" loading="lazy" /></figure><figure><img src="/images/research/results/wall-assessment.png" alt="古建筑墙体国标模型评估成果" loading="lazy" /></figure></div>
            </article>
          </div>
          <div className="research-rollout"><span>前期勘察<br /><b>采集 + 智能检测</b></span><span>施工阶段<br /><b>重复采集与形变比对</b></span><span>修缮验收<br /><b>点云核验修缮效果</b></span><span>后期运维<br /><b>定期监测与风险预警</b></span></div>
          <a className="research-return" href="/#projects">返回作品目录 <ArrowUpRight size={20} /></a>
        </div>
      </section>
    </main>
  )
}

function App() {
  const activeCase = new URLSearchParams(window.location.search).get('case')
  const [headerPinned, setHeaderPinned] = useState(false)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const root = document.querySelector(activeCase ? '#case-content' : '#content')
    if (!root) return undefined

    const splitRestorers = []
    const ctx = gsap.context(() => {
      const revealItems = (items, options = {}) => {
        const elements = gsap.utils.toArray(items)
        if (!elements.length) return
        elements.forEach((element, index) => {
          gsap.fromTo(element,
            { clipPath: 'inset(0 0 100% 0)', y: options.y ?? 88, scale: options.scale ?? 1 },
            {
              clipPath: 'inset(0 0 0% 0)',
              y: 0,
              scale: 1,
              duration: options.duration ?? 1.25,
              delay: options.perItem ? 0 : index * (options.stagger ?? 0.16),
              ease: 'power4.out',
              force3D: true,
              onComplete: () => gsap.set(element, { clearProps: 'clipPath,willChange' }),
              scrollTrigger: {
                trigger: options.perItem ? element : (options.trigger ?? elements[0]),
                start: options.start ?? 'top 82%',
                once: true,
              },
            },
          )
        })
      }

      if (!activeCase) {
        const splitIntoVisualLines = (element) => {
          if (!element) return []
          const originalMarkup = element.innerHTML
          const text = element.textContent
          const characters = Array.from(text)
          element.setAttribute('aria-label', text)
          element.textContent = ''
          const characterNodes = characters.map((character) => {
            const node = document.createElement('span')
            node.className = 'motion-character'
            node.textContent = character === ' ' ? '\u00a0' : character
            element.append(node)
            return node
          })

          const groups = []
          characterNodes.forEach((node) => {
            const line = groups.at(-1)
            if (!line || Math.abs(line.top - node.offsetTop) > 2) groups.push({ top: node.offsetTop, nodes: [node] })
            else line.nodes.push(node)
          })

          element.textContent = ''
          const lines = groups.map(({ nodes }) => {
            const line = document.createElement('span')
            line.className = 'motion-line'
            nodes.forEach((node) => line.append(node))
            element.append(line)
            return line
          })
          splitRestorers.push(() => {
            element.innerHTML = originalMarkup
            element.removeAttribute('aria-label')
          })
          return lines
        }

        const bioLines = splitIntoVisualLines(document.querySelector('.bio-block > p:not(.lead)'))
        const opening = gsap.timeline({ defaults: { ease: 'power4.out' } })
        opening
          .set('.hero-opening-mask', { autoAlpha: 1, clipPath: 'inset(0 0 0 0)' })
          .set('.site-header', { autoAlpha: 0, y: -28 })
          .set('.hero-copy .eyebrow, .hero-bottom, .hero-index, .media-note', { autoAlpha: 0, y: 34 })
          .set('.hero-copy h1 span', { autoAlpha: 0, yPercent: 120, scaleY: 0.7, transformOrigin: '0% 100%' })
          .set('.hero-video', { scale: 1.16 })
          .to('.hero-opening-mask', { clipPath: 'inset(0 0 0 100%)', duration: 1.15, ease: 'expo.inOut' })
          .to('.hero-video', { scale: 1, duration: 2.7, ease: 'power3.out' }, 0.24)
          .to('.site-header', { autoAlpha: 1, y: 0, duration: 1.3 }, 0.48)
          .to('.hero-copy .eyebrow', { autoAlpha: 1, y: 0, duration: 1.15 }, 0.82)
          .to('.hero-copy h1 span', { autoAlpha: 1, yPercent: 0, scaleY: 1, duration: 1.75, stagger: 0.2, ease: 'expo.out' }, 0.96)
          .to('.hero-bottom, .hero-index, .media-note', { autoAlpha: 1, y: 0, duration: 1.25, stagger: 0.14 }, 1.52)

        gsap.utils.toArray('.section-heading').forEach((heading) => {
          const label = heading.querySelector('p')
          const title = heading.querySelector('h2')
          const timeline = gsap.timeline({ scrollTrigger: { trigger: heading, start: 'top 82%', once: true } })
          timeline
            .from(label, { autoAlpha: 0, xPercent: -55, duration: 0.85, ease: 'power4.out' })
            .from(title, { autoAlpha: 0, yPercent: 58, scaleX: 0.76, transformOrigin: '0% 100%', duration: 1.35, ease: 'expo.out' }, 0.16)
        })

        revealItems('.about-grid > *', { trigger: '.about-grid', stagger: 0.14 })
        if (bioLines.length) {
          gsap.from(bioLines, {
            autoAlpha: 0,
            y: 34,
            duration: 1.05,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.bio-block', start: 'top 82%', once: true },
          })
        }
        revealItems('.design-positioning > p, .design-positioning > h3, .positioning-points > span', { trigger: '.design-positioning', y: 68, stagger: 0.12 })
        revealItems('.resume-grid > *', { trigger: '.resume-grid', y: 64, stagger: 0.08, duration: 0.75 })
        revealItems('.case-manifesto > p, .case-manifesto > h3', { trigger: '.case-manifesto', y: 76, stagger: 0.12 })
        revealItems('.method-item', { trigger: '.method-grid', y: 76, stagger: 0.1 })
        revealItems('.case-card', { y: 120, perItem: true })
        revealItems('.personal-research', { y: 96, duration: 1.1 })
        revealItems('.capability-statement', { y: 86 })
        revealItems('.strength-card', { trigger: '.strength-grid', y: 86, stagger: 0.1 })
        revealItems('.tool-strip', { y: 54 })
        revealItems('.contact-content, .contact-footer', { trigger: '.contact-content', y: 72, stagger: 0.15 })

        gsap.utils.toArray('.portrait-block img, .case-visual > img, .case-montage img').forEach((image) => {
          gsap.fromTo(image,
            { clipPath: 'inset(10% 0 10% 0)', scale: 1.16, yPercent: -5 },
            {
              clipPath: 'inset(0% 0 0% 0)',
              scale: 1,
              yPercent: 4,
              ease: 'none',
              scrollTrigger: { trigger: image.parentElement, start: 'top 92%', end: 'bottom 8%', scrub: 0.9, invalidateOnRefresh: true },
            },
          )
        })

        gsap.utils.toArray('.case-card').forEach((card) => {
          const frames = card.querySelectorAll('.case-montage figure, .case-visual > img')
          const copy = card.querySelectorAll('.case-kicker, .case-copy > h3, .case-summary, .case-facts > div, .case-ready')
          const timeline = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 80%', once: true } })
          if (frames.length) {
            timeline.fromTo(frames,
              { clipPath: 'inset(0 0 100% 0)', x: -54 },
              {
                clipPath: 'inset(0 0 0% 0)',
                x: 0,
                duration: 1.35,
                stagger: 0.24,
                ease: 'power4.out',
                onComplete: () => gsap.set(frames, { clearProps: 'clipPath,willChange' }),
              },
              0,
            )
          }
          timeline.from(copy, { autoAlpha: 0, y: 38, duration: 0.85, stagger: 0.13, ease: 'power3.out' }, 0.28)
        })

        gsap.utils.toArray('.secondary-case-showcase').forEach((card) => {
          const headingModules = card.querySelectorAll('.secondary-case-heading > *')
          const tabModules = card.querySelectorAll('.secondary-case-tabs button')
          gsap.fromTo(headingModules,
            { clipPath: 'inset(0 100% 0 0)', x: -68 },
            {
              clipPath: 'inset(0 0% 0 0)',
              x: 0,
              duration: 0.98,
              stagger: 0.14,
              ease: 'power4.out',
              onComplete: () => gsap.set(headingModules, { clearProps: 'clipPath,willChange' }),
              scrollTrigger: { trigger: card, start: 'top 84%', once: true },
            },
          )
          gsap.fromTo(tabModules,
            { clipPath: 'inset(100% 0 0 0)', y: 68 },
            {
              clipPath: 'inset(0% 0 0 0)',
              y: 0,
              duration: 0.88,
              stagger: 0.13,
              ease: 'power4.out',
              onComplete: () => gsap.set(tabModules, { clearProps: 'clipPath,willChange' }),
              scrollTrigger: { trigger: card, start: 'top 84%', once: true },
            },
          )
        })
      } else {
        revealItems('.case-detail-hero h1, .research-detail-hero h1', { y: 108, duration: 1.35, stagger: 0.1, start: 'top 92%' })
        if (activeCase === 'research') {
          gsap.fromTo('.research-detail-lead > *',
            { clipPath: 'inset(0 0 100% 0)', y: 68 },
            {
              clipPath: 'inset(0 0 0% 0)',
              y: 0,
              duration: 1.2,
              stagger: 0.16,
              ease: 'power4.out',
              onComplete: () => gsap.set('.research-detail-lead > *', { clearProps: 'clipPath,willChange' }),
              scrollTrigger: { trigger: '.research-detail-lead', start: 'top 86%', once: true },
            },
          )
          gsap.fromTo('.research-detail-hero-image',
            { clipPath: 'inset(12% 0 12% 0)', scale: 1.08, y: 72 },
            {
              clipPath: 'inset(0% 0 0% 0)',
              scale: 1,
              y: 0,
              duration: 1.45,
              ease: 'power4.out',
              onComplete: () => gsap.set('.research-detail-hero-image', { clearProps: 'clipPath,willChange' }),
              scrollTrigger: { trigger: '.research-detail-hero-image', start: 'top 86%', once: true },
            },
          )
          const resultHeading = document.querySelector('.research-results-heading')
          const resultCards = document.querySelectorAll('.research-results-gallery > article')
          if (resultHeading && resultCards.length) {
            const resultTimeline = gsap.timeline({ scrollTrigger: { trigger: resultHeading, start: 'top 82%', once: true } })
            resultTimeline
              .from(resultHeading.querySelector('p'), { autoAlpha: 0, xPercent: -45, duration: 0.85, ease: 'power4.out' })
              .from(resultHeading.querySelector('h3'), { autoAlpha: 0, yPercent: 42, scaleX: 0.82, duration: 1.25, ease: 'expo.out' }, 0.1)
              .from(resultCards, { clipPath: 'inset(0 0 100% 0)', y: 84, duration: 1.05, stagger: 0.14, ease: 'power4.out' }, 0.24)
              .from('.research-results-gallery h3, .research-results-gallery p, .research-result-images figure', { autoAlpha: 0, y: 32, duration: 0.75, stagger: 0.05, ease: 'power3.out' }, 0.48)
          }
        }
        gsap.utils.toArray('.case-detail-section, .research-detail-section').forEach((section) => {
          const label = section.querySelector('.case-section-label')
          const heading = section.querySelector('h2')
          const cards = Array.from(section.querySelectorAll('article, figure, .research-detail-flow li')).filter((card) => !card.closest('.research-results-gallery'))
          if (label || heading) {
            const textBlocks = section.querySelectorAll('p, h3, h4, dt, dd, time, figcaption, a')
            gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 80%', once: true } })
              .from(label, { autoAlpha: 0, xPercent: -45, duration: 0.75, ease: 'power4.out' })
              .from(heading, { autoAlpha: 0, yPercent: 45, scaleX: 0.82, duration: 1.05, ease: 'expo.out' }, 0.1)
              .from(cards, { clipPath: 'inset(0 0 100% 0)', y: 72, duration: 0.9, stagger: 0.09, ease: 'power4.out' }, 0.24)
              .from(textBlocks, { autoAlpha: 0, x: -30, duration: 0.72, stagger: 0.025, ease: 'power3.out' }, 0.34)
          }
        })
      }
    }, root)

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.cancelAnimationFrame(refreshId)
      ctx.revert()
      splitRestorers.forEach((restore) => restore())
    }
  }, [activeCase])

  useEffect(() => {
    if (activeCase) {
      setHeaderPinned(false)
      return undefined
    }

    const updateHeaderPinned = () => {
      const hero = document.querySelector('.hero')
      const threshold = Math.max(0, (hero?.offsetHeight || window.innerHeight) - 88)
      setHeaderPinned(window.scrollY >= threshold)
    }

    updateHeaderPinned()
    window.addEventListener('scroll', updateHeaderPinned, { passive: true })
    window.addEventListener('resize', updateHeaderPinned)
    return () => {
      window.removeEventListener('scroll', updateHeaderPinned)
      window.removeEventListener('resize', updateHeaderPinned)
    }
  }, [activeCase])

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
      shilan: {
        title: '石兰古村文旅活化改造设计｜安桐空间设计作品集',
        description: '从古村保护发展规划到石厝民宿、祠堂文化展厅与技术图纸，呈现石兰村保护、旅居、康养一体化的文旅更新实践。',
        image: '/images/shilan/tourism-render-01.jpg',
      },
      rizhao: {
        title: '日照城市规划展厅室内空间设计｜安桐空间设计作品集',
        description: '公共展示类空间案例：围绕环形中庭、城市沙盘与巨型大屏组织观展动线、政务接待与展陈界面，呈现方案效果、落地实景与施工图纸。',
        image: '/images/rizhao/IMG_20240228_160422.webp',
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
      research: {
        title: '古建筑木结构点云智能检测修缮系统｜安桐个人研究',
        description: '以点云采集、AI 构件识别、几何处理、国标评估与工程交付串联的古建筑修缮 B 端产品原型研究。',
        image: '/images/research/heritage-pointcloud.webp',
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

  if (activeCase === 'shilan') {
    return <ShilanCasePage />
  }

  if (activeCase === 'rizhao') {
    return <RizhaoCasePage />
  }

  if (activeCase === 'sanxun') {
    return <SanxunCasePage />
  }

  if (activeCase === 'lanikar') {
    return <LanikarCasePage />
  }

  if (activeCase === 'research') {
    return <ResearchCasePage />
  }

  return (
    <>
      <a className="skip-link" href="#content">跳到主要内容</a>
      <main id="content">
        <section className="hero" id="top">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/images/project-village.jpg" aria-hidden="true">
            <source src="/video/hero-architecture.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-opening-mask" aria-hidden="true" />

          <header className={`site-header frame${headerPinned ? ' is-pinned' : ''}`}>
            <a className="brand" href="#top" aria-label="返回首页">AT<span>®</span></a>
            <nav aria-label="主要导航">
              <a href="#about"><span>关于</span></a>
              <a href="#projects"><span>作品</span></a>
              <a href="#product-prototype"><span>研发项目</span></a>
              <a href="#strengths"><span>能力</span></a>
            </nav>
            <a className="contact-link" href="#contact">联系我 <ArrowUpRight size={18} strokeWidth={2.5} /></a>
          </header>

          <div className="hero-copy frame">
            <p className="eyebrow"><span>SELECTED SPATIAL WORKS</span> / 2022—2026</p>
            <h1><span>以空间，</span><span>回应场所。</span></h1>
            <div className="hero-bottom hero-bottom-cases">
              <p>我从在地文化与真实使用出发，把复杂问题转译为空间策略、体验场景与可落地的设计成果。</p>
              <div className="hero-case-count" aria-label="作品概览">
                <strong>17</strong><span>PROJECT INDEX<br />07 FEATURED CASES</span>
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
                <img src="/images/an-tong-profile.jpg" alt="空间设计师安桐" loading="lazy" decoding="async" />
                <figcaption><span>AN TONG</span><span>SPATIAL DESIGNER</span></figcaption>
              </figure>

              <div className="bio-block">
                <p className="lead">我关注空间如何回应真实生活，而不止于形式。</p>
                <p>兼具设计学与建筑学复合背景，专注文化赋能型商业与文旅空间设计，涵盖民宿、餐饮、连锁品牌门店、品牌零售、文旅空间、历史街区与古建活化。依托场地调研挖掘在地文化内核，平衡品牌经营诉求与沉浸式场景营造，从场所调研和文化线索中找到设计支点，再通过空间结构、场景节点与技术表达推动方案落地。</p>
                <div className="bio-meta">
                  <a href="mailto:1577288186@qq.com"><Mail size={18} /> 1577288186@qq.com</a>
                  <a href="tel:+8615653209989"><Phone size={18} /> +86 156 5320 9989</a>
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
              <p className="column-label">工作经历 / EXPERIENCE</p>
              <p className="column-label">教育背景 / EDUCATION</p>
              {experience.map((item, index) => {
                const study = education[index]
                return (
                  <Fragment key={item.period}>
                    <article className="timeline-row">
                      <time>{item.period}</time>
                      <div><h3>{item.place}</h3><p className="role">{item.role}</p><p>{item.detail}</p></div>
                    </article>
                    <article className="education-row">
                      <time>{study.period}</time>
                      <div><h3>{study.school}</h3><p>{study.major}</p><p className="education-detail">{study.detail}</p></div>
                    </article>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-frame">
            <SectionHeading index="02" label="SELECTED CASES" title={'作品优先 /\n用过程证明能力'} light />

            <div className="case-manifesto">
              <p>CASE STUDY SYSTEM</p>
              <h3>作品不是结果图的堆叠，而是一条从问题识别、策略建立到空间落地的探讨。</h3>
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
                            <img src={image.src} alt={image.alt} loading={project.number === 'CASE 01' && index === 0 ? 'eager' : 'lazy'} decoding="async" />
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

            <div className="secondary-case-row">
              <SecondaryCaseShowcase
                id="tulanduo"
                number="08"
                label="S.I. DESIGN"
                title="图兰朵 S.I.终端系统"
                summary="以统一的门店界面、陈列秩序与模块化道具，建立可识别、可落地、可复制的品牌终端语言。"
                tags={['品牌终端', '陈列系统', '标准化道具']}
                groups={tulanduoGroups}
              />

              <SecondaryCaseShowcase
                id="fengyu"
                number="09"
                label="RURAL RENEWAL"
                title="丰余村环境提升设计"
                summary="以“微更新、轻介入、重在地”为核心，围绕建筑立面修缮、公共灰空间重构与景观长廊建设，让传统村落的日常交往重新发生。"
                tags={['环境场景', '立面修缮', '木构长廊']}
                groups={fengyuGroups}
              />

              <SecondaryCaseShowcase
                id="like"
                number="10"
                label="RURAL HOMESTAY"
                title="李窠村乡村民宿改造"
                summary="在保留旧房尺度与乡村肌理的前提下，二层木构增建释放客房容量，并以外廊串联到达、停留与住宿，清晰分离客人与后勤流线，使小体量改造兼具舒适体验与运营效率。"
                tags={['旧房改造', '民宿动线', '文旅场景']}
                groups={likeGroups}
              />

              <SecondaryCaseShowcase
                id="xiuqiao"
                number="11"
                label="RURAL ACTIVATION"
                title="秀峤村民宿与文旅活动中心"
                summary="以穿斗木构为骨、滨水景观为境，活化老宅为集旅居、康养与公共活动于一体的复合空间。设计完整保留并修复原有木构梁柱、夯土墙面与青瓦坡顶，通过空间重组与功能植入，让旧屋成为可栖居、可共享的乡野活力载体。"
                tags={['旧屋改造', '民宿旅居', '滨水活动']}
                groups={xiuqiaoGroups}
              />

              <SecondaryCaseShowcase
                id="sishu"
                number="12"
                label="CULTURAL SPACE"
                title="私塾馆文化空间改造"
                summary="以在地文化和教育空间的重塑为目标，通过分层夯土工艺的再演绎，将不同色阶的夯土肌理转化为空间叙事；竹木、青砖与旧屋架共同延续古建记忆，并为文化展示、小型沙龙与乡村公共活动提供舒适场所。"
                tags={['分层夯土', '竹木青砖', '文化教育']}
                groups={sishuGroups}
              />

              <SecondaryCaseShowcase
                id="robinhood"
                number="13"
                label="RETAIL INTERIOR"
                title="罗宾汉连锁服装门店"
                summary="围绕连锁服装门店的品牌识别、陈列效率与顾客停留展开空间设计：以简洁的灰白基调、品牌绿和山形光带建立统一视觉，并通过入口橱窗、收银服务、展示中岛与试衣动线形成清晰、可复制的零售体验。"
                tags={['连锁零售', '陈列体验', '标准化落地']}
                groups={robinhoodGroups}
              />

              <SecondaryCaseShowcase
                id="fanhuayin"
                number="14"
                label="JEWELLERY RETAIL"
                title="繁花吟珠宝门店"
                summary="围绕连锁珠宝门店的陈列秩序与体验氛围展开：以深色木饰面、柔和米色基底和弧形界面组织空间，串联首饰展示、服饰搭配、顾客洽谈与休憩场景；中岛展柜与墙面陈列共同建立清晰的浏览节奏与品牌记忆。"
                tags={['珠宝陈列', '零售体验', '连锁门店']}
                groups={fanhuayinGroups}
              />
              <SecondaryCaseShowcase
                id="nailsalon"
                number="15"
                label="INDEPENDENT STORE"
                title="美甲店·甜品复合空间"
                summary="以独立门店的风格化体验为核心，将等候休闲、美甲服务、产品展示与后勤功能沿清晰动线组织；以柔和中性色、木质家具与弧形界面建立轻松而有辨识度的复合消费场景。"
                tags={['风格化门店', '动线组织', '复合体验']}
                groups={nailsalonGroups}
              />
              <SecondaryCaseShowcase
                id="live-fashion"
                number="16"
                label="LIVE COMMERCE RETAIL"
                title="服装品牌直播展示空间"
                summary="围绕服装品牌的直播与展示需求，将镜头取景、产品陈列、主播动线与观众体验统筹组织；以温润材质、层叠界面与可切换的展示背景，建立适配线上视觉传播和线下到店体验的复合空间。"
                tags={['品牌直播', '视觉场景', '展示动线']}
                groups={liveFashionGroups}
              />
              <SecondaryCaseShowcase
                id="disney-live"
                number="17"
                label="LIVE COMMERCE HOME"
                title="迪士尼家纺直播展示空间"
                summary="以家纺产品的生活方式表达为主线，将睡眠场景、直播背景、产品展示与设备支持整合在连续平面中；以柔和色彩和主题化画面建立更具记忆点的直播视觉，并兼顾品牌展示与实景体验。"
                tags={['品牌直播', '家纺展示', '画面设计']}
                groups={disneyLiveGroups}
              />
            </div>

            <div className="personal-research" id="product-prototype">
              <a className="research-home-link" href="/?case=research" aria-label="查看古建筑木结构点云智能检测修缮系统研究详情">
                <div>
                  <span>PERSONAL RESEARCH / 01</span>
                  <h3>古建筑木结构<br />点云智能检测<br />修缮系统</h3>
                  <p>项目负责人，以产品视角主导项目全流程：主导现场采集流程与方案规划，开展行业痛点调研与用户需求挖掘，完成整体产品方案、业务规则体系建模，定义各模块输入输出；设计外业采集至内业分析的全链路验证方案，明确产品交付成果，规划工程落地范式，推动算法落地验证。</p>
                  <strong className="research-home-cta">进入项目详情 <ArrowUpRight size={26} /></strong>
                </div>
              </a>
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
              <div><span>BASED IN</span><p>QINGDAO / HANGZHOU</p></div>
              <a className="back-top" href="#top">回到顶部 <ArrowUpRight size={20} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
