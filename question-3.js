let fs = require('fs')

// Create new directory LOGS and throw error if already exists
fs.mkdir("./Logs", function(err){
    if(err)
    console.log(err)
    else{
        console.log("New Directory Succesfully Created.")
    }
})

//method to create 10 files and output them to console
const createFiles = () =>{
    for(let i = 0; i<10;i++)
    {
        fs.writeFile(`log${i}.txt`,"Content of my File", function(err){
            if(err)
            console.log("File already exist",err)
            else
            console.log(`log${i}.txt`)
        })
    }
}

//method to check if file exist and delete them in that case
const deleteFiles = () =>{
    for(let i = 0;i<10;i++)
    {
        fs.unlink(`log${i}.txt`,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`delete files...log${i}.txt`)
            }
        })
    }
}

createFiles()
deleteFiles()


