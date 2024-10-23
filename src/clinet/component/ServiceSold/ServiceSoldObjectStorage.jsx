import React, {useState} from "react";
import { BackButton, ConfirmButton } from "./Button";
import ServiceDropdown from "./ServiceDropdown";

const ServiceSoldObjectStorage = ({handleNext, handleBack}) => {
    const [storage, setStorage] = useState('');

    const storageOptions = [
        {value: '1' , label: 'None'},
        {value: '2' , label: '250 GB Storage in European Union'},
        {value: '3' , label: '500 GB Storage in European Union'},
    ]

    const handleStorageChange = (event) => {
        setStorage(event.target.value);
    } 
    
    return (
        <div className="mx-8 border rounded border-[#113A6E] h-auto p-6">
        <ServiceDropdown
        label="Select Object Storage"
        options={storageOptions}
        value={storage}
        onChange={handleStorageChange}
        labelClassName="text-lg" 
        />

        <div className="flex justify-between mt-[1rem]">
            <BackButton onBack={handleBack} disabled={false} />
            <ConfirmButton onConfirm={handleNext} isLastStep={false} />
        </div>
        </div>
    );
};
export default ServiceSoldObjectStorage;