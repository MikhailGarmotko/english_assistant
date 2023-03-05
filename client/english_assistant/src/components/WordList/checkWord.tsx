import { useGetWordQuery } from '../../store/slices/api/translateApi';
import { useCreateWordMutation } from '../../store/slices/api/WordApi';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainContainer } from './saveWordstyle';
import wheel from '../../images/wheel.gif';
import errorImg from '../../images/error.avif';
import { WheelImg, WordContainer, WordsContainer, WordTitle, StyledButton } from './saveWordstyle';
import { CgSearchFound } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '../../store';
import { loadWords } from '../../store/slices/wordSlices';

export const CheckWord = () => {
  const navigate = useNavigate();
  const {id} = useAppSelector((state) => state.userProfile.user);
  const words = useAppSelector ( (state) => state.wordProfile.words);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const [createWord] = useCreateWordMutation();
  const { data, error, isLoading } = useGetWordQuery(location.state.word);

  const onClickSave = () => {
    // debugger;
    createWord({word:location.state.word, userId:id});
    dispatch(loadWords(location.state.word));
    navigate('/');
  }
 
  return (
    <MainContainer>
      {data?.list.length && (
        <>
          <WordTitle>{location.state.word}</WordTitle>
          <WordsContainer>
            {data.list.map((i: any) => (
              <WordContainer>
                <div>{i.definition}</div>
                <div style={{ color: 'crimson' }}> {i.example}</div>
              </WordContainer>
            ))}
          </WordsContainer>
        </>
      )}
      {data && !data?.list.length && <img src={errorImg} style={{ height: '50vh' }}></img>}
      {data && <StyledButton onClick={onClickSave}>Save</StyledButton>}
      {data && <StyledButton onClick={() => navigate('/')}>Back</StyledButton>}
      {isLoading && <WheelImg />}
    </MainContainer>
  );
};
