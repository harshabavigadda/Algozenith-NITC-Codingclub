import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="gradMidLine"></div>
      <footer className="commonPadding">
        <div className="logoSection">
          <p className="thickFont">Algozenith</p>
          <p className="paraSmall">Chapter NITC</p>
          <p className="tinySize">All Copy Rights Reserved.</p>
        </div>
        <div className="socialLinks">
          <a href="" target="_blank">
            <FaGithub />
          </a>
          <a href="" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a href="" target="_blank">
            <FaDiscord />
          </a>
        </div>
        <div className="navigateBtn">
          <Link to="/about" className="paraSmall">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
