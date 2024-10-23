import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <StyledButton>my styled button</StyledButton>
    </div>
  );
};

export default Landing;
