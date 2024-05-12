<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Recipe::all();
        return response()->json([
            'categories' => CategoryResource::collection($categories)
        ], 200);

        // http://127.0.0.1:8000/api/category/${categoryId}
    }

    public function show(string $id)
    {
        $categories = Recipe::where('category_id', $id)->paginate(2);
        return response()->json([
            'categories' => CategoryResource::collection($categories)
        ], 200);

        // http://127.0.0.1:8000/api/category/${categoryId}?page=${pageId}
    }
}
