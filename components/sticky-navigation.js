"use client";
import { useState, useEffect } from "react";
import NavigationBarHomeSelected from "./navigation-bar-home-selected";
import NavigationBarAboutSelected from "./navigation-bar-about-selected";
import NavigationBarContactSelected from "./navigation-bar-contact-selected";
import NavigationBarDevSelected from "./navigation-bar-dev-selected";
import NavigationBarArtsSelected from "./navigation-bar-arts-selected";
import NavigationBarModelSelected from "./navigation-bar-model-selected";

const StickyNavigation = ({ currentPage = "home" }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let headerElement = document.getElementById('header');

      if (!headerElement) {
        const elements = document.querySelectorAll('b');
        for (let element of elements) {
          if (element.textContent.includes('TOM EFFERNELLI')) {
            headerElement = element.closest('div[id="header"]') || element.closest('div');
            break;
          }
        }
      }

      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        const isVisible = rect.bottom > 0;
        setIsHeaderVisible(isVisible);
      } else {
        setIsHeaderVisible(true);
      }
    };

    const checkForHeader = () => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        handleScroll();
      } else {
        setTimeout(checkForHeader, 100);
      }
    };

    const timeoutId = setTimeout(checkForHeader, 50);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  if (isHeaderVisible) {
    return null;
  }

  switch (currentPage) {
    case "home":
      return <NavigationBarHomeSelected className="fixed top-0 left-0 w-full z-50" />;
    case "about":
      return <NavigationBarAboutSelected className="fixed top-0 left-0 w-full z-50" />;
    case "contact":
      return <NavigationBarContactSelected className="fixed top-0 left-0 w-full z-50" />;
    case "dev":
      return <NavigationBarDevSelected className="fixed top-0 left-0 w-full z-50" />;
    case "arts":
      return <NavigationBarArtsSelected className="fixed top-0 left-0 w-full z-50" />;
    case "model":
      return <NavigationBarModelSelected className="fixed top-0 left-0 w-full z-50" />;
    default:
      return <NavigationBarHomeSelected className="fixed top-0 left-0 w-full z-50" />;
  }
};

export default StickyNavigation;
