# `jest` & `jest-resolve` & `resolve.exports` resolver bug

This repo contains code to reproduce a bug in [`resolve.exports`](https://github.com/lukeed/resolve.exports) and jest.

## The bug

By default `jest` uses `jest-resolve` to resolve imports between files. If an import is to another nodejs package which has `exports` field in `package.json`, it uses `resolve.exports` package to resolve the import. `resolve.exports` does not work correctly with files that start with dot (`.`).

`aws-cdk-lib` defines such an export mapping in its `package.json`:

```
{
  ...
  "exports": {
    ...
    "./.warnings.jsii.js": "./.warnings.jsii.js",
    ...
  }
}
```

The bug is on [this line](https://github.com/lukeed/resolve.exports/blob/master/src/index.js#L65)

## To reproduce

Run the tests using `npm test`

## Quick fix

Define custom resolver that explicitly points to the correct file to import. See [`resolver.js`](resolver.js) and [`jest.config.js`](jest.config.js).
