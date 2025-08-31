"use client";
import { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let stars: { x: number; y: number; z: number }[] = [];
    let width: number, height: number;

    // const init = () => {
    //   width = canvas.width = window.innerWidth;
    //   height = canvas.height = window.innerHeight;
    //   stars = Array.from({ length: 400 }, () => ({
    //     x: Math.random() * width,
    //     y: Math.random() * height,
    //     z: Math.random() * width,
    //   }));
    // };

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      stars = Array.from({ length: 400 }, () => ({
        // random từ -width/2 → +width/2 và -height/2 → +height/2
        x: Math.random() * width - width / 2,
        y: Math.random() * height,
        z: Math.random() * width,
      }));
    };

    const draw = () => {
      ctx.fillStyle = "#0d0c16";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "white";

      for (let star of stars) {
        star.z -= 0.2;
        if (star.z <= 0) star.z = width;

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / width) * 2;
          ctx.fillRect(px, py, size, size);
        }
      }
    };

    const loop = () => {
      draw();
      requestAnimationFrame(loop);
    };

    init();
    loop();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-20" />;
}
