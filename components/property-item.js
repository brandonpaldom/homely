import Image from 'next/image';
import Link from 'next/link';
import Badge from './badge';
import styles from './property-item.module.css';

export default function PropertyItem({ property }) {
  const {
    images,
    title,
    address,
    price,
    area,
    bedrooms,
    bathrooms,
    status,
    type,
  } = property;

  const translatedStatus = (status) => {
    switch (status) {
      case 'sale':
        return 'Venta';
      case 'rent':
        return 'Renta';
      default:
    }
  };

  const translatedType = (type) => {
    switch (type) {
      case 'department':
        return 'Departamento';
      case 'house':
        return 'Casa';
      case 'office':
        return 'Oficina';
      default:
    }
  };

  return (
    <Link href={`/property/${property.id}`}>
      <a className={styles.container}>
        <div className={styles['image-container']}>
          <Image
            src={images[0]}
            alt=""
            layout="fill"
            className={styles.image}
          />
          <div className={styles.badge}>
            <Badge secondary>{translatedType(type)}</Badge>
          </div>
        </div>

        <div className={styles['info-container']}>
          <div className={styles['title-container']}>
            <h3 className={styles.title}>{title}</h3>
            <Badge primary>{translatedStatus(status)}</Badge>
          </div>
          <div className={styles['data-container']}>
            <div>
              <p className={styles.address}>{address}</p>
              <p className={styles.price}>Desde ${price} MXN</p>
            </div>
            <div className={styles.badges}>
              <Badge secondary>Desde</Badge>
              <Badge secondary>{area} m²</Badge>
              {bedrooms && <Badge secondary>{bedrooms} rec.</Badge>}
              {bathrooms && (
                <Badge secondary>
                  {`${bathrooms} ${bathrooms < 2 ? 'baño' : 'baños'}`}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
