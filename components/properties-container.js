import styles from './properties-container.module.css';
import PropertyListing from './property-listing';
import Title from './title';

export default function PropertiesContainer({ title, data, error, isLoading }) {
  return (
    <div className={styles.container}>
      <Title h1>{title}</Title>
      <PropertyListing data={data} error={error} isLoading={isLoading} />
    </div>
  );
}
