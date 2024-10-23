import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../component/ServiceSold/ServiceDetails";
import ServiceSummary from "../component/ServiceSold/ServiceSummary";

const ServiceSoldPage = () => {
  const { id } = useParams(); // Get the ID from the URL

  return (
    <div className="pl-[3rem] h-[50rem] flex-col justify-center  pt-[8rem] px-[1rem]">
      <div className="flex justify-between">
        <ServiceDetails id={id} />
        <div className=" pt-[0.3rem]">
          <ServiceSummary />
        </div>
      </div>
    </div>
  );
};

export default ServiceSoldPage;
