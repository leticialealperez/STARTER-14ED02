import Footer from '../../components/Footer';
import Header from '../../components/Header';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
