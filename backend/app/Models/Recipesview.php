<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipesview extends Model
{
    use HasFactory;
    protected $table = "recipesviews";
    protected $primaryKey = "id";
    protected $fillable = [
        'pageurl',
        'counter'
    ];
}
