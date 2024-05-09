<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userid = Auth::user()->id;
        $allrecipes = Recipe::where('user_id', $userid)->get();
        return response()->json([
            'data' => RecipeResource::collection($allrecipes),
        ], 200);



        // My Note ::
        //  1. Bio, Username from user account 

    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png',
            'category_id' => 'required',
            'time' => 'required|numeric',
            'time_unit' => 'required',
            'numberofpeople' => 'required|integer|min:1',
            'ingredients' => 'required', // array
            'instructions' => 'required|string',
            'user_id' => 'required'
        ]);


        $user = Auth::user();
        $user_id = $user->id;

        $validatedData['user_id'] = $user_id;

        if ($validatedData['image']) {
            $file = $request['image'];
            $imagenewname = uniqid($user_id) . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('assets/img/recipe/'), $imagenewname);

            $filepath = 'assets/img/recipe/' . $imagenewname;
            $validatedData['image'] = $filepath;


        }

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
        $showrecipe = Recipe::findOrFail($id);
        return response()->json([
            'data' => new RecipeResource($showrecipe)
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png',
            'category_id' => 'required',
            'time' => 'required|numeric',
            'time_unit' => 'required',
            'numberofpeople' => 'required|integer|min:1',
            'ingredients' => 'required', // array
            'instructions' => 'required|string',
            'user_id' => 'required'
        ]);



        $user = Auth::user();
        $user_id = $user->id;

        $validatedData['user_id'] = $user_id;

        $recipe = Recipe::findOrFail($id);

        // Remove Old Image
        if ($validatedData['image']) {
            $path = $recipe->image;

            if (File::exists($path)) {
                File::delete($path);
            }
        }

        if ($validatedData['image']) {
            $file = $request['image'];
            $imagenewname = uniqid($user_id) . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('assets/img/recipe/'), $imagenewname);

            $filepath = 'assets/img/recipe/' . $imagenewname;
            $validatedData['image'] = $filepath;


        }

        $recipe->update($validatedData);

        return response()->json([
            'status' => true,
            'message' => 'Recipe updated successfully',
            'data' => new RecipeResource($recipe)
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();
        return response()->json([
            'status' => true,
            'message' => 'Recipe Deleted successfully'
        ], 204);
    }

}
