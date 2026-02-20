function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Reservation Confirmed! (Demo Mode)");
});

document.getElementById("enquiryForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Enquiry Submitted! (Demo Mode)");
});