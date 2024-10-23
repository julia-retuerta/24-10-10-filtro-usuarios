import styled from 'styled-components';

const StyledUserCard = styled.div`
  width: 500px;
  height: 65px;
  padding: 8px;
  margin: 1rem auto;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const StyledImgNameUsername = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledUserImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const StyledNameUsername = styled.div`
  width: 200px;
`;

const StyledName = styled.h2`
  font-size: 16px;
  margin: 4px 0;
`;

const StyledUsername = styled.p`
  font-size: 12px;
  margin: 0;
`;

const StyledActive = styled.span`
  color: ${({ $active }) => ($active ? '#13b176' : '#ce3131')};
`;

export {
  StyledUserCard,
  StyledImgNameUsername,
  StyledNameUsername,
  StyledUserImg,
  StyledName,
  StyledUsername,
  StyledActive
};
