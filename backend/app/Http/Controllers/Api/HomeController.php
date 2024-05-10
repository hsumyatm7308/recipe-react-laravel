<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\RecipeResource;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $allrecipes = Recipe::paginate(2);
        $categories = Category::all();
        return response()->json([
            'recipes' => RecipeResource::collection($allrecipes),
            'categories' => CategoryResource::collection($categories)
        ], 200);

        // http://127.0.0.1:8000/api/home?page=2 


    }


}
