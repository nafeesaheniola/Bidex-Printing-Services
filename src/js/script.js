function openNav() {
  document.getElementById("sideBar").style.width = "100%";
  document.getElementById("sideNav").style.width = "75%";
}
/*Close navigation*/
function exitNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideNav").style.width = "0";
}


// for contact whatsapp


  document.getElementById('whatsappButton').addEventListener('click', () => {
    const phoneNumber = '+2347083105587'; // Replace with your number
    const message = encodeURIComponent('Hello,i would like to....');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank'); // Opens in a new tab
  });

  // // for map location

  // document.addEventListener("DOMContentLoaded", () => {
  //   const mapElement = document.getElementById("map");

  //   // Your company location (latitude and longitude)
  //   const companyLocation = { lat: 6.536642, lng: 3.368346 };

  //   // Initialize the map
  //   const map = new google.maps.Map(mapElement, {
  //     center: companyLocation,
  //     zoom: 14,
  //   });

  //   // Add a marker
  //   new google.maps.Marker({
  //     position: companyLocation,
  //     map: map,
  //     title: "Our Company Location",
  //   });
  // });


