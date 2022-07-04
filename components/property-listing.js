import PropertyItem from './property-item';
import styles from './property-listing.module.css';

export default function PropertyListing({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
}
