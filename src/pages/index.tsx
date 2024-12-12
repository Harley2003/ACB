import Link from 'next/link';
import Heading from '@/src/components/Common/Heading';

interface HomeProps {
  serverSideApiKeyIsSet: boolean;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Heading title={'Auto Career Bridge'} description={''} keywords={''} />
      <main>
        <>
          <div>
            <div className="flex items-center justify-between p-4">
              <div className="flex">Logo</div>
              <div className="flex items-center justify-center gap-2">
                <Link href={'/admin-university'}>Admin school</Link>
                <Link href={'/system-admin/management-posts'}>System admin</Link>
              </div>
            </div>
          </div>
          <div>Container</div>
          <div>Footer</div>
        </>
      </main>
    </>
  );
};
export default Home;
