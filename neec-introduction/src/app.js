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

        document.querySelector('head').innerHTML += '<link rel="icon" href="https://github.com/kanato-shimabukuro.png">';

        document.title = '日本工学院を紹介';

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
                    <button>トップページ</button>
                    <button>学校のまわり</button>
                    <button>学食</button>
                    <button>図書館</button>
                    <button>その他写真など</button>
                </nav>
            </header>
            <footer>
                <p>© 2021 <a href="https://kanato-shimabukuro.github.io" target="_blank">kanato-shimabukuro</a>. All rights reserved.</p>
            </footer>
        `);

        for(let i = 1; i <= 24; i++) {
            await new Promise(resolve => {
                const img = new Image();

                img.onload = img.onerror = resolve;
                img.src    = `./res/${i}.jpg`
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
            <article class="title" style="background-image: url(./res/` + [ '10', '2', '20', '7', '14' ][select] + `.jpg);">
                <section>
                    <h1>私が在籍している日本工学院の<br>魅力や特徴などについて紹介します。</h1>
                    <p>ITスペシャリスト科 - 島袋叶望（K021C1079）</p>
                </section>
            </article>
        `;

        const access = `
            <section>
                <h1>アクセス</h1>
                <p>JR 蒲田駅 から徒歩10分ほどです。</p>
                <iframe style="block-size: 30rem; border-radius: inherit;" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6491.437684957132!2d139.709962225836!3d35.56064537089031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60186043463ac57b%3A0x39d23c6afc7e68a8!2z5pel5pys5bel5a2m6Zmi5bCC6ZaA5a2m5qChIOiSsueUsOagoQ!5e0!3m2!1sja!2sjp!4v1642690930608!5m2!1sja!2sjp"></iframe>
            </section>
        `;

        switch(select) {
            case 0:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>このサイトについて</h1>
                            <p>このサイトでは、私が在籍している 日本工学院 蒲田校 の魅力や特徴などを紹介しています。</p>
                        </section>
                        <section>
                            <h1>学校について</h1>
                            <p>日本工学院は東京都にある私立の総合専門学校で、1947年の創立以来、約26万人以上の卒業生を輩出し、78年の歴史を持つ伝統校です。</p>
                            <div>
                                <img src="./res/23.jpg">
                                <img src="./res/24.jpg">
                            </div>
                        </section>
                        <section>
                            <h1>特徴</h1>
                            <p>
                                このサイトでは、私が在籍している 日本工学院 蒲田校 の魅力や特徴などを紹介しています。<br>
                                蒲田校と八王子校の2キャンパスで、6つのカレッジ・35学科・100以上の専門分野を展開しており、<br>
                                AI・ゲーム・デザイン・音楽・放送・建築・ITなど、多彩な分野で、実習中心のカリキュラムと業界連携による教育を行っています。
                            </p>
                        </section>
                        ` + access + `
                    </article>
                `; break;

            case 1:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>学校のまわりについて</h1>
                            <p>このページでは、私が在籍している 日本工学院 蒲田校 の周辺を紹介します。</p>
                        </section>
                        <section>
                            <h1>工学院通り</h1>
                            <p>最寄りのJR 蒲田駅から日本工学院の間には通りが存在しており、居酒屋などが密集しています。</p>
                            <div>
                                <img src="./res/1.jpg">
                                <img src="./res/2.jpg">
                                <img src="./res/12.jpg">
                                <img src="./res/13.jpg">
                            </div>
                            <p>また、日本工学院の手前には系列校である東京工科大学の医療保険学部と、アートギャラリーがあります。</p>
                            <div>
                                <img src="./res/9.jpg">
                            </div>
                        </section>
                        ` + access + `
                    </article>
                `; break;

            case 2:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>日本工学院の学食</h1>
                            <p>このページでは、私が在籍している 日本工学院 蒲田校 にある学食を紹介します。</p>
                        </section>
                        <section>
                            <h1>コスパ最強</h1>
                            <p>日本工学院には2つの食堂が存在しており、どちらも12:00には人が集まり券売機の前は長蛇の列ができます。<br>また、一般の方も利用することも可能で、テイクアウトもできます。</p>
                            <div>
                                <img src="./res/20.jpg">
                                <img src="./res/19.jpg">
                                <img src="./res/8.jpg">
                            </div>
                            <p>ほぼ全ての料理が500円以内です。</p>
                            <div>
                                <img src="./res/21.jpg">
                                <img src="./res/22.jpg">
                            </div>
                        </section>
                        ` + access + `
                    </article>
                `; break;

            case 3:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>日本工学院の図書館</h1>
                            <p>このページでは、私が在籍している 日本工学院 蒲田校 にある図書館を紹介します。</p>
                        </section>
                        <section>
                            <h1>幅広い書籍</h1>
                            <p>日本工学院の図書館には専門誌から雑誌、いつの時代に出版されたのかわからない年代物の本など、<br>多くの書籍が揃っており、幅広いニーズをカバーしています。</p>
                            <div>
                                <img src="./res/7.jpg">
                            </div>
                            <div>
                                <img src="./res/6.jpg">
                            </div>
                            <p>???（ハンドブックとは...）</p>
                        </section>
                        ` + access + `
                    </article>
                `; break;

            case 4:
                html = `
                    ` + title + `
                    <article>
                        <section>
                            <h1>その他の写真</h1>
                            <p>このページでは、その他の写真などを掲載しています。</p>
                        </section>
                        <section>
                            <div>
                                <img src="./res/3.jpg">
                                <img src="./res/4.jpg">
                                <img src="./res/5.jpg">
                                <img src="./res/11.jpg">
                                <img src="./res/14.jpg">
                            </div>
                            <div>
                                <img src="./res/15.jpg">
                                <img src="./res/16.jpg">
                                <img src="./res/17.jpg">
                                <img src="./res/18.jpg">
                            </div>
                        </section>
                        ` + access + `
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