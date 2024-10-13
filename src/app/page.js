import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Services from "@/components/services/services";
import Intro from "@/components/intro/intro";
import AboutUs from "@/components/about/aboutus";
import TelegramChatWidget from "@/components/widget/TelegramChatWidget";
import Reviews from "@/components/reviews/reviews";
import BannerSection from "@/components/otherBannner/otherBanner";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/contact/contact";
import ImageGallery from "@/components/gallery/gallery";
import FAQSection from "@/components/FAQ/FAQSection ";
import TidioChat from "../components/widget/Tidochat";


export default function Home() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Intro />
      <Services />
      <AboutUs/>
      <ImageGallery />
      <FAQSection />
      <BannerSection />
      <Reviews />
      <TidioChat />
      <ContactSection />
      <Newsletter />
      <Footer />
      
    </div>
  );
}
