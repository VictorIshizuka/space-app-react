import { styled } from "styled-components";

import { Image } from "../Gallery/Image";
import Close from "../../assets/images/icons/fechar.png";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export const Modal = ({ onClose, figure }) => {
  return (
    <>
      {figure && (
        <>
          <Overlay />
          <DialogStyled open={!!figure} onClose={onClose}>
            <Image figure={figure} expanded={true} />
            <form method="dialog">
              <button formMethod="dialog">
                <img src={Close} alt="Icone de fechar" />
              </button>
            </form>
          </DialogStyled>
        </>
      )}
    </>
  );
};
