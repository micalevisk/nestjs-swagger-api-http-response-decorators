// ==== THIS FILE WAS GENERATED PROGRAMATICALLY!
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

type ApiResponseOptionsWihtoutStatus = Omit<ApiResponseOptions, 'status'>;

export * from '@nestjs/swagger/dist/decorators/api-response.decorator';

export const ApiAmbiguousResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.AMBIGUOUS,
  });

export const ApiContinueResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.CONTINUE,
  });

export const ApiEarlyhintsResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.EARLYHINTS,
  });

export const ApiExpectationFailedResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.EXPECTATION_FAILED,
  });

export const ApiFailedDependencyResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.FAILED_DEPENDENCY,
  });

export const ApiHttpVersionNotSupportedResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
  });

export const ApiIAmATeapotResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.I_AM_A_TEAPOT,
  });

export const ApiLengthRequiredResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.LENGTH_REQUIRED,
  });

export const ApiMisdirectedResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.MISDIRECTED,
  });

export const ApiNonAuthoritativeInformationResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  });

export const ApiNotModifiedResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.NOT_MODIFIED,
  });

export const ApiPartialContentResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PARTIAL_CONTENT,
  });

export const ApiPaymentRequiredResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PAYMENT_REQUIRED,
  });

export const ApiPermanentRedirectResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PERMANENT_REDIRECT,
  });

export const ApiPreconditionRequiredResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PRECONDITION_REQUIRED,
  });

export const ApiProcessingResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PROCESSING,
  });

export const ApiProxyAuthenticationRequiredResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
  });

export const ApiRequestedRangeNotSatisfiableResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
  });

export const ApiResetContentResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.RESET_CONTENT,
  });

export const ApiSeeOtherResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.SEE_OTHER,
  });

export const ApiSwitchingProtocolsResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.SWITCHING_PROTOCOLS,
  });

export const ApiTemporaryRedirectResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.TEMPORARY_REDIRECT,
  });

export const ApiUriTooLongResponse = (options?: ApiResponseOptionsWihtoutStatus) =>
  ApiResponse({
    ...options,
    status: HttpStatus.URI_TOO_LONG,
  });
