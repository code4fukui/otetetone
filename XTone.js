const audioCtx = new AudioContext();

const createOscillator = (type = "sawtooth") => {
  const oscillator = audioCtx.createOscillator();
  if (type == "custom") {
    // https://developer.mozilla.org/ja/docs/Web/API/BaseAudioContext/createPeriodicWave
    const real = new Float32Array(3);
    const imag = new Float32Array(3);

    real[0] = 0;
    imag[0] = 0;
    real[1] = .5;
    imag[1] = 0;
    real[2] = .5;
    imag[2] = 0;

    const wave = audioCtx.createPeriodicWave(real, imag, { disableNormalization: true });
    oscillator.setPeriodicWave(wave);
  } else {
    oscillator.type = type;
  }
  return oscillator;
};

export class XTone {
  constructor(type) {
    this.type = type;
    this.freqmin = 220;
    this.freqmax = 880;
  }
  play(vol = 0.5, tone = 0.5) {
    if (!this.init) {
      this.init = true;
      const type = "sawtooth";
      this.oscillator = createOscillator(this.type);
      this.gainNode = audioCtx.createGain();
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(audioCtx.destination);
      this.oscillator.start(audioCtx.currentTime);
    }
    if (vol > 0) {
      const freq = this.freqmin + tone * (this.freqmax - this.freqmin);
      this.oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    }
    this.gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
  }
};
