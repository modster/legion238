---
title: Current Race
---
# Race 1

```js
import {standings} from "./components/standings.js";
```

```js
const plot = FileAttachment("./data/standings.json").json();
```

```js
standings(plot, {height: 300})
```
