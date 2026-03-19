// input teeth stuff
const input_teeth_display = document.getElementById("input-teeth-display");
const input_teeth_input = document.getElementById("input-teeth-input");
var input_teeth = 0;

// output teeth stuff
const output_teeth_display = document.getElementById("output-teeth-display");
const output_teeth_input = document.getElementById("output-teeth-input");
var output_teeth = 0;

// input rpm stuff
const input_rpm_display = document.getElementById("input-rpm-display");
const input_rpm_input = document.getElementById("input-rpm-input");
var input_rpm = 0.0;

// output rpm
const output_rpm_display = document.getElementById("output-rpm-display");
var output_rpm = 0.0;

// calculate button
const calculate = document.getElementById("calculate");
var ratio = 0.0;


input_teeth_input.onclick = function()
{
    input_teeth = parseInt(prompt("enter input teeth:", "12"));
    input_teeth_display.innerHTML = `Input teeth: ${input_teeth}`;
}

output_teeth_input.onclick = function()
{
    output_teeth = parseInt(prompt("enter output teeth:", "12"));
    output_teeth_display.innerHTML = `Output teeth: ${output_teeth}`;
}

input_rpm_input.onclick = function()
{
    input_rpm = parseFloat(prompt("enter input rpm:", "200"));
    input_rpm_display.innerHTML = `Input rpm: ${input_rpm}`;
}

calculate.onclick = function()
{
    if(input_teeth != 0 && output_teeth != 0 && input_rpm != 0.0)
    {
        ratio = input_teeth / output_teeth;
        output_rpm = ratio * input_rpm;
        output_rpm_display.innerHTML = `Output rpm: ${output_rpm}`;
    }

    else
    {
        alert("enter all values before calculating ya bum");
    }
}
