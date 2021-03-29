import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }
  return (
    <main>
      <Mouse />
      <motion.div
            className="contact"
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}
            transition={transition}>
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>34 Rue Victo Hugo</p>
              <p>4000 Sousse</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="+21655465371" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipborad"
                  onClick={() => {
                    alert("Numéro de téléphone est copié");
                  }}
                >
                  +216 55 46 53 71
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>E-mail</h4>
              <CopyToClipboard
                text="mohamed.n.othman@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipborad"
                  onClick={() => {
                    alert("E-mail copié");
                  }}
                >
                  mohamed.n.othman@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From Scratch-2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
