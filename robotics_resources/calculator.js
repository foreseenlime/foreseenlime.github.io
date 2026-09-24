// div elements for iteration
const input_gears_div = document.getElementById("input_gears");
const output_gears_div = document.getElementById("output_gears");
const input_rpm_div = document.getElementById("input_rpm");
const wheel_size_div = document.getElementById("wheel_size");

// button elements
const input_gears_buttons = input_gears_div.querySelectorAll("button");
const output_gears_buttons = output_gears_div.querySelectorAll("button");
const input_rpm_buttons = input_rpm_div.querySelectorAll("button");
const wheel_size_buttons = wheel_size_div.querySelectorAll("button");

// display elements
const ratio_display = document.getElementById("ratio_display");
const rpm_display = document.getElementById("rpm_display");
const speed_display = document.getElementById("speed_display");

// button variables
var input_teeth;
var output_teeth;

var input_rpm;
var wheel_size;

// calculated variables
var ratio;
var output_rpm;
var lin_speed;

const trunc = 100;
var circum;

function truncate(num) {
    return (Math.round(num * trunc)) / trunc;
}

input_gears_buttons.forEach((item) => {
    item.addEventListener("click", () => {
        input_teeth = parseInt(item.innerHTML);
    });
});

output_gears_buttons.forEach((item) => {
    item.addEventListener("click", () => {
        output_teeth = parseInt(item.innerHTML);
    });
});

input_rpm_buttons.forEach((item) => {
    item.addEventListener("click", () => {
        input_rpm = parseInt(item.innerHTML);
    });
});

wheel_size_buttons.forEach((item) => {
    item.addEventListener("click", () => {
        wheel_size = parseFloat(item.innerHTML);
    });
});

document.addEventListener("click", () => {
    if(input_teeth != undefined && output_teeth != undefined && input_rpm != undefined) {
        // gear ratio
        ratio = truncate(input_teeth / output_teeth);
        ratio_display.innerHTML = `1 : ${ratio}`;

        // rp
        output_rpm = truncate(input_rpm * ratio);
        rpm_display.innerHTML = `${output_rpm} rpm`;

        if(wheel_size != undefined) {
            circum = Math.PI * wheel_size;
            lin_speed = truncate((output_rpm * circum) / 60);
            speed_display.innerHTML = `${lin_speed} inches/s`;
        }
    }
});