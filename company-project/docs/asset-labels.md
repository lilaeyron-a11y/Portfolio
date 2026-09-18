# Asset Labels API

## Overview

The AtlasCloud Asset Labels API allows users to manage labels used to categorize and organize assets. The API supports retrieving existing labels, creating new labels, and deleting labels.

## Endpoints

### Get All Labels

Retrieves all available asset labels.

`GET /api/v1/labels`

#### Response

**200 OK**

Returns an array of label objects.

| Field   | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| `id`    | integer | The unique ID of the label.      |
| `name`  | string  | The name of the label.           |
| `color` | string  | The color assigned to the label. |

#### Response Example

```json
[
  {
    "id": 1,
    "name": "Urgent",
    "color": "#E5484D"
  },
  {
    "id": 2,
    "name": "Customer",
    "color": "#3B82F6"
  },
  {
    "id": 3,
    "name": "Internal",
    "color": "#10B981"
  }
]
```

---

### Create a Label

Creates a new asset label.

`POST /api/v1/labels`

#### Request Body

| Field   | Type   | Required | Description                                                          |
| ------- | ------ | -------- | -------------------------------------------------------------------- |
| `name`  | string | Yes      | The name of the label.                                               |
| `color` | string | No       | The color assigned to the label. If omitted, the API uses `#6B7280`. |

#### Request Example

```json
{
  "name": "Internal",
  "color": "#10B981"
}
```

#### Response

**201 Created**

Returns the newly created label.

#### Response Example

```json
{
  "id": 3,
  "name": "Internal",
  "color": "#10B981"
}
```

#### Error Response

**400 Bad Request**

Returned when the required `name` field is omitted.

```json
{
  "error": "Label name is required"
}
```

#### Example: Create a Label Without a Color

If the `color` field is omitted, the API assigns the default color `#6B7280`.

Request:

```json
{
  "name": "No Color"
}
```

Response:

```json
{
  "id": 4,
  "name": "No Color",
  "color": "#6B7280"
}
```

---

### Delete a Label

Deletes an existing asset label.

`DELETE /api/v1/labels/{id}`

#### Path Parameters

| Parameter | Type    | Required | Description                    |
| --------- | ------- | -------- | ------------------------------ |
| `id`      | integer | Yes      | The ID of the label to delete. |

#### Response

**204 No Content**

The label was successfully deleted. The response does not contain a response body.

#### Error Response

**404 Not Found**

Returned when the specified label ID does not exist.

```json
{
  "error": "Label not found"
}
```

#### Example

`DELETE /api/v1/labels/999`

```json
{
  "error": "Label not found"
}
```

## Status Codes

| Status Code       | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `200 OK`          | The request was successful.                                  |
| `201 Created`     | A new label was successfully created.                        |
| `204 No Content`  | A label was successfully deleted.                            |
| `400 Bad Request` | The required `name` field was omitted when creating a label. |
| `404 Not Found`   | The specified label does not exist.                          |
