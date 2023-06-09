import styled from "styled-components";

export const FootCon = styled.div`
  margin-top: 150px;
  max-width: 1300px;

  #black-footer {
    background-color: black;
    height: 40vh;
    width: 100%;
  }
  #blue-footer {
    background-color: var(--voilet);
    height: 40vh;
    width: 95%;
    margin: auto;
    position: relative;
    top: -190px;
    font-size: 60px;
  }

  #blue-footer::before {
    content: "";
    background-image: var(--backgroundImgTwo);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0;
    opacity: 0.6;
  }
  .overall {
    position: relative;
    top: 40px;
    width: 60%;
    margin: auto;
    isolation: isolate;
    height: 100%;
  }
  h2 {
    color: white;
    text-align: center;
    font-size: 30px;
    isolation: isolate;
    margin-top: 50px;
    font-family: var(--poppins);
    font-weight: 400;
  }
  h5 {
    width: 55%;
    margin: auto;
    color: white;
    text-align: center;
    font-size: 11px;
    isolation: isolate;
    margin-top: 5px;

    font-family: var(--poppins);
    font-weight: 400;
  }
  span,
  button {
    isolation: isolate;
  }
  .download button {
    margin: auto;
    border: none;
    color: white;
    background-color: black;
    padding: 10px 15px;
    border-radius: 5px;
    display: flex;
    justify-center: center;
    align-items: center;
    margin-top: 15px;
  }

  .download button span {
    justify-content: space-evenly;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    margin-top: 150px;
    max-width: 1300px;

    #black-footer {
      background-color: black;
      height: 20vh;
      width: 100%;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 20vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -160px;
      font-size: 60px;
    }
    h2 {
      color: white;
      text-align: center;
      font-size: 30px;
      isolation: isolate;
      margin-top: 20px;
      font-family: var(--poppins);
      font-weight: 400;
    }
    h5 {
      width: 80%;
      margin: auto;
      color: white;
      text-align: center;
      font-size: 11px;
      isolation: isolate;
      margin-top: 5px;

      font-family: var(--poppins);
      font-weight: 400;
    }
  }
  @media screen and (max-width: 801px) {
    margin-top: 150px;
    max-width: 1300px;

    #black-footer {
      background-color: black;
      height: 17vh;
      width: 100%;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 16vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -170px;
      font-size: 60px;
    }
  }
  @media screen and (max-width: 770px) {
    #black-footer {
      background-color: black;
      height: 20vh;
      width: 100%;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 20vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -170px;
      font-size: 60px;
    }
  }
  @media screen and (max-width: 500px) {
    #black-footer {
      background-color: black;
      height: 20vh;
      width: 100%;
    }
    #blue-footer::before {
      content: "";
      background-image: var(--backgroundImgMobile);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
      opacity: 0.6;
    }
    .overall {
      position: relative;
      top: 10px;
      width: 60%;
      margin: auto;
      isolation: isolate;
      height: 100%;
    }
    .car-icon{
      height: 20px;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 20vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -130px;
      font-size: 60px;
    }
    h2 {
      color: white;
      text-align: center;
      font-size: 20px;
      isolation: isolate;
      margin-top: 10px;
      font-family: var(--poppins);
      font-weight: 400;
    }
    h5 {
      width: 100%;
      margin: auto;
      color: white;
      text-align: center;
      font-size: 10px;
      isolation: isolate;
      margin-top: 5px;

      font-family: var(--poppins);
      font-weight: 400;
    }
    .download button {
    padding: 5px 5px;
      justify-center: center;
      align-items: center;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 400px) {
    #black-footer {
      background-color: black;
      height: 20vh;
      width: 100%;
    }
    #blue-footer::before {
      content: "";
      background-image: var(--backgroundImgMobile);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
      opacity: 0.6;
    }
    .overall {
      position: relative;
      top: 10px;
      width: 70%;
      margin: auto;
      isolation: isolate;
      height: 100%;
    }
    .car-icon{
      height: 20px;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 18vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -110px;
      font-size: 60px;
    }
    h2 {
      width: 100%;
      color: white;
      text-align: center;
      font-size: 13px;
      isolation: isolate;
      margin-top: 10px;
      font-family: var(--poppins);
      font-weight: 400;
    }
    h5 {
      width: 70%;
      margin: auto;
      isolation: isolate;
      color: white;
      text-align: center;
      font-size: 9px;
      isolation: isolate;
      margin-top: 5px;

      font-family: var(--poppins);
      font-weight: 400;
    }
    .download button {
    padding: 5px 5px;
      justify-center: center;
      align-items: center;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    #black-footer {
      background-color: black;
      height: 20vh;
      width: 100%;
    }
    #blue-footer::before {
      content: "";
      background-image: var(--backgroundImgMobile);
      background-size: cover;
    }
    .overall {
      position: relative;
      top: 10px;
      width: 70%;
      margin: auto;
      isolation: isolate;
      height: 100%;
    }
    .car-icon{
      height: 20px;
    }
    #blue-footer {
      background-color: var(--voilet);
      height: 23vh;
      width: 95%;
      margin: auto;
      position: relative;
      top: -130px;
      font-size: 60px;
    }
    h2 {
      width: 100%;
      color: white;
      text-align: center;
      font-size: 12px;
      isolation: isolate;
      margin-top: 10px;
      font-family: var(--poppins);
      font-weight: 400;
    }
    h5 {
      font-size: 8px;
      isolation: isolate;
      margin-top: 5px;
    }
    .download button {
      margin-top: 7px;
    }
  }
`;

export const FootNav = styled.div`
  border: 1px solid grainsboro;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-block: 10px;
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  position: relative;
  top: 170px;
  border-bottom: 0px;

  .icons-fold {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 span {
    font-size: 20px;
    text-decoration: underline;
    color: var(--voilet);
    font-family: var(--navfont);
  }
  h1 {
    font-size: 17px;
    font-family: "Righteous", cursive;
    margin-left: 5px;
  }

  .icons-fold h1 {
    color: white;
  }
  .fold a {
    color: white;
    margin-left: 15px;
    font-size: 14px;
    text-decoration: none;
    font-weight: 400;
  }
  .icon {
    margin-left: 6px;
    border: 1px solid grey;
    border-radius: 100%;
    padding: 2px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 900px;
    margin: auto;
    position: relative;
    top: 140px;
    border-bottom: 0px;
  }
  @media screen and (max-width: 801px) {
    width: 100%;
    max-width: 900px;
    margin: auto;
    position: relative;
    top: 115px;
    border-bottom: 0px;
  }
  @media screen and (max-width: 500px) {
 
  padding-block: 5px;
  text-align: left;

  position: relative;
    top: 170px;
    width: 100%;
    max-width: 700px;
    margin: auto;
    position: relative;
    top: 115px;
    border-bottom: 0px;
  }
  .fold a {
    color: white;
    margin-left: 4px;
    font-size: 10px;
    text-decoration: none;
    font-weight: 400;
  }
  .icons-fold h1 {
    color: white;
  }
  .icon {
    height: 18px;
    border-radius: 60%;
    padding: 3px;
  }

  h1 span {
    font-size: 10px;
    text-decoration: underline;
    color: var(--voilet);
    font-family: var(--navfont);
  }
  h1 {
    font-size: 9px;
    font-family: "Righteous", cursive;
    margin-left: -2px;
  }
  @media screen and (max-width: 400px) {
 
  padding-block: 5px;
  text-align: left;

   position: relative;
    top: 140px;
    width: 100%;
    max-width: 700px;
    margin: auto;
    position: relative;
    top: 100px;
    border-bottom: 0px;
  
  .fold a {
    color: white;
    margin-left: 3px;
    font-size: 7px;
  }
  .icons-fold h1 {
    color: white;
  }
  .icon {
    height: 16px;
    border-radius: 60%;
    margin-left: 3px;
    padding: 3px;
  }
 
  
  h1 {
    font-size: 9px;
    font-family: "Righteous", cursive;
    margin-left: -2px;
  }
  @media screen and (max-width: 320px) {
 
  padding-block: 5px;
  text-align: left;

   position: relative;
    top: 70px;
    width: 100%;
    max-width: 700px;
    margin: auto;
    position: relative;
    border-bottom: 0px;
  
  .fold a {
    color: white;
    margin-left: 3px;
    font-size: 8px;
  }
  .icons-fold h1 {
    color: white;
  }
  .icon {
    height: 13px;
    border-radius: 100%;
    margin-left: 1px;
    padding: 1px 2px;
  }
 
  
  h1 {
    font-size: 7px;
    font-family: "Righteous", cursive;
    margin-left: -2px;
  }
`;
