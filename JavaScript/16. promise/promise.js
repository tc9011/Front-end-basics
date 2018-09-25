const ajaxPromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://tc9011.com');
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(JSON.parse(xhr.responseText));
      }
    };
  });
};

ajaxPromise
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });




const fs = require('fs');
const getData = (fileName, type) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

getData('./file.txt', 'sample')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

