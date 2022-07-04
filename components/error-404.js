import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import styles from './error-404.module.css';
import Paragraph from './paragraph';
import Title from './title';

export default function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title h1>Oops! Parece que no tenemos ninguna propiedad por aquí</Title>
        <Paragraph>
          No te preocupes, puedes volver a la{' '}
          <Link href="/">
            <a className={styles.link}>página principal</a>
          </Link>{' '}
          o buscar una propiedad.
        </Paragraph>
        <Button href="/properties">Explorar propiedades</Button>
        <div className={styles['image-container']}>
          <Image
            src={'/404.jpg'}
            alt=""
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
