import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  margin-top: 40px;
  .pic-folder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  #lamborginiTwo {
    height: 45vh;
    position: relative;
    top: -45px;
    left: 0px;
  }
  #corvette {
    height: 28vh;
    z-index: -2;
    position: relative;
    right: 67px;
  }

  .Content {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    top: -50px;
  }
  //left side styling
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
  .left h4 {
    text-align: left;
    font-size: 15px;
    margin-bottom: 4px;
  }
  .left h5 {
    text-align: left;
    font-size: 25px;
    margin-bottom: 10px;
    width: 76%;
  }
  .left h6 {
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    color: grey;
    width: 65%;
  }

  .left button {
    border-radius: 8px;
    border: none;
    color: white;
    background-color: var(--voilet);
    padding: 7px;
    display: flex;
    justify-content: left;
    align-items: left;
    margin-top: 15px;
  }

  .right {
    width: 30%;
    display: column;
    positive: relative;
  }
  .confold {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    text-align: left;
  }
  .confold h5 {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
  }
  .confold h4 {
    margin-bottom: 7px;
    font-size: 15px;
    font-weight: 600;
    color: black;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 900px;

    #lamborginiTwo {
      height: 25vh;
      position: relative;
      top: -45px;
      left: 0px;
    }
    #corvette {
      height: 18vh;
      z-index: -2;
      position: relative;
      right: 67px;
    }
    .right {
      width: 50%;
      display: column;
    }
    .icon{
      height: 5vh;
      position: relative;
      top: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 500px;

    #lamborginiTwo {
      height: 18vh;
      position: relative;
      top: -45px;
      left: 0px;
    }
    #corvette {
      height: 12vh;
      z-index: -2;
      position: relative;
      right: 67px;
    }
    .left h4 {
      text-align: left;
      font-size: 15px;
      margin-bottom: 4px;
    }
    .left h5 {
      text-align: left;
      font-size: 15px;
      margin-bottom: 10px;
      width: 100%;
    }
    .left h6 {
      text-align: left;
      font-size: 10px;
      font-weight: 400;
      color: grey;
      width: 85%;
    }
    .right {
      width: 50%;
      display: column;
    }
    .confold {
      // border: 1px solid blue;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 1px;
      text-align: left;
    }
    .icon{
      height: 5vh;
    }
    .confold h5 {
      width: 100%;
      font-size: 10px;
      font-weight: 500;
    }
    .confold h4 {
      margin-bottom: 7px;
      font-size: 12px;
      font-weight: 600;
      color: black;
    }
  }
  @media screen and (max-width: 370px) {

    .left h4 {
      text-align: left;
      font-size: 15px;
      margin-bottom: 4px;
    }
    .left h5 {
      text-align: left;
      font-size: 15px;
      margin-bottom: 10px;
      width: 90%;
    }
    .left h6 {
      text-align: left;
      font-size: 10px;
      font-weight: 400;
      color: grey;
      width: 80%;
    }
   
    .confold {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 1px;
      text-align: left;
    }
    .icon{
      height: 4vh;
    }
    .confold h5 {
      width: 100%;
      font-size: 9px;
      font-weight: 500;
    }
    .confold h4 {
      margin-bottom: 5px;
      font-size: 10px;
      font-weight: 600;
      color: black;
    }
  }
`;
