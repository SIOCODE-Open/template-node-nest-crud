# Backend

This is a template for a [Nest.js](https://docs.nestjs.com/)-based CRUD service. You can customize this template by editing the [`.projor/.entities` file](.projor/.entities), and using [ProJor](https://projor.io) to generate the code.

[Learn more about this template in the `.projor/README.md`](.projor/README.md).


## Configuration

You can change the configuration of the generated backend with the following environment variables:

* `BACKEND_DB_HOST`: The hostname of the database. Defaults to `localhost`.
* `BACKEND_DB_PORT`: The port of the database. Defaults to `5432`.
* `BACKEND_DB_USERNAME`: The username to connect to the database. Defaults to `backend_user`.
* `BACKEND_DB_PASSWORD`: The password to connect to the database. Defaults to `backend_password`.
* `BACKEND_DB_NAME`: The name of the database. Defaults to `backend`.
* `PORT`: The port the service listens on. Defaults to `3000`.

## Running

You can also build & run the generated service with Docker Compose (requires [Docker](https://www.docker.com/get-started)):

```bash
docker compose up --build
```

You can build and run the generated service with the following commands. This requires [Node.JS](https://nodejs.org/en/) and [Nest.js CLI](https://docs.nestjs.com/first-steps).

```
npm install
npm run start:dev
```

You can build the Docker container of the generated service with the following command (requires [Docker](https://www.docker.com/get-started)):

```bash
docker build -t example/backend:latest .
```

## API

_Authentication_: The generated API request _no authentication_, and allows _any request_ to be made.

### `GET /backend/v1/product`

Lists all Product entities.

_Response_

```json
[
    {
        "id": "string",
        "name": "string",
        "description": "string",
        "manufacturerId": "string",
    },
]
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type {Array<{id: string, name: string, description: string, manufacturerId: string,  }>} */
  const response = await fetch('http://localhost:3000/backend/v1/product');
  ```

</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X GET http://localhost:3000/backend/v1/product
  ```

</details>

### `GET /backend/v1/product/{id}`

Gets a Product entity by ID.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Response_

```json
{
    "id": "string",
    "name": "string",
    "description": "string",
    "manufacturerId": "string",
}
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type { {id: string, name: string, description: string, manufacturerId: string,  } } */
  const response = await fetch('http://localhost:3000/backend/v1/product/{id}');
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X GET http://localhost:3000/backend/v1/product/{id}
  ```
</details>

### `POST /backend/v1/product`

Creates a new Product entity.

_Request Body_

```json
{
    "name": "string",
    "description": "string",
    "manufacturerId": "string",
}
```

_Response_

```json
{
    "id": "string",
    "name": "string",
    "description": "string",
    "manufacturerId": "string",
}
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type { {id: string, name: string, description: string, manufacturerId: string,  } } */
  const response = await fetch('http://localhost:3000/backend/v1/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "name": "string",
        "description": "string",
        "manufacturerId": "string",
    }),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{
    "name": "string",
    "description": "string",
    "manufacturerId": "string",
  }' http://localhost:3000/backend/v1/product
  ```
</details>

### `DELETE /backend/v1/product/{id}`

Deletes a Product entity by ID.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/product/{id}
  ```
</details>


### `POST /backend/v1/product/{id}/name`

Updates the `name` attribute of a Product entity.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Request Body_

```json
"string"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string"' http://localhost:3000/backend/v1/product/{id}/name
  ```
</details>

### `DELETE /backend/v1/product/{id}/name`

Clears the `name` attribute of a Product entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/name', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/product/{id}/name
  ```
</details>


### `POST /backend/v1/product/{id}/description`

Updates the `description` attribute of a Product entity.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Request Body_

```json
"string"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/description', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string"' http://localhost:3000/backend/v1/product/{id}/description
  ```
</details>

### `DELETE /backend/v1/product/{id}/description`

Clears the `description` attribute of a Product entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/description', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/product/{id}/description
  ```
</details>



### `POST /backend/v1/product/{id}/manufacturer`

Updates the `manufacturer` association of a Product entity.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Request Body_

```json
"string (id of the associated entity)"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/manufacturer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string (id of the associated entity)"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string (id of the associated entity)"' http://localhost:3000/backend/v1/product/{id}/manufacturer
  ```
</details>

### `DELETE /backend/v1/product/{id}/manufacturer`

Clears the `manufacturer` association of a Product entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Product entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/product/{id}/manufacturer', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/product/{id}/manufacturer
  ```
</details>


### `GET /backend/v1/manufacturer`

Lists all Manufacturer entities.

_Response_

```json
[
    {
        "id": "string",
        "name": "string",
        "description": "string",
        "website": "string",
    },
]
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type {Array<{id: string, name: string, description: string, website: string,  }>} */
  const response = await fetch('http://localhost:3000/backend/v1/manufacturer');
  ```

</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X GET http://localhost:3000/backend/v1/manufacturer
  ```

</details>

### `GET /backend/v1/manufacturer/{id}`

Gets a Manufacturer entity by ID.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Response_

```json
{
    "id": "string",
    "name": "string",
    "description": "string",
    "website": "string",
}
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type { {id: string, name: string, description: string, website: string,  } } */
  const response = await fetch('http://localhost:3000/backend/v1/manufacturer/{id}');
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X GET http://localhost:3000/backend/v1/manufacturer/{id}
  ```
</details>

### `POST /backend/v1/manufacturer`

Creates a new Manufacturer entity.

_Request Body_

```json
{
    "name": "string",
    "description": "string",
    "website": "string",
}
```

_Response_

```json
{
    "id": "string",
    "name": "string",
    "description": "string",
    "website": "string",
}
```

<details>
  <summary>JS + fetch</summary>
  
  ```js
  /** @type { {id: string, name: string, description: string, website: string,  } } */
  const response = await fetch('http://localhost:3000/backend/v1/manufacturer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "name": "string",
        "description": "string",
        "website": "string",
    }),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{
    "name": "string",
    "description": "string",
    "website": "string",
  }' http://localhost:3000/backend/v1/manufacturer
  ```
</details>

### `DELETE /backend/v1/manufacturer/{id}`

Deletes a Manufacturer entity by ID.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/manufacturer/{id}
  ```
</details>


### `POST /backend/v1/manufacturer/{id}/name`

Updates the `name` attribute of a Manufacturer entity.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Request Body_

```json
"string"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string"' http://localhost:3000/backend/v1/manufacturer/{id}/name
  ```
</details>

### `DELETE /backend/v1/manufacturer/{id}/name`

Clears the `name` attribute of a Manufacturer entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/name', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/manufacturer/{id}/name
  ```
</details>


### `POST /backend/v1/manufacturer/{id}/description`

Updates the `description` attribute of a Manufacturer entity.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Request Body_

```json
"string"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/description', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string"' http://localhost:3000/backend/v1/manufacturer/{id}/description
  ```
</details>

### `DELETE /backend/v1/manufacturer/{id}/description`

Clears the `description` attribute of a Manufacturer entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/description', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/manufacturer/{id}/description
  ```
</details>


### `POST /backend/v1/manufacturer/{id}/website`

Updates the `website` attribute of a Manufacturer entity.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Request Body_

```json
"string"
```

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/website', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify("string"),
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '"string"' http://localhost:3000/backend/v1/manufacturer/{id}/website
  ```
</details>

### `DELETE /backend/v1/manufacturer/{id}/website`

Clears the `website` attribute of a Manufacturer entity, setting it to `null`.

_Path Parameters_

- `id` (string): The ID of the Manufacturer entity.

_Response_

_204 No Content_

<details>
  <summary>JS + fetch</summary>
  
  ```js
  await fetch('http://localhost:3000/backend/v1/manufacturer/{id}/website', {
    method: 'DELETE',
  });
  ```
</details>

<details>
  <summary>curl</summary>
  
  ```bash
  curl -X DELETE http://localhost:3000/backend/v1/manufacturer/{id}/website
  ```
</details>




## License

This template is licensed under the [MIT License](LICENSE.md).

[ProJor](https://projor.io) is licensed under either the [ProJor Free License](https://license.projor.io) or the [ProJor Commercial License](https://license.projor.io).