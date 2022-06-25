import React, { useState } from 'react'
import PropTypes from 'prop-types'
function ColorForm(props) {
    const [form, setForm] = useState ({
        inputHex: '',
        resultRgb: '',
        background: '',
    });
   
    const handleOnChange = evt => {
        evt.preventDefault();
        if (evt.target.value.charAt(0) === '#' && evt.target.value.length >= 8) { 
                setForm(prevForm => ({...prevForm, inputHex: evt.target.value}));
                const aRgb = form.inputHex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
                .substring(1).match(/.{2}/g)
                .map(x => parseInt(x, 16))
                setForm(prevForm => ({...prevForm, resultRgb: 'rgb('+aRgb+')'}));
                setForm(prevForm => ({...prevForm, background: 'rgb('+aRgb+')'}));
                document.body.style.background = `${form.background}`;
        } else {
            
            return setForm(prevForm => ({...prevForm, resultRgb: 'Ошибка!'}));
               
           }
    };


    return (

    <>
       
        <form>
            <input id='inputHex' name='inputHex' value={form.inputhex} onChange={handleOnChange}></input>
            <input id='resultRgb' name='resultRgb' value={form.resultRgb} disabled></input>
        </form>
    </>
  )
}

ColorForm.propTypes = {}

export default ColorForm
