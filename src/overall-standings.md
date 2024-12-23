---
title: Overall Standings
---

# Reindeer Races Overall Standings
```js
import {standings} from "./components/standings.js";
```

```js
const plot = FileAttachment("./data/standings.json").json();
```

```js
standings(plot, {height: 300})
```
