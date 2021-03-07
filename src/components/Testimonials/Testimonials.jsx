import { Button } from '@material-ui/core';
import React, { useState }  from 'react'

export default function Testimonials() {
    console.log('Main function ran!!')
    const testimonials = [
        {
            name: 'Dilip',
            quote: `One can assume how paranoid one is when they have 
            to undergo the process of extraction. But the tooth 
            was out before I could even realize. Dr. Neetu is 
            best. Simply amazing!`
        },
        {
            name: 'Neetu',
            quote: ` had great experience with Clove Dental. They 
            are upto mark on clinic hygiene, ambience and doctor 
            patient interaction. Special thanks to Dr. Neetu.`
        },
        {
            name: 'Urmila',
            quote: `Best advice, great services, best counselling 
            and complete satisfaction with the treatment.`
        },
        {
            name: 'Nishtha',
            quote: `I really appreciate the services given by 
            Dr. Neetu & Dr. Kaur. Excellent. Thank You! `
        }
    ]

    const [quote, setQuote] = useState(0);
    
    const prevQuote = () => {
        setQuote(prevState => {
            if(prevState === 0) {
                return testimonials.length - 1 
            } 
            return prevState - 1;
        })
    } 

    const nextQuote = () => {
        setQuote(prevState => {
            if(prevState === testimonials.length - 1) {
                return 0
            }
            return prevState + 1;
        })
    }

    return (
        <div className="testimonial-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <h3 className="Testimonial-header">{testimonials[quote].name}</h3>
                <q>{testimonials[quote].quote}</q>
                <div className="testimonial-buttons-container">
                    <Button variant="outlined" onClick={prevQuote}>{'<'}</Button>
                    <Button variant="outlined" onClick={nextQuote}>{'>'}</Button>
                </div>
            </div>
        </div>
    )
}
