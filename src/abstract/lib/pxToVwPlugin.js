// plugins/tailwind-sc-prefix-plugin.js
import plugin from "tailwindcss/plugin"

export default plugin(function ({ matchUtilities, theme }) {
	// ========================================
	// 1. Размеры элементов (Width/Height)
	// ========================================
	const sizeUtilities = {
		"sc-w": "width",
		"sc-h": "height",
		"sc-min-w": "minWidth",
		"sc-min-h": "minHeight",
		"sc-max-w": "maxWidth",
		"sc-max-h": "maxHeight",
	}

	Object.entries(sizeUtilities).forEach(([utility, property]) => {
		matchUtilities(
			{
				[utility]: (value) => ({
					[property]: `calc(${value} * var(--scale-factor))`,
				}),
			},
			{
				values: theme("spacing"),
				supportsNegativeValues: false,
			},
		)
	})

	// ========================================
	// 2. Отступы (Padding)
	// ========================================
	const paddingUtilities = {
		"sc-p": "padding",
		"sc-pt": "paddingTop",
		"sc-pr": "paddingRight",
		"sc-pb": "paddingBottom",
		"sc-pl": "paddingLeft",
		"sc-px": ["paddingLeft", "paddingRight"],
		"sc-py": ["paddingTop", "paddingBottom"],
	}

	Object.entries(paddingUtilities).forEach(([utility, properties]) => {
		matchUtilities(
			{
				[utility]: (value) => {
					const propsArray = Array.isArray(properties)
						? properties
						: [properties]
					return propsArray.reduce((result, prop) => {
						result[prop] = `calc(${value} * var(--scale-factor))`
						return result
					}, {})
				},
			},
			{
				values: theme("spacing"),
				supportsNegativeValues: false,
			},
		)
	})

	// ========================================
	// 3. Внешние отступы (Margin)
	// ========================================
	const marginUtilities = {
		"sc-m": "margin",
		"sc-mt": "marginTop",
		"sc-mr": "marginRight",
		"sc-mb": "marginBottom",
		"sc-ml": "marginLeft",
		"sc-mx": ["marginLeft", "marginRight"],
		"sc-my": ["marginTop", "marginBottom"],
	}

	Object.entries(marginUtilities).forEach(([utility, properties]) => {
		matchUtilities(
			{
				[utility]: (value) => {
					const propsArray = Array.isArray(properties)
						? properties
						: [properties]
					return propsArray.reduce((result, prop) => {
						result[prop] = `calc(${value} * var(--scale-factor))`
						return result
					}, {})
				},
			},
			{
				values: theme("spacing"),
				supportsNegativeValues: true,
			},
		)
	})

	// ========================================
	// 4. Позиционирование (Position)
	// ========================================
	const positionUtilities = {
		"sc-top": "top",
		"sc-right": "right",
		"sc-bottom": "bottom",
		"sc-left": "left",
		"sc-inset": ["top", "right", "bottom", "left"],
		"sc-inset-x": ["left", "right"],
		"sc-inset-y": ["top", "bottom"],
	}

	Object.entries(positionUtilities).forEach(([utility, properties]) => {
		matchUtilities(
			{
				[utility]: (value) => {
					const propsArray = Array.isArray(properties)
						? properties
						: [properties]
					return propsArray.reduce((result, prop) => {
						result[prop] = `calc(${value} * var(--scale-factor))`
						return result
					}, {})
				},
			},
			{
				values: theme("spacing"),
				supportsNegativeValues: true,
			},
		)
	})

	// ========================================
	// 5. Текст (Typography)
	// ========================================
	matchUtilities(
		{
			"sc-text": (value) => ({
				fontSize: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-leading": (value) => ({
				lineHeight:
					value === "none" ? value : `calc(${value} * var(--scale-factor))`,
			}),
			"sc-tracking": (value) => ({
				letterSpacing: `calc(${value} * var(--scale-factor))`,
			}),
		},
		{
			values: {
				...theme("fontSize"),
				...theme("lineHeight"),
				...theme("letterSpacing"),
			},
			supportsNegativeValues: false,
		},
	)

	// ========================================
	// 6. Границы (Borders)
	// ========================================
	matchUtilities(
		{
			"sc-border": (value) => ({
				borderWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-t": (value) => ({
				borderTopWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-r": (value) => ({
				borderRightWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-b": (value) => ({
				borderBottomWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-l": (value) => ({
				borderLeftWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-x": (value) => ({
				borderLeftWidth: `calc(${value} * var(--scale-factor))`,
				borderRightWidth: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-border-y": (value) => ({
				borderTopWidth: `calc(${value} * var(--scale-factor))`,
				borderBottomWidth: `calc(${value} * var(--scale-factor))`,
			}),
		},
		{
			values: theme("borderWidth"),
			supportsNegativeValues: false,
		},
	)

	// ========================================
	// 9. Тени (Box Shadow) - НОВЫЙ РАЗДЕЛ
	// ========================================
	matchUtilities(
		{
			"sc-shadow": (value) => {
				if (value === "none") return { boxShadow: "none" }

				// Обрабатываем каждый слой тени отдельно
				const processShadow = (shadow) => {
					return shadow
						.replace(/(-?\d*\.?\d+)px/g, (match, num) => {
							return `calc(${num}px * var(--scale-factor))`
						})
						.replace(/(\d*\.?\d+)rem/g, (match, num) => {
							return `calc(${num}rem * var(--scale-factor))`
						})
				}

				const scaledValue = value
					.split(",")
					.map((shadow) => processShadow(shadow.trim()))
					.join(", ")

				return { boxShadow: scaledValue }
			},
		},
		{
			values: theme("boxShadow"),
			type: ["shadow"],
		},
	)

	// // ========================================
	// // 7. Скругления (Border Radius)
	// // ========================================
	// matchUtilities(
	// 	{
	// 		"sc-rounded": (value) => ({
	// 			borderRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-t": (value) => ({
	// 			borderTopLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 			borderTopRightRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-r": (value) => ({
	// 			borderTopRightRadius: `calc(${value} * var(--scale-factor))`,
	// 			borderBottomRightRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-b": (value) => ({
	// 			borderBottomRightRadius: `calc(${value} * var(--scale-factor))`,
	// 			borderBottomLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-l": (value) => ({
	// 			borderTopLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 			borderBottomLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-tl": (value) => ({
	// 			borderTopLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-tr": (value) => ({
	// 			borderTopRightRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-br": (value) => ({
	// 			borderBottomRightRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 		"sc-rounded-bl": (value) => ({
	// 			borderBottomLeftRadius: `calc(${value} * var(--scale-factor))`,
	// 		}),
	// 	},
	// 	{
	// 		values: theme("borderRadius"),
	// 		supportsNegativeValues: false,
	// 	},
	// )

	// ========================================
	// 8. Промежутки (Gaps)
	// ========================================
	matchUtilities(
		{
			"sc-gap": (value) => ({
				gap: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-gap-x": (value) => ({
				columnGap: `calc(${value} * var(--scale-factor))`,
			}),
			"sc-gap-y": (value) => ({
				rowGap: `calc(${value} * var(--scale-factor))`,
			}),
		},
		{
			values: theme("spacing"),
			supportsNegativeValues: false,
		},
	)

	// ========================================
	// 9. Трансформации (Transform)
	// ========================================
	matchUtilities(
		{
			"sc-translate-x": (value) => ({
				transform: `translateX(calc(${value} * var(--scale-factor)))`,
			}),
			"sc-translate-y": (value) => ({
				transform: `translateY(calc(${value} * var(--scale-factor)))`,
			}),
			"sc-rotate": (value) => ({
				transform: `rotate(calc(${value} * var(--scale-factor)))`,
			}),
			"sc-scale": (value) => ({
				transform: `scale(calc(${value} * var(--scale-factor)))`,
			}),
		},
		{
			values: theme("spacing"),
			supportsNegativeValues: true,
		},
	)
})
