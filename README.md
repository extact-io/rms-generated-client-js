# @extact-io/rms-generated-client-js

@ExtactIoRmsGeneratedClientJs - JavaScript client for @extact-io/rms-generated-client-js
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: -
- Package version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://extact-io.github.io/rms-website/](https://extact-io.github.io/rms-website/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @extact-io/rms-generated-client-js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @extact-io/rms-generated-client-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var @ExtactIoRmsGeneratedClientJs = require('@extact-io/rms-generated-client-js');

var defaultClient = @ExtactIoRmsGeneratedClientJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: RmsJwtAuth
var RmsJwtAuth = defaultClient.authentications['RmsJwtAuth'];
RmsJwtAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new @ExtactIoRmsGeneratedClientJs.AdminApi()
var opts = {
  'addRentalItemEventDto': new @ExtactIoRmsGeneratedClientJs.AddRentalItemEventDto() // {AddRentalItemEventDto} 
};
api.addRentalItem(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**addRentalItem**](docs/AdminApi.md#addRentalItem) | **POST** /api/rms/items | レンタル品を登録する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**addUserAccount**](docs/AdminApi.md#addUserAccount) | **POST** /api/rms/users | ユーザを登録する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**deleteRentalItem**](docs/AdminApi.md#deleteRentalItem) | **DELETE** /api/rms/items/{itemId} | レンタル品を削除する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**deleteReservation**](docs/AdminApi.md#deleteReservation) | **DELETE** /api/rms/reservations/{reservationId} | 予約を削除する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**deleteUserAccount**](docs/AdminApi.md#deleteUserAccount) | **DELETE** /api/rms/users/{userAccountId} | ユーザを削除する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**getAllRentalItems**](docs/AdminApi.md#getAllRentalItems) | **GET** /api/rms/items | レンタル品の全件を取得する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**getAllReservations**](docs/AdminApi.md#getAllReservations) | **GET** /api/rms/reservations | 予約の全件を取得する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**getAllUserAccounts**](docs/AdminApi.md#getAllUserAccounts) | **GET** /api/rms/users | ユーザの全件を取得する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**updateRentalItem**](docs/AdminApi.md#updateRentalItem) | **PUT** /api/rms/items | レンタル品を更新する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**updateReservation**](docs/AdminApi.md#updateReservation) | **PUT** /api/rms/reservations | 予約を更新する
*@ExtactIoRmsGeneratedClientJs.AdminApi* | [**updateUserAccount**](docs/AdminApi.md#updateUserAccount) | **PUT** /api/rms/users | ユーザを更新する
*@ExtactIoRmsGeneratedClientJs.AuthenticateApi* | [**authenticate**](docs/AuthenticateApi.md#authenticate) | **POST** /auth/login | ユーザ認証を行う
*@ExtactIoRmsGeneratedClientJs.AuthenticateApi* | [**authenticateForTest**](docs/AuthenticateApi.md#authenticateForTest) | **GET** /auth/login | ユーザ認証を行う（curlのテスト用）
*@ExtactIoRmsGeneratedClientJs.CommonApi* | [**getOwnUserProfile**](docs/CommonApi.md#getOwnUserProfile) | **GET** /api/rms/users/own | 自分のプロファイル情報を取得する
*@ExtactIoRmsGeneratedClientJs.CommonApi* | [**updateUserProfile**](docs/CommonApi.md#updateUserProfile) | **PUT** /api/rms/users/own | 自分のプロファイル情報を更新する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**addReservation**](docs/MemberApi.md#addReservation) | **POST** /api/rms/reservations | レンタル品を予約する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**canRentedItemAtTerm**](docs/MemberApi.md#canRentedItemAtTerm) | **GET** /api/rms/items/{itemId}/rentable | レンタル品が該当期間に予約可能かを返す
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**cancelReservation**](docs/MemberApi.md#cancelReservation) | **DELETE** /api/rms/reservations/own/{reservationId} | 予約をキャンセルする
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**findCanRentedItemAtTerm**](docs/MemberApi.md#findCanRentedItemAtTerm) | **GET** /api/rms/items/rentable | 該当期間に予約可能なレンタル品を検索する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**findReservationByRentalItemAndStartDate**](docs/MemberApi.md#findReservationByRentalItemAndStartDate) | **GET** /api/rms/reservations/item/{itemId}/startdate/{startDate} | 指定されたレンタル品と利用開始日で予約を検索する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**findReservationByRentalItemId**](docs/MemberApi.md#findReservationByRentalItemId) | **GET** /api/rms/reservations/item/{itemId} | 指定されたレンタル品に対する予約を検索する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**findReservationByReserverId**](docs/MemberApi.md#findReservationByReserverId) | **GET** /api/rms/reservations/reserver/{reserverId} | 指定されたユーザが予約者の予約を検索する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**getAllRentalItems**](docs/MemberApi.md#getAllRentalItems) | **GET** /api/rms/items | レンタル品の全件を取得する
*@ExtactIoRmsGeneratedClientJs.MemberApi* | [**getOwnReservations**](docs/MemberApi.md#getOwnReservations) | **GET** /api/rms/reservations/own | 自分の予約一覧を取得する


## Documentation for Models

 - [@ExtactIoRmsGeneratedClientJs.AddRentalItemEventDto](docs/AddRentalItemEventDto.md)
 - [@ExtactIoRmsGeneratedClientJs.AddReservationEventDto](docs/AddReservationEventDto.md)
 - [@ExtactIoRmsGeneratedClientJs.AddUserAccountEventDto](docs/AddUserAccountEventDto.md)
 - [@ExtactIoRmsGeneratedClientJs.GenericErrorInfo](docs/GenericErrorInfo.md)
 - [@ExtactIoRmsGeneratedClientJs.LoginEventDto](docs/LoginEventDto.md)
 - [@ExtactIoRmsGeneratedClientJs.RentalItemResourceDto](docs/RentalItemResourceDto.md)
 - [@ExtactIoRmsGeneratedClientJs.ReservationResourceDto](docs/ReservationResourceDto.md)
 - [@ExtactIoRmsGeneratedClientJs.UserAccountResourceDto](docs/UserAccountResourceDto.md)
 - [@ExtactIoRmsGeneratedClientJs.UserType](docs/UserType.md)
 - [@ExtactIoRmsGeneratedClientJs.ValidationErrorInfoImpl](docs/ValidationErrorInfoImpl.md)
 - [@ExtactIoRmsGeneratedClientJs.ValidationErrorItemImpl](docs/ValidationErrorItemImpl.md)


## Documentation for Authorization



### RmsJwtAuth

- **Type**: Bearer authentication (JWT)

