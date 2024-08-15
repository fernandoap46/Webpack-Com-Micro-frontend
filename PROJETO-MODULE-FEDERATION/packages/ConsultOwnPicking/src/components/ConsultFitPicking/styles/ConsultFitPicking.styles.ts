import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  height: 100%;
  margin-right: 16px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PageTitle = styled.span`
  color: ${(props) => props.theme.colorContentDarkest}!important;
  font-size: ${(props) => props.theme.fontSizeSmall}!important;
  font-weight: ${(props) => props.theme.fontWeightBlack}!important;
  font-family: ${(props) => props.theme.fontFamilyGlobal}!important;
  line-height: ${(props) => props.theme.lineHeightSmall}!important;
  margin-top: 10px;
`;

export const Division = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colorBackgroundLighter} !important;
`;



export const SearchButton = styled.button`
  display: flex;
  gap: 8px;
  background-color: ${(props) => props.theme.colorBrandPure}!important;
  color: ${(props) => props.theme.colorContentWhite} !important;
  padding: 10px 20px !important;
  &:disabled {
    background-color: ${(props) =>
      props.theme.colorBackgroundMediumLight} !important;
    color: ${(props) => props.theme.colorContentWhite} !important;
  }
  margin-top: auto !important;
  margin-left: 16px !important;
`;

export const FormContainer = styled.form`
  display: flex;
`;
