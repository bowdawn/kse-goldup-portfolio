// Function to update SVG dimensions and circle positions
export function updateSVG() {
  // Get the SVG element
  const svg = document.querySelector("#layout-header");

  // Get the current viewport width and height
  const viewportWidth =
    document.querySelector(" .kse-layout-section-prototype")?.clientWidth ||
    window.innerWidth;

  // Set the new viewBox values based on the current viewport size
  const viewBoxWidth = viewportWidth;

  // Update the viewBox attribute of the SVG element
  // @ts-ignore
  svg?.setAttribute("viewBox", `0 0 ${viewBoxWidth} 80`);

  // Update the position of circle-3
  const circle3 = document.querySelector("#layout-header #circle-3");
  const circle3x = viewBoxWidth - 48;
  // @ts-ignore
  circle3?.setAttribute("cx", `${circle3x}px`);

  // Update the position of circle-4
  const circle4 = document.querySelector("#layout-header #circle-4");
  const circle4x = viewBoxWidth - 81;
  // @ts-ignore
  circle4?.setAttribute("cx", `${circle4x}px`);
}

// Call updateSVG() initially to set the initial SVG dimensions and circle positions
updateSVG();

// Add event listener to the window object that triggers updateSVG() on screen resize
window.addEventListener("resize", updateSVG);
