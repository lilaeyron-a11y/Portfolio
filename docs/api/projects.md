# Projects API

The Projects API allows you to create and retrieve portfolio projects.

## Endpoints

### Get all projects

`GET /api/projects`

Returns all projects stored in the database.

#### Example response

```json
[
  {
    "id": 1,
    "name": "My Portfolio",
    "type": "Technical Writing"
  },
  {
    "id": 2,
    "name": "My Portfolio",
    "type": "Technical Writing"
  }
]
```

### Create a project

`POST /api/projects`

Creates a new project and stores it in the database.

#### Request body

The request body must contain the following fields:

| Field  | Type   | Required | Description             |
| ------ | ------ | -------- | ----------------------- |
| `name` | string | No       | The name of the project |
| `type` | string | No       | The type of project     |

#### Example request

```json
{
  "name": "My Portfolio",
  "type": "Technical Writing"
}
```
#### Example response

```json
{
  "id": 4,
  "name": "API Documentation Test",
  "type": "Developer Documentation"
}

#### Error response

If `name` or `type` is missing, the API returns `400 Bad Request`.

```json
{
  "error": "name and type are required"
}