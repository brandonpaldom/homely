import PropertyItem from './property-item';
import styles from './property-listing.module.css';

export default function PropertyListing({ data, error, isLoading }) {
  if (!data) return <p>No profile data</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.grid}>
      {data.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
}
