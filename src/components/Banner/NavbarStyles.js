import styled from "styled-components";

export const Navcon = styled.div`
  border: 1px solid grainsboro;
  width: 100%;
  max-width: 1300px;
  height: ${(props) => (props.extend ? "50vh"   : "100vh")}

  margin: auto;
  padding-block: 10px;
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  box-shadow: 1px 4px 15px -7px rgba(117, 109, 109, 0.75);
  -webkit-box-shadow: 1px 4px 15px -7px rgba(117, 109, 109, 0.75);
  -moz-box-shadow: 1px 4px 15px -7px rgba(117, 109, 109, 0.75);



  .icons-fold {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .link-con {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

 

  .fold a {
    margin-left: 10px;
    font-size: 14px;
    text-decoration: none;
    color: black;
    font-weight: 400;
  }

  select {
    color: black;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 300;
  }

  h1 {
    font-size: 17px;
    font-family: "Righteous", cursive;
    margin-left: 5px;
  }
  h1 span {
    font-size: 20px;
    text-decoration: underline;
    color: var(--voilet);
    font-family: var(--navfont);
  }
  .download button {
    border: none;
    color: white;
    background-color: var(--voilet);
    padding: 5px 10px;
    align-: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }

  .download button span {
    justify-content: space-evenly;
    align-items: center;
  }

  

  .responsive-btn button {
    border: none;
    color: var(--voilet);
    font-size: 30px;
    background: none;
    background-color: none;
    position: relative;
    left: 90px;

    @media (min-width: 700px) {
      display: none;
    }
  }

 

  // responsive code for navbar toggle

  .fold-active {
    width: 100%;
    height: 80vh;
    position:absolute;
    top: 60px;
    left: 0%;
    z-index: 2;
    opacity: 0.8;
    background-color: var(--voilet);
  }
 
  .fold-active a {
    // isolation: isolate;
    position: relative;
    top: 60px;
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-bottom: 70px;
  }
  
  .fold-active select {
    color: white;
    border: none;
    background: none;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
  }

  .fold-active .download button {
    font-size: 24px;

    border: 2px solid white;
    margin-inline: auto;
    margin-top: 110px;
    color: white;
    background-color: var(white);
    // padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }

  .download button span {
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (max-width: 800px){
    max-width: 800px;
    padding-inline: 30px;
    
  }
  @media screen and (max-width: 900px){
    max-width: 900px;
    padding-inline: 30px;
    
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    max-width: 800px;
    height: 100vdh;

    .fold a {
      display: none;
    }
    .download button {
      display: none;
    }
    .car-icon{
      height: 30px;
    }
    h1 {
      font-size: 17px;
      font-family: "Righteous", cursive;
      margin-left: 0px;
    }
    h1 span {
      font-size: 20px;
      text-decoration: underline;
      color: var(--voilet);
      font-family: var(--navfont);
    }
  
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    max-width: 400px;
    height: 100vdh;
    

    .fold a {
      display: none;
    }
    .download button {
      display: none;
    }
    .car-icon{
      height: 30px;
    }
    h1 {
      font-size: 17px;
      font-family: "Righteous", cursive;
      margin-left: 0px;
    }
    h1 span {
      font-size: 20px;
      text-decoration: underline;
      color: var(--voilet);
      font-family: var(--navfont);
    }
  }
  
`;



