# Projects API

The Projects API provides endpoints for retrieving and creating portfolio projects.

## Endpoints

### Get all projects

`GET /api/projects`

Retrieves all projects stored in the database.

#### Response

**200 OK**

Returns an array of project objects.

| Field  | Type    | Description                           |
| ------ | ------- | ------------------------------------- |
| `id`   | integer | The unique identifier of the project. |
| `name` | string  | The name of the project.              |
| `type` | string  | The type of project.                  |

#### Example response

```json
[
  {
    "id": 1,
    "name": "My Portfolio",
    "type": "Technical Writing"
  },
  {
    "id": 6,
    "name": "API Documentation Test",
    "type": "Developer Documentation"
  }
]
```

---

### Create a project

`POST /api/projects`

Creates a new project and stores it in the database.

#### Request body

The request body accepts the following fields:

| Field  | Type   | Required | Description              |
| ------ | ------ | -------- | ------------------------ |
| `name` | string | Yes      | The name of the project. |
| `type` | string | Yes      | The type of project.     |

#### Example request

```json
{
  "name": "API Documentation Test",
  "type": "Developer Documentation"
}
```

#### Response

**200 OK**

Returns the newly created project.

| Field  | Type    | Description                                      |
| ------ | ------- | ------------------------------------------------ |
| `id`   | integer | The unique identifier generated for the project. |
| `name` | string  | The name of the project.                         |
| `type` | string  | The type of project.                             |

#### Example response

```json
{
  "id": 6,
  "name": "API Documentation Test",
  "type": "Developer Documentation"
}
```

#### Validation behavior

The API currently accepts requests in which `name` or `type` is omitted. In these cases, the corresponding database field is stored as `null`.

For example:

```json
{
  "name": "Test"
}
```

returns:

```json
{
  "id": 7,
  "name": "Test",
  "type": null
}
```

Similarly, omitting `name` results in a `null` value for `name`.

> **Note:** The request schema currently describes `name` and `type` as required, but the API implementation does not currently enforce this requirement.
