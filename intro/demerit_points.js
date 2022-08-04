
// Speed Limit = 70
// each 5 above limit get 1 point
// above 12 points -> License Suspended

const speedLimit = 70;
const kmPerPoint = 5;
const pointsToBeSuspended = 12;

function checkSpeed(speed) {

    if (speed <= speedLimit) return 'ok'

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    return (points === 0) ? 'ok' :
        (points < pointsToBeSuspended) ? 'points: ' + String(points) :
        'License Suspended';
}

console.log(checkSpeed(128));