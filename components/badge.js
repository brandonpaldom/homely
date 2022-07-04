import styles from './badge.module.css';

export default function Badge({ primary, secondary, children }) {
  return (
    <span
      className={[
        [`${primary ? styles.primary : []}`],
        [`${secondary ? styles.secondary : []}`],
      ].join(' ')}
    >
      {children}
    </span>
  );
}
