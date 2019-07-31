export function convertLength(meters?: number, feet?: number, inches?: number) {
  let m: number;
  let f: number;
  let i: number;

  if (meters) {
    m = meters;
    f = meters * 3.280840;
    i = meters * 39.370079;
  } else if (feet) {
    m = feet * 0.304800;
    f = feet;
    i = feet * 12;
  } else if (inches) {
    m = inches * 0.0254;
    f = inches * 0.083333;
    i = inches;
  } else {
    return null;
  }

  return { meters: m, feet: f, inches: i };
}
