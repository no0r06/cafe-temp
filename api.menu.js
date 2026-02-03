
export default function handler(req, res) {
  const menuItems = [
    // Your menu items data
  ];

  if (req.method === 'GET') {
    res.status(200).json(menuItems);
  } else if (req.method === 'POST') {
    // Add new item
    const newItem = req.body;
    menuItems.push(newItem);
    res.status(201).json(newItem);
  } else if (req.method === 'PUT') {
    // Update item
    const updatedItem = req.body;
    const index = menuItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      menuItems[index] = updatedItem;
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } else if (req.method === 'DELETE') {
    // Delete item
    const { id } = req.query;
    const index = menuItems.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
      menuItems.splice(index, 1);
      res.status(200).json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
