# Europe Travel
旅行の魅力を伝えるために旅行日記をホームページで作成している。
ProgateでHTML/CSS/jQueryを学んだのでその知識をアウトプットするためにサイトを作成した。
<img width="952" alt="travel" src="https://user-images.githubusercontent.com/65856455/89713085-3d1da780-d9d0-11ea-9ef0-7bde7d8d5285.PNG">


# Dependency
HTML/CSS/jQueryを用いている。

# 工夫したところ頑張ったところ
メディアクエリを利用して、画面サイズによるレイアウトの崩れを防止した。その際に、レイアウトを考えてフォントサイズや画像のサイズを変更した。


Mapのところで、画像の背景のみopacityを適用させることができなかったので、背景画像の上にrgbaを指定することで背景画像のみを透過させて見えるようにした。
地図を用いて飛行機や電車の移動をわかりやすくした。


Photographsのところで最後の写真を表示するとnextのアイコンを表示させないようにして、アイコンを非表示にしたことによってレイアウトが崩れないようにした。

色を使いすぎて見ずらくならないようにするために配色のバランスを考えた。
メニューバーでページ内リンクに飛べるようにした。アコーディオン機能で、メニューバーの開閉時にアイコンを変えるようにした。

画像をたくさん使っていたので、サイトの読み込みに時間かかってしまっていた。それをlazy loadを用いて改善した。
