import { useScrollDirection } from "../../util/useScrollDirection";
import { menuList } from "../../constants";
import { Container, Logo, MenuItem, MenuList } from "./headerStyles";

export default function Header() {
  const isScrollDown = useScrollDirection();
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
          <MenuItem key={item.id}>{`< ${item.category} />`}</MenuItem>
        ))}
      </MenuList>
    </Container>
  );
}
