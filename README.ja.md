# otetetone

手のジェスチャーを音に変える、インタラクティブなWebベースの電子楽器です。Webカメラを使用し、`otetetone`が手の動きをトラッキングしてシンセサイザーのピッチ（音高）とボリューム（音量）をリアルタイムに制御します。ジェスチャーに反応する遊び心のあるカエルのビジュアルも表示されます。

## デモ

ブラウザ上で各バージョンを実際に試すことができます：

*   **[otetetone](https://code4fukui.github.io/otetetone/)**: オリジナルバージョン。手の垂直位置でピッチを、親指と人差し指の距離でボリュームを制御します。
*   **[otetetone horizon](https://code4fukui.github.io/otetetone/horizon.html)**: 手の水平位置（微調整）と垂直位置（オクターブ）に基づいて、ピッチを2Dグリッドにマッピングしたバリエーションです。
*   **[otetetone horizon megane](https://code4fukui.github.io/otetetone/horizon-megane.html)**: `horizon`の楽器にフェイストラッキングを組み合わせ、ビデオストリーム内の顔にバーチャルなメガネを追加するバージョンです。

## 動作原理

`otetetone`は、MediaPipe Handsを使用して手のキーポイントをトラッキングします。そして、手の位置と形状に基づいて音を生成します。

*   **ピッチ制御**:
    *   標準バージョンでは、ピッチは手の垂直（Y軸）位置によって決まります。
    *   `horizon`バージョンでは、水平（X軸）と垂直（Y軸）の両方の位置を使用して、ピッチがグリッドにマッピングされます。
*   **ボリューム制御**: ボリュームは、親指と人差し指の先端の距離によって制御されます。指を近づける（つまむ）とボリュームが下がり、離すと上がります。
*   **視覚的フィードバック**: 親指と人差し指の間にカエル型のマーカーが描画されます。口が開閉することで、現在のボリュームを視覚的に表現します。

## 特徴

*   **ジェスチャーベースのサウンド**: カメラの前で手を動かすだけで、直感的に音楽を演奏できます。
*   **マルチハンドトラッキング**: 最大6つの「音」を同時にサポートし、両手で複雑なサウンドを奏でることができます。
*   **リアルタイムビジュアル**: カスタムのカエルマーカーが、ジェスチャーで制御されたボリュームを即座に視覚的にフィードバックします。
*   **ARフェイスエフェクト**: `megane`バージョンでは、MediaPipe FaceMeshを使用して、検出された顔にメガネをオーバーレイ表示します。
*   **カメラコントロール**: ビデオ映像の表示切り替え、画面のミラーリング、フロント/バックカメラの切り替えが簡単にできます。

## 使い方

1.  [デモ](#demos)のリンクのいずれかを開きます。
2.  ブラウザにWebカメラへのアクセスを許可します。
3.  **SOUND START**をクリックして、オーディオコンテキストを有効にします。
4.  カメラの認識範囲内で、親指と人差し指で「つまむ」ジェスチャーをすると音が鳴り始めます。

## 技術詳細

このプロジェクトは標準的なWeb技術で構築されており、以下のライブラリとAPIに依存しています。

*   **依存関係**:
    *   ハンドトラッキング用: [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
    *   フェイストラッキング用（`megane`バージョン）: [MediaPipe FaceMesh](https://developers.google.com/mediapipe/solutions/vision/face_landmarker)
    *   Webカメラアクセス用: [Camera.js](https://github.com/code4fukui/Camera)
    *   オーディオ合成用: [XTone.js](https://github.com/code4fukui/okuchitone)
*   **使用している手のランドマーク**:
    *   `WRIST (0)`
    *   `THUMB_TIP (4)`
    *   `INDEX_FINGER_MCP (5)`
    *   `INDEX_FINGER_TIP (8)`
*   **オーディオ合成**:
    *   `freqmin`: 27.5Hz (A0)
    *   `freqmax`: 標準バージョンは 880Hz (A5)、`horizon`バージョンは 1760Hz (A6)

## 関連プロジェクト

*   [okuchitone](https://code4fukui.github.io/okuchitone/)
*   [smaphotone](https://code4fukui.github.io/smaphotone/)
*   [MediaPipe test](https://code4fukui.github.io/mediapipe-test/)

## ブログ記事（日本語）

*   [手かざし演奏電子楽器、otetetone（オテテトーン）](https://fukuno.jig.jp/4372)
*   [めがねフェスで遊ぼう、手かざし演奏電子楽器、otetetone horizon（オテテトーンホライゾン）](https://fukuno.jig.jp/4438)

## ライセンス

このプロジェクトは MIT License のもとで公開されています。
