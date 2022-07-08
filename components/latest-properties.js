import Button from './button';
import styles from './latest-properties.module.css';
import PropertyListing from './property-listing';
import Title from './title';

export default function LatestProperties({ data, error, isLoading }) {
  return (
    <div className={styles.container}>
      <Title h2>Últimas propiedades</Title>
      <PropertyListing data={data} error={error} isLoading={isLoading} />
      <Button href="/properties" lg center>
        Ver más propiedades
      </Button>
    </div>
  );
}
