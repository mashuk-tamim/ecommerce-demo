/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "cdn.dummyjson.com",
			},
		],
		domains: ["dummyjson.com"],
	},
};

export default nextConfig;
