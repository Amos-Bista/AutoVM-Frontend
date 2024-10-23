import React, { useEffect, useState } from "react";
// import serviceSummaryData from "../../assests/dynamic/serviceSummaryData.json"; // Adjust the path as necessary
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { useModal } from "../modalProvider/modalContext";
import { toast } from "react-toastify";
import axios from "axios";
import { setLoading } from "../reduxToolKit/service/slices";

const OrderSummary = () => {
  const { openModal, hideModal } = useModal();

  // const { serviceName, serverQuantityOptions, details, pricing } =
  //   serviceSummaryData;
  const selectedRegion = useSelector((state) => state.app?.selectedRegion);
  const soldservicename = useSelector((state) => state.app?.soldservicename);
  const backup = useSelector((state) => state.app?.backup);
  const serverManage = useSelector((state) => state.app?.serverManage);
  const monitoring = useSelector((state) => state.app?.monitoring);
  const selectedOS = useSelector((state) => state.app?.selectedOS);
  const selectedVersion = useSelector((state) => state.app?.selectedVersion);
  const privateNetworking = useSelector(
    (state) => state.app?.privateNetworking
  );
  const ip = useSelector((state) => state.app?.ip);
  const soldserviceprice = useSelector((state) => state.app?.soldserviceprice);

  const soldservicebillingperiod = useSelector(
    (state) => state.app?.soldservicebillingperiod
  );
  const soldCPU = useSelector((state) => state.app?.soldCPU);
  const soldtiers = useSelector((state) => state.app?.soldtiers);
  const hostname = useSelector((state) => state.app?.hostname);
  const password = useSelector((state) => state.app?.password);

  const soldRAM = useSelector((state) => state.app?.soldRAM);
  const soldstorage = useSelector((state) => state.app?.soldstorage);
  const soldsnapshot = useSelector((state) => state.app?.soldsnapshot);
  const [initialPrice, setInitialPrice] = useState(0); // Initialize with 0 or another default value
  useEffect(() => {
    if (initialPrice === 0) {
      setInitialPrice(soldserviceprice); // Save the initial price only if it's not set yet
    }
  }, [soldserviceprice, initialPrice]);

  const selectedVersionvalue = useSelector(
    (state) => state.app?.selectedVersionvalue
  );
  let finalServicePrice = soldserviceprice;
  if (ip) {
    finalServicePrice += 1000;
  }
  if (monitoring) {
    finalServicePrice += 1000;
  }
  // const handleSubmit = () => {
  //   // Call the postData function passed from the parent component
  //   postData();
  //   //   console.log('press', handleSubmit)
  //   // handleNext(); // You can also trigger handleNext if needed after submission
  // };
  const hanldeCloseModal = () => {
    hideModal();
  };

  const postData = async (selectedVersionvalue) => {
    const isLinux = [
      "local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst",
      "local:vztmpl/debian-12-standard_12.2-1_amd64.tar.zst",
      "local:vztmpl/centos-9-stream-default_20221109_amd64.tar.xz",
    ].includes(selectedVersion);

    // console.log({ selectedVersion });
    const data = {
      hostName: hostname,
      memory: soldRAM,
      cores: soldCPU,
      additionalip: ip,
      monitoring: monitoring,
      snapShot: soldsnapshot,
      password: password,
    };

    // Add disk size for Windows, rootFs for Linux
    if (isLinux) {
      data.rootFs = soldstorage;
      data.osTemplate = selectedVersion;
      // data.backup = backup;
    } else {
      data.disksize = soldstorage + "G";
      data.templateId = selectedVersion;
    }

    const url = isLinux
      ? "http://10.10.10.137:5051/api/LXContainer/create"
      : "http://10.10.10.137:5051/create";
    try {
      setLoading(true);
      const response = await axios.post(url, data);
      // console.log("Response data:", response.data);
      toast.success("Successfully created");
      setLoading(false);
    } catch (error) {
      toast.success("Successfully created");
      console.error("Error posting data:", error);
      setLoading(false);
    }
  };

  return (
    <div className=" px-[2rem] w-[32rem] flex-col justify-center">
      <div>
        <div className="flex justify-between mb-4 align-middle">
          <h2 className="text-xl text-[#113A6E] font-bold">
            {soldservicename}
          </h2>
          <h3 className="inline-block text-xl font-bold text-[#113A6E]">
            ( {soldtiers} )
          </h3>
        </div>
        <h1 className="font-bold"> </h1>
      </div>
      <div className="w-[24rem] px-4 pt-2 border-2 border-double border-[#113A6E] rounded-md shadow-lg bg-white mx-auto">
        <div className="">
          <h3 className="inline-block text-sm font-bold text-[#113A6E] border-b-2 border-[#113A6E] ">
            Order Summary
          </h3>
        </div>
        {/*      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700">Server Quantity</label>
        <select className="ml-4 w-[67px] h-[35px] p-2 border border-[#113A6E] rounded-md ">
          {serverQuantityOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div> */}

        {/* <hr className="border-t border-[#113A6E]" /> */}

        <div className="my-2">
          {/* <h3 className="font-bold text-md text-[#113A6E]">Details</h3> */}
          <ul className="text-gray-700 ">
            {/* {details.map((detail, index) => ( */}
            {soldCPU > 0 && (
              <li>
                <div className="flex justify-between">
                  <h1>CPU Core</h1>
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-900">{soldCPU}</h1>
                    <h1 className="font-bold text-gray-900">Core</h1>
                  </div>
                </div>
              </li>
            )}
            {soldRAM > 0 && (
              <li>
                <div className="flex justify-between">
                  <h1>RAM</h1>
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-900">{soldRAM}</h1>
                    <h1 className="font-bold text-gray-900">MB RAM</h1>
                  </div>
                </div>
              </li>
            )}
            {soldstorage > 0 && (
              <li>
                <div className="flex justify-between">
                  <h1>Storage</h1>
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-900">{soldstorage}</h1>
                    <h1 className="font-bold text-gray-900">GB SSD</h1>
                  </div>
                </div>
              </li>
            )}
            {soldsnapshot > 0 && (
              <li>
                <div className="flex justify-between">
                  <h1>SnapShot</h1>
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-900">{soldsnapshot}</h1>
                  </div>
                </div>
              </li>
            )}
            {/* <li>
            <div className="flex justify-between">
              <h1> UNLIMITED EMAIL</h1>
              <h1 className="font-bold text-gray-900">FREE</h1>
            </div>
          </li> */}
            <li>
              <div className="flex justify-between">
                <h1> DS CONTROL PANEL</h1>
                <h1 className="font-bold text-gray-900">FREE</h1>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <h1> 24/7 CUSTOMER SUPPORT</h1>
                <h1 className="font-bold text-gray-900">FREE</h1>
              </div>
            </li>
            {soldservicebillingperiod > 0 && (
              <li>
                <div className="flex justify-between">
                  <h1>Contractor Period</h1>
                  <h1 className="font-bold text-gray-900">
                    {soldservicebillingperiod || ""} months
                  </h1>
                </div>
              </li>
            )}
            {selectedRegion && (
              <li>
                <div className="flex justify-between">
                  <h1>Region</h1>
                  <h1 className="font-bold text-gray-900">{selectedRegion}</h1>
                </div>
              </li>
            )}
            {selectedOS && (
              <li>
                <div className="flex justify-between">
                  <h1>Operating System</h1>
                  <h1 className="font-bold text-gray-900">{selectedOS}</h1>
                </div>
              </li>
            )}
            {selectedVersion && (
              <li>
                <div className="flex justify-between">
                  <h1>OS Version</h1>
                  <h1 className="font-bold text-gray-900">
                    {selectedVersionvalue}
                  </h1>
                </div>
              </li>
            )}
            {privateNetworking && (
              <li>
                <div className="flex justify-between">
                  <h1>Private Networking</h1>
                  <h1 className="font-bold text-gray-900">
                    {privateNetworking ? "Yes" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {ip && (
              <li>
                <div className="flex justify-between">
                  <h1>Additiona IP</h1>
                  <h1 className="font-bold text-gray-900">
                    {ip ? "Nrs.1000" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {backup && (
              <li>
                <div className="flex justify-between">
                  <h1>Backup</h1>
                  <h1 className="font-bold text-gray-900">
                    {backup ? "Nrs.1000" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {serverManage && (
              <li>
                <div className="flex justify-between">
                  <h1>Server Management</h1>
                  <h1 className="font-bold text-gray-900">
                    {serverManage ? "Nrs.1000" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {monitoring && (
              <li>
                <div className="flex justify-between">
                  <h1>Server Monitoring</h1>
                  <h1 className="font-bold text-gray-900">
                    {monitoring ? "Nrs.1000" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {/* ))} */}
          </ul>
        </div>

        <hr className="border-t-2 border-[#113A6E]" />

        <div className="text-base font-bold font-poppins ">
          <div className="flex justify-between">
            <span> {soldservicebillingperiod} month price </span>
            <span className="font-bold text-gray-900">
              Nrs. {soldserviceprice}
            </span>
          </div>
          {/* <div className="flex justify-between">
          <span>One Time</span>
          <span className="font-bold text-gray-900">
            {/* ${pricing.oneTime.toFixed(2)} */}
          {/* Rs. {soldserviceprice}/- */}
          {/* </span> */}
          {/* </div> */}
          <hr className="border-t-2 border-[#113A6E] " />
          <div className="flex justify-between">
            <span>Due Today</span>
            <span className="font-bold text-gray-900">
              {/* ${pricing.dueToday.toFixed(2)} */}
              Nrs. {finalServicePrice}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-col mt-[1rem] w-[100%]" id="modal-root">
        {/* <BackButton onBack={handleBack} disabled={false} /> */}
        {/* <span
          sx={{ display: "flex", justifyContent: "center", marginX: "auto" }}
        >
          Your order for the configured VPS is currently being prepared, and you
          will receive a confirmation email shortly.
        </span> */}
        <h2 className="flex justify-center font-bold text-center text-gray-900 text-s">
          Dear Customer, Your order is under procedure!
          <br />
          Please Verify in your Email.
        </h2>
        <h2 className="text-s text-[#113A6E] font-bold lfex justify-center text-center">
          Would you like to proceed with the configuration? Cancel /Proceed
        </h2>
        <div className="flex justify-between  w-[100%]">
          <Button
            onClick={hanldeCloseModal}
            sx={{
              marginRight: "1rem",
              backgroundColor: "#F9D753",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#F9D753",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={postData}
            isLastStep={false}
            // variant="contained"
            // color="success"
            sx={{
              backgroundColor: "#113A6E",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#113A6E",
              },
              cursor: "pointer",
            }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
