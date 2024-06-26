<?php
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\RecipeController;
use App\Http\Controllers\Api\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/auth/logout', [UserController::class, 'logout']);
    Route::apiResource('recipe', RecipeController::class, ["as" => "api"]);
    Route::post('recipe/edit/{id}', [RecipeController::class, 'edit']);

    // detail
    Route::post('/recipe/{recipe}/like', [LikeController::class, 'like']);
    Route::post('/recipe/{recipe}/unlike', [LikeController::class, 'unlike']);

});

Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);


// home
Route::apiResource('/home', HomeController::class, ["as" => "api"]);
Route::post('/popular', [HomeController::class, 'popular']);

Route::apiResource('/search', SearchController::class, ["as" => "api"]);
Route::apiResource('/category', CategoryController::class, ["as" => "api"]);











