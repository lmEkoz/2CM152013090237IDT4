// Calcular coeficiente de corelacion
const r = (xn, yn) => {
  let xbar, ybar;
  xbar = xn.reduce((sum, xi) => sum + xi) / xn.length;
  ybar = yn.reduce((sum, yi) => sum + yi) / yn.length;
  let sumnum = 0;
  for (let i = 0; i < xn.length; i++) {
    sumnum += (xn[i] - xbar) * (yn[i] - ybar);
  }
  let sumden = 0,
    powx = 0,
    powy = 0;
  for (let i = 0; i < xn.length; i++) {
    powx += Math.pow(xn[i] - xbar, 2);
    powy += Math.pow(yn[i] - ybar, 2);
  }
  sumden = Math.sqrt(powx * powy);
  return sumnum / sumden;
};

const m = (xn, yn) => {
  let xy, x_i, y_i, x_i2;
  x_i = xn.reduce((sum, xi) => sum + xi);
  y_i = yn.reduce((sum, yi) => sum + yi);
  x_i2 = 0;
  for (let i = 0; i < xn.length; i++) {
    x_i2 += Math.pow(x[i], 2);
  }

  xy = 0;
  for (let i = 0; i < xn.length; i++) {
    xy += x[i] * y[i];
  }

  return (xy - (x_i * y_i) / x.length) / (x_i2 - Math.pow(x_i, 2) / x.length);
};

const b = (xn, yn) => {
  let xbar, ybar, mx;
  xbar = xn.reduce((sum, xi) => sum + xi) / xn.length;
  ybar = yn.reduce((sum, yi) => sum + yi) / yn.length;
  mx = m(xn, yn);
  return ybar - mx * xbar;
};
