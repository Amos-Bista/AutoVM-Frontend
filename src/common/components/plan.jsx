import React, { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import plan from "../../common/assets/plan.json";
import {
  setSoldCPU,
  setSoldRAM,
  setSoldservicebillingperiod,
  setSoldservicebillingperiodvalue,
  setSoldservicename,
  setSoldserviceprice,
  setSoldstorage,
  setSoldtiers,
} from "../reduxToolKit/service/slices";
import Slider from "react-slick/lib/slider";

export default function Plans() {
  const navigate = useNavigate();
  const soldtiers = useSelector((state) => state.app?.soldtiers);
  const sliderRef = useRef(null);

  const dispatch = useDispatch();
  // const settings = {
  //   padding: "0px",
  //   marginBottom: "0px",
  //   margin: "12px",
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 100, // Adjust the autoplay speed as needed
  //   speed: 2000,
  //   slidesToShow: 3,
  //   Vertical: false, // Set to false for horizontal autoplay
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  useEffect(() => {
    // Convert the object to an array of plans
    // setPlansData(plan);
  }, []);
  const [stateCss, setStateCss] = useState(true);

  useEffect(() => {
    if (stateCss) {
      setTimeout(() => {
        setStateCss(false);
      }, 10000); // Disabling the CSS after 2 seconds (duration of the animation)
    }
  }, [stateCss]);

  const handleBuyNow = (planId) => {
    // Find the plan by ID from planData
    const selectedPlan = plan.find((plan) => plan.id === planId);
    // console.log("planselected", selectedPlan.servicePlanTitle);

    if (selectedPlan) {
      // Dispatch the actions to update the Redux state
      dispatch(setSoldservicename(selectedPlan.servicePlanTitle || "null"));
      dispatch(setSoldtiers(selectedPlan.servicePlanTiers));
      dispatch(setSoldserviceprice(selectedPlan.price));
      dispatch(setSoldservicebillingperiod(0)); // Set to 0 or adjust based on your requirements
      dispatch(setSoldservicebillingperiodvalue(selectedPlan.subscriptionPlan)); // Use the actual billing period value from your plan

      dispatch(
        setSoldCPU(
          selectedPlan.specifications.find((spec) =>
            spec.feature.toLowerCase().includes("core cpu")
          )?.featureValue || 0
        )
      );

      dispatch(
        setSoldRAM(
          selectedPlan.specifications.find((spec) =>
            spec.feature.toLowerCase().includes("ram")
          )?.featureValue || 0
        )
      );

      dispatch(
        setSoldstorage(
          selectedPlan.specifications.find((spec) =>
            spec.feature.toLowerCase().includes("ssd")
          )?.featureValue || 0
        )
      );

      // dispatch(setSoldsnapShot(selectedPlan.soldsnapshot || 0)); // Default to 0 if not provided

      // Forward to the /shop/:id route
      navigate(`/shop/${planId}`);
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 12,
    // autoplay: autoplay,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       speed: 1200,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <div className="flex-col justify-center p-12 ">
        <h1 className="flex justify-center my-12 font-semibold lg:mb-6 lg:text-4xl md:text-3xl sm:text-2xl sm:mb-12 text-[#0D5077] ">
          Our Popular Plans & Pricing
        </h1>
        <div
          className="flex justify-center gap-4  shadow-sm rounded-3xl 
        // bg-[#0d507700]
         "
        >
          {/* <Slider ref={sliderRef} {...settings} className=""> */}
          {plan?.map((plan, index) => {
            return (
              <Card
                key={index}
                className="overflow-hidden font-sans text-center rounded-md hover:shadow-2xl w-[20rem] border-b-2 border-[#0d50776f] transition-all transform hover:scale-105 duration-900 ease-in-out"
              >
                <div>
                  {/* Card */}
                  <div className="relative bg-[#0d5077]  flex-col justify-center py-4 overflow-hidden">
                    {/* Shiny light animation */}
                    {stateCss && (
                      <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 shine-effect"></div>
                    )}
                    {/* Content */}
                    <h2
                      className="relative z-10 flex justify-center mx-auto text-3xl leading-none text-white"
                      style={{ fontFamily: "Vollkorn, serif" }}
                    >
                      {plan?.servicePlanTitle}
                    </h2>
                    <p className="mx-auto text-white text-l">
                      {plan?.servicePlanTiers}
                    </p>

                    {/* Inline style for animation */}
                    {stateCss && (
                      <style>
                        {`
          @keyframes shineEffect {
            90% {
              transform: translate(-100%, 100%);
            }
            100% {
              transform: translate(100%, -100%);
              color: black;
            }
          }

          .shine-effect {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 150%; /* Stretching width for smoother light movement */
            background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.6) 30%, transparent 70%);
            animation: shineEffect 3s ease infinite;
          }
        `}
                      </style>
                    )}
                  </div>

                  <div className="flex justify-center pt-4 pb-2 rounded-lg">
                    <div className="flex justify-center align-top">
                      <h3 className="font-bold text-gray-700 text-l ">Nrs </h3>
                      <h3 className="font-sans font-serif text-5xl font-semibold text-gray-700">
                        {plan?.price}
                      </h3>
                    </div>
                    <div>
                      <p className="mt-5 text-gray-700 text-m">
                        {plan?.subscriptionPlan}
                      </p>
                    </div>
                  </div>
                  <ul className="px-10 py-1 space-y-4 font-sans">
                    {plan?.specifications &&
                      plan?.specifications.map((spec) => (
                        <div
                          key={spec.id}
                          className="text-s text-gray-600 border-b-2 
                    border-[#0d50776e]"
                        >
                          <div className="flex justify-center gap-2 duration-200 ease-in-out hover:scale-105">
                            <span>{spec?.featureValue}</span>
                            <span>{spec?.feature}</span>
                          </div>
                        </div>
                      ))}
                  </ul>

                  <button
                    onClick={() => handleBuyNow(plan?.id)}
                    className="px-6 py-3 mt-6 font-bold text-white bg-[#0D5077] rounded-lg hover:bg-[#0d507770]  mb-8 hover:scale-105 ease-in-out duration-200 hover:text-[#0D5077]"
                  >
                    BUY NOW
                  </button>
                </div>
              </Card>
            );
          })}
          {/* </Slider> */}
        </div>
      </div>{" "}
    </div>
  );
}