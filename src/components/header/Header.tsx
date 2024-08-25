import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useScrollDirection } from "../../util/useScrollDirection";
import { useState, MouseEvent } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [direction, isTop] = useScrollDirection();

  const handleSidebarToggle = () => setIsOpen((prev) => !prev);

  const handleNavigateSection = (e: MouseEvent<HTMLLIElement>) => {
    // 현재 위치가 홈일 때.
    const $target = document.querySelector(
      `#${e.currentTarget.innerText.toLowerCase()}`
    );
    $target?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileMenu = (e: MouseEvent<HTMLLIElement>) => {
    handleSidebarToggle();
    handleNavigateSection(e);
  };
  return (
    <HeaderContainer
      animate={{
        top: direction === "down" ? -100 : 0,
        backgroundColor: isTop ? "transparent" : "white",
        transition: { duration: 0.3 },
      }}
    >
      <HeaderLogo whileHover={{ scale: 1.1 }}>DxxxHxx</HeaderLogo>
      <HeaderMenu>
        <HeaderMenuItem
          onClick={handleNavigateSection}
          whileHover={{ scale: 1.1 }}
        >
          Home
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={handleNavigateSection}
          whileHover={{ scale: 1.1 }}
        >
          About
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={handleNavigateSection}
          whileHover={{ scale: 1.1 }}
        >
          Projects
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={handleNavigateSection}
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </HeaderMenuItem>
      </HeaderMenu>

      <MobileMenuBtn onClick={handleSidebarToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </MobileMenuBtn>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu animate={{ top: 0 }} exit={{ top: -500 }}>
            <svg
              onClick={handleSidebarToggle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ cursor: "pointer" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <MobileMenuItem
              onClick={handleMobileMenu}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </MobileMenuItem>
            <MobileMenuItem
              onClick={handleMobileMenu}
              whileHover={{ scale: 1.1 }}
            >
              About
            </MobileMenuItem>
            <MobileMenuItem
              onClick={handleMobileMenu}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </MobileMenuItem>
            <MobileMenuItem
              onClick={handleMobileMenu}
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </MobileMenuItem>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(motion.header)`
  width: 100%;
  height: 90px;
  padding: 0px 20px;
  position: fixed;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

const HeaderLogo = styled(motion.h1)`
  font-size: 30px;
`;

const HeaderMenu = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 18px;
  gap: 60px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderMenuItem = styled(motion.li)`
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

const MobileMenuBtn = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 45px;
    height: 45px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.ul)`
  position: fixed;
  width: 100%;
  height: 80vh;
  backdrop-filter: blur(12px);
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  font-size: 22px;

  svg {
    width: 45px;
    height: 45px;
    position: fixed;
    top: 23px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuItem = styled(motion.li)`
  cursor: pointer;
  font-size: 25px;
  padding: 5px;
`;
