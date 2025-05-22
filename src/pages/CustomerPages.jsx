
import Footer from '../components/Footer';
import Customers from './Customers';
// import Testimonials from '../components/Testimonials';
// import TopProducts from '../components/TopProduct';
export default function CustPage({ customers }) {
  return (
    <div>
      <Customers customers={customers} />
      <Footer />
    </div>
  );
}
