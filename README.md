# Shizuku Studio

個人ブランドサイト。「個性に、居場所を。」をテーマに、AI × デザイン × 構造でつくる制作スタジオのポートフォリオ。
Figma デザイン「Shizuku Studio」をそのまま実装した、スマホ／PC 両対応のレスポンシブ Web サイト。

## Overview

- 1ページ構成：Hero → About → Services → Works → Process → Contact
- 世界観：水色・白・透明感／見出しは明朝（Shippori Mincho）
- すべての文言・画像は `src/data.ts` に集約（差し替えやすい）
- 公開先：GitHub Pages（`docs/` へビルド。`base: "./"`）
  - https://saitoh19990720-art.github.io/shizuku-studio/

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react（アイコン）

## Setup

```bash
npm install
npm run dev      # ローカル起動（http://localhost:5173）
npm run build    # 本番ビルド（docs/）
npm run preview  # ビルド結果の確認
```

## Folder Structure

```
src/
  assets/        作品サムネ・CTA背景（Figma書き出し。今は未使用）
  components/    Header / Hero / About / Services / Works / Process / CTA / Footer
  data.ts        文言・素材の一元管理
  App.tsx        セクションの組み立て
docs/            GitHub Pages 用のビルド成果物
```

## Design Tokens（Figma「Shizuku Studio」より）

| 用途 | 色 |
| --- | --- |
| 地（背景） | `#F0F7FF` |
| 見出し・濃い文字 | `#2A3D54` |
| アクセント・ボタン | `#3E5F85` |
| 補足・本文 | `#5F7FA8` |
| 境界線 | `#D6E4F0` |

フォント：見出し=Shippori Mincho／本文=Zen Kaku Gothic New／英字=DM Sans

## Notes

- 連絡先（CTA）は本人承認済みの公開メール（2026-08-25 決定）。変更は `src/data.ts` の `cta.href` だけ。
- フッターの SNS はラベルのみ。公開URLが承認されたら `footer.links` に `href` を足す。
- Works のサムネは実画面を偽装しない淡色グラデ。実作品へは各カードからリンクする。

## Future Improvements

- 各 Work の詳細ページ
- お問い合わせフォーム（今は mailto で足りている）
- SNS の公開URL差し込み（本人承認後）
