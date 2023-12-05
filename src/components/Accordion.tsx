import { useState } from 'react';
import minus from '/src/assets/icon-minus.svg';
import plus from '/src/assets/icon-plus.svg';
import { FAQ } from '../interfaces/faq.interface';

export const Accordion = ({question,answer}:FAQ) => {
    const [image,setImage] = useState(plus)
    const [open,setOpen] = useState(false);


    const handleOpenFaq = () =>{
        let img = image == plus ? minus : plus;
        setImage(img);
        setOpen(!open);
    }
  return (
    <>
    <section className="card__accordion">
        <div className="card__accordion_question" onClick={handleOpenFaq}>
            <h3>{question}</h3>
            <img src={image} alt="" />
        </div>
        <div className={`card__accordion_answer ${!open ? "" :"open"}`}>
            <p>{answer}</p>
        </div>
    </section>
   
    
    </>
  )
}
