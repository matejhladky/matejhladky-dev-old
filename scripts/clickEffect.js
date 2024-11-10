let svg;

function initClickSpark(targetElement = document.body) {
  const root = document.documentElement;

  function setupSpark() {
    let template = `
      <style>
        svg {
          pointer-events: none;
          position: fixed;
          top: -100%;
          left: -100%;
          rotate: -20deg;
          stroke: var(--click-spark-color, currentcolor);
        }

        line {
          stroke-dasharray: 30;
          transform-origin: center;
        }
      </style>
      <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        ${Array.from(
          { length: 8 },
          () => `<line x1="50" y1="30" x2="50" y2="4"/>`
        ).join("")}
      </svg>
    `;

    let container = document.createElement('div');
    container.innerHTML = template;
    svg = container.querySelector("svg");
    document.body.appendChild(container);
  }

  function setSparkPosition(e) {
    let rect = root.getBoundingClientRect();

    let scrollX = window.scrollX || window.pageXOffset;
    let scrollY = window.scrollY || window.pageYOffset;

    svg.style.left = e.clientX - rect.left - scrollX - svg.clientWidth / 2 + "px";
    svg.style.top = e.clientY - rect.top - scrollY - svg.clientHeight / 2 + "px";
  }

  function animateSpark() {
    let sparks = [...svg.children];
    let size = parseInt(sparks[0].getAttribute("y1"));
    let offset = size / 2 + "px";

    let keyframes = (i) => {
      let deg = `calc(${i} * (360deg / ${sparks.length}))`;

      return [
        {
          strokeDashoffset: size * 3,
          transform: `rotate(${deg}) translateY(${offset})`
        },
        {
          strokeDashoffset: size,
          transform: `rotate(${deg}) translateY(0)`
        }
      ];
    };

    let options = {
      duration: 660,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards"
    };

    sparks.forEach((spark, i) => spark.animate(keyframes(i), options));
  }

  setupSpark();

  targetElement.addEventListener("click", (e) => {
    setSparkPosition(e);
    animateSpark();
  });
}

// Initialize the click spark effect on the body tag
initClickSpark();
