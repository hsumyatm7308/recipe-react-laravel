<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\RecipeResource;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        $recipes = Recipe::where(function ($query) {
            if ($getname = request('search_name')) {
                $query->where('name', 'LIKE', '%' . $getname . '%')
                    ->orWhereHas('category', function ($query) use ($getname) {
                        $query->where('name', 'LIKE', '%' . $getname . '%');
                    });

            }
        })->paginate(12);
        $categories = Category::all();
        return response()->json([
            'recipes' => RecipeResource::collection($recipes),
            'categories' => CategoryResource::collection($categories),

        ], 200, [], JSON_UNESCAPED_UNICODE);


        // http://127.0.0.1:8000/api/search?search_name=${searchName} 
    }
}
