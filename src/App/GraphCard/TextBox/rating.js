
const ratingOptions = [
    { label: "標示清楚度", maxValue: 5 },
    { label: "圖片故事性", maxValue: 5 },
    { label: "挑戰度加分", maxValue: 2 },
  ];

const optionMaxValues = {};
ratingOptions.forEach(e => { optionMaxValues[e.label] = e.maxValue })
  
const create_workRatingTemplate = () => {
    return {
      id: null,
      rating: ratingOptions.map((e) => { return { label: e.label, value: null } })
    }
  }
  
export {optionMaxValues, ratingOptions, create_workRatingTemplate};