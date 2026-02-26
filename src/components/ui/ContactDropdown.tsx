'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

type DropdownOption = {
  label: string;
  value: string;
};

interface ContactDropdownProps {
  id: string;
  name?: string;
  placeholder: string;
  options: DropdownOption[];
  defaultValue?: string;
  className?: string;
}

export default function ContactDropdown({
  id,
  name,
  placeholder,
  options,
  defaultValue = '',
  className = '',
}: ContactDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const listboxId = `${id}-listbox`;

  return (
    <div ref={wrapperRef} className={`contact-dropdown ${className}`}>
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        className="contact-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={selectedOption ? 'text-[#2A3324]/92' : 'text-[#2A3324]/65'}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ArrowIcon
          direction="down"
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <input type="hidden" name={name ?? id} value={selectedValue} />

      <div
        id={listboxId}
        role="listbox"
        aria-labelledby={id}
        className={`contact-dropdown-menu ${isOpen ? 'contact-dropdown-menu-open' : ''}`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="option"
            aria-selected={selectedValue === option.value}
            className={`contact-dropdown-option ${
              selectedValue === option.value ? 'contact-dropdown-option-selected' : ''
            }`}
            onClick={() => {
              setSelectedValue(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
