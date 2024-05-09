<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allrecipes = Recipe::paginate(2);
        return response()->json([
            'data' => RecipeResource::collection($allrecipes),
        ], 200);

        // http://127.0.0.1:8000/api/home?page=2 


    }


}
