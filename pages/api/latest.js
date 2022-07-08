import { properties } from '../../data';

export default function handler(req, res) {
  res.status(200).json(properties.slice(-4).reverse());
}
