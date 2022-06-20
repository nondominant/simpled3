  function twoDigit(num){
    let s = '' + num;
    let str = '';
    if (s.length < 2) {
      str = '0' + s 
    } else {
      str = s
    }
    return str
  }

export async function getAllUsers(selectedDate) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  let d = ''
  try{
    if (!selectedDate){
      d = new Date();
    } else {
      d = selectedDate;
    }
  }catch(error) {
    return [{error: "error"}];
  }
  let formatedDate = String(d).split(' ');
  let f = formatedDate[3] + '-' + twoDigit(month.indexOf(formatedDate[1]) + 1) + '-' + twoDigit(formatedDate[2])
  console.log('DATE PASSED ', f)


  let response = ''
  await fetch(`http://localhost:3002/${f}`, {mode: 'cors'})
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return Promise.resolve(res)
      } else {
        return Promise.reject(new Error(res.statusText))
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log('request succeeded with JSON response ', data); 
      response = data;//get reference to external variable
    })
    .catch((err) => {
      console.log('request failed ', err);
    })
    return response;
}

