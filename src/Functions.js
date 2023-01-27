const stars = (rating) => {
    const starsArr = [];
    let counter = rating;
    while (counter > 0) {
      starsArr.push(counter);
      counter--;
    }
    return starsArr;
  };

  export {stars}; 