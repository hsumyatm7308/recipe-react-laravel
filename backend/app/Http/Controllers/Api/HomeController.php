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

        $allrecipes = Recipe::paginate(12);

        return response()->json([
            'recipes' => RecipeResource::collection($allrecipes),

        ], 200, [], JSON_UNESCAPED_UNICODE);

        // http://127.0.0.1:8000/api/home?page=${pageId}


        // Note :: popular 


    }

    public function show(string $id)
    {
        $showrecipe = Recipe::findOrFail($id);

        return response()->json([
            'recipe' => new RecipeResource($showrecipe),
        ], 200, [], JSON_UNESCAPED_UNICODE);

        // http://127.0.0.1:8000/api/home/${recipeId}

    }



}
