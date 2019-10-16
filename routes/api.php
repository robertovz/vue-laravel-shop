<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::apiResources([
        'users' => 'API\UserController'
    ]);
    Route::apiResources(['products' => 'API\ProductController']);
    Route::apiResources(['orders' => 'API\OrderController']);
    Route::post('orders/{order}/deliver','API\OrderController@deliverOrder');
});

Route::apiResources(['details' => 'API\DetailController']);

Route::get('profile', 'API\UserController@profile');
Route::get('findUser', 'API\UserController@search');
Route::put('profile', 'API\UserController@updateProfile');
Route::put('/product/updateAmount', 'API\OrderController@updateAmount');


Route::get('lastProducts','API\ProductController@showNew');
Route::get('product/{id}','API\ProductController@show');

Route::get('/items','API\ProductController@items');
Route::get('/detail/category','API\DetailController@category');
Route::get('users/{user}/orders','API\UserController@showOrders');
Route::get('/product/search','API\DetailController@search');
Route::get('/order/search','API\OrderController@showOrders');


Route::get('/order/count','API\OrderController@count');