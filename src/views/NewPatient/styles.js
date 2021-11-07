import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const SelectImagesWrapper = styled.div`
`;

export const ImagesViewerWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`;

export const OptionsFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  & > * {
      margin-top: 10px;
  }

  & > *:not(:first-child) {
      margin-left: 20px;
      margin-right: 20px;
  }
`;
