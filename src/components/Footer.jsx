import React from "react";
import styled from "styled-components";
import jackk from "../assets/jackk.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      
      <Section>
        
        <div className="brand container">
          <img src={jackk} alt=""  />
        
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
        <div className="title">
          <p><b>SERVE JACKFRUIT</b></p>
           <button>ORDER</button> 
          </div>
          <ol type="disc">
            <li>PRODUCTS</li>
            <li>RESELLERS</li>
            <li>EVENTS</li>
            <li>FAQS</li>
            <li>PRESS</li>
            <li>JOBS</li>
          </ol>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>GET IN TOUCH</h3>
          </div>
          <p>+91 1231231231</p>
          <p>jack@meetjack.nl</p>
          <p>peiter Goedkoopweg 16 , Netherlands</p>
        </div>
      </Section>
     
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: black;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  button {
    padding: 0.6rem 3rem;
    letter-spacing: 0.2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    border: none;
    color: white;
    background-color: green;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #f9c74f;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

