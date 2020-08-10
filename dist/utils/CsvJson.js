"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvtojson_1 = __importDefault(require("csvtojson"));
const lodash_startcase_1 = __importDefault(require("lodash.startcase"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const path_1 = require("path");
const fs_1 = require("fs");
const csv_writer_1 = require("csv-writer");
// Helpers
const titleCase = (text) => lodash_startcase_1.default(lodash_camelcase_1.default(text));
/**
 * CsvJson Class
 */
class CsvJson {
    /**
     * CSV to JSON
     */
    convertCsvToJson(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = Object.assign({ delimiter: ',' }, args);
            const res = yield csvtojson_1.default({
                delimiter: args.delimiter,
                flatKeys: true,
            }).fromFile(path_1.resolve(args.filename));
            return res;
        });
    }
    /**
     * Write CSV
     */
    writeCsv(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = Object.assign({ delimiter: ',' }, args);
            const file = path_1.resolve(args.filename);
            const writerArgs = {
                path: file,
                fieldDelimiter: args.delimiter,
            };
            const csvHeaders = args.headers || [];
            if (!args.headers && args.data[0] != null) {
                for (const key in args.data[0]) {
                    csvHeaders.push({
                        id: key,
                        title: titleCase(key),
                    });
                }
                writerArgs.header = csvHeaders;
            }
            const csvWriter = csv_writer_1.createObjectCsvWriter(writerArgs);
            yield csvWriter.writeRecords(args.data);
            console.log(`Wrote ${args.data.length} records to ${file}`);
            return true;
        });
    }
    /**
     * Write JSON
     */
    writeJson(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = path_1.resolve(args.filename);
            return new Promise((resolve, reject) => {
                fs_1.writeFile(file, args.data, (err) => {
                    if (err)
                        reject(err);
                    console.log(`Wrote ${args.data.length} records to ${file}`);
                    resolve(true);
                });
            });
        });
    }
}
exports.default = CsvJson;
