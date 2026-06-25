# Shizuku Studio

個人ブランドサイト。「個性に、居場所を。」をテーマに、AI × デザイン × 構造でつくる制作スタジオのポートフォリオ。
Figma デザイン「Shizuku Studio」をそのまま実装した、スマホ／PC 両対応のレスポンシブ Web サイト。

## Overview

- 1ページ構成：Hero → Services（できること）→ Works（制作実績）→ Contact
- 世界観：水色・白・透明感／見出しは明朝（Shippori Mincho）
- すべての文言・画像は `src/data.ts` に集約（差し替えやすい）

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react（アイコン）

## Setup

```bash
npm install
npm run dev      # ローカル起動（http://localhost:5173）
npm run build    # 本番ビルド（dist/）
npm run preview  # ビルド結果の確認
```

## Folder Structure

```
src/
  assets/        作品サムネ・CTA背景（Figma書き出し）
  components/    Header / Hero / Services / Works / CTA / Footer
  data.ts        文言・素材の一元管理
  App.tsx        セクションの組み立て
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

- 連絡先（CTA・フッターのSNS）は現在ダミー（`#`）。本物のURL/メールに差し替え予定。
- Works のサムネはイメージ素材。実作品の差し替えは今後。

## Future Improvements

- Process セクションの追加
- 各 Work の詳細ページ／実リンク
- お問い合わせフォーム
