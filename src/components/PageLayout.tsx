import Navigation from '@/components/Navigation';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div className="lg:ml-56">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
