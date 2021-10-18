#!/usr/bin/env node

const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const toPascalCase = require('to-pascal-case');

/** The list of all missing enum field names. */
const PATH_INPUT_FILE = join(__dirname, '..', 'meta', 'missing');
/** */
const PATH_OUTPUT_FILE = join(__dirname, '..', 'index.ts');

/** */
const fileHeaderStaticContent = `
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

type ApiResponseOptionsWihtoutStatus = Omit<ApiResponseOptions, 'status'>;

export * from '@nestjs/swagger';
`.trimLeft();

/** */
const template = `
export const Api<% statusNamePascal %> = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.<% statusName %>,
  });
`;


const missingStatusNames = readFileSync(PATH_INPUT_FILE, 'utf-8').trim().split('\n');

let content = fileHeaderStaticContent;
for (const statusName of missingStatusNames) {
  content += template
    .replace('<% statusNamePascal %>', toPascalCase(statusName))
    .replace('<% statusName %>', statusName);
}

writeFileSync(PATH_OUTPUT_FILE, content);

console.debug('added the following:\n' + missingStatusNames.join('\n'));
