import styled from "styled-components";

const StyledWrapper = styled.div`
  background: red;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;

const Landing = () => {
  return (
    <StyledWrapper>
      <h1>Landing Page</h1>
      <div className="content">some content</div>
    </StyledWrapper>
  );
};

export default Landing;
