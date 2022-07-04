import styles from './title.module.css';

export default function Title({ children, h1, h2 }) {
  return (
    <>
      {h1 && <h1 className={styles.h1}>{children}</h1>}
      {h2 && <h2 className={styles.h2}>{children}</h2>}
    </>
  );
}
