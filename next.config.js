
/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Basic security hardening
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

// A relaxed but useful CSP for demo (no unsafe-eval; allow inline styles via hash if needed)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  media-src 'self' https:;
  connect-src 'self' https://*.supabase.co https://*.supabase.io;
  frame-ancestors 'self';
  base-uri 'self';
`;

module.exports = {
  output: 'export',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, '') },
        ],
      },
    ];
  },
};
