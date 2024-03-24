function distanceTraveledInFeet(block) {
  const hq = 42;
  const distance = Math.abs(hq - block);
  return distance;
}

function distanceFromHqInFeet(block) {
  const hq = 42;
  const feetPerBlock = 264;
  const distance = Math.abs(block - hq) * feetPerBlock;
  return distance;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const distance = Math.abs(endBlock - startBlock) * feetPerBlock;
  return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
  const feetPerBlock = 264;
  const freeSampleDistance = 400;
  const miniChargeableDistance = 400;
  const maxChargeableDistance = 2000;
  const flatRateCharge = 25;
  const distance = Math.abs(endBlock - startBlock) * 0.02;
  let fareprice;
  if (distance <= freeSampleDistance) {
      fareprice = 0;
  } else if (distance <= maxChargeableDistance) {
      fareprice = (distance - freeSampleDistance) *0.02;
  } else if (distance > maxChargeableDistance && distance <= 2500) {
      fareprice = flatRateCharge;
  } else {
      fareprice = "cannot travel that far";
  }

   return fareprice;
]