<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return view('recipe.create');

    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'image' => 'nullable',
            'category_id' => 'required',
            'time' => 'required|numeric',
            'time_unit' => 'required',
            'numberofpeople' => 'required|integer|min:1',
            'ingredients' => 'required',
            'ingredients.*' => 'required|string|max:255',
            'method' => 'required|string',
            'user_id' => 'required'
        ]);

        $createrecipe = Recipe::create($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Recipe created successfully',
            'data' => new RecipeResource($createrecipe)
        ], 201);
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
