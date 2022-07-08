import PropertiesContainer from '@/components/properties-container';
import { useFetch } from 'hooks/useFetch';
import Head from 'next/head';

export default function Departments() {
  const { data, error, isLoading } = useFetch(
    '/api/properties?type=department'
  );

  return (
    <>
      <Head>
        <title>Departamentos | Homely</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <PropertiesContainer
        data={data}
        error={error}
        isLoading={isLoading}
        title="Departamentos"
      />
    </>
  );
}
