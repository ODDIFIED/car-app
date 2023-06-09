import styled from "styled-components";

export const HeroCon = styled.div`
   width: 100%;
   max-width: 1300px;
   margin: auto;
   height: 60vh;


  .content {
     width: 100%;
     height: 60vh;
     position: relative;
     background-color: gainsboro;
    }
    
    .content::before {
      content: '';
      background-image: var(--backgroundImg);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
      opacity: 0.5;
    }
  .hero-text{
    width: 50%;
    margin-left: 70px;
  }
  h2{
    width: 70%;
    color: white;
    text-align: left;
    font-size: 35px;
    isolation: isolate;
    position: relative;
    top: 50px;
    font-family: var(--poppins);
    font-weight: 400;
  }
  h5{
    width: 60%;
    color: white;
    text-align: left;
    font-size: 13px;
    isolation: isolate;
    position: relative;
    top: 60px;
    font-family: var(--poppins);
    font-weight: 400;
  }
 
    .hero-btn{
      width: 100%;
      position: relative;
      top: 90px;
     isolation: isolate;
     display: flex;
     justify-content: left;
     gap: 40px;
    }

    .hero-btn button{
        border:none;
        padding: 7px 10px;
        color: white;
        background-color: var(--voilet);
        border-radius: 7px;
        display: flex;
        align-items: center;
    }


    @media screen and (max-width: 900px){
      width: 100%;
      max-width: 900px;
      height: 40vh;
      .content {
        width: 100%;
        height: 40vh;
        position: relative;
        background-color: gainsboro;
        background-size: contain;
       }

       .hero-text{
        width: 50%;
        margin-left: 60px;
      }
      h2{
        width: 90%;
      }
      h5{
        width: 75%;
       
      }
     
        .hero-btn{
          width: 100%;
          position: relative;
          top: 90px;
         isolation: isolate;
         display: flex;
         justify-content: left;
         gap: 40px;
        }
    
       
    
    
        
}
@media screen and (max-width: 850px){
  width: 100%;
  max-width: 900px;
  height: 35vh;
  .content {
    width: 100%;
    height: 35vh;
    position: relative;
    background-color: gainsboro;
    background-size: contain;
   }
   .hero-text{
    width: 50%;
    margin-left: 60px;
  }
  h2{
    width: 95%;
  }
  h5{
    width: 75%;
  }
@media screen and (max-width: 770px){
  width: 100%;
  max-width: 800px;
  height: 35vh;
  .content {
    width: 100%;
    height: 35vh;
    position: relative;
    background-color: gainsboro;
    background-size: contain;
   }
   .hero-text{
    width: 50%;
    margin-left: 60px;
  }
  h2{
    width: 100%;
    font-size: 30px;
    isolation: isolate;
    position: relative;
    top: 30px;
  }
  h5{
    width: 85%;
    top: 40px;
  }
  .hero-btn{
    width: 100%;
    position: relative;
    top: 70px;
  
  }
  @media screen and (max-width: 700px){
    width: 100%;
    max-width: 800px;
    height: 35vh;
    .content {
      width: 100%;
      height: 35vh;
      position: relative;
      background-color: gainsboro;
     }
     .content::before {
      content: '';
      background-image: var(--backgroundImg);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
      opacity: 0.5;
    }
     .hero-text{
      width: 50%;
      margin-left: 40px;
    }
    h2{
      width: 100%;
      font-size: 20px;
      isolation: isolate;
      position: relative;
      top: 30px;
      line-height: 25px;
    }
    h5{
      width: 90%;
      font-size: 10px;
      top: 40px;
    }
    .hero-btn{
      width: 100%;
      position: relative;
      top: 60px;
      gap: 5px;
    
    }
  }
  @media screen and (max-width: 400px){
    width: 100%;
    max-width: 800px;
    height: 35vh;
    .content {
      width: 100%;
      height: 35vh;
      position: relative;
      background-color: gainsboro;
     }
     .content::before {
      content: '';
      background-image: var(--backgroundImg);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      inset: 0;
      opacity: 0.5;
    }
     .hero-text{
      width: 50%;
      margin-left: 40px;
    }
    h2{
      width: 100%;
      font-size: 15px;
      isolation: isolate;
      position: relative;
      top: 30px;
      line-height: 20px;
    }
    h5{
      width: 90%;
      font-size: 8px;
      top: 40px;
    }
    .hero-btn{
      width: 100%;
      position: relative;
      top: 60px;
      gap: 5px;
    }
    .hero-btn button{
      border:none;
      padding: 5px 7px;
      color: white;
      background-color: var(--voilet);
      border-radius: 7px;
      display: flex;
      align-items: center;
  }
  }
  @media screen and (max-width: 400px){
    width: 100%;
    max-width: 800px;
    height: 45vh;
   
  }
`;
