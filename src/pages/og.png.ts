import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';

const companies = [
  'Capital One', 'Zelle', 'Fannie Mae', 'HUD', 'DC Metro',
  'NYC MTA', 'BART', 'LA Metro', 'Boston MBTA', 'SF Muni',
  'PATCO', 'Lockheed Martin', 'Canadian Tire', 'Tubi',
  'Amazon', 'Apple', 'Google',
];

function square() {
  return {
    type: 'div' as const,
    props: {
      style: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(255,255,255,0.25)',
        flexShrink: 0,
        borderRadius: 1,
      },
    },
  };
}

function companySpan(name: string) {
  return {
    type: 'span' as const,
    props: {
      style: { whiteSpace: 'nowrap' as const },
      children: name,
    },
  };
}

export const GET: APIRoute = async () => {
  const [fontRegular, fontBold] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff').then(r => r.arrayBuffer()),
    fetch('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff').then(r => r.arrayBuffer()),
  ]);

  const companyChildren: any[] = [];
  companies.forEach((name, i) => {
    if (i > 0) companyChildren.push(square());
    companyChildren.push(companySpan(name));
  });

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000',
          fontFamily: 'Inter',
        },
        children: [
          // Row 1: Name
          {
            type: 'div',
            props: {
              style: {
                height: 80,
                display: 'flex',
                alignItems: 'center',
                padding: '0 44px',
                fontSize: 40,
                fontWeight: 700,
                color: '#fff',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                flexShrink: 0,
              },
              children: 'MICHAEL VINCENT',
            },
          },
          // Row 2: Software Engineer
          {
            type: 'div',
            props: {
              style: {
                height: 60,
                display: 'flex',
                alignItems: 'center',
                padding: '0 44px',
                fontSize: 40,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.4)',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                flexShrink: 0,
              },
              children: 'Software Engineer',
            },
          },
          // Row 3: Companies
          {
            type: 'div',
            props: {
              style: {
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap' as const,
                alignItems: 'center',
                alignContent: 'center',
                gap: 12,
                padding: '0 44px',
                fontSize: 32,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.4)',
              },
              children: companyChildren,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' as const },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' as const },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
