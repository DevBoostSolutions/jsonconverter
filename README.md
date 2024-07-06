# JsonConverter
> A TypeScript utility for serializing and deserializing JSON data. 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

This project provides a simple utility class `JsonConverter` with static methods to serialize TypeScript objects into JSON strings and deserialize JSON strings back into TypeScript objects. It ensures type safety during deserialization by allowing you to specify the expected type.

## Features

- Serialize TypeScript objects to JSON strings.
- Deserialize JSON strings to TypeScript objects with type safety.


![](header.png)

## Installation

Npm: 
```sh
npm install @devboostsolution/jsonconverter
```

Yarn:

```sh
yarn install @devboostsolution/jsonconverter
```

## Usage example

```typescript
import { JsonConverter } from @devboostsolution/jsonconverter

const data: Order = {
  id: 1,
  user: { id: 1, name: 'John', email: '', age: 30 },
  products: [
    { id: 1, name: 'Product 1', price: 100, quantity: 1, category: { id: 1, name: 'Category 1' } },
    { id: 2, name: 'Product 2', price: 200, quantity: 2, category: { id: 2, name: 'Category 2' } }
  ]
};

const dataString = JsonConverter.serialize(data);
```

## Development setup
Clone the repository 

```sh
make install
npm test
```



## Meta

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/DevBoostSolutions/jsonconverter](https://github.com/Blue-Pheasant)

## Contributing

1. Fork it (<https://github.com/DevBoostSolutions/jsonconverter>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
