import { AnimatePresence, motion } from "framer-motion";
import { IAccordionProps } from "../../../types/interface";
import styled from "styled-components";

export default function Accordion({
  desc,
  id,
  name,
  openedIndex,
  setOpenedIndex,
}: IAccordionProps) {
  const isOpen = id === openedIndex;

  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.3 },
      }}
    >
      <motion.header
        animate={{ color: isOpen ? "purple" : "" }}
        onClick={() => setOpenedIndex(isOpen ? null : id)}
      >
        <span>{name}</span>
        <motion.svg
          animate={{ rotateZ: isOpen ? -180 : 0 }}
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
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {desc.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled(motion.div)`
  border-bottom: 1px solid black;
  padding: 10px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    span {
      font-size: 25px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
