
  export const generateNoteLocation = () => {
    return getFretNumber(5, 71);
  }

  function getFretNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }