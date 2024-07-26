import NutritionalGuide from "@/components/NutritionalGuide/NutritionalGuide";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TrainingPlan from "@/components/TrainingPlan/TrainingPlan";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <NutritionalGuide />
      <TrainingPlan />
    </>
  );
};

export default AboutPage;
