<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'category' => $this->category,
            'description' => $this->description,
            'price' => $this->price,
            'amount' => $this->amount,
            'created_at' => $this->created_at,
            'color' => $this->color,
            'frame_material' => $this->frame_material,
            'speed' => $this->speed,
            'wheel_size' => $this->wheel_size,
            'wheel_spec' => $this->wheel_spec,
        ];
    }
}
