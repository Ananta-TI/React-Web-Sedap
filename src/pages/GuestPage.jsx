import AboutUs from '../components/About';
// import Footer from '../components/Footer';
import Hero from '../pages/hero';
import Colection from '../components/colection'
import LiveBidding from '../components/LiveBidding'
import Services from '../components/Services'
import News from '../components/News'
import NewsItem from '../components/NewItem';
import TopSellers from '../components/TopSellers';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
// import Testimonials from '../components/Testimonials';
// import TopProducts from '../components/TopProduct';

export default function GuestPage() {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Colection/>
      <LiveBidding/>
      <Services/>
      <News/>
      <NewsItem/>
      <Testimonials/>
      {/* <TopSellers/> */}
      <Footer/>



      {/* <Testimonials/> */}
      {/* <TopProducts/> */}
      {/* <Footer/> */}
    

    </div>
  );
}