// in Node.js
const DcentWebConnector = require('dcent-web-connector')


async function fetchData() {  
  var result
  try{
    result = await DcentWebConnector.info()
    // If you want to close the popup window.
    DcentWebConnector.popupWindowClose()
  }catch(e){
    result = e
  }
  console.log(result);
}

fetchData();
  