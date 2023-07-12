'use client';

import React, { useEffect, useRef, useState } from 'react';

function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const dropdownRef = useRef(null);

  const onActionLanguage = () => {
    setOpen(!open);
    setLanguage(!language);
  };

  const onOpenDropdown = () => {
    setOpen(false);
  };

  const onClosenDropdown = () => {
    setOpen(true);
  };

  const onDropdownText = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef?.current?.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="flex items-center p-0 text-center select-none describe_language col-lg-1 col-md-2"
    >
      <div className="relative flex flex-col items-center md:mr-[8px] mr-0">
        <button type="button" onClick={onDropdownText}>
          <span
            className={`text-center header_language-text leadin-[24px] ${
              open ? 'text-[#999999]' : ''
            }`}
          >
            {language === true ? 'English' : 'Vietnamese'}
          </span>
        </button>
      </div>
      <div className="relative flex items-center">
        {open === true ? (
          <button
            aria-label="DropdownBottom"
            type="button"
            onClick={onOpenDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            aria-label="dropdown"
            type="button"
            onClick={onClosenDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        )}
        {open && (
          <button
            type="button"
            className="w-[110px] text-center text-white cursor-pointer rounded-md bg-slate-500 absolute bottom-[-120%] right-[0%] px-[6px] py-[4px]  "
            onClick={onActionLanguage}
          >
            <span className="hover:px-[5px] max-w-[100px] block  hover:bg-white hover:text-black duration-200 rounded-md ">
              {language === false ? 'English' : 'Vietnamese'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default LanguageSelect;
