import Navigation from '@/components/Navigation';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div className="md:ml-56 mt-24 md:mt-0">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
