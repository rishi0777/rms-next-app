import { NextResponse } from 'next/server';
import { APP_DATA } from '@lib/mock-data/appData';

export async function GET() {
  return NextResponse.json(APP_DATA);
}
