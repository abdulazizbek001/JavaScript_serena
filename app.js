const elRedBox = document.querySelector('.red-box');
const elBlueBox = document.querySelector('.blue-box');
const elBtn = document.querySelector('.btn');
const elBtn2 = document.querySelector('.btn2');

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {
    setInterval(() => {
        elRedBox.style.cssText = `
            position: relative;
            left: 120px;
        `
        elBlueBox.style.cssText = `
            position: relative;
            right: 112px;
        `
    }, 100);

    setInterval(() => {
        elBlueBox.style.cssText = `
            position: relative;
            right: 0;
        `
        elRedBox.style.cssText = `
            position: relative;
            left: 0;
        `
    }, 200);
});

// ============================= BTN END ============================= //