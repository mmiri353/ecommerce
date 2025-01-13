<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Specify the table name (optional if the table name matches the model name)
    protected $table = 'products';

    // Specify the columns you want to be mass-assignable
    protected $fillable = ['name', 'price'];
}
