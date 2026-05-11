# otetetone

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An interactive web-based musical instrument that turns your hand gestures into sound. Using your webcam, `otetetone` tracks your hand movements to control the pitch and volume of a synthesizer in real-time, with a playful frog visualization that reacts to your gestures.

## Demos

Try the different versions live in your browser:

*   **[otetetone](https://code4fukui.github.io/otetetone/)**: The original version. The vertical position of your hand controls the pitch, and the distance between your thumb and index finger controls the volume.
*   **[otetetone horizon](https://code4fukui.github.io/otetetone/horizon.html)**: A variation where pitch is mapped to a 2D grid based on your hand's horizontal (fine-tune) and vertical (octave) position.
*   **[otetetone horizon megane](https://code4fukui.github.io/otetetone/horizon-megane.html)**: Combines the `horizon` instrument with face tracking to add virtual glasses to any face in the video stream.

## How It Works

`otetetone` uses MediaPipe Hands to track key points on your hands. The sound is then generated based on the position and shape of your hand.

*   **Pitch Control**:
    *   In the standard version, the pitch is determined by the vertical (Y-axis) position of your hand.
    *   In the `horizon` versions, pitch is mapped to a grid, using both the horizontal (X-axis) and vertical (Y-axis) positions.
*   **Volume Control**: The volume is controlled by the distance between the tips of your thumb and index finger. Pinching them closer together decreases the volume, while moving them apart increases it.
*   **Visual Feedback**: A frog-shaped marker is drawn between your thumb and index finger. Its mouth opens and closes to visually represent the current volume.

## Features

*   **Gesture-Based Sound**: Play music intuitively by moving your hands in front of your camera.
*   **Multi-Hand Tracking**: Supports up to six simultaneous "notes," allowing for complex sounds with both hands.
*   **Real-time Visuals**: A custom frog marker provides immediate visual feedback on your gesture-controlled volume.
*   **AR Face Effects**: The `megane` version uses MediaPipe FaceMesh to overlay glasses on detected faces.
*   **Camera Controls**: Easily toggle the video feed, mirror the display, or switch between front and back cameras.

## Usage

1.  Open one of the [demo](#demos) links.
2.  Allow the browser to access your webcam.
3.  Click **SOUND START** to enable the audio context.
4.  Make a "pinching" gesture with your thumb and index finger in view of the camera to start making sound.

## Technical Details

This project is built with standard web technologies and relies on the following libraries and APIs:

*   **Dependencies**:
    *   [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker) for hand tracking.
    *   [MediaPipe FaceMesh](https://developers.google.com/mediapipe/solutions/vision/face_landmarker) for face tracking (`megane` version).
    *   [Camera.js](https://github.com/code4fukui/Camera) for webcam access.
    *   [XTone.js](https://github.com/code4fukui/okuchitone) for audio synthesis.
*   **Hand Landmarks Used**:
    *   `WRIST (0)`
    *   `THUMB_TIP (4)`
    *   `INDEX_FINGER_MCP (5)`
    *   `INDEX_FINGER_TIP (8)`
*   **Audio Synthesis**:
    *   `freqmin`: 27.5Hz (A0)
    *   `freqmax`: 880Hz (A5) for the standard version, 1760Hz (A6) for `horizon` versions.

## Related Projects

*   [okuchitone](https://code4fukui.github.io/okuchitone/)
*   [smaphotone](https://code4fukui.github.io/smaphotone/)
*   [MediaPipe test](https://code4fukui.github.io/mediapipe-test/)

## Blog Posts (Japanese)

*   [手かざし演奏電子楽器、otetetone（オテテトーン）](https://fukuno.jig.jp/4372)
*   [めがねフェスで遊ぼう、手かざし演奏電子楽器、otetetone horizon（オテテトーンホライゾン）](https://fukuno.jig.jp/4438)

## License

This project is licensed under the MIT License.