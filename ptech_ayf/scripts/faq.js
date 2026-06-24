const options = document.querySelectorAll(".options-topic")
const faqs = document.querySelectorAll(".section")
var active_faq = "festival"

// function for updating the faqs page to show the correct faq depending on what is selected
function updateFaq() {

    // iterate through every div containing the different categories of faq
    faqs.forEach(section => {
        // checks if the faq div contains the class for the active faq, as determined below
        // e.g. if active_faq = "festival", this will check if the div contains the faqs-festival class
        var section_active = section.classList.contains(`faqs-${active_faq}`)

        // if it does contain the correct class, set display to show
        if(section_active) {
            section.style.display = "block"
        }

        // if it does not contain the class, set display to none
        else {
            section.style.display = "none"
        }
    })
}

// update when the page is loaded so only festival faqs show
updateFaq()

options.forEach(button => {
    button.addEventListener("click", function() {

        // if there is more than one element with the class ".selected",
        if(document.querySelectorAll(".active").length > 0) {
        // loop through every .options-topic, 
            options.forEach(active => {
                // check if it has the .selected class,
                if(active.classList.contains("active")) {
                    // and if it does, remove it
                    active.classList.remove("active")
                }
            })
        }
        button.classList.add("active")

        // set the active faq to whatever the most recent button pressed
        active_faq = button.id
        updateFaq()
    })
})
