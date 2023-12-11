// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let hQ = 42;
if(distance > 42){
    return distance - hQ
} else{
    return hQ - distance
}
}
function distanceFromHqInFeet(distance){
    let hQ = 42;
    let feet = 264;
    if(distance >42){
        return ((distance-hQ)*feet);
    } else {
        return((hQ-distance)*feet);
    }
}
function distanceTravelledInFeet(start,end){
    let distance;
    let feet = 264;
    if(start < end){
        distance = end - start;
        return distance * feet
    } else{
        distance = start-end;
        return distance * feet
    }

    }
function calculatesFarePrice(start,destination){
    let cents = 2;
    let feet = 264;
    let distance = Math.abs(destination - start)* feet
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if(distance > 2000 && distance <=2500){
        return 25;
    }else if(distance > 2500){
        return `cannot travel that far`
    }
}