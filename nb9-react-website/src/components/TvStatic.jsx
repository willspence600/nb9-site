import { useEffect, useRef } from 'react';

const MAX_WIDTH = 1280;
const MAX_HEIGHT = 720;

export default function TvStatic({ className = '', opacity = 0.7 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    const sizeRef = { width: 640, height: 360 };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);

      sizeRef.width = Math.min(
        Math.max(1, Math.floor(rect.width * scale)),
        MAX_WIDTH,
      );
      sizeRef.height = Math.min(
        Math.max(1, Math.floor(rect.height * scale)),
        MAX_HEIGHT,
      );

      canvas.width = sizeRef.width;
      canvas.height = sizeRef.height;
    };

    resize();

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId;

    const render = () => {
      const { width, height } = sizeRef;
      const imageData = ctx.createImageData(width, height);
      const buffer = imageData.data;

      for (let i = 0; i < buffer.length; i += 4) {
        const value = (Math.random() * 255) | 0;
        buffer[i] = value;
        buffer[i + 1] = value;
        buffer[i + 2] = value;
        buffer[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      frameId = requestAnimationFrame(render);
    };

    const start = () => {
      cancelAnimationFrame(frameId);
      render();
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      ctx.clearRect(0, 0, sizeRef.width, sizeRef.height);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    if (motionQuery.matches) {
      stop();
    } else {
      start();
    }

    const onMotionChange = (event) => {
      if (event.matches) stop();
      else start();
    };

    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ opacity }}
      className={`tv-static pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
