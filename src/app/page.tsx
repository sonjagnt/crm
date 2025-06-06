import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  console.log('User-Agent:', userAgent);

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
