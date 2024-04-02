import Image from 'next/image';

export default function Home() {
  return <div>
    <Image
        src="/terminator.jpeg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
    />
    {/*Для мобилы*/}
    <Image
        src="/matrix.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
    />
  </div>;
}
