import styled from 'styled-components';

export const SkillStyles = styled.div`
  .colorDial {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(121, 9, 35, 1) 19%,
      rgba(223, 113, 32, 1) 47%,
      rgba(236, 222, 36, 0.7973564425770308) 72%,
      rgba(0, 255, 1, 1) 100%
    );
    background-width: 
    border-radius: 5px;
    display: block;
    height: 20px;
    position: relative;
    padding-right: 10px;
    
    span {
      position: absolute;
      left: ${(props) => props.$level}%;
      color: #000;
      border-radius: 50%;
      background-color: #fff;
      opacity: .6;
      height: 30px;
      border: 1px solid #000;
      padding-left: 5px;
      padding-right: 5px;
      top: -5px;
    }
  }
  p { margin-bottom: 5px; }
`;
