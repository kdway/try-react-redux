import styled from 'styled-components';

const Container = styled.div`
  height: 45px;
  background: #319795;
  font-size: 2.7vh;
  margin-top: 5vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Announcement = () => {
  return <Container>RENT A JET-BOOT FROM ANYWHERE AND ANYTIME</Container>;
};

export default Announcement;