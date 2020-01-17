/**STICKY NAVBAR**/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    stickyClass();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get header section
var home = document.getElementById('home-nav');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyClass() {
    if (window.pageYOffset >= home.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

/**ACTIVE CLASS**/
window.addEventListener('DOMContentLoaded', () => {
    const options = {
        // 0.25 = The callback is fired when 25% of the element is visible
        // We can add more values to the array, like 0.25, 0.75 or 1.0
        threshold: [0.25],
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            console.log(id);
            if (entry.intersectionRatio > 0.25) {
                document
                    .querySelector(`nav li a[href="#${id}"]`)
                    .parentElement.classList.add('active');
            } else {
                document
                    .querySelector(`nav li a[href="#${id}"]`)
                    .parentElement.classList.remove('active');
            }
        });
    }, options);

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
});
