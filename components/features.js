import Image from 'next/image';
import Button from './button';
import styles from './features.module.css';
import Paragraph from './paragraph';
import Title from './title';

const features = [
  {
    title: 'Busca tu casa favorita en Homely',
    description:
      'Con nuestra increíble selección de casas, encuentra la que más te guste.',
    image: '/looking-property.jpg',
  },
  {
    title: 'Agenda una cita de visita con uno de nuestros agentes',
    description:
      'Buscamos atenderte de forma inmediata. Conoce tu próxima propiedad.',
    image: '/visiting-property.jpg',
  },
  {
    title: 'Consigue la casa de tus sueños en un mes, o menos',
    description:
      'No te preocupes, en Homely te ayudamos paso a paso durante el proceso.',
    image: '/property-purchased.jpg',
  },
];

export default function Features() {
  return (
    <div className={styles.container}>
      <Title h2>Encontrar la propiedad ideal es muy fácil</Title>
      <div className={styles.features}>
        {features.map(({ title, description, image }, index) => (
          <div key={index} className={styles.feature}>
            <Image
              src={image}
              alt=""
              className={styles.image}
              width={640}
              height={640}
              priority
            />
            <h3 className={styles.subtitle}>{title}</h3>
            <Paragraph>{description}</Paragraph>
          </div>
        ))}
      </div>
      <Button href="/properties" lg>
        Comenzar a explorar
      </Button>
    </div>
  );
}
