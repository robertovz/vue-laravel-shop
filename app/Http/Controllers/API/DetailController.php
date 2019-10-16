<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rating;
use App\Product;
use App\Http\Resources\Rating as RatingResource;

class DetailController extends Controller
{

    public function store(Request $request) {
        $this->validate($request, [
            'rating' => 'required|numeric|min:1',
            'short_description' => 'required|string|min:4',
            'comment' => 'required|string|min:5',
        ]);
        return new RatingResource(Rating::create([
            'product_id' => $request->get('product_id'),
            'user_id' => $request->get('user'),
            'user_name' => $request->get('name'),
            'rating' => $request->get('rating'),
            'short_description' => $request->get('short_description'),
            'comment' => $request->get('comment')
        ]));
    }

    public function show($id) {
        return RatingResource::collection(Rating::where('product_id', $id)->latest()->paginate(5));
    }

    public function category(Request $request) {
        $category = $request->get('q');
        return Product::where('category', 'like', '%'.$category.'%')->latest()->get();
    }

    public function search(Request $request) {
        $search = $request->get('q');
        return Product::where('name', 'like', '%'.$search.'%')->latest()->get();
    }

    
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update(
            $request->only(['total_rating'])
        );

        return ['message' => 'Rating updated!'];
    }

    public function destroy($id)
    {
        $product = Rating::findOrFail($id);
        $product->delete();

        return ['message' => 'Product deleted'];
    }
    
}
