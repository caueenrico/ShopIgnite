/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'files.stripe.com' //aqui é para que ele renderize a imagem da api
    ]
  },
}

module.exports = nextConfig
