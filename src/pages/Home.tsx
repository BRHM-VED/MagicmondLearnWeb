import FirstSection from '../components/sections/FirstSection';
import JourneyPartnersSection from '../components/sections/JourneyPartnersSection';
import PricingComparisonSection from '../components/sections/PricingComparisonSection';
import ConstructionServicesSection from '../components/sections/ConstructionServicesSection';
import ClearConnectedSection from '../components/sections/ClearConnectedSection';
import TransparentPricingSection from '../components/sections/TransparentPricingSection';
import CustomerStoriesSection from '../components/sections/CustomerStoriesSection';
import SiteFooter from '../components/layout/SiteFooter';

/**
 * Home page (view) — composes section components only.
 * Business logic lives in controllers/; tokens in utils/.
 */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-zinc-200">
      <FirstSection />
      <JourneyPartnersSection />
      <PricingComparisonSection />
      <ConstructionServicesSection />
      <ClearConnectedSection />
      <TransparentPricingSection />
      <CustomerStoriesSection />
      <SiteFooter />
    </div>
  );
}
