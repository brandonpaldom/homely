import Image from 'next/image';
import Button from './button';
import styles from './hero.module.css';
import Paragraph from './paragraph';
import Title from './title';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles['info-container']}>
          <Title h1>¡Encuentra hoy tu hogar soñado!</Title>
          <Paragraph lg>
            Con nuestra gran selección de propiedades, seguro que encontrarás la
            perfecta para ti. Empieza tu búsqueda hoy mismo.
          </Paragraph>
          <Button href="/properties" lg>
            Descubre propiedades
          </Button>
        </div>
        <Image
          src={'/hero.jpg'}
          alt=""
          className={styles.image}
          width={960}
          height={720}
          priority
        />
      </div>
    </div>
  );
}
