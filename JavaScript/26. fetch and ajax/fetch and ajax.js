var xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();


fetch(url)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (e) {
    console.log('error');
  });