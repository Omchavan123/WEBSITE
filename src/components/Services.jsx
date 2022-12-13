import React from "react";
import styled from "styled-components";

import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">BENEFITS</h1>
        <p>
        We know many people are looking to eat less meat
        </p>
      </div>
      <div className="services">
        <div className="service">
         
          <p>
          Jackfruit contains a high amount of vitamin C and 
antioxidants <span>which helps boost your immune system </span>{" "}

          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          
          <p>
A 100gm serving of the jackfruit contains 94 Kcal<span>and is loaded with</span>{" "}
good carbohydrates
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
         
        <p>
The potassium in this tropical fruit  ,<span>could help lower your</span>{" "}
blood pressure  .
          </p>


          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
