import CardQuiz from '@/components/quiz/CardQuiz'
import styled from 'styled-components'
import dataApi from '../countries.json'

const WrapperStyled = styled.section`
  align-items: center;
  background: url('/static/images/background.png') no-repeat center top;
  background-size: cover;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;
  position: absolute;
  rigth: 0;
  top: 0;
  width: 100%;
  & h1 {
    display: block;
    transform: translateX(-8rem);
    color: #FFF;
    font-size: 36px;
    line-height: 54px;
  }
`

export default function Home() {
  return (
    <>
      <WrapperStyled>
        <h1>COUNTRY QUIZ</h1>
        <CardQuiz questions={dataApi.questions} />
      </WrapperStyled>
    </>
  )
}
