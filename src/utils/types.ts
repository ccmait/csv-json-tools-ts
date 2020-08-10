/**
 * Header
 */

export type Header = {
	id: string
	title: string
}

/**
 * Convert CSV to JSON Args
 */

export type ConvertCsvToJsonArgs = {
	filename: string
	delimiter?: string
}

/**
 * Write CSV Args
 */

export type WriteCsvArgs = {
	filename: string
	data: Array<any>
	headers?: Array<string>
	delimiter?: string
}

/**
 * Write JSON Args
 */

export type WriteJsonArgs = {
	filename: string
	data: string
}
