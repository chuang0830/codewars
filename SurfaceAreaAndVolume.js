// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let volume = width * height * depth
    let area = (width * height + width * depth + height * depth)*2
    return [area, volume]
  }