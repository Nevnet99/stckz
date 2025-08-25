/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Custom dark mode colors for better readability
				dark: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				},
				accent: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
				warning: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
			},
			fontFamily: {
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#e2e8f0',
						'[class~="lead"]': {
							color: '#cbd5e1',
						},
						a: {
							color: '#60a5fa',
							'&:hover': {
								color: '#93c5fd',
							},
						},
						strong: {
							color: '#f8fafc',
						},
						'ol > li::marker': {
							color: '#94a3b8',
						},
						'ul > li::marker': {
							color: '#94a3b8',
						},
						hr: {
							borderColor: '#475569',
						},
						blockquote: {
							color: '#94a3b8',
							borderLeftColor: '#60a5fa',
						},
						h1: {
							color: '#f8fafc',
						},
						h2: {
							color: '#f8fafc',
						},
						h3: {
							color: '#f8fafc',
						},
						h4: {
							color: '#f8fafc',
						},
						'figure figcaption': {
							color: '#94a3b8',
						},
						code: {
							color: '#fbbf24',
							backgroundColor: '#1e293b',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
						pre: {
							color: '#e2e8f0',
							backgroundColor: '#1e293b',
							border: '1px solid #475569',
						},
						thead: {
							borderBottomColor: '#475569',
						},
						'tbody tr': {
							borderBottomColor: '#475569',
						},
					},
				},
			},
		},
	},
	daisyui: {
		themes: ['night'],
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography'),],
}
