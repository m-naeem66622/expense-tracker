// // SplitButton.js

// import React, { useState } from "react";
// // import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// const SplitButton = ({ primaryAction, secondaryActions }) => {
//   const [open, setOpen] = useState(false);

//   const handlePrimaryActionClick = () => {
//     primaryAction.onClick();
//     setOpen(false);
//   };

//   const handleSecondaryActionClick = (action) => {
//     action.onClick();
//     setOpen(false);
//   };

//   const toggleMenu = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   return (
//     <div className="split-button">
//       <button className="primary-action" onClick={handlePrimaryActionClick}>
//         {primaryAction.label}
//       </button>
//       <button className="toggle-button" onClick={toggleMenu}>
//         {/* <ArrowDropDownIcon /> */}h
//           </button>

//       {open && (
//         <ul className="secondary-actions">
//           {secondaryActions.map((action) => (
//             <li key={action.label}>
//               <button onClick={() => handleSecondaryActionClick(action)}>
//                 {action.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SplitButton;

// SplitButton.js

// import React, { useState } from "react";
// // import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// const SplitButton = ({ primaryAction, secondaryActions }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handlePrimaryActionClick = () => {
//     if (selectedOption) {
//       selectedOption.onClick();
//     } else {
//       primaryAction.onClick();
//     }
//     setOpen(false);
//   };

//   const handleSecondaryActionClick = (action) => {
//     action.onClick();
//     setSelectedOption(action);
//     setOpen(false);
//   };

//   const toggleMenu = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   return (
//     <div className="split-button">
//       <button className="primary-action" onClick={handlePrimaryActionClick}>
//         {selectedOption ? selectedOption.label : primaryAction.label}
//       </button>
//       <button className="toggle-button" onClick={toggleMenu}>
//         {/* <ArrowDropDownIcon /> */}H
//       </button>
//       {open && (
//         <ul className="secondary-actions">
//           {secondaryActions.map((action) => (
//             <li key={action.label}>
//               <button id="" onClick={() => handleSecondaryActionClick(action)}>
//                 {action.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SplitButton;

// SplitButton.js

import React, { useState } from "react";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const SplitButton = ({ handleSelectOption }) => {
  const options = ["Income", "Expense"];
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
    handleSelectOption(option.toLowerCase());
  };

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="split-button">
      <button type="submit" className="primary-action">
        {selectedOption}
      </button>
      <button type="button" className="toggle-button" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
      </button>
      {open && (
        <ul className="secondary-actions">
          {options.map((option) => (
            <li key={option} onClick={() => handleButtonClick(option)}>
              <button type="button">{option}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SplitButton;
