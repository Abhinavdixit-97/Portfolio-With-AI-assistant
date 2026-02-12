/** @type {import('next').NextConfig} */
const isStaticExport =
  process.env.GITHUB_ACTIONS === 'true' || process.env.EXPORT_STATIC === 'true'
const repoName = 'Portfolio-With-AI-assistant'
const basePath = isStaticExport ? `/${repoName}` : ''

const nextConfig = {
  images: {
    unoptimized: isStaticExport,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: `${basePath}/_next/static/files/`,
          outputPath: 'static/files/',
        },
      },
    })
    return config
  },
}

if (isStaticExport) {
  nextConfig.output = 'export'
  nextConfig.trailingSlash = true
  nextConfig.basePath = basePath
  nextConfig.assetPrefix = basePath
}

module.exports = nextConfig
