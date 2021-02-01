async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  
  // 🔥 start here: write code to loop through the rides
  
 function fullName(firstName, lastName){
   return `${firstName} ${lastName}`
 }

 function numberPassenger(number){
  if (number==1) {
    return `${number} passenger`
  } else {
    return `${number} passengers`
  }
 }

 function levelOfService(legs, purple, passengers){
  if (legs >1){
    return `Noober Pool`
  } else if (purple == true){
    return `Noober Purple`
  } else if (passengers>3){
    return `Noober XL`
  } else {
    return `Noober X`
  }
 }


  for(let i=0; i<json.length; i++){
    ridei = json[i]
  let outputElement = document.querySelector('.rides')

  
  if(ridei[0].numberOfPassengers ==1 && ridei.length > 1){
    outputElement.insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService(ridei.length,ridei[0].purpleRequested,ridei[0].numberOfPassengers)}</span>
  </h1>
  `)
    
    for(let n=0; n<json[i].length; n++){
      ride = ridei[n]

        outputElement.insertAdjacentHTML('beforeend', `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${fullName(ride.passengerDetails.first,ride.passengerDetails.last)}</h2>
              <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${numberPassenger(ride.numberOfPassengers)} 
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride.pickupLocation.address}</p>
              <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride.dropoffLocation.address}</p>
              <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        `)
      }

  } else if (ridei[0].purpleRequested == true){
    outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ridei.length,ridei[0].purpleRequested,ridei[0].numberOfPassengers)}</span>
      </h1>

      <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${fullName(ridei[0].passengerDetails.first,ridei[0].passengerDetails.last)}</h2>
            <p class="font-bold text-gray-600">${ridei[0].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-600 text-white p-2">
            ${numberPassenger(ridei[0].numberOfPassengers)} 
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ridei[0].pickupLocation.address}</p>
            <p>${ridei[0].pickupLocation.city}, ${ridei[0].pickupLocation.state} ${ridei[0].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ridei[0].dropoffLocation.address}</p>
            <p>${ridei[0].dropoffLocation.city}, ${ridei[0].dropoffLocation.state} ${ridei[0].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
    `) 
  } else if (ridei[0].numberOfPassengers >3) { 
    outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ridei.length,ridei[0].purpleRequested,ridei[0].numberOfPassengers)}</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${fullName(ridei[0].passengerDetails.first,ridei[0].passengerDetails.last)}</h2>
            <p class="font-bold text-gray-600">${ridei[0].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberPassenger(ridei[0].numberOfPassengers)} 
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ridei[0].pickupLocation.address}</p>
            <p>${ridei[0].pickupLocation.city}, ${ridei[0].pickupLocation.state} ${ridei[0].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ridei[0].dropoffLocation.address}</p>
            <p>${ridei[0].dropoffLocation.city}, ${ridei[0].dropoffLocation.state} ${ridei[0].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
    `) 

   } else {
    outputElement.insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService(ridei.length,ridei[0].purpleRequested,ridei[0].numberOfPassengers)}</span>
    </h1>
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${fullName(ridei[0].passengerDetails.first,ridei[0].passengerDetails.last)}</h2>
          <p class="font-bold text-gray-600">${ridei[0].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${numberPassenger(ridei[0].numberOfPassengers)} 
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ridei[0].pickupLocation.address}</p>
          <p>${ridei[0].pickupLocation.city}, ${ridei[0].pickupLocation.state} ${ridei[0].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ridei[0].dropoffLocation.address}</p>
          <p>${ridei[0].dropoffLocation.city}, ${ridei[0].dropoffLocation.state} ${ridei[0].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
      `) 
   
  }
}


}
window.addEventListener('DOMContentLoaded', pageLoaded)
 