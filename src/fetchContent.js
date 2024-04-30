//function to fetch content from contentEntry + week + "/index.json"
//then set the content to the response data
export default function fetchContent(week, contentEntry, setContent) {
    fetch(contentEntry + week + "/index.json")
      .then(response => response.json())
      .then(data => {
        setContent(data);
        console.log(data);
      });
  }