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
        'method',
        'user_id'
    ];
}
