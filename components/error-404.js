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
          <Link href="/" className={styles.link}>
            página principal
          </Link>{' '}
          o buscar una propiedad.
        </Paragraph>
        <Button href="/properties">Explorar propiedades</Button>
        <Image
          src={'/404.jpg'}
          alt=""
          className={styles.image}
          width={960}
          height={720}
        />
      </div>
    </div>
  );
}
