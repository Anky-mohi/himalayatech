import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showLanguageButton, setShowLanguageButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set Portuguese as the default language when the component mounts
    if (i18n.language !== 'pt') {
      i18n.changeLanguage('pt');
    }
  }, [i18n]);

  useEffect(() => {
    // Show the language button after a delay when the component mounts
    const timer = setTimeout(() => {
      setShowLanguageButton(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide the button after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 90000); // 10 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {isVisible && (
        <>
          <button
            className={`language-buttonr ${showLanguageButton ? 'visible' : ''}`}
            onClick={() => changeLanguage('en')}
          ></button>
          <button
            className={`language-button ${showLanguageButton ? 'visible' : ''}`}
            onClick={() => changeLanguage('pt')}
          ></button>
        </>
      )}
    </>
  );
};

export default LanguageSwitcher;
