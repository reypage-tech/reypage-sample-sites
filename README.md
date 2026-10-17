# reypage-sample-sites

Reypage（レイページ）が自主制作したホームページのサンプルサイト3件と、その一覧ページのソースです。店名・会社名・住所・料金・人物はすべて架空で、実在の店舗や会社とは関係ありません。

公開中のサイト：https://reypage.pages.dev/

## サンプルの内容

| フォルダ | 業種 | 構成 | 公開URL |
|---|---|---|---|
| `pilates/` | ピラティススタジオ「ノギク」 | 1ページ構成（料金・時間割・体験の流れ・アクセス・予約フォーム）と制作メモ | https://reypage.pages.dev/pilates/ |
| `reform/` | リフォーム会社「しおり住まい工房」 | 1ページ構成（施工事例・費用の目安・ご相談の流れ・会社案内・見積りフォーム）、制作メモ、WordPress版の説明ページ | https://reypage.pages.dev/reform/ |
| `b2b/` | 金属加工の町工場「汐凪精機」 | 6ページ構成（トップ・事業内容・会社概要・採用情報・お問い合わせ・制作メモ） | https://reypage.pages.dev/b2b/ |
| `pilates/map-check/` | Googleマップ診断の見本 | 店舗のGoogleマップの情報を確認する作業のサンプル | https://reypage.pages.dev/pilates/map-check/ |

各サイトの制作メモ（`notes/`）に、設計の考え方、写真の出所、表示速度やアクセシビリティの測定結果を載せています。

## ページ一覧

| パス | 内容 |
|---|---|
| `index.html` | サンプルサイトの一覧 |
| `pilates/index.html` | ノギクのトップ |
| `pilates/notes/index.html` | ノギクの制作メモ |
| `pilates/map-check/index.html` | Googleマップ診断の見本 |
| `reform/index.html` | しおり住まい工房のトップ |
| `reform/notes/index.html` | しおり住まい工房の制作メモ |
| `reform/wordpress/index.html` | WordPressテーマ版の管理画面の説明 |
| `b2b/index.html` | 汐凪精機のトップ |
| `b2b/service/index.html` | 事業内容 |
| `b2b/company/index.html` | 会社概要 |
| `b2b/recruit/index.html` | 採用情報 |
| `b2b/contact/index.html` | お問い合わせ（見本のフォーム） |
| `b2b/notes/index.html` | 汐凪精機の制作メモ |

## 使用技術

- HTML、CSS、JavaScript（ライブラリやフレームワークは使っていません）
- レスポンシブ対応（幅360px・768px・1440pxで表示を確認）
- 構造化データ（JSON-LD）：ノギクとしおり住まい工房のトップ
- 書体は Zen Kaku Gothic New、Shippori Mincho、Noto Sans（いずれも SIL Open Font License）。ページで使う文字だけに減らした woff2 を各フォルダの `fonts/` に置いています
- 画像は WebP。画面幅に応じて大きさの違う画像を読み込み、最初の画面より下の写真は遅延読み込みにしています
- フォームはすべて見本で、送信はされません
- 全ページに `noindex` を付けています

WordPressテーマ版のソースは、別のリポジトリ `reypage-wp-theme-reform` にあります。公開中のサイトにはこのほか `wp/`（テーマのzipと WordPress Playground 用の blueprint.json）と Cloudflare Pages の `_headers` がありますが、テーマ側のリポジトリにまとめたので、ここには入れていません。

## 手元で見る方法

ビルドの手順はありません。フォルダをそのまま開けば表示できます。リンクは相対パスなので、簡単なWebサーバーを使うとページ間の移動も公開中のサイトと同じように確かめられます。

```sh
git clone https://github.com/reypage/reypage-sample-sites.git
cd reypage-sample-sites
python3 -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。

## 写真と素材

写真は、商用利用が認められた無料の素材写真です。どれも実在の店舗・会社の写真ではありません。

### このリポジトリに含めていない写真

ぱくたその素材は、利用規約でテンプレートなどの二次配布に条件があります（Sサイズのみ・規約の提示と同意の取得が必要）。このリポジトリは誰でもダウンロードできるため、ぱくたその写真と、それを含む画像は灰色の差し替え画像にしています。大きさとファイル名は元のままなので、レイアウトは崩れません。元の写真は公開中のサイトで確認できます。

| ファイル | 元の素材 |
|---|---|
| `b2b/img/h1-*` | ぱくたそ https://www.pakutaso.com/20140644169post-4253.html |
| `b2b/img/k1-*` | ぱくたそ https://www.pakutaso.com/20131132317post-3489.html |
| `b2b/img/n2-*` | ぱくたそ https://www.pakutaso.com/20110544143post-138.html |
| `b2b/img/n3-*` | ぱくたそ https://www.pakutaso.com/20260700197post-57994.html |
| `b2b/img/n4-*` | ぱくたそ https://www.pakutaso.com/20131112317post-3477.html |
| `b2b/img/s2-*` | ぱくたそ https://www.pakutaso.com/20131154317post-3482.html |
| `reform/img/p16-*` | ぱくたそ https://www.pakutaso.com/20200706202post-28720.html |
| `b2b/img/og.jpg` | 汐凪精機のトップのスクリーンショット（h1 を含む） |
| `img/thumb_b2b.webp` | 同上 |

### 含めている写真

Unsplash License と Pexels License は、どちらも商用利用と改変を認めており、クレジット表記は不要です。禁止されているのは、写真をほぼそのまま販売することや、ほかの素材サービスに収録することなどです。ここでは撮影者名を記載しています。

| ファイル | 撮影者 | 出所 |
|---|---|---|
| `pilates/img/p1-*` | Ahmet Kurt | Unsplash https://unsplash.com/photos/NY3A6U9hVt0 |
| `pilates/img/p2-*` | Ahmet Kurt | Pexels https://www.pexels.com/photo/25599827/ |
| `pilates/img/p6-*` | Paulina Vargas | Pexels https://www.pexels.com/photo/36833353/ |
| `pilates/img/p7-*` | Kampus Production | Pexels https://www.pexels.com/photo/5992858/ |
| `pilates/img/p8-*` | Ahmet Kurt | Pexels https://www.pexels.com/photo/25599832/ |
| `pilates/img/p9-*` | Ahmet Kurt | Pexels https://www.pexels.com/photo/25599829/ |
| `pilates/img/p15-*` | Ahmet Kurt | Pexels https://www.pexels.com/photo/25599824/ |
| `reform/img/p3-*` | Clay Banks | Unsplash https://unsplash.com/photos/7pvC_d2iXSE |
| `reform/img/p5-*` | Dulkimso Hakim Santoso | Unsplash https://unsplash.com/photos/fdgzbUqUYVI |
| `reform/img/p6-*` | Declan Sun | Unsplash https://unsplash.com/photos/apJMCEBNucw |
| `reform/img/p8-*` | Se. Tsuchiya | Unsplash https://unsplash.com/photos/gm7OwXLhJFY |
| `reform/img/p10-*` | Gül Işık | Pexels https://www.pexels.com/photo/35680935/ |
| `reform/img/p14-*` | Ono Kosuki | Pexels https://www.pexels.com/photo/5973900/ |
| `reform/img/p15-*` | K | Pexels https://www.pexels.com/photo/4263067/ |
| `b2b/img/w1-*` | Connor Lucock | Pexels https://www.pexels.com/photo/28752153/ |

`pilates/img/og.jpg` と `reform/img/og.jpg` は、それぞれのトップのスクリーンショットです（中の写真は上の表のもの）。`img/thumb_pilates.webp`、`img/thumb_reform.webp`、`img/thumb_mapcheck.webp` も各ページのスクリーンショットです。`reform/wordpress/img/` は WordPress の管理画面のスクリーンショットです。

### 書体とアイコン

- 書体のライセンス全文：各フォルダの `fonts/OFL_*.txt`
- `reform/` のアイコンのうち浴室・床壁・手すりの3つは Google Material Symbols（Apache License 2.0）です。ライセンス全文は `reform/LICENSE_Apache-2.0.txt`

## ライセンス

HTML・CSS・JavaScript は、ポートフォリオとして閲覧していただくために公開しています。写真・書体・アイコンは、上に書いたそれぞれのライセンスに従います。

---

## English summary

Source of three self-initiated sample websites by Reypage, plus the index page. All shop names, company names, addresses, prices and people are fictional.

- `pilates/` – a small pilates studio, one-page site with a booking form (form is a mock and does not submit)
- `reform/` – a local renovation company, one-page site; a WordPress theme version lives in the `reypage-wp-theme-reform` repository
- `b2b/` – a small machining shop, six-page corporate site with recruitment and contact pages

Built with plain HTML, CSS and JavaScript, responsive, with subsetted self-hosted web fonts (OFL) and WebP images. Live demo: https://reypage.pages.dev/

To view locally, run `python3 -m http.server 8000` in the repository root and open http://localhost:8000/.

Photos are from Unsplash and Pexels (credits above). Photos from PAKUTASO are not redistributed here because its terms restrict redistribution; they are replaced with grey placeholders of the same size. The originals can be seen on the live site.
