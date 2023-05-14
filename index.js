function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newimage(url, left + w*100, bottom+h*100)
        }
    }
}

function newimage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newimage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}


let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newimage('assets/green-character.gif', 100, 100)
newimage('assets/tree.png', 200, 300)
newimage('assets/pillar.png', 350, 100)
newimage('assets/pine-tree.png', 450, 200)
newimage('assets/crate.png', 150, 200)
newimage('assets/well.png', 500, 425)




newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)