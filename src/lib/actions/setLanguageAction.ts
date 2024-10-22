'use server'

import { cookies } from "next/headers";

export default async function setLanguage(value:string) {
    cookies().set('language', value);
}