import React, { useEffect, useRef } from 'react';

const ScrollAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 240;

  // Pad the number with zeros
  const currentFrame = (index: number) => (
    `/frames/frame_${index.toString().padStart(5, '0')}.png`
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Preload images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          // Draw first frame immediately
          render();
        }
      };
      images.push(img);
    }

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      // Prevent division by zero and handle cases where page isn't scrollable
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      const img = images[frameIndex];
      if (!img || !img.complete) return; // If image is not loaded yet

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const handleScrollOrResize = () => {
      requestAnimationFrame(render);
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen object-contain pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ScrollAnimation;
