// input teeth stuff
const input_teeth_display = document.getElementById("input_teeth_display");
const input_teeth_input = document.getElementById("input_teeth_input");
var input_teeth = 0;

// output teeth stuff
const output_teeth_display = document.getElementById("output_teeth_display");
const output_teeth_input = document.getElementById("output_teeth_input");
var output_teeth = 0;

// input rpm stuff
const input_rpm_display = document.getElementById("input_rpm_display");
const input_rpm_input = document.getElementById("input_rpm_input");
var input_rpm = 0.0;

// output rpm
const output_rpm_display = document.getElementById("output_rpm_display");
const output_rpm_input = document.getElementById("set_rpm");
var output_rpm = 0.0;

// calculate rpm button
const calculate = document.getElementById("calculate_rpm");
var ratio = 0.0;

// wheel diameter
const wheel_diameter_display = document.getElementById("wheel_diameter_display");
const wheel_diameter_input = document.getElementById("input_wheel_diameter");
var wheel_diameter = 0.0;
var wheel_circumference = 0.0;

// linear speed
const linear_speed_display = document.getElementById("linear_speed_display");
const calculate_speed = document.getElementById("calculate_speed");
var speed = 0.0;


input_teeth_input.onclick = function()
{
    input_teeth = parseInt(prompt("enter input teeth:"));
    input_teeth_display.innerHTML = `Input teeth: ${input_teeth}`;
}

output_teeth_input.onclick = function()
{
    output_teeth = parseInt(prompt("enter output teeth:"));
    output_teeth_display.innerHTML = `Output teeth: ${output_teeth}`;
}

input_rpm_input.onclick = function()
{
    input_rpm = parseFloat(prompt("enter input rpm:"));
    input_rpm_display.innerHTML = `Input rpm: ${input_rpm}`;
}

calculate.onclick = function()
{
    if(input_teeth != 0 && output_teeth != 0 && input_rpm != 0.0)
    {
        ratio = input_teeth / output_teeth;
        output_rpm = ratio * input_rpm;
        // display a rounded number for the rpm, but don't change the actual value
        output_rpm_display.innerHTML = `Output rpm: ${Math.round(output_rpm * 100) / 100}`;
    }

    else
    {
        alert("enter all values before calculating ya bum");
    }
}

output_rpm_input.onclick = function()
{
    output_rpm = parseFloat(prompt("enter output rpm:"));
    output_rpm_display.innerHTML = `Output rpm: ${output_rpm}`;
}

wheel_diameter_input.onclick = function()
{
    wheel_diameter = parseFloat(prompt("enter wheel diameter (inches)"));
    // gets wheel circumference (pi * diameter)
    wheel_circumference = Math.PI * wheel_diameter;

    wheel_diameter_display.innerHTML = `Wheel diameter: ${wheel_diameter} inches`
}

calculate_speed.onclick = function()
{
    if(output_rpm != 0 && wheel_circumference != 0)
    {
        // speed = rpm x circumference
        speed = (output_rpm * wheel_circumference) / 60;
        linear_speed_display.innerHTML = `Speed: ${Math.round(speed * 100) / 100} inches/second`
    }
}
