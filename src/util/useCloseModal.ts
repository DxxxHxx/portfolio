import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCloseModal = (isShow: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isShow) return;

    const handleKeydown = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape") return;

      navigate("/");
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isShow, navigate]);
};
