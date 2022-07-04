import styles from './subtitle.module.css';

export default function Subtitle({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}
