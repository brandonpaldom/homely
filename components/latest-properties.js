import Button from './button';
import styles from './latest-properties.module.css';
import PropertyListing from './property-listing';
import Title from './title';

export default function LatestProperties({ data }) {
  return (
    <div className={styles.container}>
      <Title h2>Últimas propiedades</Title>
      <PropertyListing data={data} />
      <Button href="/properties" lg center>
        Ver más propiedades
      </Button>
    </div>
  );
}
