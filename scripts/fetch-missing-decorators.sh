#!/bin/bash

set -e

wget -O - https://raw.githubusercontent.com/nestjs/swagger/master/lib/decorators/api-response.decorator.ts |
  grep --color=never -Po "(?<=HttpStatus\.)\w+" |
  sort -u > available

wget -O - https://raw.githubusercontent.com/nestjs/nest/master/packages/common/enums/http-status.enum.ts |
  grep --color=never -Po "\w+(?=\s=\s)" |
  sort -u > all

grep -v -f available all > ../meta/missing

rm available all
