import React from 'react';
import ModalDemo from './ModalDemo/ModalDemo';
import Button from '../Shared/FormComponents/Button';

const Framework = () => {
    console.log('test');
    function handleClick(){
        console.log('clicked');
    }
    return(
        <>
            <h1>Framwork</h1>
            <div className="row">
                <div className="col-12 col-md-4">
                    <label htmlFor="textbox" className="label">Text Box</label>
                    <input type="text" className="form-control" id="textbox" name="textbox" />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="selectBox" className="label">Select Box</label>
                    <select className="form-control">
                        <option value="">--Select Option--</option>
                        <option value="1">Option 1</option>
                        <option value="1">Option 1</option>
                    </select>
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="checkbox" className="label-block">Checkbox</label>
                    <div className="check">
                        <input type="checkbox" name="check1" id="check1" />
                        <label htmlFor="check1">Check 1</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="radio1" id="radio1" />
                        <label htmlFor="radio1">Radio 1</label>
                    </div>
                </div>
            </div>
            <ModalDemo />
            
            <p><Button className="primary" id="demoButton1" name="demoButton1" handleClick={handleClick} disabled={false} value="Demo Button" /></p>

            <p><Button className="primary" id="demoButton2" name="demoButton2" handleClick={handleClick} disabled={false} value="Demo Button" isIconOnly icon="laptop-code" /></p>
            <p><Button className="primary" id="demoButton2" name="demoButton2" handleClick={handleClick} disabled={false} value="Demo Button" iconPlace="prefix" icon="laptop-code" /></p>
            <p><Button className="primary" id="demoButton2" name="demoButton2" handleClick={handleClick} disabled={false} value="Demo Button" icon="laptop-code" /></p>
        </>
    );
}

export default Framework;