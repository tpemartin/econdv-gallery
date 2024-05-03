//function to fetch content from contentEntry + week + "/index.json"
//then set the content to the response data
export default function fetchContent(week, contentEntry) {
    const content = fetch(contentEntry + week + "/index.json")
      .then(response => response.json());
      window.currentWeek = week;
      // .then(data => {
      //   setContent(data);
      //   console.log(data);
      // });

    return content;
  }