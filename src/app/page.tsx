import Link from 'next/link';
import Button from './components/button';

export default function Home() {
  return (
    <main className="relative min-h-[100vh] flex justify-center flex-col items-center overflow-hidden bg-gradient-to-br from-green-200 to-purple-200">
      <h1 className="text-2xl py-3 font-bold">Your CRM</h1>
      <p className="text-xl mb-6">Keeps your business organized.</p>
      <div className="flex flex-col gap-2">
        <Link href="/dashboard">
          <Button>To the Dashboard</Button>
        </Link>
        <Link href="/companies">
          <Button>To the Companies</Button>
        </Link>
      </div>
    </main>
  );
}
