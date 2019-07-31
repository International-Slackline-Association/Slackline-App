export function convertForce(
  kn?: number,
  newton?: number,
  kgf?: number,
  lbf?: number,
) {
  let k: number;
  let n: number;
  let kf: number;
  let lf: number;

  if (kn) {
    k = kn;
    n = kn * 1000;
    kf = kn * 101.971621;
    lf = kn * 224.808943;
  } else if (newton) {
    k = newton * 0.001;
    n = newton;
    kf = newton * 0.101972;
    lf = newton * 0.224809;
  } else if (kgf) {
    k = kgf * 0.009807;
    n = kgf * 9.80665;
    kf = kgf;
    lf = kgf * 2.204623;
  } else if (lbf) {
    k = lbf * 0.004448;
    n = lbf * 4.448222;
    kf = lbf * 0.453592;
    lf = lbf;
  } else {
    return null;
  }

  return { kn: k, n: n, kgf: kf, lbf: lf };
}
