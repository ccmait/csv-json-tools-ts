import { ConvertCsvToJsonArgs, WriteCsvArgs, WriteJsonArgs } from './types';
/**
 * CsvJson Class
 */
export default class CsvJson {
    /**
     * CSV to JSON
     */
    convertCsvToJson(args: ConvertCsvToJsonArgs): Promise<any[]>;
    /**
     * Write CSV
     */
    writeCsv(args: WriteCsvArgs): Promise<boolean>;
    /**
     * Write JSON
     */
    writeJson(args: WriteJsonArgs): Promise<unknown>;
}
