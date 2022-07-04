import PropertiesContainer from '@/components/properties-container';
import Head from 'next/head';

export default function Sale({ data }) {
  return (
    <>
      <Head>
        <title>Propiedades en venta | Homely</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <PropertiesContainer data={data} title="Propiedades en venta" />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/properties?status=sale`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
