export const drawMarkFrog = (g, landmarks, idx1, idx2, vol, size) => {
  const cw = g.canvas.width;
  const ch = g.canvas.height;
  const p1 = landmarks[idx1];
  const x1 = p1.x * cw;
  const y1 = p1.y * ch;
  const p2 = landmarks[idx2];
  const x2 = p2.x * cw;
  const y2 = p2.y * ch;

  const th = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;

  size *= cw * .3;
  const lh = .3;
  const gw = vol * size;

  const x0 = (x1 + x2) / 2;
  const y0 = (y1 + y2) / 2;
  const th2 = th + Math.PI / 2;
  const x1a = x0 + Math.cos(th2) * gw;
  const y1a = y0 + Math.sin(th2) * gw;
  const x2a = x0 - Math.cos(th2) * gw;
  const y2a = y0 - Math.sin(th2) * gw;
  g.fillStyle = "lightgreen";
  g.beginPath();
  g.ellipse(x1a, y1a, size, size * lh, th, 0, Math.PI);
  g.fill();
  g.beginPath();
  g.ellipse(x2a, y2a, size, size * lh, th, Math.PI, Math.PI * 2);
  g.fill();

  g.fillStyle = "#222";
  const eyesize = size * .1;
  const eh = size * .3;
  const ew = size * .8 / 2;
  const x1b = x2a - Math.cos(th2) * eh + Math.cos(th) * ew;
  const y1b = y2a - Math.sin(th2) * eh + Math.sin(th) * ew;
  const x2b = x2a - Math.cos(th2) * eh - Math.cos(th) * ew;
  const y2b = y2a - Math.sin(th2) * eh - Math.sin(th) * ew;
  g.beginPath();
  g.arc(x1b, y1b, eyesize, 0, 2 * Math.PI);
  g.fill();
  g.beginPath();
  g.arc(x2b, y2b, eyesize, 0, 2 * Math.PI);
  g.fill();
};
