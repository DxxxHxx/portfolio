import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useScrollDirection } from "../../util/useScrollDirection";
import { useState, MouseEvent } from "react";
import { menuList } from "../../constants";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isTop, scrollDirection } = useScrollDirection();

  const handleSidebarToggle = () => setIsOpen((prev) => !prev);

  const handleNavigateSection = (e: MouseEvent<HTMLLIElement>) => {
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
        top: scrollDirection === "down" ? -100 : 0,
        backgroundColor: isTop ? "transparent" : "white",
        transition: { duration: 0.3 },
      }}
      $isTop={isTop}
    >
      <HeaderLogo to={"/"}>DxxxHxx</HeaderLogo>

      <HeaderMenu>
        {menuList.map((menu) => (
          <HeaderMenuItem
            key={menu.id}
            onClick={handleNavigateSection}
            whileHover={{ scale: 1.1 }}
          >
            {menu.category}
          </HeaderMenuItem>
        ))}
      </HeaderMenu>

      <MobileMenuBtn
        aria-label="open-menu-button"
        onClick={handleSidebarToggle}
      >
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
            {menuList.map((menu) => (
              <MobileMenuItem
                key={menu.id}
                onClick={handleMobileMenu}
                whileHover={{ scale: 1.1 }}
              >
                {menu.category}
              </MobileMenuItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(motion.header)<{ $isTop: boolean }>`
  width: 100%;
  height: 90px;
  padding: 0px 20px;
  position: fixed;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  color: "black";
  box-shadow: ${(p) =>
    p.$isTop
      ? ""
      : "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"};
`;

const HeaderLogo = styled(Link)`
  font-size: 30px;
`;

const HeaderMenu = styled.ul`
  width: fit-content;
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
    color: "black";
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
