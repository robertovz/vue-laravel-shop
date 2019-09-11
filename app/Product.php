<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'category', 'description', 'price', 'image', 'amount', 'color', 'frame_material', 
        'speed', 'wheel_size', 'wheel_spec'
    ];
    
    public function orders() {
        return $this->hasMany(Order::class);
    }
}
