import { NextResponse } from 'next/server';

export async function GET() {
  // Return a bold, visible AX logo as SVG
  const logoSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Bold AX Logo Design -->
  <g>
    <!-- Letter A -->
    <path d="M4 32 L8 32 L9 28 L15 28 L16 32 L20 32 L14 8 L10 8 Z M10.5 24 L13.5 24 L12 18 Z" 
          fill="#ffffff" 
          stroke="#ffffff" 
          stroke-width="1"/>
    
    <!-- Letter X -->
    <path d="M22 8 L26 8 L29 15 L32 8 L36 8 L31 18 L36 32 L32 32 L29 25 L26 32 L22 32 L27 18 Z" 
          fill="#ffffff" 
          stroke="#ffffff" 
          stroke-width="1"/>
  </g>
</svg>`;

  return new NextResponse(logoSvg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}