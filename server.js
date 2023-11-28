const express = require("express");
const User = require("./models/User");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get("/test", (req, res) => res.send("work"));

app.post("/user", async (req, res) => {
  const user = await User.create(req.body);
  res.json({ user });
});

app.get("/user", async (req, res) => {
  const users = await User.findAll(req.body);
  res.json({ users });
});

app.put("/user/", async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.body?.id } })
    const user = await User.findOne({ where: { id: req.body?.id } })
    res.json({ user });
  } catch (error) {
    res.json({ message: error?.message })
  }
});

app.delete("/user", async (req, res) => {
  await User.destroy({ where: { id: req.body?.id } });
  res.json({ message: "user deleted" });
});

app.listen(1000, () => {
  console.log("r");
});
