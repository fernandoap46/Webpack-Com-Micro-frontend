import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled(Box)`
  justify-content: center;
`;

export const Content = styled(Box)`
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colorBackgroundLighter};
  border-radius: 8px;
  margin: 15px 0;
  padding: 20px;
  font-size: 8px;
  font-weight: 700;
  color: ${(props) => props.theme.colorContentDarkest};
`;

export const Footer = styled.footer`
  color: ${(props) => props.theme.colorContentDark};
  font-size: 15px;
`;

export const BoxInstruction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60px;
`;
