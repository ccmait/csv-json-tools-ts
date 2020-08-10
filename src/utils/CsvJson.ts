import csvToJson from 'csvtojson'
import startCase from 'lodash.startcase'
import camelCase from 'lodash.camelcase'
import { resolve } from 'path'
import { writeFile } from 'fs'
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer'
import {
	Header,
	ConvertCsvToJsonArgs,
	WriteCsvArgs,
	WriteJsonArgs,
} from './types'

// Helpers

const titleCase = (text: string) => startCase(camelCase(text))

/**
 * CsvJson Class
 */

export default class CsvJson {
	/**
	 * CSV to JSON
	 */

	async convertCsvToJson(args: ConvertCsvToJsonArgs) {
		args = {
			delimiter: ',',
			...args,
		} as ConvertCsvToJsonArgs
		const res = await csvToJson({
			delimiter: args.delimiter,
			flatKeys: true,
		}).fromFile(resolve(args.filename))
		return res
	}

	/**
	 * Write CSV
	 */

	async writeCsv(args: WriteCsvArgs) {
		args = {
			delimiter: ',',
			...args,
		} as WriteCsvArgs
		const file = resolve(args.filename)
		const writerArgs: any = {
			path: file,
			fieldDelimiter: args.delimiter,
		}
		const csvHeaders: Array<any> = args.headers || []
		if (!args.headers && args.data[0] != null) {
			for (const key in args.data[0]) {
				csvHeaders.push({
					id: key,
					title: titleCase(key),
				} as Header)
			}
			writerArgs.header = csvHeaders
		}
		const csvWriter = createCsvWriter(writerArgs)
		await csvWriter.writeRecords(args.data)
		console.log(`Wrote ${args.data.length} records to ${file}`)
		return true
	}

	/**
	 * Write JSON
	 */

	async writeJson(args: WriteJsonArgs) {
		const file = resolve(args.filename)
		return new Promise((resolve, reject) => {
			writeFile(file, args.data, (err) => {
				if (err) reject(err)
				console.log(`Wrote ${args.data.length} records to ${file}`)
				resolve(true)
			})
		})
	}
}
