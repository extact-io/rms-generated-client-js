# @ExtactIoRmsGeneratedClientJs.MemberApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReservation**](MemberApi.md#addReservation) | **POST** /rms/reservations | レンタル品を予約する
[**canRentedItemAtTerm**](MemberApi.md#canRentedItemAtTerm) | **GET** /rms/items/{rentalItemId}/rentable | レンタル品が該当期間に予約可能かを返す
[**cancelReservation**](MemberApi.md#cancelReservation) | **DELETE** /rms/reservations/own/{reservationId} | 予約をキャンセルする
[**findCanRentedItemAtTerm**](MemberApi.md#findCanRentedItemAtTerm) | **GET** /rms/items/rentable | 該当期間に予約可能なレンタル品を検索する
[**findReservationByRentalItemAndStartDate**](MemberApi.md#findReservationByRentalItemAndStartDate) | **GET** /rms/reservations/item/{itemId}/startdate/{startDate} | 指定されたレンタル品と利用開始日で予約を検索する
[**findReservationByRentalItemId**](MemberApi.md#findReservationByRentalItemId) | **GET** /rms/reservations/item/{rentalItemId} | 指定されたレンタル品に対する予約を検索する
[**findReservationByReserverId**](MemberApi.md#findReservationByReserverId) | **GET** /rms/reservations/reserver/{reserverId} | 指定されたユーザが予約者の予約を検索する
[**getAllRentalItems**](MemberApi.md#getAllRentalItems) | **GET** /rms/items | レンタル品の全件を取得する
[**getOwnReservations**](MemberApi.md#getOwnReservations) | **GET** /rms/reservations/own | 自分の予約一覧を取得する



## addReservation

> ReservationResourceDto addReservation(opts)

レンタル品を予約する

予約対象のレンタル品が存在しない場合は404を予定期間に別の予約が既に入っている場合は409を返す

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let opts = {
  'addReservationDto': new @ExtactIoRmsGeneratedClientJs.AddReservationDto() // AddReservationDto | 
};
apiInstance.addReservation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addReservationDto** | [**AddReservationDto**](AddReservationDto.md)|  | [optional] 

### Return type

[**ReservationResourceDto**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## canRentedItemAtTerm

> Boolean canRentedItemAtTerm(rentalItemId, from, to)

レンタル品が該当期間に予約可能かを返す

レンタル品が該当期間に予約可能かを返す

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let rentalItemId = 56; // Number | レンタル品ID
let from = null; // String | 利用開始日時
let to = null; // String | 利用開始日時
apiInstance.canRentedItemAtTerm(rentalItemId, from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rentalItemId** | **Number**| レンタル品ID | 
 **from** | [**String**](.md)| 利用開始日時 | 
 **to** | [**String**](.md)| 利用開始日時 | 

### Return type

**Boolean**

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelReservation

> cancelReservation(reservationId)

予約をキャンセルする

依頼された予約IDに対する予約をキャンセルする。予約のキャンセルは予約した人しか行えない。他の人が予約キャンセルを行った場合は禁止操作としてエラーにする

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let reservationId = 56; // Number | 予約ID
apiInstance.cancelReservation(reservationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **Number**| 予約ID | 

### Return type

null (empty response body)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findCanRentedItemAtTerm

> [RentalItemResourceDto] findCanRentedItemAtTerm(from, to)

該当期間に予約可能なレンタル品を検索する

該当期間に予約可能なレンタル品を検索する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let from = null; // String | 利用開始日時
let to = null; // String | 利用開始日時
apiInstance.findCanRentedItemAtTerm(from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**String**](.md)| 利用開始日時 | 
 **to** | [**String**](.md)| 利用開始日時 | 

### Return type

[**[RentalItemResourceDto]**](RentalItemResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findReservationByRentalItemAndStartDate

> [ReservationResourceDto] findReservationByRentalItemAndStartDate(itemId, startDate)

指定されたレンタル品と利用開始日で予約を検索する

指定されたレンタル品と利用開始日に一致する予約を検索する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let itemId = 56; // Number | レンタル品ID
let startDate = 20201230; // String | 利用開始日
apiInstance.findReservationByRentalItemAndStartDate(itemId, startDate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| レンタル品ID | 
 **startDate** | **String**| 利用開始日 | 

### Return type

[**[ReservationResourceDto]**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findReservationByRentalItemId

> [ReservationResourceDto] findReservationByRentalItemId(rentalItemId)

指定されたレンタル品に対する予約を検索する

指定されたレンタル品に対する予約を検索する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let rentalItemId = 56; // Number | レンタル品ID
apiInstance.findReservationByRentalItemId(rentalItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rentalItemId** | **Number**| レンタル品ID | 

### Return type

[**[ReservationResourceDto]**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findReservationByReserverId

> [ReservationResourceDto] findReservationByReserverId(reserverId)

指定されたユーザが予約者の予約を検索する

指定されたユーザが予約者の予約を検索する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
let reserverId = 56; // Number | ユーザID
apiInstance.findReservationByReserverId(reserverId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reserverId** | **Number**| ユーザID | 

### Return type

[**[ReservationResourceDto]**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRentalItems

> [RentalItemResourceDto] getAllRentalItems()

レンタル品の全件を取得する

登録されているすべてのレンタル品を取得する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
apiInstance.getAllRentalItems().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[RentalItemResourceDto]**](RentalItemResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOwnReservations

> [ReservationResourceDto] getOwnReservations()

自分の予約一覧を取得する

ログインユーザが予約者となっている予約の一覧を取得する。このAPIは/reservations/reserver/{reserverId}のエイリアスとなっている

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.MemberApi();
apiInstance.getOwnReservations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ReservationResourceDto]**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

