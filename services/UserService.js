export async function getAllUsers(selectedDate) {
  try{
    let d = ''
   //const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    if (!selectedDate){
      d = new Date();
    } else {
      d = selectedDate;
    }
const data = [
  { 
    name: "louis",
  date: `${d}`,
  log: [
    {machine: "workshop", time: 1, type: "start"},
    {machine: "cbw", time: 2, type: "start"},
    {machine: "cbw", time: 3, type: "end"},
    {machine: "fax folder", time: 4, type: "start"},
    {machine: "ironer 3", time: 6, type: "start"},
    {machine: "workshop", time: 8, type: "end"},
  ]
},
  { 
    name: "tony",
  date: `${d}`,
  log: [
    {machine: "workshop", time: 6, type: "start"},
    {machine: "cbw", time: 10, type: "start"},
    {machine: "cbw", time: 12, type: "end"},
    {machine: "fax folder", time: 13, type: "start"},
    {machine: "ironer 3", time: 14, type: "start"},
    {machine: "workshop", time: 16, type: "end"},
  ]
},
  { 
    name: "peter",
  date: `${d}`,
  log: [
    {machine: "workshop", time: 4, type: "start"},
    {machine: "cbw", time: 6, type: "start"},
    {machine: "cbw", time: 9, type: "end"},
    {machine: "fax folder", time: 10, type: "start"},
    {machine: "ironer 3", time: 11, type: "start"},
    {machine: "workshop", time: 12, type: "end"},
  ]
}
]
    return data;
  }catch(error) {
    return [];
  }
}

