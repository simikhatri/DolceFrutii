import React, { useState } from 'react';
import "./selectbtn.css"
const SelectBtn = ({ options }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };
    return (
        <>
            <div className='SelectOption'>
                <button className='SelectBtn' onClick={toggleOptions}>Select Option</button>
                {showOptions && (
                    <div>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index} onClick={() => handleOptionClick(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {selectedOption && <p>Selected option: {selectedOption}</p>}
            </div>
        </>
    )
}

export default SelectBtn
