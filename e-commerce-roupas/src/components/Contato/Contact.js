import React from "react";
import MessageForm from "./MessageForm";
import "../../css/Contato.css";
import Menu from "../Menu"; // Caminho ajustado para o Menu.js

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Cabeçalho */}
      <Menu />

      {/* Banner */}
      <div className="banner">
        <h1>Entre em contato</h1>
        <p>Início | Entre em Contato</p>
      </div>

      {/* Conteúdo Principal */}
      <main className="content">
        <section className="form-info-container">
          {/* Formulário */}
          <div className="form-section">
            <MessageForm />
          </div>

          <ul className="contact-info">
            <li>
              <span>📞</span>
              <p>
                <strong>+44 123 456 789</strong>
                <br />
                Para suporte
              </p>
            </li>
            ...
          </ul>
        </section>

        {/* Mapa */}
        <section className="map">
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=pabna&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Contact;
