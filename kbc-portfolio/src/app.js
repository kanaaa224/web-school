/*
    (c) 2020 kanato-shimabukuro. All rights reserved.
*/

export default class App {

    constructor() {
        this.initialize();
    }

    async initialize() {
        Element.prototype.setHTMLWithFade = function(html, duration = 150) {
            return new Promise((resolve) => {
                let fade = this.animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration: duration, fill: 'forwards'
                });

                fade.onfinish = () => {
                    this.innerHTML = html;

                    fade = this.animate([{ opacity: 0 }, { opacity: 1 }], {
                        duration: duration, fill: 'forwards'
                    });

                    fade.onfinish = () => resolve();
                };
            });
        };

        document.head.innerHTML += '<link rel="icon" href="https://github.com/kanato-shimabukuro.png">';

        document.title = 'KBC ポートフォリオ';

        await document.body.setHTMLWithFade(`
            <main>
                <article class="loading">
                    <section>
                        <span class="mdi mdi-loading mdi-spin"></span>読み込み中...
                    </section>
                </article>
            </main>
            <header>
                <h1>${document.title}</h1>
                <span class="mdi mdi-apps"></span>
                <nav>
                    <button>私について</button>
                    <button>「りんごおとし」</button>
                    <button>「バルーンファイト」</button>
                    <button>「戦塔」</button>
                    <button>「3D脱出ゲーム」</button>
                </nav>
            </header>
            <footer>
                <p>© 2021 <a href="https://kanato-shimabukuro.github.io" target="_blank">kanato-shimabukuro</a>. All rights reserved.</p>
            </footer>
        `);

        for(let i = 1; i <= 50; i++) {
            await new Promise(resolve => {
                const img = new Image();

                img.onload = img.onerror = resolve;
                img.src    = `./res/${i}.png`
            });
        }

        const mainSwitch = async () => { let hash = location.hash.slice(1); hash = hash !== '' && !Number.isNaN(Number(hash)) ? Number(hash) : 0; await this.main(hash); }; await mainSwitch();

        window.addEventListener('hashchange', e => { mainSwitch(); });

        const buttons = document.querySelectorAll('header nav button');

        for(let i = 0; i < buttons.length; i++) buttons[i].onclick = () => { location.hash = i; };
    }

    async main(select = 0) {
        let html = '';

        const title = `
            <article class="title" style="background-image: url(./res/` + [ '1', '22', '33', '47' ][select - 1] + `.png);">
                <section>
                    <h1>「` + [ 'りんごおとし', 'バルーンファイトの再現', '戦塔', '3D脱出ゲーム' ][select - 1] + `」を紹介します</h1>
                    <p>作品紹介 - ` + [ '2年 夏季制作 1', '2年 夏季制作 2', '2年 秋季制作 1', '3年 春季制作 1' ][select - 1] + `</p>
                </section>
            </article>
        `;

        switch(select) {
            case 0:
                html = `
                    <article>
                        <section style="background-color: transparent;">
                            <h1>ようこそ！</h1>
                            <p>
                                このサイトでは、私が学校で制作したゲーム作品などを紹介しています。<br>
                                ページ上部 ヘッダーの各リンクからご覧ください。
                            </p>
                        </section>
                        <section>
                            <h1>私について</h1>
                            <p>
                                島袋 叶望（シマブクロ カナト）と申します。<br>
                                KBC（国際電子ビジネス専門学校）に在籍しており、現在4年生です。<br>
                                所属学科: ITエンジニア科 ゲームプログラミングコース 4年制課程<br>
                                趣味/好きなこと: プログラミング、DJ
                            </p>
                        </section>
                        <section>
                            <h1>保有資格</h1>
                            <p>
                                ・基本情報技術者<br>
                                ・C言語プログラミング能力認定試験 2級<br>
                                ・Excel表計算処理技能認定試験 3級<br>
                                ・Webクリエイター能力認定試験 エキスパート<br>
                                ・第2種 電気工事士<br>
                                ・工事担任者資格 DD3種<br>
                                ・情報活用検定 2級<br>
                                ・マニュアル普通自動車運転免許
                            </p>
                        </section>
                    </article>
                `; break;

            case 1:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>作品概要</h1>
                            <p>
                                このゲームは、クラスメイトでチームを組んで開発を行う「チーム制作」の２年夏季制作１で作ったものです。<br>
                                プレイヤーをコントローラーで操作し左右に移動させて、上からランダムに落ちてくるリンゴを出来るだけ拾うという内容になっています。<br>
                                私はこのゲームでタイトル画面、ヘルプ画面、ランキング処理周り全般、画像・音声、フォント等を再生・管理するリソースマネージャー、ゲームシーケンスの開発を担当しました。<br>
                                また、サポートで他の箇所の実装にも一部関わっています。
                            </p>
                            <div>
                                <img src="./res/1.png">
                                <img src="./res/6.png">
                            </div>
                        </section>
                        <section>
                            <p>
                                ・ゲームジャンル<br>
                                　アクションゲーム<br><br>
                                ・開発環境 / 使用言語<br>
                                　Microsoft Visual Studio 2022、C++<br><br>
                                ・制作期間<br>
                                　約2ヶ月<br><br>
                                ・制作人数<br>
                                　5名<br><br>
                                ・担当箇所<br>
                                　タイトル画面、ヘルプ画面、ランキング処理周り全般、<br>
                                　画像/音声、フォント等を再生/管理するリソースマネージャー、ゲームシーケンス<br><br>
                                ・プレイ動画URL<br>
                                　<a href="https://www.youtube.com/watch?v=DPiVisJdpqk">こちらから視聴できます...</a>
                            </p>
                        </section>
                        <section>
                            <h1>制作背景</h1>
                            <p>
                                授業でプログラミングを教わっている平良先生から「チーム開発に慣れる」「バージョン管理、タスク管理の復習」「仕様書どおりのゲームを制作する」などを学ぶことが大事である、<br>
                                という話があり、このゲームを制作することになりました。
                            </p>
                        </section>
                        <section>
                            <h1>挑戦したこと</h1>
                            <p>
                                周りとしっかりコミュニケーションをとること、授業外で得た知識（変数名・関数名の決め方のコツ、読みやすいソースを書くコツ、趣味で行っているWeb開発の応用など）を実践すること、サポートを積極的に行うことを第一に制作に取り組みました。
                            </p>
                        </section>
                        <section>
                            <h1>学んだこと</h1>
                            <p>
                                自分一人で何かを開発しようと作業をすると、変数名や関数名、処理の流れを自由に決められるので、開発は一人でも十分可能だと思っていました。<br>
                                しかし、複数人で協力して作業する場合コミュニケーションはしっかり取らなければならないが、後者の方が圧倒的に効率が良く、あっという間に完成してしまうことに気付きました。<br>
                                さらに、完成した際の喜びを共有できるということもわかりました。<br><br>
                                また、バージョン管理についても学んだことがあり、趣味で行っているWeb開発でGitは既に利用していたため、Gitの基本的な使い方は十分理解しているつもりでしたが、<br>
                                初めてのチーム制作で、複数人でのGitによるバージョン管理も初めてだったので、文字コードが原因で日本語のコメントの部分が全て文字化けしたり、ブランチが破壊することもありました。<br><br>
                                ですが、そんな時こそ逃げないでしっかり向き合う事で、解決する方法を知る事が出来たり、これから起きそうな問題をなんとなく予測できたりと、学べたことも十分にありました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 1</h1>
                            <p>
                                タイトル画面・ヘルプ画面の実装について、他のグループでは画面をPowerPointなどで一枚の画像として作り、それを描画することで実装していたチームもありましたが、自分は背景、文字や画像など全ての要素を実際に配置して描画させている事です。
                            </p>
                            <div>
                                <img src="./res/19.png">
                                <img src="./res/16.png">
                            </div>
                            <p>
                                画面を一枚の画像で描画しているわけではないので、使用データの容量を抑えることができ、画質劣化もありません。<br>
                                ですが、画面を一枚の画像ではなく、要素（文字・画像）を組み合わせて描画する方法はデメリットもあり、それは、一枚の画像で描画するよりも制作に時間が掛かることです。<br><br>
                                要素（画像）を配置させるには、調整 -> ビルド -> 確認、というようにその都度繰り返す必要がありますが、PowerPointなどを使って一つの画像として仕上げるとビルドの手間も無いのですぐに完成できます。<br>
                                ですが、私は一つの画面で文字や画像を配置させる際、その要素にキーボードのWASDで上下左右に移動させるデバッグ用の処理、その要素の座標を画面に表示させるデバッグ用の処理を追加することで対処できる方法を思い付き、一気に完成させることができました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 2</h1>
                            <p>
                                画像や音声、フォントデータを効率的に管理するため、リソースマネージャーを開発しました。<br>
                                これにより、ゲームで使用する画像や音声、フォントデータを一か所で一括管理しているので、無駄なメモリ消費を大幅に減らすことができました。
                            </p>
                            <div>
                                <img src="./res/13.png">
                                <img src="./res/14.png">
                                <img src="./res/15.png">
                            </div>
                            <p>
                                通常、画像や音声、フォントは画面ごとで読み込んで使うのですが、その方法はシーンマネージャーを採用していれば現実的な実装となりますが、それが無い場合は画面遷移ごとで読み込んだデータを削除しなければならないですし、メモリがいっぱいになることもありました。<br>
                                そこで、ゲームが起動した際に各々で使う画像や音声、フォントのデータを一括で読み込み、使う際は画面からその関数で予め読み込んだリソースのアドレスを貰って使う方法にすることで解決できました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 3</h1>
                            <p>終盤、タイトル画面、ヘルプ画面、ランキングの名前入力画面でクラスを使う実装方法（オブジェクト指向）を導入できたこと。</p>
                            <div>
                                <img src="./res/17.png">
                            </div>
                            <p>
                                制作の終盤、タイトル画面、ヘルプ画面、ランキングの名前入力画面で当時教わったばっかりだったクラスでの実装方法（オブジェクト指向）を導入しました。<br>
                                クラス化したことで何か大きな機能が追加された、といった事はありませんが、実装の効率化やクラスなどへの理解を深められました。
                            </p>
                        </section>
                        <section>
                            <div>
                                <img src="./res/2.png">
                                <img src="./res/4.png">
                                <img src="./res/5.png">
                                <img src="./res/7.png">
                                <img src="./res/8.png">
                            </div>
                        </section>
                    </article>
                `; break;

            case 2:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>作品概要</h1>
                            <p>
                                このゲームは、クラスメイトでチームを組んで開発を行う「チーム制作」の2年夏季制作2で制作したもので、任天堂から1985年にファミコン向けに発売されたゲームソフト「バルーンファイト」を再現するという内容になっています。<br>
                                私はこのゲームでタイトル画面、プレイヤー、ゲームUI、エフェクト（水しぶきなど）、ギミック（シャボン玉）、ステージ処理、当たり判定全般、コントローラー入力処理、ゲームシーケンスの開発を担当しました。<br>
                                また、サポートで敵の実装にも関わっています。
                            </p>
                            <div>
                                <img src="./res/22.png">
                                <img src="./res/23.png">
                            </div>
                        </section>
                        <section>
                            <p>
                                ・ゲームジャンル<br>
                                　アクション / プラットフォーム<br><br>
                                ・開発環境 / 使用言語<br>
                                　Microsoft Visual Studio 2022、C++<br><br>
                                ・制作期間<br>
                                　約2ヶ月<br><br>
                                ・制作人数<br>
                                　5名<br><br>
                                ・担当箇所<br>
                                　タイトル画面、プレイヤー、ゲームUI、エフェクト（水しぶきなど）、ギミック（シャボン玉）、<br>
                                　ステージ処理、当たり判定全般、コントローラー入力処理、ゲームシーケンス
                            </p>
                        </section>
                        <section>
                            <h1>制作背景</h1>
                            <p>
                                授業でプログラミングを教わっている平良先生から「チーム開発に慣れる」「バージョン管理、タスク管理の復習」「仕様書どおりのゲームを制作する」などを学ぶことが大事である、<br>
                                という話があり、このゲームを制作することになりました。
                            </p>
                        </section>
                        <section>
                            <h1>挑戦したこと</h1>
                            <p>
                                前の制作ではサポートをあまりしていなかったと思っていたので、今回はサポートをとにかく行いました。<br>
                                その結果、自分の担当はプレイヤーのみでしたが、それに併せてタイトル画面、ゲームUI、エフェクト（水しぶきなど）、ギミック（シャボン玉）、ステージ処理、当たり判定全般、コントローラー入力処理、ゲームシーケンスも開発しました。
                            </p>
                        </section>
                        <section>
                            <h1>学んだこと</h1>
                            <p>
                                プレイヤーの実装について、最初のビルド提出であるプロト版の提出ギリギリまで思い付かず、ふと以前の制作の「りんごおとし」のプレイヤー処理を見てなんとなく思い付き、そこから徹夜で作業をして今のプレイヤーが完成しました。<br>
                                何か実装の方法で詰まった時、ずっと考えて思い付かなければ、以前制作したものや、GitHub上で見れる誰かのリポジトリのソースをみて考える方法も有効だと知りました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 1</h1>
                            <p>
                                【プレイヤーの滑らかな慣性と、シンプルな処理の実装】<br>
                                実際のゲームを何度も触って調整を繰り返した結果、滑らかな慣性を再現できました。
                            </p>
                            <div>
                                <img src="./res/30.png">
                                <img src="./res/27.png">
                            </div>
                            <p>
                                プレイヤーの慣性は複雑に計算しており、慣性の具合も自由に変えられるように実装しました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 2</h1>
                            <p>
                                【プレイヤーやステージなど、クラス・オブジェクトの使い方】<br>
                                プレイヤーとステージなど、それぞれのクラスは単独でも動作できるよう設計しました。
                            </p>
                            <div>
                                <img src="./res/29.png">
                                <img src="./res/25.png">
                                <img src="./res/28.png">
                            </div>
                            <p>
                                プレイヤーとステージでは足場などと当たり判定をする必要がありますが、それぞれのクラスは単独でも動作するよう設計しており、これらゲームに関するオブジェクトはゲームメインシーンで定義して、メソッドで値のやり取りをして当たり判定等を行っています。<br>
                                そのため、これらのクラスは全然関係ないシーンクラスでも単独で使うことができ、ある程度応用性を持った設計になっています。
                            </p>
                            <div>
                                <img src="./res/24.png">
                            </div>
                        </section>
                    </article>
                `; break;

            case 3:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>作品概要</h1>
                            <p>
                                このゲームは、クラスメイトでチームを組んで開発を行う「チーム制作」の2年秋季制作1で作ったものです。<br>
                                ステージクリア型のローグライク風アクションゲームとなっており、プレイヤーは迫りくる大量のモンスターを倒し、時には逃げ回ったり回避して、体力が尽きずに最後のステージまで目指す内容になっています。<br>
                                私はこのゲームの主にゲームシーケンス、入力処理、FPS処理などのメイン系、ゲームUI、敵の開発を担当しました。<br>
                                また、サポートで他の箇所の実装にも関わっています。
                            </p>
                            <div>
                                <img src="./res/33.png">
                                <img src="./res/40.png">
                            </div>
                        </section>
                        <section>
                            <p>
                                ・ゲームジャンル<br>
                                　ローグライク風 アクション<br><br>
                                ・開発環境 / 使用言語<br>
                                　Microsoft Visual Studio 2022、C++<br><br>
                                ・制作期間<br>
                                　約2ヶ月<br><br>
                                ・制作人数<br>
                                　8名<br><br>
                                ・担当箇所<br>
                                　ゲームシーケンス、入力処理、FPS処理などのメイン系、ゲームUI、敵<br><br>
                                ・その他<br>
                                　GFFコンテストに応募
                            </p>
                        </section>
                        <section>
                            <h1>制作背景</h1>
                            <p>
                                プログラミングなどのスキルアップを目的にチームみんなで納得いくゲームを作り、<br>
                                「福岡ゲームコンテストGFF AWARD」に応募&入賞を目指して先生方に「良いね」と言ってもらえる目標で制作しました。
                            </p>
                        </section>
                        <section>
                            <h1>挑戦したこと</h1>
                            <p>
                                ・機能追加&バグ報告を効率的に行うため、プルリクエストを活用<br>
                                ・GitHub上で他の人が書いたコードを見てリバースエンジニアリング<br>
                                ・積極的に担当外のタスクもサポート
                            </p>
                        </section>
                        <section>
                            <h1>学んだこと</h1>
                            <p>
                                敵の実装について自分は担当外ではありましたが、どうすれば出来るか一緒に考えなんとか全部の敵を実装することができました。<br>
                                また、ゲームシーケンスの設計についても悩みましたが、どうすれば最善かを必死に考え、なんとか間に合わせることができました。<br>
                                また、何回も実装が間に合わず、磨き上げに時間を割くことがあまりできなかったため、改めて納期に間に合わせる事の大切さを意識するようになりました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 1</h1>
                            <p>
                                アニメーションと演出を散りばめ、ゲームに雰囲気を持たせました。<br>
                                アニメーションと演出でゲームの雰囲気を崩さないようにしました。
                            </p>
                            <div>
                                <img src="./res/42.png">
                                <img src="./res/44.png">
                            </div>
                            <p>
                                ビット調フォント導入や、全体マップからステージを選択し、戦闘ステージに遷移すると最初にテキストと黒い背景のバーをアニメーションで表示したり、<br>
                                ゲームUIや体力ゲージをアニメーションさせたりと、ゲームの雰囲気を崩さないようにしました。
                            </p>
                        </section>
                        <section>
                            <h1>工夫 2</h1>
                            <p>
                                カスタマイズ性の高い設計にし、<br>
                                急な仕様変更にも耐えられる設計にしました。
                            </p>
                            <div>
                                <img src="./res/38.png">
                                <img src="./res/37.png">
                                <img src="./res/34.png">
                            </div>
                            <p>
                                各ステージの敵スポーン数を配列で管理したり、<br>
                                テキストや文字列を変数・引数で管理したりと、急な仕様変更にも耐えられる設計にしました。
                            </p>
                        </section>
                    </article>
                `; break;

            case 4:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>作品概要</h1>
                            <p>
                                このゲームは、クラスメイトでチームを組んで開発を行う「チーム制作」の3年春季制作1で作ったものです。<br>
                                リミナルスペースを参考にしたFPSの脱出ゲームとなっています。<br>
                                私はこのゲームの主にゲームシーケンス、全ての画面とUIの開発を担当しました。<br>
                                また、サポートで他の箇所も実装しました。
                            </p>
                            <div>
                                <img src="./res/46.png">
                                <img src="./res/49.png">
                            </div>
                        </section>
                        <section>
                            <p>
                                ・ゲームジャンル<br>
                                　FPS<br><br>
                                ・開発環境 / 使用言語<br>
                                　Unreal Engine 5、Microsoft Visual Studio 2022、C++<br><br>
                                ・制作期間<br>
                                　約2ヶ月<br><br>
                                ・制作人数<br>
                                　2名<br><br>
                                ・担当箇所<br>
                                　ゲームシーケンス、全ての画面とUI、ネットワーク処理
                            </p>
                        </section>
                        <section>
                            <h1>制作背景</h1>
                            <p>
                                プログラミングなどのスキルアップを目的にチームみんなで納得いくゲームを作り、<br>
                                「福岡ゲームコンテストGFF AWARD」に応募&入賞を目指して先生方に「良いね」と言ってもらえる目標で制作しました。
                            </p>
                        </section>
                        <section>
                            <h1>挑戦したこと</h1>
                            <p>
                                ・GameModeやPlayerStateなどあまり触った事がないクラスも積極的に使用しました<br>
                                ・ネットワークマルチプレイに対応させました<br>
                                ・積極的に担当外のタスクもサポートしました
                            </p>
                        </section>
                        <section>
                            <h1>学んだこと</h1>
                            <p>
                                UE上の各クラスがなんのために存在するか、どのように使えばいいか学びなおすことが多くありました。<br>
                                また、その学びにおいて設計の大切さ基礎を疎かにしてはならない理由も学びました。
                            </p>
                        </section>
                        <section>
                            <div>
                                <img src="./res/47.png">
                                <img src="./res/48.png">
                                <img src="./res/50.png">
                            </div>
                        </section>
                    </article>
                `; break;
        }

        await document.querySelector('main').setHTMLWithFade(html);

        for(const img of document.querySelectorAll('main img')) img.onclick = () => { this.dialogOpen(img.src); };
    }

    async dialogOpen(src) {
        let dialog = document.querySelector('dialog');

        if(dialog) return;

        document.body.appendChild(dialog = document.createElement('dialog'));

        await dialog.setHTMLWithFade(`
            <div>
                <img src="${src}"></img>
            </div>
        `);

        dialog.onclick = e => { if(e.target === dialog) this.dialogClose(); };
    }

    async dialogClose() {
        const dialog = document.querySelector('dialog');

        await dialog.setHTMLWithFade('');

        dialog.remove();
    }

}