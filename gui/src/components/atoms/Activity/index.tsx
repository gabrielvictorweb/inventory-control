import { IActivity } from '@/components/interfaces/activity';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';
import { IoOpenOutline } from 'react-icons/io5';

export const Activity: React.FC<IActivity> = ({ title, progress }) => {
  return (
    <S.Container>
      <S.Header>
        <IoOpenOutline />
        <IoClose />
      </S.Header>
      <S.Content>
        <S.Progress>
          <span>{progress}%</span>
        </S.Progress>
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};
