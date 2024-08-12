const axios = require('axios')

//sync
axios.get('https://www.google.com')
    .then(function (response){
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    });


   
// arrow function
axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
   
    
// async 
async function fetchData() {
    try {
        const response = await axios.get('https://www.google.com');
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// asyn arrow function
const fetchData = async () => {
    try {
        const response = await axios.get('https://www.google.com');
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
