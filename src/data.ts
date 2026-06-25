// すべての文言・素材はここに集約（差し替えやすく）。
// 文言は Figma「Shizuku Studio」のしずく本人の言葉をそのまま採用している。
// Works は実在・公開済みの作品にリンク。サムネは正直な淡色グラデ（実画面の偽装をしない）。

export const site = {
  brand: "Shizuku Studio",
  brandMark: "✦",
  tagline: "AI × DESIGN × STRUCTURE",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type StackGroup = { group: string; items: string[] };
export const about = {
  eyebrow: "About",
  title: "つくる人について",
  lead: "AIとデザインで、構造をつくる人。",
  body: "曖昧な課題を、明快で信頼できるUIへ。リサーチ・構造設計・試作から実装までを一気通貫で進めます。かわいいだけでなく、思想と、再利用できる仕組みを残すこと。在宅・非同期・テキストベースでの協働が中心です。",
  stackTitle: "使う道具",
  stack: [
    { group: "Design", items: ["Figma", "UI設計", "デザインシステム", "Auto Layout"] },
    { group: "Develop", items: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
    { group: "AI / Automation", items: ["Claude Code", "n8n", "プロンプト設計"] },
    { group: "Ship", items: ["GitHub Pages", "Vercel"] },
  ] as StackGroup[],
};

export const hero = {
  // 大見出しは2色（前半=ink／後半=accent）
  titleLead: "個性に、",
  titleAccent: "居場所を。",
  sub: "世界観を、構造にして使えるように。",
  body: "AIとデザインで、あなたの考えをカタチにします。その人らしい感性や働き方が、ちゃんと機能する場所へ。",
  primary: "作品を見る",
  secondary: "相談する",
};

export type Service = { icon: string; label: string };
export const services = {
  eyebrow: "Services",
  title: "できること",
  items: [
    { icon: "airplay", label: "Web / LP制作" },
    { icon: "pen-tool", label: "Figmaデザイン" },
    { icon: "sparkles", label: "AI活用・実装" },
    { icon: "workflow", label: "n8n自動化" },
    { icon: "compass", label: "ブランド設計" },
  ] as Service[],
};

export type Work = {
  tag: string;
  title: string;
  desc: string;
  href: string;
  grad: number; // 0–4：サムネのグラデ種別
};
export const works = {
  eyebrow: "Works",
  title: "制作実績",
  more: "すべての実績を見る",
  // すべて実在・公開済み。クリックで本物の作品へ。
  moreHref: "https://saitoh19990720-art.github.io/works/",
  items: [
    {
      tag: "消費者保護 / Web App",
      title: "さくらチェッカー",
      desc: "口コミのサクラ度を色で可視化。完全ローカル・通信なし。",
      href: "https://sakura-checker.vercel.app",
      grad: 0,
    },
    {
      tag: "ツール / Web",
      title: "UTM Builder",
      desc: "計測リンクを迷わず作る、淡色＋明朝の軽量ツール。",
      href: "https://portfolio-sizuku.vercel.app/utm.html",
      grad: 1,
    },
    {
      tag: "Web App / React",
      title: "Aqua Cost",
      desc: "やさしい固定費の見直しアプリ。",
      href: "https://saitoh19990720-art.github.io/aqua-cost/",
      grad: 2,
    },
    {
      tag: "Dashboard UI",
      title: "Shizuku Agent Office",
      desc: "AI社員オフィスのダッシュボード設計。",
      href: "https://saitoh19990720-art.github.io/shizuku-agent-office/",
      grad: 3,
    },
    {
      tag: "LP / Case Study",
      title: "LP制作ケース集",
      desc: "世界観を伝えるLPの設計思想つき事例集。",
      href: "https://saitoh19990720-art.github.io/lp-casestudy/",
      grad: 4,
    },
  ] as Work[],
};

export type Step = { n: string; en: string; jp: string; body: string };
export const process = {
  eyebrow: "Process",
  title: "進め方",
  caption: "繰り返せるリズム。すべての工程に、人を残す。",
  steps: [
    { n: "01", en: "Listen", jp: "聴く", body: "考え・悩み・目的を整理する。要望の奥にある本当の課題を見つける。" },
    { n: "02", en: "Structure", jp: "構造設計", body: "ピクセルの前に、流れ・階層・言葉をかたちにする。" },
    { n: "03", en: "Design", jp: "デザイン", body: "色・余白・導線を整え、静けさのある画面に落とす。" },
    { n: "04", en: "Build", jp: "実装", body: "Claude Codeと小さな自動化で、自分の手綱でつくる。" },
    { n: "05", en: "Refine", jp: "仕上げ", body: "出力を批判的に読む。本当のものを残し、あとは削る。" },
  ] as Step[],
};

export const cta = {
  title: "いっしょに、かわいくて、使えるものをつくろう。",
  button: "お問い合わせ・お仕事の相談",
  // TODO: 本物の連絡先に差し替え（メール or フォームURL）。今は作品ハブへ。
  href: "https://saitoh19990720-art.github.io/works/",
};

export const footer = {
  brand: "Shizuku Studio",
  copyright: "© 2025 Shizuku Studio",
  // TODO: 本物のSNS URLに差し替え（今は # の仮リンク）
  links: [
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Note", href: "#" },
  ],
};
