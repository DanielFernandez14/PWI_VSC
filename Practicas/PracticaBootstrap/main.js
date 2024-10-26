const app = document.getElementById("typewriter");
const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});
typewriter
    .typeString("El centro del País.")
    .pauseFor(500)
    .start();