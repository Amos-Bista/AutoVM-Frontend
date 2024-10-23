import { useMemo } from "react";
import { useModal } from "./modalContext";
import CustomModal from "./modal";
import { modalComponents } from "./modalComponents.jsx";

export const ModalRoot = () => {
  const { modalType, modalProps, hideModal } = useModal();

  const ModalComponent = useMemo(() => {
    if (!modalType) return null; // Return null if no modal is specified
    const Component = modalComponents[modalType];
    return Component ? (
      <Component {...modalProps} hideModal={hideModal} />
    ) : null;
  }, [modalType, modalProps, hideModal]);

  return (
    <CustomModal
      overflowY={modalProps?.overflowY} // Pass any additional props
      showModal={!!modalType} // Show modal if modalType is defined
      customComponent={ModalComponent} // Render the selected modal component
      hideModal={hideModal} // Ensure the hide function is passed
    />
  );
};
