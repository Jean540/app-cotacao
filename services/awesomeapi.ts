import { Money } from "../types/money";

const baseUrl = "https://economia.awesomeapi.com.br/json";

export const getUSD = async (): Promise<number> => {
  try {
    let url = baseUrl + "/last/USD-BRL";
    const req = await fetch(url);
    const json: Money = await req.json();

    if (json.USDBRL) {
      return Number(json.USDBRL.ask);
    }

    return 0;
  } catch (error) {
    return 0;
  }
};

export const getEUR = async (): Promise<number> => {
  try {
    let url = baseUrl + "/last/EUR-BRL";
    const req = await fetch(url);
    const json: Money = await req.json();

    if (json.EURBRL) {
      return Number(json.EURBRL.ask);
    }

    return 0;
  } catch (error) {
    return 0;
  }
};

/*
import { Money } from "../types/money";

export const GetDolar = async () => {
  alert("entrei");
  return fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then((res) => res.json())
    .then((json: Money) => json)
    .catch((err) => err);
};

*/
