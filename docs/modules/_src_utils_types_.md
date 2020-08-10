[csv-json-tools-ts](../README.md) › [Globals](../globals.md) › ["src/utils/types"](_src_utils_types_.md)

# Module: "src/utils/types"

## Index

### Type aliases

* [ConvertCsvToJsonArgs](_src_utils_types_.md#convertcsvtojsonargs)
* [Header](_src_utils_types_.md#header)
* [WriteCsvArgs](_src_utils_types_.md#writecsvargs)
* [WriteJsonArgs](_src_utils_types_.md#writejsonargs)

## Type aliases

###  ConvertCsvToJsonArgs

Ƭ **ConvertCsvToJsonArgs**: *object*

*Defined in [src/utils/types.ts:14](https://github.com/edmundpf/csv-json-tools-ts/blob/b9693d4/src/utils/types.ts#L14)*

Convert CSV to JSON Args

#### Type declaration:

* **delimiter**? : *undefined | string*

* **filename**: *string*

___

###  Header

Ƭ **Header**: *object*

*Defined in [src/utils/types.ts:5](https://github.com/edmundpf/csv-json-tools-ts/blob/b9693d4/src/utils/types.ts#L5)*

Header

#### Type declaration:

* **id**: *string*

* **title**: *string*

___

###  WriteCsvArgs

Ƭ **WriteCsvArgs**: *object*

*Defined in [src/utils/types.ts:23](https://github.com/edmundpf/csv-json-tools-ts/blob/b9693d4/src/utils/types.ts#L23)*

Write CSV Args

#### Type declaration:

* **data**: *Array‹any›*

* **delimiter**? : *undefined | string*

* **filename**: *string*

* **headers**? : *Array‹string›*

___

###  WriteJsonArgs

Ƭ **WriteJsonArgs**: *object*

*Defined in [src/utils/types.ts:34](https://github.com/edmundpf/csv-json-tools-ts/blob/b9693d4/src/utils/types.ts#L34)*

Write JSON Args

#### Type declaration:

* **data**: *string*

* **filename**: *string*
