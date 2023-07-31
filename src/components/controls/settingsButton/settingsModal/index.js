export const backgroundChange = (darkMode) => {
  if (darkMode) {
    document.body.classList.add("bg-dark");
    document.body.classList.remove("bg-light");
  } else {
    document.body.classList.add("bg-light");
    document.body.classList.remove("bg-dark");
  }
};

export const darkModeClasses = (boxElements, scoreElements, shadowElements, modalElements, darkMode) => {
  if (boxElements && scoreElements && shadowElements && modalElements) {
    boxElements.forEach((boxElement) => {
      if (darkMode) {
        boxElement.classList.add("dark");
        boxElement.classList.remove("light");
      } else {
        boxElement.classList.add("light");
        boxElement.classList.remove("dark");
      }
    });
    scoreElements.forEach((scoreElement) => {
      if (darkMode) {
        scoreElement.classList.add("dark");
        scoreElement.classList.remove("light");
      } else {
        scoreElement.classList.add("light");
        scoreElement.classList.remove("dark");
      }
    });
    shadowElements.forEach((shadowElement) => {
      if (darkMode) {
        shadowElement.classList.add("no-shadow");
        shadowElement.classList.remove("shadow");
      } else {
        shadowElement.classList.add("shadow");
        shadowElement.classList.remove("no-shadow");
      }
    });
    modalElements.forEach((modal) => {
      if (darkMode) {
        modal.classList.add("modal-dark");
        modal.classList.remove("modal-light");
      } else {
        modal.classList.add("modal-light");
        modal.classList.remove("modal-dark");
      }
    });
  }
};

export const styling = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
