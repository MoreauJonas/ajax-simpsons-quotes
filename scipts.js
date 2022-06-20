

   
    function fetchSimpsonsJSON() {
        const simpsonId = 1;
        const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  
        axios.get(url)
          .then(response => response.data[0]) 
          .then(simpson => {
            console.log('data decoded from JSON:', simpson);
  
         
            const simpsonHtml = `
            <h3>${simpson.character}</h3>
            <img src="${simpson.image}" />
            <p>${simpson.quote}</p>
            `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
          });
      }
  
      fetchSimpsonsJSON();
      document.getElementById("myBtn").addEventListener("click", function() {
      fetchSimpsonsJSON();
      });
    
          