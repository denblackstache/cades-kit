# CadesKit

Cades Browser Kit is a JS wrapper for CryptoPro Browser Plugin API. 

![Tests](https://github.com/denblackstache/cades-kit/actions/workflows/tests.yml/badge.svg) [![npm version](https://badge.fury.io/js/cades-kit.svg)](https://badge.fury.io/js/cades-kit)

The CryptoPro Browser Plugin implements CAdES standard for digital signatures.
CAdES is for [CMS Advanced Electronic Signatures](https://en.wikipedia.org/wiki/CAdES_(computing)).

## Version

| CadesKit | JS SDK API | CryptoPro Browser Plugin |
|----------|------------|--------------------------|
| 0.1.0    | 2.1.2      | 2.x                      |
| 1.0.0    | 2.3.6      | 2.x                      |

## Get Started

### Installation

Execute

    npm install cades-kit

### Examples

* HTML script-tag example

See [examples](examples)

### Browser Compatibility

* Chromium-based browsers: Google Chrome, Opera (Chromium), Microsoft Edge (Chromium), Yandex Browser
* Firefox
* IE 11

## Usage

**List Certificates** (My store by default)
```js
import { StoreFactory } from 'cades-kit';
const store = await new StoreFactory().create();
const certificates = await store.certificates();
```

**Find a Certificate by a thumbprint**
```js
const store = await new StoreFactory().create();
const certificate = await store.findOne(thumbprint);
```

**Simple Signature (attached)**
```js
import { SignService } from 'cades-kit';
const certificate = await store.findOne(thumbprint);
const signature = await new SignService().signBes('text', certificate);
```

**Simple Signature (detached)**
```js
import { SignService } from 'cades-kit';
const certificate = await store.findOne(thumbprint);
const signature = await new SignService().signBes('text', certificate, { detached: true });
```

**Hash**
```js
import { HashService } from 'cades-kit';
const hash = await new HashService().hash('text');
```

## Library API

    npm run build:docs

## License

[MIT](./LICENSE)
