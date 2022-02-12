# RmsGeneratedClientJs.CommonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOwnUserProfile**](CommonApi.md#getOwnUserProfile) | **GET** /rms/users/own | 自分のプロファイル情報を取得する
[**updateUserProfile**](CommonApi.md#updateUserProfile) | **PUT** /rms/users/own | 自分のプロファイル情報を更新する



## getOwnUserProfile

> UserAccountResourceDto getOwnUserProfile()

自分のプロファイル情報を取得する

ログインしているユーザ自身のプロファイル情報を返す

### Example

```javascript
import RmsGeneratedClientJs from 'rms-generated-client-js';
let defaultClient = RmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RmsGeneratedClientJs.CommonApi();
apiInstance.getOwnUserProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserAccountResourceDto**](UserAccountResourceDto.md)

### Authorization

[RmsJwtAuth](../README.md#RmsJwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserProfile

> UserAccountResourceDto updateUserProfile(opts)

自分のプロファイル情報を更新する

自分以外の情報を更新しようとした場合は禁止操作として403を返す

### Example

```javascript
import RmsGeneratedClientJs from 'rms-generated-client-js';
let defaultClient = RmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
let RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RmsGeneratedClientJs.CommonApi();
let opts = {
  'userAccountResourceDto': new RmsGeneratedClientJs.UserAccountResourceDto() // UserAccountResourceDto | 
};
apiInstance.updateUserProfile(opts).then((data) => {
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
