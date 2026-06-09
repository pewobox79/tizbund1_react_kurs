//global approach
const root = document.getElementById("root")
const div = document.createElement("div") // key = 0
div.innerText = "hallo"
const div2 = document.createElement("div") // key = 0
div2.innerText ="hallo div 2"

function createDivElement(data){
//local approach

    data.forEach((item, index)=>{
        const div = document.createElement("div") // key = index
        div.innerText = item
        root.append(div)
    })

}

createDivElement([1,2,3,4])

div2.addEventListener("click", ()=>console.log("hallo"))