/* Здесь прописываешь "ручки" для запросов */

/* GET для get-запросов */
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/* Ревалидация кеша по запросу (обновить закешированные файлы у клиента). */
export async function GET(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }) {
	const tag = request.nextUrl.searchParams.get('tag');

	revalidateTag(tag);

	return NextResponse.json({
			revalidatedTag: tag,
			revalidated: true,
			date: new Date().toLocaleDateString(),
	});
}