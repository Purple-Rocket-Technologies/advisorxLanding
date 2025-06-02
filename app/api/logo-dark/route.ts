import { NextResponse } from 'next/server';

export async function GET() {
  // Return the dark AX logo as SVG
  const logoSvg = `<svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- AX Logo - Dark Version -->
  <g transform="translate(8, 15)">
    <!-- Letter A -->
    <path d="M5 70 L15 40 L20 40 L30 70 L25 70 L23 63 L12 63 L10 70 Z M14 55 L21 55 L17.5 47 Z" 
          fill="#1f2937" 
          stroke="#1f2937" 
          stroke-width="0.5"/>
    
    <!-- Letter X with interlocking design -->
    <path d="M35 40 L42 40 L50 52 L58 40 L65 40 L54 56 L66 70 L59 70 L50 58 L41 70 L34 70 L46 56 Z" 
          fill="#1f2937" 
          stroke="#1f2937" 
          stroke-width="0.5"/>
    
    <!-- Interlocking connection -->
    <path d="M25 55 L35 55 L35 58 L25 58 Z" 
          fill="#1f2937"/>
  </g>
</svg>`;

  return new NextResponse(logoSvg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}