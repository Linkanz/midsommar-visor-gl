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
					foreground: 'hsl(var(--primary-foreground))'
				},
				midsummer: {
					yellow: 'hsl(var(--midsummer-yellow))',
					blue: 'hsl(var(--midsummer-blue))',
					green: 'hsl(var(--midsummer-green))',
					light: 'hsl(var(--midsummer-light))',
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
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fly-around': {
					'0%': { transform: 'translate(0vw, 20vh) rotate(0deg)' },
					'15%': { transform: 'translate(20vw, 10vh) rotate(45deg)' },
					'30%': { transform: 'translate(80vw, 30vh) rotate(120deg)' },
					'45%': { transform: 'translate(60vw, 60vh) rotate(200deg)' },
					'60%': { transform: 'translate(10vw, 80vh) rotate(270deg)' },
					'75%': { transform: 'translate(90vw, 50vh) rotate(320deg)' },
					'85%': { transform: 'translate(30vw, 15vh) rotate(380deg)' },
					'100%': { transform: 'translate(0vw, 20vh) rotate(360deg)' }
				},
				'fly-zigzag': {
					'0%': { transform: 'translate(90vw, 15vh) rotate(0deg)' },
					'20%': { transform: 'translate(70vw, 40vh) rotate(90deg)' },
					'40%': { transform: 'translate(20vw, 25vh) rotate(180deg)' },
					'60%': { transform: 'translate(50vw, 70vh) rotate(270deg)' },
					'80%': { transform: 'translate(85vw, 45vh) rotate(320deg)' },
					'100%': { transform: 'translate(90vw, 15vh) rotate(360deg)' }
				},
				'fly-diagonal': {
					'0%': { transform: 'translate(10vw, 80vh) rotate(0deg)' },
					'25%': { transform: 'translate(80vw, 20vh) rotate(90deg)' },
					'50%': { transform: 'translate(15vw, 40vh) rotate(180deg)' },
					'75%': { transform: 'translate(70vw, 75vh) rotate(270deg)' },
					'100%': { transform: 'translate(10vw, 80vh) rotate(360deg)' }
				},
				'fly-circular': {
					'0%': { transform: 'translate(50vw, 50vh) rotate(0deg)' },
					'25%': { transform: 'translate(70vw, 30vh) rotate(90deg)' },
					'50%': { transform: 'translate(50vw, 20vh) rotate(180deg)' },
					'75%': { transform: 'translate(30vw, 30vh) rotate(270deg)' },
					'100%': { transform: 'translate(50vw, 50vh) rotate(360deg)' }
				},
				'fly-random': {
					'0%': { transform: 'translate(20vw, 90vh) rotate(0deg)' },
					'12%': { transform: 'translate(60vw, 10vh) rotate(60deg)' },
					'25%': { transform: 'translate(10vw, 30vh) rotate(120deg)' },
					'40%': { transform: 'translate(85vw, 60vh) rotate(200deg)' },
					'55%': { transform: 'translate(40vw, 85vh) rotate(250deg)' },
					'70%': { transform: 'translate(75vw, 25vh) rotate(300deg)' },
					'85%': { transform: 'translate(15vw, 55vh) rotate(340deg)' },
					'100%': { transform: 'translate(20vw, 90vh) rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fly-around': 'fly-around 15s ease-in-out infinite',
				'fly-zigzag': 'fly-zigzag 12s ease-in-out infinite',
				'fly-diagonal': 'fly-diagonal 18s ease-in-out infinite',
				'fly-circular': 'fly-circular 10s ease-in-out infinite',
				'fly-random': 'fly-random 20s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
