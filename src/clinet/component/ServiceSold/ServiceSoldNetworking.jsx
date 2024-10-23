import React from "react";
import { BackButton, ConfirmButton } from "./Button";
import ButtonSwitch from "./buttonSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackup,
  setIp,
  setMonitoring,
  setServerManage,
} from "../../../common/reduxToolKit/service/slices";
import { ModalTypes } from "../../../utils/enum";
import { useModal } from "../../../common/modalProvider/modalContext";

const ServiceSoldNetworking = ({
  handleNext,
  handleBack,
  postData,
  // handleOrderSummaryModal,
}) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const ip = useSelector((state) => state.app?.ip);
  const handleIpChange = (newValue) => {
    dispatch(setIp(newValue));
  };
  const backup = useSelector((state) => state.app?.backup);
  const serverManage = useSelector((state) => state.app?.serverManage);
  const monitoring = useSelector((state) => state.app?.monitoring);
  const handleBackupChange = (newValue) => {
    dispatch(setBackup(newValue));
  };
  const handleServermanageChange = (newValue) => {
    dispatch(setServerManage(newValue));
  };
  const handleMonitoringChange = (newValue) => {
    dispatch(setMonitoring(newValue));
  };

  const handleOrderSummaryModal = () => {
    console.log("Opening Order Summary Modal");
    openModal(ModalTypes.ORDER_SUMMARY);
  };
  // const handleSubmit = () => {
  //   postData();
  //   handleNext(); // You can also trigger handleNext if needed after submission
  // };

  // const handleOrderSummaryModal = (postData) => {
  //   console.log("Opening Order Summary Modal");
  //   openModal(ModalTypes.ORDER_SUMMARY(postData, handleNext)); // Open the OrderSummary modal
  // };
  return (
    <div className="p-[2rem] rounded border-[#113A6E] h-auto w-[53rem] bg-white border-2 ">
      <h2 className="font-bold text-lg mb-6 underline underline-offset-[0.7rem] decoration-[#113A6E]">
        Add On
      </h2>
      <ButtonSwitch
        label="Additional IP"
        onChange={handleIpChange}
        value={ip}
      />
      <ButtonSwitch
        label="Back up"
        onChange={handleBackupChange}
        value={backup}
      />
      <ButtonSwitch
        label="Server Management"
        onChange={handleServermanageChange}
        value={serverManage}
      />
      <ButtonSwitch
        label="Monitoring"
        onChange={handleMonitoringChange}
        value={monitoring}
      />
      <div className="flex justify-between mt-[1rem]" id="modal-root">
        <BackButton onBack={handleBack} disabled={false} />
        <ConfirmButton onConfirm={handleOrderSummaryModal} isLastStep={false} />
      </div>
    </div>
  );
};

export default ServiceSoldNetworking;
