let jsonResponse: any;

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
export async function convertDolarToEuro(dolar: number): Promise<number> {
  if (jsonResponse) {
    return convert();
  }
  return fetchWithTimeout(
    'https://api.exchangeratesapi.io/latest',
    undefined,
    1000,
  )
    .then(response => response.json())
    .then(json => {
      jsonResponse = json;
      return convert();
    })
    .catch(err => {
      console.log('Using dolar currency as euro');
      return dolar;
    }); // if no internet simply use dolar
}

function convert() {
  return (
    jsonResponse &&
    jsonResponse.rates &&
    jsonResponse.rates.USD &&
    jsonResponse / jsonResponse.rates.USD
  );
}
