import styled from 'styled-components'

export const Container = styled.div``;

export const ImageSelectorWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`;

export const ImagesFooterWrapper = styled.div`
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
