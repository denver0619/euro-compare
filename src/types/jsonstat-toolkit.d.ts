// // jsonstat-toolkit.d.ts
// declare module "jsonstat-toolkit" {
//     import { Response } from "node-fetch";

//     type JsonStatClass =
//         | "bundle"
//         | "dataset"
//         | "dimension"
//         | "category"
//         | "collection";

//     interface JsonStatDataset {
//         class: JsonStatClass;
//         label?: string;
//         note?: any;
//         link?: any;
//         href?: string;
//         updated?: string;
//         source?: any;
//         extension?: any;
//         size?: number[];
//         value?: any;
//         status?: any;
//         dimension?: {
//             [key: string]: JsonStatDimension;
//             role?: {
//                 [key: string]: string[];
//             };
//             id?: string[];
//             size?: number[];
//         };
//         role?: {
//             [key: string]: string[];
//         };
//         __tree__?: any;
//         id?: string[];
//     }

//     interface JsonStatDimension {
//         label?: string;
//         note?: any;
//         link?: any;
//         href?: string;
//         category: {
//             index: {
//                 [key: string]: number;
//             };
//             label: {
//                 [key: string]: string;
//             };
//             unit?: any;
//             coordinates?: any;
//             child?: any;
//             note?: {
//                 [key: string]: string;
//             };
//         };
//         role?: string;
//         __tree__?: any;
//         id?: string[];
//         length?: number;
//     }

//     interface JsonStatCategory {
//         id?: string[];
//         length?: number;
//         index?: number;
//         label?: string;
//         note?: any;
//         unit?: any;
//         coordinates?: any;
//         child?: any;
//     }

//     interface JsonStatCollection {
//         label?: string;
//         note?: any;
//         link?: any;
//         href?: string;
//         updated?: string;
//         source?: any;
//         extension?: any;
//         length?: number;
//         id?: string[];
//         link?: {
//             item: {
//                 href: string;
//             }[];
//         };
//     }

//     class JsonStat {
//         length: number;
//         id: string[];
//         class: JsonStatClass;
//         size?: number[];
//         value?: any;
//         status?: any;
//         role?: any;
//         __tree__: any;
//         n?: number;

//         constructor(data: any);

//         Item(t: any): any;
//         Dataset(t?: any): any;
//         Dimension(t: any, e?: boolean): any;
//         Category(t: any): any;
//         Dice(t: any, e?: boolean, r?: boolean): any;
//         Slice(t: any): any;
//         Data(t: any, e?: boolean): any;
//         toTable(t: any, e?: any): any;
//         node(): any;
//         toString(): string;
//     }

//     function jsonstat(
//         url: string,
//         options?: any,
//         callback?: (error: Error, response: Response, json: any) => void
//     ): Promise<JsonStat>;

//     export = jsonstat;
// }
