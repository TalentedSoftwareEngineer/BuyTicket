<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

Route::post('login', [LoginController::class, 'authenticate']);
Route::post('signup', [LoginController::class, 'signup']);

Route::group(['middleware' => 'Models:sanctum'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [LoginController::class, 'logout']);
});
