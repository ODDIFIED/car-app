import styled from "styled-components";

export const Carsfold = styled.div`
  width: 100%;
  margin: auto;
  height: 100vh;
  font-family: var(--poppins);

  h4 {
    color: var(--voilet);
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 12px;
  }
  h2 {
    font-size: 22px;
    color: black;
  }
  .item-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 30px;
  }
  .rent-fold {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rent-btn {
    border: 1px solid var(--voilet);
    border-radius: 10px;
    color: var(--voilet);
    background: none;
    display: block;
    margin-bottom: 10px;
    padding: 5px 10px;
  }
  .rent-btn:hover {
    cursor: pointer;
    color: white;
    background-color: var(--voilet);
  }
  .car-data {
    border: 1px solid var(--voilet);
    text-align: center;
  }
  .car-data h5 {
    border: 1px solid var(--voilet);
    border-left: 0;
    border-right: 0;
    border-top: 0;
    color: var(--voilet);
    padding: 5px 10px;
  }
  .rent-img img {
    height: 45vh;
  }

  @media screen and (max-width: 900px) {
    .item-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 30px;
    }
    .rent-fold {
      width: 100%;
      max-width: 900px;
      margin: auto;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .rent-btn {
      margin-bottom: 0px;
      margin-top: 2b0px;
      padding: 5px 10px;
    }
    .btn-folder {
      display: flex;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 0px;
      padding: 5px 10px;
    }
    
  }
  @media screen and (max-width: 770px) {
    .item-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 30px;
    }
    .rent-img img {
      height: 35vh;
    }
  }
  @media screen and (max-width: 700px) {
    .item-grid {
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 5px;
      margin-top: 20px;
     margin-bottom: 40px;

    }
  }
  @media screen and (max-width: 500px) {
    .item-grid {
      width: 90%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0px;
      margin-top: 20px;
     margin-bottom: 40px;
    }
    .rent-fold {
      width: 100%;
      max-width: 400px;
      margin: auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .btn-folder {
      display: column;
      justify-content: center;
      gap: 7px;
      margin-bottom: 0px;
      margin-top: 10px;
      padding: 5px 10px;
    }
    .rent-img img {
      height: 30vh;
    }
  }
  @media screen and (max-width: 400px) {
    .item-grid {
      width: 90%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0px;
      margin-top: 20px;
     margin-bottom: 40px;
    }
    .rent-fold {
      width: 100%;
      max-width: 300px;
      margin: auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .rent-btn {
      width:100%;
      margin-bottom: 0px;
      margin-top: 20px;
      padding: 3px 8px;
    }
    .btn-folder {
      display: column;
      justify-content: center;
      gap: 4px;
      margin-bottom: 0px;
      padding: 5px 10px;
    }
    .rent-img img {
      height: 30vh;
    }
  }
`;

export const CardHolder = styled.div`
  border: 1px solid gainsboro;
  width: 60%;
  height: 55vh;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);

  .img-folder {
    height: 50%;
    object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  hr {
    margin-top: 10px;
  }
  article {
    text-align: left;
    padding: 10px 7px;
  }
  article h6 {
    font-size: 13px;
    text-align: right;
  }
  article h5 {
    font-size: 13px;
    font-weight: 400;
  }
  .mode-details {
    display: flex;
    justify-content: right;
    gap: 5px;
    margin-top: 10px;
  }
  .mode-details h5 {
    border: 1px solid var(--voilet);
    border-radius: 10px;
    padding: 5px 5px;
    color: white;
    background-color: var(--voilet);
  }
  .price-location {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .price-location h6 {
    color: gray;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
  .price-location h5 {
    font-size: 14px;
    font-weight: 600;
  }
  article button {
    border-radius: 8px;
    border: none;
    color: white;
    background-color: var(--voilet);
    width: 100%;
    margin: auto;
    padding-block: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  @media screen and (max-width: 900px) {
    border: 1px solid gainsboro;
    width: 85%;
    height: 35vh;
    margin: auto;
    margin-bottom: 20px;

    .img-folder {
      height: 55%;
      object-fit: cover;
    }
    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    border: 1px solid gainsboro;
    width: 80%;
    height: 37vh;
    margin: auto;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 770px) {
    border: 1px solid gainsboro;
    width: 90%;
    height: 43vh;
    margin: auto;
    margin-bottom: 20px;

  }
  @media screen and (max-width: 600px) {
    border: 1px solid gainsboro;
    width: 90%;
    height:  55vh;
    margin-bottom: 20px;
    .img-folder {
      height: 60%;
      object-fit: cover;
    }
    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    

  }
  @media screen and (max-width: 400px) {
    border: 1px solid gainsboro;
    width: 100%;
    height:  57vh;
    margin-bottom: 20px;

    .img-folder {
      height: 60%;
      object-fit: cover;
    }
    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

  }
  @media screen and (max-width: 330px) {
    border: 1px solid gainsboro;
    width: 100%;
    height:  90vh;
    margin-bottom: 20px;

    .img-folder {
      height: 60%;
      object-fit: cover;
    }
    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

  }
`;
