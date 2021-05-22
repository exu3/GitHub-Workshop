const fs = require('fs')
const path = require('path')

interface ThePeople{

    
    name: string,
    githubUser: string,
    randomQuote: string
    
    

}

export default async (req, res) => {
    
    let data:ThePeople[]=[];
    fs.readdir(path.join(__dirname,"..", "..", "..", "..", "people"),async (err, files)=>{
       files.forEach(file => {
           fs.readFile(path.join(__dirname,"..", "..", "..", "..", "people", file), "utf8", (err,content)=>{
               console.log(content)
               data.push(JSON.parse(content))
               
           })
        
       });
       
       await res.status(200).json(data);
       
    } )
    console.log(data)
    
};