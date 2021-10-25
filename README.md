# `nestjs-swagger-api-http-response-decorators`

[![npm version](https://img.shields.io/npm/v/nestjs-swagger-api-http-response-decorators.svg)](https://www.npmjs.com/package/nestjs-swagger-api-http-response-decorators)
[![npm downloads](https://img.shields.io/npm/dt/nestjs-swagger-api-http-response-decorators.svg)](https://www.npmjs.com/package/nestjs-swagger-api-http-response-decorators)

![demo](https://user-images.githubusercontent.com/13461315/137850427-8c36ba4c-1067-4153-92dd-113c042ea21a.png)

## Installation

```bash
npm i @nestjs/swagger nestjs-swagger-api-http-response-decorators
# or
yarn add @nestjs/swagger nestjs-swagger-api-http-response-decorators
```

## What

Taking the following TypeScript enumerate as an example:

```ts
enum HttpStatus {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLYHINTS = 103
  // ...
}
```

this small package exports `@ApiXResponse(opts)` decorator factories (read more about them [here](https://docs.nestjs.com/openapi/decorators)) for each enum field listed above, **including** the ones already available on [`@nestjs/swagger`](https://github.com/nestjs/swagger) package.

The `X` part will be the name of that enum field in pascal case.  
eg: `HTTP_VERSION_NOT_SUPPORTED` becomes `HttpVersionNotSupported`

In order to make this package as lean as possible, only decorators there are not available in `@nestjs/swagger` are implemented.
The other ones are exported as-is via `export * from '@nestjs/swagger'`.

## Why

`@nestjs/swagger` does not have `@ApiX` decorators for all available HTTP status code out there (and this is why they export the `@ApiResponse`), and **["There are no plans to add more decorators."](https://github.com/nestjs/swagger/issues/1501#issuecomment-945644971)**.

## How `index.ts` is being created?

I'm lazy, thus I made two simple scripts to generate the TypeScript code from missing `@ApiX` decorators, relying on `HttpStatus` enum exported from `@nestjs/common` package.

Using the following tools:

- `wget`
- `grep`
- `sha1sum`
- Node.js 

This is how I'm generate the `index.ts` (on root dir.) file:

```
$ npm ci

$ cd scripts
$ ./fetch-missing-decorators.sh
$ ./generate-index-ts-file.js

$ cd ../meta
$ sha1sum missing > missing.sha1
$ # ... later on, repeat the whole process and then
$ sha1sum -c missing.sha1
```
