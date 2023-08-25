import React, { useRef, useEffect, useState } from "react";

const Ribbons = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.strokeStyle = "black";
        context.lineWidth = 2.5;

        canvas.width = window.innerWidth * 0.7;
        canvas.height = window.innerHeight * 0.7;
        contextRef.current = context;

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(0, 150);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(0, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 * 1.5, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *2, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2 +20, canvas.height);
        context.lineTo(canvas.width/6 *2.2, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *1.2, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2 -10, canvas.height);
        context.lineTo(canvas.width/6 *2, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 * 3, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *4, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *4.2, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *4.3, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *4.5, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *5, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width/6 *6, 0);
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height);
        context.lineTo(canvas.width, 300);
        context.stroke();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="ribbons"
        />
    )
}

export default Ribbons;