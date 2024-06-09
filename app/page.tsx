import HighlightedItem from "@/src/components/display/products/landing-page/Highlighted-item";
import MainClientComponent from "@/src/components/display/client-components/main-client-component";
import MensShoes from "@/src/components/display/products/landing-page/mens-shoes-card";
const Page: React.FC = () => {
  return (
    <MainClientComponent>
      <HighlightedItem />
      <MensShoes />
    </MainClientComponent>
  );
};

export default Page;
