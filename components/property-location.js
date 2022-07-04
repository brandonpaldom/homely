import pinIcon from '@/public/pin-icon.svg';
import Image from 'next/image';
import styles from './property-location.module.css';

export default function PropertyLocation({ address }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={pinIcon} alt="area" layout="fill" />
      </div>
      <span>{address}</span>
    </div>
  );
}
