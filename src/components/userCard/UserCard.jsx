import {
  StyledImgNameUsername,
  StyledName,
  StyledNameUsername,
  StyledUserCard,
  StyledUserImg,
  StyledUsername
} from './userCard.styles';

const UserCard = ({ profileImage, name, username, active }) => {
  return (
    <StyledUserCard>
      <StyledImgNameUsername>
        <StyledUserImg src={profileImage} alt='' />
        <StyledNameUsername>
          <StyledName>{name}</StyledName>
          <StyledUsername>@{username}</StyledUsername>
        </StyledNameUsername>
      </StyledImgNameUsername>

      <span>{active ? 'Activo' : 'Inactivo'}</span>
      <button>Ver detalles</button>
    </StyledUserCard>
  );
};

export default UserCard;
