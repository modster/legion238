import * as Plot from "npm:@observablehq/plot";

export function standings(brands, { width, height } = {}) {
  return Plot.plot({
    marginLeft: 90,
    x: { axis: null },
    y: { label: null },
    marks: [
      Plot.barX(brands, {
        x: "score",
        y: "name",
        sort: { y: "x", reverse: true, limit: 12 }
      }),

      Plot.text(brands, {
        text: d => `${d.score}`,
        y: "name",
        x: "score",
        textAnchor: "end",
        dx: -3,
        fill: "white"
      })
    ]
  })
}