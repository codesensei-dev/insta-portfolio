import { useEffect, useRef, useCallback } from 'react';

export default function Particles({
  quantity = 70,
  color = '255, 255, 255',
  staticity = 50,
  ease = 50,
  size = 1.5,
}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);
  const dprRef = useRef(1);

  const initParticle = useCallback((width, height) => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x,
      y,
      translateX: 0,
      translateY: 0,
      size: Math.random() * size + 0.5,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.4 + 0.1).toFixed(2)),
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      magnetism: 0.1 + Math.random() * 4,
    };
  }, [size]);

  const drawParticle = useCallback((p, ctx, col) => {
    ctx.beginPath();
    ctx.arc(p.x + p.translateX, p.y + p.translateY, p.size, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${col}, ${p.alpha})`;
    ctx.fill();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;
    dprRef.current = window.devicePixelRatio || 1;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Re-init particles on resize
      particlesRef.current = [];
      for (let i = 0; i < quantity; i++) {
        particlesRef.current.push(initParticle(window.innerWidth, window.innerHeight));
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = window.innerWidth;
      const h = window.innerHeight;
      const mouse = mouseRef.current;

      particlesRef.current.forEach((p) => {
        // Fade in
        if (p.alpha < p.targetAlpha) {
          p.alpha = Math.min(p.alpha + 0.008, p.targetAlpha);
        }

        // Base drift
        p.x += p.dx;
        p.y += p.dy;

        // Mouse magnetism
        const dx = mouse.x - (p.x + p.translateX);
        const dy = mouse.y - (p.y + p.translateY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const magnetRadius = 150;

        if (dist < magnetRadius) {
          const force = (magnetRadius - dist) / magnetRadius;
          p.translateX += (dx * force * p.magnetism) / (staticity * 2);
          p.translateY += (dy * force * p.magnetism) / (staticity * 2);
        }

        // Ease back to original offset
        p.translateX *= 1 - ease / 1000;
        p.translateY *= 1 - ease / 1000;

        // Edge wrapping with alpha fade
        const edgeFade = 40;
        const finalX = p.x + p.translateX;
        const finalY = p.y + p.translateY;

        // Fade near edges
        let edgeAlpha = 1;
        if (finalX < edgeFade) edgeAlpha = Math.min(edgeAlpha, finalX / edgeFade);
        if (finalX > w - edgeFade) edgeAlpha = Math.min(edgeAlpha, (w - finalX) / edgeFade);
        if (finalY < edgeFade) edgeAlpha = Math.min(edgeAlpha, finalY / edgeFade);
        if (finalY > h - edgeFade) edgeAlpha = Math.min(edgeAlpha, (h - finalY) / edgeFade);
        p.alpha = Math.min(p.alpha, p.targetAlpha * Math.max(0, edgeAlpha));

        // Respawn if out of bounds
        if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          const newP = initParticle(w, h);
          Object.assign(p, newP);
        }

        drawParticle(p, ctx, color);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [quantity, color, staticity, ease, initParticle, drawParticle]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
