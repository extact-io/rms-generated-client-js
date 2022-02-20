# @ExtactIoRmsGeneratedClientJs.AdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRentalItem**](AdminApi.md#addRentalItem) | **POST** /rms/items | レンタル品を登録する
[**addUserAccount**](AdminApi.md#addUserAccount) | **POST** /rms/users | ユーザを登録する
[**deleteRentalItem**](AdminApi.md#deleteRentalItem) | **DELETE** /rms/items/{rentalItemId} | レンタル品を削除する
[**deleteReservation**](AdminApi.md#deleteReservation) | **DELETE** /rms/reservations/{reservationId} | 予約を削除する
[**deleteUserAccount**](AdminApi.md#deleteUserAccount) | **DELETE** /rms/users/{userAccountId} | ユーザを削除する
[**getAllRentalItems**](AdminApi.md#getAllRentalItems) | **GET** /rms/items | レンタル品の全件を取得する
[**getAllReservations**](AdminApi.md#getAllReservations) | **GET** /rms/reservations | 予約の全件を取得する
[**getAllUserAccounts**](AdminApi.md#getAllUserAccounts) | **GET** /rms/users | ユーザの全件を取得する
[**updateRentalItem**](AdminApi.md#updateRentalItem) | **PUT** /rms/items | レンタル品を更新する
[**updateReservation**](AdminApi.md#updateReservation) | **PUT** /rms/reservations | 予約を更新する
[**updateUserAccount**](AdminApi.md#updateUserAccount) | **PUT** /rms/users | ユーザを更新する



## addRentalItem

> RentalItemResourceDto addRentalItem(opts)

レンタル品を登録する

シリアル番号が既に使われている場合は409を返す

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let opts = {
  'addRentalItemDto': new @ExtactIoRmsGeneratedClientJs.AddRentalItemDto() // AddRentalItemDto | 
};
apiInstance.addRentalItem(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addRentalItemDto** | [**AddRentalItemDto**](AddRentalItemDto.md)|  | [optional] 

### Return type

[**RentalItemResourceDto**](RentalItemResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addUserAccount

> UserAccountResourceDto addUserAccount(opts)

ユーザを登録する

ログインIDが既に使われている場合は409を返す

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let opts = {
  'addUserAccountDto': new @ExtactIoRmsGeneratedClientJs.AddUserAccountDto() // AddUserAccountDto | 
};
apiInstance.addUserAccount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUserAccountDto** | [**AddUserAccountDto**](AddUserAccountDto.md)|  | [optional] 

### Return type

[**UserAccountResourceDto**](UserAccountResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRentalItem

> deleteRentalItem(rentalItemId)

レンタル品を削除する

削除対象のレンタル品を参照する予約が存在する場合は削除は行わずエラーにする

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let rentalItemId = 56; // Number | レンタル品ID
apiInstance.deleteRentalItem(rentalItemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rentalItemId** | **Number**| レンタル品ID | 

### Return type

null (empty response body)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteReservation

> deleteReservation(reservationId)

予約を削除する

予約を削除する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let reservationId = 56; // Number | 予約ID
apiInstance.deleteReservation(reservationId).then(() => {
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


## deleteUserAccount

> deleteUserAccount(userAccountId)

ユーザを削除する

削除対象のユーザを参照する予約が存在する場合は削除は行わずエラーにする

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let userAccountId = 56; // Number | ユーザID
apiInstance.deleteUserAccount(userAccountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAccountId** | **Number**| ユーザID | 

### Return type

null (empty response body)

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

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
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


## getAllReservations

> [ReservationResourceDto] getAllReservations()

予約の全件を取得する

登録されているすべての予約を取得する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
apiInstance.getAllReservations().then((data) => {
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


## getAllUserAccounts

> [UserAccountResourceDto] getAllUserAccounts()

ユーザの全件を取得する

登録されているすべてのユーザを取得する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
apiInstance.getAllUserAccounts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UserAccountResourceDto]**](UserAccountResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRentalItem

> RentalItemResourceDto updateRentalItem(opts)

レンタル品を更新する

依頼されたレンタル品を更新する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let opts = {
  'rentalItemResourceDto': new @ExtactIoRmsGeneratedClientJs.RentalItemResourceDto() // RentalItemResourceDto | 
};
apiInstance.updateRentalItem(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rentalItemResourceDto** | [**RentalItemResourceDto**](RentalItemResourceDto.md)|  | [optional] 

### Return type

[**RentalItemResourceDto**](RentalItemResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateReservation

> ReservationResourceDto updateReservation(opts)

予約を更新する

依頼された予約を更新する。ユーザアカウントとレンタル品のエンティティは更新時に使用していないためIDのみ設定すればよい

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let opts = {
  'reservationResourceDto': new @ExtactIoRmsGeneratedClientJs.ReservationResourceDto() // ReservationResourceDto | 
};
apiInstance.updateReservation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationResourceDto** | [**ReservationResourceDto**](ReservationResourceDto.md)|  | [optional] 

### Return type

[**ReservationResourceDto**](ReservationResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserAccount

> UserAccountResourceDto updateUserAccount(opts)

ユーザを更新する

依頼されたユーザを更新する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';
let defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AdminApi();
let opts = {
  'userAccountResourceDto': new @ExtactIoRmsGeneratedClientJs.UserAccountResourceDto() // UserAccountResourceDto | 
};
apiInstance.updateUserAccount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAccountResourceDto** | [**UserAccountResourceDto**](UserAccountResourceDto.md)|  | [optional] 

### Return type

[**UserAccountResourceDto**](UserAccountResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

