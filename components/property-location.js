import pinIcon from '@/public/pin-icon.svg';
import Image from 'next/image';
import styles from './property-location.module.css';

export default function PropertyLocation({ address }) {
  return (
    <div className={styles.container}>
      <Image
        src={pinIcon}
        alt="area"
        className={styles.icon}
        width={14}
        height={14}
      />

      <span>{address}</span>
    </div>
  );
}
