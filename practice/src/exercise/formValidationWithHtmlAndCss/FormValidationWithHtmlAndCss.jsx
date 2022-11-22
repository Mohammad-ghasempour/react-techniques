import React from 'react';
import FormInputs from './FormInputs';

const FormValidationWithHtmlAndCss = () => {
    return (
        <div className='fullPage'>
            <form>
            <FormInputs placeholder="Name"/>
            <FormInputs placeholder="Family"/>
            <FormInputs placeholder="your email address"/>
            <FormInputs placeholder="your password"/>
            <input/>
            </form>
        </div>
    );
}

export default FormValidationWithHtmlAndCss;
