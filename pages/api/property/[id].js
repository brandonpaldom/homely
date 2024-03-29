import { properties } from '../../../data';

export default function handler({ query: { id } }, res) {
  try {
    const filtered = properties.filter((p) => p.id === id);

    if (filtered.length > 0) {
      res.status(200).json(filtered[0]);
    } else {
      res.status(400).json({ message: `Property with id: ${id} not found.` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred' });
  }
}
