import express from 'express'

const app = express();

app.use(express.json());

const mockDB = [
  {
    id: 0,
    email: "test@example.com",
  },
];

app.get("/", (req, res) => {
  return res.status(201).json({ data: mockDB });
});

app.post("/send", (req, res) => {
  // Falta algo
  return res.status(201).json({ data: mockDB });
});

app.put("/update/:id", (req, res) => {
  const obj = mockDB.find((el) => el.id === Number(req.params.id));
  obj.email = req.body.email;
  return res.status(200).json({ data: mockDB });
});

app.delete("/destroy/:id", (req, res) => {
  const i = mockDB.findIndex((el) => el.id === Number(req.params.id));
  mockDB.splice(i, -1);
  return res.status(200).json({ data: mockDB });
});

export default app;