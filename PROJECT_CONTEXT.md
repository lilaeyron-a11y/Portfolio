# Project Context — AtlasCloud Asset Labels API

## Role of Codex

You are the engineering assistant for this project.

The user is a beginner technical writer building a realistic technical-writing portfolio project. Do not take over the technical-writing work. The user should write the documentation themselves.

Your job is to help with:
- Backend/code setup and troubleshooting
- Explaining code when the user asks
- API testing support
- OpenAPI tooling
- Swagger UI
- Git/GitHub workflow
- CI/CD
- Build/deployment issues
- Other engineering tasks needed to complete the project

When the user is writing documentation, do not write the final documentation for them unless they explicitly ask. Help them understand the implementation and review their work instead.

Keep instructions practical and step-by-step. The user prefers doing one step at a time rather than receiving a huge list of instructions.

---

# Portfolio Project

## Simulated company

**AtlasCloud**

AtlasCloud is a fictional cloud-based asset management platform.

## Product feature

**Asset Labels**

Asset Labels allow users to categorize assets so they can organize and identify them more easily.

Examples:
- Urgent
- Customer
- Internal

For the current API, users can:
- View available labels
- Create labels
- Delete labels

---

# Project Location

Windows:

`F:\Me\Portfolio\company-project\`

Current files:

```text
company-project/
├── server.js
├── openapi.yaml
└── package.json
```

The portfolio itself is also being built in:

`F:\Me\Portfolio`

---

# Current Backend

The current `server.js` is:

```js
const express = require("express");

const app = express();

app.use(express.json());

const labels = [
  {
    id: 1,
    name: "Urgent",
    color: "#E5484D"
  },
  {
    id: 2,
    name: "Customer",
    color: "#3B82F6"
  }
];

app.get("/api/v1/labels", (req, res) => {
  res.json(labels);
});

app.post("/api/v1/labels", (req, res) => {
  const { name, color } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Label name is required"
    });
  }

  const label = {
    id: labels.length + 1,
    name,
    color: color || "#6B7280"
  };

  labels.push(label);

  res.status(201).json(label);
});

app.delete("/api/v1/labels/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = labels.findIndex(label => label.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Label not found"
    });
  }

  labels.splice(index, 1);

  res.status(204).send();
});

app.listen(3001, () => {
  console.log("Asset API running on port 3001");
});
```

The server currently runs on:

`http://localhost:3001`

The user has successfully run it and seen:

`Asset API running on port 3001`

---

# Current OpenAPI

The engineer initially provided this intentionally rough OpenAPI document:

```yaml
openapi: 3.0.0

info:
  title: Asset Labels API
  version: 1.0.0
  description: API for managing labels.

paths:
  /api/v1/labels:
    get:
      summary: Get labels
      responses:
        "200":
          description: Successful response

    post:
      summary: Create label
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                color:
                  type: string

      responses:
        "200":
          description: Label created

  /api/v1/labels/{id}:
    delete:
      summary: Delete label
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer

      responses:
        "204":
          description: Label deleted
```

Do not assume this OpenAPI document is correct.

For example, the POST implementation actually returns `201`, while the current OpenAPI says `200`.

We will update OpenAPI later after documenting and testing the API.

---

# API Testing Already Completed

The user tested the API using Postman.

## GET

Request:

`GET http://localhost:3001/api/v1/labels`

Result:

`200 OK`

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
  }
]
```

## POST — successful creation

Request:

`POST http://localhost:3001/api/v1/labels`

Body:

```json
{
  "name": "Internal",
  "color": "#10B981"
}
```

Result:

`201 Created`

```json
{
  "id": 3,
  "name": "Internal",
  "color": "#10B981"
}
```

## POST — missing required name

Body:

```json
{
  "color": "#10B981"
}
```

Result:

`400 Bad Request`

```json
{
  "error": "Label name is required"
}
```

## POST — color omitted

Body:

```json
{
  "name": "No Color"
}
```

Result:

`201 Created`

```json
{
  "id": 4,
  "name": "No Color",
  "color": "#6B7280"
}
```

This confirms that `color` is optional and the server uses `#6B7280` as the default.

## DELETE — existing label

Request:

`DELETE http://localhost:3001/api/v1/labels/4`

Result:

`204 No Content`

Response body is empty.

## DELETE — nonexistent label

Request:

`DELETE http://localhost:3001/api/v1/labels/999`

Result:

`404 Not Found`

```json
{
  "error": "Label not found"
}
```

---

# Important Learning Context

The user is a technical writer, not a backend engineer.

They need enough code-reading knowledge to:
- Understand API behavior
- Identify request parameters/body fields
- Understand validation
- Identify status codes
- Understand default values
- Identify error conditions
- Design meaningful API tests
- Verify documentation against implementation

They do NOT need to become an expert JavaScript/backend developer.

When they encounter unfamiliar code, explain only what is necessary to understand the current task.

For example, they have already learned that:

```js
const label = {
  id: labels.length + 1,
  name,
  color: color || "#6B7280"
};
```

creates an object where:
- `id` is generated from the current label count
- `name` comes from the request body
- `color` uses the supplied value or defaults to `#6B7280`

---

# Current Workflow

We are intentionally simulating a real company workflow rather than building a simple tutorial project.

The planned workflow is:

1. Receive incomplete engineer handoff
2. Ask engineers questions when requirements are unclear
3. Inspect implementation
4. Test API behavior using Postman
5. Write human-readable Markdown API documentation
6. Review and improve the documentation
7. Update/complete OpenAPI
8. Add Swagger UI
9. Compare Swagger UI/OpenAPI against the Markdown documentation and implementation
10. Use Git branches
11. Commit changes
12. Push to GitHub
13. Open a Pull Request
14. Simulate engineer/documentation review
15. Revise based on review
16. Merge
17. Add GitHub Actions CI/build checks
18. Deploy the documentation
19. Simulate a later API change
20. Update implementation/documentation/OpenAPI/Swagger UI
21. Repeat the review/merge/deployment workflow
22. Create a portfolio case study showing the complete workflow

The goal is to demonstrate real technical-writing/documentation-engineering practice, not simply produce a Markdown page.

---

# Current Immediate Task

The user is currently writing the first human-readable API documentation in:

`F:\Me\Portfolio\company-project\docs\asset-labels.md`

They are writing it themselves.

The planned sections are:

1. Overview
2. GET `/api/v1/labels`
3. POST `/api/v1/labels`
4. DELETE `/api/v1/labels/{id}`
5. Request fields
6. Response examples
7. Status codes
8. Error responses

The user has already asked the fictional backend engineer about the purpose of Asset Labels.

Engineer answer:

> Asset Labels are basically used to categorize assets so users can organize and identify them more easily.
>
> For example, a company might have hundreds of assets and use labels like Urgent, Customer, or Internal to indicate what an asset is related to or how it should be handled.
>
> For this API specifically, users can view the available labels, create new labels, and delete existing labels. The labels are then used by the asset management system to organize assets.
>
> The labels themselves don't have any other behavior right now.

Do not replace the user's documentation with your own unless explicitly asked.

---

# Existing Technical Environment

- Windows
- VS Code 1.135.0
- Node.js 22.15.1
- npm 10.9.2
- Docusaurus 3.10.2 is used for the portfolio
- PowerShell may block `npm.ps1` / `npx.ps1`
- When that happens, use:
  - `npm.cmd`
  - `npx.cmd`

The user has previously used:
- Node.js / Express
- PostgreSQL
- Postman
- OpenAPI
- Swagger UI
- Markdown
- Git
- GitHub
- GitHub Actions
- Docusaurus

However, this AtlasCloud project is intentionally new and should not simply reuse the user's previous Portfolio/Projects API project.

---

# Important Rule

Do not turn this into a generic coding tutorial.

The purpose is to create a realistic piece of evidence for the user's technical-writing portfolio and eventually resume.

When a technical decision is needed, explain the practical reason behind it briefly and then let the user perform the work.

The user prefers direct, concise guidance and wants to proceed one step at a time.