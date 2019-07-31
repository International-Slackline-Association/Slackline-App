export function convertMass(kg?: number, pound?: number, ton?: number) {
  let k: number;
  let p: number;
  let t: number;

  if (kg) {
    k = kg;
    p = kg * 2.204623;
    t = kg * 0.001;
  } else if (pound) {
    k = pound * 0.453592;
    p = pound;
    t = pound * 0.000454;
  } else if (ton) {
    k = ton * 1000;
    p = ton * 2204.622622;
    t = ton;
  } else {
    return null;
  }

  return { kg: k, pound: p, ton: t };
}
