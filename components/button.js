import Link from 'next/link';
import styles from './button.module.css';

export default function Button({ children, href, lg, center }) {
  return (
    <Link
      href={href}
      className={[styles.button, [`${center ? styles.center : []}`]].join(' ')}
    >
      {children}
    </Link>
  );
}
