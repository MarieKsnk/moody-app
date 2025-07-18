import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;
  let lastFrame = performance.now();
  let mousePosition = { x: 0, y: 0 };
  let dots: any[] = [];
  let timeoutID: number;
  let idle = false;

  class Dot {
    index: number;
    anglespeed: number;
    x = 0;
    y = 0;
    scale: number;
    range: number;
    limit: number;
    lockX!: number;
    lockY!: number;
    angleX!: number;
    angleY!: number;
    element: HTMLElement;

    constructor(index = 0) {
      this.index = index;
      this.anglespeed = 0.05;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.element = document.createElement("span");
      gsap.set(this.element, { scale: this.scale });
      cursorRef.current!.appendChild(this.element);
    }
    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }
    draw(delta: number) {
      if (!idle || this.index <= sineDots) {
        gsap.set(this.element, { x: this.x, y: this.y });
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        gsap.set(this.element, { x: this.x, y: this.y });
      }
    }
  }

  useEffect(() => {
    const container = cursorRef.current!;
    for (let i = 0; i < amount; i++) {
      dots.push(new Dot(i));
    }

    function startIdleTimer() {
      timeoutID = window.setTimeout(goInactive, idleTimeout);
      idle = false;
    }
    function resetIdleTimer() {
      clearTimeout(timeoutID);
      startIdleTimer();
    }
    function goInactive() {
      idle = true;
      dots.forEach(dot => dot.lock());
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX - width / 2;
      mousePosition.y = e.clientY - width / 2;
      resetIdleTimer();
    };
    window.addEventListener("mousemove", onMouseMove);
    startIdleTimer();

    function render(now: number) {
      const delta = now - lastFrame;
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, idx) => {
        const nextDot = dots[idx + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || idx <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
      lastFrame = now;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeoutID);
      dots = [];
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div id="cursor" ref={cursorRef} className="Cursor" style={{ filter: "url(#goo)" }} />
    </>
  );
};
