<?php
use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
