<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\Http\Resources\Product as ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        return Product::latest()->paginate(10);
    }

    public function items()
    {
        return Product::latest()->paginate(30);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:60',
            'category' => 'required|string',
            'description' => 'required|string|max:191',
            'price' => 'required|integer|min:5',
            'amount' => 'required|integer|min:5',
            'color' => 'required|string',
            'frame_material' => 'required|string',
            'speed' => 'required|string',
            'wheel_size' => 'required|string',
            'wheel_spec' => 'required|string',
        ]);
        $exploded  = explode(',', $request->image);  // your base64 encoded
        $decoded = base64_decode($exploded[1]);
        if(str_contains($exploded[0],'jpeg'))
            $extension = 'jpg';
        else
            $extension = 'png';
        $fileName = str_random().'.'.$extension;
        $path = public_path().'/img/products/'.$fileName;
        file_put_contents($path, $decoded);

        return Product::create([
            'name' => $request['name'],
            'category' => $request['category'],
            'description' => $request['description'],
            'price' => $request['price'],
            'image' => $fileName,
            'details' => $request['details'],
            'amount' => $request['amount'],
            'color' => $request['color'],
            'frame_material' => $request['frame_material'],
            'speed' => $request['speed'],
            'wheel_size' => $request['wheel_size'],
            'wheel_spec' => $request['wheel_spec']
        ]);
    }

    public function showNew() {
        return Product::latest()->paginate(5);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        $productName = str_slug($product->name, '-');
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        $product = Product::findOrFail($id);
        $this->validate($request, [
            'name' => 'required|string|max:60',
            'category' => 'required|string',
            'description' => 'required|string|max:191',
            'price' => 'required|integer|min:5',
            'amount' => 'required|integer|min:5',
            'color' => 'required|string',
            'frame_material' => 'required|string',
            'speed' => 'required|string',
            'wheel_size' => 'required|string',
            'wheel_spec' => 'required|string',
        ]);

        $exploded  = explode(',', $request->image);  // your base64 encoded
        $decoded = base64_decode($exploded[1]);
        if(str_contains($exploded[0],'jpeg'))
            $extension = 'jpg';
        else
            $extension = 'png';
        $fileName = str_random().'.'.$extension;
        $path = public_path().'/img/products/'.$fileName;
        file_put_contents($path, $decoded);

        $request->merge(['image' => $fileName]);

        $product->update($request->all());
        return ['message' => 'Update the product info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return ['message' => 'Product deleted'];
    }
}
