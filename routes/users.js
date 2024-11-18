import express from "express"

const router = express.Router()


let users = [
{ id: "1", name: "John Doe" },
{ id: "2", name: "Jane Smith" },
{ id: "3", name: "Sam Johnson" },
];
  
router.get('/', (req, res) => {
    res.status(200).json(users);
});
  
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
});
  
router.post('/', (req, res) => {
    const newUser = { id: String(users.length + 1), name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});
  
router.put('/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.status(203).json(user);
});
  
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) return res.status(404).send('User not found');
    users.splice(userIndex, 1);
    res.status(204).send();
});

export default router;