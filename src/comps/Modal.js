import React from 'react'
import { motion } from 'framer-motion'
const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged moonbyul"
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}
export default Modal
