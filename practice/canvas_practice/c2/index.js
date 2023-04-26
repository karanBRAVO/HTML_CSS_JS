const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function chgDim() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
chgDim();

window.addEventListener('resize', chgDim);

let mousePos = {
    x: undefined,
    y: undefined
}
let startAngle = 0;
let endAngle = Math.PI * 2;
let particleArray = [];

class Particle {
    constructor() {
        this.x = mousePos.x;
        this.y = mousePos.y;
        this.radius = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.hue = 0;
        this.lineSize = 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.radius > 0.2) {
            this.radius -= 0.1;
        }
        this.hue += 10;
    }
    drawCircle() {
        ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, startAngle, endAngle);
        ctx.fill();
    }
    drawLine(startPosX, startPosY, endPosX, endPosY) {
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.lineWidth = this.lineSize;
        ctx.moveTo(startPosX, startPosY);
        ctx.lineTo(endPosX, endPosY);
        ctx.stroke();
    }
}

function createParticles(n) {
    for (let i = 0; i < n; i++) {
        particleArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].drawCircle();
        if (i < particleArray.length - 1) {
            let dx = particleArray[i + 1].x - particleArray[i].x;
            let dy = particleArray[i + 1].y - particleArray[i].y;
            let distance = Math.sqrt((dx * dx) + (dy * dy));
            if (distance < 100) {
                particleArray[i].drawLine(particleArray[i].x, particleArray[i].y, particleArray[i + 1].x, particleArray[i + 1].y);
            }
        }
        if (particleArray[i].radius < 0.3) {
            particleArray.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}
animate();

canvas.addEventListener('mousemove', (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    createParticles(50);
})
canvas.addEventListener('click', (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    createParticles(50);
})
