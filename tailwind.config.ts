import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-ai-flow': 'var(--gradient-ai-flow)'
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-secondary': 'var(--glow-secondary)',
				'glow-neural': 'var(--glow-neural)',
				'shadow-premium': 'var(--shadow-premium)',
				'shadow-elevated': 'var(--shadow-elevated)'
			},
			spacing: {
				'section': 'var(--section-padding)',
				'content': 'var(--content-width)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'ai-flow': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'33%': { transform: 'translateY(-10px) translateX(5px)' },
					'66%': { transform: 'translateY(5px) translateX(-5px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(215 100% 65% / 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(215 100% 65% / 0.8)',
						transform: 'scale(1.05)'
					}
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'slide-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-40px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(40px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'ai-flow': {
					'0%': { 
						backgroundPosition: '0% 0%',
						transform: 'translateX(0%)'
					},
					'100%': { 
						backgroundPosition: '200% 0%',
						transform: 'translateX(0%)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in': 'fade-in 1s ease-out',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
				'ai-flow': 'ai-flow 6s linear infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
