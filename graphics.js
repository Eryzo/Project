// Fill style for shapes
function fill(style) {
    ctx.fillStyle = style;
}

// Set background color, fills canvas
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}

// Stroke style for shapes 
function stroke(style) {
    ctx.strokeStyle = style;
}

// Draw a rectangle
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    }
}

// Draw ground color and size
function ground(x, y, color) {
    fill(color);
    rect(x, y, 800, 150, "fill");
}

// Draw text
function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y);
    } else if (mode === stroke) {
        ctx.strokeText(message, x, y);
    }
}

// Text font
function font(fontSetting) {
    ctx.font = fontSetting;
}

