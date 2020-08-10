/**
 * Header
 */
export declare type Header = {
    id: string;
    title: string;
};
/**
 * Convert CSV to JSON Args
 */
export declare type ConvertCsvToJsonArgs = {
    filename: string;
    delimiter?: string;
};
/**
 * Write CSV Args
 */
export declare type WriteCsvArgs = {
    filename: string;
    data: Array<any>;
    headers?: Array<string>;
    delimiter?: string;
};
/**
 * Write JSON Args
 */
export declare type WriteJsonArgs = {
    filename: string;
    data: string;
};
