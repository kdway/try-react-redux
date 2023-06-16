import styled from "styled-components";
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'
const Container = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
margin-top: 7vh;
`;
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 0.8em;
  text-align: center;
  color: rgb(90, 90, 90);
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2.5em;
  background: rgb(250, 250, 250);
  margin: 5vh;
  border-radius: 0.4vh;
  margin-bottom: 12vh;
`;
const Button = styled.div`
padding: 1.1vh;
margin: 3vh 2vh 2vh 3.1vh;
box-shadow: 0.2vh 0.1vh rgb(180, 180, 180);
cursor: pointer;

`;



const Contact = () =>{
    return(
      // Use Title and Wrapper like any other React component – except they're styled!
 <Container>

    <Wrapper>
      <Title><span style={{fontSize:'10vh'}}><RiCustomerService2Fill /></span></Title>
      <Title>Customer Service</Title>
      <Title>Our support team is just a click away</Title>
      <Button><span style={{fontSize:'2.2vh', marginLeft:'6.8vh'}}>Contact Now</span></Button>
    </Wrapper>

    <Wrapper>
      <Title><span style={{fontSize:'10vh'}}><BsFillChatRightTextFill /></span></Title>
      <Title>Chat Contact</Title>
      <Title>Our support team is just a click away</Title>
      <Button><span style={{fontSize:'2.2vh', marginLeft:'6.8vh'}}>Chat Now</span></Button>
    </Wrapper>

    <Wrapper>
      <Title><span style={{fontSize:'10vh'}}><BiMailSend /></span></Title>
      <Title>Send Email</Title>
      <Title> Our support team is just a click away</Title>
      <Button><span style={{fontSize:'2.2vh', marginLeft:'6.8vh'}}>Send Message</span></Button>
    </Wrapper>

 </Container>


        
        

    )
}

export default Contact



