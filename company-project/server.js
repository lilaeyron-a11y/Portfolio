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