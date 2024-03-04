// import React, { useState } from 'react';
// import "./selectbtn.css"
// const SelectBtn = ({ options }) => {
//     const [showOptions, setShowOptions] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const toggleOptions = () => {
//         setShowOptions(!showOptions);
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setShowOptions(false);
//     };
//     return (
//         <>
//             <div className='SelectOption'>
//                 <button className='SelectBtn' onClick={toggleOptions}>Select Option</button>
//                 {showOptions && (
//                     <div>
//                         <ul>
//                             {options.map((option, index) => (
//                                 <li key={index} onClick={() => handleOptionClick(option)}>
//                                     {option}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {selectedOption && <p>Selected option: {selectedOption}</p>}
//             </div>
//         </>
//     )
// }

// export default SelectBtn

import React, { useState } from 'react';
import "./selectbtn.css"

const SelectBtn = ({ options }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setShowOptions(false);
    };

    return (
        <>
            <div className='SelectOption'>
                <select className='SelectBtn' onClick={toggleOptions} onChange={handleOptionChange} value={selectedOption || ''}>
                    <option value="" disabled hidden>Select Option</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                {/* {selectedOption && <p>{selectedOption}</p>} */}
            </div>
        </>
    )
}

export default SelectBtn;
