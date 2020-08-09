# Server API

## Create development server

Steps development
- To run application in development mode `cd api`
- Run `yarn install`.
- Copy file `env.example` to `.env`.
- Run script => `docker run --detach --env POSTGRES_PASSWORD=123123 --env POSTGRES_USER=postgres --env POSTGRES_DB=ais-api-concept --name postgres_container --publish 5432:5432 postgres:10.4;`
- After run `yarn dev`.

Steps test
- To run application in test mode `cd api`
- Run `yarn install`.
- Run `yarn test`.
- Copy file `env.example` to `.env`.

## Docker up server

- Run `docker-compose up --build`.
- Wait until the db boots and the application executes the automation.
Run `docker-compose up` for a dev server. Navigate to `http://localhost:9000/`.
The API will automatically reload if you change any of the source files.


## server requests route

 * getAll Movies integraded 
 - `http://localhost:9000/movies`.
