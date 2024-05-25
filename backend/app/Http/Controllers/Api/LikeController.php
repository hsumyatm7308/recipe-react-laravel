<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function like(Recipe $recipe)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $user->likes()->attach($recipe);

        return response()->json([
            'message' => 'You liked this post.'
        ]);
    }

    public function unlike(Recipe $recipe)
    {

        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $user->likes()->detach($recipe);

        return response()->json([
            'message' => 'You unliked this post.'
        ]);
    }
}
