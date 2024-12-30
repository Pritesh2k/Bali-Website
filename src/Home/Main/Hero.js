import React, { useEffect } from 'react';
import '../CSS/hero.css';

function Hero() {
    useEffect(() => {
        const h2Elements = document.querySelectorAll('.quad-BL h2');
        const positions = []; // Store positions of h2 elements to prevent overlap

        const h1 = document.querySelector('.quad-BL h1');
        const h1Rect = h1.getBoundingClientRect(); // Get the position of the h1 element

        h2Elements.forEach((h2, index) => {
            // Randomize size between 1.5rem and 3.5rem
            const randomSize = Math.random() * (3.5 - 1.5) + 1.5;
            h2.style.fontSize = `${randomSize}rem`;

            // Randomize delay for animation (between 0s and 2s)
            const randomDelay = Math.random() * 2;
            h2.style.animationDelay = `${randomDelay}s`;

            let randomY = Math.random() * 15 + 5; // Random Y position between 5rem and 20rem (close to h1)
            let randomX = Math.random() * 30 - 15; // Random value between -15% and 15% from h1's left
            let overlap = true;

            // Check for overlap with other h2 elements and the h1 element
            while (overlap) {
                overlap = false;

                // Check if the new position overlaps with previous h2 elements
                for (let i = 0; i < positions.length; i++) {
                    const [prevX, prevY] = positions[i];
                    const distance = Math.sqrt(Math.pow(randomX - prevX, 2) + Math.pow(randomY - prevY, 2));
                    if (distance < 6) { // Ensure 6rem minimum distance between h2 elements
                        overlap = true;
                        randomY = Math.random() * 15 + 5; // Adjust Y to avoid overlap
                        randomX = Math.random() * 30 - 15; // Adjust X to avoid overlap
                        break;
                    }
                }

                // Check if the new position overlaps with the h1 element
                if (
                    randomX >= h1Rect.left && randomX <= h1Rect.right &&
                    randomY >= h1Rect.top && randomY <= h1Rect.bottom
                ) {
                    overlap = true;
                    randomY = Math.random() * 20 + 1; // Adjust Y to avoid overlap with h1
                    randomX = Math.random() * 30 - 15; // Adjust X to avoid overlap with h1
                }
            }

            // Set the position of the h2
            h2.style.top = `${randomY}rem`;
            h2.style.left = `calc(20rem + ${randomX}%)`; // Adjust to make sure they are near h1 but not overlapping

            // Store the position of the current h2 to check against the next one
            positions.push([randomX, randomY]);
        });
    }, []);

    return (
        <div className='hero-container'>
            <div className='quad-BL'>
                <h1>Welcome!</h1>
                <text>Portfolio 2<span>.</span>0</text>
                <h2>Hola</h2>
                <h2>你好</h2>
                <h2>Bonjour</h2>
                <h2>नमस्ते</h2>
                <h2>привет</h2>
                <h2>مرحبًا</h2>
                <div className='made-by'>ℳ𝒶𝒹ℯ 𝒷𝓎 𝒫𝓇𝒾𝓉ℯ𝓈𝒽</div>
                <div class="container">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
                <a href="https://master.d1miri9ffluv3o.amplifyapp.com/" target="_blank">Visit Portfolio 1.0</a>
            </div>
        </div>
    );
}

export default Hero;
