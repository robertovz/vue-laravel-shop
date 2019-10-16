<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('category');
            $table->text('description');
            $table->string('image')->default('products.png');
            $table->integer('price');
            $table->integer('amount')->default(0);
            $table->string('color');
            $table->string('frame_material');
            $table->string('speed');
            $table->string('wheel_size');
            $table->string('wheel_spec');
            $table->double('total_rating')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
