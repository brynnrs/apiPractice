import { getSomethingFromApi } from "./service.js";

console.log("in ui");

const text = await getSomethingFromApi();
console.log(text);