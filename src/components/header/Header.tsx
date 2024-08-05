import { useScrollDirection } from "../../util/useScrollDirection";
import { menuList } from "../../constants";
import {
  Container,
  Dot,
  ItemContainer,
  Logo,
  MenuItem,
  MenuList,
} from "./headerStyles";
import { MouseEvent } from "react";
import { useDetectSection } from "../../util/useDetectSection";

export default function Header() {
  const isScrollDown = useScrollDirection();
  const currentSection = useDetectSection();

  const handleMenuClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href") ?? "";
    if (!id) return;

    const $target = document.querySelector(id);

    $target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Container
      animate={{
        scaleY: isScrollDown ? 0 : 1,
        transformOrigin: "top",
      }}
    >
      <Logo />
      <MenuList>
        {menuList.map((item) => (
          <ItemContainer key={item.id}>
            <MenuItem
              whileHover={{ y: -5 }}
              initial={{ y: 0 }}
              className={item.category}
            >
              <a
                onClick={handleMenuClick}
                href={`#${item.category}`}
              >{`< ${item.category} />`}</a>
            </MenuItem>
            {item.category === currentSection && <Dot></Dot>}
          </ItemContainer>
        ))}
      </MenuList>
    </Container>
  );
}
