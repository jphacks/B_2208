# AI.pic


![mock-up-poster-in-modern-dining-room-interior-design-with-white-empty-wall](https://user-images.githubusercontent.com/115523855/197341246-c5abbca6-6641-4759-aafe-107c5a3c035e.jpg)
<a href="https://jp.freepik.com/free-photo/_13109580.htm#query=empty%20room%20interior&position=3&from_view=search&track=sph">著作者：vanitjan</a>／出典：Freepik

## 製品概要
『AI.pic』は部屋の雰囲気にマッチした利用者好みの絵を部屋の写真を撮影・好みの絵を選択することで簡単に作成できるwebサービスです。

製品ページ：https://jphack.vercel.app/

スマートフォンで起動してください。
カメラが起動しない場合、お使いのスマートフォンのカメラの設定を変更してください。
<br>
<br>
<br>
## 背景(製品開発のきっかけ、課題等）

新型コロナウイルスの影響で私たちは家で生活をすることが多くなりました。
そこで部屋に絵を飾ることで空間に彩りをもたらし、より心地のよい空間に変えることができます。
しかし、いざ絵を飾ろうとしてみても

『何を飾ればいいのか？』
『どんなテイストが部屋に合うの？』
『絵のサイズは？』
『額縁はどうする？』
『これ本当に部屋にマッチしてるかな、、？』

などなど、飾ることのメリットよりもハードルの高さが上回り、断念する方がとても多いと思います。
<br>
そのような現状を変えるために、簡単に『部屋にマッチした好みの絵』を作成できるサービスを考えました。
<br>
<br>
<br>
## 製品説明（具体的な製品の説明）
AI.picは部屋に合った(部屋要素)好みの絵(その人の好み)を部屋の写真・選択された絵から抽出し、部屋に飾る最適な絵を作成します。

1. AI.picのサイトにアクセスし、『画像をアップロード』ボタンを押す。
2. カメラアプリ内の枠の指示に従い、飾りたい場所を撮影し、アップロードする。
3. 次に、『好みの絵を選んでください』を押すと、絵が4枚表示され、1枚選択する。
4. この選択を４回行う。
5. 全て選択すると『これらの写真でいいですか？』と表示され、『はい』を選択する。
6. 作成された絵が、初めに撮影した部屋の写真にはめ込まれて表示される。
   ＊30秒以上経っても絵が生成されない場合、サーバーが停止している可能性があります。
   
<img src="https://user-images.githubusercontent.com/115523855/197347196-faae8c70-671e-4a71-b1bf-bad8d4bd3098.gif" width="25%" />
<br>

## 特長
#### 1. 特長1
絵の知識がない人でも簡単に部屋に合う最適な絵を手に入れることができる。
#### 2. 特長2
デジタルサイネージディスプレイなどで絵を壁に飾れば、その日その日の気分に合った絵を日替わりで楽しむことができる。
いつもは変わらない部屋の雰囲気を変えることができ、リモートワークで毎日家にいたとしても常に新鮮な心持ちでいることができる。

### 今後の展望
* - 作成した絵・額縁を購入できるようにする(有料)
    - 『作成した絵・額縁』を気に入った場合、完成後の画面の『注文する』を押し、情報を入力すると数日後に『高画質版の絵・額縁』が家に届きます。
    - つまり、作成・表示までを無料で行い、それ以降有料にする。
    - 作成・表示の段階：スマホの画面で見るには問題ないけど、部屋に飾る大きさにはできない画質にする。
    - 『高画質版の絵・額縁』発送段階：高画質
＊ - 今後、部屋に飾る絵だけでなく、服の柄やマグカップのデザインなども行えるようにする。
<br>

### 注力したこと（こだわり等）
- 完成後の画面に『再生成』ボタンを追加する。
    - 内部のパラメーターを変更することで、『抽出された好み』の情報の範囲内で変更した絵を再表示。
    - 利用者が納得がいくまで、再生成できる。
- 『最適な絵・額縁』を選択するロジックの改善
    - 今回yellowkornerというギャラリーショップで、お客さんの『服装、話し方、同伴している人の属性』などの情報から最適な絵を提案する仕事をしているデザイナーをチームに招き、感覚的にやっていたことをプログラムに落とし込みました。
- 選択する画像に画像生成AIに渡す英単語が紐づけられており、画像を選択するごとに利用者の好みがより深く反映されるようになっています。


## 開発技術
### 活用した技術
#### API・データ
- Stable Diffuision

#### フレームワーク・ライブラリ・モジュール
- React
- firebase 

### 独自技術
#### ハッカソンで開発した独自機能・技術
* 『最適な絵・額縁』を選択するロジックの開発
