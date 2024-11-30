/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['i.ibb.co', 'glukofin.pl'],
  },
  trailingSlash: true,
}

module.exports = nextConfig