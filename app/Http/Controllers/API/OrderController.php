<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;
use App\Product;
use App\Http\Resources\Order as OrderResource;

class OrderController extends Controller
{

    public function index() {
        return Order::latest()->paginate(10);
    }

    public function store(Request $request) {
        return new OrderResource(Order::create([
            'product_id' => $request->get('product_id'),
            'user_id' => $request->get('user_id'),
            'amount' => $request->get('amount'),
            'total' => $request->get('total'),
            'address' => $request->get('address')
        ]));
    }

    public function deliverOrder(Order $order) {
        $order->is_delivered = true;
        $status = $order->save();

        return response()->json([
            'status' => $status,
            'data' => $order,
            'message' => $status ? 'Order is delivered!' : 'Error Delivering Order'
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update(
            $request->only(['amount'])
        );

        return ['message' => 'Order placed!'];
    }

    public function updateAmount(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update(
            $request->only(['amount'])
        );

        return ['message' => 'Order placed!'];
    }

    public function destroy(Order $order)
    {
        $status = $order->delete();
        
        return ['message' => 'Order deleted!'];
    }

    public function count() {
        return Order::sortBy(function ($sale) {
            return $sale->product_id->count();
         }, SORT_REGULAR, true)->take(1)->get();
    }

    public function showOrders(Request $request) {
        $user = $request->get('q');
        return Order::where('user_id', 'like', '%'.$user.'%')->get();
    }

}
