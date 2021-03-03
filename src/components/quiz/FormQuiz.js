import { useState } from 'react'
import styled from 'styled-components'
import AnswerQuiz from './AnswerQuiz'
import { url_backend } from '../../constants'

const FormStyled = styled.form`
    max-height: 80%;
    height: 100%;
    padding: 1rem;
    position: relative
`

const ButtonStyled = styled.button`
    border: none;
    outline: none;
    padding: 1rem 2rem;
    background: #F9A826;
    box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    right: 1rem;
    color: #FFF;
    &:hover {
        box-shadow: 0px 4px 8px #F9A826
    }
`

function FormQuiz({ answers, country, count, setCount, setAnswerCorrect }) {
    const [isDisabled, setIsDisabled] = useState(false)
    const [isSelected, setIsSelected] = useState({ value: null, id: null })
    const [isCapital, setIsCapital] = useState(null)    


    function handleChange(e) {
        setIsDisabled(true)
        setIsSelected({ value: e.target.value, id: e.target.id })
        onSubmit({ capital: e.target.value })
    }

    async function onSubmit({capital}) {
        try {
            const URI = url_backend + '/capital'  
            let response = await fetch(URI+`/${capital}`)
            let data = await response.json()
            if (country == data[0].name) {
                setAnswerCorrect(prev => prev +1)
                return setIsCapital(true)
            }
            setIsCapital(false)
        } catch (error) {
            console.error(error)
        }
    }

    function nextPage() {
        document
        .querySelectorAll('input[type=radio]')
        .forEach((input) => (input.checked = false))
        setCount(count+1)
        setIsSelected({ value: null, id: null })
        setIsDisabled(_ => false)
        setIsCapital(null)
    }


    return (
        <FormStyled>
            {answers.map((ans) =>  (
                    <AnswerQuiz 
                        key={ans.id}
                        value={ans.capital}
                        name='country'                    
                        onChange={handleChange}
                        id={ans.id}
                        capital={ans.capital}  
                        disabled={isDisabled}   
                        verify={isDisabled}
                        isSelected={isSelected}
                        isCapital={isCapital}
                        isRpt={ans.rpt}     
                    />
                )             
            )}
            {isSelected.value ? (
                <ButtonStyled type='button' onClick={_ => nextPage()}  >Next</ButtonStyled>
            ): null}
        </FormStyled>
    )

}

export default FormQuiz