import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ data }) => {
  const {
    imageUrl,
    price,
    address,
    description,
    numBedroom,
    numWashrooms,
    livingSpace,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      key="modal__image"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        key="modal__image"
        className="modal__image"
        alt="real estate mansion"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{price}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{address}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <Feature iconName={"FaBed"} iconLabel={numBedroom} />
          <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
          <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
        </motion.div>
        <motion.div
          className="modal__row modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        <motion.div
          className="modal__close-container"
          whileHover={{ scale: 1.2 }}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;