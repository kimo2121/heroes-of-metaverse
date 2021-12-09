import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./styles.css";
import metamask from "../../assets/metamask.png";
import wallet from "../../assets/wallet.png";
import { AiOutlineClose } from "react-icons/ai";

interface modalTypes {
  connectMetamask?: any;
  loginStatus?: any;
  truncateWalletString?: any;
  account?: any;
}
const SimpleModal: React.FC<modalTypes> = ({
  connectMetamask,
  loginStatus,
  truncateWalletString,
  account,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modal-styles">
      <div>
        <h2 className="simple-modal-title">
          Connect to a wallet
          <AiOutlineClose onClick={handleClose} />
        </h2>
      </div>
      <div className="modal-content">
        <p
          onClick={() => {
            connectMetamask();
            handleClose();
          }}
        >
          <img src={metamask} alt="" />
          <p>
            Metamask
            <br />
            <span>Connect using browser wallet</span>
          </p>
        </p>
        <p>
          <img src={wallet} alt="" />
          <p>
            Wallet Connect
            <br />
            <span>Connect using browser wallet</span>
          </p>
        </p>
      </div>
      <div className="modal-footer">
        <h3>Haven't configured metmask yet ?</h3>
        <a href="">Learn How to Configure</a>
      </div>
    </div>
  );
  const Disconnect = (
    <div className="modal-styles disconnect">
      <h2>Disconnect</h2>
    </div>
  );

  return (
    <div style={{ position: "relative", zIndex: "10000" }}>
      <button
        onClick={() => {
          handleOpen();
        }}
        className="connect-btn"
      >
        {loginStatus ? truncateWalletString(account) : "CONNECT"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {loginStatus ? Disconnect : body}
      </Modal>
    </div>
  );
};
export default SimpleModal;
