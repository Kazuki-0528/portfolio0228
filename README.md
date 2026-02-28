# 面接用ポートフォリオ（HTMLコーディング／Web更新サポート）

更新運用の現場で求められる「依頼整理 → 実装 → チェック → 報告」を一連で見せることを目的に作成した静的ポートフォリオです。

## フォルダ構成

```text
portfolio0228/
├── index.html
├── process.html
├── checklist.html
├── works/
│   ├── index.html
│   ├── mock-maintenance.html
│   └── lp-markup.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
        └── work-placeholder.svg
```

## 閲覧方法

### 1) 直接開く（最も簡単）
- `index.html` をブラウザで開いて閲覧できます。

### 2) ローカルサーバーで開く（推奨）
- 相対パス確認のため、以下を推奨します。

```bash
python3 -m http.server 8000
```

- ブラウザで `http://localhost:8000` を開いてください。

## 設計ルール

### HTML
- セマンティックなランドマークを使用（`header` / `nav` / `main` / `section` / `footer`）。
- 全ページに以下を配置：
  - 共通ヘッダー
  - 共通フッター
  - パンくず
  - `title` / `meta description`

### CSS
- モバイルファースト（SP基準で定義し、`min-width: 768px` で拡張）。
- 命名は **BEM風 + レイアウト/プロジェクト接頭辞** で整理。
  - 例：`site-header__inner`（共通）、`p-card__title`（ページ要素）、`l-container`（レイアウト）
- 色・余白・角丸はCSS変数で一元管理し、運用時の調整コストを抑制。
- アニメーションは最小限（メニュー開閉の表示切替のみ）。

### JavaScript
- 必要最小限として、モバイルナビ開閉のみ実装。
- `aria-expanded` を更新し、状態が分かるよう配慮。

## 更新運用で意識した点（即戦力アピール）

- **依頼の受け皿を明確化**：対象URL・期限・素材有無・承認者を先に整理。
- **既存資産を活かす実装**：既存ルール踏襲を優先し、差分を最小化。
- **確認観点の標準化**：ブラウザ、リンク、文言、アクセシビリティの順で確認。
- **報告の再現性**：実施内容／確認環境／結果／懸念点をテンプレート化。
- **改善提案まで含める**：単純な更新で終わらず、次回施策を短く添える。

## 各ページの役割

- `index.html`：運用即戦力としての強みを要約。
- `works/index.html`：案件一覧。
- `works/mock-maintenance.html`：既存サイト更新サポート案件の想定実務。
- `works/lp-markup.html`：短納期LPマークアップ案件の対応プロセス。
- `process.html`：更新フロー・報告テンプレート・コミュニケーション方針。
- `checklist.html`：ブラウザ、リグレッション、アクセシビリティの確認項目。

