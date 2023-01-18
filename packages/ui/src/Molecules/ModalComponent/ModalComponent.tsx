import Modal from "react-modal";
import { Button } from "../../Atoms/Button/Button";
import { Title } from "../../Atoms/Title/Title";

interface ModalComponentProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  text: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ModalComponent = ({ isOpenModal, setIsOpenModal, text }: ModalComponentProps) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
      style={customStyles}
      contentLabel="Form modal"
    >
      <Title children={text} fontSize={"1.5rem"} marginBottom={"1rem"} textAlign={"center"} color={"#498f35"} />
      <Button onClick={() => setIsOpenModal(false)}>close</Button>
    </Modal>
  );
};

/** Created by carlos on 18/01/2023 */
