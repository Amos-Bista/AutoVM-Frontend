import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ServiceSummary = () => {
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

  const soldRAM = useSelector((state) => state.app?.soldRAM);
  const soldstorage = useSelector((state) => state.app?.soldstorage);
  const soldsnapshot = useSelector((state) => state.app?.soldsnapshot);
  const [initialPrice, setInitialPrice] = useState(0); // Initialize with 0 or another default value
  useEffect(() => {
    // Save the initial price when the component mounts
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

  return (
    <div>
      <div>
        <div className="flex gap-[1rem] align-middle">
          <h2 className="text-xl text-[#113A6E] font-bold">
            {soldservicename}
          </h2>
          <h3 className="inline-block text-xl font-bold text-[#113A6E]">
            ( {soldtiers} )
          </h3>
        </div>
        <h1 className="font-bold"> </h1>
      </div>
      <div className="w-[25rem] mr-12 p-4 border-2 border-double border-[#113A6E] rounded-md shadow-lg bg-white mt-[2rem]">
        <div className="mb-1">
          <h3 className="inline-block text-sm font-bold text-[#113A6E] border-b-2 border-[#113A6E] mb-2">
            Order Summary
          </h3>
          <div className="flex items-center justify-between space-x-4 font-bold">
            <h1>{/* {soldservicebillingperiod} */} Monthly Base Price</h1>
            <h1>Nrs.{initialPrice}</h1>
          </div>
        </div>
        {/* <hr className="border-t border-[#113A6E] mb-4" /> */}
        <div className="mb-6">
          <h3 className="font-bold text-md text-[#113A6E]">Details</h3>
          <ul className="pl-4 text-gray-700">
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
                    {ip ? "Rs. 1000/-" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {backup && (
              <li>
                <div className="flex justify-between">
                  <h1>Backup</h1>
                  <h1 className="font-bold text-gray-900">
                    {backup ? "Rs.1000/-" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {serverManage && (
              <li>
                <div className="flex justify-between">
                  <h1>Server Management</h1>
                  <h1 className="font-bold text-gray-900">
                    {serverManage ? "Rs.1000/-" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {monitoring && (
              <li>
                <div className="flex justify-between">
                  <h1>Server Monitoring</h1>
                  <h1 className="font-bold text-gray-900">
                    {monitoring ? "Rs.1000/-" : "NO"}
                  </h1>
                </div>
              </li>
            )}
            {/* ))} */}
          </ul>
        </div>

        <hr className="border-t border-[#113A6E] mb-4" />

        <div className="space-y-2 text-base font-bold font-poppins">
          <div className="flex justify-between">
            <span> {soldservicebillingperiod} month Price </span>
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
          <hr className="border-t border-[#113A6E] mb-4" />
          <div className="flex justify-between">
            <span>Due Today</span>
            <span className="font-bold text-gray-900">
              {/* ${pricing.dueToday.toFixed(2)} */}
              Nrs. {finalServicePrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;
