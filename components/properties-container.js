import styles from './properties-container.module.css';
import PropertyListing from './property-listing';
import Title from './title';

export default function PropertiesContainer({ data, title }) {
  return (
    <div className={styles.container}>
      <Title h1>{title}</Title>
      <PropertyListing data={data} />
    </div>
  );
}
