import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FormQuiz from './FormQuiz'
import ResultQuiz from './ResultQuiz'
import { questionListAsMap, getAllCountrys } from '../../utils/normalize'

const CardStyled = styled.section`
    background: #FFFFFF;
    border-radius: 1.5rem; 
    height: 100%;    
    max-width: 29rem;
    max-height: 32.1875rem;
    min-width: 310px;
    min-height: 550px;
    padding: 4rem 2rem;
    width: 100%; 
    & .adventure__container {
        position: relative;
        & img {
            position: absolute;
            right: -2rem;
            top: -11rem;
            width: 14rem
        }
    }
    & h3{
        font-size: 1.5rem;
        color: #2F527B;
        font-style: normal;
        font-weight: bold;
        line-height: 2.25rem;
    }     
`

function CardQuiz({ questions }) {
    const [questionList, setQuestionList] = useState(null)
    const [allQuestions, setAllQuestions] = useState(null)
    const [data, setData] = useState(null)
    const [count, setCount] = useState(0)
    const [isResult, setIsResult] = useState(false)
    const [answerCorrect, setAnswerCorrect] = useState(0)
    const isMounted = useRef()


    useEffect(() => {
        isMounted.current = true
        if (isMounted.current) {
            setQuestionList(questionListAsMap(questions))
            setAllQuestions(getAllCountrys(questions))
        }

        return _ => { isMounted.current = false }
    }, [])

    useEffect(() => {
        if (!allQuestions) return
            if (count <= allQuestions.length - 1) {
                if (isMounted.current) 
                    return setData(questionList.get(allQuestions[count]))
            }
            if (isMounted.current) setIsResult(true)
    }, [allQuestions, count])
  
    if (!data) return <></>;

    return (
        <CardStyled>    
            {!isResult 
            ? 
            <>
                <section className='adventure__container' >
                    <img src="/static/images/adventure.svg" alt="logo aventura" />
                </section>
                <h3>Cual es la capital de { data.country }</h3>        
                <FormQuiz
                    answers={data.answers}
                    country={data.country}
                    setCount={setCount}
                    count={count}
                    setAnswerCorrect={setAnswerCorrect}
                    />
            </>
             
            : 
                <ResultQuiz 
                    answerCorrect={answerCorrect} 
                    setIsResult={setIsResult}
                    setCount={setCount}
                    setAnswerCorrect={setAnswerCorrect}
                />
            }
        </CardStyled>
    )

}
CardQuiz.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        country: PropTypes.string.isRequired,
        answers: PropTypes.array.isRequired
    }))
}

export default CardQuiz