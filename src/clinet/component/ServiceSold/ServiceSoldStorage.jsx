import React from 'react';
import { useState } from 'react';
import TextFieldBtn from './TextFieldBtn';
import { BackButton, ConfirmButton } from './Button';

const ServiceSoldStorage = ({ handleNext, handleBack, onStorageSelected }) => {
    const [selectedStorageSelection,  setSelectedStorageSelection] = useState(null);

    const storageSelection = [
      { id: 1, label: '400 GB SSD Free' },
      { id: 2, label: '600 GB SSD Free' },
      { id: 3, label: '100 GB NVMe Free' },
      { id: 4, label: '150 GB NVMe Free' },
    ];

    const handleStorageSelection= (label) => {
        setSelectedStorageSelection(label);
        onStorageSelected(label);
      };

    return (
        <div className="mx-8 border rounded border-[#113A6E] h-auto">
            <h2 className="font-bold text-lg p-4 underline underline-offset-[0.7rem] decoration-[#113A6E]">Select Storage Type</h2>
            <div className="flex space-x-2 px-4 ">
            {storageSelection.map((option) => (
        <TextFieldBtn
            key={option.id}
            label={option.label}
            checked={selectedStorageSelection === option.label}
            onChange={() => handleStorageSelection(option.label)}
          />
        ))}
      </div>
            {/* Buttons to navigate within the step */}
            <div className="flex justify-between m-[1rem]">
                <BackButton onBack={handleBack} disabled={false} />
                <ConfirmButton onConfirm={handleNext} isLastStep={false} disabled={!selectedStorageSelection}/>
            </div>
        </div>
    );
};

export default ServiceSoldStorage;
