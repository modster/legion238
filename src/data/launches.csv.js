import {csvFormat, tsvParse} from "d3-dsv";
import {utcParse} from "d3-time-format";

async function text(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

const jsonurl = "https://good-cat-29.deno.dev"

// “Top” vehicles
const PLAYERS = new Set([
  "Donner",
  "Blitzen",
  "Cupid",
  "Rudolph",
  "Vixen",
  "Dasher",
  "Comet",
  "Prancer",
  "Dancer",
  "Santa",
  "Grinch",
  "Mrs. Claus"
]);
// Write out csv formatted data.
process.stdout.write(csvFormat(launchHistory));
