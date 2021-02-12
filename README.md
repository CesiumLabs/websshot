# WebsShot
WebsShot is a simple package that allows you to take screenshot of given HTML code.

# Features
- Simple
- Fast
- Allows you to remove tags, attributes
- Supports markdown

## Preview

![img](https://i.imgur.com/eeaJ7T9.png)

# Installing

```sh
npm i --save websshot
```

# Getting started

- Load WebsShot

  ```js
  const WebsShot = require("websshot");
  const window = new WebsShot();
  ```

- Load HTML

  ```js
  window.load("<h1>Hello World</h1>");
  ```

- Take screenshot

  ```js
  await window.screenshot();
  ```

- Save as image

  ```js
  let data = await window.screenshot();
  fs.writeFileSync("./myimage.png", data);
  ```

## Basic Example

```js
const WebsShot = require("websshot");
const window = new WebsShot();
const fs = require("fs");

window.load("<h1>Hello World</h1>");
window.screenshot().then((data) => {
  fs.writeFileSync("./image.png", data);
});
```

## Using Markdown

```js
const WebsShot = require("websshot");
const window = new WebsShot();
const fs = require("fs");

window.load("# Hello World", true);
window.screenshot().then((data) => {
  fs.writeFileSync("./image.png", data);
});
```

## Using both html & markdown

```js
const WebsShot = require("websshot");
const window = new WebsShot();
const fs = require("fs");

window.load("# Hello World<br><br><h2>Goodbye world</h2>", true);
window.screenshot().then((data) => {
  fs.writeFileSync("./image.png", data);
});
```

## Removing script tag from the loaded code

(will return blank picture)

```js
const WebsShot = require("websshot");
const window = new WebsShot({
  removeTags: ["script"],
});
const fs = require("fs");

window.load("<script>location.href = 'https://youtube.com'</script>");
window.screenshot().then((data) => {
  fs.writeFileSync("./image.png", data);
});
```

# API

## WebsShot({ options }, { puppeteerOptions })

Creating a new instance of **WebsShot** allows you to load & capture screenshot.
You can create a new instance using this code:

```js
const WebsShot = require("websshot");
const window = new WebsShot();
```

**WebsShot** accepts these options:
**`options.removeTags`**: This option allows you to remove provided tags before loading the code. Value for this option must be **Array**.
Example:

```js
new WebsShot({
  removeTags: ["script"],
});
```

**`options.removeAttributes`**: This option allows you to remove certain attributes from the code. Value for this option must be **Array**.
Example:

```js
new WebsShot({
  removeAttributes: ["onload"],
});
```

**`options.height`**: You can set window height here. Value for this option must be **Number**.
Example:

```js
new WebsShot({
  height: 800,
});
```

**`options.width`**: You can set window width here. Value for this option must be **Number**.
Example:

```js
new WebsShot({
  width: 1280,
});
```

**`puppeteerOptions`**: You can supply options for `puppeteer.launch()` here. Value for this option must be **Object**.
Example:

```js
new WebsShot(
  {
    width: 1920,
    height: 1080,
  },
  {
    args: ["--no-sandbox"],
  }
);
```

## WebsShot.setUserAgent(userAgent)

This method allows you to set custom user agent.

## WebsShot.load(code, markdown=false)

This method allows you to load your HTML or Markdown code. Code type must be a **String**.
First parameter takes your code and second parameter takes a **Boolean** value. If second parameter is set to `true`, it will render markdown too.
Example:

```js
const WebsShot = require("websshot");
const window = new WebsShot();

window.load("<h1>Hello World</h1>");
```

## WebsShot.loadFromFile(path, markdown=false)

This method allows you to load your HTML or Markdown code from a file.
First parameter takes your **file path** and second parameter takes a **Boolean** value. If second parameter is set to `true`, it will render markdown too.
Example:

```js
const WebsShot = require("websshot");
const window = new WebsShot();

window.loadFromFile("./index.html");

window.screenshot().then((data) => fs.writeFileSync("./htmltest.png", data));
```

## WebsShot.html()

This method allows you to get the loaded HTML code. It might be different from the original code.
Example:

```js
const WebsShot = require("websshot");
const window = new WebsShot();

window.load("<h1>Hello World</h1>");

console.log(window.html());
```

## WebsShot.screenshot(url=false, options)

This method allows you to take screenshot of any website or the loaded html.
**url** website url. Set it to `false` if you want to capture loaded html. By default, it is `false`.
**options** are the options for **[Puppeteer.PageScreenshotOptions](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagescreenshotoptions)**.
Example:

1. Website

```js
const WebsShot = require("websshot");
const window = new WebsShot();

window
  .screenshot("https://youtube.com")
  .then((data) => fs.writeFileSync("./youtube.png", data));
```

2. HTML

```js
const WebsShot = require("websshot");
const window = new WebsShot();

window.load("<h1>Hello World</h1>");

window.screenshot().then((data) => fs.writeFileSync("./htmltest.png", data));
```

## WebsShot.version

Current version of **WebsShot**. You may not use this after instantiating **WebsShot** class.
Example:

```js
const WebsShot = require("websshot");
console.log(WebsShot.version);
```

# Created and maintained by
**[Snowflake107](https://github.com/Snowflake107)**

## Join my discord server
**[Snowflake Studio ❄](https://discord.gg/uqB8kxh)**
