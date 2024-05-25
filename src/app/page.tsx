import Image from "next/image";

export default function Home() {
  const styles = {
    container: [
      'bg-gray-900',
      'flex',
      'min-h-screen',
      'flex-col',
      'items-center',
      'justify-between',
      'p-24',
    ].join(' '),
  }

  return (
    <main className={styles.container}>
      <h1>Home page</h1>
    </main>
  );
}
