import styled from 'styled-component'

export const FormContainer = styled.form`
  background-color: #333;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 568px;
  padding: 20px 30px;
  width: 100%;
`

export const ImageWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`

export const Image = styled.img`
  margin-bottom: 10px;
  width: 220px;
`