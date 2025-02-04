import BenefitOfDigitalMarketing from "../components/MarketingService/BenefitOfDigitalMarketing";
import FAQs from "../components/MarketingService/FAQs";
import ProvidingServices from "../components/MarketingService/ProvidingServices";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

// eslint-disable-next-line react/prop-types
export default function DeliveryService({ service }) {
  const { name, description, services, faqs } = service || {};
  return (
    <Layout>
      <Banner title={name} bg_img="https://i.ibb.co/dQWf6pz/Delivery.webp" />

      <div className="my-5 flex justify-center">
        <a
          href="http://dilizent.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg"
        >
          Dilizent
        </a>
      </div>

      <BenefitOfDigitalMarketing
        name={name}
        description={description}
        url="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/history-1.png"
      />
      <ProvidingServices name={name} services={services} />
      <FAQs faqs={faqs} name={name} />
    </Layout>
  );
}
