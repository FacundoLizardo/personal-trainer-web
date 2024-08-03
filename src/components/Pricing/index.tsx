"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import PricingBoxBasic from "@/components/Pricing/PricingBoxBasic";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Planificaciones y precios"
          paragraph="Distintos paquetes o modalidades para que solo compres lo que necesitas con pagos unicos. ¡No dudes en consultar!"
          center
          width="665px"
          mb={"0px"}
        />
        <div className={"flex flex-col w-full items-center justify-center mb-[100px] mt-5"}>
          <button
            className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            onClick={() => {
              const pricing = document.getElementById("contact");
              pricing.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }}
          >
            Consultas
          </button>
        </div>
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
             Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mb-20">

          <PricingBox
            packageName="Principiante"
            price={isMonthly ? "4.900" : "49.000"}
            discountPrice={!isMonthly && "58.800"}
            duration={isMonthly ? "Mes" : "Año"}
            subtitle="Pago unico por servicio mensual o anual. Consultar otros medios de pago."
          >
            <OfferList text="Rutina 3 veces por semana" status="active" />
            <OfferList text="Guia de calentamiento" status="active" />
            <OfferList text="Guia de ejercicios" status="active" />
            <OfferList text="Consultas primera semana" status="active" />
            <OfferList text="Asesoramiento personalizado" status="inactive" />
            <OfferList text="Guia nutricional personalizada" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Basico"
            price={isMonthly ? "8.900" : "89.900"}
            discountPrice={!isMonthly && "106.800"}
            duration={isMonthly ? "Mes" : "Año"}
            subtitle="Pago unico por servicio mensual o anual. Consultar otros medios de pago."
          >
            <OfferList text="Rutina 5 veces por semana" status="active" />
            <OfferList text="Guia de calentamiento" status="active" />
            <OfferList text="Guia de ejercicios" status="active" />
            <OfferList text="Consultas primera semana" status="active" />
            <OfferList text="Asesoramiento personalizado" status="inactive" />
            <OfferList text="Guia nutricional personalizada" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Intermedio"
            price={isMonthly ? "14.900" : "149.000"}
            discountPrice={!isMonthly && "178.800"}
            duration={isMonthly ? "Mes" : "Año"}
            subtitle="Pago unico por servicio mensual o anual. Consultar otros medios de pago."
          >
            <OfferList text="Rutina 4/5 veces por semana" status="active" />
            <OfferList text="Guia de calentamiento" status="active" />
            <OfferList text="Guia de ejercicios" status="active" />
            <OfferList text="Consultas primeras 2 semanas" status="active" />
            <OfferList text="Asesoramiento personalizado" status="active" />
            <OfferList text="Guia nutricional personalizada" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Completo"
            price={isMonthly ? "24.900" : "249.000"}
            discountPrice={!isMonthly && "298.800"}
            duration={isMonthly ? "Mes" : "Año"}
            subtitle="Pago unico por servicio mensual o anual. Consultar otros medios de pago."
          >
            <OfferList text="Rutina totalmente personalizada" status="active" />
            <OfferList text="Guia de calentamiento" status="active" />
            <OfferList text="Guia de ejercicios" status="active" />
            <OfferList text="Consultas ilimitadas" status="active" />
            <OfferList text="Asesoramiento personalizado" status="active" />
            <OfferList text="Guia nutricional personalizada" status="active" />
          </PricingBox>

        </div>

        <div>

          <h2
            className="flex w-full justify-center mb-10 text-xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">
            Planes trimestrales
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mb-10">

            <PricingBoxBasic price={"11.900"}
                             packageName={"Principiante"}
                             discountPrice={"14.700"}
                             subtitle={`Pago unico por plan trismestral para principiantes. Consultar otros medios de pago.`}>

              <OfferList text="Rutina 3 veces por semana" status="active" />
              <OfferList text="Guia de calentamiento" status="active" />
              <OfferList text="Guia de ejercicios" status="active" />
              <OfferList text="Consultas primera semana" status="active" />
              <OfferList text="Asesoramiento personalizado" status="inactive" />
              <OfferList text="Guia nutricional personalizada" status="inactive" />
            </PricingBoxBasic>

            <PricingBoxBasic price={"24.900"}
                             packageName="Basico"
                             discountPrice={"26.700"}
                             subtitle={`Pago unico por plan trismestral basico. Consultar otros medios de pago.`}>

              <OfferList text="Rutina 4 veces por semana" status="active" />
              <OfferList text="Guia de calentamiento" status="active" />
              <OfferList text="Guia de ejercicios" status="active" />
              <OfferList text="Consultas primera semana" status="active" />
              <OfferList text="Asesoramiento personalizado" status="inactive" />
              <OfferList text="Guia nutricional personalizada" status="inactive" />
            </PricingBoxBasic>

            <PricingBoxBasic price={"39.900"}
                             packageName="Intermedio"
                             discountPrice={"44.900"}
                             subtitle={`Pago unico por plan trismestral intermedio. Consultar otros medios de pago.`}>

              <OfferList text="Rutina 5 veces por semana" status="active" />
              <OfferList text="Guia de calentamiento" status="active" />
              <OfferList text="Guia de ejercicios" status="active" />
              <OfferList text="Consultas primera semana" status="active" />
              <OfferList text="Asesoramiento personalizado" status="inactive" />
              <OfferList text="Guia nutricional personalizada" status="inactive" />
            </PricingBoxBasic>

            <PricingBoxBasic price={"64.900"}
                             packageName="Completo"
                             discountPrice={"74.900"}
                             subtitle={`Pago unico por plan trismestral completo. Consultar otros medios de pago.`}>

              <OfferList text="Rutina totalmente personalizada" status="active" />
              <OfferList text="Guia de calentamiento" status="active" />
              <OfferList text="Guia de ejercicios" status="active" />
              <OfferList text="Consultas ilimitadas" status="active" />
              <OfferList text="Asesoramiento personalizado" status="active" />
              <OfferList text="Guia nutricional personalizada" status="active" />
            </PricingBoxBasic>

            <PricingBoxBasic price={"64.900"}
                             packageName="Recomposicion corporal"
                             discountPrice={"74.900"}
                             subtitle={`Pago unico por plan trismestral completo. Consultar otros medios de pago.`}
                             bestSeller={true}>

              <OfferList text="Rutina totalmente personalizada" status="active" />
              <OfferList text="Guia de calentamiento" status="active" />
              <OfferList text="Guia de ejercicios" status="active" />
              <OfferList text="Consultas ilimitadas" status="active" />
              <OfferList text="Asesoramiento personalizado" status="active" />
              <OfferList text="Guia nutricional personalizada" status="active" />
            </PricingBoxBasic>

          </div>


        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
