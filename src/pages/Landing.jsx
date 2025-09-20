import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import { features } from "../assets/data";
const Landing=()=>{
    return(
       <div className="landing-page bg-gradient-to-b from gray-50 to gray-100">
        {/*  Hero Section  */}
        <HeroSection/>



        {/* Features */}
        <FeaturesSection features={features}/>

        {/* Pricing Section */}
        <PricingSection/>

        {/* Testimonials */}
        <TestimonialsSection/>

        {/* CTA section */}
        <CTASection/>

        {/* Footer section */}
       <Footer/>
 </div>

    )
        
}
export default Landing;