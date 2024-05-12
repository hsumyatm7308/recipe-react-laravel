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
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'category_id' => $this->category_id,
            'category_name' => $this->category->name,
            'time' => $this->time,
            'time_unit' => $this->time_unit,
            'numberofpeople' => $this->numberofpeople,
            'ingredients' => json_decode($this->ingredients),
            'instructions' => json_decode($this->instructions),
            'user_id' => $this->user_id,
            'created_at' => $this->created_at->format("d m Y"),
            'updated_at' => $this->updated_at->format("d m Y"),

        ];


    }
}
