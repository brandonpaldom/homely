import Link from 'next/link';
import styles from './property-contact.module.css';
import PropertyLocation from './property-location';
import whatsappIcon from '@/public/whatsapp-icon.png';
import calendarIcon from '@/public/calendar-icon.png';
import Image from 'next/image';

export default function PropertyContact({
  title,
  address,
  price,
  type,
  status,
  translatedType,
  translatedStatus,
}) {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{`${translatedType(
          type
        )} en ${translatedStatus(status)}`}</p>
        <PropertyLocation address={address} />
      </div>
      <p className={styles.price}>Desde ${price} MXN</p>
      <Link href="#">
        <a className={styles['button-contact']}>
          <div className={styles.icon}>
            <Image src={whatsappIcon} alt="" layout="fill" />
          </div>
          Contáctanos
        </a>
      </Link>
      <Link href="#">
        <a className={styles['button-schedule']}>
          <div className={styles.icon}>
            <Image src={calendarIcon} alt="" layout="fill" />
          </div>
          Agendar visita
        </a>
      </Link>
    </div>
  );
}
