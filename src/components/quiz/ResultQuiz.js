import styled from 'styled-components'

const ResultStyled = styled.section`
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: space-between

    & section {
        margin: auto;
        width: 100%;
        display: block;
        text-align: center;
    }

    & article, section {
        text-align: center
    }

    & article h4 {
        color: #1D355D;
        font-size: 48px;
        font-weight: bold;
        margin: 0;
        font-style: normal;
        line-height: 72px;
    }
    & article p {
        color: #1D355D;
        font-size: 18px;
        line-height: 27px;
        font-style: normal;
        font-weight: normal;
        & strong {
            color: #6FCF97;
            font-weight: bold;
            font-size: 40px
        }
    }

    & button {
        height: 62px;
        padding: 0 16px;
        width: 193px;
        border-radius: 12px;
        border: 2px solid #1D355D;
        background: #FFF;
        color: #1D355D;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        transition: transform 500ms;
        outline: none;
        &:hover {
            background: #1D355D;
            color: #FFF;
            box-shadow: 0px 2px 10px #1D355D;
        }
    }
`

function ResultQuiz({ answerCorrect, setAnswerCorrect, setIsResult, setCount }) {

    function resetQuiz() {
        setIsResult(false)
        setCount(0)
        setAnswerCorrect(0)
    }

    return (
        <ResultStyled>
            <section>
                <img src="/static/images/winners.svg" alt="imagen ganadora" />
            </section>
            <article>
                <h4>Resultados</h4>
                <p>Tienes <strong> {answerCorrect} </strong>respuestas correctas</p>
            </article>
            <section className='' >
                <button onClick={_ => resetQuiz()} >
                    Intentar otra vez
                </button>
            </section>
        </ResultStyled>
    )

}

export default ResultQuiz