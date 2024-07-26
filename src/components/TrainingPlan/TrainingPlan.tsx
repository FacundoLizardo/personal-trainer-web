import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaSquarePlus } from "react-icons/fa6";
import { List } from "@/components/List/List";


const TrainingPlan = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/training/training-plan.webp"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/training/training-plan-dark.webp"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg opacity-65"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="No importa tu nivel de experiencia."
                paragraph="Los planes se adaptan a vos y a tu nivel de experiencia. Basados en una serie de pruebas para medir tus capacidades,
                para poder partir de una base solida y lograr avances consistentes."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Totalmente personalizado" />
                    <List text="Multiples metodologias" />
                    <List text="Progresion" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Guia de ejercicios" />
                    <List text="Correcciones y dudas" />
                    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
                      <span
                        className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        <FaSquarePlus />
                      </span>
                      {"Y mucho mas..."}
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPlan;
