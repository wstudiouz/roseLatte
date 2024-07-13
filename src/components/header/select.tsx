import { HeaderContext } from "@/context/headerContext";
import { COLORS } from "@/ts/Consts";
import React, { useContext, useEffect, useRef, useState } from "react";
// Icon component
const Icon = ({ isOpen, color }: any) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};


const CustomSelect = ({ placeHolder, options, onChange, align }: any) => {
    const { lang, openHeader } = useContext(HeaderContext)
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState<any>(lang);
    const inputRef = useRef<any>(null);

    useEffect(() => {
        const handler = (e: any) => {
            if (inputRef.current && !inputRef?.current?.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e: any) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        return selectedValue;
    };




    const onItemClick = (option: any) => {
        const newValue = option;
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option: any) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue === option;
    };



    const getOptions = () => {
        return options;
    };

    return (
        <div className="custom--dropdown-container" style={{ color: openHeader ? COLORS.BLACK : COLORS.WHITE }}>

            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className={`dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon isOpen={showMenu} color={openHeader ? COLORS.BLACK : COLORS.WHITE} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={`dropdown-menu alignment--${align || 'auto'}`}>

                        {
                            getOptions().map((option: any, ind: number) => (
                                <div onClick={() => onItemClick(option)} key={ind} className={`dropdown-item ${isSelected(option) && "selected"}`} >
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CustomSelect