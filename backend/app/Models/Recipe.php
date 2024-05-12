<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    protected $table = 'recipes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'image',
        'name',
        'category_id',
        'time',
        'time_unit',
        'numberofpeople',
        'ingredients',
        'instructions',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopesearch($query)
    {
        if ($getname = request('search_name')) {
            $query->where('name', 'LIKE', '%' . $getname . '%')
                ->orWhereHas('category', function ($query) use ($getname) {
                    $query->where('name', 'LIKE', '%' . $getname . '%');
                });
        }

        return $query;
    }

}
