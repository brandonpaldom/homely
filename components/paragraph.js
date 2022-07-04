import styles from './paragraph.module.css';

export default function Paragraph({ children, lg }) {
  return (
    <p className={[styles.paragraph, [`${lg ? styles.lg : []}`]].join(' ')}>
      {children}
    </p>
  );
}
