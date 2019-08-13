let jsonResponse: any;
const delayMs = 100;

function fetchWithTimeout(
  url: string,
  options: any,
  timeout: number,
): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout),
    ),
  ]);
}
const delay = t => new Promise(resolve => setTimeout(resolve, t));

export async function convertDolarToEuro(
  dolar: number,
  forceDelay = false,
): Promise<number> {
  if (jsonResponse) {
    if (forceDelay) {
      return delay(delayMs).then(_ => convert(dolar));
    }
    return convert(dolar);
  }
  return fetchWithTimeout(
    'https://api.exchangeratesapi.io/latest',
    undefined,
    delayMs,
  )
    .then(response => response.json())
    .then(json => {
      jsonResponse = json;
      return convert(dolar);
    })
    .catch(err => {
      console.log('Using dolar currency as euro');
      return dolar;
    }); // if no internet simply use dolar
}

function convert(dolar: number) {
  return (
    jsonResponse &&
    jsonResponse.rates &&
    jsonResponse.rates.USD &&
    dolar / jsonResponse.rates.USD
  );
}
