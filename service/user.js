import fs from 'fs';
export const getUserData=()=>{
    const jsonData = fs.readFileSync('C:\\Users\\07adi\\OneDrive\\Desktop\\expressApp\\service\\util\\users.json')
    console.log(jsonData)
    return JSON.parse(jsonData)
}
export const saveUserData =(jsonData)=>{
      const stringifyData = JSON.stringify(jsonData)
      fs.writeFileSync('C:\\Users\\07adi\\OneDrive\\Desktop\\expressApp\\service\\util\\users.json', stringifyData)
}