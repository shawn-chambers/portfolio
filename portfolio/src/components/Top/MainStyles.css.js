import styled from 'styled-components';

export const MainContainer = styled.div`
  #container{
    position: relative;
    border: 2px dotted #000000;
    border-radius: 50%;
    width: 450px;
    height: 450px;
  }

  .logo {
    height: 250px; 
    width: auto;
    transform: translate(35%, -15%)
  }

  .link {
    width: 50px;
  }

  .link:nth-child(1) {
    transform: translate(50%, 50px);
  }

  .link:nth-child(2) {
    transform: translate(-20px, 150px);
  }

  .link:nth-child(3) {
    transform: translate(-20px, 250px);
  }

  .link:nth-child(4) {
    transform: translate(50%, 325px);
  }

  .link:nth-child(5) {
    transform: translate(375px, -22px);
  }

  .link:nth-child(6) {
    transform: translate(430px, 75px);
  }

  .link:nth-child(7) {
    transform: translate(430px, 175px);
  }

  .link:nth-child(8) {
    transform: translate(375px, 250px);
  }

  > container:div{
    position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    height: 20px;
    width: 100px;
    border: 2px dotted #000000;
    border-radius: 50%;
  }
`;


// for 12 divs!
// export const MainContainer = styled.div`
//   display: grid;
//   grid-gap: 1rem;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: repeat(6, 50px);
//   column-gap: 10px;
//   row-gap: 15px;
//   grid-template-areas:
//     '.     .     link1  link2  .      .'
//     '.     link3 logo   logo   link4  .'
//     '.     link5 logo   logo   link6  .'
//     '.     link7 logo   logo   link8  .'
//     '.     link9 logo   logo   link10 .'
//     '.     .     link11 link12 .      .';
  
//   .item-1{
//     background-color: green;
//     grid-area: link1;
//   }
  
//   .item-2{
//     background-color: blue;
//     grid-area: link2;
//   }
  
//   .item-3{
//     background-color: pink;
//     grid-area: link3;
//     justify-self: end;
//   }

//   .item-4{
//     background-color: palegoldenrod;
//     grid-area: link4;
//   }

//   .item-5{
//     background-color: goldenrod;
//     grid-area: link5;
//   }

//   .item-6{
//     background-color: aliceblue;
//     grid-area: link6;
//   }

//   .item-7{
//     background-color: red;
//     grid-area: link7;
//   }

//   .item-8{
//     background-color: green;
//     grid-area: link8;
//   }

//   .item-9{
//     background-color: cornflowerblue;
//     grid-area: link9;
//     justify-self: end;
//   }

//   .item-10{
//     background-color: cornflowerblue;
//     grid-area: link10;
//   }

//   .item-11{
//     background-color: cornflowerblue;
//     grid-area: link11;
//   }

//   .item-12{
//     background-color: cornflowerblue;
//     grid-area: link12;
//   }

//   .logo{
//     grid-area: logo;
//     height: 200px; 
//     width: auto;
//   }

//   > div{
//     justify-self: stretch;
//     height: 20px;
//     width: 100px;
//   }
// `;

