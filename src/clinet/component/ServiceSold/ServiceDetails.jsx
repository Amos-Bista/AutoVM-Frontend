import React, { useEffect, useRef, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  styled,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ServiceSoldBilling from "./ServiceSoldBilling";
import ServiceSoldLogin from "./ServiceSoldLogin";
import ServiceSoldNetworking from "./ServiceSoldNetworking";
import ServiceSoldRegion from "./ServiceSoldRegion";
import ServiceSoldImage from "./ServiceSoldImage";
import { useNavigate } from "react-router-dom"; // Import useLocation
import axios from "axios";
import { BackButton, HomeButton } from "./Button";
import {
  setHostname,
  setLoading,
  setSoldserviceprice,
} from "../../../common/reduxToolKit/service/slices";
import { toast } from "react-toastify";
import { useModal } from "../../../common/modalProvider/modalContext";
import { ModalTypes } from "../../../utils/enum";
import { useDispatch, useSelector } from "react-redux";

const steps = Array.from({ length: 6 }, (_, index) => `Step ${index + 1}`);

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: "#113A6E",
  },
  "& .MuiStepIcon-root": {
    color: "#113A6E", // Blue border color for step icons
    "&.Mui-completed": {
      color: "#113A6E", // Blue icon for completed steps
    },
    "&.Mui-active": {
      color: "#FF5722", // Orange icon for the active step
    },
  },
}));

const StepIconComponent = ({ icon, active, completed }) => (
  <div
    style={{
      fontSize: "1rem",
      fontWeight: "extrabold",
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: completed ? "#113A6E" : "#fff",
      color: completed ? "#fff" : "#113A6E",
      border: `2px solid ${completed ? "#1976D2" : "#113A6E"}`,
    }}
  >
    {completed ? (
      <CheckIcon style={{ fontSize: "18px", color: "#fff" }} />
    ) : (
      icon
    )}
  </div>
);

const StepContent = ({
  activeStep,
  handleNext,
  handleBack,
  handlehome,
  // postData,
  handleOrderSummaryModal,
}) => {
  switch (activeStep) {
    case 0:
      return (
        <ServiceSoldBilling handleNext={handleNext} handleBack={handleBack} />
      );
    case 1:
      return (
        <ServiceSoldRegion handleNext={handleNext} handleBack={handleBack} />
      );

    case 2:
      return (
        <ServiceSoldImage handleNext={handleNext} handleBack={handleBack} />
      );
    case 3:
      return (
        <ServiceSoldLogin
          handleNext={handleNext}
          handleBack={handleBack}
          setHostname={setHostname}
        />
      );
    case 4:
      return (
        <ServiceSoldNetworking
          handleNext={handleNext}
          handleBack={handleBack}
          // postData={postData}
          handleOrderSummaryModal={handleOrderSummaryModal}
        />
      );
    default:
      return (
        <div className="p-[2rem] border-2 rounded border-[#113A6E] h-auto w-[53rem] bg-white">
          Final Step: Review and Confirm
          <div className="flex justify-between mt-[1rem]">
            <BackButton onBack={handleBack} disabled={false} />
            <HomeButton onClick={handlehome} disabled={false} />
          </div>
        </div>
      );
  }
};

const ServiceDetails = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openModal } = useModal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const hostname = useSelector((state) => state.app?.hostname);
  const password = useSelector((state) => state.app?.password);
  const selectedVersion = useSelector((state) => state.app?.selectedVersion);
  const monitoring = useSelector((state) => state.app?.monitoring);
  const loading = useSelector((state) => state.app?.loading);
  const ip = useSelector((state) => state.app?.ip);
  const soldstorage = useSelector((state) => state.app?.soldstorage);
  const soldCPU = useSelector((state) => state.app?.soldCPU);
  const soldRAM = useSelector((state) => state.app?.soldRAM);
  const [activeStep, setActiveStep] = useState(0);
  const soldserviceprice = useSelector((state) => state.app?.soldserviceprice);
  const [initialPrice, setInitialPrice] = useState(0); // Initialize with 0 or another default value
  useEffect(() => {
    if (initialPrice === 0) {
      setInitialPrice(soldserviceprice); // Save the initial price only if it's not set yet
    }
  }, [soldserviceprice, initialPrice]);
  const soldservicename = useSelector((state) => state.app?.soldservicename);
  const soldsnapshot = useSelector((state) => state.app?.soldsnapshot);
  const soldservicebillingperiod = useSelector(
    (state) => state.app?.soldservicebillingperiod
  );
  const previousBillingPeriodRef = useRef(soldservicebillingperiod);

  useEffect(() => {
    if (previousBillingPeriodRef.current !== soldservicebillingperiod) {
      const updatedPrice = soldservicebillingperiod * initialPrice;
      dispatch(setSoldserviceprice(updatedPrice)); // Update the price in the Redux store
      previousBillingPeriodRef.current = soldservicebillingperiod; // Update the ref
    }
  }, [soldservicebillingperiod, soldserviceprice, dispatch, initialPrice]); // Keep both dependencies

  if (loading) {
    return <CircularProgress />;
  }

  // async function getContainerStatus(containerId) {
  //   try {
  //     const response = await axios.get(
  //       `http://10.10.10.132:5051/api/container/145/status`
  //     );
  //     console.log("GetData", response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  // const postData = async (selectedVersionvalue) => {
  //   const isLinux = [
  //     "local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst",
  //     "local:vztmpl/debian-12-standard_12.2-1_amd64.tar.zst",
  //     "local:vztmpl/centos-9-stream-default_20221109_amd64.tar.xz",
  //   ].includes(selectedVersion);

  //   // console.log({ selectedVersion });
  //   const data = {
  //     hostName: hostname,
  //     memory: soldRAM,
  //     cores: soldCPU,
  //     additionalip: ip,
  //     monitoring: monitoring,
  //     snapShot: soldsnapshot,
  //     password: password,
  //   };

  //   // Add disk size for Windows, rootFs for Linux
  //   if (isLinux) {
  //     data.rootFs = soldstorage;
  //     data.osTemplate = selectedVersion;
  //     // data.backup = backup;
  //   } else {
  //     data.disksize = soldstorage + "G";
  //     data.templateId = selectedVersion;
  //   }

  //   const url = isLinux
  //     ? "http://10.10.10.137:5051/api/Container/create"
  //     : "http://10.10.10.137:5051/create";
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(url, data);
  //     console.log("Response data:", response.data);
  //     toast.success("Successfully created");
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     setLoading(false);
  //   }
  // };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handlehome = () => {
    console.log("Home button clicked");
    navigate("/");
  };

  const handleOrderSummaryModal = (postData) => {
    console.log("Opening Order Summary Modal");
    openModal(ModalTypes.ORDER_SUMMARY);
  };

  return (
    <div className="w-[55rem] relative h-[35rem]">
      <div className="text-xl flex justify-between pb-[0.6rem] w-[100%] mb-[4rem]">
        <h1 className="text-xl flex justify-center underline underline-offset-[1rem] decoration-[#113A6E] decoration-2 w-full pb-[1rem]">
          Configure Your {soldservicename || "(Service Name)"}
        </h1>
      </div>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          position: "absolute",
          top: "4rem",
          left: "-4rem",
          width: "111%",
          display: "flex",
          justifyContent: "start",
          alignItems: "left",
          paddingX: "0",
          "& .MuiStepConnector-line": {
            borderColor: "#113A6E", // Change line color
            borderWidth: "0.005rem", // Adjust the thickness of the line
          },
          "& .MuiStepConnector-root": {
            top: "1.2rem", // Adjust the vertical position of the connector line
          },
        }}
      >
        {steps.map((_, index) => (
          <Step key={index} completed={activeStep >= index}>
            <CustomStepLabel
              StepIconComponent={(props) => (
                <StepIconComponent
                  {...props}
                  icon={index + 1}
                  completed={activeStep >= index} // Completed starts from step 1
                />
              )}
            />
          </Step>
        ))}
      </Stepper>

      <div className="my-[1rem] w-[50rem] h-[20rem]">
        <StepContent
          soldRAM={soldRAM}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handlehome={handlehome}
          // postData={postData}
          handleOrderSummaryModal={handleOrderSummaryModal}
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
