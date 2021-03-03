import styled from 'styled-components'
import React from 'react'

const InputStyled = styled.section`
    margin: 1.5rem 0;
    & .correct-answer {
        background: #60BF88;
        color: #FFF;
        border: 2px solid #60BF88
    }
    & label {
        border: 2px solid rgba(96, 102, 208, 0.7);
        color: rgba(96, 102, 208, 0.8);
        display: block;
        border-radius: .75rem;
        padding: 1rem;
        & span, & strong {
            font-weight: 500;
            font-size: 1.125rem;
        }
        & span {
            margin-right: 3rem 
        }
        & .close__icon, & .checked__icon {
            position: absolute;
            right: 0;
            border: 2px solid;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
        }
        ${({ isSelected, idAnswer, capital, isCapital }) => 
            !isSelected.value 
            ? `&:hover {
                background: #F9A826;
                cursor: pointer;
                color: #FFFFFF;
                border: 2px solid #F9A826; 
                transition: 300ms;
            }`
            : `            
                ${(isSelected.id == idAnswer && isSelected.value == capital) && `
                background: ${isCapital == 1 ? '#60BF88': '#EA8282'};
                border: 2px solid ${isCapital == 1 ? '#60BF88': '#EA8282'};
                color: #FFF
                `}              
            `
        } 
    }
    & input {
        display: none;
    }   
`

const AnswerQuiz = ({ isCapital, isRpt, id, isSelected, capital, verify,...rest }) => {
    return (
        <InputStyled 
            isSelected={isSelected} 
            idAnswer={id} 
            capital={capital}
            isCapital={isCapital?1:0}
        >
            <label htmlFor={id} className={(isSelected.value && isRpt) ? 'correct-answer': ''} >
                <span>{ id }</span>
                <strong>{ capital }</strong>
                {(isSelected.value && (
                    (isSelected.id == id && isSelected.value == capital) && (
                        (!isCapital) && <span className="material-icons  close__icon">close</span>
                    )
                ))}   
                {(isSelected.value && isRpt) && <span className="material-icons checked__icon">check</span>}                         
            </label>
            <input 
                type='radio'
                id={id}
                {...rest}
            />
        </InputStyled>

    )

}

export default AnswerQuiz