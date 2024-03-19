import {NextResponse} from "next/server";

/**
 * Create a query string from an object
 * @param url
 */
export const createParamsFromUrl = (url: string): {[key: string]: string} => {
    const { searchParams } = new URL(url);
    const params: {[key: string]: string} = {};
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}