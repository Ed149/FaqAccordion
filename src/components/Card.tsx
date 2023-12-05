import React from 'react'
import star from '/src/assets/icon-star.svg'
import { Accordion } from './Accordion'
import data from '../utils/data.json';

export const Card = () => {
  return (
    <div className='wrapper'>
        <div className="card">
            <header className='card__header'>
                <img src={star} alt="" />
                <h1>FAQs</h1>
            </header>

            {
                data.map(({id,question,answer}) =>(
                    <Accordion
                        key={id}
                        question={question}
                        answer={answer}
                    />
                ))
            }
        </div>

    </div>
  )
}
