# Share Timer

シンプルで癒やしのタイマーアプリケーション / Simple and Relaxing Timer Application

## 📋 Design Documents

このプロジェクトは完全な設計仕様が完了しています / This project has complete design specifications:

### 1. [DESIGN.md](./DESIGN.md) - Complete System Design
**最新技術スタック / Latest Tech Stack:**
- Next.js 15 (App Router)
- React 19 RC
- TypeScript 5.x
- Tailwind CSS 4.x
- pnpm

**主要機能 / Core Features:**
- ✅ 1-99分対応のタイマー / Timer supporting 1-99 minutes
- ✅ Web Push通知 (バックグラウンド動作) / Web Push notifications (background)
- ✅ カスタマイズ可能なサウンド / Customizable sounds
- ✅ 音量調節 / Volume control
- ✅ 通知テスト機能 / Notification test feature
- ✅ 日本語/英語対応 / Japanese/English support
- ✅ PWA対応 / PWA support
- ✅ リラックスした配色 / Relaxing color theme

**含まれる内容 / Included:**
- 完全なプロジェクト構造 / Complete project structure
- コンポーネント仕様 / Component specifications
- 状態管理設計 (Zustand) / State management design
- 通知システムアーキテクチャ / Notification system architecture
- 国際化戦略 (next-intl) / Internationalization strategy
- PWA設定 / PWA configuration
- アクセシビリティガイドライン / Accessibility guidelines
- 実装ロードマップ / Implementation roadmap

---

### 2. [UI_COMPONENTS.md](./UI_COMPONENTS.md) - UI Component Designs
**デザイン済みコンポーネント / Designed Components:**
1. **CircularCountdownTimer** - 円形プログレスタイマー / Circular progress timer
2. **TimerControls** - スタート/一時停止/リセット / Start/Pause/Reset
3. **TimeInput** - 時間入力 / Time input
4. **SettingsPanel** - 設定パネル / Settings panel
5. **SoundSelector** - サウンド選択 / Sound selector
6. **VolumeControl** - 音量調節 / Volume control
7. **LanguageToggle** - 言語切替 / Language toggle
8. **NotificationTest** - 通知テスト / Notification test

**含まれる内容 / Included:**
- 詳細なビジュアルデザイン / Detailed visual designs
- React/TypeScript実装例 / React/TypeScript examples
- Radix UIインテグレーション / Radix UI integration
- レスポンシブレイアウト / Responsive layouts
- アクセシビリティ実装 / Accessibility implementation
- カラーパレット / Color palette
- アニメーションガイド / Animation guidelines

**Magic MCPから生成されたコンポーネント:**
- 完全に動作する円形タイマーコンポーネント
- 緑色のテーマとソフトシャドウ
- スムーズなアニメーション
- lucide-react アイコン統合

---

## ✅ Phase 1: COMPLETE (2025-10-02)

**Status**: Core timer functionality implemented and validated ✨

### Quick Start
```bash
# 依存関係のインストール / Install dependencies
pnpm install

# 開発サーバー起動 / Start development server
pnpm dev
# Open http://localhost:3000

# プロダクションビルド / Production build
pnpm build
pnpm start
```

### Implemented Features
- ✅ Next.js 15 + React 19 + TypeScript
- ✅ Zustand state management with localStorage
- ✅ Circular timer display with green theme
- ✅ Start/Pause/Reset controls
- ✅ Minutes/Seconds time input
- ✅ Tailwind CSS 4.x design system
- ✅ Smooth animations with Framer Motion

**See [IMPLEMENTATION_PHASE1.md](./IMPLEMENTATION_PHASE1.md) for detailed technical summary**

---

## 🚀 次のステップ / Next Steps

### Implementation Progress
1. **✅ フェーズ1**: 基本タイマー機能 (COMPLETE)
2. **⏳ フェーズ2**: 設定とオーディオ (Next)
3. **⏳ フェーズ3**: 国際化セットアップ (next-intl)
4. **⏳ フェーズ4**: Web Push通知
5. **⏳ フェーズ5**: PWA設定
6. **⏳ フェーズ6**: テストとローンチ

詳細は `DESIGN.md` の「Implementation Roadmap」を参照

---

## 🎨 デザインシステム / Design System

### カラーパレット / Color Palette
```css
Primary Green: #10B981  /* タイマー表示 */
Background: #FAF9F6     /* 温かみのある白 */
Text: #374151           /* ソフトグレー */
```

### タイポグラフィ / Typography
- Display: Inter or Plus Jakarta Sans
- Timer: 4-6rem (大きく、等幅スタイル)
- Body: 1rem (16px)

### コンポーネント / Components
- **Radix UI**: アクセシブルなヘッドレスコンポーネント
- **Tailwind CSS 4**: ユーティリティファーストスタイリング
- **Framer Motion**: スムーズなアニメーション

---

## 🔔 主な技術的決定 / Key Technical Decisions

### 1. Next.js 15 App Router
- サーバーコンポーネント優先 / Server Components first
- React 19 RC (最新機能) / Latest features
- 最適化されたルーティング / Optimized routing

### 2. Web Push API + Service Worker
- バックグラウンド通知 / Background notifications
- VAPID キー認証 / VAPID key authentication
- クロスブラウザ対応 / Cross-browser support

### 3. Zustand for State
- 軽量 (< 1KB) / Lightweight
- localStorage永続化 / localStorage persistence
- TypeScript完全対応 / Full TypeScript support

### 4. next-intl
- App Router対応 / App Router compatible
- 型安全 / Type-safe
- サーバーサイドレンダリング / Server-side rendering

---

## 📦 設計ファイル / Design Files

| ファイル | 説明 | ステータス |
|---------|------|----------|
| `DESIGN.md` | 完全なシステム設計仕様 | ✅ 完了 |
| `UI_COMPONENTS.md` | UIコンポーネント設計 | ✅ 完了 |
| `README.md` | プロジェクト概要 | ✅ 完了 |
| `package.json` | 初期設定 | ✅ 完了 |

---

## 🎯 成功基準 / Success Criteria

### 機能的 / Functional
- ✅ タイマーが正確にカウントダウン
- ✅ 通知が確実に動作 (バックグラウンドでも)
- ✅ 完了時にサウンドが再生
- ✅ 設定がセッション間で保持
- ✅ 日本語と英語で動作

### 非機能的 / Non-Functional
- ✅ ページロード < 2秒
- ✅ Lighthouseスコア > 90 (全指標)
- ✅ WCAG 2.1 AA準拠
- ✅ Chrome、Safari、Firefox対応 (最新版)
- ✅ モバイルレスポンシブ (320px - 1920px)

---

## 📚 リファレンス / References

### ドキュメント / Documentation
- [Next.js 15](https://nextjs.org/docs)
- [next-intl](https://next-intl.dev/docs/getting-started/app-router)
- [Zustand](https://github.com/pmndrs/zustand)
- [Radix UI](https://www.radix-ui.com/)
- [Web Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)

### ツール / Tools
- [VAPID Key Generator](https://vapidkeys.com/)
- [PWA Icon Generator](https://www.pwabuilder.com/)

---

## 🤝 実装サポート / Implementation Support

設計は完了しています。実装を開始する準備ができたら、以下のコマンドから始めてください:

The design is complete. When ready to begin implementation, start with:

```bash
# 1. 依存関係のインストール
pnpm install

# 2. 開発サーバー起動 (実装後)
pnpm dev

# 3. ビルド
pnpm build
```

**実装の質問があれば、DESIGN.mdとUI_COMPONENTS.mdを参照してください。**

**For implementation questions, refer to DESIGN.md and UI_COMPONENTS.md.**

---

**設計バージョン / Design Version**: 1.0
**最終更新 / Last Updated**: 2025-10-02
**ステータス / Status**: 実装準備完了 / Ready for Implementation
