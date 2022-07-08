import { properties } from '../../data';

export default function handler(req, res) {
  const query = req.query;
  const { status, type, bedrooms, bathrooms } = query;

  const filtered = properties.filter((p) => {
    if (status && p.status !== status) {
      return false;
    }

    if (type && p.type !== type) {
      return false;
    }

    if (bedrooms && p.bedrooms !== parseInt(bedrooms, 10)) {
      return false;
    }

    if (bathrooms && p.bathrooms !== parseInt(bathrooms, 10)) {
      return false;
    }

    return true;
  });

  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json(null);
  }
}
