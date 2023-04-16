# @ExtactIoRmsGeneratedClientJs.AuthenticateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](AuthenticateApi.md#authenticate) | **POST** /auth/login | ユーザ認証を行う
[**authenticateForTest**](AuthenticateApi.md#authenticateForTest) | **GET** /auth/login | ユーザ認証を行う（curlのテスト用）



## authenticate

> UserAccountResourceDto authenticate(opts)

ユーザ認証を行う

ログイン名とパスワードに一致するユーザを取得する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AuthenticateApi();
let opts = {
  'loginEventDto': new @ExtactIoRmsGeneratedClientJs.LoginEventDto() // LoginEventDto | 
};
apiInstance.authenticate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginEventDto** | [**LoginEventDto**](LoginEventDto.md)|  | [optional] 

### Return type

[**UserAccountResourceDto**](UserAccountResourceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authenticateForTest

> UserAccountResourceDto authenticateForTest(loginId, password)

ユーザ認証を行う（curlのテスト用）

ログイン名とパスワードに一致するユーザを取得する

### Example

```javascript
import @ExtactIoRmsGeneratedClientJs from '@extact-io/rms-generated-client-js';

let apiInstance = new @ExtactIoRmsGeneratedClientJs.AuthenticateApi();
let loginId = "loginId_example"; // String | ログインId
let password = "password_example"; // String | パスワード
apiInstance.authenticateForTest(loginId, password).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginId** | **String**| ログインId | 
 **password** | **String**| パスワード | 

### Return type

[**UserAccountResourceDto**](UserAccountResourceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

