import React from 'react'
import styled from 'styled-components'

const Switch = ({ isOn, handleToggle, onColor }) => {
  console.log(isOn)
  return (
    <SwitchContainer>
      <input
        // the double !! is to force the JS to inteprete the boolean as boolean
        // because it sometime intepretes it as a string
        checked={!!isOn}
        onChange={handleToggle}
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
      />
      <label
        style={{ background: isOn && onColor }}
        className='react-switch-label'
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </SwitchContainer>
  )
}

const SwitchContainer = styled.div`

  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
   
  }
  /* this is the toggle bar  */
  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
 margin-bottom:50%;
    cursor: pointer;
    width: 40px;
    height: 25px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
    color: red;
  }

  /* this is the circle */
  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    c
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;

  }
`

export default Switch
