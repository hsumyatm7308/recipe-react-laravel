<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Recipesview;

class RecipesViewMid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $getpageurl = $request->url();

        // Check if the URL matches the pattern
        if (preg_match('/http:\/\/127\.0\.0\.1:8000\/api\/home\/\d+/', $getpageurl)) {
            $pageview = Recipesview::firstOrCreate(['pageurl' => $getpageurl]);
            $pageview->increment('counter');
        }

        return $next($request);
    }
}
