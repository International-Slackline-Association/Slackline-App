export async function convertDolarToEuro(dolar: number): Promise<number> {
  return fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(
      json => json && json.rates && json.rates.USD && dolar / json.rates.USD,
    );
}
