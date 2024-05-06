import React, { useEffect } from 'react';


const ratingOptions = [
    { label: "標示清楚度", maxValue: 5 },
    { label: "圖片故事性", maxValue: 5 },
    { label: "挑戰度加分", maxValue: 2 },
  ];
  
const create_singleRateTemplate = () => {
    const rate = {};
    ratingOptions.forEach(e => { rate[e.label] = null })
    return rate
  }
  

const initiate_ratingStorage = () => {
  // Define idList and singleRateTemplate
  const idList = ['id1', 'id2', 'id3']; // Example array of ids
  
  useEffect(() => {
    // Check if rateStorage exists in local storage
    const rateStorage = JSON.parse(localStorage.getItem('rateStorage'));

    if (!rateStorage) {
      // Initialize rateTemplate object
      const initialRateStorage = create_rateStorageTemplate('current week', idList);

      // Store rateStorage in local storage
      localStorage.setItem('rateStorage', JSON.stringify(initialRateStorage));
    }
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
};

function create_rateStorageTemplate(week = 'current week', idList) {
    const singleRateTemplate = create_singleRateTemplate();

    const rateTemplate = {};
    idList.forEach(id => {
      rateTemplate[id] = { ...singleRateTemplate }; // Copy singleRateTemplate
    });

    // Create rateStorage with current week and rateTemplate
    const initialRateStorage = {}
    initialRateStorage[week]=rateTemplate;


    return initialRateStorage
}

export function updateRateStorage(data) {

  const idList = data.map(item => item.id);
  const currentWeek = data[0]['週次'];
  const rateStorage = create_rateStorageTemplate(currentWeek, idList)

  window.rateStorage[currentWeek] = rateStorage[currentWeek];
  window.currentWeek = currentWeek;

  localStorage.setItem('rateStorage', JSON.stringify(window.rateStorage));
}

export default create_rateStorageTemplate;
