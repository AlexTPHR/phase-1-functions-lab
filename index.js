// Code your solution in this file!
function distanceFromHqInBlocks(currentStreet){
    return Math.abs(currentStreet -42)
}
function distanceFromHqInFeet(currentStreet){
    return distanceFromHqInBlocks(currentStreet) * 264
}
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet

function distanceTravelledInFeet(start, end){
    if (start < end ){
        return ((end-start) * 264)
    } 
    else {
        return ((start-end)* 264)
}
}
function calculatesFarePrice (start, end){
    const distanceInFeet = distanceTravelledInFeet(start, end)
    if (distanceInFeet <= 400){
    return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000 ){
        return 0.02 * (distanceInFeet - 400);
    }
    else if (distanceInFeet > 2000 && distanceInFeet <=2500){
        return 25
    }
    if (distanceInFeet > 2500)
    return 'cannot travel that far'
}