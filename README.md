
## Description

[Nest] framework TypeScript starter repository.
Crud user con prisma.

## Installation

```bash
# instalando proyecto
$ nest new etwas --package-manager pnpm
$ cd etwas

# instalando prisma
$ pnpm i prisma -D
# inicializando prisma
$ prisma init --datasource-provider sqlite

# migracion luego de poner los modulos en schema.prisma
$ prisma migrate dev --name init

# instalar prisma client
$ pnpm install @prisma/client
```



## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support



## Stay in touch

- Author - [Sergio Ramirez](https://kamilmysliwiec.com)link

## License

Nest is [MIT licensed](LICENSE).
