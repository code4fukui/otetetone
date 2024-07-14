export const drawMarkOval = (g, landmarks, idx, size) => {
  const cw = g.canvas.width;
  const ch = g.canvas.height;
  const p = landmarks[idx];
  g.strokeStyle = "red";
  g.lineWidth = 10;
  g.beginPath();
  g.arc(p.x * cw, p.y * ch, size, 0, 2 * Math.PI);
  g.stroke();
};
