import SectionTitle from "@/components/elements/SectionTitle";
import Container from "@/components/elements/Container";
import AllReceipt from "./components/AllReceipt";
import FoodCard from "./components/FoodCard";

const Trending = () => {
  return (
    <Container>
      <SectionTitle title="Browser Our Trending" />
      <FoodCard />
      <AllReceipt />
    </Container>
  );
};

export default Trending;
