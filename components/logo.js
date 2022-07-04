import logo from '@/public/homely.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.css';

export default function Logo() {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <Image src={logo} alt="" layout="fill" />
      </div>
    </Link>
  );
}
