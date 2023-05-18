//cloning the data
let user = {
    name : 'Rohan'
}

let clone = {}

for(key in user){
    clone[key] = user[key]
}

clone.name = "Ronny"

