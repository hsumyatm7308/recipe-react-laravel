<?php

namespace App\Http\Resources;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [

            'info' => [
                'id' => $this->id,
                'name' => $this->name,
                'image' => $this->image,
                'created_at' => $this->created_at->format("d m Y"),
                'updated_at' => $this->updated_at->format("d m Y"),
            ],

            'categories' => [
                'category_id' => $this->category_id,
                'category_name' => $this->category->name,
            ],

            'facts' => [
                'time' => $this->time,
                'time_unit' => $this->time_unit,
                'numberofpeople' => $this->numberofpeople,
            ],

            'cooking' => [
                'ingredients' => json_decode($this->ingredients),
                'instructions' => json_decode($this->instructions),
            ],

            'user' => [
                'user_id' => $this->user->id,
                'user_name' => $this->user->name,
                'user_image' => $this->user->image
            ],

            'addition' => [
                'like_count' => $this->likes->count()
            ]


        ];


    }
}
